# Skill: Automotive Use Case Generator

## Beschreibung
Dieser Skill ermoeglicht die automatische Generierung von vollstaendigen Automotive Use Cases basierend auf der Komponenten-Bibliothek. Der generierte JSON-Code kann direkt in den Data Platform Builder importiert werden.

## Aktivierung
Sage: "Erstelle Use Case fuer [Beschreibung]" oder "/usecase [Beschreibung]"

## Beispiele
- "Erstelle Use Case fuer Predictive Maintenance"
- "Erstelle Use Case fuer OTA Updates"
- "Erstelle Use Case fuer Closed-Loop Fehlerabstellung"
- "Erstelle Use Case fuer Battery Health Monitoring"
- "Erstelle Use Case fuer Fleet Management"

---

## SKILL INSTRUCTIONS FOR CLAUDE

Wenn der Benutzer einen Use Case erstellen moechte, folge diesen Schritten:

### 1. Analysiere die Anforderung
- Verstehe den gewuenschten Use Case
- Identifiziere relevante Lifecycle-Phase (ENTWICKLUNG, PRODUKTION, VERKAUF, NUTZUNG, AFTERSALES)
- Bestimme Prioritaet und Business Value

### 2. Waehle passende Komponenten aus der Bibliothek
Verwende Komponenten aus diesen Kategorien:

**FAHRZEUG-SYSTEME (vehicleSystems):**
- Central Vehicle Computer (CVC), Zone Controller, BMS, ADAS ECU, Infotainment, TCU, Gateway, BCM, Powertrain

**DATA INGESTION (dataIngestion):**
- Vehicle Data Collector, IoT Hub, Kafka Streaming, CDC Connector, Edge Gateway, OBD Bridge, Fleet Gateway

**DATA PLATFORM (dataPlatform):**
- Bronze/Silver/Gold Layer, Delta Lake, Unity Catalog, Feature Store, Model Registry, Data Quality Engine

**PROCESSING (processing):**
- Spark Cluster, Delta Live Tables, SQL Warehouse, Stream Processing, ETL Pipeline, Real-time Analytics

**ML & AI (mlAi):**
- ML Training, AutoML, Anomaly Detection, Predictive Maintenance Model, GenAI/LLM, Computer Vision, NLP

**BACKEND SERVICES (backendServices):**
- OTA Server, Customer 360, Fleet Management, Warranty Analytics, QMS, FMEA Database, 8D Process Engine

**FRONTENDS (frontends):**
- Driver App, Fleet Dashboard, Quality Cockpit, Technician App, Dealer Portal, Executive Dashboard

**EXTERNAL (external):**
- Weather API, Traffic Data, Insurance API, Energy Grid, Map Provider, Supplier Portal

### 3. Definiere Datenfluss-Architektur
Erstelle logische Verbindungen zwischen Komponenten:
- Fahrzeug -> Ingestion -> Processing -> Storage -> Analytics -> Frontend
- Beachte: Daten fliessen von links nach rechts, von unten nach oben

### 4. Generiere JSON im korrekten Format

```json
{
  "exportType": "usecases",
  "exportDate": "2026-01-22",
  "useCases": [
    {
      "name": "Use Case Name",
      "phaseId": 1,
      "description": "Detaillierte Beschreibung des Use Cases...",
      "businessValue": "Konkreter Business Value mit Zahlen wenn moeglich...",
      "owner": "I/EI",
      "priority": "prio-1",
      "status": "draft",
      "elements": [
        { "type": "container", "name": "Fahrzeug", "description": "Fahrzeug-Komponenten", "x": 100, "y": 100, "width": 400, "height": 300, "colorClass": "pastel-blue" },
        { "type": "block", "blockName": "Central Vehicle Computer", "x": 200, "y": 200 },
        { "type": "block", "blockName": "Telematics Control Unit", "x": 200, "y": 300 }
      ],
      "connections": [
        { "fromIndex": 2, "fromAnchor": "right", "toIndex": 1, "toAnchor": "left" }
      ]
    }
  ],
  "newBlocks": [
    {
      "name": "Neuer Block Name",
      "category": "Audi Services",
      "icon": "cpu",
      "description": "Beschreibung des neuen Blocks",
      "requirements": ["Requirement 1", "Requirement 2"]
    }
  ]
}
```

### 5. Layout-Richtlinien

**Container-Positionen (von links nach rechts):**
- Fahrzeug/Edge: x=100, width=400
- Backend/Ingestion: x=600, width=300
- Data Platform: x=1000, width=400
- Analytics/Frontend: x=1500, width=350

**Block-Positionen innerhalb Container:**
- Vertikaler Abstand: 120px
- Horizontaler Abstand: 180px
- Startposition: x+100, y+100

**Verbindungen:**
- fromIndex/toIndex referenzieren elements Array Index
- Anchors: "top", "bottom", "left", "right"

### 6. Phase IDs
- 1 = ENTWICKLUNG
- 2 = PRODUKTION
- 3 = VERKAUF
- 4 = NUTZUNG
- 5 = AFTERSALES

### 7. Priority Werte
- "prio-1" = Must Have
- "prio-2" = Should Have
- "prio-3" = Nice to Have

### 8. Status Werte
- "draft" = Entwurf
- "defined" = Definiert
- "in-progress" = In Umsetzung
- "completed" = Abgeschlossen

### 9. Color Classes fuer Container
- "pastel-blue" = Fahrzeug/Hardware
- "pastel-green" = Backend/Services
- "pastel-mint" = Data Platform
- "pastel-purple" = Analytics/ML
- "pastel-orange" = Frontend/Apps
- "pastel-yellow" = External/Partner

