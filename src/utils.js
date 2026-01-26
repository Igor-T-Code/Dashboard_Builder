/**
 * Utility Functions
 * =================
 * Common helper functions for the Dashboard Builder
 */

/**
 * Sanitize HTML to prevent XSS
 */
function sanitizeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Sanitize for use in HTML attributes
 */
function sanitizeAttribute(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Deep clone an object
 */
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Generate unique ID
 */
function generateId() {
    return Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

/**
 * Debounce function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function calls
 */
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Format date for display
 */
function formatDate(date) {
    if (!date) date = new Date();
    if (typeof date === 'string') date = new Date(date);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

/**
 * Format date and time
 */
function formatDateTime(date) {
    if (!date) date = new Date();
    if (typeof date === 'string') date = new Date(date);

    const dateStr = formatDate(date);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${dateStr} ${hours}:${minutes}`;
}

/**
 * Download data as file
 */
function downloadFile(data, filename, type = 'application/json') {
    const blob = new Blob([data], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Read file as text
 */
function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
    });
}

/**
 * Parse JSON safely
 */
function parseJSON(str, defaultValue = null) {
    try {
        return JSON.parse(str);
    } catch (e) {
        console.error('JSON parse error:', e);
        return defaultValue;
    }
}

/**
 * Check if point is inside rectangle
 */
function pointInRect(px, py, rx, ry, rw, rh) {
    return px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
}

/**
 * Check if two rectangles overlap
 */
function rectsOverlap(r1, r2) {
    return !(
        r1.x + r1.width < r2.x ||
        r2.x + r2.width < r1.x ||
        r1.y + r1.height < r2.y ||
        r2.y + r2.height < r1.y
    );
}

/**
 * Clamp a value between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation
 */
function lerp(start, end, t) {
    return start + (end - start) * t;
}

/**
 * Get element position relative to document
 */
function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
    };
}

/**
 * Truncate string with ellipsis
 */
function truncate(str, maxLength) {
    if (!str || str.length <= maxLength) return str;
    return str.substring(0, maxLength - 3) + '...';
}

/**
 * Capitalize first letter
 */
function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert string to kebab-case
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

/**
 * Convert string to camelCase
 */
function toCamelCase(str) {
    return str
        .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^(.)/, c => c.toLowerCase());
}

/**
 * Group array items by key
 */
function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const value = typeof key === 'function' ? key(item) : item[key];
        (groups[value] = groups[value] || []).push(item);
        return groups;
    }, {});
}

/**
 * Remove duplicates from array
 */
function unique(array, key) {
    if (!key) return [...new Set(array)];

    const seen = new Set();
    return array.filter(item => {
        const value = typeof key === 'function' ? key(item) : item[key];
        if (seen.has(value)) return false;
        seen.add(value);
        return true;
    });
}

/**
 * Sort array by key
 */
function sortBy(array, key, direction = 'asc') {
    const sorted = [...array].sort((a, b) => {
        const aVal = typeof key === 'function' ? key(a) : a[key];
        const bVal = typeof key === 'function' ? key(b) : b[key];

        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    });

    return direction === 'desc' ? sorted.reverse() : sorted;
}

/**
 * Create toast notification
 */
function showToast(message, type = 'info', duration = 3000) {
    // Remove existing toasts
    document.querySelectorAll('.toast-notification').forEach(t => t.remove());

    const colors = {
        info: '#666',
        success: '#0DA20D',
        warning: '#F59E0B',
        error: '#EB0D3F'
    };

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${colors[type] || colors.info};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: toastIn 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Add toast animations
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes toastOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(toastStyles);

/**
 * Confirm dialog with promise
 */
function confirmDialog(message, title = 'Bestaetigung') {
    return new Promise((resolve) => {
        // Use native confirm for now, could be replaced with custom modal
        resolve(confirm(message));
    });
}

/**
 * Log with timestamp
 */
function log(message, ...args) {
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    console.log(`[${timestamp}]`, message, ...args);
}

// Export for use
if (typeof window !== 'undefined') {
    window.sanitizeHTML = sanitizeHTML;
    window.sanitizeAttribute = sanitizeAttribute;
    window.deepClone = deepClone;
    window.generateId = generateId;
    window.debounce = debounce;
    window.throttle = throttle;
    window.formatDate = formatDate;
    window.formatDateTime = formatDateTime;
    window.downloadFile = downloadFile;
    window.readFileAsText = readFileAsText;
    window.parseJSON = parseJSON;
    window.pointInRect = pointInRect;
    window.rectsOverlap = rectsOverlap;
    window.clamp = clamp;
    window.lerp = lerp;
    window.getElementPosition = getElementPosition;
    window.truncate = truncate;
    window.capitalize = capitalize;
    window.toKebabCase = toKebabCase;
    window.toCamelCase = toCamelCase;
    window.groupBy = groupBy;
    window.unique = unique;
    window.sortBy = sortBy;
    window.showToast = showToast;
    window.confirmDialog = confirmDialog;
    window.log = log;
}

console.log('🔧 Utility functions loaded');
