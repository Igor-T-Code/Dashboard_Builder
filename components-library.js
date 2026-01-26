/**
 * Automotive Data Platform - Component Library
 * =============================================
 * Comprehensive library of automotive components for the Data Platform Builder
 * Based on Cradle-to-Grave Vehicle Lifecycle Architecture
 *
 * Categories:
 * - FAHRZEUG-SYSTEME: ECUs, Zonal Controllers, Vehicle Hardware
 * - DATA INGESTION: Data collection and streaming components
 * - DATA PLATFORM: Storage, Processing, Lakehouse Architecture
 * - ML & AI: Machine Learning and AI components
 * - BACKEND SERVICES: Business logic and backend systems
 * - FRONTENDS: User-facing applications and dashboards
 * - EXTERNAL: Third-party integrations and external services
 */

const AUTOMOTIVE_COMPONENTS = {

    // =========================================================================
    // FAHRZEUG-SYSTEME (Vehicle Systems) - ECUs & Zonal Controllers
    // =========================================================================
    vehicleSystems: {
        categoryName: "FAHRZEUG-SYSTEME",
        categoryColor: "#1565C0",
        components: [
            {
                id: "cvc",
                name: "Central Vehicle Computer",
                shortName: "CVC",
                icon: "🖥️",
                description: "Zentraler Fahrzeugrechner für Software-Defined Vehicle Architektur. Koordiniert alle Zonal Controller und führt High-Level Funktionen aus.",
                requirements: [
                    "AUTOSAR Adaptive Platform",
                    "Echtzeit-Betriebssystem",
                    "OTA Update fähig",
                    "Cybersecurity nach ISO 21434"
                ]
            },
            {
                id: "zone-front",
                name: "Zone Controller Front",
                shortName: "ZC-F",
                icon: "🔲",
                description: "Zonal Controller für Front-Domäne: ADAS Sensoren, Frontbeleuchtung, Frontscheibe, Klimatisierung vorne.",
                requirements: [
                    "CAN/LIN Gateway",
                    "Ethernet Backbone",
                    "Sensor Fusion Interface"
                ]
            },
            {
                id: "zone-rear",
                name: "Zone Controller Rear",
                shortName: "ZC-R",
                icon: "🔲",
                description: "Zonal Controller für Heck-Domäne: Heckbeleuchtung, Kofferraum, Anhängerkupplung, Rückfahrkamera.",
                requirements: [
                    "CAN/LIN Gateway",
                    "Ethernet Backbone",
                    "Trailer Interface"
                ]
            },
            {
                id: "zone-left",
                name: "Zone Controller Left",
                shortName: "ZC-L",
                icon: "🔲",
                description: "Zonal Controller für linke Seite: Fahrertür, Seitenspiegel, Sitzsteuerung links.",
                requirements: [
                    "Door Module Integration",
                    "Seat Control Interface"
                ]
            },
            {
                id: "zone-right",
                name: "Zone Controller Right",
                shortName: "ZC-RT",
                icon: "🔲",
                description: "Zonal Controller für rechte Seite: Beifahrertür, Seitenspiegel, Sitzsteuerung rechts.",
                requirements: [
                    "Door Module Integration",
                    "Seat Control Interface"
                ]
            },
            {
                id: "bms",
                name: "Battery Management System",
                shortName: "BMS",
                icon: "🔋",
                description: "Überwacht und steuert HV-Batterie: State of Charge, State of Health, Zellbalancing, Thermomanagement.",
                requirements: [
                    "Cell Monitoring",
                    "Thermal Management",
                    "Safety Monitoring (ASIL-D)",
                    "V2G Communication"
                ]
            },
            {
                id: "adas-ecu",
                name: "ADAS ECU",
                shortName: "ADAS",
                icon: "👁️",
                description: "Advanced Driver Assistance Systems Controller: Sensorfusion, Objekterkennung, Pfadplanung.",
                requirements: [
                    "Camera Processing",
                    "Radar Processing",
                    "LiDAR Processing",
                    "Sensor Fusion",
                    "ASIL-D Compliance"
                ]
            },
            {
                id: "infotainment",
                name: "Infotainment ECU",
                shortName: "IVI",
                icon: "📱",
                description: "In-Vehicle Infotainment System: Multimedia, Navigation, Connectivity, Voice Assistant.",
                requirements: [
                    "Android Automotive / QNX",
                    "Voice Recognition",
                    "Smartphone Integration",
                    "OTA Content Updates"
                ]
            },
            {
                id: "tcu",
                name: "Telematics Control Unit",
                shortName: "TCU",
                icon: "📡",
                description: "Telematik-Steuergerät für Fahrzeug-Cloud Kommunikation: 4G/5G, V2X, eCall, Remote Services.",
                requirements: [
                    "4G/5G Modem",
                    "V2X Communication",
                    "eCall Support",
                    "GNSS Positioning",
                    "Secure Element"
                ]
            },
            {
                id: "gateway",
                name: "Central Gateway",
                shortName: "CGW",
                icon: "🔀",
                description: "Zentrales Gateway für Netzwerk-Routing und Protokollübersetzung zwischen Fahrzeugdomänen.",
                requirements: [
                    "Multi-Protocol Support",
                    "Firewall Function",
                    "Diagnostic Routing"
                ]
            },
            {
                id: "bcm",
                name: "Body Control Module",
                shortName: "BCM",
                icon: "💡",
                description: "Karosserie-Steuergerät: Beleuchtung, Zentralverriegelung, Fensterheber, Scheibenwischer.",
                requirements: [
                    "LIN Master",
                    "PWM Control",
                    "Low Power Mode"
                ]
            },
            {
                id: "powertrain",
                name: "Powertrain ECU",
                shortName: "PTM",
                icon: "⚡",
                description: "Antriebsstrang-Steuerung: E-Motor Regelung, Inverter, Getriebe, Rekuperation.",
                requirements: [
                    "Motor Control",
                    "Inverter Interface",
                    "ASIL-D Functions",
                    "Torque Vectoring"
                ]
            }
        ]
    },

    // =========================================================================
    // DATA INGESTION - Datenerfassung und Streaming
    // =========================================================================
    dataIngestion: {
        categoryName: "DATA INGESTION",
        categoryColor: "#7B1FA2",
        components: [
            {
                id: "vehicle-collector",
                name: "Vehicle Data Collector",
                shortName: "VDC",
                icon: "📥",
                description: "Edge-Service im Fahrzeug zur Sammlung und Vorverarbeitung von Telematikdaten vor Cloud-Upload.",
                requirements: [
                    "Edge Processing",
                    "Data Compression",
                    "Offline Buffering",
                    "Privacy Filtering"
                ]
            },
            {
                id: "iot-hub",
                name: "IoT Hub",
                shortName: "IoT",
                icon: "🌐",
                description: "Managed IoT Platform für Fahrzeugkonnektivität: Device Management, Message Routing, Protocol Support.",
                requirements: [
                    "MQTT/AMQP Support",
                    "Device Twin",
                    "Message Routing",
                    "Auto-Scaling"
                ]
            },
            {
                id: "kafka-cluster",
                name: "Kafka Streaming",
                shortName: "Kafka",
                icon: "📊",
                description: "Event Streaming Platform für Echtzeit-Datenverarbeitung mit hohem Durchsatz.",
                requirements: [
                    "High Throughput",
                    "Exactly-Once Semantics",
                    "Schema Registry",
                    "Multi-Datacenter"
                ]
            },
            {
                id: "cdc-connector",
                name: "CDC Connector",
                shortName: "CDC",
                icon: "🔄",
                description: "Change Data Capture für Echtzeit-Replikation aus operativen Systemen (ERP, MES, CRM).",
                requirements: [
                    "Debezium Integration",
                    "Transaction Log Mining",
                    "Schema Evolution"
                ]
            },
            {
                id: "batch-loader",
                name: "Batch File Loader",
                shortName: "Batch",
                icon: "📁",
                description: "Batch-Ingestion für periodische Datenlieferungen: CSV, Parquet, XML von Partnern und Legacy-Systemen.",
                requirements: [
                    "File Format Support",
                    "Schema Validation",
                    "Error Handling"
                ]
            },
            {
                id: "edge-gateway",
                name: "Edge Gateway",
                shortName: "Edge",
                icon: "🏭",
                description: "Edge Computing Gateway für Produktionsumgebung: Datensammlung von PLCs, Sensoren, MES.",
                requirements: [
                    "OPC-UA Support",
                    "Local Processing",
                    "Store & Forward"
                ]
            },
            {
                id: "obd-bridge",
                name: "OBD Diagnostic Bridge",
                shortName: "OBD",
                icon: "🔌",
                description: "Diagnose-Schnittstelle für Werkstatt und Entwicklung: OBD-II, DoIP, UDS Protokolle.",
                requirements: [
                    "OBD-II Protocol",
                    "DoIP Support",
                    "UDS Services"
                ]
            },
            {
                id: "fleet-gateway",
                name: "Fleet Telematics Gateway",
                shortName: "FTG",
                icon: "🚛",
                description: "Gateway für Flottendaten: Aggregation von mehreren Fahrzeugen, Flottenspezifische Metriken.",
                requirements: [
                    "Multi-Vehicle Support",
                    "Fleet Analytics",
                    "API Integration"
                ]
            },
            {
                id: "production-collector",
                name: "Production Data Collector",
                shortName: "PDC",
                icon: "🏭",
                description: "Datensammler für Produktionslinie: Prozessparameter, Messwerte, Qualitätsdaten.",
                requirements: [
                    "MES Integration",
                    "SCADA Interface",
                    "Real-time Collection"
                ]
            },
            {
                id: "supplier-connector",
                name: "Supplier Data Connector",
                shortName: "SDC",
                icon: "🤝",
                description: "Sichere Datenanbindung für Lieferanten via Delta Sharing und EDI.",
                requirements: [
                    "Delta Sharing",
                    "EDI Support",
                    "Data Encryption"
                ]
            }
        ]
    },

    // =========================================================================
    // DATA PLATFORM - Lakehouse Architektur
    // =========================================================================
    dataPlatform: {
        categoryName: "DATA PLATFORM",
        categoryColor: "#00695C",
        components: [
            {
                id: "bronze-layer",
                name: "Bronze Layer",
                shortName: "Bronze",
                icon: "🥉",
                description: "Raw Data Layer: Rohdaten in ursprünglichem Format, append-only, vollständige Historie.",
                requirements: [
                    "Raw Data Storage",
                    "Schema-on-Read",
                    "Data Retention Policy"
                ]
            },
            {
                id: "silver-layer",
                name: "Silver Layer",
                shortName: "Silver",
                icon: "🥈",
                description: "Cleaned Data Layer: Validierte, bereinigte und angereicherte Daten, standardisierte Schemas.",
                requirements: [
                    "Data Validation",
                    "Deduplication",
                    "Schema Enforcement",
                    "Data Quality Rules"
                ]
            },
            {
                id: "gold-layer",
                name: "Gold Layer",
                shortName: "Gold",
                icon: "🥇",
                description: "Business Layer: Aggregierte, business-ready Daten, optimiert für Analytics und Reporting.",
                requirements: [
                    "Business Aggregations",
                    "Dimension Tables",
                    "Fact Tables",
                    "Performance Optimized"
                ]
            },
            {
                id: "delta-lake",
                name: "Delta Lake Storage",
                shortName: "Delta",
                icon: "💾",
                description: "ACID-transaktionaler Data Lake Storage mit Time Travel, Schema Evolution, Unified Batch/Streaming.",
                requirements: [
                    "ACID Transactions",
                    "Time Travel",
                    "Schema Evolution",
                    "Z-Order Optimization"
                ]
            },
            {
                id: "unity-catalog",
                name: "Unity Catalog",
                shortName: "Unity",
                icon: "📚",
                description: "Zentraler Metadaten-Katalog: Data Governance, Access Control, Lineage, Discovery.",
                requirements: [
                    "Fine-grained ACLs",
                    "Data Lineage",
                    "Audit Logging",
                    "TISAX Compliance"
                ]
            },
            {
                id: "feature-store",
                name: "Feature Store",
                shortName: "FS",
                icon: "🎯",
                description: "Zentrales Repository für ML Features: Feature Engineering, Versioning, Online/Offline Serving.",
                requirements: [
                    "Feature Versioning",
                    "Online Serving",
                    "Offline Serving",
                    "Feature Discovery"
                ]
            },
            {
                id: "model-registry",
                name: "Model Registry",
                shortName: "MLR",
                icon: "📋",
                description: "Zentrale Verwaltung von ML-Modellen: Versioning, Staging, Deployment Tracking.",
                requirements: [
                    "Model Versioning",
                    "Stage Management",
                    "Approval Workflows"
                ]
            },
            {
                id: "dq-engine",
                name: "Data Quality Engine",
                shortName: "DQE",
                icon: "✅",
                description: "Automatisierte Datenqualitätsprüfung: Rules Engine, Anomalie-Detection, Quality Scores.",
                requirements: [
                    "Rule-based Validation",
                    "Anomaly Detection",
                    "Quality Dashboards"
                ]
            },
            {
                id: "lineage-tracker",
                name: "Lineage Tracker",
                shortName: "LT",
                icon: "🔗",
                description: "End-to-End Data Lineage: Herkunft, Transformationen, Impact Analysis.",
                requirements: [
                    "Column-level Lineage",
                    "Impact Analysis",
                    "Visualization"
                ]
            },
            {
                id: "delta-sharing",
                name: "Delta Sharing Hub",
                shortName: "DSH",
                icon: "🔐",
                description: "Sichere Datenfreigabe für Partner: Open Protocol, Zero-Copy Sharing, Access Control.",
                requirements: [
                    "Open Protocol",
                    "Access Tokens",
                    "Audit Trail",
                    "Cross-Cloud Support"
                ]
            }
        ]
    },

    // =========================================================================
    // PROCESSING - Datenverarbeitung
    // =========================================================================
    processing: {
        categoryName: "PROCESSING",
        categoryColor: "#E65100",
        components: [
            {
                id: "spark-cluster",
                name: "Spark Cluster",
                shortName: "Spark",
                icon: "⚡",
                description: "Distributed Processing Engine für Batch und Streaming Analytics auf großen Datenmengen.",
                requirements: [
                    "Auto-Scaling",
                    "Photon Engine",
                    "Spot Instances"
                ]
            },
            {
                id: "dlt-pipelines",
                name: "Delta Live Tables",
                shortName: "DLT",
                icon: "🔄",
                description: "Deklarative ETL Pipelines mit automatischer Fehlerbehandlung und Datenqualität.",
                requirements: [
                    "Declarative ETL",
                    "Auto-Recovery",
                    "Expectations"
                ]
            },
            {
                id: "sql-warehouse",
                name: "SQL Warehouse",
                shortName: "SQL",
                icon: "🗄️",
                description: "Serverless SQL Analytics für BI und Ad-hoc Queries mit hoher Concurrency.",
                requirements: [
                    "Serverless",
                    "High Concurrency",
                    "BI Integration"
                ]
            },
            {
                id: "stream-processor",
                name: "Stream Processing Engine",
                shortName: "SPE",
                icon: "🌊",
                description: "Echtzeit-Streaming für kontinuierliche Datenverarbeitung: Structured Streaming, Watermarks.",
                requirements: [
                    "Structured Streaming",
                    "Watermark Support",
                    "Exactly-Once"
                ]
            },
            {
                id: "etl-engine",
                name: "ETL Pipeline Engine",
                shortName: "ETL",
                icon: "🔧",
                description: "Orchestrierte ETL Workflows: Scheduling, Dependencies, Monitoring.",
                requirements: [
                    "Workflow Orchestration",
                    "Dependency Management",
                    "Retry Logic"
                ]
            },
            {
                id: "transform-service",
                name: "Data Transformation Service",
                shortName: "DTS",
                icon: "🔀",
                description: "Komplexe Datentransformationen: Joins, Aggregationen, Window Functions.",
                requirements: [
                    "Complex Joins",
                    "Window Functions",
                    "UDF Support"
                ]
            },
            {
                id: "aggregation-engine",
                name: "Aggregation Engine",
                shortName: "AGG",
                icon: "📈",
                description: "Vordefinierte Aggregationen für Performance: Rollups, Cubes, Materialized Views.",
                requirements: [
                    "Pre-Aggregations",
                    "Materialized Views",
                    "Incremental Refresh"
                ]
            },
            {
                id: "realtime-analytics",
                name: "Real-time Analytics Engine",
                shortName: "RTA",
                icon: "⏱️",
                description: "Sub-Sekunden Analytics für Echtzeit-Dashboards und Alerting.",
                requirements: [
                    "Low Latency",
                    "In-Memory Processing",
                    "Push Updates"
                ]
            }
        ]
    },

    // =========================================================================
    // ML & AI - Machine Learning und KI
    // =========================================================================
    mlAi: {
        categoryName: "ML & AI",
        categoryColor: "#C62828",
        components: [
            {
                id: "ml-training",
                name: "ML Training Pipeline",
                shortName: "MLT",
                icon: "🧠",
                description: "End-to-End ML Training: Feature Engineering, Model Training, Hyperparameter Tuning.",
                requirements: [
                    "Distributed Training",
                    "Hyperparameter Tuning",
                    "Experiment Tracking"
                ]
            },
            {
                id: "automl",
                name: "AutoML Engine",
                shortName: "AutoML",
                icon: "🤖",
                description: "Automatisiertes Machine Learning: Feature Selection, Algorithm Selection, Model Optimization.",
                requirements: [
                    "Auto Feature Engineering",
                    "Algorithm Selection",
                    "Model Explainability"
                ]
            },
            {
                id: "anomaly-detection",
                name: "Anomaly Detection Model",
                shortName: "ADM",
                icon: "🔍",
                description: "ML-basierte Anomalie-Erkennung für Fahrzeugdaten, Produktionsprozesse und Qualität.",
                requirements: [
                    "Unsupervised Learning",
                    "Real-time Scoring",
                    "Threshold Management"
                ]
            },
            {
                id: "predictive-maintenance",
                name: "Predictive Maintenance Model",
                shortName: "PDM",
                icon: "🔮",
                description: "Vorhersagemodell für Wartungsbedarf: Remaining Useful Life, Failure Prediction.",
                requirements: [
                    "Time Series Analysis",
                    "Survival Analysis",
                    "Confidence Intervals"
                ]
            },
            {
                id: "genai-service",
                name: "GenAI / LLM Service",
                shortName: "GenAI",
                icon: "💬",
                description: "Generative AI Service: LLM für Dokumentenanalyse, Code-Generierung, Chatbots.",
                requirements: [
                    "LLM Hosting",
                    "RAG Pipeline",
                    "Prompt Management",
                    "Guardrails"
                ]
            },
            {
                id: "cv-pipeline",
                name: "Computer Vision Pipeline",
                shortName: "CV",
                icon: "👁️",
                description: "Bildverarbeitung für Qualitätskontrolle, ADAS Training, Schadenserkennung.",
                requirements: [
                    "Image Processing",
                    "Object Detection",
                    "GPU Acceleration"
                ]
            },
            {
                id: "nlp-engine",
                name: "NLP Engine",
                shortName: "NLP",
                icon: "📝",
                description: "Natural Language Processing: Sentiment Analysis, Text Classification, Entity Extraction.",
                requirements: [
                    "Text Classification",
                    "NER",
                    "Sentiment Analysis",
                    "Multi-Language"
                ]
            },
            {
                id: "recommendation",
                name: "Recommendation Engine",
                shortName: "REC",
                icon: "💡",
                description: "Empfehlungssystem für Personalisierung: Next-Best-Action, Product Recommendations.",
                requirements: [
                    "Collaborative Filtering",
                    "Content-based",
                    "Real-time Serving"
                ]
            },
            {
                id: "model-serving",
                name: "Model Serving Endpoint",
                shortName: "MSE",
                icon: "🎯",
                description: "Low-Latency Model Inference: REST APIs, Batch Scoring, A/B Testing.",
                requirements: [
                    "Low Latency",
                    "Auto-Scaling",
                    "Canary Deployments"
                ]
            },
            {
                id: "ab-testing",
                name: "A/B Testing Engine",
                shortName: "A/B",
                icon: "⚖️",
                description: "Experimentier-Plattform für Modell-Vergleiche und Feature Rollouts.",
                requirements: [
                    "Traffic Splitting",
                    "Statistical Analysis",
                    "Metric Tracking"
                ]
            }
        ]
    },

    // =========================================================================
    // BACKEND SERVICES - Business Logic
    // =========================================================================
    backendServices: {
        categoryName: "BACKEND SERVICES",
        categoryColor: "#37474F",
        components: [
            {
                id: "ota-server",
                name: "OTA Update Server",
                shortName: "OTA",
                icon: "📲",
                description: "Over-the-Air Update Management: Staged Rollout, Versioning, Rollback, Monitoring.",
                requirements: [
                    "Staged Rollout",
                    "Version Control",
                    "Rollback Support",
                    "Update Monitoring"
                ]
            },
            {
                id: "customer-360",
                name: "Customer 360 Service",
                shortName: "C360",
                icon: "👤",
                description: "Ganzheitliche Kundenansicht: Profile, Interaktionen, Fahrzeuge, Präferenzen.",
                requirements: [
                    "Profile Management",
                    "Consent Management",
                    "GDPR Compliance"
                ]
            },
            {
                id: "fleet-backend",
                name: "Fleet Management Backend",
                shortName: "FMB",
                icon: "🚗",
                description: "Backend für Flottenverwaltung: Vehicle Tracking, Utilization, TCO Analysis.",
                requirements: [
                    "Real-time Tracking",
                    "Geofencing",
                    "Utilization Analytics"
                ]
            },
            {
                id: "warranty-analytics",
                name: "Warranty Analytics Service",
                shortName: "WAS",
                icon: "📊",
                description: "Garantie-Analyse: Claim Processing, Fraud Detection, Cost Analytics.",
                requirements: [
                    "Claim Processing",
                    "Fraud Detection",
                    "Cost Attribution"
                ]
            },
            {
                id: "qms",
                name: "Quality Management System",
                shortName: "QMS",
                icon: "✅",
                description: "Qualitätsmanagement: Issue Tracking, SPC/SQC, Audit Management.",
                requirements: [
                    "Issue Tracking",
                    "SPC/SQC",
                    "Audit Trail"
                ]
            },
            {
                id: "fmea-db",
                name: "FMEA Database",
                shortName: "FMEA",
                icon: "📋",
                description: "Failure Mode and Effects Analysis: Design FMEA, Process FMEA, RPN Tracking.",
                requirements: [
                    "Design FMEA",
                    "Process FMEA",
                    "RPN Calculation",
                    "Action Tracking"
                ]
            },
            {
                id: "8d-engine",
                name: "8D Process Engine",
                shortName: "8D",
                icon: "🔧",
                description: "Problemlösungsprozess: 8D Report Workflow, Root Cause, Corrective Actions.",
                requirements: [
                    "8D Workflow",
                    "Root Cause Analysis",
                    "Action Management"
                ]
            },
            {
                id: "parts-forecast",
                name: "Parts Demand Forecasting",
                shortName: "PDF",
                icon: "📦",
                description: "Ersatzteil-Bedarfsprognose: Demand Planning, Inventory Optimization.",
                requirements: [
                    "Demand Forecasting",
                    "Safety Stock",
                    "Lead Time Optimization"
                ]
            },
            {
                id: "service-optimizer",
                name: "Service Network Optimizer",
                shortName: "SNO",
                icon: "🔧",
                description: "Werkstatt-Netzwerk Optimierung: Capacity Planning, Appointment Scheduling.",
                requirements: [
                    "Capacity Planning",
                    "Scheduling",
                    "Resource Allocation"
                ]
            },
            {
                id: "pricing-engine",
                name: "Dynamic Pricing Engine",
                shortName: "DPE",
                icon: "💰",
                description: "Dynamische Preisgestaltung: Marktanalyse, Incentive Optimization, Yield Management.",
                requirements: [
                    "Market Analysis",
                    "Price Optimization",
                    "Competitor Monitoring"
                ]
            }
        ]
    },

    // =========================================================================
    // FRONTENDS - User Applications
    // =========================================================================
    frontends: {
        categoryName: "FRONTENDS",
        categoryColor: "#1976D2",
        components: [
            {
                id: "driver-app",
                name: "Driver Mobile App",
                shortName: "App",
                icon: "📱",
                description: "Kunden-App: Remote Services, Fahrzeugstatus, Navigation, Charging, Service Booking.",
                requirements: [
                    "iOS/Android",
                    "Push Notifications",
                    "Secure Authentication"
                ]
            },
            {
                id: "fleet-dashboard",
                name: "Fleet Manager Dashboard",
                shortName: "FMD",
                icon: "📊",
                description: "Flotten-Dashboard: Fahrzeugübersicht, KPIs, Alerts, Reports.",
                requirements: [
                    "Real-time Updates",
                    "Custom Reports",
                    "Export Functions"
                ]
            },
            {
                id: "quality-cockpit",
                name: "Quality Cockpit",
                shortName: "QC",
                icon: "🎛️",
                description: "Qualitäts-Dashboard: Echtzeit-Übersicht aller Issues, Trends, Alerts.",
                requirements: [
                    "Real-time Monitoring",
                    "Drill-down",
                    "Alert Management"
                ]
            },
            {
                id: "technician-app",
                name: "Service Technician App",
                shortName: "STA",
                icon: "🔧",
                description: "Werkstatt-App: Diagnose, Reparaturanleitungen, Teilebestellung, Dokumentation.",
                requirements: [
                    "Offline Mode",
                    "Diagnostic Integration",
                    "Parts Catalog"
                ]
            },
            {
                id: "dealer-portal",
                name: "Dealer Portal",
                shortName: "DP",
                icon: "🏢",
                description: "Händler-Portal: Fahrzeugbestand, Kundenmanagement, Kampagnen, Reporting.",
                requirements: [
                    "Inventory Management",
                    "CRM Integration",
                    "Campaign Management"
                ]
            },
            {
                id: "exec-dashboard",
                name: "Executive Dashboard",
                shortName: "Exec",
                icon: "📈",
                description: "Management-Dashboard: KPIs, Trends, Alerts, Strategic Insights.",
                requirements: [
                    "KPI Overview",
                    "Trend Analysis",
                    "Mobile Access"
                ]
            },
            {
                id: "ota-monitor",
                name: "OTA Monitoring Dashboard",
                shortName: "OTM",
                icon: "📡",
                description: "OTA-Überwachung: Rollout-Status, Success Rate, Error Tracking.",
                requirements: [
                    "Rollout Tracking",
                    "Error Analysis",
                    "Rollback Trigger"
                ]
            },
            {
                id: "digital-twin-viewer",
                name: "Digital Twin Viewer",
                shortName: "DTV",
                icon: "🖥️",
                description: "3D-Visualisierung des Digital Twin: Fahrzeug, Produktion, Simulation.",
                requirements: [
                    "3D Rendering",
                    "Real-time Data",
                    "Simulation Mode"
                ]
            }
        ]
    },

    // =========================================================================
    // EXTERNAL - Third Party & Partner
    // =========================================================================
    external: {
        categoryName: "EXTERNAL / PARTNER",
        categoryColor: "#455A64",
        components: [
            {
                id: "weather-api",
                name: "Weather Data API",
                shortName: "Weather",
                icon: "🌤️",
                description: "Wetterdaten-Integration: Aktuelle Bedingungen, Vorhersagen, Historische Daten.",
                requirements: [
                    "Real-time Data",
                    "Forecast API",
                    "Geo-based Queries"
                ]
            },
            {
                id: "traffic-api",
                name: "Traffic Data Provider",
                shortName: "Traffic",
                icon: "🚦",
                description: "Verkehrsdaten: Echtzeit-Traffic, Incidents, Route Conditions.",
                requirements: [
                    "Real-time Traffic",
                    "Incident Reports",
                    "Routing Data"
                ]
            },
            {
                id: "insurance-api",
                name: "Insurance Partner API",
                shortName: "Ins",
                icon: "🛡️",
                description: "Versicherungs-Schnittstelle: UBI Data Sharing, Claims, Risk Scores.",
                requirements: [
                    "Secure Data Sharing",
                    "Privacy Compliance",
                    "Real-time Events"
                ]
            },
            {
                id: "energy-grid",
                name: "Energy Grid Interface",
                shortName: "Grid",
                icon: "⚡",
                description: "Stromnetz-Anbindung: V2G Communication, Dynamic Pricing, Grid Balancing.",
                requirements: [
                    "OCPP 2.x",
                    "ISO 15118",
                    "Price Signals"
                ]
            },
            {
                id: "map-provider",
                name: "Map & Navigation Provider",
                shortName: "Maps",
                icon: "🗺️",
                description: "Kartendienst: HD Maps, POI, Routing, Real-time Updates.",
                requirements: [
                    "HD Maps",
                    "Live Updates",
                    "POI Database"
                ]
            },
            {
                id: "supplier-portal",
                name: "Supplier Collaboration Portal",
                shortName: "SCP",
                icon: "🤝",
                description: "Lieferanten-Portal: Qualitätsdaten, Forecasts, 8D-Prozesse.",
                requirements: [
                    "Delta Sharing",
                    "8D Exchange",
                    "Quality Metrics"
                ]
            },
            {
                id: "charging-network",
                name: "Charging Network API",
                shortName: "Charge",
                icon: "🔌",
                description: "Ladenetzwerk-Integration: Station Availability, Pricing, Reservation.",
                requirements: [
                    "Station Status",
                    "Pricing API",
                    "Plug & Charge"
                ]
            },
            {
                id: "regulatory-api",
                name: "Regulatory Reporting API",
                shortName: "Reg",
                icon: "📜",
                description: "Behörden-Schnittstelle: Rückruf-Meldungen, Compliance Reports, Zulassung.",
                requirements: [
                    "NHTSA/KBA Interface",
                    "Recall Management",
                    "Compliance Reports"
                ]
            }
        ]
    },

    // =========================================================================
    // CLOUD PLATFORMS - Hyperscaler & Data Infrastructure
    // =========================================================================
    cloudPlatforms: {
        categoryName: "CLOUD PLATFORMS",
        categoryColor: "#FF6F00",
        components: [
            {
                id: "aws-cloud",
                name: "AWS Cloud Services",
                shortName: "AWS",
                icon: "☁️",
                description: "Amazon Web Services: EC2, S3, Lambda, IoT Core, SageMaker für ML Workloads.",
                requirements: [
                    "VPC Configuration",
                    "IAM Roles & Policies",
                    "S3 Bucket Encryption",
                    "CloudWatch Monitoring",
                    "TISAX-compliant Setup"
                ]
            },
            {
                id: "azure-cloud",
                name: "Microsoft Azure",
                shortName: "Azure",
                icon: "☁️",
                description: "Azure Cloud Platform: Azure IoT Hub, Synapse Analytics, Azure ML, Data Factory.",
                requirements: [
                    "Azure Active Directory",
                    "Virtual Network",
                    "Key Vault Integration",
                    "Azure Monitor",
                    "Compliance Center"
                ]
            },
            {
                id: "databricks",
                name: "Databricks Platform",
                shortName: "DBX",
                icon: "⚡",
                description: "Unified Analytics Platform: Lakehouse Architecture, Delta Lake, MLflow, Spark Clusters.",
                requirements: [
                    "Unity Catalog",
                    "Workspace Configuration",
                    "Cluster Policies",
                    "Delta Sharing enabled",
                    "Photon Runtime"
                ]
            },
            {
                id: "delta-sharing-server",
                name: "Delta Sharing Server",
                shortName: "DSS",
                icon: "🔗",
                description: "Open Protocol für sicheren Datenaustausch: Cross-Organization, Zero-Copy Sharing.",
                requirements: [
                    "Share Endpoints",
                    "Recipient Management",
                    "Audit Logging",
                    "Token Authentication",
                    "Data Governance"
                ]
            },
            {
                id: "gcp-cloud",
                name: "Google Cloud Platform",
                shortName: "GCP",
                icon: "☁️",
                description: "GCP Services: BigQuery, Vertex AI, Cloud IoT, Dataflow für Streaming Analytics.",
                requirements: [
                    "Project Configuration",
                    "Service Accounts",
                    "VPC Networks",
                    "Cloud Logging",
                    "Security Command Center"
                ]
            },
            {
                id: "snowflake",
                name: "Snowflake Data Cloud",
                shortName: "SF",
                icon: "❄️",
                description: "Cloud Data Warehouse: Data Sharing, Secure Data Exchange, Multi-Cloud Support.",
                requirements: [
                    "Warehouse Configuration",
                    "Data Sharing Setup",
                    "Role-based Access",
                    "Query Monitoring",
                    "Cross-Cloud Replication"
                ]
            },
            {
                id: "terraform",
                name: "Terraform IaC",
                shortName: "TF",
                icon: "🔧",
                description: "Infrastructure as Code: Multi-Cloud Provisioning, State Management, Module Registry.",
                requirements: [
                    "State Backend",
                    "Provider Configuration",
                    "Module Versioning",
                    "CI/CD Integration",
                    "Policy as Code"
                ]
            },
            {
                id: "kubernetes",
                name: "Kubernetes Cluster",
                shortName: "K8s",
                icon: "☸️",
                description: "Container Orchestration: EKS/AKS/GKE, Service Mesh, Auto-Scaling, GitOps.",
                requirements: [
                    "Cluster Configuration",
                    "Namespace Isolation",
                    "Ingress Controller",
                    "Secrets Management",
                    "Pod Security Policies"
                ]
            }
        ]
    }
};

