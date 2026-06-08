export type AlternativeComparisonRow = {
  label: string;
  competitor: string;
  chiffr: string;
};

export type AlternativeFaq = {
  question: string;
  answer: string;
};

export type AlternativeLink = {
  label: string;
  href: string;
};

export type CompetitorAlternative = {
  slug: string;
  competitorName: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sourceName: string;
  sourceUrl: string;
  sourceSummary: string;
  goodFit: string[];
  chiffrAngle: string;
  chiffrDifferences: string[];
  comparison: AlternativeComparisonRow[];
  energyUseCases: string[];
  relatedLinks: AlternativeLink[];
  faqs: AlternativeFaq[];
};

const defaultEnergyUseCases = [
  'Devis PAC air/eau avec matériel, raccordements, options et mise en service.',
  'Devis climatisation monosplit ou multisplit avec liaisons frigorifiques, condensats et support.',
  'Devis chauffagiste avec acompte, facture de solde et suivi client.',
  'Devis VMC simple flux ou double flux avec réseau, bouches, essais et réglages.',
  'Devis IRVE avec protections électriques, câblage, pose et mise en service.',
  'Devis photovoltaïque avec panneaux, onduleur, fixation, protections et raccordement.',
];

const defaultRelatedLinks: AlternativeLink[] = [
  { label: 'Modèles de devis Chiffr', href: '/modeles-devis' },
  { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
  { label: 'Tarifs Chiffr', href: '/tarifs' },
  { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
  { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
  { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
  { label: 'Demander un accès', href: '/contact' },
];

const defaultChiffrDifferences = [
  'Modèles métier orientés PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire.',
  'Lignes de devis préparées selon le type de chantier, pas une page blanche.',
  'Photos chantier, photo plaque machine, scan EAN et catalogue adapté aux artisans énergie.',
  'PDF premium, signature client, acompte, paiement, factures et relances.',
  'Interface pensée pour aller vite sur le terrain et rester claire au bureau.',
];

const defaultComparison = (competitorName: string): AlternativeComparisonRow[] => [
  {
    label: 'Positionnement',
    competitor: `${competitorName} se positionne comme une solution de devis, facturation ou gestion plus générale.`,
    chiffr: 'Chiffr se concentre sur les artisans énergie : PAC, clim, chauffage, CVC, VMC, IRVE et solaire.',
  },
  {
    label: 'Démarrage du devis',
    competitor: 'L’utilisateur crée son document avec ses ouvrages, articles ou bibliothèques selon l’outil.',
    chiffr: 'Chiffr prépare des modèles métier avec les lignes fréquentes et les points à vérifier.',
  },
  {
    label: 'Spécialisation énergie',
    competitor: 'La couverture peut être large : bâtiment, TPE, PME, facturation ou gestion commerciale.',
    chiffr: 'Les pages, modèles et écrans Chiffr sont pensés autour des chantiers énergie/CVC.',
  },
  {
    label: 'Suite du dossier',
    competitor: 'Selon l’offre, devis, factures, suivi, paiement ou chantier peuvent être inclus.',
    chiffr: 'Chiffr guide le cycle devis → signature → acompte → facture → relance → suivi client.',
  },
];

const defaultFaqs = (competitorName: string): AlternativeFaq[] => [
  {
    question: `Chiffr est-il une alternative à ${competitorName} ?`,
    answer:
      `Oui, Chiffr peut être une alternative si vous cherchez un logiciel plus spécialisé pour les artisans énergie. ${competitorName} peut convenir à d’autres besoins, notamment si vous voulez un outil plus généraliste.`,
  },
  {
    question: `Quelle est la différence principale entre Chiffr et ${competitorName} ?`,
    answer:
      'La différence principale est le positionnement : Chiffr est pensé pour les devis et factures des métiers énergie, avec des modèles PAC, climatisation, chauffage, VMC, IRVE et solaire.',
  },
  {
    question: 'Chiffr remplace-t-il un logiciel BTP généraliste ?',
    answer:
      'Pas dans tous les cas. Si vous cherchez une gestion BTP très large, un outil généraliste peut rester adapté. Si votre priorité est de produire vite des devis énergie propres et guidés, Chiffr est plus ciblé.',
  },
  {
    question: 'Les modèles Chiffr sont-ils modifiables ?',
    answer:
      'Oui. Chiffr propose une structure métier pour éviter la page blanche, mais l’artisan garde la main sur les lignes, les prix, les quantités, les options et les conditions.',
  },
  {
    question: 'Chiffr gère-t-il la signature, l’acompte et les factures ?',
    answer:
      'Oui. Chiffr est pensé pour accompagner le dossier après l’envoi du devis : signature, acompte, paiement, facture d’acompte, facture de solde ou finale, relances et suivi client. Vous pouvez demander un accès depuis la page contact.',
  },
];

export const competitorAlternatives: CompetitorAlternative[] = [
  {
    slug: 'alternative-obat',
    competitorName: 'Obat',
    title: 'Alternative Obat pour artisans énergie | Chiffr',
    metaDescription:
      'Comparez Obat et Chiffr : une alternative spécialisée pour devis PAC, climatisation, chauffage, VMC, IRVE et solaire.',
    h1: 'Alternative à Obat pour artisans énergie',
    intro:
      'Obat est un logiciel reconnu pour les artisans du bâtiment. Chiffr prend un angle plus spécialisé : aider les artisans énergie à préparer des devis PAC, clim, chauffage, VMC, IRVE et solaire avec les bonnes lignes dès le départ.',
    sourceName: 'Obat',
    sourceUrl: 'https://www.obat.fr/',
    sourceSummary:
      'Obat met en avant un logiciel de devis et factures en ligne pour le bâtiment, avec devis, factures, acomptes, avoirs, situations de travaux, personnalisation des documents et usage mobile.',
    goodFit: [
      'Artisans du bâtiment qui veulent un outil généraliste de devis et factures.',
      'TPE BTP qui veulent centraliser plusieurs tâches administratives.',
      'Entreprises qui ont besoin de situations de travaux ou de fonctions chantier plus larges.',
    ],
    chiffrAngle:
      'Chiffr ne cherche pas à copier Obat. L’objectif est de proposer une alternative plus guidée pour les artisans énergie qui veulent éviter la page blanche.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Obat'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Obat'),
  },

  {
    slug: 'alternative-tolteck',
    competitorName: 'Tolteck',
    title: 'Alternative Tolteck pour artisans énergie | Chiffr',
    metaDescription:
      'Tolteck ou Chiffr ? Découvrez une alternative spécialisée pour devis et factures PAC, clim, chauffage, VMC, IRVE et solaire.',
    h1: 'Alternative à Tolteck pour artisans énergie',
    intro:
      'Tolteck est connu pour la création simple de devis et factures pour les artisans du bâtiment. Chiffr se différencie avec des modèles métier orientés énergie : PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire.',
    sourceName: 'Tolteck',
    sourceUrl: 'https://www.tolteck.com/',
    sourceSummary:
      'Tolteck communique sur la création de devis et factures, le suivi des documents et clients, les bases d’ouvrages, les tableaux de bord et un fonctionnement multi-support.',
    goodFit: [
      'Artisans qui veulent une solution simple pour devis et factures.',
      'Utilisateurs qui cherchent une prise en main rapide.',
      'Entreprises bâtiment qui utilisent des bases d’ouvrages généralistes.',
    ],
    chiffrAngle:
      'Chiffr garde la simplicité, mais ajoute une couche métier énergie : modèles PAC, clim, VMC, IRVE, solaire, photos chantier et actions guidées.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Tolteck'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Tolteck'),
  },

  {
    slug: 'alternative-costructor',
    competitorName: 'Costructor',
    title: 'Alternative Costructor pour artisans énergie | Chiffr',
    metaDescription:
      'Comparez Costructor et Chiffr : devis, factures, chantiers et une approche spécialisée artisans énergie.',
    h1: 'Alternative à Costructor pour artisans énergie',
    intro:
      'Costructor met en avant une solution BTP moderne pour devis, factures, chantiers et rentabilité. Chiffr prend un angle plus ciblé : devis et factures guidés pour artisans énergie.',
    sourceName: 'Costructor',
    sourceUrl: 'https://costructor.co/',
    sourceSummary:
      'Costructor communique sur la création de devis et factures BTP, la conversion en facture, les relances, la gestion chantier, la rentabilité et la facturation électronique.',
    goodFit: [
      'Entreprises BTP qui veulent suivre chantiers, planning et rentabilité.',
      'Artisans qui cherchent un outil moderne et mobile.',
      'Structures qui veulent centraliser plus que le devis et la facture.',
    ],
    chiffrAngle:
      'Chiffr se concentre sur le devis métier énergie : moins généraliste, plus guidé sur les chantiers PAC, clim, VMC, IRVE et solaire.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Costructor'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Costructor'),
  },

  {
    slug: 'alternative-batappli',
    competitorName: 'Batappli',
    title: 'Alternative Batappli pour artisans énergie | Chiffr',
    metaDescription:
      'Batappli ou Chiffr ? Une alternative spécialisée pour devis et factures PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire.',
    h1: 'Alternative à Batappli pour artisans énergie',
    intro:
      'Batappli est un acteur installé du logiciel bâtiment. Chiffr se positionne différemment : une app plus spécialisée pour les artisans énergie qui veulent des devis guidés par métier.',
    sourceName: 'Batappli',
    sourceUrl: 'https://www.batappli.fr/',
    sourceSummary:
      'Batappli met en avant des fonctions bâtiment comme devis, facturation, suivi chantier, bibliothèque de prix BTP, planning, relances et centralisation des données clients.',
    goodFit: [
      'Artisans qui veulent un logiciel bâtiment complet.',
      'Entreprises qui utilisent des bibliothèques d’ouvrages BTP.',
      'Structures qui veulent chantier, marge, documents et suivi plus général.',
    ],
    chiffrAngle:
      'Chiffr vise moins large : il veut aller plus loin sur les devis énergie, avec des modèles concrets et des actions adaptées aux métiers PAC, clim, VMC, IRVE et solaire.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Batappli'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Batappli'),
  },

  {
    slug: 'alternative-progbat',
    competitorName: 'ProGBat',
    title: 'Alternative ProGBat pour artisans énergie | Chiffr',
    metaDescription:
      'Comparez ProGBat et Chiffr : logiciel BTP généraliste ou outil spécialisé devis/factures pour artisans énergie.',
    h1: 'Alternative à ProGBat pour artisans énergie',
    intro:
      'ProGBat couvre des besoins BTP larges : devis, factures, chantiers et gestion. Chiffr se concentre sur les artisans énergie qui veulent créer des devis précis sans partir d’un document vide.',
    sourceName: 'ProGBat',
    sourceUrl: 'https://www.progbat.com/',
    sourceSummary:
      'ProGBat communique sur les devis, factures, acomptes, factures d’avancement, suivi des paiements, gestion chantier, tableaux de suivi et bibliothèques comme Batichiffrage.',
    goodFit: [
      'Entreprises BTP qui veulent un outil tout-en-un.',
      'Artisans qui ont besoin de fonctions chantier et gestion plus larges.',
      'TPE/PME qui veulent devis, factures, paiements et comptabilité dans un même outil.',
    ],
    chiffrAngle:
      'Chiffr est plus étroit : devis/factures spécialisés métiers énergie, avec modèles PAC, clim, VMC, IRVE et solaire.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('ProGBat'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('ProGBat'),
  },

  {
    slug: 'alternative-sage-batigest',
    competitorName: 'Sage Batigest',
    title: 'Alternative Sage Batigest pour artisans énergie | Chiffr',
    metaDescription:
      'Sage Batigest ou Chiffr ? Comparez un logiciel BTP complet avec une alternative plus simple et spécialisée artisans énergie.',
    h1: 'Alternative à Sage Batigest pour artisans énergie',
    intro:
      'Sage Batigest est une solution de gestion BTP complète. Chiffr se positionne comme une alternative plus simple en surface, pensée pour les devis et factures des artisans énergie.',
    sourceName: 'Sage Batigest',
    sourceUrl: 'https://www.sage.com/fr-fr/produits/sage-batigest-connect/',
    sourceSummary:
      'Sage présente Batigest Connect comme un logiciel de gestion BTP pour artisans et PME, couvrant devis, facturation, suivi de chantier et gestion commerciale selon les offres.',
    goodFit: [
      'PME BTP qui veulent une gestion complète.',
      'Entreprises avec plusieurs utilisateurs et plusieurs chantiers.',
      'Structures qui ont besoin de stocks, achats, suivi et pilotage plus avancés.',
    ],
    chiffrAngle:
      'Chiffr n’essaie pas d’être un ERP BTP complet. Il vise un usage plus direct : préparer, envoyer, signer et facturer des devis énergie avec une UX très simple.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Sage Batigest'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Sage Batigest'),
  },

  {
    slug: 'alternative-ebp-batiment',
    competitorName: 'EBP Bâtiment',
    title: 'Alternative EBP Bâtiment pour artisans énergie | Chiffr',
    metaDescription:
      'EBP Bâtiment ou Chiffr ? Comparez une solution BTP complète avec un logiciel spécialisé devis/factures artisans énergie.',
    h1: 'Alternative à EBP Bâtiment pour artisans énergie',
    intro:
      'EBP Bâtiment couvre la facturation BTP, les devis, le suivi chantier et la rentabilité. Chiffr prend un angle plus spécialisé pour artisans énergie : modèles métier, PDF premium, signature, acompte et factures.',
    sourceName: 'EBP Bâtiment',
    sourceUrl: 'https://www.ebp.com/logiciel-devis-facture-batiment/',
    sourceSummary:
      'EBP met en avant des logiciels de facturation BTP pour créer et chiffrer des devis bâtiment, facturer, suivre les chantiers, gérer les règlements et piloter l’activité selon les offres.',
    goodFit: [
      'Artisans ou PME qui veulent un logiciel bâtiment plus complet.',
      'Entreprises qui cherchent des outils de chiffrage, suivi chantier et rentabilité.',
      'Structures qui veulent une gestion administrative BTP large.',
    ],
    chiffrAngle:
      'Chiffr vise les artisans énergie qui préfèrent un outil plus ciblé, plus guidé et moins généraliste pour créer leurs devis terrain.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('EBP Bâtiment'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('EBP Bâtiment'),
  },

  {
    slug: 'alternative-henrri',
    competitorName: 'Henrri',
    title: 'Alternative Henrri pour artisans énergie | Chiffr',
    metaDescription:
      'Henrri ou Chiffr ? Comparez un logiciel de facturation généraliste avec une app spécialisée pour devis artisans énergie.',
    h1: 'Alternative à Henrri pour artisans énergie',
    intro:
      'Henrri est connu pour la facturation en ligne et la gestion commerciale des TPE/PME. Chiffr se spécialise sur les devis et factures des artisans énergie avec des modèles métier concrets.',
    sourceName: 'Henrri',
    sourceUrl: 'https://www.henrri.com/',
    sourceSummary:
      'Henrri communique sur la création de devis, factures et avoirs, la personnalisation des documents, l’envoi, le paiement en ligne, la comptabilité, le reporting, les relances et la facturation électronique.',
    goodFit: [
      'TPE qui cherchent un outil de facturation généraliste.',
      'Entrepreneurs qui veulent créer devis, factures et avoirs simplement.',
      'Utilisateurs qui veulent une solution commerciale non spécifique au bâtiment.',
    ],
    chiffrAngle:
      'Chiffr est plus métier : il ne se contente pas de créer une facture ou un devis, il prépare des modèles adaptés aux chantiers énergie.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Henrri'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Henrri'),
  },

  {
    slug: 'alternative-axonaut',
    competitorName: 'Axonaut',
    title: 'Alternative Axonaut pour artisans énergie | Chiffr',
    metaDescription:
      'Axonaut ou Chiffr ? Comparez un outil de gestion d’entreprise complet avec une solution devis/factures spécialisée artisans énergie.',
    h1: 'Alternative à Axonaut pour artisans énergie',
    intro:
      'Axonaut est un outil de gestion d’entreprise complet avec devis, factures, paiement, relances et pilotage. Chiffr se concentre sur les artisans énergie qui veulent des devis métier plus guidés.',
    sourceName: 'Axonaut',
    sourceUrl: 'https://axonaut.com/',
    sourceSummary:
      'Axonaut met en avant la création de devis, factures et avoirs, le suivi de lecture, le paiement en ligne, la facturation récurrente, les relances, les contacts et des fonctions de gestion plus larges.',
    goodFit: [
      'TPE/PME qui cherchent une gestion commerciale globale.',
      'Entreprises qui veulent devis, factures, relances, paiement et contacts.',
      'Structures qui ont besoin d’un outil de gestion plus transversal.',
    ],
    chiffrAngle:
      'Chiffr ne cherche pas à couvrir toute la gestion d’entreprise. Il se concentre sur le cycle devis/factures des artisans énergie.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Axonaut'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Axonaut'),
  },

  {
    slug: 'alternative-abby',
    competitorName: 'Abby',
    title: 'Alternative Abby pour artisans énergie | Chiffr',
    metaDescription:
      'Abby ou Chiffr ? Comparez une solution de facturation indépendante avec un logiciel spécialisé devis/factures artisans énergie.',
    h1: 'Alternative à Abby pour artisans énergie',
    intro:
      'Abby s’adresse notamment aux indépendants et micro-entrepreneurs avec facturation, devis, signature, paiement et obligations administratives. Chiffr vise un besoin plus métier : les devis énergie terrain.',
    sourceName: 'Abby',
    sourceUrl: 'https://abby.fr/',
    sourceSummary:
      'Abby communique sur la facturation pour indépendants, avec devis et factures, e-signature, paiement en ligne, facturation électronique et fonctions liées aux déclarations URSSAF.',
    goodFit: [
      'Indépendants qui veulent gérer facturation et obligations administratives.',
      'Micro-entrepreneurs qui veulent un outil simple de devis/factures.',
      'Profils qui cherchent une solution généraliste indépendante.',
    ],
    chiffrAngle:
      'Chiffr est plus spécialisé chantier énergie : modèles PAC, clim, VMC, IRVE, solaire, photos terrain, acompte et factures liées au devis.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Abby'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Abby'),
  },

  {
    slug: 'alternative-evoliz',
    competitorName: 'Evoliz',
    title: 'Alternative Evoliz pour artisans énergie | Chiffr',
    metaDescription:
      'Evoliz ou Chiffr ? Comparez une solution de facturation/comptabilité en ligne avec une app spécialisée artisans énergie.',
    h1: 'Alternative à Evoliz pour artisans énergie',
    intro:
      'Evoliz met en avant la facturation, les devis, le suivi des impayés et la gestion en ligne. Chiffr se différencie par son approche spécialisée devis/factures pour artisans énergie.',
    sourceName: 'Evoliz',
    sourceUrl: 'https://www.evoliz.com/',
    sourceSummary:
      'Evoliz communique sur la création de devis et factures, l’envoi, le suivi de statut, la transformation en facture, les rappels de paiement, le suivi des impayés et la gestion en ligne.',
    goodFit: [
      'Entreprises qui veulent une facturation en ligne généraliste.',
      'TPE qui veulent suivre devis, factures et impayés.',
      'Utilisateurs qui cherchent une solution orientée gestion administrative.',
    ],
    chiffrAngle:
      'Chiffr prend un angle plus terrain : modèles de devis énergie, photos chantier, PDF premium, signature, acompte et suivi client par chantier.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Evoliz'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Evoliz'),
  },

  {
    slug: 'alternative-artinove',
    competitorName: 'Artinove',
    title: 'Alternative Artinove pour artisans énergie | Chiffr',
    metaDescription:
      'Artinove ou Chiffr ? Comparez une app de gestion pour artisans avec un logiciel spécialisé devis énergie, PAC, clim, VMC, IRVE et solaire.',
    h1: 'Alternative à Artinove pour artisans énergie',
    intro:
      'Artinove se présente comme une application de gestion pour artisans, indépendants et TPE. Chiffr prend un positionnement plus étroit : devis et factures pour artisans énergie.',
    sourceName: 'Artinove',
    sourceUrl: 'https://www.artinove.fr/',
    sourceSummary:
      'Artinove communique sur une application de gestion pour artisans, indépendants et TPE, avec devis, factures, relances, clients, gestion centralisée et accès web/mobile.',
    goodFit: [
      'Artisans qui cherchent une application de gestion généraliste.',
      'Indépendants qui veulent centraliser devis, factures et relances.',
      'TPE qui veulent un outil simple pour la gestion quotidienne.',
    ],
    chiffrAngle:
      'Chiffr reste plus spécialisé énergie/CVC : il guide les devis PAC, clim, chauffage, VMC, IRVE, solaire et chauffe-eau thermodynamique.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: defaultComparison('Artinove'),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: defaultFaqs('Artinove'),
  },
];

export function getCompetitorAlternativeBySlug(slug: string) {
  return competitorAlternatives.find((alternative) => alternative.slug === slug);
}