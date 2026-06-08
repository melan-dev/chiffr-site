export type UseCaseAlternativeFaq = {
  question: string;
  answer: string;
};

export type UseCaseAlternativeLink = {
  label: string;
  href: string;
};

export type UseCaseAlternativePage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  searchIntent: string;
  problemTitle: string;
  problemText: string;
  forWho: string[];
  chiffrPromise: string;
  chiffrBenefits: string[];
  energyUseCases: string[];
  comparisonRows: {
    label: string;
    classicTool: string;
    chiffr: string;
  }[];
  relatedLinks: UseCaseAlternativeLink[];
  faqs: UseCaseAlternativeFaq[];
};

const defaultRelatedLinks: UseCaseAlternativeLink[] = [
  { label: 'Modèles de devis', href: '/modeles-devis' },
  { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
  { label: 'Tarifs Chiffr', href: '/tarifs' },
  { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
  { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
  { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
  { label: 'Demander un accès', href: '/contact' },
];

const defaultEnergyUseCases = [
  'Préparer un devis PAC air/eau avec matériel, raccordements, options et mise en service.',
  'Créer un devis climatisation monosplit ou multisplit avec liaisons frigorifiques et condensats.',
  'Structurer un devis chauffagiste avec acompte, facture de solde et suivi client.',
  'Créer un devis VMC simple flux ou double flux avec réseau, bouches, essais et réglages.',
  'Préparer un devis IRVE avec protections électriques, câblage, pose et mise en service.',
  'Créer un devis photovoltaïque avec panneaux, onduleur, fixations, protections et raccordement.',
];

const defaultBenefits = [
  'Modèles métier PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire.',
  'Lignes de devis préparées selon le type de chantier.',
  'Prix à renseigner clairement signalés pour garder le contrôle.',
  'Photos chantier, photo plaque machine, scan EAN et catalogue adapté.',
  'PDF premium, signature client, acompte, paiement, factures et relances.',
  'Suivi client clair pour savoir quoi faire après l’envoi du devis.',
];

const defaultComparisonRows = (
  classicLabel: string,
): UseCaseAlternativePage['comparisonRows'] => [
  {
    label: 'Démarrage du devis',
    classicTool: `${classicLabel} peut souvent laisser l’artisan construire son devis depuis une base assez générale.`,
    chiffr: 'Chiffr part de modèles métier avec les lignes fréquentes selon le chantier énergie.',
  },
  {
    label: 'Spécialisation métier',
    classicTool: 'L’approche est souvent pensée pour plusieurs métiers ou plusieurs types d’entreprises.',
    chiffr: 'Chiffr est pensé pour PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire.',
  },
  {
    label: 'Terrain',
    classicTool: 'Les fonctions terrain dépendent de l’outil choisi et de son niveau de spécialisation.',
    chiffr: 'Chiffr valorise les photos chantier, la photo plaque machine, le scan EAN et les actions rapides.',
  },
  {
    label: 'Suite du dossier',
    classicTool: 'Le suivi après devis peut exister, mais il n’est pas toujours guidé autour du chantier énergie.',
    chiffr: 'Chiffr guide devis → signature → acompte → facture → relance → suivi client.',
  },
];

const defaultFaqs = (topic: string): UseCaseAlternativeFaq[] => [
  {
    question: `Chiffr est-il adapté pour ${topic} ?`,
    answer:
      'Oui, Chiffr est pensé pour les artisans énergie qui veulent créer des devis plus vite, sans repartir d’une page blanche, avec des modèles métier adaptés.',
  },
  {
    question: 'Chiffr remplace-t-il Word ou Excel ?',
    answer:
      'Oui. L’objectif est de remplacer les devis bricolés dans Word ou Excel par un outil plus guidé : modèles, lignes métier, PDF premium, signature, acompte, factures et suivi client.',
  },
  {
    question: 'Les modèles de devis sont-ils modifiables ?',
    answer:
      'Oui. Chiffr propose une structure métier, mais l’artisan garde la main sur les lignes, les prix, les quantités, les options et les conditions.',
  },
  {
    question: 'Chiffr convient-il aux artisans PAC, climatisation, VMC, IRVE et solaire ?',
    answer:
      'Oui. Chiffr est construit autour des métiers énergie : pompe à chaleur, climatisation, chauffage, CVC, VMC, IRVE, photovoltaïque et chauffe-eau thermodynamique.',
  },
  {
    question: 'Faut-il vérifier les prix et la TVA dans Chiffr ?',
    answer:
      'Oui. Chiffr aide à structurer le devis, mais les prix, quantités, choix techniques et taux de TVA doivent toujours être vérifiés selon le chantier et la réglementation applicable.',
  },
];

export const useCaseAlternatives: UseCaseAlternativePage[] = [
  {
    slug: 'alternative-logiciel-devis-batiment',
    title: 'Alternative logiciel devis bâtiment | Chiffr artisans énergie',
    metaDescription:
      'Vous cherchez une alternative à un logiciel de devis bâtiment généraliste ? Chiffr aide les artisans énergie à créer des devis PAC, clim, VMC, IRVE et solaire.',
    h1: 'Alternative logiciel devis bâtiment pour artisans énergie',
    eyebrow: 'Alternative logiciel devis bâtiment',
    intro:
      'Un logiciel de devis bâtiment généraliste peut convenir à beaucoup de métiers. Chiffr prend un angle plus spécialisé : aider les artisans énergie à créer des devis PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire avec les bonnes lignes dès le départ.',
    searchIntent:
      'Recherche d’un outil de devis bâtiment plus simple, plus concret ou mieux adapté aux métiers énergie.',
    problemTitle: 'Le problème des outils trop généralistes',
    problemText:
      'Quand l’outil couvre tous les métiers du bâtiment, l’artisan doit souvent construire lui-même sa logique de devis. Pour les chantiers énergie, cela peut faire perdre du temps : matériel, raccordements, options, mise en service, acompte et factures doivent être bien structurés.',
    forWho: [
      'Artisans PAC et chauffage',
      'Installateurs climatisation',
      'Frigoristes et entreprises CVC',
      'Artisans VMC, IRVE et solaire',
      'Entreprises qui veulent des devis plus guidés',
      'Artisans qui veulent arrêter les devis Word ou Excel',
    ],
    chiffrPromise:
      'Chiffr ne vous donne pas une page blanche : il prépare des modèles métier avec les lignes utiles et les actions suivantes.',
    chiffrBenefits: defaultBenefits,
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis bâtiment généraliste'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('remplacer un logiciel de devis bâtiment généraliste'),
  },

  {
    slug: 'alternative-logiciel-facturation-batiment',
    title: 'Alternative logiciel facturation bâtiment | Chiffr',
    metaDescription:
      'Alternative à un logiciel de facturation bâtiment : Chiffr accompagne devis, signature, acompte, factures et relances pour artisans énergie.',
    h1: 'Alternative logiciel facturation bâtiment pour artisans énergie',
    eyebrow: 'Alternative logiciel facturation bâtiment',
    intro:
      'La facturation ne commence pas au moment d’émettre une facture. Pour un artisan énergie, tout part souvent du devis : signature, acompte, facture d’acompte, facture de solde, relance et suivi client.',
    searchIntent:
      'Recherche d’un outil de facturation bâtiment qui reste simple mais suit mieux le cycle devis → facture.',
    problemTitle: 'La facture arrive souvent trop tard dans le suivi',
    problemText:
      'Beaucoup d’outils permettent de créer une facture propre. Le vrai enjeu, c’est de garder le fil entre le devis envoyé, la signature, l’acompte, le chantier, le solde et les relances.',
    forWho: [
      'Artisans qui veulent mieux suivre les factures',
      'Chauffagistes avec acomptes et soldes',
      'Installateurs PAC avec matériel important',
      'Entreprises climatisation avec plusieurs devis en attente',
      'Artisans qui veulent éviter les oublis de facturation',
    ],
    chiffrPromise:
      'Chiffr relie le devis, la signature, l’acompte et les factures pour éviter de perdre le fil du dossier client.',
    chiffrBenefits: [
      'Factures d’acompte, de solde et finales.',
      'Suivi du reste à encaisser.',
      'Relances client après devis, signature ou paiement.',
      'PDF premium cohérent entre devis et factures.',
      'Historique client clair.',
      'Actions guidées après acceptation du devis.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de facturation bâtiment'),
    relatedLinks: [
      { label: 'Tarifs Chiffr', href: '/tarifs' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Modèle devis PAC air/eau', href: '/modele-devis-pac-air-eau' },
      { label: 'Modèle devis clim multisplit', href: '/modele-devis-clim-multisplit' },
      { label: 'Contact', href: '/contact' },
    ],
    faqs: defaultFaqs('gérer la facturation bâtiment'),
  },

  {
    slug: 'alternative-logiciel-devis-artisan',
    title: 'Alternative logiciel devis artisan | Chiffr énergie',
    metaDescription:
      'Vous cherchez une alternative à un logiciel devis artisan ? Chiffr est spécialisé pour artisans PAC, clim, chauffage, VMC, IRVE et solaire.',
    h1: 'Alternative logiciel devis artisan pour les métiers énergie',
    eyebrow: 'Alternative logiciel devis artisan',
    intro:
      'Un artisan n’a pas besoin d’un outil compliqué pour créer un devis. Il a besoin d’un logiciel qui l’aide à aller vite, à ne pas oublier les postes importants et à présenter un document clair au client.',
    searchIntent:
      'Recherche d’un logiciel de devis simple pour artisan, avec une approche métier plus concrète.',
    problemTitle: 'Un devis artisan doit être rapide, mais pas vague',
    problemText:
      'Faire vite ne doit pas vouloir dire envoyer un devis flou. Pour les métiers énergie, un bon devis doit détailler le matériel, la pose, les raccordements, les options, les photos chantier, l’acompte et les conditions.',
    forWho: [
      'Artisans seuls',
      'Petites entreprises énergie',
      'Auto-entrepreneurs spécialisés PAC ou clim',
      'Plombiers-chauffagistes',
      'Frigoristes',
      'Artisans qui veulent un outil simple sans perdre le sérieux du devis',
    ],
    chiffrPromise:
      'Chiffr aide l’artisan à partir d’un modèle métier clair, puis à adapter les lignes selon son chantier.',
    chiffrBenefits: defaultBenefits,
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel devis artisan généraliste'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('créer des devis artisan'),
  },

  {
    slug: 'logiciel-devis-specialise-energie',
    title: 'Logiciel devis spécialisé énergie | PAC, clim, VMC, IRVE',
    metaDescription:
      'Chiffr est un logiciel de devis spécialisé énergie : PAC, climatisation, chauffage, CVC, VMC, IRVE, solaire et chauffe-eau thermodynamique.',
    h1: 'Logiciel de devis spécialisé énergie : PAC, clim, chauffage, VMC, IRVE et solaire',
    eyebrow: 'Logiciel devis spécialisé énergie',
    intro:
      'Les métiers énergie ont des devis particuliers : matériel technique, raccordements, mise en service, options, photos chantier, acompte et factures liées au chantier. Chiffr est pensé autour de ces usages.',
    searchIntent:
      'Recherche d’un logiciel de devis vraiment adapté aux artisans énergie, pas seulement un outil généraliste.',
    problemTitle: 'Les devis énergie demandent plus qu’un simple tableau de lignes',
    problemText:
      'Un devis PAC, clim, VMC, IRVE ou solaire peut comporter des lignes très différentes. Sans modèle métier, l’artisan risque d’oublier des postes ou de produire un document moins clair.',
    forWho: [
      'Installateurs PAC air/eau',
      'Installateurs climatisation',
      'Chauffagistes',
      'Frigoristes CVC',
      'Installateurs VMC',
      'Installateurs IRVE',
      'Artisans photovoltaïque',
    ],
    chiffrPromise:
      'Chiffr prépare les bonnes bases selon le métier choisi, tout en laissant l’artisan décider des prix, des marques, des quantités et des conditions.',
    chiffrBenefits: defaultBenefits,
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis non spécialisé'),
    relatedLinks: [
      { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
      { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
      { label: 'Logiciel devis VMC', href: '/logiciel-devis-vmc' },
      { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
      { label: 'Logiciel devis photovoltaïque', href: '/logiciel-devis-photovoltaique' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
    ],
    faqs: defaultFaqs('faire des devis énergie'),
  },

  {
    slug: 'logiciel-devis-artisan-simple',
    title: 'Logiciel devis artisan simple | Chiffr',
    metaDescription:
      'Un logiciel de devis artisan simple, guidé et spécialisé énergie. Chiffr aide à créer des devis propres sans complexité inutile.',
    h1: 'Logiciel devis artisan simple, sans repartir d’une page blanche',
    eyebrow: 'Logiciel devis artisan simple',
    intro:
      'La simplicité ne veut pas dire moins de puissance. Chiffr cache la complexité et montre la prochaine bonne action : choisir un modèle, compléter les lignes, générer le PDF, faire signer, demander un acompte et facturer.',
    searchIntent:
      'Recherche d’un logiciel de devis simple pour artisan, sans interface lourde ni complexité inutile.',
    problemTitle: 'Simple ne doit pas vouloir dire limité',
    problemText:
      'Un outil peut être simple en surface tout en gérant les vrais besoins : modèles métier, photos chantier, signature, acompte, factures, relances et suivi client.',
    forWho: [
      'Artisans qui ne veulent plus perdre de temps sur Word ou Excel',
      'Artisans énergie qui veulent une interface claire',
      'Entreprises qui veulent un outil plus guidé',
      'Utilisateurs qui veulent créer un devis rapidement',
      'Artisans terrain qui veulent avancer sur mobile',
    ],
    chiffrPromise:
      'Chiffr propose une interface simple, mais prépare des devis complets avec les bonnes lignes selon votre métier.',
    chiffrBenefits: defaultBenefits,
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis simple généraliste'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('utiliser un logiciel de devis artisan simple'),
  },

  {
    slug: 'logiciel-devis-mobile-artisan',
    title: 'Logiciel devis mobile artisan | Chiffr terrain',
    metaDescription:
      'Logiciel devis mobile pour artisans énergie : photos chantier, modèles métier, PDF, signature, acompte et suivi client.',
    h1: 'Logiciel devis mobile artisan pour avancer directement sur le terrain',
    eyebrow: 'Logiciel devis mobile artisan',
    intro:
      'Un artisan énergie travaille souvent entre le terrain, le camion et le bureau. Chiffr est pensé pour créer ou compléter un devis depuis le mobile, sans perdre la qualité du document final.',
    searchIntent:
      'Recherche d’un logiciel de devis utilisable sur mobile pour les artisans terrain.',
    problemTitle: 'Le terrain ne doit pas casser le suivi administratif',
    problemText:
      'Photos chantier, plaque machine, accès, tableau électrique, emplacement, options : beaucoup d’informations sont vues sur place. Chiffr aide à les garder dans le dossier client.',
    forWho: [
      'Artisans qui font des visites techniques',
      'Installateurs PAC et climatisation',
      'Techniciens terrain',
      'Frigoristes',
      'Installateurs IRVE',
      'Artisans qui veulent joindre des photos au dossier',
    ],
    chiffrPromise:
      'Chiffr permet de garder le devis connecté au terrain : photos, informations chantier, lignes métier, signature et acompte.',
    chiffrBenefits: [
      'Photos chantier liées au devis.',
      'Photo plaque machine pour garder une trace claire.',
      'Scan EAN pour retrouver ou ajouter une référence.',
      'Actions rapides sur mobile.',
      'PDF premium exploitable ensuite au bureau.',
      'Signature et demande d’acompte après validation.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis bureau classique'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('faire des devis sur mobile'),
  },

  {
    slug: 'logiciel-devis-avec-signature-client',
    title: 'Logiciel devis avec signature client | Chiffr',
    metaDescription:
      'Logiciel de devis avec signature client pour artisans énergie : devis PAC, clim, chauffage, VMC, IRVE et solaire prêts à signer.',
    h1: 'Logiciel de devis avec signature client pour artisans énergie',
    eyebrow: 'Logiciel devis avec signature client',
    intro:
      'Un devis clair doit pouvoir être signé simplement. Chiffr accompagne l’artisan après l’envoi du PDF : signature client, acompte, facture et suivi du dossier.',
    searchIntent:
      'Recherche d’un logiciel de devis permettant de faire signer un client plus facilement.',
    problemTitle: 'Un devis accepté verbalement ne suffit pas',
    problemText:
      'Sans signature claire, l’artisan peut perdre du temps, relancer inutilement ou démarrer un dossier sans trace propre. La signature doit être intégrée au cycle du devis.',
    forWho: [
      'Artisans qui veulent faire signer sur place',
      'Artisans qui envoient des devis à distance',
      'Installateurs avec acomptes',
      'Entreprises qui veulent mieux suivre les devis acceptés',
      'Artisans qui veulent passer plus vite à la facture',
    ],
    chiffrPromise:
      'Chiffr relie la signature au devis, puis à l’acompte et à la facture pour garder un dossier propre.',
    chiffrBenefits: [
      'Signature sur place ou à distance selon le contexte.',
      'Statut du devis plus clair.',
      'Demande d’acompte après validation.',
      'Facture d’acompte ou de solde reliée au devis.',
      'Relance client en cas d’attente.',
      'Historique client plus simple à suivre.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un outil de devis sans signature intégrée'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('faire signer des devis client'),
  },

  {
    slug: 'logiciel-devis-avec-acompte',
    title: 'Logiciel devis avec acompte | Chiffr artisans énergie',
    metaDescription:
      'Logiciel de devis avec acompte pour artisans énergie : devis, signature, paiement, facture d’acompte, solde et suivi client.',
    h1: 'Logiciel devis avec acompte pour artisans énergie',
    eyebrow: 'Logiciel devis avec acompte',
    intro:
      'Sur les chantiers PAC, climatisation, chauffage, IRVE ou solaire, le matériel peut représenter une part importante du devis. Chiffr aide à prévoir l’acompte, le suivre et le relier aux factures.',
    searchIntent:
      'Recherche d’un logiciel permettant de gérer un acompte après devis.',
    problemTitle: 'L’acompte doit être clair dès le devis',
    problemText:
      'Un acompte mal expliqué peut créer de la confusion. Il doit être prévu dans les conditions, lié à la signature, puis suivi jusqu’à la facture d’acompte et au solde.',
    forWho: [
      'Installateurs PAC',
      'Installateurs climatisation',
      'Artisans qui commandent du matériel avant chantier',
      'Entreprises avec factures d’acompte',
      'Artisans qui veulent suivre le reste à encaisser',
    ],
    chiffrPromise:
      'Chiffr aide à intégrer l’acompte dans le cycle naturel du dossier : devis, signature, paiement, facture et solde.',
    chiffrBenefits: [
      'Acompte prévu dans le devis.',
      'Demande d’acompte après signature.',
      'Paiement possible selon configuration.',
      'Facture d’acompte liée au devis.',
      'Suivi du reste à encaisser.',
      'Relances client si paiement en attente.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis sans suivi acompte clair'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('gérer les acomptes sur devis'),
  },

  {
    slug: 'logiciel-devis-avec-facture-acompte',
    title: 'Logiciel devis avec facture acompte | Chiffr',
    metaDescription:
      'Chiffr aide les artisans énergie à passer du devis signé à la facture d’acompte, facture de solde ou facture finale.',
    h1: 'Logiciel devis avec facture d’acompte, solde et finale',
    eyebrow: 'Logiciel devis avec facture d’acompte',
    intro:
      'Le devis ne doit pas être séparé de la facturation. Chiffr aide à transformer un devis accepté en facture d’acompte, facture de solde ou facture finale selon l’avancement du dossier.',
    searchIntent:
      'Recherche d’un logiciel qui gère les factures d’acompte à partir des devis.',
    problemTitle: 'La facturation devient pénible quand elle est séparée du devis',
    problemText:
      'Quand le devis, l’acompte et les factures ne sont pas liés, l’artisan peut perdre du temps, oublier un solde ou produire des documents incohérents.',
    forWho: [
      'Artisans avec paiement en plusieurs étapes',
      'Installateurs PAC avec acompte matériel',
      'Chauffagistes',
      'Entreprises climatisation',
      'Artisans qui veulent suivre facturé, encaissé et reste à encaisser',
    ],
    chiffrPromise:
      'Chiffr garde le lien entre devis, acompte et facture pour simplifier le suivi administratif.',
    chiffrBenefits: [
      'Facture d’acompte depuis un devis accepté.',
      'Facture de solde ou finale.',
      'PDF facture plus sobre et professionnel.',
      'Suivi facturé, encaissé et reste à encaisser.',
      'Historique client.',
      'Relances liées au dossier.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de facturation séparé du devis'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('créer une facture d’acompte depuis un devis'),
  },

  {
    slug: 'logiciel-devis-avec-photos-chantier',
    title: 'Logiciel devis avec photos chantier | Chiffr',
    metaDescription:
      'Logiciel de devis avec photos chantier pour artisans énergie : avant/après, plaque machine, tableau électrique, accès, PDF et suivi client.',
    h1: 'Logiciel devis avec photos chantier pour artisans énergie',
    eyebrow: 'Logiciel devis avec photos chantier',
    intro:
      'Les photos chantier sont précieuses pour les artisans énergie : ancien équipement, plaque machine, accès, tableau électrique, emplacement extérieur, finitions ou avant/après. Chiffr les garde dans le dossier du devis.',
    searchIntent:
      'Recherche d’un logiciel de devis permettant de joindre ou gérer les photos chantier.',
    problemTitle: 'Les photos se perdent trop facilement dans le téléphone',
    problemText:
      'Quand les photos restent dans la galerie du téléphone, elles ne sont pas reliées au client, au devis ou à la facture. Chiffr aide à les organiser dans le bon dossier.',
    forWho: [
      'Installateurs PAC',
      'Installateurs climatisation',
      'Frigoristes',
      'Artisans VMC',
      'Installateurs IRVE',
      'Artisans qui veulent documenter l’avant/après',
    ],
    chiffrPromise:
      'Chiffr relie les photos au devis pour mieux préparer, justifier et suivre le chantier.',
    chiffrBenefits: [
      'Photos chantier liées au devis.',
      'Catégories métier : ancien équipement, plaque machine, tableau électrique, accès, plan/croquis.',
      'Possibilité d’inclure certaines photos dans le PDF.',
      'Trace claire dans l’historique client.',
      'Meilleur suivi entre terrain et bureau.',
      'Dossier plus rassurant pour le client.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis sans photos chantier intégrées'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('gérer les photos chantier dans un devis'),
  },

  {
    slug: 'logiciel-devis-avec-relance-client',
    title: 'Logiciel devis avec relance client | Chiffr',
    metaDescription:
      'Logiciel de devis avec relance client pour artisans énergie : devis envoyé, signature, acompte, paiement, facture et suivi.',
    h1: 'Logiciel devis avec relance client pour ne plus perdre les dossiers',
    eyebrow: 'Logiciel devis avec relance client',
    intro:
      'Un devis envoyé mais jamais relancé peut devenir une vente perdue. Chiffr aide à suivre les devis en attente, les signatures, les acomptes, les paiements et les factures.',
    searchIntent:
      'Recherche d’un logiciel de devis qui aide à relancer les clients et suivre les dossiers.',
    problemTitle: 'Le suivi client est souvent le point faible après l’envoi du devis',
    problemText:
      'Quand les devis sont nombreux, il devient facile d’oublier une relance, un acompte, une facture ou un client en attente. Chiffr aide à afficher la prochaine bonne action.',
    forWho: [
      'Artisans avec beaucoup de devis envoyés',
      'Installateurs PAC ou clim avec cycles de décision longs',
      'Entreprises qui veulent suivre les devis à relancer',
      'Artisans qui veulent éviter les oublis de paiement',
      'TPE énergie avec suivi client simple',
    ],
    chiffrPromise:
      'Chiffr ne se limite pas au PDF : il aide à suivre la suite du dossier client.',
    chiffrBenefits: [
      'Relance devis en attente.',
      'Relance signature.',
      'Relance acompte ou paiement.',
      'Historique client.',
      'Suivi des statuts devis, signature, paiement et facture.',
      'Dashboard métier pour voir quoi faire ensuite.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel de devis sans suivi client guidé'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('relancer les clients après un devis'),
  },

  {
    slug: 'logiciel-devis-avec-catalogue-artisan',
    title: 'Logiciel devis avec catalogue artisan | Chiffr',
    metaDescription:
      'Logiciel de devis avec catalogue artisan pour PAC, clim, chauffage, VMC, IRVE et solaire : références, scan EAN, import et modèles métier.',
    h1: 'Logiciel devis avec catalogue artisan adapté aux métiers énergie',
    eyebrow: 'Logiciel devis avec catalogue artisan',
    intro:
      'Un bon catalogue doit aider l’artisan à gagner du temps sans l’enfermer. Chiffr permet de travailler avec des références adaptées, un catalogue personnel, le scan EAN et des modèles métier.',
    searchIntent:
      'Recherche d’un logiciel de devis avec catalogue produits ou références artisan.',
    problemTitle: 'Un catalogue trop générique ne suffit pas pour les métiers énergie',
    problemText:
      'PAC, climatisation, VMC, IRVE ou solaire : les références, accessoires, options et unités ne sont pas les mêmes. Le catalogue doit rester utile, modifiable et adapté au chantier.',
    forWho: [
      'Artisans avec références récurrentes',
      'Installateurs climatisation',
      'Installateurs PAC',
      'Frigoristes',
      'Installateurs IRVE',
      'Artisans qui veulent importer ou organiser leur catalogue',
    ],
    chiffrPromise:
      'Chiffr aide à créer des devis plus vite avec un catalogue adapté, tout en laissant l’artisan garder ses prix et ses habitudes.',
    chiffrBenefits: [
      'Catalogue personnel.',
      'Import CSV/XLSX selon configuration.',
      'Scan EAN.',
      'Photo plaque machine.',
      'Lignes liées aux modèles métier.',
      'Prix à vérifier et compléter par l’artisan.',
    ],
    energyUseCases: defaultEnergyUseCases,
    comparisonRows: defaultComparisonRows('Un logiciel avec catalogue généraliste'),
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('utiliser un catalogue artisan pour les devis'),
  },
];

export function getUseCaseAlternativeBySlug(slug: string) {
  return useCaseAlternatives.find((page) => page.slug === slug);
}