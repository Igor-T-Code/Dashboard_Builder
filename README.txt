================================================================================
                        DATA PLATFORM BUILDER
                     Automotive Architecture Tool
================================================================================

STARTEN:
--------
Einfach die Datei "index.html" mit Chrome oder Edge oeffnen.

  - Doppelklick auf index.html
  - ODER: Rechtsklick > Oeffnen mit > Chrome/Edge


================================================================================
                              HAUPTFUNKTIONEN
================================================================================

CANVAS & DRAG-DROP:
-------------------
  - Drag & Drop von Bloecken aus der Sidebar auf den Canvas
  - Verbindungen zwischen Komponenten erstellen (Ankerpunkte anklicken)
  - Container fuer Gruppierung (Button "Container hinzufuegen")
  - Doppelklick auf Block/Container zum Bearbeiten
  - Rechtsklick fuer Kontextmenue

ZOOM & NAVIGATION:
------------------
  - Mausrad: Zoom In/Out
  - Buttons (+/-) in der Toolbar
  - Tasten + und - zum Zoomen
  - Taste 0: Fit-to-Content (zentriert alle Elemente)
  - Mittlere Maustaste: Pan (Canvas verschieben)
  - Snap-to-Grid: Taste G zum Ein/Ausschalten


================================================================================
                              SYSTEM-SICHT
================================================================================

Die System-Sicht bietet eine Gesamtuebersicht ueber alle Use Cases:

OEFFNEN:
  - Button "System-Sicht" in der Toolbar (Grid-Icon)

FUNKTIONEN:
  - Statistik-Uebersicht: Use Cases, Komponenten, Verbindungen, Anforderungen
  - Canvas mit allen Bloecken gruppiert nach Kategorie
  - Use Cases unten auswaehlbar/abwaehlbar (Checkboxen)
  - Bloecke werden dynamisch basierend auf ausgewaehlten Use Cases angezeigt

SYSTEM-PDF EXPORT:
  Der "System-PDF Export" Button erstellt ein umfassendes PDF-Dokument:

  1. DECKBLATT
     - Titel und Audi-Branding
     - Statistik-Uebersicht
     - Erstellungsdatum

  2. EXECUTIVE SUMMARY
     - 4 KPI-Boxen (Use Cases, Komponenten, Verbindungen, Erfuellungsrate)
     - Komponenten nach Kategorie aufgeschluesselt
     - Anforderungserfuellung mit Fortschrittsbalken
     - Status-Legende (Gruen/Orange/Rot)

  3. ARCHITEKTUR-UEBERSICHT
     - Alle Komponenten als farbcodierte Bloecke im Grid
     - GRUEN = Alle Anforderungen erfuellt (100%)
     - ORANGE = In Bearbeitung (teilweise erfuellt)
     - ROT = Offen (0% erfuellt)
     - GRAU = Keine Anforderungen definiert

  4. KOMPONENTEN-DETAILS
     - Jeder Block mit farbigem Statusbalken
     - Name, Kategorie, Anforderungsstatus
     - Beschreibung

  5. USE CASE SEITEN
     - Details zu jedem ausgewaehlten Use Case
     - Komponenten-Liste und Datenfluesse


================================================================================
                           USE CASE MANAGEMENT
================================================================================

USE CASES ERSTELLEN:
--------------------
  - "Neuer Use Case" Button in der jeweiligen Phase
  - Use Case durch Klick auswaehlen
  - Doppelklick zum Bearbeiten der Details

USE CASE EIGENSCHAFTEN:
-----------------------
  - Name und Beschreibung
  - Phase (Zuordnung)
  - Status: Entwurf, Definiert, In Umsetzung, Abgeschlossen
  - Prioritaet: Prio 1 (Must Have), Prio 2 (Should Have), Prio 3 (Nice to Have)
  - Owner (Verantwortlicher)
  - Business Value (Geschaeftswert)

USE CASE PDF EXPORT:
--------------------
  Button "PDF" in der Toolbar erstellt Dokumentation fuer aktuellen Use Case:

  - Deckblatt mit Metadaten
  - Architektur-Diagramm (Screenshot)
  - Executive Summary mit KPIs
  - Komponenten detailliert mit Anforderungen
  - Container und Datenfluesse


