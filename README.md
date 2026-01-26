# Automotive Architecture Builder v2.0

Ein visueller Editor für die Planung und Dokumentation von Automotive Data Platform Architekturen.

## Features

- **Visueller Canvas Editor** - Drag & Drop für Komponenten und Container
- **Komponenten-Bibliothek** - 78+ vordefinierte Automotive-Komponenten
- **Use Case Management** - Organisiert nach Lifecycle-Phasen
- **Undo/Redo** - Änderungen rückgängig machen (Ctrl+Z / Ctrl+Y)
- **Validierung** - Automatische Prüfung von Use Cases
- **PDF Export** - Dokumentation als PDF exportieren
- **JSON Import/Export** - Use Cases teilen und wiederverwenden

## Quick Start

1. `index.html` im Browser öffnen (Chrome/Edge empfohlen)
2. Neue Phase erstellen oder vorhandene nutzen
3. Use Case erstellen
4. Komponenten aus der Bibliothek auf Canvas ziehen
5. Verbindungen zwischen Komponenten erstellen

## Tastenkürzel

| Kürzel | Aktion |
|--------|--------|
| `Ctrl+Z` / `Cmd+Z` | Undo (Rückgängig) |
| `Ctrl+Y` / `Cmd+Shift+Z` | Redo (Wiederholen) |
| `Delete` / `Backspace` | Element löschen |
| `Escape` | Modal schließen |
| Doppelklick | Element bearbeiten |
| Rechtsklick | Kontextmenü |

## Projektstruktur

```
Dashboard_Builder/
├── index.html              # Hauptanwendung
├── components-library.js   # Komponenten-Definitionen (78 Komponenten)
├── src/
│   ├── stateManager.js     # State Management + Undo/Redo
│   ├── validator.js        # Use Case Validierung
│   └── utils.js            # Hilfsfunktionen
├── data/
│   └── *.json              # Beispiel Use Cases
├── SKILL_USECASE_GENERATOR.md  # Claude AI Skill
└── README.md
```

## Komponenten-Kategorien

| Kategorie | Anzahl | Beschreibung |
|-----------|--------|--------------|
| FAHRZEUG-SYSTEME | 12 | ECUs, Zone Controller, BMS, ADAS |
| DATA INGESTION | 10 | IoT Hub, Kafka, CDC, Edge Gateway |
| DATA PLATFORM | 10 | Bronze/Silver/Gold Layer, Delta Lake |
| PROCESSING | 8 | Spark, Delta Live Tables, ETL |
| ML & AI | 10 | AutoML, Anomaly Detection, GenAI |
| BACKEND SERVICES | 10 | OTA, QMS, FMEA, 8D Process |
| FRONTENDS | 8 | Driver App, Fleet Dashboard |
| EXTERNAL | 8 | Weather, Traffic, Insurance APIs |

## JSON Import Format

```json
{
  "exportType": "usecases",
  "exportDate": "2026-01-26",
  "useCases": [
    {
      "name": "Use Case Name",
      "phaseId": 4,
      "description": "...",
      "businessValue": "...",
      "owner": "Team",
      "priority": "prio-1",
      "status": "draft",
      "elements": [
        { "type": "container", "name": "...", "x": 100, "y": 100, "width": 400, "height": 300 },
        { "type": "block", "blockName": "Central Vehicle Computer", "x": 200, "y": 200 }
      ],
      "connections": [
        { "fromIndex": 1, "fromAnchor": "right", "toIndex": 2, "toAnchor": "left" }
      ]
    }
  ],
  "newBlocks": []
}
```

## Validierung

Die Validierungs-Engine prüft automatisch:

- ✓ Pflichtfelder (Name, Description)
- ✓ Element-Positionen und IDs
- ✓ Verbindungs-Indizes
- ✓ Block-Namen gegen Komponenten-Bibliothek
- ✓ Layout (Überlappungen, Positionierung)

## Browser-Kompatibilität

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 100+ | ✓ Empfohlen |
| Edge | 100+ | ✓ Unterstützt |
| Firefox | 100+ | ✓ Unterstützt |
| Safari | 15+ | ⚠ Eingeschränkt |

## Entwicklung

### Neue Komponenten hinzufügen

In `components-library.js`:

```javascript
{
    id: "neue-komponente",
    name: "Neue Komponente",
    shortName: "NK",
    icon: "cpu",
    description: "Beschreibung...",
    requirements: [
        "Requirement 1",
        "Requirement 2"
    ]
}
```

### Undo/Redo Integration

```javascript
// Aktion mit Undo-Support
const command = new AddElementCommand(state.currentUseCase, element);
stateManager.execute(command);

// Manuell Undo/Redo
stateManager.undo();
stateManager.redo();
```

### Validierung nutzen

```javascript
// Use Case validieren
const result = useCaseValidator.validate(useCase);
if (!result.valid) {
    console.log('Fehler:', result.errors);
}

// Import-Daten validieren
const importResult = validateImportData(jsonData);
```

## Troubleshooting

### Canvas ist leer
- Prüfe ob ein Use Case ausgewählt ist
- Klicke auf einen Use Case in der unteren Leiste

### Import funktioniert nicht
- Prüfe JSON-Format (exportType: "usecases")
- Block-Namen müssen exakt mit Bibliothek übereinstimmen
- Konsole auf Fehler prüfen (F12)

### Verbindungen werden nicht angezeigt
- Prüfe ob fromIndex/toIndex gültige Array-Indizes sind
- Anchors müssen "top", "bottom", "left" oder "right" sein

## Lizenz

Internes Audi/Volkswagen Projekt - I/EI

## Kontakt

Bei Fragen oder Feedback: [GitHub Issues](https://github.com/Igor-T-Code/Dashboard_Builder/issues)
