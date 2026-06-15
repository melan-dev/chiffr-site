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
  'PAC air/eau : base matériel, dépose éventuelle, unité extérieure, raccordements, accessoires, mise en service et facture de solde.',
  'Climatisation : monosplit ou multisplit, liaisons frigorifiques, condensats, supports, protection électrique et photos de pose.',
  'Chauffage : remplacement chaudière, desembouage, réseau, régulation, thermostat, acompte et suivi du reste à encaisser.',
  'CVC / frigoriste : intervention, équipement, contrôle, maintenance, mise en service et dossier client clair.',
  'VMC : simple flux, double flux, bouches, réseau, essais, réglages et éléments à faire valider au client.',
  'IRVE et solaire : protections, câblage, raccordement, pose, mise en service, photos chantier et facture finale.',
];

const defaultRelatedLinks: AlternativeLink[] = [
  { label: 'Comparer les logiciels de devis bâtiment', href: '/alternatives-logiciels-devis-batiment' },
  { label: 'Modèles de devis Chiffr', href: '/modeles-devis' },
  { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
  { label: 'Tarifs Chiffr', href: '/tarifs' },
  { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
  { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
  { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
  { label: 'Essayer gratuitement', href: '/contact' },
];

const defaultChiffrDifferences = [
  'Onboarding métier : l’artisan choisit ses spécialités et Chiffr adapte modèles, catalogue, wording et prochaines actions.',
  'Modèles métier orientés PAC, climatisation, chauffage, CVC, VMC, chauffe-eau thermodynamique, IRVE et solaire.',
  'Lignes fréquentes déjà prêtes : matériel, main-d’œuvre, raccordements, protections, mise en service, options et contrôles.',
  'Photos chantier, photo plaque machine, scan EAN et catalogue adapté pour garder un dossier client propre.',
  'Cycle complet guidé : devis → PDF premium → signature → acompte → facture d’acompte → solde/finale → relance client.',
  'Interface mobile terrain simple et version bureau plus confortable, sans transformer l’artisan en gestionnaire informatique.',
];

const comparisonRows = (competitorName: string, positioning: string, strength: string, limit: string): AlternativeComparisonRow[] => [
  {
    label: 'Positionnement',
    competitor: positioning,
    chiffr: 'Chiffr se concentre sur les artisans énergie : PAC, clim, chauffage, frigoriste/CVC, VMC, chauffe-eau thermodynamique, IRVE et solaire.',
  },
  {
    label: 'Point fort naturel',
    competitor: strength,
    chiffr: 'Chiffr vise un usage plus ciblé : préparer un devis énergie clair sans repartir d’une page blanche.',
  },
  {
    label: 'Limite possible pour un artisan énergie',
    competitor: limit,
    chiffr: 'Chiffr prépare les lignes, les contrôles et les actions selon le chantier : plaque machine, photos, raccordements, signature, acompte et facture.',
  },
  {
    label: 'Démarrage du devis',
    competitor: `Avec ${competitorName}, l’utilisateur part généralement de ses articles, ouvrages, bibliothèques ou réglages selon l’offre.` ,
    chiffr: 'Avec Chiffr, l’artisan choisit le métier et le type de chantier ; l’app propose directement la bonne structure de devis.',
  },
  {
    label: 'Terrain et dossier client',
    competitor: 'Les fonctions mobiles, client ou chantier dépendent du périmètre de chaque solution et de l’offre choisie.',
    chiffr: 'Chiffr relie devis, photos chantier, signature, acompte, factures, relances et historique client dans le même dossier.',
  },
  {
    label: 'Réforme facturation électronique',
    competitor: 'La plupart des acteurs communiquent progressivement sur la conformité ou la préparation à la réforme 2026–2027.',
    chiffr: 'Chiffr prépare des dossiers structurés : client, mentions, acompte, solde, factures, paiements et informations utiles au même endroit.',
  },
];

const faqs = (competitorName: string, angle: string): AlternativeFaq[] => [
  {
    question: `Chiffr est-il une vraie alternative à ${competitorName} ?`,
    answer: `Oui, si votre priorité est de créer des devis énergie plus guidés. ${competitorName} peut rester pertinent pour d’autres besoins ; Chiffr se différencie par ses modèles PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire.`,
  },
  {
    question: `Pourquoi comparer ${competitorName} avec Chiffr ?`,
    answer: `Parce que le bon choix dépend du métier. Un logiciel généraliste ou BTP large peut être très utile, mais un installateur PAC, clim ou IRVE a souvent besoin de lignes métier, photos chantier, signature, acompte et factures liées au devis.`,
  },
  {
    question: `Dans quel cas ${competitorName} peut être plus adapté ?`,
    answer: angle,
  },
  {
    question: 'Dans quel cas Chiffr est plus pertinent ?',
    answer: 'Chiffr est plus pertinent si vous voulez un outil simple en surface, mais spécialisé sur les devis/factures énergie : modèles métier, catalogue adapté, photos chantier, PDF premium, signature, acompte, factures et relances.',
  },
  {
    question: 'Chiffr est-il un logiciel BTP généraliste ?',
    answer: 'Non. Chiffr ne cherche pas à tout couvrir comme un outil généraliste. Il se concentre sur le cycle commercial des artisans énergie : préparer, envoyer, faire signer, encaisser, facturer et suivre le client.',
  },
  {
    question: 'Les modèles Chiffr sont-ils modifiables ?',
    answer: 'Oui. Chiffr donne une base métier pour éviter la page blanche, mais l’artisan garde la main sur les prix, les quantités, les remises, les options et les conditions.',
  },
];

export const competitorAlternatives: CompetitorAlternative[] = [
  {
    slug: 'alternative-obat',
    competitorName: 'Obat',
    title: 'Alternative Obat pour artisans énergie | Chiffr',
    metaDescription:
      'Obat ou Chiffr ? Comparez un logiciel bâtiment généraliste avec une alternative spécialisée pour devis PAC, clim, chauffage, VMC, IRVE et solaire.',
    h1: 'Alternative à Obat pour artisans énergie',
    intro:
      'Obat est une solution connue pour les artisans du bâtiment. Chiffr prend un angle volontairement plus spécialisé : aider les professionnels PAC, climatisation, chauffage, CVC, VMC, IRVE et solaire à produire des devis plus rapides, plus propres et mieux suivis.',
    sourceName: 'Obat',
    sourceUrl: 'https://www.obat.fr/',
    sourceSummary:
      'Obat présente un logiciel de devis et factures pour le bâtiment avec devis, factures, acomptes, avoirs, situations de travaux, bibliothèque d’ouvrages, application mobile et fonctions de pilotage selon les pages publiques consultées.',
    goodFit: [
      'Artisans du bâtiment qui veulent une solution générale déjà connue sur le marché.',
      'TPE/PME BTP qui cherchent devis, factures, situations de travaux, chantier et pilotage dans une logique large bâtiment.',
      'Entreprises qui veulent une solution transversale pour plusieurs corps de métier du BTP.',
    ],
    chiffrAngle:
      'Chiffr ne cherche pas à copier Obat. L’objectif est de proposer une alternative plus métier pour les artisans énergie qui veulent éviter la page blanche et avancer avec les bonnes lignes dès le départ.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Obat',
      'Obat se positionne comme une solution bâtiment complète pour devis, factures, situations et gestion quotidienne des artisans du BTP.',
      'Large couverture bâtiment, notoriété, documents commerciaux, fonctions de suivi et logique tout-en-un.',
      'Un artisan très spécialisé PAC, clim, IRVE ou CVC peut chercher une base plus directement orientée chantier énergie.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Obat', 'Obat peut être plus adapté si vous cherchez un logiciel bâtiment large, avec situations de travaux, gestion plus globale et couverture multi-métiers BTP.'),
  },
  {
    slug: 'alternative-tolteck',
    competitorName: 'Tolteck',
    title: 'Alternative Tolteck pour artisans énergie | Chiffr',
    metaDescription:
      'Tolteck ou Chiffr ? Comparez un logiciel devis-factures simple pour artisans avec une alternative spécialisée PAC, clim, chauffage, VMC, IRVE et solaire.',
    h1: 'Alternative à Tolteck pour artisans énergie',
    intro:
      'Tolteck est apprécié pour la création simple de devis et factures. Chiffr conserve cette exigence de simplicité, mais l’applique à un besoin plus précis : les devis et factures des artisans énergie.',
    sourceName: 'Tolteck',
    sourceUrl: 'https://www.tolteck.com/',
    sourceSummary:
      'Tolteck met en avant la création de devis et factures clairs en quelques minutes, le suivi des documents et clients, les bases d’ouvrages, un tableau de bord et un fonctionnement multi-support.',
    goodFit: [
      'Artisans qui veulent un outil simple pour devis et factures sans logique métier trop avancée.',
      'Professionnels qui privilégient une prise en main rapide et des documents propres.',
      'Entreprises qui utilisent surtout des bases d’ouvrages généralistes.',
    ],
    chiffrAngle:
      'Chiffr garde la simplicité, mais ajoute une couche métier énergie : modèles PAC, clim, VMC, IRVE, solaire, photos chantier, signature, acompte et factures liées au dossier.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Tolteck',
      'Tolteck se positionne comme un logiciel devis-factures simple et multi-support pour les artisans du bâtiment.',
      'Simplicité, documents professionnels, bases d’ouvrages et usage multi-support.',
      'Un installateur énergie peut vouloir plus de guidage sur les composants métier : liaisons frigorifiques, protections, mise en service, photos et acompte.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Tolteck', 'Tolteck peut être plus adapté si vous cherchez surtout une solution simple de devis/factures bâtiment, sans besoin fort de personnalisation métier énergie.'),
  },
  {
    slug: 'alternative-costructor',
    competitorName: 'Costructor',
    title: 'Alternative Costructor pour artisans énergie | Chiffr',
    metaDescription:
      'Costructor ou Chiffr ? Comparez une solution BTP moderne avec une alternative spécialisée devis/factures pour artisans énergie.',
    h1: 'Alternative à Costructor pour artisans énergie',
    intro:
      'Costructor met en avant une solution BTP moderne, mobile, orientée devis, factures, chantiers et rentabilité. Chiffr choisit un angle plus ciblé : la préparation de devis énergie clairs et faciles à suivre.',
    sourceName: 'Costructor',
    sourceUrl: 'https://costructor.co/',
    sourceSummary:
      'Costructor communique sur les devis, factures, gestion de chantier, rentabilité, achats, usage mobile et transformation de devis en factures selon les pages publiques consultées.',
    goodFit: [
      'Entreprises BTP qui veulent gérer devis, factures, chantiers, rentabilité et achats.',
      'Artisans qui cherchent une solution mobile moderne pour suivre plus largement leur activité BTP.',
      'Structures qui veulent mesurer marge, dépenses et avancement chantier.',
    ],
    chiffrAngle:
      'Chiffr se concentre sur un cycle plus précis : créer un devis énergie guidé, ajouter les photos, faire signer, demander un acompte, facturer et relancer le client.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Costructor',
      'Costructor se présente comme une solution BTP moderne couvrant devis, factures, chantier, rentabilité et achats.',
      'Approche mobile, pilotage chantier, rentabilité et gestion plus large du BTP.',
      'Si votre besoin principal est de produire vite des devis PAC/clim/IRVE très concrets, une approche plus spécialisée peut être plus directe.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Costructor', 'Costructor peut être plus adapté si vous voulez suivre chantiers, achats, rentabilité et pilotage BTP au-delà du devis et de la facture.'),
  },
  {
    slug: 'alternative-batappli',
    competitorName: 'Batappli',
    title: 'Alternative Batappli pour artisans énergie | Chiffr',
    metaDescription:
      'Batappli ou Chiffr ? Comparez un logiciel BTP complet avec une alternative spécialisée pour devis PAC, clim, chauffage, CVC, VMC, IRVE et solaire.',
    h1: 'Alternative à Batappli pour artisans énergie',
    intro:
      'Batappli est un acteur historique du logiciel bâtiment. Chiffr se positionne autrement : une solution plus spécialisée pour les artisans énergie qui veulent des devis guidés et un suivi client clair.',
    sourceName: 'Batappli',
    sourceUrl: 'https://www.batappli.fr/',
    sourceSummary:
      'Batappli présente un logiciel BTP complet pour professionnels du bâtiment, avec devis, factures, chantiers, situations, suivi, marge, bibliothèques et sujets de conformité selon ses pages publiques.',
    goodFit: [
      'Entreprises qui veulent un logiciel bâtiment complet et installé dans l’écosystème BTP.',
      'Artisans qui utilisent des bibliothèques d’ouvrages, métrés, situations et suivi de chantiers.',
      'Structures qui veulent une couverture large bâtiment plutôt qu’une spécialisation énergie.',
    ],
    chiffrAngle:
      'Chiffr vise moins large, mais veut aller plus loin sur les devis énergie : modèles concrets, lignes fréquentes, photos terrain, signature, acompte et factures liées au devis.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Batappli',
      'Batappli se présente comme un logiciel BTP complet pour devis, factures, chantiers et gestion bâtiment.',
      'Couverture BTP large, historique, bibliothèques, suivi de chantier, situations et marge selon les offres.',
      'Un artisan énergie peut préférer une interface plus orientée PAC, clim, VMC, IRVE et solaire dès le départ.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Batappli', 'Batappli peut être plus adapté si vous voulez une gestion BTP complète avec chantiers, situations, métrés ou bibliothèques bâtiment larges.'),
  },
  {
    slug: 'alternative-progbat',
    competitorName: 'ProGBat',
    title: 'Alternative ProGBat pour artisans énergie | Chiffr',
    metaDescription:
      'ProGBat ou Chiffr ? Comparez un logiciel BTP tout-en-un avec une solution spécialisée devis/factures pour artisans énergie.',
    h1: 'Alternative à ProGBat pour artisans énergie',
    intro:
      'ProGBat couvre une gestion BTP large : devis, factures, chantier et comptabilité. Chiffr se concentre sur un usage plus direct : créer et suivre des devis énergie sans complexité apparente.',
    sourceName: 'ProGBat',
    sourceUrl: 'https://www.progbat.com/',
    sourceSummary:
      'ProGBat communique sur un logiciel BTP tout-en-un pour devis, factures, comptabilité, gestion de chantier, suivi, signature électronique et bibliothèques comme Batichiffrage selon les pages publiques.',
    goodFit: [
      'Entreprises BTP qui veulent centraliser devis, factures, chantier et comptabilité.',
      'TPE/PME qui cherchent une solution plus complète autour de la gestion de chantier.',
      'Artisans qui veulent intégrer bibliothèques, signature et suivi dans une logique BTP large.',
    ],
    chiffrAngle:
      'Chiffr est plus étroit, mais plus métier énergie : il prépare des devis PAC, clim, VMC, IRVE et solaire avec des actions simples à suivre.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'ProGBat',
      'ProGBat se présente comme un logiciel BTP tout-en-un couvrant devis, factures, chantier et comptabilité.',
      'Périmètre large, suivi chantier, comptabilité et bibliothèques selon les offres.',
      'Si votre priorité est la rapidité terrain sur des devis énergie, un outil plus spécialisé peut demander moins de paramétrage.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('ProGBat', 'ProGBat peut être plus adapté si vous cherchez une suite BTP très large avec chantier, comptabilité et gestion plus complète de l’entreprise.'),
  },
  {
    slug: 'alternative-sage-batigest',
    competitorName: 'Sage Batigest',
    title: 'Alternative Sage Batigest pour artisans énergie | Chiffr',
    metaDescription:
      'Sage Batigest ou Chiffr ? Comparez une solution BTP complète avec une alternative plus simple et spécialisée pour artisans énergie.',
    h1: 'Alternative à Sage Batigest pour artisans énergie',
    intro:
      'Sage Batigest Connect est une solution de gestion BTP complète. Chiffr ne joue pas le même rôle : il vise une expérience plus simple en surface pour les devis et factures des artisans énergie.',
    sourceName: 'Sage Batigest',
    sourceUrl: 'https://www.sage.com/fr-fr/produits/sage-batigest-connect/',
    sourceSummary:
      'Sage présente Batigest Connect comme un logiciel de gestion pour professionnels du bâtiment, avec devis, factures, suivi de chantier, fonctionnalités de facturation électronique et connexion à l’écosystème Sage.',
    goodFit: [
      'PME BTP qui veulent une solution de gestion structurée et complète.',
      'Entreprises avec plusieurs utilisateurs, plusieurs chantiers et besoin de pilotage avancé.',
      'Structures déjà équipées ou accompagnées dans l’écosystème Sage.',
    ],
    chiffrAngle:
      'Chiffr n’essaie pas d’être une solution de gestion BTP complète. Il vise un usage plus direct : préparer, envoyer, faire signer et facturer des devis énergie avec une UX ultra simple.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Sage Batigest',
      'Sage Batigest Connect se positionne comme un logiciel de gestion BTP complet pour artisans et PME du bâtiment.',
      'Gestion structurée, suivi chantier, écosystème Sage, options et accompagnement pour entreprises plus organisées.',
      'Un artisan énergie qui veut simplement chiffrer vite sur le terrain peut trouver ce périmètre plus large que son besoin immédiat.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Sage Batigest', 'Sage Batigest peut être plus adapté si vous cherchez une gestion BTP complète, multi-utilisateurs, avec suivi chantier avancé et écosystème comptable.'),
  },
  {
    slug: 'alternative-ebp-batiment',
    competitorName: 'EBP Bâtiment',
    title: 'Alternative EBP Bâtiment pour artisans énergie | Chiffr',
    metaDescription:
      'EBP Bâtiment ou Chiffr ? Comparez une solution BTP complète avec un logiciel spécialisé devis/factures pour artisans énergie.',
    h1: 'Alternative à EBP Bâtiment pour artisans énergie',
    intro:
      'EBP Bâtiment répond à des besoins BTP larges : devis, factures, suivi chantier, rentabilité et bibliothèques. Chiffr prend un angle plus spécialisé pour les artisans énergie.',
    sourceName: 'EBP Bâtiment',
    sourceUrl: 'https://www.ebp.com/logiciel-devis-facture-batiment/',
    sourceSummary:
      'EBP met en avant des solutions de facturation BTP pour créer et chiffrer des devis bâtiment, transformer les devis en factures, gérer les factures d’avancement, suivre règlements et chantiers selon les offres.',
    goodFit: [
      'Artisans ou PME BTP qui veulent un logiciel bâtiment complet.',
      'Entreprises qui utilisent bibliothèques, tranches, variantes, métrés, attestations et suivi de règlements.',
      'Structures qui veulent une gestion administrative BTP large et éprouvée.',
    ],
    chiffrAngle:
      'Chiffr vise les artisans énergie qui préfèrent une app plus ciblée : modèles métier, photos chantier, PDF premium, signature, acompte et factures liées au devis.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'EBP Bâtiment',
      'EBP Bâtiment se positionne comme une solution BTP pour devis, factures, facturation d’avancement, suivi chantier et rentabilité selon les offres.',
      'Fonctions BTP structurées, bibliothèques, devis détaillés, facturation progressive et suivi administratif.',
      'Pour un besoin très terrain PAC/clim/VMC/IRVE, Chiffr cherche à réduire le paramétrage et guider le devis métier.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('EBP Bâtiment', 'EBP Bâtiment peut être plus adapté si vous voulez un logiciel BTP complet avec bibliothèques, suivi chantier, factures d’avancement et gestion administrative plus large.'),
  },
  {
    slug: 'alternative-henrri',
    competitorName: 'Henrri',
    title: 'Alternative Henrri pour artisans énergie | Chiffr',
    metaDescription:
      'Henrri ou Chiffr ? Comparez un logiciel de facturation généraliste avec une app spécialisée pour devis artisans énergie.',
    h1: 'Alternative à Henrri pour artisans énergie',
    intro:
      'Henrri est une solution de facturation et gestion commerciale généraliste. Chiffr se spécialise sur un besoin plus métier : devis et factures pour artisans énergie.',
    sourceName: 'Henrri',
    sourceUrl: 'https://www.henrri.com/',
    sourceSummary:
      'Henrri communique sur la création de devis, factures, avoirs, personnalisation des documents, paiement en ligne, relances, reporting, comptabilité et facturation électronique.',
    goodFit: [
      'TPE qui veulent un outil de facturation généraliste.',
      'Entrepreneurs qui cherchent devis, factures, avoirs, relances et paiement en ligne sans spécialisation bâtiment.',
      'Utilisateurs qui veulent une solution commerciale transversale.',
    ],
    chiffrAngle:
      'Chiffr ne se limite pas à créer un document : il prépare une base de devis adaptée aux chantiers énergie et guide les actions jusqu’à la facture.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Henrri',
      'Henrri se positionne comme un outil de facturation et gestion commerciale généraliste pour TPE/entrepreneurs.',
      'Facturation, devis, avoirs, relances, paiement et reporting dans une logique transversale.',
      'Un artisan PAC, clim ou IRVE peut avoir besoin de modèles métier et de lignes chantier plus spécifiques que dans un outil généraliste.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Henrri', 'Henrri peut être plus adapté si vous cherchez une facturation généraliste pour TPE, sans besoin de modèles métier énergie ou de suivi chantier spécialisé.'),
  },
  {
    slug: 'alternative-axonaut',
    competitorName: 'Axonaut',
    title: 'Alternative Axonaut pour artisans énergie | Chiffr',
    metaDescription:
      'Axonaut ou Chiffr ? Comparez un logiciel de gestion d’entreprise complet avec une solution devis/factures spécialisée artisans énergie.',
    h1: 'Alternative à Axonaut pour artisans énergie',
    intro:
      'Axonaut couvre la gestion d’entreprise : devis, factures, contacts, dépenses, trésorerie et pilotage. Chiffr prend volontairement un périmètre plus métier : les devis et factures des artisans énergie.',
    sourceName: 'Axonaut',
    sourceUrl: 'https://axonaut.com/',
    sourceSummary:
      'Axonaut met en avant la création de devis et factures conformes, la centralisation des contacts, la gestion des dépenses, la trésorerie, les paiements, les relances et des fonctions de gestion d’entreprise.',
    goodFit: [
      'TPE/PME qui veulent un outil de gestion complet au-delà du bâtiment.',
      'Entreprises qui veulent centraliser contacts, devis, factures, dépenses, trésorerie et pilotage.',
      'Structures qui cherchent une gestion transversale plutôt qu’une spécialisation métier énergie.',
    ],
    chiffrAngle:
      'Chiffr ne cherche pas à couvrir toute la gestion d’entreprise. Il se concentre sur le cycle devis/factures des artisans énergie, avec une expérience plus terrain.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Axonaut',
      'Axonaut se positionne comme un logiciel de gestion d’entreprise complet avec devis, factures, contacts, dépenses, trésorerie et pilotage.',
      'Vision globale de l’entreprise, gestion commerciale, trésorerie, dépenses et contacts.',
      'Un artisan énergie qui veut surtout chiffrer des interventions et suivre le dossier client peut vouloir moins de fonctions transversales et plus de modèles métier.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Axonaut', 'Axonaut peut être plus adapté si vous voulez gérer toute l’entreprise : contacts, dépenses, trésorerie, facturation, relances et pilotage global.'),
  },
  {
    slug: 'alternative-abby',
    competitorName: 'Abby',
    title: 'Alternative Abby pour artisans énergie | Chiffr',
    metaDescription:
      'Abby ou Chiffr ? Comparez une solution pour indépendants avec un logiciel spécialisé devis/factures artisans énergie.',
    h1: 'Alternative à Abby pour artisans énergie',
    intro:
      'Abby s’adresse notamment aux indépendants et micro-entrepreneurs avec facturation, devis, paiement, signature et obligations administratives. Chiffr vise un besoin plus chantier : devis énergie terrain.',
    sourceName: 'Abby',
    sourceUrl: 'https://abby.fr/',
    sourceSummary:
      'Abby communique sur la facturation pour indépendants, avec devis et factures conformes, e-signature, paiement en ligne, facturation électronique, comptabilité et déclarations URSSAF selon les pages publiques.',
    goodFit: [
      'Indépendants et micro-entrepreneurs qui veulent gérer facturation et obligations administratives.',
      'Profils qui veulent une solution généraliste avec devis, factures, paiement, signature et suivi administratif.',
      'Entrepreneurs qui veulent connecter facturation, comptabilité et déclarations selon leur statut.',
    ],
    chiffrAngle:
      'Chiffr est plus spécialisé chantier énergie : modèles PAC, clim, VMC, IRVE, solaire, photos terrain, acompte et factures liées au devis initial.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Abby',
      'Abby se positionne comme une solution de facturation, comptabilité et obligations administratives pour indépendants.',
      'Très orienté indépendant/micro-entreprise : facturation, paiement, signature, URSSAF et administratif.',
      'Un artisan énergie peut avoir besoin d’un outil qui parle directement PAC, clim, IRVE, photos chantier et lignes à prévoir.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Abby', 'Abby peut être plus adapté si votre priorité est la facturation et l’administratif d’indépendant, notamment avec déclaration, comptabilité et suivi généraliste.'),
  },
  {
    slug: 'alternative-evoliz',
    competitorName: 'Evoliz',
    title: 'Alternative Evoliz pour artisans énergie | Chiffr',
    metaDescription:
      'Evoliz ou Chiffr ? Comparez une solution facturation/comptabilité en ligne avec une app spécialisée artisans énergie.',
    h1: 'Alternative à Evoliz pour artisans énergie',
    intro:
      'Evoliz met l’accent sur la facturation, les devis, les relances, les impayés et la gestion en ligne. Chiffr se différencie par son approche métier énergie.',
    sourceName: 'Evoliz',
    sourceUrl: 'https://www.evoliz.com/',
    sourceSummary:
      'Evoliz communique sur la création de devis et factures, leur envoi, le suivi de statut, la transformation en facture, les rappels de paiement, le suivi des impayés et la gestion clients.',
    goodFit: [
      'Entreprises qui veulent une facturation en ligne généraliste.',
      'TPE qui veulent suivre devis, factures, règlements et impayés.',
      'Utilisateurs qui cherchent une solution orientée gestion administrative et relances.',
    ],
    chiffrAngle:
      'Chiffr prend un angle plus terrain : modèles de devis énergie, photos chantier, PDF premium, signature, acompte et suivi client par chantier.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Evoliz',
      'Evoliz se positionne comme un logiciel de facturation et gestion en ligne avec suivi des devis, factures, règlements et impayés.',
      'Facturation, relances, suivi des impayés, gestion administrative et transformation devis-facture.',
      'Un artisan énergie peut vouloir un démarrage plus métier, avec la structure du chantier déjà préparée dans le devis.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Evoliz', 'Evoliz peut être plus adapté si vous cherchez une solution facturation/relances généraliste avec suivi des impayés et gestion administrative en ligne.'),
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
      'Artinove communique sur une application de gestion 360° pour artisans, indépendants et TPE, avec devis, factures, avoirs, relances, gestion des paiements, liaison expert-comptable et accès web/mobile.',
    goodFit: [
      'Artisans qui cherchent une application de gestion généraliste.',
      'Indépendants qui veulent centraliser devis, factures, relances et paiements.',
      'TPE qui veulent une gestion quotidienne simple, avec plusieurs fonctions administratives.',
    ],
    chiffrAngle:
      'Chiffr reste plus spécialisé énergie/CVC : il guide les devis PAC, clim, chauffage, VMC, IRVE, solaire et chauffe-eau thermodynamique.',
    chiffrDifferences: defaultChiffrDifferences,
    comparison: comparisonRows(
      'Artinove',
      'Artinove se positionne comme une application de gestion 360° pour artisans, indépendants et TPE.',
      'Gestion généraliste : devis, factures, avoirs, relances, paiements, comptabilité de base et accès web/mobile selon les offres.',
      'Pour un artisan énergie, Chiffr cherche à être plus direct : modèles métier, lignes fréquentes, photos, signature, acompte et factures liées au chantier.'
    ),
    energyUseCases: defaultEnergyUseCases,
    relatedLinks: defaultRelatedLinks,
    faqs: faqs('Artinove', 'Artinove peut être plus adapté si vous voulez une application de gestion généraliste pour artisans, avec devis, factures, relances, paiements et fonctions administratives larges.'),
  },
];

export function getCompetitorAlternativeBySlug(slug: string) {
  return competitorAlternatives.find((alternative) => alternative.slug === slug);
}
