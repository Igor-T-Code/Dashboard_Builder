/**
 * State Manager with Undo/Redo System
 * ====================================
 * Manages application state with command pattern for undo/redo
 */

class StateManager {
    constructor() {
        this.history = [];
        this.future = [];
        this.maxHistory = 50;
        this.listeners = [];
        this.saveTimeout = null;
    }

    /**
     * Execute a command and add to history
     */
    execute(command) {
        // Execute the command
        command.execute();

        // Add to history
        this.history.push(command);

        // Clear future (can't redo after new action)
        this.future = [];

        // Limit history size
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        }

        // Notify listeners
        this.notifyListeners('execute', command);

        // Schedule save
        this.scheduleSave();
    }

    /**
     * Undo last command
     */
    undo() {
        if (this.history.length === 0) {
            console.log('Nothing to undo');
            return false;
        }

        const command = this.history.pop();
        command.undo();
        this.future.push(command);

        this.notifyListeners('undo', command);
        this.scheduleSave();

        return true;
    }

    /**
     * Redo last undone command
     */
    redo() {
        if (this.future.length === 0) {
            console.log('Nothing to redo');
            return false;
        }

        const command = this.future.pop();
        command.execute();
        this.history.push(command);

        this.notifyListeners('redo', command);
        this.scheduleSave();

        return true;
    }

    /**
     * Check if undo is available
     */
    canUndo() {
        return this.history.length > 0;
    }

    /**
     * Check if redo is available
     */
    canRedo() {
        return this.future.length > 0;
    }

    /**
     * Add state change listener
     */
    addListener(callback) {
        this.listeners.push(callback);
    }

    /**
     * Remove state change listener
     */
    removeListener(callback) {
        this.listeners = this.listeners.filter(l => l !== callback);
    }

    /**
     * Notify all listeners
     */
    notifyListeners(action, command) {
        this.listeners.forEach(listener => {
            try {
                listener(action, command);
            } catch (e) {
                console.error('Listener error:', e);
            }
        });
    }

    /**
     * Schedule save to localStorage
     */
    scheduleSave() {
        if (this.saveTimeout) {
            clearTimeout(this.saveTimeout);
        }
        this.saveTimeout = setTimeout(() => {
            this.saveToStorage();
        }, 500);
    }

    /**
     * Save state to localStorage
     */
    saveToStorage() {
        try {
            if (typeof state !== 'undefined') {
                localStorage.setItem('audi_dataplatform_builder', JSON.stringify(state));
            }
        } catch (e) {
            console.error('Failed to save state:', e);
        }
    }

    /**
     * Clear all history
     */
    clearHistory() {
        this.history = [];
        this.future = [];
    }

    /**
     * Get history info for debugging
     */
    getHistoryInfo() {
        return {
            historyLength: this.history.length,
            futureLength: this.future.length,
            canUndo: this.canUndo(),
            canRedo: this.canRedo()
        };
    }
}

// ============== COMMAND CLASSES ==============

/**
 * Base Command class
 */
class Command {
    constructor(description) {
        this.description = description;
        this.timestamp = Date.now();
    }

    execute() {
        throw new Error('execute() must be implemented');
    }

    undo() {
        throw new Error('undo() must be implemented');
    }
}

/**
 * Add Element Command
 */
class AddElementCommand extends Command {
    constructor(useCase, element) {
        super(`Add ${element.type}: ${element.name || element.blockName || 'Element'}`);
        this.useCase = useCase;
        this.element = JSON.parse(JSON.stringify(element)); // Deep clone
    }

    execute() {
        if (!this.useCase.elements) {
            this.useCase.elements = [];
        }
        this.useCase.elements.push(JSON.parse(JSON.stringify(this.element)));
    }

    undo() {
        this.useCase.elements = this.useCase.elements.filter(e => e.id !== this.element.id);
    }
}

/**
 * Remove Element Command
 */
class RemoveElementCommand extends Command {
    constructor(useCase, elementId) {
        const element = useCase.elements.find(e => e.id === elementId);
        super(`Remove ${element?.type || 'Element'}: ${element?.name || element?.blockName || 'Element'}`);
        this.useCase = useCase;
        this.elementId = elementId;
        this.element = element ? JSON.parse(JSON.stringify(element)) : null;
        this.removedConnections = [];
    }

    execute() {
        // Store connections that will be removed
        this.removedConnections = (this.useCase.connections || [])
            .filter(c => c.from === this.elementId || c.to === this.elementId)
            .map(c => JSON.parse(JSON.stringify(c)));

        // Remove element
        this.useCase.elements = this.useCase.elements.filter(e => e.id !== this.elementId);

        // Remove connections
        this.useCase.connections = (this.useCase.connections || [])
            .filter(c => c.from !== this.elementId && c.to !== this.elementId);
    }

    undo() {
        if (this.element) {
            this.useCase.elements.push(JSON.parse(JSON.stringify(this.element)));
        }
        // Restore connections
        this.removedConnections.forEach(c => {
            this.useCase.connections.push(JSON.parse(JSON.stringify(c)));
        });
    }
}

/**
 * Move Element Command
 */
class MoveElementCommand extends Command {
    constructor(useCase, elementId, fromPos, toPos) {
        super(`Move element`);
        this.useCase = useCase;
        this.elementId = elementId;
        this.fromPos = { ...fromPos };
        this.toPos = { ...toPos };
    }

