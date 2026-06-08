export type SeoGuideFaq = {
  question: string;
  answer: string;
};

export type SeoGuideLink = {
  label: string;
  href: string;
};

export type SeoGuideStep = {
  title: string;
  text: string;
};

export type SeoGuidePage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  searchIntent: string;
  problemTitle: string;
  problemText: string;
  stepsTitle: string;
  steps: SeoGuideStep[];
  checklistTitle: string;
  checklist: string[];
  commonMistakesTitle: string;
  commonMistakes: string[];
  chiffrTitle: string;
  chiffrText: string;
  chiffrBenefits: string[];
  relatedLinks: SeoGuideLink[];
  faqs: SeoGuideFaq[];
};

export const seoGuides: SeoGuidePage[] = [
  {
    "slug": "comment-faire-un-devis-pac-air-eau",
    "title": "Comment faire un devis PAC air/eau | Guide artisan",
    "metaDescription": "Guide concret pour faire un devis PAC air/eau : relevé, dépose, matériel, hydraulique, électricité, mise en service, acompte et factures.",
    "h1": "Comment faire un devis PAC air/eau clair, complet et rassurant ?",
    "eyebrow": "Guide devis PAC air/eau",
    "intro": "Un devis PAC air/eau ne doit pas seulement afficher un prix. Il doit expliquer le chantier : existant, dépose, fourniture, raccordements, traitement du réseau, mise en service, acompte et facturation. Plus la structure est claire, plus le client comprend ce qu’il achète.",
    "searchIntent": "L’artisan cherche une méthode concrète pour préparer un devis PAC air/eau professionnel, sans oublier les postes techniques importants.",
    "problemTitle": "Le risque : envoyer un devis PAC trop vague",
    "problemText": "Une PAC air/eau implique souvent plusieurs postes invisibles pour le client : adaptation hydraulique, protection électrique, désembouage, support unité extérieure, mise en service, photos et suivi de paiement. Si ces éléments ne sont pas clairs, le client compare seulement un montant final.",
    "stepsTitle": "Les étapes pour construire le devis PAC air/eau",
    "steps": [
      {
        "title": "Relever l’existant",
        "text": "Photographiez l’ancien générateur, le réseau, l’accès, l’emplacement unité extérieure, le tableau électrique et les contraintes visibles."
      },
      {
        "title": "Décrire le projet",
        "text": "Précisez remplacement chaudière, installation neuve, maison individuelle, réseau radiateurs ou plancher chauffant, options et limites du devis."
      },
      {
        "title": "Séparer matériel et pose",
        "text": "Distinguez PAC, module hydraulique, support, accessoires, raccordements, main-d’œuvre et mise en service."
      },
      {
        "title": "Ajouter les postes techniques",
        "text": "N’oubliez pas hydraulique, électricité, désembouage, pot à boues, régulation, traitement réseau et évacuation de l’ancien équipement."
      },
      {
        "title": "Prévoir paiement et suite",
        "text": "Ajoutez acompte, solde, validité du devis, signature, facture d’acompte et facture finale."
      }
    ],
    "checklistTitle": "Checklist avant d’envoyer un devis PAC air/eau",
    "checklist": [
      "Adresse chantier et coordonnées client vérifiées.",
      "Photos de l’ancien équipement et de l’emplacement ajoutées.",
      "Dépose, évacuation et adaptation réseau bien séparées.",
      "Protection électrique et puissance à vérifier indiquées.",
      "Désembouage ou traitement réseau prévu si nécessaire.",
      "Mise en service, essais et explication client inclus.",
      "Acompte, solde, validité et conditions clairement écrits.",
      "Prix, TVA, quantités et marques relus par l’artisan."
    ],
    "commonMistakesTitle": "Erreurs fréquentes dans un devis PAC",
    "commonMistakes": [
      "Mettre une seule ligne “installation PAC” sans détail.",
      "Oublier la dépose ou l’évacuation de l’ancien générateur.",
      "Sous-estimer les raccordements hydrauliques ou électriques.",
      "Ne pas expliquer le désembouage au client.",
      "Envoyer un devis sans photos alors que le chantier est technique."
    ],
    "chiffrTitle": "Comment Chiffr aide à faire un devis PAC air/eau",
    "chiffrText": "Chiffr prépare une base métier PAC avec les lignes et actions utiles. L’artisan complète les prix, ajoute ses photos, génère un PDF premium, fait signer, demande un acompte et suit les factures sans repartir de zéro.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Modèle devis PAC air/eau",
        "href": "/modele-devis-pac-air-eau"
      },
      {
        "label": "Modèle remplacement chaudière par PAC",
        "href": "/modele-devis-remplacement-chaudiere-pac"
      },
      {
        "label": "Que mettre dans un devis PAC",
        "href": "/que-mettre-dans-un-devis-pac"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles informations mettre dans un devis PAC air/eau ?",
        "answer": "Un devis PAC air/eau doit généralement contenir les coordonnées client, l’adresse du chantier, le matériel, la pose, les raccordements hydrauliques et électriques, les options, la mise en service, les conditions de paiement et les mentions légales adaptées."
      },
      {
        "question": "Faut-il détailler la dépose de l’ancienne chaudière ?",
        "answer": "Oui, si elle fait partie du chantier. La dépose, l’évacuation et l’adaptation du réseau sont des postes que le client doit comprendre."
      },
      {
        "question": "Peut-on ajouter des photos au devis PAC ?",
        "answer": "Oui. Les photos chantier permettent d’expliquer l’existant, l’accès, l’emplacement de l’unité extérieure et les contraintes techniques."
      },
      {
        "question": "Chiffr calcule-t-il automatiquement le prix d’une PAC ?",
        "answer": "Chiffr aide à structurer le devis, mais l’artisan garde la main sur les prix, les marques, les quantités, la TVA et ses conditions commerciales."
      },
      {
        "question": "Le devis PAC peut-il générer une facture d’acompte ?",
        "answer": "Oui. Le devis peut être suivi par une demande d’acompte, une facture d’acompte, une facture de solde ou une facture finale."
      }
    ]
  },
  {
    "slug": "comment-faire-un-devis-climatisation",
    "title": "Comment faire un devis climatisation | Guide installateur",
    "metaDescription": "Guide pour faire un devis climatisation : monosplit, multisplit, unités, liaisons, condensats, électricité, mise en service, acompte et facture.",
    "h1": "Comment faire un devis climatisation clair pour monosplit ou multisplit ?",
    "eyebrow": "Guide devis climatisation",
    "intro": "Un devis climatisation doit expliquer la configuration, le nombre d’unités, le groupe extérieur, les liaisons frigorifiques, les condensats, les finitions et la mise en service. C’est ce détail qui évite les malentendus au moment de la pose.",
    "searchIntent": "L’installateur cherche une méthode simple pour structurer un devis de climatisation lisible et complet.",
    "problemTitle": "Le risque : un devis clim trop court",
    "problemText": "Une clim ne se limite pas à une unité intérieure et un groupe extérieur. Les liaisons, goulottes, condensats, supports, percements, alimentation et mise en service influencent le prix et doivent être lisibles.",
    "stepsTitle": "Les étapes pour préparer le devis clim",
    "steps": [
      {
        "title": "Identifier la configuration",
        "text": "Précisez monosplit, multisplit, remplacement, entretien ou dépannage, avec le nombre d’unités et les pièces concernées."
      },
      {
        "title": "Décrire les emplacements",
        "text": "Notez les emplacements intérieurs, le groupe extérieur, les accès, les percements et les longueurs de liaison."
      },
      {
        "title": "Détailler la pose",
        "text": "Séparez matériel, support, liaisons, goulottes, condensats, électricité et mise en service."
      },
      {
        "title": "Ajouter les options",
        "text": "Ajoutez pompe de relevage, accessoires, finitions, entretien, nettoyage ou déplacement si nécessaire."
      },
      {
        "title": "Prévoir la validation",
        "text": "Indiquez signature, acompte, délai, validité et conditions de paiement."
      }
    ],
    "checklistTitle": "Checklist avant d’envoyer un devis clim",
    "checklist": [
      "Nombre d’unités intérieures vérifié.",
      "Groupe extérieur et support bien prévus.",
      "Longueur de liaisons et goulottes estimée.",
      "Condensats et pompe de relevage vérifiés.",
      "Protection électrique mentionnée si nécessaire.",
      "Mise en service, essais et réglages ajoutés.",
      "Photos des emplacements et passages ajoutées.",
      "Acompte, solde et validité du devis indiqués."
    ],
    "commonMistakesTitle": "Erreurs fréquentes dans un devis clim",
    "commonMistakes": [
      "Oublier la pompe de relevage des condensats.",
      "Sous-estimer les longueurs de liaison.",
      "Ne pas séparer unité intérieure, groupe extérieur et pose.",
      "Oublier le support du groupe extérieur.",
      "Ne pas préciser la mise en service."
    ],
    "chiffrTitle": "Comment Chiffr aide pour les devis climatisation",
    "chiffrText": "Chiffr prépare des bases pour les devis clim, avec les lignes fréquentes, les photos chantier, le PDF, la signature, l’acompte et la facturation. L’installateur adapte ensuite le devis à son chantier.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Modèle devis clim monosplit",
        "href": "/modele-devis-clim-monosplit"
      },
      {
        "label": "Modèle devis clim multisplit",
        "href": "/modele-devis-clim-multisplit"
      },
      {
        "label": "Que mettre dans un devis climatisation",
        "href": "/que-mettre-dans-un-devis-climatisation"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles lignes mettre dans un devis climatisation ?",
        "answer": "Un devis climatisation doit détailler les unités intérieures, le groupe extérieur, les supports, liaisons, goulottes, condensats, électricité, mise en service et conditions de paiement."
      },
      {
        "question": "Faut-il séparer monosplit et multisplit ?",
        "answer": "Oui, car un devis multisplit implique souvent plusieurs unités, longueurs, condensats et finitions différentes."
      },
      {
        "question": "Peut-on intégrer l’entretien clim dans le devis ?",
        "answer": "Oui, l’entretien ou la maintenance peuvent être ajoutés comme option ou devis séparé selon l’organisation de l’artisan."
      },
      {
        "question": "Chiffr permet-il de joindre des photos de passage des liaisons ?",
        "answer": "Oui. Les photos chantier peuvent documenter les passages, emplacements, accès et contraintes."
      },
      {
        "question": "Faut-il vérifier les prix avant envoi ?",
        "answer": "Oui. Les prix, quantités, TVA, marques et conditions restent sous la responsabilité de l’artisan."
      }
    ]
  },
  {
    "slug": "comment-faire-un-devis-vmc",
    "title": "Comment faire un devis VMC | Simple flux double flux",
    "metaDescription": "Guide pour faire un devis VMC : simple flux, double flux, caisson, gaines, bouches, sorties, réglages, photos et factures.",
    "h1": "Comment faire un devis VMC simple flux ou double flux ?",
    "eyebrow": "Guide devis VMC",
    "intro": "Un devis VMC doit rendre visible un travail souvent caché : combles, gaines, bouches, caisson, sorties, alimentation et réglages. Le client doit comprendre pourquoi le prix ne correspond pas seulement à un caisson.",
    "searchIntent": "L’artisan cherche une méthode pour présenter un devis VMC complet, compréhensible et professionnel.",
    "problemTitle": "Le risque : un devis ventilation difficile à comprendre",
    "problemText": "Le client ne voit pas toujours les gaines, les combles, les traversées ou l’équilibrage. Sans explication, le devis VMC peut paraître trop cher ou trop vague.",
    "stepsTitle": "Les étapes pour préparer le devis VMC",
    "steps": [
      {
        "title": "Faire le relevé logement",
        "text": "Identifiez les pièces, les accès, les combles, le réseau existant, les bouches et les sorties."
      },
      {
        "title": "Choisir le type de VMC",
        "text": "Simple flux, hygroréglable ou double flux : le devis doit préciser la configuration retenue."
      },
      {
        "title": "Détailler le réseau",
        "text": "Listez caisson, gaines, bouches, sorties toiture ou murales, traversées et raccordements."
      },
      {
        "title": "Ajouter essais et réglages",
        "text": "Prévoyez contrôle, équilibrage si nécessaire, bruit, débit et explication client."
      },
      {
        "title": "Documenter le chantier",
        "text": "Ajoutez les photos des combles, caisson, gaines, bouches ou contraintes."
      }
    ],
    "checklistTitle": "Checklist devis VMC",
    "checklist": [
      "Type de VMC clairement indiqué.",
      "Nombre de bouches et pièces concernées vérifié.",
      "Longueur et type de gaines estimés.",
      "Sortie toiture ou murale prévue.",
      "Dépose éventuelle indiquée.",
      "Raccordement électrique ajouté.",
      "Essais, réglages et explication client prévus.",
      "Photos des zones cachées ajoutées."
    ],
    "commonMistakesTitle": "Erreurs fréquentes dans un devis VMC",
    "commonMistakes": [
      "Ne pas détailler les gaines et bouches.",
      "Oublier la sortie toiture ou murale.",
      "Ne pas mentionner les accès difficiles.",
      "Oublier les réglages ou essais.",
      "Envoyer un devis sans photos des combles."
    ],
    "chiffrTitle": "Comment Chiffr aide pour les devis VMC",
    "chiffrText": "Chiffr aide à partir d’une base métier VMC, ajouter les lignes fréquentes, joindre les photos chantier et suivre signature, acompte, solde et facture finale.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis VMC",
        "href": "/logiciel-devis-vmc"
      },
      {
        "label": "Modèle devis VMC simple flux",
        "href": "/modele-devis-vmc-simple-flux"
      },
      {
        "label": "Modèle devis VMC double flux",
        "href": "/modele-devis-vmc-double-flux"
      },
      {
        "label": "Logiciel devis frigoriste CVC",
        "href": "/logiciel-devis-frigoriste-cvc"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que doit contenir un devis VMC ?",
        "answer": "Il doit détailler le caisson, les gaines, les bouches, la sortie, l’électricité, la pose, les essais, les réglages et les conditions de paiement."
      },
      {
        "question": "Faut-il faire une page différente pour VMC double flux ?",
        "answer": "La VMC double flux mérite souvent une structure plus détaillée avec gaines isolées, insufflation, extraction, équilibrage et mise en service."
      },
      {
        "question": "Pourquoi ajouter des photos à un devis VMC ?",
        "answer": "Les photos rendent visibles les combles, gaines et accès que le client ne voit pas toujours."
      },
      {
        "question": "Chiffr convient-il aux devis ventilation ?",
        "answer": "Oui. Chiffr aide à structurer les devis VMC, les photos, la signature, l’acompte et les factures."
      },
      {
        "question": "Les prix sont-ils à renseigner manuellement ?",
        "answer": "Oui. L’artisan garde la main sur ses prix, ses quantités et ses conditions."
      }
    ]
  },
  {
    "slug": "comment-faire-un-devis-borne-recharge",
    "title": "Comment faire un devis borne de recharge | IRVE",
    "metaDescription": "Guide devis borne de recharge : relevé tableau, protection dédiée, câblage, pose, mise en service, photos, acompte et facture.",
    "h1": "Comment faire un devis borne de recharge IRVE clair et professionnel ?",
    "eyebrow": "Guide devis IRVE",
    "intro": "Un devis borne de recharge doit rassurer sur la partie électrique : tableau, puissance disponible, protection dédiée, câble, cheminement, pose, paramétrage et mise en service. Le client doit comprendre ce qui sécurise l’installation.",
    "searchIntent": "L’installateur IRVE cherche une structure de devis pour borne 7 kW, 22 kW ou pose avec contraintes.",
    "problemTitle": "Le risque : masquer les postes électriques importants",
    "problemText": "Une borne de recharge ne se résume pas à la fourniture d’un boîtier. La protection dédiée, le câble, le cheminement, la puissance et la mise en service sont essentiels pour un devis sérieux.",
    "stepsTitle": "Les étapes pour préparer un devis IRVE",
    "steps": [
      {
        "title": "Relever le tableau",
        "text": "Photographiez le tableau, vérifiez puissance disponible, distance et accès."
      },
      {
        "title": "Décrire la borne",
        "text": "Précisez puissance, modèle, pose murale ou sur pied, options et accessoires."
      },
      {
        "title": "Détailler les protections",
        "text": "Ajoutez disjoncteur, différentiel, coffret ou protection dédiée selon configuration."
      },
      {
        "title": "Chiffrer le cheminement",
        "text": "Mesurez câble, gaine, percement, fixation, passage intérieur/extérieur et finitions."
      },
      {
        "title": "Prévoir mise en service",
        "text": "Ajoutez paramétrage, essais, explication client, photos finales et facturation."
      }
    ],
    "checklistTitle": "Checklist devis borne de recharge",
    "checklist": [
      "Puissance disponible vérifiée.",
      "Tableau électrique photographié.",
      "Distance tableau-borne estimée.",
      "Protection dédiée prévue.",
      "Câble, gaine et cheminement détaillés.",
      "Type de pose précisé.",
      "Mise en service et paramétrage inclus.",
      "Acompte, solde et facture prévus."
    ],
    "commonMistakesTitle": "Erreurs fréquentes dans un devis IRVE",
    "commonMistakes": [
      "Oublier la protection dédiée.",
      "Sous-estimer la longueur de câble.",
      "Ne pas expliquer le cheminement.",
      "Ne pas différencier borne 7 kW et 22 kW.",
      "Envoyer un devis sans photo du tableau."
    ],
    "chiffrTitle": "Comment Chiffr aide pour les devis IRVE",
    "chiffrText": "Chiffr prépare des bases pour les devis borne de recharge, avec lignes de protection, câblage, pose, mise en service, photos, signature, acompte et facturation.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis IRVE",
        "href": "/logiciel-devis-irve"
      },
      {
        "label": "Modèle devis borne recharge 7 kW",
        "href": "/modele-devis-borne-recharge-7kw"
      },
      {
        "label": "Modèle devis borne recharge 22 kW",
        "href": "/modele-devis-borne-recharge-22kw"
      },
      {
        "label": "Logiciel devis avec acompte",
        "href": "/logiciel-devis-avec-acompte"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles lignes mettre dans un devis borne de recharge ?",
        "answer": "Il faut généralement prévoir visite technique, borne, protection dédiée, câble, gaine, cheminement, pose, paramétrage, mise en service et factures."
      },
      {
        "question": "Faut-il photographier le tableau électrique ?",
        "answer": "Oui. Les photos aident à documenter l’installation et à justifier certaines lignes techniques."
      },
      {
        "question": "Un devis borne 22 kW doit-il être plus détaillé ?",
        "answer": "Souvent oui, car la puissance, le câblage et les protections peuvent être plus sensibles."
      },
      {
        "question": "Chiffr convient-il aux installateurs IRVE ?",
        "answer": "Oui. Chiffr aide à structurer les devis IRVE avec photos, signature, acompte et factures."
      },
      {
        "question": "La TVA doit-elle être vérifiée ?",
        "answer": "Oui. Le taux dépend du chantier et doit être vérifié par l’artisan selon les règles applicables."
      }
    ]
  },
  {
    "slug": "que-mettre-dans-un-devis-pac",
    "title": "Que mettre dans un devis PAC ? Checklist artisan",
    "metaDescription": "Checklist devis PAC : matériel, dépose, raccordements, électricité, mise en service, photos, acompte, TVA et factures à prévoir.",
    "h1": "Que mettre dans un devis PAC pour éviter les oublis ?",
    "eyebrow": "Checklist devis PAC",
    "intro": "Un devis PAC clair doit lister les postes que le client ne voit pas toujours : dépose, hydraulique, électricité, support, traitement réseau, mise en service, photos, acompte et factures. Cette checklist aide à relire le devis avant envoi.",
    "searchIntent": "L’artisan veut une liste simple des éléments à inclure dans un devis pompe à chaleur.",
    "problemTitle": "Le risque : oublier une ligne qui coûte cher après signature",
    "problemText": "Sur un chantier PAC, un oubli peut se transformer en marge perdue, discussion client ou avenant difficile à expliquer.",
    "stepsTitle": "Les familles de lignes à prévoir",
    "steps": [
      {
        "title": "Informations client et chantier",
        "text": "Adresse, accès, logement, existant, contraintes et photos."
      },
      {
        "title": "Matériel principal",
        "text": "PAC, module, unité extérieure, accessoires, ballon ou régulation si prévue."
      },
      {
        "title": "Pose et raccordements",
        "text": "Hydraulique, électricité, support, percement, adaptation réseau et finitions."
      },
      {
        "title": "Options techniques",
        "text": "Désembouage, pot à boues, traitement, thermostat, ballon tampon ou accessoire."
      },
      {
        "title": "Validation et facturation",
        "text": "Signature, acompte, facture d’acompte, solde, validité et conditions."
      }
    ],
    "checklistTitle": "Checklist complète devis PAC",
    "checklist": [
      "Coordonnées client et chantier.",
      "Description de l’existant.",
      "Dépose et évacuation.",
      "Fourniture PAC et accessoires.",
      "Support unité extérieure.",
      "Raccordements hydrauliques.",
      "Protection électrique.",
      "Désembouage ou traitement réseau.",
      "Mise en service et essais.",
      "Photos chantier.",
      "Acompte, solde et factures."
    ],
    "commonMistakesTitle": "Ce que les artisans oublient souvent",
    "commonMistakes": [
      "La dépose de l’ancien générateur.",
      "Le support ou la dalle de l’unité extérieure.",
      "Les accessoires hydrauliques.",
      "Le traitement réseau.",
      "La facture d’acompte ou la relance de solde."
    ],
    "chiffrTitle": "Comment Chiffr transforme cette checklist en devis",
    "chiffrText": "Chiffr prépare les modèles métier PAC et aide à cocher les bons postes, sans imposer les prix. L’artisan complète le devis, joint les photos, fait signer et facture.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Comment faire un devis PAC air/eau",
        "href": "/comment-faire-un-devis-pac-air-eau"
      },
      {
        "label": "Modèle devis PAC air/eau",
        "href": "/modele-devis-pac-air-eau"
      },
      {
        "label": "Modèle remplacement chaudière par PAC",
        "href": "/modele-devis-remplacement-chaudiere-pac"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelle est la ligne la plus souvent oubliée dans un devis PAC ?",
        "answer": "Cela dépend du chantier, mais la dépose, l’évacuation, le traitement réseau et l’électricité sont souvent sous-estimés."
      },
      {
        "question": "Faut-il mettre les photos dans le devis ?",
        "answer": "Elles ne sont pas toujours obligatoires, mais elles aident à expliquer les contraintes et à rassurer le client."
      },
      {
        "question": "Peut-on faire un devis PAC sans prix automatiques ?",
        "answer": "Oui. Le plus important est d’avoir une structure claire. L’artisan renseigne ensuite ses prix."
      },
      {
        "question": "Chiffr aide-t-il à relancer le devis ?",
        "answer": "Oui. Le suivi client permet de garder une trace des relances et prochaines actions."
      },
      {
        "question": "Faut-il prévoir une facture d’acompte ?",
        "answer": "Si un acompte est demandé, il faut pouvoir le suivre proprement et générer la facture correspondante."
      }
    ]
  },
  {
    "slug": "que-mettre-dans-un-devis-climatisation",
    "title": "Que mettre dans un devis climatisation ? Checklist",
    "metaDescription": "Checklist devis climatisation : unité intérieure, groupe extérieur, support, liaisons, condensats, électricité, mise en service, acompte.",
    "h1": "Que mettre dans un devis climatisation pour éviter les zones floues ?",
    "eyebrow": "Checklist devis clim",
    "intro": "Le devis clim doit expliquer le matériel et les contraintes de pose : unité intérieure, groupe extérieur, support, liaisons, goulottes, condensats, électricité, mise en service, acompte et factures.",
    "searchIntent": "L’installateur cherche une checklist concrète des lignes à prévoir dans un devis climatisation.",
    "problemTitle": "Le risque : une pose mal comprise par le client",
    "problemText": "Si le devis ne détaille pas les liaisons, condensats ou finitions, le client peut penser que tout est inclus sans limite.",
    "stepsTitle": "Les postes à prévoir dans un devis clim",
    "steps": [
      {
        "title": "Configuration",
        "text": "Monosplit, multisplit, nombre d’unités, pièces concernées et accès."
      },
      {
        "title": "Matériel",
        "text": "Unités intérieures, groupe extérieur, support, accessoires et options."
      },
      {
        "title": "Pose",
        "text": "Percements, liaisons, goulottes, condensats, pompe éventuelle et finitions."
      },
      {
        "title": "Électricité",
        "text": "Protection, raccordement et vérifications nécessaires."
      },
      {
        "title": "Mise en service",
        "text": "Tirage au vide, essais, réglages, explication client et facture."
      }
    ],
    "checklistTitle": "Checklist devis climatisation",
    "checklist": [
      "Type de clim indiqué.",
      "Nombre d’unités précisé.",
      "Groupe extérieur et support inclus.",
      "Liaisons frigorifiques prévues.",
      "Goulottes et finitions prévues.",
      "Condensats et pompe vérifiés.",
      "Électricité mentionnée.",
      "Mise en service incluse.",
      "Photos, acompte et conditions ajoutés."
    ],
    "commonMistakesTitle": "Oublis fréquents",
    "commonMistakes": [
      "Ne pas chiffrer la pompe de relevage.",
      "Oublier le support groupe extérieur.",
      "Mettre une quantité fixe alors que la longueur varie.",
      "Ne pas distinguer monosplit et multisplit.",
      "Oublier les photos des passages."
    ],
    "chiffrTitle": "Comment Chiffr aide à ne rien oublier",
    "chiffrText": "Chiffr propose une structure métier climatisation avec les postes fréquents, les photos, la signature, l’acompte, les factures et les relances.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Comment faire un devis climatisation",
        "href": "/comment-faire-un-devis-climatisation"
      },
      {
        "label": "Modèle devis clim monosplit",
        "href": "/modele-devis-clim-monosplit"
      },
      {
        "label": "Modèle devis clim multisplit",
        "href": "/modele-devis-clim-multisplit"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Faut-il détailler les liaisons frigorifiques ?",
        "answer": "Oui, car leur longueur et leur passage peuvent influencer le coût et la complexité de la pose."
      },
      {
        "question": "La pompe de relevage doit-elle être une ligne séparée ?",
        "answer": "C’est souvent plus clair si elle est nécessaire, car le client comprend mieux l’option."
      },
      {
        "question": "Faut-il ajouter la mise en service ?",
        "answer": "Oui, elle fait partie des postes importants à présenter dans un devis clim."
      },
      {
        "question": "Chiffr convient-il aux devis multisplit ?",
        "answer": "Oui. Chiffr permet de structurer plusieurs unités, options et postes de pose."
      },
      {
        "question": "Peut-on facturer après signature ?",
        "answer": "Oui. Le devis signé peut ensuite être suivi avec acompte, solde et factures."
      }
    ]
  },
  {
    "slug": "facture-acompte-artisan-energie",
    "title": "Facture d’acompte artisan énergie | Guide devis",
    "metaDescription": "Guide facture d’acompte pour artisan énergie : devis signé, montant d’acompte, suivi, solde, facture finale et relances client.",
    "h1": "Facture d’acompte pour artisan énergie : comment la prévoir dans le devis ?",
    "eyebrow": "Guide facture d’acompte",
    "intro": "Sur un chantier PAC, clim, chauffage, VMC, IRVE ou solaire, l’acompte sécurise le démarrage. Encore faut-il le prévoir clairement dans le devis, le suivre dans le dossier client et générer une facture d’acompte propre.",
    "searchIntent": "L’artisan cherche comment gérer un acompte et une facture d’acompte après acceptation du devis.",
    "problemTitle": "Le risque : confondre acompte, paiement partiel et facture finale",
    "problemText": "Sans suivi clair, l’artisan peut perdre le fil entre devis accepté, acompte demandé, acompte payé, solde restant et facture finale.",
    "stepsTitle": "Les étapes pour gérer l’acompte",
    "steps": [
      {
        "title": "Prévoir l’acompte dans le devis",
        "text": "Indiquez le montant ou le pourcentage, les conditions et le moment de paiement."
      },
      {
        "title": "Faire accepter le devis",
        "text": "La facture d’acompte doit s’inscrire dans un dossier accepté par le client."
      },
      {
        "title": "Émettre la facture d’acompte",
        "text": "Générez une facture liée au devis, avec les informations client et chantier."
      },
      {
        "title": "Suivre le reste à encaisser",
        "text": "Gardez le montant payé et le solde restant visibles."
      },
      {
        "title": "Créer la facture de solde",
        "text": "À la fin du chantier, la facture de solde doit reprendre le reste à payer."
      }
    ],
    "checklistTitle": "Checklist facture d’acompte",
    "checklist": [
      "Devis accepté ou signé.",
      "Montant d’acompte clair.",
      "Client et chantier identifiés.",
      "Facture d’acompte numérotée.",
      "Paiement suivi dans le dossier.",
      "Solde restant visible.",
      "Facture de solde prévue.",
      "Relance possible si paiement non reçu."
    ],
    "commonMistakesTitle": "Erreurs fréquentes",
    "commonMistakes": [
      "Demander un acompte sans trace claire.",
      "Oublier de générer une facture d’acompte.",
      "Ne pas suivre le reste à encaisser.",
      "Mélanger acompte et facture finale.",
      "Ne pas relancer un acompte non payé."
    ],
    "chiffrTitle": "Comment Chiffr simplifie acompte et facture",
    "chiffrText": "Chiffr relie le devis, la signature, la demande d’acompte, la facture d’acompte, le solde et les relances dans le même dossier client.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis avec acompte",
        "href": "/logiciel-devis-avec-acompte"
      },
      {
        "label": "Logiciel devis avec facture acompte",
        "href": "/logiciel-devis-avec-facture-acompte"
      },
      {
        "label": "Facture solde chantier",
        "href": "/facture-solde-chantier"
      },
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quand faire une facture d’acompte ?",
        "answer": "Elle est généralement créée lorsqu’un acompte est demandé ou payé dans le cadre d’un devis accepté. L’artisan doit respecter ses obligations comptables et fiscales."
      },
      {
        "question": "La facture d’acompte remplace-t-elle la facture finale ?",
        "answer": "Non. Elle concerne l’acompte. Le solde doit ensuite être suivi et facturé selon l’avancement du chantier."
      },
      {
        "question": "Chiffr peut-il suivre le reste à encaisser ?",
        "answer": "Oui. Chiffr aide à visualiser l’acompte, le solde et les factures liées au devis."
      },
      {
        "question": "Peut-on relancer un acompte non payé ?",
        "answer": "Oui. Le suivi client permet de garder une trace des relances et prochaines actions."
      },
      {
        "question": "Faut-il vérifier les mentions obligatoires ?",
        "answer": "Oui. Les mentions, TVA et informations légales doivent être vérifiées selon la situation de l’artisan."
      }
    ]
  },
  {
    "slug": "facture-solde-chantier",
    "title": "Facture de solde chantier | Guide artisan",
    "metaDescription": "Guide facture de solde chantier : acompte payé, reste à encaisser, facture finale, suivi client et relance pour artisans énergie.",
    "h1": "Facture de solde chantier : comment suivre le reste à encaisser ?",
    "eyebrow": "Guide facture de solde",
    "intro": "Après un acompte ou une facture partielle, la facture de solde doit fermer proprement le chantier. Pour un artisan énergie, elle doit rester reliée au devis, aux paiements déjà reçus et au dossier client.",
    "searchIntent": "L’artisan cherche comment gérer la facture de solde et le reste à encaisser après un chantier.",
    "problemTitle": "Le risque : perdre le fil entre acompte, solde et facture finale",
    "problemText": "Sans suivi clair, il devient difficile de savoir ce qui a été payé, ce qu’il reste à encaisser, quelle facture a été envoyée et quand relancer le client.",
    "stepsTitle": "Les étapes pour créer une facture de solde",
    "steps": [
      {
        "title": "Repartir du devis accepté",
        "text": "Gardez le lien avec les lignes initiales, le client et le chantier."
      },
      {
        "title": "Vérifier les acomptes déjà facturés",
        "text": "Contrôlez les montants demandés, payés et restants."
      },
      {
        "title": "Calculer le solde",
        "text": "Affichez clairement le reste à régler."
      },
      {
        "title": "Créer la facture de solde",
        "text": "Générez une facture cohérente avec le devis et l’acompte."
      },
      {
        "title": "Relancer si nécessaire",
        "text": "Gardez une trace des relances jusqu’au paiement."
      }
    ],
    "checklistTitle": "Checklist facture de solde",
    "checklist": [
      "Devis d’origine identifié.",
      "Acompte facturé contrôlé.",
      "Paiement d’acompte confirmé.",
      "Reste à encaisser calculé.",
      "Facture de solde générée.",
      "PDF envoyé au client.",
      "Échéance de paiement notée.",
      "Relance prévue si besoin."
    ],
    "commonMistakesTitle": "Erreurs fréquentes",
    "commonMistakes": [
      "Oublier de déduire l’acompte.",
      "Créer une facture finale sans suivre le solde.",
      "Ne pas relancer le client.",
      "Perdre le lien avec le devis initial.",
      "Ne pas conserver les photos ou documents du chantier."
    ],
    "chiffrTitle": "Comment Chiffr aide à suivre le solde",
    "chiffrText": "Chiffr relie devis, acompte, facture d’acompte, facture de solde, reste à encaisser et relance client dans le même parcours.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Facture acompte artisan énergie",
        "href": "/facture-acompte-artisan-energie"
      },
      {
        "label": "Logiciel devis avec facture acompte",
        "href": "/logiciel-devis-avec-facture-acompte"
      },
      {
        "label": "Logiciel devis avec relance client",
        "href": "/logiciel-devis-avec-relance-client"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Qu’est-ce qu’une facture de solde ?",
        "answer": "C’est la facture qui permet de demander le reste à payer après un acompte ou un paiement partiel."
      },
      {
        "question": "Faut-il garder le lien avec le devis initial ?",
        "answer": "Oui. Cela facilite le suivi client, le contrôle des montants et l’historique du chantier."
      },
      {
        "question": "Chiffr peut-il afficher le reste à encaisser ?",
        "answer": "Oui. Chiffr est conçu pour suivre devis, factures, acompte, solde et relances."
      },
      {
        "question": "Quand relancer une facture de solde ?",
        "answer": "Selon vos conditions de paiement. L’important est de garder une trace claire des relances."
      },
      {
        "question": "La facture de solde est-elle toujours une facture finale ?",
        "answer": "Elle peut clôturer le paiement, mais l’artisan doit vérifier la bonne forme de facturation selon son organisation."
      }
    ]
  },
  {
    "slug": "relance-devis-artisan",
    "title": "Relance devis artisan | Exemple et méthode",
    "metaDescription": "Guide relance devis artisan : quand relancer, quoi écrire, comment suivre les devis envoyés, signature, acompte et prochaines actions.",
    "h1": "Relance devis artisan : quand relancer et comment ne pas perdre les clients chauds ?",
    "eyebrow": "Guide relance devis",
    "intro": "Un devis envoyé mais jamais relancé peut représenter un chantier perdu. Pour les artisans énergie, la relance doit rester simple, professionnelle et liée au contexte du devis.",
    "searchIntent": "L’artisan cherche une méthode pour relancer ses devis sans être lourd et sans oublier les clients importants.",
    "problemTitle": "Le risque : laisser dormir des devis envoyés",
    "problemText": "Entre les visites, les chantiers et les urgences, beaucoup d’artisans oublient de relancer. Résultat : les devis restent en attente, les acomptes ne partent pas et les clients signent ailleurs.",
    "stepsTitle": "Les étapes d’une relance efficace",
    "steps": [
      {
        "title": "Identifier les devis envoyés",
        "text": "Listez les devis en attente de réponse, de signature ou d’acompte."
      },
      {
        "title": "Choisir le bon moment",
        "text": "Relancez après quelques jours selon l’urgence, le montant et le type de chantier."
      },
      {
        "title": "Rester concret",
        "text": "Rappelez l’objet du devis, le bénéfice client et la prochaine action."
      },
      {
        "title": "Proposer une action simple",
        "text": "Signature, appel, précision technique, acompte ou date de chantier."
      },
      {
        "title": "Garder l’historique",
        "text": "Notez la date, le canal et la réponse du client."
      }
    ],
    "checklistTitle": "Checklist relance devis",
    "checklist": [
      "Devis envoyé identifié.",
      "Date d’envoi connue.",
      "Statut du client clair.",
      "Message court préparé.",
      "Canal choisi : email, SMS, téléphone ou WhatsApp.",
      "Prochaine action définie.",
      "Historique de relance conservé.",
      "Acompte ou signature rappelé si besoin."
    ],
    "commonMistakesTitle": "Erreurs fréquentes en relance",
    "commonMistakes": [
      "Relancer sans contexte.",
      "Attendre trop longtemps.",
      "Ne pas proposer d’action claire.",
      "Relancer plusieurs fois sans historique.",
      "Oublier les devis à forte valeur."
    ],
    "chiffrTitle": "Comment Chiffr aide à relancer les devis",
    "chiffrText": "Chiffr aide à suivre les devis envoyés, les relances, la signature, l’acompte et les prochaines actions client pour éviter les dossiers oubliés.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis avec relance client",
        "href": "/logiciel-devis-avec-relance-client"
      },
      {
        "label": "Logiciel devis avec signature client",
        "href": "/logiciel-devis-avec-signature-client"
      },
      {
        "label": "Logiciel devis avec acompte",
        "href": "/logiciel-devis-avec-acompte"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quand relancer un devis artisan ?",
        "answer": "Cela dépend du contexte, mais une relance quelques jours après l’envoi permet souvent de garder le contact sans être trop insistant."
      },
      {
        "question": "Quel message envoyer pour relancer un devis ?",
        "answer": "Un message court suffit : rappeler le chantier, demander si le client a des questions et proposer la signature ou un appel."
      },
      {
        "question": "Faut-il relancer par téléphone ?",
        "answer": "Le téléphone peut être efficace pour un chantier important, mais il faut garder une trace de l’action."
      },
      {
        "question": "Chiffr peut-il suivre les relances ?",
        "answer": "Oui. Chiffr garde le devis, le client, le statut et les actions de relance dans le même dossier."
      },
      {
        "question": "La relance peut-elle déclencher l’acompte ?",
        "answer": "Oui, si le devis est validé, la prochaine action peut être signature ou demande d’acompte."
      }
    ]
  },
  {
    "slug": "devis-artisan-photos-chantier",
    "title": "Photos chantier dans un devis artisan | Guide",
    "metaDescription": "Guide photos chantier pour devis artisan : quoi photographier, comment justifier les lignes, rassurer le client et garder un dossier propre.",
    "h1": "Photos chantier dans un devis artisan : quoi prendre et pourquoi ?",
    "eyebrow": "Guide photos chantier",
    "intro": "Les photos chantier rendent un devis plus concret. Elles aident à expliquer l’existant, les contraintes, les accès, les plaques machines et les choix techniques qui justifient certaines lignes.",
    "searchIntent": "L’artisan veut savoir quelles photos prendre pour rendre ses devis plus clairs et mieux suivis.",
    "problemTitle": "Le risque : un devis technique sans preuve visuelle",
    "problemText": "Sans photo, le client doit croire l’artisan sur parole. Les contraintes d’accès, l’ancien équipement ou le tableau électrique sont moins faciles à expliquer.",
    "stepsTitle": "Les photos utiles à prendre",
    "steps": [
      {
        "title": "Photographier l’existant",
        "text": "Ancien équipement, état général, accès, réseau, plaque machine ou zone concernée."
      },
      {
        "title": "Photographier les contraintes",
        "text": "Passage de gaines, tableau, emplacement, hauteur, combles, toiture ou cheminement."
      },
      {
        "title": "Classer les photos",
        "text": "Avant travaux, ancien équipement, tableau électrique, accès chantier, plaque machine ou autre."
      },
      {
        "title": "Choisir les photos à montrer",
        "text": "Toutes les photos ne doivent pas forcément apparaître dans le PDF. Certaines servent au suivi interne."
      },
      {
        "title": "Conserver le dossier",
        "text": "Les photos doivent rester liées au client, au devis et aux factures."
      }
    ],
    "checklistTitle": "Checklist photos chantier",
    "checklist": [
      "Ancien équipement photographié.",
      "Plaque machine si visible.",
      "Tableau électrique si concerné.",
      "Accès chantier documenté.",
      "Emplacement futur photographié.",
      "Contraintes techniques prises en photo.",
      "Photos internes séparées des photos PDF.",
      "Légendes ajoutées si nécessaire."
    ],
    "commonMistakesTitle": "Erreurs fréquentes avec les photos",
    "commonMistakes": [
      "Mélanger photos utiles et photos internes.",
      "Ne pas photographier l’accès.",
      "Oublier la plaque machine.",
      "Ne pas relier les photos au devis.",
      "Envoyer trop de photos non expliquées au client."
    ],
    "chiffrTitle": "Comment Chiffr gère les photos chantier",
    "chiffrText": "Chiffr permet de lier les photos au dossier client, de choisir celles qui peuvent apparaître dans le PDF et de conserver les autres pour le suivi interne.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis avec photos chantier",
        "href": "/logiciel-devis-avec-photos-chantier"
      },
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Logiciel devis VMC",
        "href": "/logiciel-devis-vmc"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Faut-il mettre toutes les photos dans le devis ?",
        "answer": "Non. Certaines photos peuvent rester internes. L’artisan choisit les photos utiles pour le client."
      },
      {
        "question": "Quelles photos prendre pour un devis PAC ?",
        "answer": "Ancien générateur, emplacement unité extérieure, tableau électrique, réseau, accès et plaque machine si utile."
      },
      {
        "question": "Quelles photos prendre pour un devis clim ?",
        "answer": "Emplacement unité intérieure, groupe extérieur, passage des liaisons, condensats et accès."
      },
      {
        "question": "Chiffr permet-il de choisir les photos du PDF ?",
        "answer": "Oui. Les photos peuvent être liées au dossier et certaines peuvent être sélectionnées pour le PDF."
      },
      {
        "question": "Les photos remplacent-elles les lignes de devis ?",
        "answer": "Non. Elles aident à expliquer les lignes, mais le devis doit rester clair et structuré."
      }
    ]
  },
  {
    "slug": "devis-artisan-prix-a-renseigner",
    "title": "Prix à renseigner dans un devis artisan | Guide",
    "metaDescription": "Guide prix à renseigner dans un devis artisan : pourquoi ne pas inventer les prix, adapter fournisseurs, marges, TVA, quantités et conditions.",
    "h1": "Prix à renseigner dans un devis artisan : pourquoi garder la main ?",
    "eyebrow": "Guide prix devis",
    "intro": "Un bon logiciel peut préparer la structure d’un devis, mais il ne doit pas inventer les prix à la place de l’artisan. Fournisseurs, marges, quantités, TVA, accès chantier et conditions changent d’un dossier à l’autre.",
    "searchIntent": "L’artisan veut comprendre comment utiliser des modèles sans perdre le contrôle sur ses prix.",
    "problemTitle": "Le risque : envoyer un prix automatique non adapté",
    "problemText": "Un prix générique peut être faux selon la marque, le fournisseur, l’accès, la région, le temps de pose, la marge et la TVA applicable. Mieux vaut une ligne prête à compléter qu’un prix inventé.",
    "stepsTitle": "Comment gérer les prix à renseigner",
    "steps": [
      {
        "title": "Préparer les lignes",
        "text": "Le modèle liste les postes pour ne pas oublier la structure du devis."
      },
      {
        "title": "Renseigner les prix réels",
        "text": "L’artisan complète ses prix selon fournisseur, marge, chantier et quantité."
      },
      {
        "title": "Vérifier les quantités",
        "text": "Longueurs, unités, forfaits et options doivent être adaptés au terrain."
      },
      {
        "title": "Contrôler la TVA",
        "text": "Le taux doit être vérifié selon le chantier, le logement et la nature des travaux."
      },
      {
        "title": "Relire avant envoi",
        "text": "Le devis doit être cohérent avec les photos, conditions et délais."
      }
    ],
    "checklistTitle": "Checklist prix devis",
    "checklist": [
      "Prix fournisseur vérifié.",
      "Marge artisan appliquée.",
      "Quantités adaptées au chantier.",
      "Unités cohérentes.",
      "TVA vérifiée.",
      "Options validées.",
      "Conditions de paiement ajoutées.",
      "Devis relu avant envoi."
    ],
    "commonMistakesTitle": "Erreurs fréquentes sur les prix",
    "commonMistakes": [
      "Utiliser un prix générique sans vérifier.",
      "Oublier la marge.",
      "Mal estimer les longueurs.",
      "Appliquer un mauvais taux de TVA.",
      "Ne pas expliquer une option chère au client."
    ],
    "chiffrTitle": "Comment Chiffr traite les prix",
    "chiffrText": "Chiffr peut préparer des lignes et modèles, mais signale clairement les prix à renseigner. L’artisan garde la main sur le montant final, ses marges et ses conditions.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Logiciel devis avec catalogue artisan",
        "href": "/logiciel-devis-avec-catalogue-artisan"
      },
      {
        "label": "Logiciel devis artisan simple",
        "href": "/logiciel-devis-artisan-simple"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi ne pas mettre des prix automatiques partout ?",
        "answer": "Parce que les prix réels dépendent du fournisseur, de la marque, du chantier, de la marge et des conditions de l’artisan."
      },
      {
        "question": "Un modèle de devis sans prix est-il utile ?",
        "answer": "Oui. Il évite les oublis et donne une structure claire, tout en laissant l’artisan renseigner ses montants."
      },
      {
        "question": "Chiffr peut-il gérer un catalogue personnel ?",
        "answer": "Oui. Chiffr valorise le catalogue adapté et les lignes récurrentes, mais l’artisan garde la main sur les prix."
      },
      {
        "question": "Faut-il vérifier la TVA ?",
        "answer": "Oui. Le taux de TVA doit toujours être vérifié selon le chantier et la réglementation applicable."
      },
      {
        "question": "Chiffr invente-t-il les prix ?",
        "answer": "Non. Le principe est de proposer une structure fiable, pas d’inventer des prix risqués."
      }
    ]
  },
  {
    "slug": "devis-artisan-signature-acompte-facture",
    "title": "Devis artisan : signature, acompte et facture",
    "metaDescription": "Guide devis artisan : faire signer, demander un acompte, générer facture d’acompte, solde, facture finale et relancer le client.",
    "h1": "Devis artisan : comment enchaîner signature, acompte et facture sans perdre le suivi ?",
    "eyebrow": "Guide suivi devis",
    "intro": "Le devis n’est que le début. Une fois envoyé, il faut obtenir la signature, sécuriser l’acompte, créer les factures, suivre le solde et relancer si besoin. C’est ce suivi qui transforme le devis en chantier payé.",
    "searchIntent": "L’artisan cherche comment organiser le passage du devis à la signature, puis à l’acompte et aux factures.",
    "problemTitle": "Le risque : avoir des devis signés mais un suivi administratif dispersé",
    "problemText": "Entre PDF, messages, paiements, factures et relances, l’artisan peut perdre l’historique du client et oublier le reste à encaisser.",
    "stepsTitle": "Le parcours propre après envoi du devis",
    "steps": [
      {
        "title": "Envoyer un PDF clair",
        "text": "Le client doit comprendre les lignes, les conditions et le montant."
      },
      {
        "title": "Obtenir la signature",
        "text": "La validation doit être simple et reliée au dossier client."
      },
      {
        "title": "Demander l’acompte",
        "text": "Le montant, le mode de paiement et le statut doivent être suivis."
      },
      {
        "title": "Créer la facture d’acompte",
        "text": "Elle doit rester liée au devis et au client."
      },
      {
        "title": "Facturer le solde",
        "text": "À la fin du chantier, le reste à encaisser doit être clair."
      }
    ],
    "checklistTitle": "Checklist signature, acompte et facture",
    "checklist": [
      "PDF envoyé.",
      "Devis signé.",
      "Acompte demandé.",
      "Acompte payé ou à relancer.",
      "Facture d’acompte créée.",
      "Photos chantier conservées.",
      "Facture de solde prévue.",
      "Relance client possible."
    ],
    "commonMistakesTitle": "Erreurs fréquentes dans le suivi",
    "commonMistakes": [
      "Envoyer le devis puis ne plus relancer.",
      "Recevoir un acompte sans le relier au dossier.",
      "Oublier la facture d’acompte.",
      "Perdre le reste à encaisser.",
      "Ne pas conserver les preuves et photos du chantier."
    ],
    "chiffrTitle": "Comment Chiffr relie devis, signature, acompte et facture",
    "chiffrText": "Chiffr aide à garder le parcours complet dans un seul dossier : devis, PDF, photos, signature, acompte, facture d’acompte, solde, facture finale et relances.",
    "chiffrBenefits": [
      "Chiffr ne part pas d’une page blanche : il prépare des bases métier adaptées aux artisans énergie.",
      "Les lignes de devis restent modifiables : l’artisan garde la main sur prix, quantités, marques et conditions.",
      "Photos chantier, PDF premium, signature, acompte, factures et relances restent reliés au même dossier client.",
      "Le suivi reste simple côté artisan, avec les prochaines actions visibles sans jargon ni outil lourd."
    ],
    "relatedLinks": [
      {
        "label": "Logiciel devis avec signature client",
        "href": "/logiciel-devis-avec-signature-client"
      },
      {
        "label": "Logiciel devis avec acompte",
        "href": "/logiciel-devis-avec-acompte"
      },
      {
        "label": "Logiciel devis avec facture acompte",
        "href": "/logiciel-devis-avec-facture-acompte"
      },
      {
        "label": "Relance devis artisan",
        "href": "/relance-devis-artisan"
      },
      {
        "label": "Modèles de devis",
        "href": "/modeles-devis"
      },
      {
        "label": "Fonctionnalités Chiffr",
        "href": "/fonctionnalites"
      },
      {
        "label": "Tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Pourquoi relier signature, acompte et facture ?",
        "answer": "Parce que cela évite de perdre le suivi entre devis accepté, paiement reçu, solde restant et facture finale."
      },
      {
        "question": "Peut-on demander un acompte après signature ?",
        "answer": "Oui, si le devis et les conditions le prévoient. L’artisan doit suivre l’acompte et la facture associée."
      },
      {
        "question": "Chiffr peut-il gérer facture d’acompte et facture de solde ?",
        "answer": "Oui. Chiffr prévoit le suivi des factures d’acompte, de solde ou finales liées au devis."
      },
      {
        "question": "Faut-il relancer un devis signé sans acompte ?",
        "answer": "Oui, si l’acompte est nécessaire pour lancer le chantier. Le suivi des relances aide à ne pas oublier."
      },
      {
        "question": "Le client peut-il signer à distance ?",
        "answer": "Chiffr valorise la signature sur place ou à distance selon le contexte et l’organisation de l’artisan."
      }
    ]
  }
];
