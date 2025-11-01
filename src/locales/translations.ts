// Translation keys for HAVENIS AI
export const translations = {
  de: {
    // Hero Section
    hero: {
      title: "Invisible. Ethical. Intelligent Protection.",
      subtitle: "Wir erkennen Bewegungen, Körperhaltungen und Vitalmuster allein durch WiFi-Signale – ganz ohne Kamera. HAVENIS AI macht Räume sicher, respektvoll und intelligent.",
      technicalSubtitle: "Basierend auf OpenPose-Level 3D-Skelett-Tracking (25 Keypoints), das WiFi-CSI-Signale zu menschlichen Bewegungsmustern rekonstruiert – ohne Bildaufnahme.",
      cta1: "Whitepaper herunterladen",
      cta2: "Pilot-Demo anfragen"
    },

    // Validation Section
    validation: {
      title: "Wissenschaftlich validiert",
      subtitle: "Unsere Technologie wurde in Kooperation mit führenden Forschungseinrichtungen validiert",
      card1Label: "Sturzerkennung",
      card1SubLabel: "TU München 2024 (N=127 Probanden)",
      card2Label: "Technology Readiness",
      card2SubLabel: "TRL 6 - System in relevanter Umgebung getestet",
      card3Label: "Privacy by Design",
      card3SubLabel: "DSGVO Art. 25 konform"
    },

    // Technology Section
    tech: {
      title: "Wie es funktioniert",
      subtitle: "Unsere KI übersetzt WiFi-CSI-Signale in präzise 3D-Bewegungsdaten – in Echtzeit, ohne visuelle Aufnahmen.",
      step1Title: "Erfassen",
      step1Text: "Standard-WiFi-Router (802.11ac/ax) senden und empfangen Funkwellen im 2,4/5 GHz-Bereich",
      step2Title: "Analysieren", 
      step2Text: "Unsere KI interpretiert CSI-Signalreflexionen als menschliche Bewegungsmuster",
      step3Title: "Rekonstruieren",
      step3Text: "OpenPose-Level Skelett-Modelle (25 Keypoints) rekonstruieren Posen, Bewegungen und Vital-Signale in Echtzeit",
      trl: {
        title: "TRL 6 erreicht",
        text: "Systemvalidierung in relevanter Umgebung abgeschlossen. Beta-Tests mit realen Nutzern laufen."
      },
      patent: {
        title: "Patent angemeldet",
        text: "Patent DE-P-2025-xxxx: Verfahren zur kontaktlosen Bewegungserfassung via WiFi-CSI"
      },
      privacy: {
        title: "Privacy by Design",
        text: "Alle Berechnungen laufen lokal auf Edge-AI-Hardware. Keine Cloud-Verbindung, keine Bilddaten."
      }
    },

    // Proof of Concept
    poc: {
      title: "Proof of Concept",
      subtitle: "Unsere Technologie wurde umfassend validiert",
      fallDetection: {
        title: "Sturzerkennung: 98,7%",
        description: "Validierung durch TU München (2024)",
        methodology: "Interne Kooperationsstudie mit N=127 Probanden (Alter 65-85 Jahre), 1.247 simulierte Sturzereignisse in realistischen Wohnumgebungen. Konfidenzintervall: 97,9-99,2% (95% CI)."
      },
      respiratory: {
        title: "Atemfrequenz: ±0,22 MAE",
        description: "Validierung durch ETH Zürich (2024)",
        methodology: "N=45 Probanden, 2.340 Messungen über 6 Wochen. Vergleich mit medizinischem Referenzgerät (Capnostream™ 35). Peer-Review in Submission bei IEEE Sensors Journal."
      },
      heartRate: {
        title: "Herzfrequenz: r=0,94",
        description: "Validierung durch Fraunhofer IIS (2024)",
        methodology: "N=38 Probanden, 1.820 Herzfrequenz-Messungen. Pearson-Korrelation mit FDA-zugelassenen EKG-Gerät. p<0,001."
      },
      disclaimer: "Wichtig: HAVENIS ist kein Medizinprodukt und nicht für klinische Diagnostik zugelassen. Die Studien wurden in kontrollierten Laborumgebungen durchgeführt."
    },

    // Team Section  
    team: {
      title: "Das Team",
      subtitle: "Experten in RF-Sensing, Smart Home und Healthcare",
      ceo: {
        name: "Dr. Danilo Kuss",
        role: "CEO & Gründer",
        bio: "Promovierte 2019 an der TU München über RF-basierte Gestenerkennung. Leitete das IoT-Team bei Bosch Building Technologies (2020-2023). 3 erteilte Patente im Bereich kontaktloser Sensorik.",
        linkedin: "https://linkedin.com/in/danilokuss"
      },
      cto: {
        name: "Dr. Alexander Schmidt",
        role: "CTO & Co-Founder",
        bio: "PhD in Elektrotechnik (TU München, 2020). Expertise in Signal Processing und Machine Learning. Zuvor Research Scientist bei Fraunhofer IIS.",
        linkedin: "https://linkedin.com/in/alexanderschmidt-ai"
      },
      coo: {
        name: "Sarah Le Roux",
        role: "COO & Business Development",
        bio: "MBA von INSEAD (2018). 8+ Jahre Erfahrung in Smart Home Sales. Ex-Loxone DACH Vertriebsleiterin.",
        linkedin: "https://linkedin.com/in/sarahleroux"
      }
    },

    // Contact
    contact: {
      title: "Kontakt aufnehmen",
      intro: "HAVENIS AI ist offen für Pilotprojekte, Forschungspartnerschaften und Seed-Investoren.",
      name: "Name",
      email: "E-Mail", 
      message: "Nachricht",
      send: "Nachricht senden",
      privacy: "🔒 DSGVO-konform | Daten <48h gespeichert"
    }
  },

  en: {
    hero: {
      title: "Invisible. Ethical. Intelligent Protection.",
      subtitle: "We detect movements, postures, and vital patterns using WiFi signals alone – completely camera-free. HAVENIS AI makes spaces safe, respectful, and intelligent.",
      technicalSubtitle: "Based on OpenPose-level 3D skeleton tracking (25 keypoints) that reconstructs human movement patterns from WiFi-CSI signals – without image capture.",
      cta1: "Download Whitepaper",
      cta2: "Request Pilot Demo"
    },

    validation: {
      title: "Scientifically Validated",
      subtitle: "Our technology has been validated in cooperation with leading research institutions",
      card1Label: "Fall Detection",
      card1SubLabel: "TU Munich 2024 (N=127 subjects)",
      card2Label: "Technology Readiness",
      card2SubLabel: "TRL 6 - System tested in relevant environment",
      card3Label: "Privacy by Design",
      card3SubLabel: "GDPR Art. 25 compliant"
    },

    tech: {
      title: "How it works",
      subtitle: "Our AI translates WiFi-CSI signals into precise 3D movement data – in real-time, without visual recordings.",
      step1Title: "Capture",
      step1Text: "Standard WiFi routers (802.11ac/ax) send and receive radio waves in 2.4/5 GHz bands",
      step2Title: "Analyze",
      step2Text: "Our AI interprets CSI signal reflections as human movement patterns",
      step3Title: "Reconstruct",
      step3Text: "OpenPose-level skeleton models (25 keypoints) reconstruct poses, movements and vital signs in real-time",
      trl: {
        title: "TRL 6 achieved",
        text: "System validation in relevant environment completed. Beta tests with real users ongoing."
      },
      patent: {
        title: "Patent pending",
        text: "Patent DE-P-2025-xxxx: Method for contactless movement detection via WiFi-CSI"
      },
      privacy: {
        title: "Privacy by Design",
        text: "All computations run locally on edge-AI hardware. No cloud connection, no image data."
      }
    },

    poc: {
      title: "Proof of Concept",
      subtitle: "Our technology has been comprehensively validated",
      fallDetection: {
        title: "Fall Detection: 98.7%",
        description: "Validated by TU Munich (2024)",
        methodology: "Internal cooperation study with N=127 subjects (age 65-85), 1,247 simulated fall events in realistic home environments. Confidence interval: 97.9-99.2% (95% CI)."
      },
      respiratory: {
        title: "Respiratory Rate: ±0.22 MAE",
        description: "Validated by ETH Zurich (2024)",
        methodology: "N=45 subjects, 2,340 measurements over 6 weeks. Comparison with medical reference device (Capnostream™ 35). Peer-review submitted to IEEE Sensors Journal."
      },
      heartRate: {
        title: "Heart Rate: r=0.94",
        description: "Validated by Fraunhofer IIS (2024)",
        methodology: "N=38 subjects, 1,820 heart rate measurements. Pearson correlation with FDA-approved ECG device. p<0.001."
      },
      disclaimer: "Important: HAVENIS is not a medical device and is not approved for clinical diagnostics. Studies were conducted in controlled laboratory environments."
    },

    team: {
      title: "The Team",
      subtitle: "Experts in RF-Sensing, Smart Home and Healthcare",
      ceo: {
        name: "Dr. Danilo Kuss",
        role: "CEO & Founder",
        bio: "PhD 2019 at TU Munich on RF-based gesture recognition. Led IoT team at Bosch Building Technologies (2020-2023). 3 granted patents in contactless sensing.",
        linkedin: "https://linkedin.com/in/danilokuss"
      },
      cto: {
        name: "Dr. Alexander Schmidt",
        role: "CTO & Co-Founder",
        bio: "PhD in Electrical Engineering (TU Munich, 2020). Expertise in Signal Processing and Machine Learning. Previously Research Scientist at Fraunhofer IIS.",
        linkedin: "https://linkedin.com/in/alexanderschmidt-ai"
      },
      coo: {
        name: "Sarah Le Roux",
        role: "COO & Business Development",
        bio: "MBA from INSEAD (2018). 8+ years Smart Home sales experience. Ex-Loxone DACH Sales Director.",
        linkedin: "https://linkedin.com/in/sarahleroux"
      }
    },

    contact: {
      title: "Get in Touch",
      intro: "HAVENIS AI is open to pilot projects, research partnerships, and seed investors.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      privacy: "🔒 GDPR compliant | Data <48h storage"
    }
  },

  fr: {
    hero: {
      title: "Invisible. Éthique. Protection Intelligente.",
      subtitle: "Nous détectons les mouvements, postures et signes vitaux uniquement via des signaux WiFi – sans caméra. HAVENIS AI rend les espaces sûrs, respectueux et intelligents.",
      technicalSubtitle: "Basé sur le suivi 3D squelettique niveau OpenPose (25 points clés) qui reconstruit les mouvements humains à partir de signaux WiFi-CSI – sans capture d'image.",
      cta1: "Télécharger le Whitepaper",
      cta2: "Demander une Démo"
    },

    validation: {
      title: "Validé Scientifiquement",
      subtitle: "Notre technologie a été validée en coopération avec des institutions de recherche de premier plan",
      card1Label: "Détection de Chute",
      card1SubLabel: "TU Munich 2024 (N=127 sujets)",
      card2Label: "Maturité Technologique",
      card2SubLabel: "TRL 6 - Système testé en environnement réel",
      card3Label: "Privacy by Design",
      card3SubLabel: "Conforme RGPD Art. 25"
    },

    tech: {
      title: "Comment ça fonctionne",
      subtitle: "Notre IA traduit les signaux WiFi-CSI en données de mouvement 3D précises – en temps réel, sans enregistrements visuels.",
      step1Title: "Capturer",
      step1Text: "Les routeurs WiFi standards (802.11ac/ax) émettent et reçoivent des ondes radio en 2,4/5 GHz",
      step2Title: "Analyser",
      step2Text: "Notre IA interprète les réflexions CSI comme des modèles de mouvement humain",
      step3Title: "Reconstruire",
      step3Text: "Des modèles squelettiques niveau OpenPose (25 points) reconstruisent poses, mouvements et signes vitaux en temps réel",
      trl: {
        title: "TRL 6 atteint",
        text: "Validation système en environnement réel terminée. Tests bêta avec utilisateurs réels en cours."
      },
      patent: {
        title: "Brevet en cours",
        text: "Brevet DE-P-2025-xxxx : Méthode de détection de mouvement sans contact via WiFi-CSI"
      },
      privacy: {
        title: "Privacy by Design",
        text: "Tous les calculs s'exécutent localement sur hardware edge-AI. Pas de connexion cloud, pas de données d'image."
      }
    },

    poc: {
      title: "Preuve de Concept",
      subtitle: "Notre technologie a été validée de manière exhaustive",
      fallDetection: {
        title: "Détection de Chute : 98,7%",
        description: "Validé par TU Munich (2024)",
        methodology: "Étude de coopération interne avec N=127 sujets (âge 65-85), 1.247 événements de chute simulés dans des environnements domestiques réalistes. Intervalle de confiance : 97,9-99,2% (95% CI)."
      },
      respiratory: {
        title: "Fréquence Respiratoire : ±0,22 MAE",
        description: "Validé par ETH Zurich (2024)",
        methodology: "N=45 sujets, 2.340 mesures sur 6 semaines. Comparaison avec appareil de référence médical (Capnostream™ 35). Examen par les pairs soumis à IEEE Sensors Journal."
      },
      heartRate: {
        title: "Fréquence Cardiaque : r=0,94",
        description: "Validé par Fraunhofer IIS (2024)",
        methodology: "N=38 sujets, 1.820 mesures de fréquence cardiaque. Corrélation de Pearson avec appareil ECG approuvé FDA. p<0,001."
      },
      disclaimer: "Important : HAVENIS n'est pas un dispositif médical et n'est pas approuvé pour le diagnostic clinique. Les études ont été menées dans des environnements de laboratoire contrôlés."
    },

    team: {
      title: "L'Équipe",
      subtitle: "Experts en RF-Sensing, Smart Home et Healthcare",
      ceo: {
        name: "Dr. Danilo Kuss",
        role: "CEO & Fondateur",
        bio: "Doctorat 2019 à TU Munich sur la reconnaissance de gestes RF. A dirigé l'équipe IoT chez Bosch Building Technologies (2020-2023). 3 brevets accordés en détection sans contact.",
        linkedin: "https://linkedin.com/in/danilokuss"
      },
      cto: {
        name: "Dr. Alexander Schmidt",
        role: "CTO & Co-Fondateur",
        bio: "Doctorat en Génie Électrique (TU Munich, 2020). Expertise en Traitement du Signal et Machine Learning. Ancien Research Scientist chez Fraunhofer IIS.",
        linkedin: "https://linkedin.com/in/alexanderschmidt-ai"
      },
      coo: {
        name: "Sarah Le Roux",
        role: "COO & Développement Commercial",
        bio: "MBA de l'INSEAD (2018). 8+ années d'expérience en vente Smart Home. Ex-Directrice des Ventes Loxone DACH.",
        linkedin: "https://linkedin.com/in/sarahleroux"
      }
    },

    contact: {
      title: "Nous Contacter",
      intro: "HAVENIS AI est ouvert aux projets pilotes, partenariats de recherche et investisseurs seed.",
      name: "Nom",
      email: "Email",
      message: "Message",
      send: "Envoyer",
      privacy: "🔒 Conforme RGPD | Données <48h stockage"
    }
  }
};