    execute() {
        const element = this.useCase.elements.find(e => e.id === this.elementId);
        if (element) {
            element.x = this.toPos.x;
            element.y = this.toPos.y;
        }
    }

    undo() {
        const element = this.useCase.elements.find(e => e.id === this.elementId);
        if (element) {
            element.x = this.fromPos.x;
            element.y = this.fromPos.y;
        }
    }
}

/**
 * Resize Element Command
 */
class ResizeElementCommand extends Command {
    constructor(useCase, elementId, fromSize, toSize) {
        super(`Resize element`);
        this.useCase = useCase;
        this.elementId = elementId;
        this.fromSize = { ...fromSize };
        this.toSize = { ...toSize };
    }

    execute() {
        const element = this.useCase.elements.find(e => e.id === this.elementId);
        if (element) {
            element.width = this.toSize.width;
            element.height = this.toSize.height;
        }
    }

    undo() {
        const element = this.useCase.elements.find(e => e.id === this.elementId);
        if (element) {
            element.width = this.fromSize.width;
            element.height = this.fromSize.height;
        }
    }
}

/**
 * Add Connection Command
 */
class AddConnectionCommand extends Command {
    constructor(useCase, connection) {
        super(`Add connection`);
        this.useCase = useCase;
        this.connection = JSON.parse(JSON.stringify(connection));
    }

    execute() {
        if (!this.useCase.connections) {
            this.useCase.connections = [];
        }
        this.useCase.connections.push(JSON.parse(JSON.stringify(this.connection)));
    }

    undo() {
        this.useCase.connections = this.useCase.connections.filter(
            c => c.id !== this.connection.id
        );
    }
}

/**
 * Remove Connection Command
 */
class RemoveConnectionCommand extends Command {
    constructor(useCase, connectionId) {
        super(`Remove connection`);
        this.useCase = useCase;
        this.connectionId = connectionId;
        this.connection = useCase.connections?.find(c => c.id === connectionId);
    }

    execute() {
        this.useCase.connections = (this.useCase.connections || [])
            .filter(c => c.id !== this.connectionId);
    }

    undo() {
        if (this.connection) {
            this.useCase.connections.push(JSON.parse(JSON.stringify(this.connection)));
        }
    }
}

/**
 * Update Element Property Command
 */
class UpdateElementCommand extends Command {
    constructor(useCase, elementId, property, oldValue, newValue) {
        super(`Update ${property}`);
        this.useCase = useCase;
        this.elementId = elementId;
        this.property = property;
        this.oldValue = oldValue;
        this.newValue = newValue;
    }

    execute() {
        const element = this.useCase.elements.find(e => e.id === this.elementId);
        if (element) {
            element[this.property] = this.newValue;
        }
    }

    undo() {
        const element = this.useCase.elements.find(e => e.id === this.elementId);
        if (element) {
            element[this.property] = this.oldValue;
        }
    }
}

/**
 * Batch Command - groups multiple commands
 */
class BatchCommand extends Command {
    constructor(commands, description) {
        super(description || `Batch: ${commands.length} actions`);
        this.commands = commands;
    }

    execute() {
        this.commands.forEach(cmd => cmd.execute());
    }

    undo() {
        // Undo in reverse order
        for (let i = this.commands.length - 1; i >= 0; i--) {
            this.commands[i].undo();
        }
    }
}

// ============== GLOBAL INSTANCE ==============

const stateManager = new StateManager();

// ============== KEYBOARD SHORTCUTS ==============

document.addEventListener('keydown', (e) => {
    // Ctrl+Z / Cmd+Z = Undo
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        if (stateManager.undo()) {
            if (typeof renderCanvas === 'function') renderCanvas();
            if (typeof renderPhases === 'function') renderPhases();
            showUndoNotification('Undo');
        }
    }

    // Ctrl+Y / Cmd+Shift+Z = Redo
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        if (stateManager.redo()) {
            if (typeof renderCanvas === 'function') renderCanvas();
            if (typeof renderPhases === 'function') renderPhases();
            showUndoNotification('Redo');
        }
    }
});

/**
 * Show undo/redo notification
 */
function showUndoNotification(action) {
    // Remove existing notification
    const existing = document.querySelector('.undo-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'undo-notification';
    notification.textContent = action;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: white;
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 500;
        z-index: 9999;
        animation: fadeInOut 1.5s ease-in-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 1500);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        20% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
    }
`;
document.head.appendChild(style);

// Export for use
if (typeof window !== 'undefined') {
    window.stateManager = stateManager;
    window.Command = Command;
    window.AddElementCommand = AddElementCommand;
    window.RemoveElementCommand = RemoveElementCommand;
    window.MoveElementCommand = MoveElementCommand;
    window.ResizeElementCommand = ResizeElementCommand;
    window.AddConnectionCommand = AddConnectionCommand;
    window.RemoveConnectionCommand = RemoveConnectionCommand;
    window.UpdateElementCommand = UpdateElementCommand;
    window.BatchCommand = BatchCommand;
}

console.log('📝 State Manager with Undo/Redo loaded');
console.log('   Shortcuts: Ctrl+Z (Undo), Ctrl+Y or Ctrl+Shift+Z (Redo)');
