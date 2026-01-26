/**
 * Use Case Validation Engine
 * ==========================
 * Validates use cases for consistency, completeness, and correctness
 */

class UseCaseValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.componentLibrary = null;
    }

    /**
     * Set component library for block name validation
     */
    setComponentLibrary(library) {
        this.componentLibrary = library;
    }

    /**
     * Get all valid block names from component library
     */
    getValidBlockNames() {
        if (!this.componentLibrary) return [];

        const names = [];
        for (const category of Object.values(this.componentLibrary)) {
            if (category.components) {
                category.components.forEach(c => {
                    names.push(c.name);
                    if (c.shortName) names.push(c.shortName);
                });
            }
        }
        return names;
    }

    /**
     * Validate a complete use case
     */
    validate(useCase, options = {}) {
        this.errors = [];
        this.warnings = [];

        if (!useCase) {
            this.errors.push({ type: 'critical', message: 'Use Case ist leer oder undefined' });
            return this.getResult();
        }

        // Basic validation
        this.validateBasicFields(useCase);

        // Elements validation
        this.validateElements(useCase);

        // Connections validation
        this.validateConnections(useCase);

        // Block names validation (if library available)
        if (this.componentLibrary) {
            this.validateBlockNames(useCase);
        }

        // Layout validation
        if (options.validateLayout !== false) {
            this.validateLayout(useCase);
        }

        return this.getResult();
    }

    /**
     * Validate basic use case fields
     */
    validateBasicFields(useCase) {
        if (!useCase.name || useCase.name.trim() === '') {
            this.errors.push({
                type: 'field',
                field: 'name',
                message: 'Use Case Name ist erforderlich'
            });
        }

        if (!useCase.phaseId) {
            this.warnings.push({
                type: 'field',
                field: 'phaseId',
                message: 'Keine Phase zugewiesen'
            });
        }

        if (!useCase.description || useCase.description.trim() === '') {
            this.warnings.push({
                type: 'field',
                field: 'description',
                message: 'Beschreibung fehlt'
            });
        }

        if (!useCase.businessValue || useCase.businessValue.trim() === '') {
            this.warnings.push({
                type: 'field',
                field: 'businessValue',
                message: 'Business Value nicht definiert'
            });
        }

        if (!useCase.owner || useCase.owner.trim() === '') {
            this.warnings.push({
                type: 'field',
                field: 'owner',
                message: 'Kein Owner zugewiesen'
            });
        }
    }

    /**
     * Validate elements array
     */
    validateElements(useCase) {
        if (!useCase.elements || !Array.isArray(useCase.elements)) {
            this.warnings.push({
                type: 'elements',
                message: 'Keine Elemente vorhanden'
            });
            return;
        }

        const elementIds = new Set();
        const blocks = useCase.elements.filter(e => e.type !== 'container');
        const containers = useCase.elements.filter(e => e.type === 'container');

        useCase.elements.forEach((element, index) => {
            // Check for duplicate IDs
            if (element.id !== undefined) {
                if (elementIds.has(element.id)) {
                    this.errors.push({
                        type: 'element',
                        index: index,
                        message: `Doppelte Element-ID: ${element.id}`
                    });
                }
                elementIds.add(element.id);
            }

            // Validate element type
            if (!element.type) {
                this.errors.push({
                    type: 'element',
                    index: index,
                    message: `Element ${index} hat keinen Typ`
                });
            }

            // Validate position
            if (element.x === undefined || element.y === undefined) {
                this.errors.push({
                    type: 'element',
                    index: index,
                    message: `Element ${index} hat keine Position (x/y)`
                });
            }

            // Validate container specific fields
            if (element.type === 'container') {
                if (!element.name) {
                    this.warnings.push({
                        type: 'element',
                        index: index,
                        message: `Container ${index} hat keinen Namen`
                    });
                }
                if (!element.width || !element.height) {
                    this.errors.push({
                        type: 'element',
                        index: index,
                        message: `Container ${index} hat keine Groesse (width/height)`
                    });
                }
            }

            // Validate block specific fields
            if (element.type === 'block' || element.type !== 'container') {
                if (!element.blockName && !element.blockId) {
                    this.errors.push({
                        type: 'element',
                        index: index,
                        message: `Block ${index} hat keinen blockName oder blockId`
                    });
                }
            }
        });

        // Check for orphan blocks (blocks outside any container)
        blocks.forEach((block, idx) => {
            const isInsideContainer = containers.some(c =>
                block.x >= c.x &&
                block.x <= c.x + (c.width || 0) &&
                block.y >= c.y &&
                block.y <= c.y + (c.height || 0)
            );
            if (!isInsideContainer && containers.length > 0) {
                this.warnings.push({
                    type: 'layout',
                    blockIndex: idx,
                    blockName: block.blockName,
                    message: `Block "${block.blockName || idx}" liegt ausserhalb aller Container`
                });
            }
        });
    }

    /**
     * Validate connections
     */
    validateConnections(useCase) {
        if (!useCase.connections || !Array.isArray(useCase.connections)) {
            return;
        }

        const elementCount = useCase.elements?.length || 0;
        const connectionIds = new Set();

        useCase.connections.forEach((connection, index) => {
            // Check for duplicate connection IDs
            if (connection.id !== undefined) {
                if (connectionIds.has(connection.id)) {
                    this.errors.push({
                        type: 'connection',
                        index: index,
                        message: `Doppelte Connection-ID: ${connection.id}`
                    });
                }
                connectionIds.add(connection.id);
            }

            // Validate fromIndex
            const fromIndex = connection.fromIndex ?? connection.from;
            if (fromIndex === undefined) {
                this.errors.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index} hat keinen fromIndex/from`
                });
            } else if (fromIndex < 0 || fromIndex >= elementCount) {
                this.errors.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index}: fromIndex ${fromIndex} ist ungueltig (max: ${elementCount - 1})`
                });
            }

            // Validate toIndex
            const toIndex = connection.toIndex ?? connection.to;
            if (toIndex === undefined) {
                this.errors.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index} hat keinen toIndex/to`
                });
            } else if (toIndex < 0 || toIndex >= elementCount) {
                this.errors.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index}: toIndex ${toIndex} ist ungueltig (max: ${elementCount - 1})`
                });
            }

            // Check self-reference
            if (fromIndex === toIndex) {
                this.errors.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index}: Element kann nicht mit sich selbst verbunden sein`
                });
            }

            // Validate anchors
            const validAnchors = ['top', 'bottom', 'left', 'right'];
            if (connection.fromAnchor && !validAnchors.includes(connection.fromAnchor)) {
                this.warnings.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index}: Ungueltiger fromAnchor "${connection.fromAnchor}"`
                });
            }
            if (connection.toAnchor && !validAnchors.includes(connection.toAnchor)) {
                this.warnings.push({
                    type: 'connection',
                    index: index,
                    message: `Connection ${index}: Ungueltiger toAnchor "${connection.toAnchor}"`
                });
            }
        });

        // Check for duplicate connections (same from-to pair)
        const connectionPairs = new Set();
        useCase.connections.forEach((connection, index) => {
            const fromIndex = connection.fromIndex ?? connection.from;
            const toIndex = connection.toIndex ?? connection.to;
            const pair = `${fromIndex}-${toIndex}`;
            const reversePair = `${toIndex}-${fromIndex}`;

            if (connectionPairs.has(pair)) {
                this.warnings.push({
                    type: 'connection',
                    index: index,
                    message: `Doppelte Verbindung zwischen Element ${fromIndex} und ${toIndex}`
                });
            }
            connectionPairs.add(pair);
        });
    }

    /**
     * Validate block names against component library
     */
    validateBlockNames(useCase) {
        if (!useCase.elements) return;

        const validNames = this.getValidBlockNames();
        const validNamesLower = validNames.map(n => n.toLowerCase());

        useCase.elements.forEach((element, index) => {
            if (element.type === 'container') return;

            const blockName = element.blockName;
            if (!blockName) return;

            // Check exact match
            if (!validNames.includes(blockName)) {
                // Check case-insensitive match
                const lowerName = blockName.toLowerCase();
                const matchIndex = validNamesLower.indexOf(lowerName);

                if (matchIndex >= 0) {
                    this.warnings.push({
                        type: 'blockName',
                        index: index,
                        blockName: blockName,
                        suggestion: validNames[matchIndex],
                        message: `Block "${blockName}" - Schreibweise korrigieren zu "${validNames[matchIndex]}"`
                    });
                } else {
                    // Try to find similar names
                    const similar = this.findSimilarNames(blockName, validNames);
                    if (similar.length > 0) {
                        this.errors.push({
                            type: 'blockName',
                            index: index,
                            blockName: blockName,
                            suggestions: similar,
                            message: `Block "${blockName}" existiert nicht in der Bibliothek. Meinten Sie: ${similar.join(', ')}?`
                        });
                    } else {
                        this.errors.push({
                            type: 'blockName',
                            index: index,
                            blockName: blockName,
                            message: `Block "${blockName}" existiert nicht in der Komponenten-Bibliothek`
                        });
                    }
                }
            }
        });
    }

    /**
     * Find similar block names using Levenshtein distance
     */
    findSimilarNames(name, validNames, maxDistance = 5) {
        const similar = [];
        const nameLower = name.toLowerCase();

        validNames.forEach(validName => {
            const distance = this.levenshteinDistance(nameLower, validName.toLowerCase());
            if (distance <= maxDistance) {
                similar.push({ name: validName, distance });
            }
        });

        return similar
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 3)
            .map(s => s.name);
    }

    /**
     * Calculate Levenshtein distance between two strings
     */
    levenshteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],     // deletion
                        dp[i][j - 1],     // insertion
                        dp[i - 1][j - 1]  // substitution
                    );
                }
            }
        }

        return dp[m][n];
    }

    /**
     * Validate layout (overlapping, out of bounds, etc.)
     */
    validateLayout(useCase) {
        if (!useCase.elements) return;

        const blocks = useCase.elements.filter(e => e.type !== 'container');

        // Check for overlapping blocks
        for (let i = 0; i < blocks.length; i++) {
            for (let j = i + 1; j < blocks.length; j++) {
                const b1 = blocks[i];
                const b2 = blocks[j];

                // Approximate block size (160x120)
                const blockWidth = 160;
                const blockHeight = 120;

                const overlap = !(
                    b1.x + blockWidth < b2.x ||
                    b2.x + blockWidth < b1.x ||
                    b1.y + blockHeight < b2.y ||
                    b2.y + blockHeight < b1.y
                );

                if (overlap) {
                    this.warnings.push({
                        type: 'layout',
                        message: `Bloecke "${b1.blockName || i}" und "${b2.blockName || j}" ueberlappen sich`
                    });
                }
            }
        }

        // Check for negative positions
        useCase.elements.forEach((element, index) => {
            if (element.x < 0 || element.y < 0) {
                this.warnings.push({
                    type: 'layout',
                    index: index,
                    message: `Element "${element.name || element.blockName || index}" hat negative Position`
                });
            }
        });
    }

    /**
     * Get validation result
     */
    getResult() {
        return {
            valid: this.errors.length === 0,
            errors: this.errors,
            warnings: this.warnings,
            errorCount: this.errors.length,
            warningCount: this.warnings.length,
            summary: this.getSummary()
        };
    }

    /**
     * Get human-readable summary
     */
    getSummary() {
        if (this.errors.length === 0 && this.warnings.length === 0) {
            return 'Use Case ist valide';
        }

        const parts = [];
        if (this.errors.length > 0) {
            parts.push(`${this.errors.length} Fehler`);
        }
        if (this.warnings.length > 0) {
            parts.push(`${this.warnings.length} Warnungen`);
        }

        return parts.join(', ');
    }
}

