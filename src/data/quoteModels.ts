export type QuoteModelLine = {
  label: string;
  type: string;
  unit: string;
  quantity: string;
  priceMode: string;
  note: string;
};

export type QuoteModelFaq = {
  question: string;
  answer: string;
};

export type QuoteModelRelatedPage = {
  label: string;
  href: string;
};

export type QuoteModelPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  trade: string;
  useCase: string;
  heroChecks: string[];
  forWho: string[];
  contains: string[];
  lines: QuoteModelLine[];
  checkpoints: string[];
  chiffrBenefits: string[];
  blankPageRisks: string[];
  relatedPages: QuoteModelRelatedPage[];
  faqs: QuoteModelFaq[];
};

export const quoteModels: QuoteModelPage[] = [
  {
    "slug": "modele-devis-pac-air-eau",
    "title": "Modèle devis PAC air/eau : exemple et lignes à prévoir",
    "metaDescription": "Modèle de devis PAC air/eau pour installateur : dépose, fourniture, hydraulique, électricité, désembouage, mise en service, acompte et facture.",
    "h1": "Modèle de devis PAC air/eau : les lignes à prévoir pour un devis complet",
    "intro": "Un devis de pompe à chaleur air/eau doit être clair dès la première lecture. Le client doit comprendre ce qui est fourni, ce qui est posé, ce qui est repris sur l’existant et ce qui sera facturé. Ce modèle aide à structurer les lignes essentielles : visite, dépose, PAC, raccordements, traitement réseau, mise en service, acompte et solde.",
    "trade": "Pompe à chaleur",
    "useCase": "Installation ou remplacement par pompe à chaleur air/eau",
    "heroChecks": [
      "PAC air/eau",
      "Dépose",
      "Hydraulique",
      "Électricité",
      "Mise en service",
      "Acompte",
      "Facture"
    ],
    "forWho": [
      "Installateur PAC",
      "Chauffagiste",
      "Plombier-chauffagiste",
      "Entreprise CVC",
      "Artisan rénovation énergétique",
      "Remplacement chaudière gaz, fioul ou électrique"
    ],
    "contains": [
      "Coordonnées client et chantier",
      "Description de l’existant",
      "Dépose éventuelle",
      "Fourniture PAC et accessoires",
      "Raccordements hydrauliques",
      "Protection électrique",
      "Désembouage ou traitement réseau",
      "Mise en service",
      "Photos chantier",
      "Acompte et conditions de paiement"
    ],
    "lines": [
      {
        "label": "Visite technique et relevé chantier",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Relevé de l’existant, accès, réseau, emplacement et contraintes."
      },
      {
        "label": "Dépose ancien générateur",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Chaudière gaz, fioul, électrique ou autre équipement existant."
      },
      {
        "label": "Évacuation ancien équipement",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Manutention, accès, protection et évacuation à adapter."
      },
      {
        "label": "Fourniture pompe à chaleur air/eau",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Marque, modèle, puissance et options à compléter par l’artisan."
      },
      {
        "label": "Module hydraulique ou unité intérieure",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon configuration de la PAC et réseau existant."
      },
      {
        "label": "Support unité extérieure",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Support mural, support sol, dalle ou plots antivibratiles."
      },
      {
        "label": "Liaisons hydrauliques isolées",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Longueur, passage et calorifuge à vérifier sur place."
      },
      {
        "label": "Raccordements au réseau de chauffage",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Vannes, purge, remplissage, adaptation réseau et accessoires."
      },
      {
        "label": "Protection électrique dédiée",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Disjoncteur, câblage et protection selon tableau et puissance."
      },
      {
        "label": "Désembouage ou rinçage réseau",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "À prévoir selon état du réseau, radiateurs ou plancher chauffant."
      },
      {
        "label": "Mise en service et réglages",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Essais, paramétrage, contrôle, explication client et photos finales."
      },
      {
        "label": "Dossier client et facture de solde",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Signature, acompte, facture d’acompte, solde et reste à encaisser."
      }
    ],
    "checkpoints": [
      "Vérifier l’accès à l’unité extérieure.",
      "Contrôler l’état du réseau et la nécessité d’un désembouage.",
      "Photographier l’ancien générateur et l’emplacement prévu.",
      "Vérifier la protection électrique et la puissance disponible.",
      "Préciser acompte, délai, validité du devis et conditions de paiement."
    ],
    "chiffrBenefits": [
      "Prépare une base PAC air/eau sans page blanche.",
      "Relie photos chantier, lignes de devis, signature et acompte.",
      "Aide à suivre facture d’acompte, solde, finale et relances.",
      "Garde un dossier client clair pour le bureau et le terrain."
    ],
    "blankPageRisks": [
      "Oublier la dépose ou l’évacuation.",
      "Sous-estimer les raccordements hydrauliques ou électriques.",
      "Ne pas expliquer le désembouage au client.",
      "Envoyer un devis difficile à comparer ou à signer."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
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
        "label": "Facture acompte artisan énergie",
        "href": "/facture-acompte-artisan-energie"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles lignes mettre dans un devis PAC air/eau ?",
        "answer": "Un devis PAC air/eau doit généralement détailler la visite, la dépose, la fourniture PAC, les raccordements hydrauliques, la protection électrique, la mise en service, les options, l’acompte et les factures."
      },
      {
        "question": "Faut-il afficher des prix automatiques dans un modèle de devis PAC ?",
        "answer": "Non. Le modèle sert à ne pas oublier les postes. Les prix doivent être renseignés par l’artisan selon ses fournisseurs, sa marge, le chantier et la TVA applicable."
      },
      {
        "question": "Peut-on ajouter des photos chantier au devis ?",
        "answer": "Oui. Les photos de l’ancien équipement, de l’emplacement, du tableau ou du réseau aident à justifier les lignes techniques."
      },
      {
        "question": "Chiffr gère-t-il la facture d’acompte après le devis ?",
        "answer": "Oui. Le devis peut être suivi par une demande d’acompte, une facture d’acompte, une facture de solde ou une facture finale."
      }
    ]
  },
  {
    "slug": "modele-devis-remplacement-chaudiere-pac",
    "title": "Modèle devis remplacement chaudière par PAC | Chiffr",
    "metaDescription": "Exemple de devis remplacement chaudière par pompe à chaleur : dépose, évacuation, PAC, adaptation réseau, désembouage, électricité et factures.",
    "h1": "Modèle de devis remplacement chaudière par pompe à chaleur",
    "intro": "Un remplacement de chaudière par PAC demande d’expliquer l’existant, la dépose, l’adaptation du réseau, la fourniture, les raccordements et la mise en service. Ce modèle aide à présenter un devis plus clair, sans oublier les postes souvent sensibles.",
    "trade": "Pompe à chaleur",
    "useCase": "Remplacement chaudière gaz, fioul ou électrique par PAC",
    "heroChecks": [
      "Dépose chaudière",
      "Évacuation",
      "PAC",
      "Réseau",
      "Désembouage",
      "Acompte",
      "Solde"
    ],
    "forWho": [
      "Installateur PAC",
      "Chauffagiste",
      "Plombier-chauffagiste",
      "Rénovation énergétique",
      "Remplacement chaudière fioul ou gaz"
    ],
    "contains": [
      "État de l’ancien générateur",
      "Dépose et évacuation",
      "Fourniture PAC",
      "Adaptation hydraulique",
      "Traitement réseau",
      "Protection électrique",
      "Mise en service",
      "Dossier client",
      "Paiement et factures"
    ],
    "lines": [
      {
        "label": "Relevé chaudière existante",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Photos, puissance, réseau, accès et contraintes."
      },
      {
        "label": "Dépose chaudière existante",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Déconnexion, protection et démontage."
      },
      {
        "label": "Évacuation et mise en déchetterie",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon accès, poids et type d’équipement."
      },
      {
        "label": "Neutralisation ou reprise des raccordements",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "À adapter selon gaz, fioul, eau ou électricité."
      },
      {
        "label": "Fourniture pompe à chaleur",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Modèle, puissance et accessoires à compléter."
      },
      {
        "label": "Module intérieur ou hydraulique",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon installation et type de PAC."
      },
      {
        "label": "Adaptation réseau chauffage",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Vannes, raccords, purgeurs, pot à boues ou accessoires."
      },
      {
        "label": "Désembouage / rinçage du réseau",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Recommandé selon l’état du circuit existant."
      },
      {
        "label": "Protection électrique dédiée",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "À vérifier selon tableau et puissance."
      },
      {
        "label": "Mise en service et essais",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Réglages, contrôle, explication client."
      },
      {
        "label": "Photos avant / après",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Ancien équipement, pose et finitions."
      },
      {
        "label": "Facture acompte et solde",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Suivi de paiement lié au devis."
      }
    ],
    "checkpoints": [
      "Identifier le type de chaudière à déposer.",
      "Vérifier l’accès et l’évacuation.",
      "Contrôler le réseau hydraulique.",
      "Prévoir le traitement réseau si nécessaire.",
      "Expliquer clairement le reste à payer après acompte."
    ],
    "chiffrBenefits": [
      "Structure les postes de remplacement.",
      "Garde les photos de l’existant dans le dossier.",
      "Aide à générer acompte, solde et facture finale.",
      "Relie devis et suivi client sans outil lourd."
    ],
    "blankPageRisks": [
      "Oublier l’évacuation.",
      "Ne pas chiffrer l’adaptation réseau.",
      "Sous-estimer le traitement d’eau.",
      "Envoyer un devis trop court pour un chantier complexe."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Modèle devis PAC air/eau",
        "href": "/modele-devis-pac-air-eau"
      },
      {
        "label": "Comment faire un devis PAC air/eau",
        "href": "/comment-faire-un-devis-pac-air-eau"
      },
      {
        "label": "Logiciel devis avec facture acompte",
        "href": "/logiciel-devis-avec-facture-acompte"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que doit contenir un devis de remplacement chaudière par PAC ?",
        "answer": "Il doit détailler l’existant, la dépose, l’évacuation, la fourniture PAC, l’adaptation réseau, l’électricité, la mise en service, les conditions de paiement et les factures."
      },
      {
        "question": "Faut-il prévoir une ligne désembouage ?",
        "answer": "C’est souvent pertinent si le réseau est ancien ou encrassé. L’artisan doit vérifier sur place et expliquer cette ligne au client."
      },
      {
        "question": "Peut-on facturer un acompte sur ce type de devis ?",
        "answer": "Oui. Le devis peut prévoir un acompte, puis une facture d’acompte et une facture de solde."
      },
      {
        "question": "Chiffr remplace-t-il le calcul technique de dimensionnement ?",
        "answer": "Non. Chiffr structure le devis et le suivi. L’artisan reste responsable des choix techniques, des quantités et du dimensionnement."
      }
    ]
  },
  {
    "slug": "modele-devis-clim-monosplit",
    "title": "Modèle devis clim monosplit : exemple de lignes",
    "metaDescription": "Modèle de devis clim monosplit : unité intérieure, groupe extérieur, liaisons frigorifiques, condensats, électricité, mise en service et acompte.",
    "h1": "Modèle de devis clim monosplit : les lignes à prévoir",
    "intro": "Une pose de clim monosplit paraît simple, mais le devis doit détailler le matériel, la pose, les liaisons, les condensats, le support, l’électricité et la mise en service. Ce modèle aide l’installateur à présenter un devis clair et rassurant.",
    "trade": "Climatisation",
    "useCase": "Installation climatisation monosplit",
    "heroChecks": [
      "Unité intérieure",
      "Groupe extérieur",
      "Liaisons",
      "Condensats",
      "Mise en service",
      "Signature"
    ],
    "forWho": [
      "Installateur clim",
      "Frigoriste",
      "Artisan CVC",
      "Pose résidentielle",
      "Pose bureau ou local"
    ],
    "contains": [
      "Unité intérieure",
      "Groupe extérieur",
      "Support",
      "Liaisons frigorifiques",
      "Goulottes",
      "Condensats",
      "Alimentation électrique",
      "Tirage au vide",
      "Mise en service"
    ],
    "lines": [
      {
        "label": "Relevé et implantation",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Emplacement, mur, accès, longueur liaisons et évacuation."
      },
      {
        "label": "Fourniture unité intérieure",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Type mural, console ou autre selon besoin."
      },
      {
        "label": "Fourniture groupe extérieur",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Puissance, marque et modèle à compléter."
      },
      {
        "label": "Support groupe extérieur",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Support mural, sol ou plots antivibratiles."
      },
      {
        "label": "Liaisons frigorifiques",
        "type": "Matériel + pose",
        "unit": "Mètre",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Longueur selon chantier, isolation comprise."
      },
      {
        "label": "Goulotte et finitions",
        "type": "Matériel + pose",
        "unit": "Mètre",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Cheminement propre et finition visible."
      },
      {
        "label": "Évacuation condensats",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Pente naturelle ou pompe à prévoir si nécessaire."
      },
      {
        "label": "Alimentation électrique",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Protection et raccordement selon tableau."
      },
      {
        "label": "Tirage au vide et mise en service",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Essais, réglages, explication client."
      },
      {
        "label": "Photos et dossier final",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Photos avant/après et validation client."
      }
    ],
    "checkpoints": [
      "Vérifier la longueur réelle des liaisons.",
      "Contrôler l’évacuation des condensats.",
      "Prévoir le support du groupe.",
      "Photographier l’emplacement et le passage.",
      "Préciser les conditions d’acompte et de solde."
    ],
    "chiffrBenefits": [
      "Prépare les lignes fréquentes d’un monosplit.",
      "Ajoute photos et signature au dossier.",
      "Aide à suivre acompte, solde et facture.",
      "Évite une ligne unique trop vague."
    ],
    "blankPageRisks": [
      "Oublier la pompe de relevage.",
      "Sous-estimer la longueur des liaisons.",
      "Ne pas préciser le support extérieur.",
      "Envoyer un devis peu rassurant."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Modèle devis clim multisplit",
        "href": "/modele-devis-clim-multisplit"
      },
      {
        "label": "Comment faire un devis climatisation",
        "href": "/comment-faire-un-devis-climatisation"
      },
      {
        "label": "Que mettre dans un devis climatisation",
        "href": "/que-mettre-dans-un-devis-climatisation"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles lignes mettre dans un devis clim monosplit ?",
        "answer": "Il faut généralement prévoir unité intérieure, groupe extérieur, support, liaisons, goulottes, condensats, électricité et mise en service."
      },
      {
        "question": "Faut-il chiffrer les liaisons au mètre ?",
        "answer": "Cela dépend de l’organisation de l’artisan. Le modèle peut prévoir une quantité à compléter selon le chantier."
      },
      {
        "question": "Peut-on ajouter des photos au devis clim ?",
        "answer": "Oui. Les photos de l’emplacement, du passage des liaisons et du groupe extérieur renforcent la clarté."
      },
      {
        "question": "Chiffr gère-t-il l’acompte ?",
        "answer": "Oui. Le dossier peut inclure demande d’acompte, facture d’acompte, solde et relance."
      }
    ]
  },
  {
    "slug": "modele-devis-clim-multisplit",
    "title": "Modèle devis clim multisplit : structure complète",
    "metaDescription": "Modèle devis clim multisplit : plusieurs unités intérieures, groupe extérieur, liaisons, condensats, pompe, électricité, mise en service et factures.",
    "h1": "Modèle de devis clim multisplit : structurer plusieurs unités sans perdre le client",
    "intro": "Un devis multisplit doit rester lisible même avec plusieurs pièces, plusieurs unités et des longueurs de liaisons différentes. Ce modèle aide à expliquer les postes et options sans noyer le client.",
    "trade": "Climatisation",
    "useCase": "Installation climatisation multisplit",
    "heroChecks": [
      "Plusieurs unités",
      "Groupe extérieur",
      "Liaisons",
      "Condensats",
      "Mise en service",
      "Acompte"
    ],
    "forWho": [
      "Installateur clim",
      "Frigoriste",
      "Entreprise CVC",
      "Maison individuelle",
      "Bureaux ou local professionnel"
    ],
    "contains": [
      "Nombre d’unités",
      "Groupe extérieur",
      "Liaisons par zone",
      "Goulottes",
      "Condensats",
      "Pompe si nécessaire",
      "Électricité",
      "Mise en service pièce par pièce"
    ],
    "lines": [
      {
        "label": "Relevé zones à climatiser",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Pièces, puissances, longueurs, passages et contraintes."
      },
      {
        "label": "Fourniture groupe extérieur multisplit",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Puissance et nombre de sorties à préciser."
      },
      {
        "label": "Fourniture unité intérieure séjour",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Modèle, puissance et finition selon pièce."
      },
      {
        "label": "Fourniture unité intérieure chambre",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "À dupliquer selon nombre de pièces."
      },
      {
        "label": "Liaisons frigorifiques par unité",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Longueurs et cheminements à détailler."
      },
      {
        "label": "Goulottes et passages",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Finitions visibles et percements."
      },
      {
        "label": "Condensats par unité",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Évacuation, pompe ou pente selon pièce."
      },
      {
        "label": "Alimentation et protections",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Raccordement et vérifications tableau."
      },
      {
        "label": "Mise en service complète",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Essais et réglages de chaque unité."
      },
      {
        "label": "Dossier client et facturation",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Signature, acompte, solde et relance."
      }
    ],
    "checkpoints": [
      "Lister chaque pièce et chaque unité.",
      "Séparer les longueurs de liaison si utile.",
      "Vérifier les condensats pièce par pièce.",
      "Prévoir le temps de mise en service.",
      "Joindre des photos des passages."
    ],
    "chiffrBenefits": [
      "Organise les unités par zone.",
      "Permet d’ajouter photos, options et quantités.",
      "Garde le devis lisible malgré plusieurs postes.",
      "Relie signature, acompte et factures."
    ],
    "blankPageRisks": [
      "Mélanger toutes les unités en une ligne.",
      "Oublier une pompe ou une goulotte.",
      "Ne pas détailler les longueurs.",
      "Créer un devis difficile à comprendre."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Modèle devis clim monosplit",
        "href": "/modele-devis-clim-monosplit"
      },
      {
        "label": "Modèle entretien climatisation",
        "href": "/modele-devis-entretien-climatisation"
      },
      {
        "label": "Logiciel devis frigoriste CVC",
        "href": "/logiciel-devis-frigoriste-cvc"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Comment présenter un devis clim multisplit ?",
        "answer": "Il est conseillé de séparer le groupe extérieur, les unités intérieures, les liaisons, les condensats, l’électricité et la mise en service."
      },
      {
        "question": "Faut-il détailler chaque unité intérieure ?",
        "answer": "Oui, surtout si les pièces, puissances ou longueurs sont différentes."
      },
      {
        "question": "Peut-on ajouter plusieurs photos chantier ?",
        "answer": "Oui. Les photos aident à documenter les passages, unités, contraintes et accès."
      },
      {
        "question": "Chiffr peut-il gérer l’acompte sur un devis multisplit ?",
        "answer": "Oui. Le devis peut être suivi par acompte, facture d’acompte, solde et relance."
      }
    ]
  },
  {
    "slug": "modele-devis-chauffe-eau-thermodynamique",
    "title": "Modèle devis chauffe-eau thermodynamique | Chiffr",
    "metaDescription": "Modèle devis chauffe-eau thermodynamique : dépose ballon, fourniture, raccordements eau, électricité, condensats, mise en service et factures.",
    "h1": "Modèle de devis chauffe-eau thermodynamique : lignes à prévoir",
    "intro": "Un devis de chauffe-eau thermodynamique doit expliquer la dépose, la fourniture, les raccordements, l’évacuation des condensats et la mise en service. Ce modèle aide à chiffrer proprement sans oublier les contraintes du local.",
    "trade": "Chauffe-eau thermodynamique",
    "useCase": "Remplacement ou installation d’un ballon thermodynamique",
    "heroChecks": [
      "Dépose",
      "Ballon thermo",
      "Raccordements",
      "Condensats",
      "Mise en service",
      "Factures"
    ],
    "forWho": [
      "Chauffagiste",
      "Plombier-chauffagiste",
      "Artisan énergie",
      "Entreprise rénovation énergétique"
    ],
    "contains": [
      "Dépose ancien ballon",
      "Fourniture CET",
      "Raccordements eau",
      "Groupe de sécurité",
      "Électricité",
      "Condensats",
      "Gaines ou air",
      "Essais",
      "Paiement"
    ],
    "lines": [
      {
        "label": "Vidange et dépose ancien ballon",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon accessibilité et volume."
      },
      {
        "label": "Évacuation ancien ballon",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Manutention et évacuation à adapter."
      },
      {
        "label": "Fourniture chauffe-eau thermodynamique",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Capacité, marque et modèle à compléter."
      },
      {
        "label": "Groupe de sécurité et accessoires",
        "type": "Matériel",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Accessoires hydrauliques nécessaires."
      },
      {
        "label": "Raccordement eau froide / eau chaude",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Adaptation des arrivées et sorties."
      },
      {
        "label": "Raccordement électrique",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Alimentation et protection à vérifier."
      },
      {
        "label": "Évacuation condensats",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Pente, pompe ou raccord selon configuration."
      },
      {
        "label": "Gaines ou prise d’air",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "À prévoir selon type d’appareil et local."
      },
      {
        "label": "Mise en service",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Essais, réglage température, explication client."
      },
      {
        "label": "Facture acompte et solde",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Suivi de paiement et dossier final."
      }
    ],
    "checkpoints": [
      "Vérifier le volume et l’accès.",
      "Prévoir l’évacuation des condensats.",
      "Contrôler l’alimentation électrique.",
      "Photographier l’ancien ballon et l’emplacement.",
      "Préciser les conditions de paiement."
    ],
    "chiffrBenefits": [
      "Prépare les lignes du devis CET.",
      "Garde les photos et contraintes dans le dossier.",
      "Aide à générer signature, acompte et factures.",
      "Rend le devis plus compréhensible pour le client."
    ],
    "blankPageRisks": [
      "Oublier les condensats.",
      "Ne pas prévoir l’évacuation de l’ancien ballon.",
      "Sous-estimer l’électricité.",
      "Envoyer un devis trop court."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis chauffe-eau thermodynamique",
        "href": "/logiciel-devis-chauffe-eau-thermodynamique"
      },
      {
        "label": "Logiciel devis chauffagiste",
        "href": "/logiciel-devis-chauffagiste"
      },
      {
        "label": "Logiciel devis avec facture acompte",
        "href": "/logiciel-devis-avec-facture-acompte"
      },
      {
        "label": "Logiciel devis avec photos chantier",
        "href": "/logiciel-devis-avec-photos-chantier"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que mettre dans un devis chauffe-eau thermodynamique ?",
        "answer": "Dépose, fourniture, raccordements eau, électricité, condensats, mise en service, acompte et factures."
      },
      {
        "question": "Faut-il prévoir les condensats ?",
        "answer": "Oui, l’évacuation des condensats doit être vérifiée et expliquée dans le devis."
      },
      {
        "question": "Peut-on joindre des photos ?",
        "answer": "Oui, les photos de l’ancien ballon, de l’accès et de l’emplacement sont utiles."
      },
      {
        "question": "Chiffr gère-t-il les factures ?",
        "answer": "Oui, le devis peut être suivi par facture d’acompte, solde ou finale."
      }
    ]
  },
  {
    "slug": "modele-devis-vmc-simple-flux",
    "title": "Modèle devis VMC simple flux : lignes à prévoir",
    "metaDescription": "Modèle devis VMC simple flux : caisson, gaines, bouches, sorties, dépose, réglages, photos chantier, signature, acompte et factures.",
    "h1": "Modèle de devis VMC simple flux : exemple de structure",
    "intro": "Un devis VMC simple flux doit rendre visibles des postes souvent cachés : combles, gaines, bouches, sortie toiture, raccordements et réglages. Ce modèle aide à présenter le travail de ventilation clairement.",
    "trade": "VMC",
    "useCase": "Installation ou remplacement VMC simple flux",
    "heroChecks": [
      "Caisson",
      "Gaines",
      "Bouches",
      "Sortie",
      "Réglages",
      "Photos"
    ],
    "forWho": [
      "Artisan VMC",
      "Électricien",
      "Plombier-chauffagiste",
      "Entreprise CVC",
      "Rénovation logement"
    ],
    "contains": [
      "Relevé logement",
      "Dépose ancien caisson",
      "Fourniture VMC",
      "Gaines",
      "Bouches",
      "Sortie toiture",
      "Raccordement électrique",
      "Essais"
    ],
    "lines": [
      {
        "label": "Relevé ventilation logement",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Pièces, accès combles, réseau existant et photos."
      },
      {
        "label": "Dépose ancien caisson VMC",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Si remplacement ou reprise existante."
      },
      {
        "label": "Fourniture caisson VMC simple flux",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Standard ou hygroréglable selon projet."
      },
      {
        "label": "Fourniture gaines",
        "type": "Matériel",
        "unit": "Mètre",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Longueur et type selon accès."
      },
      {
        "label": "Pose gaines et raccordements",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Passage, fixation, raccordement caisson."
      },
      {
        "label": "Fourniture bouches d’extraction",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Cuisine, salle de bain, WC."
      },
      {
        "label": "Sortie toiture ou murale",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Chapeau, traversée, raccordement."
      },
      {
        "label": "Raccordement électrique",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Alimentation et protection."
      },
      {
        "label": "Essais et réglages",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Contrôle aspiration, bruit, explication client."
      },
      {
        "label": "Dossier et facture",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Photos, acompte, solde et facture finale."
      }
    ],
    "checkpoints": [
      "Vérifier l’accès aux combles.",
      "Compter les bouches par pièce.",
      "Photographier l’ancien caisson.",
      "Prévoir sortie toiture ou murale.",
      "Expliquer les réglages au client."
    ],
    "chiffrBenefits": [
      "Structure les lignes VMC.",
      "Rend visibles les postes cachés.",
      "Associe photos et devis.",
      "Relie signature, acompte et factures."
    ],
    "blankPageRisks": [
      "Oublier les bouches.",
      "Sous-estimer les gaines.",
      "Ne pas prévoir la sortie.",
      "Ne pas expliquer les réglages."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis VMC",
        "href": "/logiciel-devis-vmc"
      },
      {
        "label": "Modèle VMC double flux",
        "href": "/modele-devis-vmc-double-flux"
      },
      {
        "label": "Comment faire un devis VMC",
        "href": "/comment-faire-un-devis-vmc"
      },
      {
        "label": "Logiciel devis avec photos chantier",
        "href": "/logiciel-devis-avec-photos-chantier"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles lignes mettre dans un devis VMC simple flux ?",
        "answer": "Caisson, gaines, bouches, sortie, raccordement électrique, essais, réglages et factures."
      },
      {
        "question": "Faut-il détailler les bouches ?",
        "answer": "Oui, cela aide à expliquer les pièces concernées et les quantités."
      },
      {
        "question": "Pourquoi ajouter des photos ?",
        "answer": "Les photos des combles, gaines ou caisson rendent le devis plus compréhensible."
      },
      {
        "question": "Chiffr convient-il à un artisan VMC ?",
        "answer": "Oui, Chiffr aide à structurer les devis ventilation et le suivi client."
      }
    ]
  },
  {
    "slug": "modele-devis-vmc-double-flux",
    "title": "Modèle devis VMC double flux : exemple complet",
    "metaDescription": "Modèle devis VMC double flux : caisson, échangeur, gaines isolées, bouches, équilibrage, photos, mise en service et factures.",
    "h1": "Modèle de devis VMC double flux : structurer un chantier plus technique",
    "intro": "Une VMC double flux nécessite une structure de devis plus détaillée : caisson, réseau, gaines isolées, bouches, traversées, équilibrage et mise en service. Ce modèle aide à expliquer le prix et les étapes.",
    "trade": "VMC",
    "useCase": "Installation VMC double flux",
    "heroChecks": [
      "Double flux",
      "Gaines isolées",
      "Bouches",
      "Équilibrage",
      "Mise en service",
      "Factures"
    ],
    "forWho": [
      "Artisan VMC",
      "Entreprise CVC",
      "Rénovation énergétique",
      "Logement performant",
      "Maison individuelle"
    ],
    "contains": [
      "Relevé",
      "Caisson double flux",
      "Réseau de gaines",
      "Bouches insufflation/extraction",
      "Prises d’air",
      "Équilibrage",
      "Mise en service",
      "Photos"
    ],
    "lines": [
      {
        "label": "Étude et relevé ventilation",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Pièces, volumes, passages, accès et contraintes."
      },
      {
        "label": "Fourniture caisson VMC double flux",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Modèle et débit à compléter."
      },
      {
        "label": "Accessoires et échangeur",
        "type": "Matériel",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Filtres, supports, condensats selon équipement."
      },
      {
        "label": "Gaines isolées",
        "type": "Matériel",
        "unit": "Mètre",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Longueurs et diamètres à vérifier."
      },
      {
        "label": "Pose réseau de gaines",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Cheminement, fixation et raccordements."
      },
      {
        "label": "Bouches extraction",
        "type": "Matériel + pose",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Cuisine, sanitaires, pièces humides."
      },
      {
        "label": "Bouches insufflation",
        "type": "Matériel + pose",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Pièces de vie et chambres."
      },
      {
        "label": "Prises d’air et rejet",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Traversées, sorties, accessoires et étanchéité."
      },
      {
        "label": "Équilibrage et mise en service",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Contrôle, réglages, explication client."
      },
      {
        "label": "Dossier et facturation",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Photos, signature, acompte et facture."
      }
    ],
    "checkpoints": [
      "Vérifier les passages de gaines.",
      "Séparer extraction et insufflation.",
      "Prévoir équilibrage.",
      "Documenter les accès par photos.",
      "Expliquer l’entretien des filtres."
    ],
    "chiffrBenefits": [
      "Structure un devis technique.",
      "Rend les lignes plus lisibles.",
      "Garde photos et options dans le dossier.",
      "Suit acompte, solde et relance."
    ],
    "blankPageRisks": [
      "Mélanger extraction et insufflation.",
      "Oublier l’équilibrage.",
      "Sous-estimer les gaines isolées.",
      "Ne pas expliquer les traversées."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis VMC",
        "href": "/logiciel-devis-vmc"
      },
      {
        "label": "Modèle VMC simple flux",
        "href": "/modele-devis-vmc-simple-flux"
      },
      {
        "label": "Logiciel devis frigoriste CVC",
        "href": "/logiciel-devis-frigoriste-cvc"
      },
      {
        "label": "Comment faire un devis VMC",
        "href": "/comment-faire-un-devis-vmc"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que doit contenir un devis VMC double flux ?",
        "answer": "Caisson, gaines isolées, bouches extraction et insufflation, prises d’air, équilibrage, mise en service et factures."
      },
      {
        "question": "Faut-il prévoir une ligne équilibrage ?",
        "answer": "Oui, c’est un poste important pour expliquer la mise en service."
      },
      {
        "question": "Peut-on joindre des photos des combles ?",
        "answer": "Oui, les photos aident à comprendre les passages et contraintes."
      },
      {
        "question": "Chiffr permet-il d’adapter les lignes ?",
        "answer": "Oui. L’artisan modifie les quantités, options et prix selon son chantier."
      }
    ]
  },
  {
    "slug": "modele-devis-borne-recharge-7kw",
    "title": "Modèle devis borne recharge 7 kW | IRVE Chiffr",
    "metaDescription": "Modèle devis borne de recharge 7 kW : tableau, protection dédiée, câble, pose, mise en service, photos, acompte et facture.",
    "h1": "Modèle de devis borne de recharge 7 kW : lignes à prévoir",
    "intro": "Un devis de borne 7 kW doit rassurer le client sur la sécurité électrique, le cheminement, la protection dédiée et la mise en service. Ce modèle aide à structurer une installation IRVE résidentielle.",
    "trade": "IRVE",
    "useCase": "Installation borne de recharge 7 kW",
    "heroChecks": [
      "Borne 7 kW",
      "Tableau",
      "Protection",
      "Câble",
      "Mise en service",
      "Facture"
    ],
    "forWho": [
      "Installateur IRVE",
      "Électricien",
      "Artisan énergie",
      "Maison individuelle",
      "Garage ou parking privé"
    ],
    "contains": [
      "Visite technique",
      "Borne 7 kW",
      "Protection dédiée",
      "Câble",
      "Cheminement",
      "Pose murale",
      "Paramétrage",
      "Photos"
    ],
    "lines": [
      {
        "label": "Visite technique IRVE",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Tableau, puissance, distance, accès et photos."
      },
      {
        "label": "Fourniture borne de recharge 7 kW",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Modèle, options et connectivité à compléter."
      },
      {
        "label": "Protection électrique dédiée",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Disjoncteur, différentiel, accessoires selon installation."
      },
      {
        "label": "Câble d’alimentation",
        "type": "Matériel",
        "unit": "Mètre",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Section et longueur à vérifier."
      },
      {
        "label": "Cheminement et gaine",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Passage, percement, protection et finition."
      },
      {
        "label": "Pose murale borne",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Fixation, raccordement et finitions."
      },
      {
        "label": "Paramétrage et mise en service",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Essais, réglages et explication client."
      },
      {
        "label": "Photos tableau et borne posée",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Documentation du dossier client."
      },
      {
        "label": "Facture acompte et solde",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Suivi du paiement et validation."
      }
    ],
    "checkpoints": [
      "Vérifier la puissance disponible.",
      "Photographier le tableau.",
      "Mesurer la distance réelle.",
      "Préciser la protection dédiée.",
      "Documenter la mise en service."
    ],
    "chiffrBenefits": [
      "Structure le devis IRVE 7 kW.",
      "Relie photos du tableau et du cheminement.",
      "Garde signature, acompte et factures.",
      "Aide à présenter la sécurité électrique simplement."
    ],
    "blankPageRisks": [
      "Oublier la protection dédiée.",
      "Sous-estimer la distance de câble.",
      "Ne pas expliquer le cheminement.",
      "Envoyer un devis trop vague."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis IRVE",
        "href": "/logiciel-devis-irve"
      },
      {
        "label": "Modèle borne recharge 22 kW",
        "href": "/modele-devis-borne-recharge-22kw"
      },
      {
        "label": "Comment faire un devis borne recharge",
        "href": "/comment-faire-un-devis-borne-recharge"
      },
      {
        "label": "Logiciel devis avec acompte",
        "href": "/logiciel-devis-avec-acompte"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que mettre dans un devis borne 7 kW ?",
        "answer": "Borne, protection dédiée, câble, cheminement, pose, paramétrage, mise en service et factures."
      },
      {
        "question": "Faut-il photographier le tableau ?",
        "answer": "Oui, c’est utile pour documenter la protection, l’accès et la configuration."
      },
      {
        "question": "Le prix doit-il être automatique ?",
        "answer": "Non. Le modèle aide à structurer, mais l’artisan renseigne ses prix selon matériel et chantier."
      },
      {
        "question": "Chiffr convient-il aux installateurs IRVE ?",
        "answer": "Oui. Chiffr aide à créer des devis IRVE avec photos, signature, acompte et factures."
      }
    ]
  },
  {
    "slug": "modele-devis-borne-recharge-22kw",
    "title": "Modèle devis borne recharge 22 kW | IRVE Chiffr",
    "metaDescription": "Modèle devis borne de recharge 22 kW : puissance, protections, câblage, pose, paramétrage, photos chantier, acompte et factures.",
    "h1": "Modèle de devis borne de recharge 22 kW : les postes à détailler",
    "intro": "Une borne 22 kW implique plus de vigilance sur la puissance, la protection, le câblage et la configuration du site. Ce modèle aide l’installateur IRVE à présenter un devis clair et professionnel.",
    "trade": "IRVE",
    "useCase": "Installation borne de recharge 22 kW",
    "heroChecks": [
      "Borne 22 kW",
      "Puissance",
      "Protection",
      "Câblage",
      "Paramétrage",
      "Factures"
    ],
    "forWho": [
      "Installateur IRVE",
      "Électricien",
      "Entreprise énergie",
      "TPE avec parking",
      "Garage ou site professionnel"
    ],
    "contains": [
      "Relevé puissance",
      "Borne 22 kW",
      "Protection dédiée",
      "Câblage adapté",
      "Pose murale ou sur pied",
      "Paramétrage",
      "Essais",
      "Photos"
    ],
    "lines": [
      {
        "label": "Relevé électrique et puissance",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Tableau, abonnement, distance, accès et contraintes."
      },
      {
        "label": "Fourniture borne 22 kW",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Modèle, options, connectivité et paramétrage."
      },
      {
        "label": "Protection dédiée adaptée",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Différentiel, disjoncteur et accessoires selon site."
      },
      {
        "label": "Câblage adapté à la puissance",
        "type": "Matériel",
        "unit": "Mètre",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Section et longueur à vérifier."
      },
      {
        "label": "Cheminement câble",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Gaine, passage, percement, fixation et finition."
      },
      {
        "label": "Pose borne ou pied",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Murale, pied ou support selon emplacement."
      },
      {
        "label": "Paramétrage puissance",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Réglage, essais, explication client."
      },
      {
        "label": "Photos et dossier IRVE",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Tableau, cheminement, borne et résultat final."
      },
      {
        "label": "Factures et suivi paiement",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Acompte, solde, finale et relance."
      }
    ],
    "checkpoints": [
      "Confirmer la puissance disponible.",
      "Vérifier la section de câble.",
      "Préciser le type de pose.",
      "Prévoir le paramétrage.",
      "Garder les photos du tableau et du cheminement."
    ],
    "chiffrBenefits": [
      "Structure les postes électriques sensibles.",
      "Aide à expliquer la différence avec une installation plus simple.",
      "Garde les photos dans le dossier client.",
      "Suit signature, acompte et facturation."
    ],
    "blankPageRisks": [
      "Sous-estimer le câblage.",
      "Ne pas expliquer la puissance.",
      "Oublier le support ou le pied.",
      "Ne pas prévoir le paramétrage."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis IRVE",
        "href": "/logiciel-devis-irve"
      },
      {
        "label": "Modèle borne recharge 7 kW",
        "href": "/modele-devis-borne-recharge-7kw"
      },
      {
        "label": "Comment faire un devis borne recharge",
        "href": "/comment-faire-un-devis-borne-recharge"
      },
      {
        "label": "Logiciel devis mobile artisan",
        "href": "/logiciel-devis-mobile-artisan"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que doit contenir un devis borne 22 kW ?",
        "answer": "Puissance, borne, protection dédiée, câblage adapté, pose, paramétrage, essais et factures."
      },
      {
        "question": "Faut-il détailler le câblage ?",
        "answer": "Oui. La longueur, la section et le cheminement influencent fortement le devis."
      },
      {
        "question": "Peut-on suivre l’acompte ?",
        "answer": "Oui. Chiffr permet de relier devis, acompte, solde et factures."
      },
      {
        "question": "Le modèle remplace-t-il la vérification électrique ?",
        "answer": "Non. L’artisan doit vérifier la configuration réelle et adapter ses lignes."
      }
    ]
  },
  {
    "slug": "modele-devis-photovoltaique-autoconsommation",
    "title": "Modèle devis photovoltaïque autoconsommation | Chiffr",
    "metaDescription": "Modèle devis photovoltaïque autoconsommation : panneaux, fixation, onduleur, micro-onduleurs, coffrets, raccordement, photos et factures.",
    "h1": "Modèle de devis photovoltaïque autoconsommation : les lignes à prévoir",
    "intro": "Un devis photovoltaïque doit rester lisible malgré les nombreux postes : panneaux, fixation, onduleur, coffrets, câbles, raccordement, mise en service et options. Ce modèle aide à structurer un devis solaire pour l’autoconsommation.",
    "trade": "Photovoltaïque",
    "useCase": "Installation solaire en autoconsommation",
    "heroChecks": [
      "Panneaux",
      "Fixation",
      "Onduleur",
      "Coffrets",
      "Raccordement",
      "Acompte"
    ],
    "forWho": [
      "Installateur photovoltaïque",
      "Artisan solaire",
      "Entreprise énergie",
      "Maison individuelle",
      "Autoconsommation résidentielle"
    ],
    "contains": [
      "Relevé toiture",
      "Panneaux",
      "Système de fixation",
      "Onduleur ou micro-onduleurs",
      "Coffrets",
      "Câblage",
      "Monitoring",
      "Mise en service"
    ],
    "lines": [
      {
        "label": "Relevé toiture et accès",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Orientation, surface, accès, photos et contraintes."
      },
      {
        "label": "Fourniture panneaux photovoltaïques",
        "type": "Matériel",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Puissance, quantité et modèle à compléter."
      },
      {
        "label": "Système de fixation",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Rails, crochets, lestage ou fixation selon toiture."
      },
      {
        "label": "Onduleur ou micro-onduleurs",
        "type": "Matériel",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon architecture retenue."
      },
      {
        "label": "Coffrets AC/DC et protections",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Protections, parafoudre, disjoncteurs et accessoires."
      },
      {
        "label": "Câblage et raccordements",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Cheminement, câbles, gaines et finitions."
      },
      {
        "label": "Monitoring ou passerelle",
        "type": "Matériel + pose",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Option de suivi production si prévue."
      },
      {
        "label": "Mise en service",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Essais, paramétrage, explication client."
      },
      {
        "label": "Photos toiture et coffrets",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Avant/après, tableau, coffrets et finitions."
      },
      {
        "label": "Acompte et facture finale",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Suivi du paiement lié au devis."
      }
    ],
    "checkpoints": [
      "Photographier toiture et accès.",
      "Préciser la quantité de panneaux.",
      "Vérifier emplacement onduleur/coffrets.",
      "Détailler câblage et raccordement.",
      "Clarifier les conditions de paiement."
    ],
    "chiffrBenefits": [
      "Structure les postes solaires.",
      "Garde photos toiture et coffrets.",
      "Relie devis, signature, acompte et factures.",
      "Aide à garder un PDF lisible pour un chantier à forte valeur."
    ],
    "blankPageRisks": [
      "Oublier les coffrets.",
      "Sous-estimer les fixations.",
      "Ne pas détailler le câblage.",
      "Mélanger matériel et main-d’œuvre."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis photovoltaïque",
        "href": "/logiciel-devis-photovoltaique"
      },
      {
        "label": "Logiciel devis IRVE",
        "href": "/logiciel-devis-irve"
      },
      {
        "label": "Logiciel devis avec facture acompte",
        "href": "/logiciel-devis-avec-facture-acompte"
      },
      {
        "label": "Logiciel devis avec photos chantier",
        "href": "/logiciel-devis-avec-photos-chantier"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Quelles lignes mettre dans un devis photovoltaïque ?",
        "answer": "Panneaux, fixations, onduleur, coffrets, câblage, raccordement, mise en service, photos et factures."
      },
      {
        "question": "Faut-il détailler panneaux et onduleur séparément ?",
        "answer": "Oui, cela rend le devis plus lisible et plus facile à comprendre."
      },
      {
        "question": "Peut-on ajouter des photos de toiture ?",
        "answer": "Oui, les photos aident à documenter l’accès, la toiture et les contraintes."
      },
      {
        "question": "Chiffr convient-il aux installateurs solaires ?",
        "answer": "Oui. Chiffr aide à créer des devis solaires structurés avec photos, signature, acompte et factures."
      }
    ]
  },
  {
    "slug": "modele-devis-entretien-climatisation",
    "title": "Modèle devis entretien climatisation | Chiffr",
    "metaDescription": "Modèle devis entretien climatisation : nettoyage filtres, contrôle unités, désinfection, condensats, photos, intervention et facture.",
    "h1": "Modèle de devis entretien climatisation : intervention, nettoyage et contrôle",
    "intro": "Un devis d’entretien climatisation doit détailler le déplacement, le nettoyage, les contrôles, les consommables éventuels et le compte rendu. Ce modèle aide à présenter une intervention simple mais professionnelle.",
    "trade": "Climatisation",
    "useCase": "Entretien ou maintenance climatisation",
    "heroChecks": [
      "Nettoyage",
      "Contrôle",
      "Condensats",
      "Photos",
      "Facture"
    ],
    "forWho": [
      "Installateur clim",
      "Frigoriste",
      "Artisan CVC",
      "Maintenance résidentielle",
      "Maintenance tertiaire légère"
    ],
    "contains": [
      "Déplacement",
      "Nettoyage filtres",
      "Contrôle unités",
      "Condensats",
      "Désinfection",
      "Compte rendu",
      "Photos",
      "Facture"
    ],
    "lines": [
      {
        "label": "Déplacement intervention",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Zone, accès et conditions à préciser."
      },
      {
        "label": "Nettoyage filtres unité intérieure",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon nombre d’unités."
      },
      {
        "label": "Contrôle unité intérieure",
        "type": "Service",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Température, bruit, état général."
      },
      {
        "label": "Contrôle groupe extérieur",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "État, accès, fixations et propreté."
      },
      {
        "label": "Nettoyage échangeur ou façade",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon état et accessibilité."
      },
      {
        "label": "Contrôle évacuation condensats",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Pente, écoulement, pompe si présente."
      },
      {
        "label": "Désinfection ou traitement",
        "type": "Consommable",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Produit ou prestation selon besoin."
      },
      {
        "label": "Compte rendu photo",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Photos avant/après et observations."
      },
      {
        "label": "Facture intervention",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Facture finale et suivi client."
      }
    ],
    "checkpoints": [
      "Compter le nombre d’unités.",
      "Prévoir l’accès au groupe extérieur.",
      "Photographier avant/après.",
      "Vérifier les condensats.",
      "Noter les recommandations futures."
    ],
    "chiffrBenefits": [
      "Crée un modèle d’entretien réutilisable.",
      "Relie photos, observations et facture.",
      "Permet de suivre relances et client.",
      "Évite un devis d’intervention trop vague."
    ],
    "blankPageRisks": [
      "Oublier le nombre d’unités.",
      "Ne pas préciser les contrôles.",
      "Ne pas documenter les photos.",
      "Facturer sans compte rendu lisible."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Logiciel devis frigoriste CVC",
        "href": "/logiciel-devis-frigoriste-cvc"
      },
      {
        "label": "Modèle devis clim monosplit",
        "href": "/modele-devis-clim-monosplit"
      },
      {
        "label": "Logiciel devis avec relance client",
        "href": "/logiciel-devis-avec-relance-client"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que mettre dans un devis entretien climatisation ?",
        "answer": "Déplacement, nettoyage, contrôles, condensats, désinfection éventuelle, compte rendu photo et facture."
      },
      {
        "question": "Faut-il détailler le nombre d’unités ?",
        "answer": "Oui, c’est important pour expliquer le temps et le prix."
      },
      {
        "question": "Peut-on ajouter un compte rendu photo ?",
        "answer": "Oui, les photos avant/après renforcent la confiance du client."
      },
      {
        "question": "Chiffr convient-il aux interventions d’entretien ?",
        "answer": "Oui. Chiffr peut servir pour les devis, interventions, factures et relances client."
      }
    ]
  },
  {
    "slug": "modele-devis-mise-en-service-pac-clim",
    "title": "Modèle devis mise en service PAC clim | Chiffr",
    "metaDescription": "Modèle devis mise en service PAC ou clim : contrôles, tirage au vide, essais, réglages, photos, compte rendu, signature et facture.",
    "h1": "Modèle de devis mise en service PAC ou clim : contrôles, essais et dossier client",
    "intro": "Une mise en service doit être présentée comme une vraie prestation : contrôles, essais, réglages, photos, explication client et compte rendu. Ce modèle aide à structurer un devis ou une intervention facturable.",
    "trade": "PAC / Climatisation",
    "useCase": "Mise en service PAC, clim ou équipement CVC",
    "heroChecks": [
      "Contrôles",
      "Essais",
      "Réglages",
      "Photos",
      "Compte rendu",
      "Facture"
    ],
    "forWho": [
      "Installateur PAC",
      "Installateur clim",
      "Frigoriste",
      "Entreprise CVC",
      "Intervention de contrôle"
    ],
    "contains": [
      "Contrôle installation",
      "Vérification raccordements",
      "Tirage au vide si clim",
      "Essais",
      "Réglages",
      "Explication client",
      "Photos",
      "Facture"
    ],
    "lines": [
      {
        "label": "Déplacement et prise en charge",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Intervention de mise en service."
      },
      {
        "label": "Contrôle visuel installation",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Raccordements, supports, accès et sécurité."
      },
      {
        "label": "Vérification électrique",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Alimentation, protection et contrôle de base."
      },
      {
        "label": "Contrôle hydraulique ou frigorifique",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon PAC, clim ou équipement."
      },
      {
        "label": "Tirage au vide",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Si installation clim ou liaison frigorifique concernée."
      },
      {
        "label": "Essais fonctionnement",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Démarrage, contrôle, température, bruit et paramètres."
      },
      {
        "label": "Réglages et paramétrage",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Ajustements selon installation."
      },
      {
        "label": "Explication client",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Utilisation, précautions, entretien et recommandations."
      },
      {
        "label": "Compte rendu photo",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Photos machine, plaque, pose et résultat."
      },
      {
        "label": "Facture intervention",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Facture finale ou solde si lié à un devis."
      }
    ],
    "checkpoints": [
      "Vérifier le type d’équipement.",
      "Photographier la plaque machine.",
      "Noter les essais réalisés.",
      "Expliquer les réglages au client.",
      "Conserver le compte rendu dans le dossier."
    ],
    "chiffrBenefits": [
      "Structure une prestation courte mais importante.",
      "Ajoute photos et observations.",
      "Crée la facture liée à l’intervention.",
      "Garde l’historique client."
    ],
    "blankPageRisks": [
      "Facturer sans détail.",
      "Oublier les contrôles réalisés.",
      "Ne pas garder de preuve photo.",
      "Ne pas expliquer les réglages."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Logiciel devis climatisation",
        "href": "/logiciel-devis-climatisation"
      },
      {
        "label": "Modèle devis entretien climatisation",
        "href": "/modele-devis-entretien-climatisation"
      },
      {
        "label": "Logiciel devis avec photos chantier",
        "href": "/logiciel-devis-avec-photos-chantier"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que mettre dans un devis de mise en service PAC ou clim ?",
        "answer": "Contrôles, essais, réglages, photos, explication client, compte rendu et facture."
      },
      {
        "question": "La mise en service peut-elle être facturée seule ?",
        "answer": "Oui, selon l’organisation de l’artisan et le contexte de l’intervention."
      },
      {
        "question": "Pourquoi prendre des photos ?",
        "answer": "Les photos documentent l’équipement, la plaque, les raccordements et l’état final."
      },
      {
        "question": "Chiffr garde-t-il l’historique client ?",
        "answer": "Oui. Les devis, photos, factures et relances sont liés au client."
      }
    ]
  },
  {
    "slug": "modele-devis-desembouage-chauffage",
    "title": "Modèle devis désembouage chauffage | Chiffr",
    "metaDescription": "Modèle devis désembouage chauffage : diagnostic, rinçage, traitement réseau, radiateurs, inhibiteur, photos, facture et suivi client.",
    "h1": "Modèle de devis désembouage chauffage : diagnostic, traitement et suivi",
    "intro": "Un devis de désembouage doit expliquer le diagnostic, le rinçage, le traitement, les produits et les contrôles réalisés. Ce modèle aide le chauffagiste à rendre la prestation compréhensible pour le client.",
    "trade": "Chauffage",
    "useCase": "Désembouage ou traitement d’un réseau de chauffage",
    "heroChecks": [
      "Diagnostic",
      "Rinçage",
      "Traitement",
      "Radiateurs",
      "Photos",
      "Facture"
    ],
    "forWho": [
      "Chauffagiste",
      "Plombier-chauffagiste",
      "Installateur PAC",
      "Entretien réseau chauffage",
      "Rénovation énergétique"
    ],
    "contains": [
      "Diagnostic réseau",
      "Nombre de radiateurs",
      "Rinçage",
      "Produit désembouant",
      "Inhibiteur",
      "Contrôle",
      "Photos",
      "Facture"
    ],
    "lines": [
      {
        "label": "Diagnostic réseau chauffage",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "État réseau, symptômes, photos et relevé."
      },
      {
        "label": "Protection zone intervention",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Préparation, accès et protection."
      },
      {
        "label": "Rinçage réseau chauffage",
        "type": "Main-d’œuvre",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Selon nombre de radiateurs ou circuits."
      },
      {
        "label": "Traitement désembouant",
        "type": "Consommable",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Produit et dosage à adapter."
      },
      {
        "label": "Nettoyage radiateurs",
        "type": "Main-d’œuvre",
        "unit": "Pièce",
        "quantity": "À définir",
        "priceMode": "Prix à renseigner",
        "note": "Quantité selon installation."
      },
      {
        "label": "Rinçage final",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Évacuation boues et contrôle de l’eau."
      },
      {
        "label": "Inhibiteur ou traitement de protection",
        "type": "Consommable",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Protection du réseau après intervention."
      },
      {
        "label": "Remise en service et purge",
        "type": "Service",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Remplissage, purge, essais et contrôle."
      },
      {
        "label": "Photos et compte rendu",
        "type": "Dossier",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Avant/après, eau, équipement et observations."
      },
      {
        "label": "Facture intervention",
        "type": "Administratif",
        "unit": "Forfait",
        "quantity": "1",
        "priceMode": "Prix à renseigner",
        "note": "Facture finale et recommandations client."
      }
    ],
    "checkpoints": [
      "Compter radiateurs ou circuits.",
      "Photographier l’état initial.",
      "Expliquer le produit utilisé.",
      "Prévoir purge et remise en service.",
      "Noter les recommandations après intervention."
    ],
    "chiffrBenefits": [
      "Transforme une prestation technique en devis lisible.",
      "Garde photos et compte rendu.",
      "Permet de relier intervention et facture.",
      "Aide à relancer pour travaux complémentaires."
    ],
    "blankPageRisks": [
      "Ne pas expliquer la prestation.",
      "Oublier les produits.",
      "Sous-estimer le nombre de radiateurs.",
      "Facturer sans compte rendu."
    ],
    "relatedPages": [
      {
        "label": "Logiciel devis chauffagiste",
        "href": "/logiciel-devis-chauffagiste"
      },
      {
        "label": "Logiciel devis pompe à chaleur",
        "href": "/logiciel-devis-pompe-a-chaleur"
      },
      {
        "label": "Logiciel devis avec photos chantier",
        "href": "/logiciel-devis-avec-photos-chantier"
      },
      {
        "label": "Facture solde chantier",
        "href": "/facture-solde-chantier"
      },
      {
        "label": "Voir les tarifs Chiffr",
        "href": "/tarifs"
      },
      {
        "label": "Comparer les alternatives logiciels devis",
        "href": "/alternatives-logiciels-devis-batiment"
      },
      {
        "label": "Demander un accès",
        "href": "/contact"
      }
    ],
    "faqs": [
      {
        "question": "Que mettre dans un devis de désembouage ?",
        "answer": "Diagnostic, rinçage, traitement, produit, nombre de radiateurs, remise en service, photos et facture."
      },
      {
        "question": "Faut-il compter les radiateurs ?",
        "answer": "Oui, le nombre de radiateurs ou circuits peut influencer le temps et la méthode."
      },
      {
        "question": "Peut-on ajouter un compte rendu photo ?",
        "answer": "Oui, c’est utile pour montrer l’état du réseau et rassurer le client."
      },
      {
        "question": "Chiffr convient-il aux chauffagistes ?",
        "answer": "Oui. Chiffr aide les chauffagistes à préparer devis, photos, factures et relances."
      }
    ]
  }
];