### 10. Icon Namen
cpu, chip, server, database, cloud, globe, wifi, radio, zap, battery,
download, upload, refresh-cw, git-merge, layers, box, package,
brain, eye, search, target, bar-chart, trending-up, activity,
user, users, car, truck, map, navigation, settings, wrench, tool,
shield, lock, key, file-text, clipboard, check-circle, alert-circle

---

## BEISPIEL USE CASE: Predictive Maintenance

```json
{
  "exportType": "usecases",
  "exportDate": "2026-01-22",
  "useCases": [
    {
      "name": "Predictive Maintenance",
      "phaseId": 4,
      "description": "Vorausschauende Wartung basierend auf Echtzeit-Fahrzeugdaten. ML-Modelle analysieren Sensordaten und prognostizieren Wartungsbedarf bevor Ausfaelle auftreten.",
      "businessValue": "Reduktion ungeplanter Ausfaelle um 30-50%, Steigerung Kundenzufriedenheit, Optimierung Ersatzteillogistik, Neue Service-Revenue-Streams.",
      "owner": "I/EI",
      "priority": "prio-1",
      "status": "in-progress",
      "elements": [
        { "type": "container", "name": "Fahrzeug", "description": "Fahrzeug-Sensorik und Steuergeraete", "x": 100, "y": 100, "width": 400, "height": 400, "colorClass": "pastel-blue" },
        { "type": "block", "blockName": "Central Vehicle Computer", "x": 200, "y": 200 },
        { "type": "block", "blockName": "Telematics Control Unit", "x": 200, "y": 320 },
        { "type": "block", "blockName": "Battery Management System", "x": 300, "y": 440 },

        { "type": "container", "name": "Data Ingestion", "description": "Datenerfassung und Streaming", "x": 600, "y": 100, "width": 300, "height": 400, "colorClass": "pastel-green" },
        { "type": "block", "blockName": "Vehicle Data Collector", "x": 680, "y": 200 },
        { "type": "block", "blockName": "IoT Hub", "x": 680, "y": 320 },
        { "type": "block", "blockName": "Kafka Streaming", "x": 680, "y": 440 },

        { "type": "container", "name": "Data Platform", "description": "Lakehouse Architektur", "x": 1000, "y": 100, "width": 400, "height": 400, "colorClass": "pastel-mint" },
        { "type": "block", "blockName": "Bronze Layer", "x": 1080, "y": 200 },
        { "type": "block", "blockName": "Silver Layer", "x": 1080, "y": 320 },
        { "type": "block", "blockName": "Gold Layer", "x": 1280, "y": 320 },
        { "type": "block", "blockName": "Feature Store", "x": 1280, "y": 440 },

        { "type": "container", "name": "ML & Analytics", "description": "Machine Learning Pipeline", "x": 1500, "y": 100, "width": 350, "height": 300, "colorClass": "pastel-purple" },
        { "type": "block", "blockName": "Predictive Maintenance Model", "x": 1580, "y": 200 },
        { "type": "block", "blockName": "Anomaly Detection Model", "x": 1580, "y": 320 },

        { "type": "container", "name": "Frontend", "description": "Benutzer-Anwendungen", "x": 1500, "y": 450, "width": 350, "height": 250, "colorClass": "pastel-orange" },
        { "type": "block", "blockName": "Driver Mobile App", "x": 1580, "y": 520 },
        { "type": "block", "blockName": "Service Technician App", "x": 1580, "y": 640 }
      ],
      "connections": [
        { "fromIndex": 1, "fromAnchor": "bottom", "toIndex": 2, "toAnchor": "top" },
        { "fromIndex": 2, "fromAnchor": "right", "toIndex": 5, "toAnchor": "left" },
        { "fromIndex": 3, "fromAnchor": "right", "toIndex": 5, "toAnchor": "left" },
        { "fromIndex": 5, "fromAnchor": "bottom", "toIndex": 6, "toAnchor": "top" },
        { "fromIndex": 6, "fromAnchor": "bottom", "toIndex": 7, "toAnchor": "top" },
        { "fromIndex": 7, "fromAnchor": "right", "toIndex": 9, "toAnchor": "left" },
        { "fromIndex": 9, "fromAnchor": "bottom", "toIndex": 10, "toAnchor": "top" },
        { "fromIndex": 10, "fromAnchor": "right", "toIndex": 11, "toAnchor": "left" },
        { "fromIndex": 11, "fromAnchor": "bottom", "toIndex": 12, "toAnchor": "top" },
        { "fromIndex": 12, "fromAnchor": "right", "toIndex": 14, "toAnchor": "left" },
        { "fromIndex": 14, "fromAnchor": "bottom", "toIndex": 15, "toAnchor": "top" },
        { "fromIndex": 14, "fromAnchor": "bottom", "toIndex": 17, "toAnchor": "top" },
        { "fromIndex": 15, "fromAnchor": "bottom", "toIndex": 18, "toAnchor": "top" }
      ]
    }
  ],
  "newBlocks": []
}
```

---

## ANTWORT FORMAT

Wenn der Benutzer einen Use Case anfordert:

1. Kurze Bestaetigung was erstellt wird
2. JSON-Code in einem Code-Block
3. Anleitung zum Import:
   - JSON in Datei speichern (z.B. usecase_name.json)
   - In Data Platform Builder: "Use Cases importieren" Button klicken
   - JSON-Datei auswaehlen
   - Import bestaetigen

---

## WICHTIGE HINWEISE

- Verwende NUR Bloecke die in der Komponenten-Bibliothek existieren (blockName muss exakt uebereinstimmen)
- Wenn ein Block nicht existiert, fuege ihn zu "newBlocks" hinzu
- Halte Beschreibungen praezise und business-orientiert
- Inkludiere immer konkrete KPIs/Metriken im businessValue
- Beruecksichtige die Automotive-Domaene (TISAX, ISO 26262, etc.)
