/**
 * Automotive Data Platform - Component Library v3.0
 * ==================================================
 * 86 automotive components organized in 8 categories
 *
 * Categories:
 * 1. VEHICLE - In-Vehicle Systems
 * 2. VEHICLE BACKEND - Edge & Gateway Infrastructure
 * 3. DATA PROCESSING - Data Platform & ETL
 * 4. ANALYTICS - ML/AI & Analytics
 * 5. SERVICES - Backend Services & Cloud
 * 6. FRONTEND - User Applications
 * 7. CUSTOMER - Customer Services
 * 8. AFTERSALES - Quality, Service & Partners
 */

const AUTOMOTIVE_COMPONENTS = {

    // =========================================================================
    // 1. VEHICLE - In-Vehicle Systems (ECUs, Controllers, Sensors)
    // =========================================================================
    vehicle: {
        categoryName: "VEHICLE",
        categoryIcon: "car",
        categoryColor: "#1565C0",
        components: [
            {
                id: "cvc",
                name: "Central Vehicle Computer",
                shortName: "CVC",
                icon: "cpu",
                description: "Zentraler Fahrzeugrechner für Software-Defined Vehicle Architektur.",
                requirements: ["AUTOSAR Adaptive", "Echtzeit-OS", "OTA Update", "ISO 21434"]
            },
            {
                id: "zone-front",
                name: "Zone Controller Front",
                shortName: "ZC-F",
                icon: "chip",
                description: "Zonal Controller für Front-Domäne: ADAS, Beleuchtung, Klima.",
                requirements: ["CAN/LIN Gateway", "Ethernet Backbone", "Sensor Fusion"]
            },
            {
                id: "zone-rear",
                name: "Zone Controller Rear",
                shortName: "ZC-R",
                icon: "chip",
                description: "Zonal Controller für Heck-Domäne: Beleuchtung, Kofferraum, Anhänger.",
                requirements: ["CAN/LIN Gateway", "Ethernet Backbone", "Trailer Interface"]
            },
            {
                id: "zone-left",
                name: "Zone Controller Left",
                shortName: "ZC-L",
                icon: "chip",
                description: "Zonal Controller für linke Seite: Fahrertür, Spiegel, Sitz.",
                requirements: ["Door Module Integration", "Seat Control Interface"]
            },
            {
                id: "zone-right",
                name: "Zone Controller Right",
                shortName: "ZC-RT",
                icon: "chip",
                description: "Zonal Controller für rechte Seite: Beifahrertür, Spiegel, Sitz.",
                requirements: ["Door Module Integration", "Seat Control Interface"]
            },
            {
                id: "bms",
                name: "Battery Management System",
                shortName: "BMS",
                icon: "battery",
                description: "HV-Batterie Überwachung: SoC, SoH, Zellbalancing, Thermomanagement.",
                requirements: ["Cell Monitoring", "Thermal Management", "ASIL-D", "V2G"]
            },
            {
                id: "adas-ecu",
                name: "ADAS ECU",
                shortName: "ADAS",
                icon: "eye",
                description: "Advanced Driver Assistance: Sensorfusion, Objekterkennung, Pfadplanung.",
                requirements: ["Camera/Radar/LiDAR", "Sensor Fusion", "ASIL-D"]
            },
            {
                id: "infotainment",
                name: "Infotainment ECU",
                shortName: "IVI",
                icon: "tablet",
                description: "In-Vehicle Infotainment: Multimedia, Navigation, Voice Assistant.",
                requirements: ["Android Automotive", "Voice Recognition", "Smartphone Integration"]
            },
            {
                id: "tcu",
                name: "Telematics Control Unit",
                shortName: "TCU",
                icon: "radio",
                description: "Telematik für Fahrzeug-Cloud: 4G/5G, V2X, eCall, Remote Services.",
                requirements: ["4G/5G Modem", "V2X", "eCall", "GNSS"]
            },
            {
                id: "gateway",
                name: "Central Gateway",
                shortName: "CGW",
                icon: "shuffle",
                description: "Zentrales Gateway für Netzwerk-Routing und Protokollübersetzung.",
                requirements: ["Multi-Protocol", "Firewall", "Diagnostic Routing"]
            },
            {
                id: "bcm",
                name: "Body Control Module",
                shortName: "BCM",
                icon: "lightbulb",
                description: "Karosserie-Steuergerät: Beleuchtung, Verriegelung, Fensterheber.",
                requirements: ["LIN Master", "PWM Control", "Low Power Mode"]
            },
            {
                id: "powertrain",
                name: "Powertrain ECU",
                shortName: "PTM",
                icon: "zap",
                description: "Antriebsstrang: E-Motor, Inverter, Getriebe, Rekuperation.",
                requirements: ["Motor Control", "Inverter Interface", "ASIL-D"]
            }
        ]
    },

    // =========================================================================
    // 2. VEHICLE BACKEND - Edge & Gateway Infrastructure
    // =========================================================================
    vehicleBackend: {
        categoryName: "VEHICLE BACKEND",
        categoryIcon: "globe",
        categoryColor: "#7B1FA2",
        components: [
            {
                id: "vehicle-collector",
                name: "Vehicle Data Collector",
                shortName: "VDC",
                icon: "download",
                description: "Edge-Service zur Sammlung und Vorverarbeitung von Telematikdaten.",
                requirements: ["Edge Processing", "Compression", "Offline Buffer", "Privacy Filter"]
            },
            {
                id: "obd-bridge",
                name: "OBD Diagnostic Bridge",
                shortName: "OBD",
                icon: "plug",
                description: "Diagnose-Schnittstelle: OBD-II, DoIP, UDS Protokolle.",
                requirements: ["OBD-II Protocol", "DoIP Support", "UDS Services"]
            },
            {
                id: "iot-hub",
                name: "IoT Hub",
                shortName: "IoT",
                icon: "globe",
                description: "Managed IoT Platform: Device Management, Message Routing.",
                requirements: ["MQTT/AMQP", "Device Twin", "Message Routing", "Auto-Scaling"]
            },
            {
                id: "kafka-cluster",
                name: "Kafka Streaming",
                shortName: "Kafka",
                icon: "bar-chart",
                description: "Event Streaming für Echtzeit-Datenverarbeitung.",
                requirements: ["High Throughput", "Exactly-Once", "Schema Registry"]
            },
            {
                id: "edge-gateway",
                name: "Edge Gateway",
                shortName: "Edge",
                icon: "factory",
                description: "Edge Computing für Produktion: PLCs, Sensoren, MES.",
                requirements: ["OPC-UA", "Local Processing", "Store & Forward"]
            },
            {
                id: "fleet-gateway",
                name: "Fleet Telematics Gateway",
                shortName: "FTG",
                icon: "truck",
                description: "Gateway für Flottendaten: Multi-Vehicle Aggregation.",
                requirements: ["Multi-Vehicle", "Fleet Analytics", "API Integration"]
            },
            {
                id: "production-collector",
                name: "Production Data Collector",
                shortName: "PDC",
                icon: "factory",
                description: "Datensammler für Produktionslinie: Prozesse, Messwerte, Qualität.",
                requirements: ["MES Integration", "SCADA Interface", "Real-time"]
            },
            {
                id: "cdc-connector",
                name: "CDC Connector",
                shortName: "CDC",
                icon: "refresh",
                description: "Change Data Capture für Echtzeit-Replikation aus ERP, MES, CRM.",
                requirements: ["Debezium", "Transaction Log Mining", "Schema Evolution"]
            },
            {
                id: "batch-loader",
                name: "Batch File Loader",
                shortName: "Batch",
                icon: "folder",
                description: "Batch-Ingestion: CSV, Parquet, XML von Partnern.",
                requirements: ["File Formats", "Schema Validation", "Error Handling"]
            },
            {
                id: "supplier-connector",
                name: "Supplier Data Connector",
                shortName: "SDC",
                icon: "users",
                description: "Sichere Datenanbindung für Lieferanten via Delta Sharing.",
                requirements: ["Delta Sharing", "EDI Support", "Encryption"]
            }
        ]
    },

    // =========================================================================
    // 3. DATA PROCESSING - Data Platform & ETL
    // =========================================================================
    dataProcessing: {
        categoryName: "DATA PROCESSING",
        categoryIcon: "database",
        categoryColor: "#00695C",
        components: [
            {
                id: "bronze-layer",
                name: "Bronze Layer",
                shortName: "Bronze",
                icon: "layers",
                description: "Raw Data Layer: Rohdaten, append-only, vollständige Historie.",
                requirements: ["Raw Storage", "Schema-on-Read", "Retention Policy"]
            },
            {
                id: "silver-layer",
                name: "Silver Layer",
                shortName: "Silver",
                icon: "layers",
                description: "Cleaned Data Layer: Validiert, bereinigt, angereichert.",
                requirements: ["Validation", "Deduplication", "Schema Enforcement"]
            },
            {
                id: "gold-layer",
                name: "Gold Layer",
                shortName: "Gold",
                icon: "layers",
                description: "Business Layer: Aggregiert, business-ready für Analytics.",
                requirements: ["Aggregations", "Dimension Tables", "Fact Tables"]
            },
            {
                id: "delta-lake",
                name: "Delta Lake Storage",
                shortName: "Delta",
                icon: "hard-drive",
                description: "ACID Data Lake: Time Travel, Schema Evolution, Unified Batch/Stream.",
                requirements: ["ACID Transactions", "Time Travel", "Schema Evolution"]
            },
            {
                id: "unity-catalog",
                name: "Unity Catalog",
                shortName: "Unity",
                icon: "archive",
                description: "Metadaten-Katalog: Governance, Access Control, Lineage.",
                requirements: ["Fine-grained ACLs", "Lineage", "Audit Logging"]
            },
            {
                id: "dq-engine",
                name: "Data Quality Engine",
                shortName: "DQE",
                icon: "shield-check",
                description: "Automatisierte Datenqualität: Rules, Anomalie-Detection.",
                requirements: ["Rule Validation", "Anomaly Detection", "Quality Dashboards"]
            },
            {
                id: "lineage-tracker",
                name: "Lineage Tracker",
                shortName: "LT",
                icon: "link",
                description: "End-to-End Data Lineage: Herkunft, Transformationen.",
                requirements: ["Column-level Lineage", "Impact Analysis", "Visualization"]
            },
            {
                id: "spark-cluster",
                name: "Spark Cluster",
                shortName: "Spark",
                icon: "zap",
                description: "Distributed Processing für Batch und Streaming.",
                requirements: ["Auto-Scaling", "Photon Engine", "Spot Instances"]
            },
            {
                id: "dlt-pipelines",
                name: "Delta Live Tables",
                shortName: "DLT",
                icon: "refresh",
                description: "Deklarative ETL Pipelines mit Auto-Recovery.",
                requirements: ["Declarative ETL", "Auto-Recovery", "Expectations"]
            },
            {
                id: "sql-warehouse",
                name: "SQL Warehouse",
                shortName: "SQL",
                icon: "database",
                description: "Serverless SQL für BI und Ad-hoc Queries.",
                requirements: ["Serverless", "High Concurrency", "BI Integration"]
            },
            {
                id: "stream-processor",
                name: "Stream Processing Engine",
                shortName: "SPE",
                icon: "arrow-left-right",
                description: "Echtzeit-Streaming: Structured Streaming, Watermarks.",
                requirements: ["Structured Streaming", "Watermarks", "Exactly-Once"]
            },
            {
                id: "etl-engine",
                name: "ETL Pipeline Engine",
                shortName: "ETL",
                icon: "sliders",
                description: "Orchestrierte ETL Workflows: Scheduling, Dependencies.",
                requirements: ["Workflow Orchestration", "Dependencies", "Retry Logic"]
            }
        ]
    },

    // =========================================================================
    // 4. ANALYTICS - ML/AI & Analytics
    // =========================================================================
    analytics: {
        categoryName: "ANALYTICS",
        categoryIcon: "brain",
        categoryColor: "#C62828",
        components: [
            {
                id: "feature-store",
                name: "Feature Store",
                shortName: "FS",
                icon: "target",
                description: "ML Feature Repository: Versioning, Online/Offline Serving.",
                requirements: ["Feature Versioning", "Online Serving", "Offline Serving"]
            },
            {
                id: "model-registry",
                name: "Model Registry",
                shortName: "MLR",
                icon: "archive",
                description: "ML-Modell Verwaltung: Versioning, Staging, Deployment.",
                requirements: ["Model Versioning", "Stage Management", "Approval Workflows"]
            },
            {
                id: "ml-training",
                name: "ML Training Pipeline",
                shortName: "MLT",
                icon: "brain",
                description: "End-to-End ML Training: Feature Engineering, Tuning.",
                requirements: ["Distributed Training", "Hyperparameter Tuning", "Experiment Tracking"]
            },
            {
                id: "automl",
                name: "AutoML Engine",
                shortName: "AutoML",
                icon: "bot",
                description: "Automatisiertes ML: Feature Selection, Algorithm Selection.",
                requirements: ["Auto Feature Engineering", "Algorithm Selection", "Explainability"]
            },
            {
                id: "anomaly-detection",
                name: "Anomaly Detection Model",
                shortName: "ADM",
                icon: "search",
                description: "ML-basierte Anomalie-Erkennung für Fahrzeug- und Produktionsdaten.",
                requirements: ["Unsupervised Learning", "Real-time Scoring", "Thresholds"]
            },
            {
                id: "predictive-maintenance",
                name: "Predictive Maintenance Model",
                shortName: "PDM",
                icon: "sparkles",
                description: "Vorhersagemodell: Remaining Useful Life, Failure Prediction.",
                requirements: ["Time Series", "Survival Analysis", "Confidence Intervals"]
            },
            {
                id: "genai-service",
                name: "GenAI / LLM Service",
                shortName: "GenAI",
                icon: "sparkles",
                description: "Generative AI: LLM für Dokumentenanalyse, Chatbots.",
                requirements: ["LLM Hosting", "RAG Pipeline", "Prompt Management"]
            },
            {
                id: "cv-pipeline",
                name: "Computer Vision Pipeline",
                shortName: "CV",
                icon: "eye",
                description: "Bildverarbeitung: Qualitätskontrolle, ADAS Training.",
                requirements: ["Image Processing", "Object Detection", "GPU Acceleration"]
            },
            {
                id: "nlp-engine",
                name: "NLP Engine",
                shortName: "NLP",
                icon: "type",
                description: "Natural Language Processing: Sentiment, Classification.",
                requirements: ["Text Classification", "NER", "Multi-Language"]
            },
            {
                id: "recommendation",
                name: "Recommendation Engine",
                shortName: "REC",
                icon: "lightbulb",
                description: "Empfehlungssystem: Next-Best-Action, Recommendations.",
                requirements: ["Collaborative Filtering", "Content-based", "Real-time"]
            },
            {
                id: "model-serving",
                name: "Model Serving Endpoint",
                shortName: "MSE",
                icon: "target",
                description: "Low-Latency Model Inference: REST APIs, Batch Scoring.",
                requirements: ["Low Latency", "Auto-Scaling", "Canary Deployments"]
            },
            {
                id: "ab-testing",
                name: "A/B Testing Engine",
                shortName: "A/B",
                icon: "shuffle",
                description: "Experimentier-Plattform für Modell-Vergleiche.",
                requirements: ["Traffic Splitting", "Statistical Analysis", "Metrics"]
            },
            {
                id: "realtime-analytics",
                name: "Real-time Analytics Engine",
                shortName: "RTA",
                icon: "gauge-circle",
                description: "Sub-Sekunden Analytics für Echtzeit-Dashboards.",
                requirements: ["Low Latency", "In-Memory", "Push Updates"]
            },
            {
                id: "aggregation-engine",
                name: "Aggregation Engine",
                shortName: "AGG",
                icon: "trending-up",
                description: "Vordefinierte Aggregationen: Rollups, Materialized Views.",
                requirements: ["Pre-Aggregations", "Materialized Views", "Incremental"]
            }
        ]
    },

    // =========================================================================
    // 5. SERVICES - Backend Services & Cloud Platforms
    // =========================================================================
    services: {
        categoryName: "SERVICES",
        categoryIcon: "cloud",
        categoryColor: "#E65100",
        components: [
            {
                id: "ota-server",
                name: "OTA Update Server",
                shortName: "OTA",
                icon: "upload",
                description: "Over-the-Air Update: Staged Rollout, Versioning, Rollback.",
                requirements: ["Staged Rollout", "Version Control", "Rollback Support"]
            },
            {
                id: "delta-sharing",
                name: "Delta Sharing Hub",
                shortName: "DSH",
                icon: "lock",
                description: "Sichere Datenfreigabe: Open Protocol, Zero-Copy Sharing.",
                requirements: ["Open Protocol", "Access Tokens", "Audit Trail"]
            },
            {
                id: "aws-cloud",
                name: "AWS Cloud Services",
                shortName: "AWS",
                icon: "cloud",
                description: "Amazon Web Services: EC2, S3, Lambda, IoT Core, SageMaker.",
                requirements: ["VPC Config", "IAM Policies", "TISAX-compliant"]
            },
            {
                id: "azure-cloud",
                name: "Microsoft Azure",
                shortName: "Azure",
                icon: "cloud",
                description: "Azure Cloud: IoT Hub, Synapse, Azure ML, Data Factory.",
                requirements: ["Azure AD", "Virtual Network", "Key Vault"]
            },
            {
                id: "databricks",
                name: "Databricks Platform",
                shortName: "DBX",
                icon: "server",
                description: "Unified Analytics: Lakehouse, Delta Lake, MLflow, Spark.",
                requirements: ["Unity Catalog", "Workspace Config", "Photon Runtime"]
            },
            {
                id: "delta-sharing-server",
                name: "Delta Sharing Server",
                shortName: "DSS",
                icon: "link",
                description: "Open Protocol für Cross-Organization Data Sharing.",
                requirements: ["Share Endpoints", "Recipients", "Audit Logging"]
            },
            {
                id: "gcp-cloud",
                name: "Google Cloud Platform",
                shortName: "GCP",
                icon: "cloud",
                description: "GCP: BigQuery, Vertex AI, Cloud IoT, Dataflow.",
                requirements: ["Project Config", "Service Accounts", "VPC Networks"]
            },
            {
                id: "snowflake",
                name: "Snowflake Data Cloud",
                shortName: "SF",
                icon: "database",
                description: "Cloud Data Warehouse: Data Sharing, Multi-Cloud.",
                requirements: ["Warehouse Config", "Data Sharing", "Role-based Access"]
            },
            {
                id: "terraform",
                name: "Terraform IaC",
                shortName: "TF",
                icon: "wrench",
                description: "Infrastructure as Code: Multi-Cloud Provisioning.",
                requirements: ["State Backend", "Provider Config", "CI/CD Integration"]
            },
            {
                id: "kubernetes",
                name: "Kubernetes Cluster",
                shortName: "K8s",
                icon: "server",
                description: "Container Orchestration: EKS/AKS/GKE, Service Mesh.",
                requirements: ["Cluster Config", "Namespace Isolation", "Ingress"]
            },
            {
                id: "ci-cd-pipeline",
                name: "CI/CD Pipeline",
                shortName: "CICD",
                icon: "refresh",
                description: "Continuous Integration/Deployment: Build, Test, Deploy.",
                requirements: ["Git Integration", "Automated Testing", "Deploy Stages"]
            }
        ]
    },

    // =========================================================================
    // 6. FRONTEND - User Applications & Dashboards
    // =========================================================================
    frontend: {
        categoryName: "FRONTEND",
        categoryIcon: "smartphone",
        categoryColor: "#1976D2",
        components: [
            {
                id: "driver-app",
                name: "Driver Mobile App",
                shortName: "App",
                icon: "smartphone",
                description: "Kunden-App: Remote Services, Status, Navigation, Charging.",
                requirements: ["iOS/Android", "Push Notifications", "Secure Auth"]
            },
            {
                id: "fleet-dashboard",
                name: "Fleet Manager Dashboard",
                shortName: "FMD",
                icon: "bar-chart",
                description: "Flotten-Dashboard: Fahrzeugübersicht, KPIs, Alerts.",
                requirements: ["Real-time Updates", "Custom Reports", "Export"]
            },
            {
                id: "quality-cockpit",
                name: "Quality Cockpit",
                shortName: "QC",
                icon: "sliders",
                description: "Qualitäts-Dashboard: Issues, Trends, Alerts.",
                requirements: ["Real-time Monitoring", "Drill-down", "Alert Management"]
            },
            {
                id: "technician-app",
                name: "Service Technician App",
                shortName: "STA",
                icon: "wrench",
                description: "Werkstatt-App: Diagnose, Anleitungen, Teilebestellung.",
                requirements: ["Offline Mode", "Diagnostic Integration", "Parts Catalog"]
            },
            {
                id: "dealer-portal",
                name: "Dealer Portal",
                shortName: "DP",
                icon: "building",
                description: "Händler-Portal: Bestand, Kunden, Kampagnen.",
                requirements: ["Inventory Management", "CRM Integration", "Campaigns"]
            },
            {
                id: "exec-dashboard",
                name: "Executive Dashboard",
                shortName: "Exec",
                icon: "trending-up",
                description: "Management-Dashboard: KPIs, Trends, Strategic Insights.",
                requirements: ["KPI Overview", "Trend Analysis", "Mobile Access"]
            },
            {
                id: "ota-monitor",
                name: "OTA Monitoring Dashboard",
                shortName: "OTM",
                icon: "satellite",
                description: "OTA-Überwachung: Rollout-Status, Success Rate, Errors.",
                requirements: ["Rollout Tracking", "Error Analysis", "Rollback Trigger"]
            },
            {
                id: "digital-twin-viewer",
                name: "Digital Twin Viewer",
                shortName: "DTV",
                icon: "monitor",
                description: "3D-Visualisierung: Fahrzeug, Produktion, Simulation.",
                requirements: ["3D Rendering", "Real-time Data", "Simulation Mode"]
            }
        ]
    },

    // =========================================================================
    // 7. CUSTOMER - Customer Services & Development
    // =========================================================================
    customer: {
        categoryName: "CUSTOMER",
        categoryIcon: "users",
        categoryColor: "#00838F",
        components: [
            {
                id: "customer-360",
                name: "Customer 360 Service",
                shortName: "C360",
                icon: "user",
                description: "Ganzheitliche Kundenansicht: Profile, Interaktionen, Fahrzeuge.",
                requirements: ["Profile Management", "Consent Management", "GDPR"]
            },
            {
                id: "fleet-backend",
                name: "Fleet Management Backend",
                shortName: "FMB",
                icon: "car",
                description: "Backend für Flottenverwaltung: Tracking, TCO Analysis.",
                requirements: ["Real-time Tracking", "Geofencing", "Utilization Analytics"]
            },
            {
                id: "hil-simulator",
                name: "HIL Simulator Interface",
                shortName: "HIL",
                icon: "cpu",
                description: "Hardware-in-the-Loop: ECU Testing, Signal Injection.",
                requirements: ["Signal Simulation", "Real-time Processing", "Test Automation"]
            },
            {
                id: "data-logger",
                name: "Development Data Logger",
                shortName: "DDL",
                icon: "save",
                description: "High-Speed Datenerfassung: CAN, FlexRay, Ethernet.",
                requirements: ["High Bandwidth", "Time Sync", "Cloud Upload"]
            },
            {
                id: "calibration-tool",
                name: "Calibration Tool Interface",
                shortName: "CAL",
                icon: "sliders",
                description: "Kalibrier-Werkzeug: Parameter Tuning, Flash Programming.",
                requirements: ["XCP/CCP Protocol", "A2L Files", "Parameter Management"]
            },
            {
                id: "test-bench",
                name: "Test Bench Connector",
                shortName: "TBC",
                icon: "server",
                description: "Prüfstand-Anbindung: Motor, Batterie, Klimakammer.",
                requirements: ["Measurement Integration", "Test Sequences", "Data Export"]
            },
            {
                id: "validation-hub",
                name: "Validation Data Hub",
                shortName: "VDH",
                icon: "shield-check",
                description: "Validierungsdaten: Test Results, Requirements Tracing.",
                requirements: ["Requirements Linking", "Test Coverage", "Approval Workflows"]
            },
            {
                id: "simulation-cloud",
                name: "Simulation Cloud",
                shortName: "SIM",
                icon: "cloud",
                description: "Cloud-basierte Simulation: Virtual Testing, Scenarios.",
                requirements: ["Scalable Compute", "Scenario Library", "Result Analysis"]
            }
        ]
    },

    // =========================================================================
    // 8. AFTERSALES - Quality, Service & Partner Integration
    // =========================================================================
    aftersales: {
        categoryName: "AFTERSALES",
        categoryIcon: "wrench",
        categoryColor: "#37474F",
        components: [
            {
                id: "warranty-analytics",
                name: "Warranty Analytics Service",
                shortName: "WAS",
                icon: "bar-chart",
                description: "Garantie-Analyse: Claims, Fraud Detection, Cost Analytics.",
                requirements: ["Claim Processing", "Fraud Detection", "Cost Attribution"]
            },
            {
                id: "qms",
                name: "Quality Management System",
                shortName: "QMS",
                icon: "shield-check",
                description: "Qualitätsmanagement: Issue Tracking, SPC/SQC, Audits.",
                requirements: ["Issue Tracking", "SPC/SQC", "Audit Trail"]
            },
            {
                id: "fmea-db",
                name: "FMEA Database",
                shortName: "FMEA",
                icon: "archive",
                description: "Failure Mode and Effects Analysis: Design, Process FMEA.",
                requirements: ["Design FMEA", "Process FMEA", "RPN Calculation"]
            },
            {
                id: "8d-engine",
                name: "8D Process Engine",
                shortName: "8D",
                icon: "wrench",
                description: "Problemlösung: 8D Workflow, Root Cause Analysis.",
                requirements: ["8D Workflow", "Root Cause Analysis", "Action Management"]
            },
            {
                id: "parts-forecast",
                name: "Parts Demand Forecasting",
                shortName: "PDF",
                icon: "inbox",
                description: "Ersatzteil-Prognose: Demand Planning, Inventory.",
                requirements: ["Demand Forecasting", "Safety Stock", "Lead Time"]
            },
            {
                id: "service-optimizer",
                name: "Service Network Optimizer",
                shortName: "SNO",
                icon: "sliders",
                description: "Werkstatt-Optimierung: Capacity Planning, Scheduling.",
                requirements: ["Capacity Planning", "Scheduling", "Resource Allocation"]
            },
            {
                id: "pricing-engine",
                name: "Dynamic Pricing Engine",
                shortName: "DPE",
                icon: "trending-up",
                description: "Dynamische Preisgestaltung: Marktanalyse, Incentives.",
                requirements: ["Market Analysis", "Price Optimization", "Competitor Monitor"]
            },
            {
                id: "weather-api",
                name: "Weather Data API",
                shortName: "Weather",
                icon: "cloud",
                description: "Wetterdaten: Aktuelle Bedingungen, Vorhersagen.",
                requirements: ["Real-time Data", "Forecast API", "Geo-based"]
            },
            {
                id: "traffic-api",
                name: "Traffic Data Provider",
                shortName: "Traffic",
                icon: "car",
                description: "Verkehrsdaten: Echtzeit-Traffic, Incidents, Routes.",
                requirements: ["Real-time Traffic", "Incident Reports", "Routing Data"]
            },
            {
                id: "insurance-api",
                name: "Insurance Partner API",
                shortName: "Ins",
                icon: "shield",
                description: "Versicherung: UBI Data Sharing, Claims, Risk Scores.",
                requirements: ["Secure Sharing", "Privacy Compliance", "Real-time Events"]
            },
            {
                id: "energy-grid",
                name: "Energy Grid Interface",
                shortName: "Grid",
                icon: "zap",
                description: "Stromnetz: V2G Communication, Dynamic Pricing.",
                requirements: ["OCPP 2.x", "ISO 15118", "Price Signals"]
            },
            {
                id: "map-provider",
                name: "Map & Navigation Provider",
                shortName: "Maps",
                icon: "globe",
                description: "Kartendienst: HD Maps, POI, Routing.",
                requirements: ["HD Maps", "Live Updates", "POI Database"]
            },
            {
                id: "supplier-portal",
                name: "Supplier Collaboration Portal",
                shortName: "SCP",
                icon: "users",
                description: "Lieferanten-Portal: Qualitätsdaten, 8D-Prozesse.",
                requirements: ["Delta Sharing", "8D Exchange", "Quality Metrics"]
            },
            {
                id: "charging-network",
                name: "Charging Network API",
                shortName: "Charge",
                icon: "plug",
                description: "Ladenetzwerk: Station Availability, Pricing.",
                requirements: ["Station Status", "Pricing API", "Plug & Charge"]
            },
            {
                id: "regulatory-api",
                name: "Regulatory Reporting API",
                shortName: "Reg",
                icon: "save",
                description: "Behörden: Rückruf-Meldungen, Compliance Reports.",
                requirements: ["NHTSA/KBA Interface", "Recall Management", "Compliance"]
            }
        ]
    }
};