// =========================================================================
// UTILITY FUNCTIONS
// =========================================================================

/**
 * Get all components as flat array
 */
function getAllComponents() {
    const allComponents = [];
    for (const category of Object.values(AUTOMOTIVE_COMPONENTS)) {
        for (const component of category.components) {
            allComponents.push({
                ...component,
                category: category.categoryName,
                categoryColor: category.categoryColor
            });
        }
    }
    return allComponents;
}

/**
 * Get component by ID
 */
function getComponentById(id) {
    for (const category of Object.values(AUTOMOTIVE_COMPONENTS)) {
        const found = category.components.find(c => c.id === id);
        if (found) {
            return {
                ...found,
                category: category.categoryName,
                categoryColor: category.categoryColor
            };
        }
    }
    return null;
}

/**
 * Get components by category
 */
function getComponentsByCategory(categoryKey) {
    const category = AUTOMOTIVE_COMPONENTS[categoryKey];
    if (!category) return [];
    return category.components.map(c => ({
        ...c,
        category: category.categoryName,
        categoryColor: category.categoryColor
    }));
}

/**
 * Search components by name or description
 */
function searchComponents(query) {
    const lowerQuery = query.toLowerCase();
    return getAllComponents().filter(c =>
        c.name.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery) ||
        c.shortName.toLowerCase().includes(lowerQuery)
    );
}

