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
    "slug": "facturation-electronique-2026-artisan",
    "title": "Facturation électronique 2026 : ce que l’artisan doit préparer | Chiffr",
    "metaDescription": "Facturation électronique obligatoire 2026-2027 : réception, émission, Factur-X, plateforme PDP, e-reporting. Le guide concret pour les artisans énergie.",
    "h1": "Facturation électronique 2026-2027 : ce que l’artisan énergie doit préparer",
    "eyebrow": "Guide réforme 2026",
    "intro": "La facturation électronique entre entreprises (B2B) devient obligatoire en France. Concrètement : vos factures devront passer par une plateforme agréée, dans un format structuré comme Factur-X. Inutile de paniquer — mais autant structurer vos devis, vos factures et vos données client dès aujourd’hui pour aborder la transition sans précipitation.",
    "searchIntent": "L’artisan veut comprendre la réforme de la facturation électronique 2026-2027 et savoir concrètement quoi préparer pour son activité.",
    "problemTitle": "Le risque : découvrir la réforme au dernier moment",
    "problemText": "La réforme touche toutes les entreprises assujetties à la TVA, micro-entreprises comprises. La facture PDF envoyée par e-mail ne suffira plus en B2B : il faudra émettre et recevoir via une plateforme de dématérialisation, dans un format normé. Les artisans dont les factures sont mal structurées (mentions manquantes, numérotation cassée, données client incomplètes) auront le plus à rattraper.",
    "stepsTitle": "Les étapes pour se préparer sereinement",
    "steps": [
      {
        "title": "Comprendre le calendrier",
        "text": "Réception des factures électroniques : toutes les entreprises dès septembre 2026. Émission : grandes entreprises et ETI dès septembre 2026, PME et TPE/micro dès septembre 2027. Le calendrier a déjà été reporté — vérifiez toujours les dates officielles à jour."
      },
      {
        "title": "Mettre vos mentions à jour",
        "text": "SIREN/SIRET, adresse, numéro de TVA, mentions obligatoires du devis et de la facture, numérotation continue : ce sont elles qui coincent au passage à l’électronique."
      },
      {
        "title": "Structurer vos données client",
        "text": "Chaque client professionnel aura besoin d’informations complètes et propres (SIREN, adresse) pour que la facture soit acceptée par la plateforme."
      },
      {
        "title": "Anticiper la plateforme (PDP)",
        "text": "Les factures passeront par une Plateforme de Dématérialisation Partenaire immatriculée. Pas besoin de la choisir tout de suite, mais préparez des factures déjà conformes."
      },
      {
        "title": "Adopter le bon format",
        "text": "Le format hybride Factur-X (PDF lisible + données structurées) est le plus simple pour les TPE. Un outil qui le génère vous évite de tout refaire au dernier moment."
      }
    ],
    "checklistTitle": "Checklist : votre facturation est-elle prête pour 2026 ?",
    "checklist": [
      "Vos factures portent toutes les mentions obligatoires (SIREN, TVA, adresse, dates).",
      "Votre numérotation est continue, sans rupture ni doublon.",
      "Vos données client sont complètes (SIREN et adresse pour les professionnels).",
      "Vous reliez devis, acompte, solde et facture finale au même dossier.",
      "Vous savez générer une facture dans un format structuré (type Factur-X).",
      "Vous suivez vos paiements : le e-reporting concernera aussi les encaissements."
    ],
    "commonMistakesTitle": "Les erreurs à éviter",
    "commonMistakes": [
      "Attendre 2027 pour s’y mettre alors que la réception est obligatoire avant.",
      "Garder une numérotation de factures bricolée (une rupture = non-conformité).",
      "Des données client incomplètes qui feront rejeter la facture.",
      "Croire que la facture PDF par e-mail suffira en B2B (ce ne sera plus le cas).",
      "Changer d’outil au dernier moment, en pleine saison."
    ],
    "chiffrTitle": "Comment Chiffr vous prépare à la réforme",
    "chiffrText": "Chiffr ne remplace pas la plateforme agréée, mais il structure dès aujourd’hui ce qui compte : des factures aux mentions à jour, une numérotation continue, des données client propres, et le cycle devis → acompte → solde → facture finale relié au même dossier. Le jour où il faudra émettre en électronique, l’essentiel est déjà en ordre.",
    "chiffrBenefits": [
      "Factures aux mentions légales à jour.",
      "Numérotation de factures continue et automatique.",
      "Données client structurées (particulier / professionnel).",
      "Acompte, solde et facture finale reliés au dossier client.",
      "PDF premium aujourd’hui, pensé pour évoluer vers la facture électronique."
    ],
    "relatedLinks": [
      { "label": "Factur-X : c’est quoi ?", "href": "/factur-x-c-est-quoi" },
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" },
      { "label": "Mentions obligatoires sur un devis", "href": "/mentions-obligatoires-devis-artisan" }
    ],
    "faqs": [
      {
        "question": "La facturation électronique concerne-t-elle les micro-entreprises ?",
        "answer": "Oui. La réforme s’applique à toutes les entreprises assujetties à la TVA en France, micro-entreprises comprises, selon un calendrier par taille d’entreprise."
      },
      {
        "question": "À partir de quand est-ce obligatoire ?",
        "answer": "La réception de factures électroniques devient obligatoire pour toutes les entreprises dès septembre 2026. L’émission s’échelonne : grandes entreprises et ETI dès septembre 2026, PME et TPE/micro dès septembre 2027. Le calendrier ayant déjà été reporté, vérifiez les dates officielles à jour."
      },
      {
        "question": "Une facture PDF envoyée par e-mail suffira-t-elle ?",
        "answer": "Non, plus en B2B : la facture devra passer par une plateforme de dématérialisation partenaire (PDP), dans un format structuré comme Factur-X."
      },
      {
        "question": "Qu’est-ce que Factur-X ?",
        "answer": "Un format hybride : un PDF lisible par l’humain qui embarque les données de la facture en XML, lisibles par les plateformes. C’est le format le plus simple pour les TPE."
      },
      {
        "question": "Chiffr fait-il la facturation électronique ?",
        "answer": "Chiffr structure dès aujourd’hui vos factures, votre numérotation et vos données client pour être prêt. La transmission réglementaire passera par une plateforme agréée."
      }
    ]
  },
  {
    "slug": "factur-x-c-est-quoi",
    "title": "Factur-X : c’est quoi et pourquoi ça concerne l’artisan | Chiffr",
    "metaDescription": "Factur-X expliqué simplement : le format hybride PDF + données de la facture électronique 2026. Ce que l’artisan doit savoir et préparer.",
    "h1": "Factur-X : le format de facture électronique expliqué simplement",
    "eyebrow": "Guide réforme 2026",
    "intro": "Factur-X est le format au cœur de la facturation électronique en France. En clair : un PDF que vous lisez normalement, qui embarque en plus les données de la facture sous forme structurée (XML), lisible par les plateformes. C’est le format le plus simple pour les TPE et les artisans.",
    "searchIntent": "L’artisan veut comprendre ce qu’est Factur-X et si son outil de facturation doit le gérer.",
    "problemTitle": "Le risque : confondre PDF simple et facture électronique",
    "problemText": "Un PDF classique envoyé par e-mail n’est pas une facture électronique au sens de la réforme. La facture électronique doit contenir des données structurées, transmises via une plateforme. Factur-X répond exactement à ça : il garde l’aspect visuel d’un PDF tout en ajoutant la couche de données obligatoire.",
    "stepsTitle": "Comprendre Factur-X en 5 points",
    "steps": [
      { "title": "Un format hybride", "text": "Factur-X = un PDF lisible (l’image de la facture) + un fichier XML embarqué contenant les données : montants, TVA, client, SIREN…" },
      { "title": "Ce que ça change pour vous", "text": "Vous continuez à voir une facture normale ; la machine, elle, lit les données. Pas besoin d’être informaticien." },
      { "title": "Les autres formats", "text": "À côté de Factur-X existent UBL et CII (purement XML). Factur-X reste le plus accessible car il reste lisible par l’humain." },
      { "title": "La norme européenne", "text": "Factur-X respecte la norme EN 16931, socle commun de la facture électronique en Europe." },
      { "title": "Ce qu’il vous faut", "text": "Un outil qui génère déjà des factures bien structurées aujourd’hui sera prêt à produire du Factur-X demain." }
    ],
    "checklistTitle": "Êtes-vous prêt pour Factur-X ?",
    "checklist": [
      "Vos factures portent toutes les mentions obligatoires.",
      "Vos données client sont complètes (SIREN, adresse pour les pros).",
      "Votre numérotation est continue.",
      "La TVA est ventilée par taux.",
      "Votre outil de facturation peut évoluer vers le format structuré."
    ],
    "commonMistakesTitle": "Les erreurs à éviter",
    "commonMistakes": [
      "Croire qu’un PDF envoyé par e-mail est une facture électronique.",
      "Négliger les mentions obligatoires (elles font partie des données).",
      "Garder des données client incomplètes.",
      "Attendre le dernier moment pour s’y intéresser."
    ],
    "chiffrTitle": "Chiffr vous met sur de bons rails",
    "chiffrText": "Chiffr produit aujourd’hui des PDF de devis et de factures déjà nets et structurés : mentions à jour, numérotation continue, TVA par ligne. C’est exactement la base dont Factur-X a besoin pour la suite.",
    "chiffrBenefits": [
      "PDF de facture structuré et net.",
      "Mentions légales à jour.",
      "Numérotation continue automatique.",
      "TVA ventilée par taux.",
      "Pensé pour évoluer vers la facture électronique."
    ],
    "relatedLinks": [
      { "label": "Facturation électronique 2026 : le guide", "href": "/facturation-electronique-2026-artisan" },
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" },
      { "label": "Voir les tarifs Chiffr", "href": "/tarifs" }
    ],
    "faqs": [
      { "question": "Factur-X est-il obligatoire ?", "answer": "Factur-X est l’un des formats admis pour la facture électronique. C’est le plus simple pour les TPE, mais d’autres formats structurés (UBL, CII) sont également acceptés." },
      { "question": "Un PDF par e-mail suffit-il ?", "answer": "Non : un PDF simple n’embarque pas les données structurées exigées. Factur-X, lui, ajoute cette couche tout en restant un PDF lisible." },
      { "question": "Dois-je installer quelque chose ?", "answer": "Non. C’est votre outil de facturation qui doit savoir générer le format ; vous, vous éditez vos factures comme d’habitude." },
      { "question": "Chiffr génère-t-il du Factur-X ?", "answer": "Chiffr structure dès aujourd’hui vos factures (mentions, numérotation, TVA) pour être prêt. La transmission réglementaire passera par une plateforme agréée." }
    ]
  },
  {
    "slug": "mentions-obligatoires-facture-artisan",
    "title": "Mentions obligatoires sur une facture d’artisan (2026) | Chiffr",
    "metaDescription": "La liste des mentions obligatoires sur une facture d’artisan : identité, SIREN, TVA, numérotation, pénalités de retard, indemnité 40 €. B2B et B2C.",
    "h1": "Mentions obligatoires sur une facture : la liste pour l’artisan",
    "eyebrow": "Guide facturation",
    "intro": "Une facture incomplète, c’est un risque de litige, de rejet par le client professionnel et, demain, de non-conformité à la facturation électronique. Voici les mentions à faire figurer sur chaque facture d’artisan, sans jargon.",
    "searchIntent": "L’artisan veut la liste claire des mentions obligatoires à mettre sur ses factures.",
    "problemTitle": "Le risque : une facture rejetée ou contestée",
    "problemText": "Les mentions obligatoires ne sont pas du formalisme : elles conditionnent la validité de la facture, la déduction de TVA côté client, et bientôt l’acceptation par les plateformes de facturation électronique. Une numérotation cassée ou un SIREN manquant peut suffire à poser problème.",
    "stepsTitle": "Les blocs de mentions à ne pas oublier",
    "steps": [
      { "title": "Votre identité d’entreprise", "text": "Dénomination, adresse, SIREN/SIRET, forme juridique et capital (sociétés), n° RCS ou RM (artisans), et n° de TVA intracommunautaire si vous y êtes assujetti." },
      { "title": "L’identité du client", "text": "Nom et adresse ; pour un client professionnel, son SIREN aide à la conformité électronique à venir." },
      { "title": "Numéro et dates", "text": "Numéro de facture unique et séquentiel (sans rupture), date d’émission et date de la vente ou de la prestation." },
      { "title": "Le détail et les montants", "text": "Désignation, quantité, prix unitaire HT, taux de TVA par ligne, réductions éventuelles, total HT, montant de TVA par taux et total TTC." },
      { "title": "Le règlement", "text": "Conditions et date de règlement, taux des pénalités de retard, indemnité forfaitaire de 40 € pour frais de recouvrement (B2B), et mention d’escompte le cas échéant." }
    ],
    "checklistTitle": "Checklist mentions facture",
    "checklist": [
      "Identité complète de l’entreprise (SIREN, forme, registre).",
      "Identité et adresse du client.",
      "Numéro de facture continu + date d’émission + date de prestation.",
      "Prix unitaire HT, TVA par taux, total HT, TVA, total TTC.",
      "Conditions de règlement + pénalités de retard + indemnité 40 € (B2B).",
      "Mention spécifique si TVA réduite, franchise (art. 293 B) ou autoliquidation."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Une numérotation non continue (trou ou doublon dans la série).",
      "Oublier la date de la prestation (différente de la date d’émission).",
      "Ne pas distinguer les taux de TVA par ligne.",
      "Oublier les pénalités de retard et l’indemnité de 40 € en B2B.",
      "Forme juridique, capital ou RCS/RM manquants pour une société."
    ],
    "chiffrTitle": "Chiffr met les mentions à jour pour vous",
    "chiffrText": "Chiffr prépare des factures avec les mentions en place et une numérotation continue automatique. Vous gardez vos prix et votre façon de travailler ; l’outil veille à ce qu’il ne manque rien.",
    "chiffrBenefits": [
      "Mentions légales pré-remplies et à jour.",
      "Numérotation de factures continue et automatique.",
      "TVA ventilée par taux.",
      "Pénalités de retard et indemnité 40 € intégrées.",
      "Cohérent avec la facture électronique à venir."
    ],
    "relatedLinks": [
      { "label": "Mentions obligatoires sur un devis", "href": "/mentions-obligatoires-devis-artisan" },
      { "label": "Facturation électronique 2026 : le guide", "href": "/facturation-electronique-2026-artisan" },
      { "label": "Facture d’acompte artisan énergie", "href": "/facture-acompte-artisan-energie" }
    ],
    "faqs": [
      { "question": "Les mentions changent-elles entre un client particulier et un pro ?", "answer": "L’essentiel est commun. En B2B s’ajoutent notamment les pénalités de retard et l’indemnité forfaitaire de 40 € pour frais de recouvrement. Le SIREN du client devient aussi utile pour la facture électronique." },
      { "question": "Quel risque si une mention manque ?", "answer": "Une facture incomplète peut être contestée par le client, poser problème pour la déduction de TVA, et demain être refusée par les plateformes de facturation électronique." },
      { "question": "La numérotation doit-elle être continue ?", "answer": "Oui : la séquence doit être chronologique et continue, sans rupture ni doublon. C’est l’une des erreurs les plus fréquentes." },
      { "question": "Chiffr gère-t-il tout ça ?", "answer": "Oui : Chiffr pré-remplit les mentions et gère la numérotation continue automatiquement, pour des factures propres dès le départ." }
    ]
  },
  {
    "slug": "mentions-obligatoires-devis-artisan",
    "title": "Mentions obligatoires sur un devis d’artisan | Chiffr",
    "metaDescription": "Les mentions obligatoires sur un devis d’artisan : identité, durée de validité, détail HT/TTC, TVA, conditions de paiement. La liste claire.",
    "h1": "Mentions obligatoires sur un devis : ce qu’il doit contenir",
    "eyebrow": "Guide devis",
    "intro": "Un devis clair protège l’artisan autant que le client : il fixe ce qui est prévu, à quel prix, et pour combien de temps. Voici les mentions à faire figurer sur chaque devis, surtout sur des chantiers énergie où les postes techniques sont nombreux.",
    "searchIntent": "L’artisan veut savoir quelles mentions sont obligatoires ou recommandées sur un devis.",
    "problemTitle": "Le risque : un devis flou qui vire au litige",
    "problemText": "Un devis incomplet laisse place à l’interprétation : le client conteste un poste, négocie après coup, ou compare seulement un montant final. Des mentions claires (détail, validité, conditions) évitent les malentendus et crédibilisent l’entreprise.",
    "stepsTitle": "Ce que doit contenir un devis",
    "steps": [
      { "title": "L’identité des parties", "text": "Coordonnées complètes de l’entreprise (dénomination, adresse, SIREN/SIRET, forme et registre selon le cas) et identité du client." },
      { "title": "La date et la validité", "text": "Date d’établissement du devis et durée de validité (au-delà, les prix peuvent évoluer)." },
      { "title": "Le détail des prestations", "text": "Désignation précise (matériel, pose, options), quantités, prix unitaire HT et taux de TVA par ligne." },
      { "title": "Les totaux", "text": "Total HT, montant de TVA et total TTC, ainsi que les éventuelles réductions." },
      { "title": "Les conditions", "text": "Modalités et conditions de paiement (acompte, solde), délais d’exécution, et le caractère gratuit ou payant du devis." }
    ],
    "checklistTitle": "Checklist mentions devis",
    "checklist": [
      "Coordonnées entreprise + client complètes.",
      "Date du devis et durée de validité.",
      "Désignation détaillée, quantités, prix unitaire HT, TVA par ligne.",
      "Total HT, TVA, total TTC.",
      "Conditions de paiement (acompte/solde) et délai d’exécution.",
      "Caractère gratuit/payant du devis ; frais de déplacement le cas échéant."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Un montant global sans détail des postes.",
      "Pas de durée de validité (le client revient des mois après au même prix).",
      "Oublier la TVA applicable par ligne (5,5 %, 10 %, 20 %).",
      "Conditions d’acompte et de solde non précisées.",
      "Postes techniques invisibles oubliés (hydraulique, électricité, mise en service)."
    ],
    "chiffrTitle": "Chiffr structure le devis pour vous",
    "chiffrText": "Chiffr part d’un modèle métier avec les lignes typiques déjà là, signale les prix à compléter, et met les mentions et la TVA au bon endroit. Vous adaptez, le client comprend ce qu’il achète.",
    "chiffrBenefits": [
      "Modèles métier avec lignes et mentions prêtes.",
      "TVA par ligne au bon taux.",
      "Validité, acompte et conditions cadrés.",
      "Détail clair des postes (matériel, pose, options).",
      "Du devis à la signature, à l’acompte et à la facture."
    ],
    "relatedLinks": [
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" },
      { "label": "Facturation électronique 2026 : le guide", "href": "/facturation-electronique-2026-artisan" },
      { "label": "Voir les modèles de devis", "href": "/modeles-devis" }
    ],
    "faqs": [
      { "question": "Un devis est-il obligatoire ?", "answer": "Il est obligatoire au-delà de certains montants ou pour certaines prestations, et fortement recommandé partout : il protège l’artisan comme le client en fixant ce qui est prévu." },
      { "question": "Doit-on indiquer une durée de validité ?", "answer": "Oui, c’est essentiel : elle évite qu’un client revienne longtemps après en exigeant le prix initial, alors que le matériel a pu augmenter." },
      { "question": "Faut-il détailler la TVA ?", "answer": "Oui, le taux de TVA s’applique par ligne (5,5 %, 10 % ou 20 % selon la nature des travaux). Un devis énergie peut mélanger plusieurs taux." },
      { "question": "Chiffr met-il les bonnes mentions ?", "answer": "Oui : les modèles Chiffr intègrent les mentions et la TVA par ligne, et signalent les prix à compléter avant l’envoi." }
    ]
  },
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
        "label": "Essayer gratuitement",
        "href": "https://chiffr.web.app"
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
  },
  {
    "slug": "comment-faire-un-devis-chauffage",
    "title": "Comment faire un devis chauffage (chaudière, radiateurs) | Chiffr",
    "metaDescription": "Guide concret pour faire un devis chauffage : dépose, fourniture, raccordements, désembouage, mise en service, acompte et facturation.",
    "h1": "Comment faire un devis chauffage clair et complet ?",
    "eyebrow": "Guide devis chauffage",
    "intro": "Un devis chauffage doit expliquer le chantier, pas seulement afficher un prix : type de générateur, dépose de l’existant, raccordements, traitement du réseau, mise en service. Plus la structure est claire, moins le client négocie à l’aveugle.",
    "searchIntent": "Le chauffagiste cherche une méthode pour préparer un devis chauffage professionnel sans oublier les postes techniques.",
    "problemTitle": "Le risque : un devis chauffage trop global",
    "problemText": "Remplacement de chaudière, radiateurs, ballon, désembouage : plusieurs postes sont invisibles pour le client. S’ils ne sont pas détaillés, il ne voit qu’un montant final et compare sur le prix.",
    "stepsTitle": "Les étapes du devis chauffage",
    "steps": [
      { "title": "Relever l’existant", "text": "Photographiez l’ancien générateur, le réseau, l’évacuation, le local technique et les contraintes d’accès." },
      { "title": "Décrire le projet", "text": "Précisez le type de générateur (gaz à condensation, PAC, bois), maison individuelle ou appartement, réseau radiateurs ou plancher." },
      { "title": "Séparer matériel et pose", "text": "Distinguez générateur, accessoires, raccordements, main-d’œuvre et mise en service." },
      { "title": "Ne pas oublier les postes techniques", "text": "Dépose et évacuation de l’ancien matériel, désembouage, pot à boues, régulation, raccordement gaz/ventouse." },
      { "title": "Prévoir paiement et suite", "text": "Acompte, solde, validité du devis, signature, facture d’acompte et facture finale." }
    ],
    "checklistTitle": "Checklist avant d’envoyer un devis chauffage",
    "checklist": [
      "Coordonnées client et adresse chantier vérifiées.",
      "Type de générateur et puissance précisés.",
      "Dépose et évacuation de l’ancien matériel chiffrées.",
      "TVA au bon taux (5,5 % ou 10 % selon les travaux).",
      "Conditions d’acompte et de solde indiquées."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Un prix global sans détail des postes.",
      "Oublier la dépose/évacuation de l’ancien matériel.",
      "Ne pas préciser le désembouage du réseau.",
      "TVA appliquée sans tenir compte de la nature des travaux."
    ],
    "chiffrTitle": "Comment Chiffr aide sur le devis chauffage",
    "chiffrText": "Chiffr part d’un modèle chauffage avec les lignes typiques déjà là, signale les prix à compléter et met les mentions au bon endroit. Vous adaptez selon le chantier.",
    "chiffrBenefits": [
      "Modèle chauffage avec lignes prêtes.",
      "TVA par ligne au bon taux.",
      "Photos chantier au dossier.",
      "Acompte, solde et facture reliés au dossier."
    ],
    "relatedLinks": [
      { "label": "Logiciel de devis chauffagiste", "href": "/logiciel-devis-chauffagiste" },
      { "label": "Modèle de devis désembouage chauffage", "href": "/modele-devis-desembouage-chauffage" },
      { "label": "Mentions obligatoires sur un devis", "href": "/mentions-obligatoires-devis-artisan" }
    ],
    "faqs": [
      { "question": "Quel taux de TVA pour un devis chauffage ?", "answer": "Selon la nature des travaux et le logement, le taux peut être 5,5 % (rénovation énergétique), 10 % (amélioration) ou 20 %. Le devis doit l’indiquer par ligne." },
      { "question": "Faut-il chiffrer la dépose de l’ancienne chaudière ?", "answer": "Oui, c’est un poste réel (vidange, déconnexion, évacuation, recyclage) à faire apparaître pour éviter les malentendus." },
      { "question": "Chiffr propose-t-il un modèle chauffage ?", "answer": "Oui : un modèle métier avec les lignes typiques à adapter à votre chantier." }
    ]
  },
  {
    "slug": "comment-faire-un-devis-frigoriste",
    "title": "Comment faire un devis frigoriste / CVC | Chiffr",
    "metaDescription": "Guide pour faire un devis frigoriste ou CVC : intervention, contrôle d’étanchéité, appoint fluide, maintenance, mentions B2B et facturation.",
    "h1": "Comment faire un devis frigoriste ou CVC carré ?",
    "eyebrow": "Guide devis CVC",
    "intro": "Un devis frigoriste/CVC parle technique : froid, ventilation, maintenance, dépannage, contrôle d’étanchéité. Souvent en B2B, il doit être net sur les mentions, les délais et ce qui est facturé.",
    "searchIntent": "Le frigoriste/CVC cherche à structurer ses devis d’intervention et de maintenance.",
    "problemTitle": "Le risque : un devis technique trop flou pour un client pro",
    "problemText": "Sur du CVC, le client (souvent un professionnel) attend des postes clairs : déplacement, main-d’œuvre, fluide, contrôle, rapport. Un devis vague complique la validation et le paiement à 30 jours.",
    "stepsTitle": "Les étapes du devis CVC",
    "steps": [
      { "title": "Qualifier l’intervention", "text": "Froid commercial, climatisation, ventilation, maintenance ou dépannage : précisez le contexte et l’équipement." },
      { "title": "Détailler les postes", "text": "Déplacement, main-d’œuvre, contrôle d’étanchéité, appoint de fluide, pièces, nettoyage, rapport d’intervention." },
      { "title": "Soigner les mentions B2B", "text": "Client professionnel : SIREN, conditions de paiement à 30 jours, pénalités de retard, indemnité de 40 €." },
      { "title": "Tracer les fluides", "text": "Prévoyez le bordereau de suivi des fluides frigorigènes à remettre à l’issue de l’intervention." },
      { "title": "Préparer la suite", "text": "Maintenance récurrente : un modèle dupliqué garde l’historique et accélère les devis suivants." }
    ],
    "checklistTitle": "Checklist avant d’envoyer un devis CVC",
    "checklist": [
      "Type d’intervention et équipement précisés.",
      "Déplacement et main-d’œuvre chiffrés.",
      "Appoint fluide et contrôle d’étanchéité détaillés.",
      "Mentions B2B (paiement 30 j, pénalités, indemnité 40 €).",
      "Rapport d’intervention prévu."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Oublier le déplacement et le rapport d’intervention.",
      "Mentions B2B incomplètes (un pro peut contester).",
      "Ne pas tracer les fluides frigorigènes.",
      "Refaire le devis de maintenance de zéro à chaque fois."
    ],
    "chiffrTitle": "Comment Chiffr aide les frigoristes / CVC",
    "chiffrText": "Chiffr structure les devis d’intervention et de maintenance, garde les mentions B2B à jour et permet de dupliquer un devis récurrent en gardant l’historique client.",
    "chiffrBenefits": [
      "Modèle CVC avec lignes techniques.",
      "Mentions B2B et délais de paiement.",
      "Duplication des devis de maintenance.",
      "Suivi de ce qui est facturé et encaissé."
    ],
    "relatedLinks": [
      { "label": "Logiciel de devis frigoriste / CVC", "href": "/logiciel-devis-frigoriste-cvc" },
      { "label": "Modèle de devis entretien climatisation", "href": "/modele-devis-entretien-climatisation" },
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" }
    ],
    "faqs": [
      { "question": "Quelles mentions pour un client professionnel ?", "answer": "En B2B, ajoutez les conditions de paiement (souvent 30 jours), le taux de pénalités de retard et l’indemnité forfaitaire de 40 € pour frais de recouvrement." },
      { "question": "Faut-il un bordereau de suivi des fluides ?", "answer": "Oui, pour les interventions sur fluides frigorigènes : il est remis à l’issue de l’intervention et fait partie du sérieux du dossier." },
      { "question": "Peut-on réutiliser un devis de maintenance ?", "answer": "Oui : dans Chiffr, vous dupliquez un devis récurrent et gardez l’historique du client." }
    ]
  },
  {
    "slug": "comment-faire-un-devis-photovoltaique",
    "title": "Comment faire un devis photovoltaïque | Chiffr",
    "metaDescription": "Guide pour faire un devis photovoltaïque : panneaux, onduleur, fixations, pose, démarches Enedis et Consuel, acompte et facturation.",
    "h1": "Comment faire un devis photovoltaïque clair et rassurant ?",
    "eyebrow": "Guide devis solaire",
    "intro": "Un devis photovoltaïque rassure quand il détaille le projet : matériel, pose, raccordement et démarches administratives. Le client doit comprendre ce qu’il paie, du toit jusqu’à la mise en service.",
    "searchIntent": "L’installateur photovoltaïque cherche à structurer un devis solaire complet.",
    "problemTitle": "Le risque : un devis solaire centré sur le seul prix au kWc",
    "problemText": "Au-delà des panneaux, il y a l’onduleur, les fixations, le câblage, le coffret, et surtout les démarches (Enedis, Consuel). Si ces postes n’apparaissent pas, le client compare uniquement un prix global.",
    "stepsTitle": "Les étapes du devis photovoltaïque",
    "steps": [
      { "title": "Évaluer la toiture", "text": "Photos, orientation, inclinaison, accès, type de couverture et contraintes éventuelles." },
      { "title": "Détailler le matériel", "text": "Panneaux (Wc), onduleur ou micro-onduleurs, système de fixation, coffrets AC/DC, câblage." },
      { "title": "Chiffrer la pose et le raccordement", "text": "Pose en toiture, câblage, sécurisation, raccordement et coffret." },
      { "title": "Inclure les démarches", "text": "Déclaration préalable, raccordement Enedis, passage du Consuel : à mentionner même si accompagnées." },
      { "title": "Préparer paiement et suite", "text": "Acompte, solde, validité, signature, facture d’acompte et facture finale." }
    ],
    "checklistTitle": "Checklist avant d’envoyer un devis photovoltaïque",
    "checklist": [
      "Toiture évaluée (photos, orientation, accès).",
      "Matériel détaillé (panneaux, onduleur, fixations).",
      "Pose et raccordement chiffrés.",
      "Démarches Enedis / Consuel mentionnées.",
      "Conditions d’acompte et de solde."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Un prix au kWc sans détail des postes.",
      "Oublier les démarches administratives.",
      "Ne pas distinguer matériel, pose et raccordement.",
      "Validité du devis non précisée (prix matériel volatil)."
    ],
    "chiffrTitle": "Comment Chiffr aide sur le devis solaire",
    "chiffrText": "Chiffr part d’un modèle photovoltaïque avec les lignes utiles, garde les photos toiture au dossier et relie le devis jusqu’à la facture.",
    "chiffrBenefits": [
      "Modèle photovoltaïque avec lignes prêtes.",
      "Photos toiture au dossier client.",
      "TVA par ligne au bon taux.",
      "Du devis à l’acompte et à la facture."
    ],
    "relatedLinks": [
      { "label": "Logiciel de devis photovoltaïque", "href": "/logiciel-devis-photovoltaique" },
      { "label": "Modèle de devis photovoltaïque autoconsommation", "href": "/modele-devis-photovoltaique-autoconsommation" },
      { "label": "Mentions obligatoires sur un devis", "href": "/mentions-obligatoires-devis-artisan" }
    ],
    "faqs": [
      { "question": "Faut-il chiffrer les démarches Enedis / Consuel ?", "answer": "Oui, au moins les mentionner : raccordement Enedis et passage du Consuel font partie du projet, même si vous les accompagnez." },
      { "question": "Quelle TVA sur un devis photovoltaïque ?", "answer": "Le taux dépend de la puissance et de la nature de l’installation ; il doit figurer par ligne sur le devis." },
      { "question": "Chiffr a-t-il un modèle solaire ?", "answer": "Oui : un modèle d’autoconsommation avec les lignes typiques à adapter." }
    ]
  },
  {
    "slug": "comment-faire-un-devis-chauffe-eau-thermodynamique",
    "title": "Comment faire un devis chauffe-eau thermodynamique | Chiffr",
    "metaDescription": "Guide pour faire un devis chauffe-eau thermodynamique : dépose, ballon, raccordements eau et électricité, mise en service, acompte et facture.",
    "h1": "Comment faire un devis chauffe-eau thermodynamique complet ?",
    "eyebrow": "Guide devis CET",
    "intro": "Un devis chauffe-eau thermodynamique (CET) doit montrer le remplacement complet : dépose de l’ancien chauffe-eau, fourniture du ballon, raccordements eau et électricité, mise en service. Propre et détaillé, il rassure le client.",
    "searchIntent": "L’artisan cherche à structurer un devis de chauffe-eau thermodynamique.",
    "problemTitle": "Le risque : un devis CET réduit au prix du ballon",
    "problemText": "Le ballon n’est qu’une partie : il y a la dépose de l’ancien équipement, les raccordements hydrauliques (groupe de sécurité), le raccordement électrique, parfois l’évacuation des condensats. Sans détail, le client ne voit qu’un prix.",
    "stepsTitle": "Les étapes du devis CET",
    "steps": [
      { "title": "Vérifier le local", "text": "Volume d’air suffisant, emplacement, évacuation des condensats, accès." },
      { "title": "Chiffrer la dépose", "text": "Dépose et évacuation de l’ancien chauffe-eau électrique." },
      { "title": "Détailler le matériel", "text": "Ballon thermodynamique (litrage, COP), groupe de sécurité, raccordements." },
      { "title": "Pose et mise en service", "text": "Raccordements eau et électricité, mise en eau, réglages, essais." },
      { "title": "Paiement et suite", "text": "Acompte, solde, signature, facture d’acompte et finale ; attestation TVA réduite si éligible." }
    ],
    "checklistTitle": "Checklist avant d’envoyer un devis CET",
    "checklist": [
      "Local d’implantation vérifié (volume, condensats).",
      "Dépose de l’ancien chauffe-eau chiffrée.",
      "Ballon et accessoires détaillés.",
      "Raccordements eau et électricité inclus.",
      "TVA réduite et attestation si le chantier y a droit."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Ne chiffrer que le ballon.",
      "Oublier la dépose et l’évacuation de l’ancien équipement.",
      "Négliger l’évacuation des condensats.",
      "Oublier l’attestation de TVA réduite quand elle s’applique."
    ],
    "chiffrTitle": "Comment Chiffr aide sur le devis CET",
    "chiffrText": "Chiffr propose un modèle CET avec les lignes prêtes et génère l’attestation de TVA réduite quand le chantier y a droit.",
    "chiffrBenefits": [
      "Modèle CET avec lignes prêtes.",
      "Attestation TVA réduite automatique si éligible.",
      "Photos chantier au dossier.",
      "Du devis à la facture, relié au dossier."
    ],
    "relatedLinks": [
      { "label": "Logiciel de devis chauffe-eau thermodynamique", "href": "/logiciel-devis-chauffe-eau-thermodynamique" },
      { "label": "Modèle de devis chauffe-eau thermodynamique", "href": "/modele-devis-chauffe-eau-thermodynamique" },
      { "label": "TVA 5,5 % en rénovation énergétique", "href": "/tva-5-5-renovation-energetique-devis" }
    ],
    "faqs": [
      { "question": "Le chauffe-eau thermodynamique ouvre-t-il droit à la TVA réduite ?", "answer": "Souvent oui en rénovation énergétique d’un logement de plus de deux ans, sous conditions ; le devis doit alors mentionner le taux et l’attestation associée." },
      { "question": "Faut-il un volume minimum dans le local ?", "answer": "Un CET sur air ambiant nécessite un local au volume suffisant ; c’est un point à vérifier avant le devis." },
      { "question": "Chiffr gère-t-il l’attestation TVA ?", "answer": "Oui : l’attestation de TVA réduite est générée automatiquement quand des lignes y ouvrent droit." }
    ]
  },
  {
    "slug": "tva-5-5-renovation-energetique-devis",
    "title": "TVA 5,5 % en rénovation énergétique : devis et conditions | Chiffr",
    "metaDescription": "TVA à 5,5 % pour la rénovation énergétique : quels travaux, quelles conditions, comment l’indiquer sur le devis et la facture, attestation client.",
    "h1": "TVA à 5,5 % en rénovation énergétique : ce qu’il faut sur le devis",
    "eyebrow": "Guide TVA & aides",
    "intro": "Certains travaux d’amélioration énergétique bénéficient d’une TVA réduite à 5,5 %. Encore faut-il que le devis et la facture l’appliquent correctement, et que le client signe l’attestation. Voici l’essentiel, sans jargon.",
    "searchIntent": "L’artisan veut savoir quand appliquer la TVA à 5,5 % et comment l’indiquer sur le devis.",
    "problemTitle": "Le risque : se tromper de taux de TVA",
    "problemText": "Appliquer 5,5 % à tort, ou l’oublier alors que le chantier y a droit, expose l’entreprise. Le taux dépend de la nature des travaux, du logement et d’une attestation signée par le client à conserver.",
    "stepsTitle": "Appliquer la TVA 5,5 % correctement",
    "steps": [
      { "title": "Vérifier l’éligibilité", "text": "Travaux d’amélioration de la performance énergétique, dans un logement achevé depuis plus de deux ans." },
      { "title": "Distinguer les taux", "text": "5,5 % (rénovation énergétique) vs 10 % (amélioration/entretien) vs 20 % : le bon taux dépend de la nature des travaux." },
      { "title": "Indiquer le taux par ligne", "text": "Sur le devis, le taux de TVA s’applique ligne par ligne ; un chantier peut mélanger plusieurs taux." },
      { "title": "Faire signer l’attestation", "text": "Le client signe une attestation (conditions d’application du taux réduit) que l’entreprise conserve." }
    ],
    "checklistTitle": "Checklist TVA réduite sur le devis",
    "checklist": [
      "Logement de plus de deux ans confirmé.",
      "Nature des travaux compatible avec 5,5 %.",
      "Taux indiqué par ligne sur le devis.",
      "Attestation client préparée et signée.",
      "Justificatifs conservés par l’entreprise."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Appliquer 5,5 % sans attestation signée.",
      "Mettre un taux unique alors que le chantier en mélange plusieurs.",
      "Oublier de conserver les justificatifs.",
      "Confondre 5,5 % et 10 %."
    ],
    "chiffrTitle": "Comment Chiffr aide sur la TVA réduite",
    "chiffrText": "Chiffr applique la TVA par ligne et génère l’attestation de TVA réduite quand des lignes y ouvrent droit, pour un devis et une facture cohérents.",
    "chiffrBenefits": [
      "TVA par ligne sur devis et facture.",
      "Attestation TVA réduite automatique.",
      "Plusieurs taux possibles sur un même chantier.",
      "Cohérence devis → facture."
    ],
    "relatedLinks": [
      { "label": "Attestation de TVA réduite : comment ça marche", "href": "/attestation-tva-reduite-travaux" },
      { "label": "Devis MaPrimeRénov’ et CEE", "href": "/devis-maprimerenov-cee-artisan" },
      { "label": "Mentions obligatoires sur un devis", "href": "/mentions-obligatoires-devis-artisan" }
    ],
    "faqs": [
      { "question": "Quels travaux ouvrent droit à 5,5 % ?", "answer": "Les travaux d’amélioration de la performance énergétique dans un logement de plus de deux ans, sous conditions. La nature exacte des travaux détermine le taux." },
      { "question": "L’attestation est-elle obligatoire ?", "answer": "Oui : pour appliquer la TVA réduite, le client doit signer une attestation que l’entreprise conserve à l’appui de sa comptabilité." },
      { "question": "Chiffr génère-t-il l’attestation ?", "answer": "Oui, automatiquement quand le devis contient des lignes à taux réduit." }
    ]
  },
  {
    "slug": "attestation-tva-reduite-travaux",
    "title": "Attestation de TVA réduite : comment ça marche | Chiffr",
    "metaDescription": "L’attestation de TVA réduite pour les travaux : à quoi elle sert, qui la signe, ce qu’elle contient et comment l’associer au devis.",
    "h1": "Attestation de TVA réduite : à quoi elle sert et comment la remplir",
    "eyebrow": "Guide TVA & aides",
    "intro": "Pour appliquer une TVA réduite (5,5 % ou 10 %) sur des travaux, le client doit signer une attestation que l’entreprise conserve. Voici à quoi elle sert et comment l’intégrer proprement à votre devis.",
    "searchIntent": "L’artisan veut comprendre l’attestation de TVA réduite et comment l’établir.",
    "problemTitle": "Le risque : appliquer un taux réduit sans justificatif",
    "problemText": "Sans attestation signée, l’application d’un taux réduit n’est pas justifiée. En cas de contrôle, c’est l’entreprise qui doit présenter le document.",
    "stepsTitle": "Établir l’attestation correctement",
    "steps": [
      { "title": "Identifier les parties", "text": "Coordonnées du client, de l’entreprise et adresse des travaux." },
      { "title": "Préciser la nature des travaux", "text": "Décrire les travaux concernés et le taux applicable (5,5 % ou 10 %)." },
      { "title": "Faire attester le client", "text": "Le client atteste que le logement est achevé depuis plus de deux ans et que les conditions sont remplies." },
      { "title": "Conserver le document", "text": "L’entreprise conserve l’attestation signée à l’appui de sa comptabilité." }
    ],
    "checklistTitle": "Checklist attestation TVA réduite",
    "checklist": [
      "Identité client, entreprise et adresse des travaux.",
      "Nature des travaux et taux applicable.",
      "Mention du logement de plus de deux ans.",
      "Signature du client.",
      "Copie conservée par l’entreprise."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Oublier de faire signer l’attestation.",
      "Ne pas la conserver.",
      "Taux indiqué incohérent avec le devis.",
      "Adresse des travaux absente."
    ],
    "chiffrTitle": "Comment Chiffr gère l’attestation",
    "chiffrText": "Quand le devis contient des lignes à taux réduit, Chiffr produit l’attestation de TVA réduite, pré-remplie avec les informations du dossier, prête à signer.",
    "chiffrBenefits": [
      "Attestation pré-remplie automatiquement.",
      "Cohérente avec le devis et la facture.",
      "Prête à signer par le client.",
      "Conservée avec le dossier."
    ],
    "relatedLinks": [
      { "label": "TVA 5,5 % en rénovation énergétique", "href": "/tva-5-5-renovation-energetique-devis" },
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" },
      { "label": "Voir les modèles de devis", "href": "/modeles-devis" }
    ],
    "faqs": [
      { "question": "Qui signe l’attestation ?", "answer": "Le client (le maître d’ouvrage). C’est lui qui atteste que les conditions du taux réduit sont remplies." },
      { "question": "Faut-il la conserver longtemps ?", "answer": "Oui : l’entreprise la conserve à l’appui de sa comptabilité, en cas de contrôle." },
      { "question": "Chiffr la génère-t-il ?", "answer": "Oui, automatiquement à partir des informations du devis quand un taux réduit s’applique." }
    ]
  },
  {
    "slug": "devis-maprimerenov-cee-artisan",
    "title": "Devis MaPrimeRénov’ et CEE : ce que l’artisan doit savoir | Chiffr",
    "metaDescription": "Devis compatible MaPrimeRénov’ et CEE : un devis clair facilite le dossier d’aides du client. Ce que l’artisan RGE doit faire figurer.",
    "h1": "Devis MaPrimeRénov’ et CEE : un devis qui aide le dossier d’aides",
    "eyebrow": "Guide TVA & aides",
    "intro": "Un devis clair et détaillé n’est pas qu’un argument commercial : il aide le client à monter son dossier MaPrimeRénov’ ou CEE. L’artisan ne gère pas l’aide à la place du client, mais un bon devis facilite tout.",
    "searchIntent": "L’artisan veut comprendre comment son devis s’articule avec MaPrimeRénov’ et les CEE.",
    "problemTitle": "Le risque : un devis qui bloque le dossier d’aides",
    "problemText": "Si le devis est flou, mal détaillé, ou ne précise pas le matériel et les performances, le dossier d’aides du client peut traîner. Un devis précis, par un artisan RGE, fluidifie la démarche.",
    "stepsTitle": "Un devis compatible avec les aides",
    "steps": [
      { "title": "Détailler le matériel", "text": "Marque, modèle et caractéristiques (ex. COP, classe) du matériel installé." },
      { "title": "Séparer fourniture et pose", "text": "Distinguez clairement matériel, main-d’œuvre et options." },
      { "title": "Mentionner la qualification", "text": "Le label RGE de l’entreprise, souvent requis pour les aides, doit apparaître." },
      { "title": "Rester clair sur les aides", "text": "Sans promettre un montant d’aide : l’artisan présente un devis net, le client monte son dossier." }
    ],
    "checklistTitle": "Checklist devis et aides",
    "checklist": [
      "Matériel détaillé (marque, modèle, performances).",
      "Fourniture et pose distinguées.",
      "Qualification RGE mentionnée si concernée.",
      "TVA réduite appliquée si éligible.",
      "Aucune promesse de montant d’aide non vérifiée."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Promettre un montant d’aide au client.",
      "Matériel insuffisamment décrit pour le dossier.",
      "Oublier la mention RGE quand elle est requise.",
      "Devis global sans séparer fourniture et pose."
    ],
    "chiffrTitle": "Comment Chiffr aide sur ces devis",
    "chiffrText": "Chiffr permet un devis détaillé (matériel, performances, pose) et clair, exactement ce qui facilite le dossier d’aides du client — sans que l’artisan ait à promettre un montant.",
    "chiffrBenefits": [
      "Devis détaillé matériel et pose.",
      "Lignes claires par poste.",
      "TVA réduite quand éligible.",
      "PDF net pour le dossier du client."
    ],
    "relatedLinks": [
      { "label": "TVA 5,5 % en rénovation énergétique", "href": "/tva-5-5-renovation-energetique-devis" },
      { "label": "Logiciel de devis pompe à chaleur", "href": "/logiciel-devis-pompe-a-chaleur" },
      { "label": "Voir les modèles de devis", "href": "/modeles-devis" }
    ],
    "faqs": [
      { "question": "L’artisan gère-t-il l’aide du client ?", "answer": "Non : l’artisan fournit un devis clair et détaillé ; c’est le client qui monte son dossier MaPrimeRénov’ ou CEE." },
      { "question": "Faut-il être RGE ?", "answer": "Pour de nombreuses aides, oui : la qualification RGE de l’entreprise est requise et doit figurer." },
      { "question": "Peut-on indiquer le montant de l’aide sur le devis ?", "answer": "Mieux vaut éviter de promettre un montant : il dépend de la situation du client. Le devis reste net sur le prix des travaux." }
    ]
  },
  {
    "slug": "difference-devis-facture-acompte-solde",
    "title": "Devis, facture d’acompte, de solde : quelle différence | Chiffr",
    "metaDescription": "Devis, facture d’acompte, facture de solde, facture finale : à quoi sert chaque document et dans quel ordre, pour un artisan énergie.",
    "h1": "Devis, acompte, solde, facture finale : qui sert à quoi ?",
    "eyebrow": "Guide facturation",
    "intro": "Beaucoup d’artisans mélangent devis, facture d’acompte, facture de solde et facture finale. Pourtant chaque document a un rôle précis dans le cycle d’un chantier. Voici l’ordre logique, expliqué simplement.",
    "searchIntent": "L’artisan veut comprendre la différence entre devis, acompte, solde et facture finale.",
    "problemTitle": "Le risque : un suivi de paiement bancal",
    "problemText": "Sans documents clairs, on ne sait plus ce qui est commandé, encaissé ou dû. Le client conteste, l’artisan oublie de facturer le solde, et la trésorerie en pâtit.",
    "stepsTitle": "Le cycle, document par document",
    "steps": [
      { "title": "Le devis", "text": "Il décrit et chiffre les travaux prévus. Signé, il vaut commande." },
      { "title": "La facture d’acompte", "text": "Émise à la commande : elle officialise l’acompte versé et sécurise le chantier." },
      { "title": "La facture de solde", "text": "Émise à l’avancement ou à la fin : elle facture le reste dû après l’acompte." },
      { "title": "La facture finale", "text": "Récapitule l’ensemble : total, acompte déjà versé, reste à payer." }
    ],
    "checklistTitle": "Checklist du cycle de facturation",
    "checklist": [
      "Devis signé avant de commencer.",
      "Facture d’acompte à la commande.",
      "Facture de solde au bon moment.",
      "Facture finale récapitulative.",
      "Numérotation continue sur toutes les factures."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Confondre devis et facture.",
      "Oublier de facturer le solde.",
      "Numérotation incohérente entre les documents.",
      "Ne pas relier l’acompte à la facture finale."
    ],
    "chiffrTitle": "Comment Chiffr clarifie le cycle",
    "chiffrText": "Chiffr relie devis, acompte, solde et facture finale au même dossier client, avec une numérotation continue. Vous savez toujours ce qui est encaissé et ce qu’il reste à facturer.",
    "chiffrBenefits": [
      "Devis → acompte → solde → finale reliés.",
      "Numérotation continue automatique.",
      "Suivi du reste à encaisser.",
      "Moins d’oublis de facturation."
    ],
    "relatedLinks": [
      { "label": "Facture d’acompte artisan énergie", "href": "/facture-acompte-artisan-energie" },
      { "label": "Facture de solde de chantier", "href": "/facture-solde-chantier" },
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" }
    ],
    "faqs": [
      { "question": "Le devis est-il une facture ?", "answer": "Non : le devis chiffre les travaux prévus et, signé, vaut commande. La facture, elle, demande le paiement de ce qui est dû." },
      { "question": "Quand facturer l’acompte ?", "answer": "À la commande : la facture d’acompte officialise la somme versée et sécurise le démarrage du chantier." },
      { "question": "Chiffr suit-il tout le cycle ?", "answer": "Oui : tout reste relié au même dossier client, du devis à la facture finale." }
    ]
  },
  {
    "slug": "delai-validite-devis-artisan",
    "title": "Délai de validité d’un devis d’artisan | Chiffr",
    "metaDescription": "Durée de validité d’un devis d’artisan : pourquoi l’indiquer, combien de temps, et comment éviter qu’un client revienne au prix d’il y a six mois.",
    "h1": "Durée de validité d’un devis : pourquoi et combien de temps ?",
    "eyebrow": "Guide devis",
    "intro": "Indiquer une durée de validité sur un devis protège l’artisan : au-delà, les prix peuvent évoluer (matériel, énergie). Sans cette mention, un client peut revenir des mois plus tard en exigeant le prix initial.",
    "searchIntent": "L’artisan veut savoir quelle durée de validité mettre sur un devis et pourquoi.",
    "problemTitle": "Le risque : un prix figé trop longtemps",
    "problemText": "Le coût du matériel énergie peut bouger vite. Sans durée de validité, le devis engage potentiellement l’artisan au prix d’hier sur un chantier d’aujourd’hui.",
    "stepsTitle": "Bien gérer la validité du devis",
    "steps": [
      { "title": "Indiquer une durée", "text": "Mentionnez clairement la durée de validité (souvent quelques semaines à quelques mois selon votre activité)." },
      { "title": "L’adapter au matériel", "text": "Sur des postes au prix volatil, une validité plus courte se justifie." },
      { "title": "Le dire au client", "text": "Une validité claire évite les malentendus et incite à décider." },
      { "title": "Refaire si dépassé", "text": "Au-delà, proposez un devis actualisé plutôt que d’honorer un ancien prix." }
    ],
    "checklistTitle": "Checklist validité du devis",
    "checklist": [
      "Durée de validité indiquée sur le devis.",
      "Durée cohérente avec la volatilité du matériel.",
      "Mention visible, pas en petits caractères.",
      "Processus pour réactualiser un devis dépassé."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Aucune durée de validité.",
      "Honorer un devis très ancien au prix initial.",
      "Validité illisible ou ambiguë.",
      "Ne pas proposer de devis actualisé."
    ],
    "chiffrTitle": "Comment Chiffr gère la validité",
    "chiffrText": "Chiffr fait figurer la durée de validité sur le devis et vous permet de dupliquer un devis pour le réactualiser rapidement si le délai est dépassé.",
    "chiffrBenefits": [
      "Durée de validité sur le devis.",
      "Duplication pour réactualiser.",
      "Mentions claires et lisibles.",
      "Suivi des devis envoyés."
    ],
    "relatedLinks": [
      { "label": "Mentions obligatoires sur un devis", "href": "/mentions-obligatoires-devis-artisan" },
      { "label": "Relancer un devis sans réponse", "href": "/relance-devis-artisan" },
      { "label": "Voir les modèles de devis", "href": "/modeles-devis" }
    ],
    "faqs": [
      { "question": "Quelle durée de validité mettre ?", "answer": "Cela dépend de votre activité et de la volatilité du matériel : de quelques semaines à quelques mois. L’essentiel est de l’indiquer clairement." },
      { "question": "Suis-je obligé d’honorer un devis dépassé ?", "answer": "Si la durée de validité est passée, vous pouvez proposer un devis actualisé plutôt que l’ancien prix." },
      { "question": "Chiffr affiche-t-il la validité ?", "answer": "Oui : la durée de validité figure sur le devis, et vous pouvez le dupliquer pour le réactualiser." }
    ]
  },
  {
    "slug": "penalites-retard-paiement-facture",
    "title": "Pénalités de retard de paiement sur une facture | Chiffr",
    "metaDescription": "Pénalités de retard et indemnité forfaitaire de 40 € : ce que la facture d’artisan doit mentionner en B2B, et comment les calculer.",
    "h1": "Pénalités de retard : ce que la facture doit mentionner",
    "eyebrow": "Guide facturation",
    "intro": "En B2B, la facture doit mentionner les pénalités de retard et l’indemnité forfaitaire de 40 € pour frais de recouvrement. Ce n’est pas du formalisme : c’est ce qui protège l’artisan quand un client professionnel paie en retard.",
    "searchIntent": "L’artisan veut savoir quoi mentionner sur la facture concernant les retards de paiement.",
    "problemTitle": "Le risque : une facture sans levier en cas de retard",
    "problemText": "Si la facture ne mentionne pas les pénalités de retard et l’indemnité de 40 €, l’artisan a moins de leviers face à un client professionnel qui tarde à payer.",
    "stepsTitle": "Bien traiter les retards sur la facture",
    "steps": [
      { "title": "Indiquer la date d’échéance", "text": "La facture doit porter une date de règlement claire." },
      { "title": "Mentionner le taux de pénalités", "text": "Le taux des pénalités de retard doit figurer sur la facture." },
      { "title": "Ajouter l’indemnité de 40 €", "text": "En B2B, l’indemnité forfaitaire de 40 € pour frais de recouvrement est obligatoire en cas de retard." },
      { "title": "Relancer si besoin", "text": "En cas de retard, relancez le client avec la facture et ses mentions à l’appui." }
    ],
    "checklistTitle": "Checklist retards de paiement",
    "checklist": [
      "Date d’échéance sur la facture.",
      "Taux des pénalités de retard mentionné.",
      "Indemnité forfaitaire de 40 € (B2B).",
      "Conditions de règlement claires.",
      "Numérotation et mentions complètes."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Pas de date d’échéance.",
      "Oublier le taux de pénalités.",
      "Oublier l’indemnité de 40 € en B2B.",
      "Conditions de paiement absentes."
    ],
    "chiffrTitle": "Comment Chiffr aide sur les retards",
    "chiffrText": "Chiffr fait figurer la date d’échéance, les pénalités de retard et l’indemnité de 40 € sur les factures B2B, et vous aide à suivre le reste à encaisser.",
    "chiffrBenefits": [
      "Échéance et pénalités sur la facture.",
      "Indemnité 40 € intégrée (B2B).",
      "Suivi du reste à encaisser.",
      "Relances facilitées."
    ],
    "relatedLinks": [
      { "label": "Mentions obligatoires sur une facture", "href": "/mentions-obligatoires-facture-artisan" },
      { "label": "Relancer un client qui ne paie pas", "href": "/relancer-client-qui-ne-paie-pas" },
      { "label": "Facture de solde de chantier", "href": "/facture-solde-chantier" }
    ],
    "faqs": [
      { "question": "L’indemnité de 40 € est-elle obligatoire ?", "answer": "En B2B, oui : l’indemnité forfaitaire de 40 € pour frais de recouvrement doit être mentionnée et s’applique en cas de retard de paiement." },
      { "question": "Faut-il une date d’échéance ?", "answer": "Oui : la facture doit indiquer la date de règlement, qui sert de point de départ aux éventuelles pénalités." },
      { "question": "Chiffr met-il ces mentions ?", "answer": "Oui : échéance, pénalités et indemnité figurent automatiquement sur les factures concernées." }
    ]
  },
  {
    "slug": "relancer-client-qui-ne-paie-pas",
    "title": "Relancer un client qui ne paie pas : méthode artisan | Chiffr",
    "metaDescription": "Comment relancer un client qui ne paie pas une facture : relance amiable, étapes, mentions utiles et suivi du reste à encaisser.",
    "h1": "Relancer un client qui ne paie pas : la méthode simple",
    "eyebrow": "Guide facturation",
    "intro": "Une facture impayée n’est pas une fatalité. Une relance claire, au bon moment, suffit souvent. Voici une méthode simple et professionnelle pour récupérer ce qui vous est dû, sans braquer le client.",
    "searchIntent": "L’artisan cherche comment relancer efficacement une facture impayée.",
    "problemTitle": "Le risque : laisser filer une facture impayée",
    "problemText": "Sans suivi, une facture impayée se perd dans la masse. Plus on attend, plus c’est dur à récupérer. Un suivi du reste à encaisser et des relances au bon moment changent tout.",
    "stepsTitle": "Les étapes d’une relance efficace",
    "steps": [
      { "title": "Suivre l’échéance", "text": "Repérez la facture dès qu’elle dépasse sa date de règlement." },
      { "title": "Relance amiable", "text": "Un premier rappel courtois, factuel, avec la facture en pièce jointe." },
      { "title": "Rappeler les mentions", "text": "Au besoin, rappelez les pénalités de retard et l’indemnité de 40 € (B2B)." },
      { "title": "Garder une trace", "text": "Notez chaque relance ; en cas de litige, l’historique compte." }
    ],
    "checklistTitle": "Checklist relance impayé",
    "checklist": [
      "Facture repérée dès le dépassement d’échéance.",
      "Relance amiable envoyée rapidement.",
      "Facture jointe à la relance.",
      "Mentions de retard rappelées si besoin (B2B).",
      "Historique des relances conservé."
    ],
    "commonMistakesTitle": "Les erreurs fréquentes",
    "commonMistakes": [
      "Attendre trop longtemps avant de relancer.",
      "Relance agressive qui braque le client.",
      "Ne pas joindre la facture.",
      "Aucun suivi du reste à encaisser."
    ],
    "chiffrTitle": "Comment Chiffr aide à relancer",
    "chiffrText": "Chiffr montre ce qu’il reste à encaisser et quelles factures relancer, pour ne plus laisser passer un impayé. Vous gardez la main sur le ton et le moment.",
    "chiffrBenefits": [
      "Suivi du reste à encaisser.",
      "Visibilité des factures en attente.",
      "Relances au bon moment.",
      "Historique du dossier client."
    ],
    "relatedLinks": [
      { "label": "Pénalités de retard de paiement", "href": "/penalites-retard-paiement-facture" },
      { "label": "Relancer un devis sans réponse", "href": "/relance-devis-artisan" },
      { "label": "Facture de solde de chantier", "href": "/facture-solde-chantier" }
    ],
    "faqs": [
      { "question": "Quand relancer une facture impayée ?", "answer": "Dès le dépassement de l’échéance, par une relance amiable. Plus on attend, plus c’est difficile à récupérer." },
      { "question": "Peut-on appliquer des pénalités ?", "answer": "En B2B, si la facture les mentionne : pénalités de retard et indemnité de 40 € pour frais de recouvrement." },
      { "question": "Chiffr suit-il les impayés ?", "answer": "Oui : Chiffr montre le reste à encaisser et les factures à relancer." }
    ]
  }
];