================================================================================
                           BLOCK-VERWALTUNG
================================================================================

BLOECKE ERSTELLEN:
------------------
  - "+ Block anlegen" Button in einer Kategorie
  - Name, Beschreibung, Icon, Kategorie festlegen

BLOCK EIGENSCHAFTEN:
--------------------
  - Name und Beschreibung
  - Kategorie-Zuordnung
  - Icon (aus Auswahl)
  - Anforderungen (Checkliste)

ANFORDERUNGEN:
--------------
  - Beliebig viele Anforderungen pro Block
  - Checkbox zum Abhaken
  - Fortschritt wird in System-Sicht und PDF angezeigt
  - Farbcodierung: Gruen (100%), Orange (in Arbeit), Rot (0%)


================================================================================
                         KATEGORIEN VERWALTEN
================================================================================

  - Kategorien in der linken Sidebar anklicken zum Auf-/Zuklappen
  - Doppelklick auf Kategorie zum Bearbeiten
  - Kategorie-Name und Farbe anpassbar
  - "Neue Kategorie" Button: Neue Kategorie erstellen
  - Kategorien loeschen: Im Bearbeitungsmodus "Loeschen" Button
    (Warnung: Alle Bloecke der Kategorie werden ebenfalls geloescht)

STANDARD-KATEGORIEN:
    - ENTWICKLUNG
    - PRODUKTION
    - VERKAUF
    - NUTZUNG
    - AFTERSALES
    - Audi Services
    - Third Party


================================================================================
                        USE CASE PHASEN VERWALTEN
================================================================================

  - Doppelklick auf Phase-Ueberschrift zum Bearbeiten
  - Namen und Icon koennen frei angepasst werden
  - "Neue Phase" Button: Neue Phase hinzufuegen
  - Phasen loeschen: Im Bearbeitungsmodus "Loeschen" Button
    (Warnung: Alle Use Cases der Phase werden ebenfalls geloescht)
  - Phasen sind vollstaendig frei waehlbar

STANDARD-PHASEN:
    - ENTWICKLUNG
    - PRODUKTION
    - VERKAUF
    - NUTZUNG
    - AFTERSALES


================================================================================
                              SPEICHERUNG
================================================================================

AUTOMATISCH:
  - Alle Aenderungen werden automatisch im Browser gespeichert (localStorage)
  - Beim naechsten Oeffnen wird der letzte Stand geladen

MANUELL:
  - "Speichern" Button: Exportiert komplettes Projekt als JSON-Datei
  - "Laden" Button: Importiert JSON-Datei
  - "Reset" Button: Setzt auf Beispiel-Konfiguration zurueck


================================================================================
                             TASTENKUERZEL
================================================================================

  DEL / Backspace  - Ausgewaehltes Element loeschen
  ESC              - Abbrechen / Modal schliessen
  G                - Grid ein/ausschalten (Snap-to-Grid)
  + / =            - Zoom In (Einzoomen)
  -                - Zoom Out (Auszoomen)
  0                - Fit to Content (alle Elemente zentrieren)


================================================================================
                             TOOLBAR-BUTTONS
================================================================================

  [Container hinzufuegen]  - Neuen Container auf Canvas erstellen
  [Speichern]              - Projekt als JSON exportieren
  [Laden]                  - Projekt aus JSON importieren
  [Reset]                  - Auf Beispiel-Konfiguration zuruecksetzen
  [System-Sicht]           - Gesamtuebersicht aller Use Cases oeffnen
  [Bibliothek]             - Komponenten-Bibliothek oeffnen (60+ Komponenten)
  [PDF]                    - Aktuellen Use Case als PDF exportieren
  [+] / [-]                - Zoom In / Out
  [Fit]                    - Alle Elemente im sichtbaren Bereich anzeigen
  [Grid: An/Aus]           - Snap-to-Grid umschalten


================================================================================
                        KOMPONENTEN-BIBLIOTHEK
================================================================================

Die Komponenten-Bibliothek enthaelt 60+ vordefinierte Automotive-Komponenten:

KATEGORIEN:
  - FAHRZEUG-SYSTEME (12): ECUs, Zone Controller, BMS, ADAS, TCU, Gateway
  - DATA INGESTION (10): IoT Hub, Kafka, CDC, Edge Gateway, Fleet Gateway
  - DATA PLATFORM (10): Bronze/Silver/Gold Layer, Delta Lake, Unity Catalog
  - PROCESSING (8): Spark, Delta Live Tables, SQL Warehouse, Streaming
  - ML & AI (10): AutoML, Anomaly Detection, Predictive Maintenance, GenAI
  - BACKEND SERVICES (10): OTA Server, Customer 360, QMS, FMEA, 8D Engine
  - FRONTENDS (8): Driver App, Fleet Dashboard, Quality Cockpit
  - EXTERNAL (8): Weather API, Traffic Data, Insurance, Energy Grid

VERWENDUNG:
  1. Button "Bibliothek" in Toolbar klicken
  2. Komponenten suchen/filtern
  3. Gewuenschte Komponenten auswaehlen (Mehrfachauswahl moeglich)
  4. Ziel-Kategorie waehlen (oder "Automatisch")
  5. "Importieren" klicken


================================================================================
                          USE CASE IMPORT/EXPORT
================================================================================

USE CASES IMPORTIEREN:
  - Button "Import" im Phasen-Bereich (rechts neben "Neue Phase")
  - Laedt Use Cases aus JSON-Datei
  - Bestehende Use Cases bleiben erhalten (kein Ueberschreiben)
  - Fehlende Bloecke werden automatisch erstellt

USE CASES EXPORTIEREN:
  - Button "Export" im Phasen-Bereich
  - Exportiert alle Use Cases als JSON
  - Format kompatibel mit Import-Funktion

JSON-FORMAT FUER USE CASE IMPORT:
  {
    "exportType": "usecases",
    "useCases": [
      {
        "name": "Use Case Name",
        "phaseId": 4,
        "description": "...",
        "businessValue": "...",
        "elements": [...],
        "connections": [...]
      }
    ],
    "newBlocks": [...]
  }


================================================================================
                       CLAUDE CODE SKILL (KI-GENERIERUNG)
================================================================================

Mit dem SKILL_USECASE_GENERATOR.md kann Claude Code vollstaendige
Use Cases basierend auf der Komponenten-Bibliothek generieren.

VERWENDUNG:
  Sage zu Claude: "Erstelle Use Case fuer [Beschreibung]"

BEISPIELE:
  - "Erstelle Use Case fuer Predictive Maintenance"
  - "Erstelle Use Case fuer OTA Updates"
  - "Erstelle Use Case fuer Closed-Loop Fehlerabstellung"
  - "Erstelle Use Case fuer Battery Health Monitoring"

Claude generiert:
  - Vollstaendige Architektur mit passenden Komponenten
  - Container fuer logische Gruppierung
  - Verbindungen zwischen Komponenten
  - Business Value und Beschreibung
  - JSON zum direkten Import


================================================================================
                            ORDNERSTRUKTUR
================================================================================

  /Dashboard
    |-- index.html                    <- Hauptanwendung (hier starten)
    |-- components-library.js         <- Komponenten-Bibliothek (60+ Bloecke)
    |-- SKILL_USECASE_GENERATOR.md    <- Claude Code Skill fuer KI-Generierung
    |-- data/                         <- Ordner fuer exportierte Projekte
    +-- README.txt                    <- Diese Datei


================================================================================
                          SYSTEMANFORDERUNGEN
================================================================================

  - Moderner Browser (Chrome, Edge, Firefox, Safari)
  - Keine Installation erforderlich
  - Keine Internetverbindung nach dem ersten Laden noetig
    (CDN-Bibliotheken: jsPDF, html2canvas werden beim Start geladen)


================================================================================
                          TECHNISCHE DETAILS
================================================================================

VERWENDETE BIBLIOTHEKEN:
  - jsPDF 2.5.1 (PDF-Generierung)
  - html2canvas 1.4.1 (Screenshot-Funktion)
  - components-library.js (Automotive Komponenten)

DATENFORMAT:
  - JSON-basierte Speicherung
  - Kompatibel mit Import/Export
  - Use Case Export/Import ohne Datenverlust

BROWSER-SPEICHER:
  - localStorage fuer persistente Speicherung
  - Keine Server-Verbindung erforderlich


================================================================================
                              Audi AG - I/EI
                         Data Platform Builder v2.0
================================================================================