/**
 * Get category statistics
 */
function getCategoryStats() {
    const stats = {};
    for (const [key, category] of Object.entries(AUTOMOTIVE_COMPONENTS)) {
        stats[key] = {
            name: category.categoryName,
            color: category.categoryColor,
            count: category.components.length
        };
    }
    return stats;
}

/**
 * Import components into the Data Platform Builder
 * This function integrates with the existing appData structure
 */
function importComponentsToBuilder(targetCategories) {
    // Map component library categories to builder categories
    const categoryMapping = {
        'vehicleSystems': 'ENTWICKLUNG',
        'dataIngestion': 'PRODUKTION',
        'dataPlatform': 'Audi Services',
        'processing': 'Audi Services',
        'mlAi': 'Audi Services',
        'backendServices': 'Audi Services',
        'frontends': 'NUTZUNG',
        'external': 'Third Party'
    };

    const importedBlocks = [];

    for (const [categoryKey, category] of Object.entries(AUTOMOTIVE_COMPONENTS)) {
        const targetCategory = targetCategories[categoryMapping[categoryKey]] || targetCategories['Audi Services'];

        if (!targetCategory) continue;

        for (const component of category.components) {
            const block = {
                id: `block-${component.id}-${Date.now()}`,
                name: component.name,
                description: component.description,
                icon: component.icon,
                category: targetCategory.name || categoryMapping[categoryKey],
                requirements: component.requirements.map((req, idx) => ({
                    id: `req-${component.id}-${idx}`,
                    text: req,
                    completed: false
                }))
            };
            importedBlocks.push(block);
        }
    }

    return importedBlocks;
}

// Export for use in browser
if (typeof window !== 'undefined') {
    window.AUTOMOTIVE_COMPONENTS = AUTOMOTIVE_COMPONENTS;
    window.getAllComponents = getAllComponents;
    window.getComponentById = getComponentById;
    window.getComponentsByCategory = getComponentsByCategory;
    window.searchComponents = searchComponents;
    window.getCategoryStats = getCategoryStats;
    window.importComponentsToBuilder = importComponentsToBuilder;
}

// Export for Node.js (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AUTOMOTIVE_COMPONENTS,
        getAllComponents,
        getComponentById,
        getComponentsByCategory,
        searchComponents,
        getCategoryStats,
        importComponentsToBuilder
    };
}

console.log('📦 Automotive Component Library loaded');
console.log(`   Total components: ${getAllComponents().length}`);
console.log('   Categories:', Object.keys(AUTOMOTIVE_COMPONENTS).join(', '));