/**
 * Validate JSON import data
 */
function validateImportData(data) {
    const errors = [];
    const warnings = [];

    if (!data) {
        errors.push('Daten sind leer');
        return { valid: false, errors, warnings };
    }

    if (data.exportType !== 'usecases') {
        warnings.push(`Unerwarteter exportType: ${data.exportType}`);
    }

    if (!data.useCases || !Array.isArray(data.useCases)) {
        errors.push('useCases Array fehlt oder ist ungueltig');
        return { valid: false, errors, warnings };
    }

    if (data.useCases.length === 0) {
        warnings.push('Keine Use Cases in der Datei');
    }

    // Validate each use case
    const validator = new UseCaseValidator();
    if (typeof AUTOMOTIVE_COMPONENTS !== 'undefined') {
        validator.setComponentLibrary(AUTOMOTIVE_COMPONENTS);
    }

    data.useCases.forEach((uc, index) => {
        const result = validator.validate(uc);
        if (!result.valid) {
            errors.push(`Use Case ${index + 1} "${uc.name || 'Unbenannt'}": ${result.errors.map(e => e.message).join('; ')}`);
        }
        if (result.warningCount > 0) {
            warnings.push(`Use Case ${index + 1} "${uc.name || 'Unbenannt'}": ${result.warnings.map(w => w.message).join('; ')}`);
        }
    });

    // Validate newBlocks if present
    if (data.newBlocks && Array.isArray(data.newBlocks)) {
        data.newBlocks.forEach((block, index) => {
            if (!block.name) {
                errors.push(`newBlocks[${index}]: Name fehlt`);
            }
            if (!block.category) {
                warnings.push(`newBlocks[${index}] "${block.name || 'Unbenannt'}": Kategorie fehlt`);
            }
        });
    }

    return {
        valid: errors.length === 0,
        errors,
        warnings,
        summary: errors.length === 0
            ? (warnings.length > 0 ? `Valide mit ${warnings.length} Warnungen` : 'Valide')
            : `${errors.length} Fehler gefunden`
    };
}