// =========================================================================
// UTILITY FUNCTIONS
// =========================================================================

function getAllComponents() {
    const allComponents = [];
    for (const category of Object.values(AUTOMOTIVE_COMPONENTS)) {
        for (const component of category.components) {
            allComponents.push({
                ...component,
                category: category.categoryName,
                categoryIcon: category.categoryIcon,
                categoryColor: category.categoryColor
            });
        }
    }
    return allComponents;
}

function getComponentById(id) {
    for (const category of Object.values(AUTOMOTIVE_COMPONENTS)) {
        const found = category.components.find(c => c.id === id);
        if (found) {
            return {
                ...found,
                category: category.categoryName,
                categoryIcon: category.categoryIcon,
                categoryColor: category.categoryColor
            };
        }
    }
    return null;
}

function getComponentsByCategory(categoryKey) {
    const category = AUTOMOTIVE_COMPONENTS[categoryKey];
    if (!category) return [];
    return category.components.map(c => ({
        ...c,
        category: category.categoryName,
        categoryIcon: category.categoryIcon,
        categoryColor: category.categoryColor
    }));
}

function searchComponents(query) {
    const lowerQuery = query.toLowerCase();
    return getAllComponents().filter(c =>
        c.name.toLowerCase().includes(lowerQuery) ||
        c.description.toLowerCase().includes(lowerQuery) ||
        c.shortName.toLowerCase().includes(lowerQuery)
    );
}

function getCategoryStats() {
    const stats = {};
    for (const [key, category] of Object.entries(AUTOMOTIVE_COMPONENTS)) {
        stats[key] = {
            name: category.categoryName,
            icon: category.categoryIcon,
            color: category.categoryColor,
            count: category.components.length
        };
    }
    return stats;
}

// Export for browser
if (typeof window !== 'undefined') {
    window.AUTOMOTIVE_COMPONENTS = AUTOMOTIVE_COMPONENTS;
    window.getAllComponents = getAllComponents;
    window.getComponentById = getComponentById;
    window.getComponentsByCategory = getComponentsByCategory;
    window.searchComponents = searchComponents;
    window.getCategoryStats = getCategoryStats;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        AUTOMOTIVE_COMPONENTS,
        getAllComponents,
        getComponentById,
        getComponentsByCategory,
        searchComponents,
        getCategoryStats
    };
}

console.log('📦 Automotive Component Library v3.0 loaded');
console.log(`   Total components: ${getAllComponents().length}`);
const stats = getCategoryStats();
for (const [key, stat] of Object.entries(stats)) {
    console.log(`   ${stat.icon} ${stat.name}: ${stat.count} components`);
}