/**
 * Show validation result in UI
 */
function showValidationResult(result, title = 'Validierung') {
    let html = `<h3>${title}</h3>`;

    if (result.valid) {
        html += `<p style="color: green;">✓ ${result.summary}</p>`;
    } else {
        html += `<p style="color: red;">✗ ${result.summary}</p>`;
    }

    if (result.errors.length > 0) {
        html += '<h4 style="color: red;">Fehler:</h4><ul>';
        result.errors.forEach(e => {
            const msg = typeof e === 'string' ? e : e.message;
            html += `<li>${msg}</li>`;
        });
        html += '</ul>';
    }

    if (result.warnings.length > 0) {
        html += '<h4 style="color: orange;">Warnungen:</h4><ul>';
        result.warnings.forEach(w => {
            const msg = typeof w === 'string' ? w : w.message;
            html += `<li>${msg}</li>`;
        });
        html += '</ul>';
    }

    // Create modal or alert
    if (typeof createValidationModal === 'function') {
        createValidationModal(html);
    } else {
        alert(result.summary + '\n\nDetails siehe Konsole.');
        console.log('Validation Result:', result);
    }
}

// ============== GLOBAL INSTANCE ==============

const useCaseValidator = new UseCaseValidator();

// Set component library if available
if (typeof AUTOMOTIVE_COMPONENTS !== 'undefined') {
    useCaseValidator.setComponentLibrary(AUTOMOTIVE_COMPONENTS);
}

// Export for use
if (typeof window !== 'undefined') {
    window.UseCaseValidator = UseCaseValidator;
    window.useCaseValidator = useCaseValidator;
    window.validateImportData = validateImportData;
    window.showValidationResult = showValidationResult;
}

console.log('✓ Validation Engine loaded');
