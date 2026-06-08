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

const defaultRelatedLinks: SeoGuideLink[] = [
  { label: 'Modèles de devis', href: '/modeles-devis' },
  { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
  { label: 'Tarifs Chiffr', href: '/tarifs' },
  { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
  { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
  { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
];

const defaultChiffrBenefits = [
  'Modèles métier adaptés aux artisans énergie.',
  'Lignes de devis préparées selon le type de chantier.',
  'Prix à renseigner clairement signalés.',
  'Photos chantier liées au dossier client.',
  'PDF premium prêt à envoyer.',
  'Signature, acompte, facture et relance dans le même suivi.',
];

const defaultFaqs = (topic: string): SeoGuideFaq[] => [
  {
    question: `Chiffr peut-il aider pour ${topic} ?`,
    answer:
      'Oui. Chiffr aide les artisans énergie à partir d’un modèle métier, compléter les lignes utiles, générer un PDF professionnel, faire signer, demander un acompte et facturer proprement.',
  },
  {
    question: 'Faut-il vérifier les prix avant d’envoyer le devis ?',
    answer:
      'Oui. Chiffr peut préparer la structure du devis, mais l’artisan garde la main sur les prix, les quantités, les marques, les options et les conditions.',
  },
  {
    question: 'La TVA est-elle calculée automatiquement ?',
    answer:
      'Chiffr peut aider à organiser le devis, mais le taux de TVA doit toujours être vérifié selon le chantier, le logement, la nature des travaux et la réglementation applicable.',
  },
  {
    question: 'Peut-on ajouter des photos chantier au devis ?',
    answer:
      'Oui. Les photos chantier peuvent être liées au dossier, et certaines peuvent être intégrées au PDF selon le besoin.',
  },
  {
    question: 'Chiffr remplace-t-il un devis Word ou Excel ?',
    answer:
      'Oui. Chiffr vise à remplacer les devis manuels par une structure métier plus claire, plus rapide et mieux reliée à la signature, l’acompte, la facture et le suivi client.',
  },
];

export const seoGuides: SeoGuidePage[] = [
  {
    slug: 'comment-faire-un-devis-pac-air-eau',
    title: 'Comment faire un devis PAC air/eau | Guide artisan',
    metaDescription:
      'Découvrez comment structurer un devis PAC air/eau : matériel, pose, raccordements, options, mise en service, acompte et points à vérifier.',
    h1: 'Comment faire un devis PAC air/eau clair et complet ?',
    eyebrow: 'Guide devis PAC air/eau',
    intro:
      'Un devis PAC air/eau ne se résume pas à une ligne “pompe à chaleur”. Pour rassurer le client et éviter les oublis, il faut structurer le matériel, la pose, les raccordements, les options, la mise en service, l’acompte et la suite du dossier.',
    searchIntent:
      'L’artisan cherche une méthode concrète pour créer un devis PAC air/eau complet et professionnel.',
    problemTitle: 'Le risque : un devis trop vague',
    problemText:
      'Un devis PAC air/eau trop court peut laisser des zones floues : matériel exact, dépose, raccordements, électricité, désembouage, accessoires, mise en service ou conditions de paiement.',
    stepsTitle: 'Les étapes pour préparer le devis',
    steps: [
      {
        title: 'Identifier le chantier',
        text: 'Maison, rénovation, remplacement chaudière, accès, emplacement extérieur, local technique et contraintes client.',
      },
      {
        title: 'Décrire le matériel principal',
        text: 'PAC air/eau, module hydraulique, accessoires, puissance, marque et modèle à adapter selon l’étude du chantier.',
      },
      {
        title: 'Ajouter les raccordements',
        text: 'Raccordements hydrauliques, électriques, évacuation condensats, support, protections et adaptations éventuelles.',
      },
      {
        title: 'Prévoir les options',
        text: 'Désembouage, ballon tampon, thermostat, régulation, dépose ancien générateur ou travaux complémentaires.',
      },
      {
        title: 'Préparer la suite',
        text: 'Signature, acompte, facture d’acompte, facture de solde, délais, validité du devis et conditions de paiement.',
      },
    ],
    checklistTitle: 'Points à vérifier avant envoi',
    checklist: [
      'Puissance et dimensionnement adaptés au chantier.',
      'Longueurs et contraintes de raccordement.',
      'Accès chantier et emplacement unité extérieure.',
      'Tableau électrique et protection dédiée.',
      'Dépose éventuelle de l’ancien générateur.',
      'Désembouage ou nettoyage réseau si nécessaire.',
      'TVA applicable selon le chantier.',
      'Acompte et conditions de paiement.',
    ],
    commonMistakesTitle: 'Erreurs fréquentes à éviter',
    commonMistakes: [
      'Oublier la mise en service.',
      'Ne pas distinguer matériel et main-d’œuvre.',
      'Mettre un prix global sans détail suffisant.',
      'Oublier les accessoires de pose.',
      'Ne pas prévoir la facture d’acompte ou de solde.',
    ],
    chiffrTitle: 'Comment Chiffr simplifie le devis PAC air/eau',
    chiffrText:
      'Chiffr permet de partir d’un modèle PAC air/eau avec les lignes fréquentes déjà structurées. L’artisan garde le contrôle sur les prix, les marques, les quantités et les options.',
    chiffrBenefits: defaultChiffrBenefits,
    relatedLinks: [
      { label: 'Modèle devis PAC air/eau', href: '/modele-devis-pac-air-eau' },
      { label: 'Modèle remplacement chaudière par PAC', href: '/modele-devis-remplacement-chaudiere-pac' },
      { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
      { label: 'Logiciel devis spécialisé énergie', href: '/logiciel-devis-specialise-energie' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
    ],
    faqs: defaultFaqs('faire un devis PAC air/eau'),
  },

  {
    slug: 'comment-faire-un-devis-climatisation',
    title: 'Comment faire un devis climatisation | Guide artisan',
    metaDescription:
      'Guide pour créer un devis climatisation : monosplit, multisplit, groupe extérieur, unités intérieures, liaisons frigorifiques, condensats et mise en service.',
    h1: 'Comment faire un devis climatisation propre et rassurant ?',
    eyebrow: 'Guide devis climatisation',
    intro:
      'Un devis climatisation doit expliquer clairement le matériel posé, les unités intérieures, le groupe extérieur, les liaisons frigorifiques, l’évacuation des condensats, les percements, la pose et la mise en service.',
    searchIntent:
      'L’artisan cherche une structure claire pour un devis climatisation monosplit ou multisplit.',
    problemTitle: 'Un devis clim mal détaillé crée vite des incompréhensions',
    problemText:
      'Le client doit comprendre ce qui est inclus : nombre d’unités, longueurs de liaison, supports, évacuation, protections électriques, essais et mise en service.',
    stepsTitle: 'Les étapes pour structurer le devis climatisation',
    steps: [
      {
        title: 'Définir le type d’installation',
        text: 'Monosplit, multisplit, remplacement, ajout d’une unité ou installation complète.',
      },
      {
        title: 'Lister le matériel',
        text: 'Groupe extérieur, unités intérieures, télécommandes, supports, goulottes et accessoires.',
      },
      {
        title: 'Détailler les liaisons',
        text: 'Liaisons frigorifiques, condensats, percements, passage en goulotte, longueur et contraintes.',
      },
      {
        title: 'Ajouter la pose et la mise en service',
        text: 'Main-d’œuvre, raccordement électrique, essais, tirage au vide et mise en service.',
      },
      {
        title: 'Prévoir les conditions',
        text: 'Acompte, délai, validité, garantie, exclusions éventuelles et signature client.',
      },
    ],
    checklistTitle: 'Points à vérifier',
    checklist: [
      'Nombre d’unités intérieures.',
      'Longueur des liaisons frigorifiques.',
      'Évacuation des condensats.',
      'Emplacement du groupe extérieur.',
      'Support mural ou sol.',
      'Alimentation électrique.',
      'Accès chantier et percements.',
      'Mise en service incluse ou séparée.',
    ],
    commonMistakesTitle: 'Erreurs fréquentes à éviter',
    commonMistakes: [
      'Ne pas préciser les longueurs incluses.',
      'Oublier les condensats.',
      'Ne pas détailler les percements.',
      'Oublier la mise en service.',
      'Ne pas prévoir le cas multisplit séparément.',
    ],
    chiffrTitle: 'Comment Chiffr aide sur les devis clim',
    chiffrText:
      'Chiffr propose des modèles climatisation avec les postes fréquents : unité intérieure, groupe extérieur, liaisons frigorifiques, condensats, pose, mise en service et options.',
    chiffrBenefits: defaultChiffrBenefits,
    relatedLinks: [
      { label: 'Modèle devis clim monosplit', href: '/modele-devis-clim-monosplit' },
      { label: 'Modèle devis clim multisplit', href: '/modele-devis-clim-multisplit' },
      { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
      { label: 'Logiciel devis avec photos chantier', href: '/logiciel-devis-avec-photos-chantier' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
    ],
    faqs: defaultFaqs('faire un devis climatisation'),
  },

  {
    slug: 'comment-faire-un-devis-vmc',
    title: 'Comment faire un devis VMC | Simple flux et double flux',
    metaDescription:
      'Guide pour faire un devis VMC : simple flux, double flux, caisson, gaines, bouches, réseau, équilibrage, mise en service et points à vérifier.',
    h1: 'Comment faire un devis VMC simple flux ou double flux ?',
    eyebrow: 'Guide devis VMC',
    intro:
      'Un devis VMC doit décrire le système installé, le réseau, les bouches, les gaines, le caisson, les percements, les réglages et la mise en service. La structure varie fortement entre simple flux et double flux.',
    searchIntent:
      'L’artisan cherche une méthode pour structurer un devis VMC clair.',
    problemTitle: 'La VMC est souvent sous-détaillée dans les devis',
    problemText:
      'Un devis trop court peut oublier le réseau, les bouches, l’équilibrage, l’accès combles, les percements ou les contraintes d’installation.',
    stepsTitle: 'Les étapes pour créer le devis VMC',
    steps: [
      {
        title: 'Identifier le type de VMC',
        text: 'Simple flux autoréglable, hygroréglable, double flux ou remplacement d’un système existant.',
      },
      {
        title: 'Lister les composants',
        text: 'Caisson, gaines, bouches, sorties toiture ou façade, accessoires et fixations.',
      },
      {
        title: 'Décrire le réseau',
        text: 'Longueurs, pièces concernées, passage en combles, percements et contraintes d’accès.',
      },
      {
        title: 'Ajouter la pose',
        text: 'Main-d’œuvre, raccordement électrique, essais, réglages et nettoyage éventuel.',
      },
      {
        title: 'Prévoir la réception',
        text: 'Contrôle, explication client, photos chantier et facture de solde si nécessaire.',
      },
    ],
    checklistTitle: 'Points à vérifier',
    checklist: [
      'Type de VMC.',
      'Nombre de bouches.',
      'Accès combles ou faux plafond.',
      'Passage des gaines.',
      'Sortie toiture ou façade.',
      'Raccordement électrique.',
      'Équilibrage ou réglage.',
      'TVA et conditions de paiement.',
    ],
    commonMistakesTitle: 'Erreurs fréquentes',
    commonMistakes: [
      'Oublier les bouches.',
      'Ne pas préciser le réseau.',
      'Sous-estimer l’accès chantier.',
      'Ne pas distinguer simple flux et double flux.',
      'Oublier les réglages ou essais.',
    ],
    chiffrTitle: 'Comment Chiffr simplifie les devis VMC',
    chiffrText:
      'Chiffr aide à partir d’un modèle VMC simple flux ou double flux, avec les lignes adaptées au type d’installation.',
    chiffrBenefits: defaultChiffrBenefits,
    relatedLinks: [
      { label: 'Modèle devis VMC simple flux', href: '/modele-devis-vmc-simple-flux' },
      { label: 'Modèle devis VMC double flux', href: '/modele-devis-vmc-double-flux' },
      { label: 'Logiciel devis VMC', href: '/logiciel-devis-vmc' },
      { label: 'Logiciel devis spécialisé énergie', href: '/logiciel-devis-specialise-energie' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Contact', href: '/contact' },
    ],
    faqs: defaultFaqs('faire un devis VMC'),
  },

  {
    slug: 'comment-faire-un-devis-borne-recharge',
    title: 'Devis borne recharge IRVE | Guide artisan Chiffr',
    metaDescription:
      'Guide pour faire un devis borne de recharge IRVE : borne 7 kW ou 22 kW, protections, câblage, pose, mise en service et points à vérifier.',
    h1: 'Comment faire un devis borne de recharge IRVE ?',
    eyebrow: 'Guide devis IRVE',
    intro:
      'Un devis borne de recharge doit détailler la borne, la puissance, les protections électriques, le câblage, la pose, la configuration, les essais et la mise en service.',
    searchIntent:
      'L’artisan cherche une structure concrète pour créer un devis borne de recharge.',
    problemTitle: 'Un devis IRVE doit être précis sur l’électricité',
    problemText:
      'La puissance, la distance au tableau, les protections, le cheminement du câble et la mise en service doivent être clairement identifiés.',
    stepsTitle: 'Les étapes pour préparer un devis IRVE',
    steps: [
      {
        title: 'Identifier le besoin client',
        text: 'Recharge résidentielle, copropriété, entreprise, puissance souhaitée, usage quotidien et contraintes du site.',
      },
      {
        title: 'Choisir la puissance',
        text: 'Borne 7 kW, 22 kW ou autre configuration selon l’installation électrique et le besoin.',
      },
      {
        title: 'Détailler les protections',
        text: 'Protection dédiée, différentiel, disjoncteur, coffret éventuel et conformité à vérifier.',
      },
      {
        title: 'Prévoir le câblage',
        text: 'Longueur, cheminement, goulotte, percement, gaine, passage intérieur ou extérieur.',
      },
      {
        title: 'Ajouter la pose et la mise en service',
        text: 'Fixation, raccordement, configuration, essais, explication client et document final.',
      },
    ],
    checklistTitle: 'Points à vérifier',
    checklist: [
      'Puissance souhaitée.',
      'Distance au tableau.',
      'Protections électriques.',
      'Cheminement du câble.',
      'Configuration de la borne.',
      'Accès chantier.',
      'Essais et mise en service.',
      'Qualification et réglementation applicable.',
    ],
    commonMistakesTitle: 'Erreurs fréquentes',
    commonMistakes: [
      'Ne pas préciser la puissance.',
      'Oublier les protections.',
      'Sous-estimer la longueur de câble.',
      'Ne pas détailler le cheminement.',
      'Oublier la mise en service.',
    ],
    chiffrTitle: 'Comment Chiffr aide sur les devis IRVE',
    chiffrText:
      'Chiffr propose des modèles IRVE pour borne 7 kW ou 22 kW, avec les lignes utiles : borne, protections, câblage, pose, configuration et essais.',
    chiffrBenefits: defaultChiffrBenefits,
    relatedLinks: [
      { label: 'Modèle devis borne recharge 7 kW', href: '/modele-devis-borne-recharge-7kw' },
      { label: 'Modèle devis borne recharge 22 kW', href: '/modele-devis-borne-recharge-22kw' },
      { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
      { label: 'Logiciel devis avec acompte', href: '/logiciel-devis-avec-acompte' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
    ],
    faqs: defaultFaqs('faire un devis borne de recharge'),
  },

  {
    slug: 'que-mettre-dans-un-devis-pac',
    title: 'Que mettre dans un devis PAC ? | Lignes à prévoir',
    metaDescription:
      'Découvrez les lignes à prévoir dans un devis PAC : matériel, pose, raccordements, électricité, dépose, désembouage, mise en service et acompte.',
    h1: 'Que mettre dans un devis PAC pour éviter les oublis ?',
    eyebrow: 'Lignes devis PAC',
    intro:
      'Un devis PAC doit être assez détaillé pour expliquer au client ce qui est inclus, ce qui reste optionnel et ce qui dépend des contraintes du chantier.',
    searchIntent:
      'L’artisan cherche une liste de lignes à mettre dans un devis pompe à chaleur.',
    problemTitle: 'Le devis PAC peut vite oublier des postes importants',
    problemText:
      'Entre le matériel, la pose, les raccordements, l’électricité, la dépose et la mise en service, un devis PAC doit être structuré avec méthode.',
    stepsTitle: 'Les blocs à prévoir',
    steps: [
      {
        title: 'Matériel principal',
        text: 'Pompe à chaleur, module hydraulique, ballon éventuel, régulation et accessoires.',
      },
      {
        title: 'Pose et raccordements',
        text: 'Main-d’œuvre, raccordements hydrauliques, électriques, support et liaisons.',
      },
      {
        title: 'Travaux complémentaires',
        text: 'Dépose ancien générateur, désembouage, adaptation réseau et évacuation.',
      },
      {
        title: 'Mise en service',
        text: 'Contrôle, essais, réglages, explications au client et documents éventuels.',
      },
      {
        title: 'Conditions',
        text: 'Acompte, validité, délai, TVA à vérifier, garanties et modalités de paiement.',
      },
    ],
    checklistTitle: 'Liste de lignes possibles',
    checklist: [
      'Pompe à chaleur air/eau.',
      'Module hydraulique intérieur.',
      'Ballon tampon optionnel.',
      'Raccordements hydrauliques.',
      'Protection électrique dédiée.',
      'Support unité extérieure.',
      'Dépose ancien générateur.',
      'Désembouage optionnel.',
      'Main-d’œuvre installation.',
      'Mise en service.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Mettre une seule ligne globale.',
      'Oublier les adaptations réseau.',
      'Oublier les protections électriques.',
      'Ne pas préciser les options.',
      'Oublier l’acompte et la facture liée.',
    ],
    chiffrTitle: 'Chiffr prépare les lignes PAC',
    chiffrText:
      'Chiffr propose une base de devis PAC avec les postes fréquents, puis l’artisan adapte selon son chantier.',
    chiffrBenefits: defaultChiffrBenefits,
    relatedLinks: [
      { label: 'Modèle devis PAC air/eau', href: '/modele-devis-pac-air-eau' },
      { label: 'Comment faire un devis PAC air/eau', href: '/comment-faire-un-devis-pac-air-eau' },
      { label: 'Logiciel devis pompe à chaleur', href: '/logiciel-devis-pompe-a-chaleur' },
      { label: 'Logiciel devis avec facture acompte', href: '/logiciel-devis-avec-facture-acompte' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
    ],
    faqs: defaultFaqs('savoir quoi mettre dans un devis PAC'),
  },

  {
    slug: 'que-mettre-dans-un-devis-climatisation',
    title: 'Que mettre dans un devis climatisation ? | Lignes à prévoir',
    metaDescription:
      'Liste des lignes à prévoir dans un devis climatisation : unité intérieure, groupe extérieur, liaisons frigorifiques, condensats, pose et mise en service.',
    h1: 'Que mettre dans un devis climatisation ?',
    eyebrow: 'Lignes devis climatisation',
    intro:
      'Un devis climatisation doit détailler le matériel, les liaisons, les condensats, la pose, les percements, les protections et la mise en service.',
    searchIntent:
      'L’artisan cherche les postes à mettre dans un devis climatisation.',
    problemTitle: 'Le devis clim doit éviter les zones floues',
    problemText:
      'Le client doit comprendre le nombre d’unités, la longueur des liaisons, les accessoires, les travaux inclus et les limites du devis.',
    stepsTitle: 'Les blocs à prévoir',
    steps: [
      {
        title: 'Matériel',
        text: 'Groupe extérieur, unité intérieure, télécommande, support, goulottes et accessoires.',
      },
      {
        title: 'Liaisons',
        text: 'Liaisons frigorifiques, condensats, percement, cheminement et longueur incluse.',
      },
      {
        title: 'Pose',
        text: 'Installation unité intérieure, groupe extérieur, raccordements et finitions.',
      },
      {
        title: 'Mise en service',
        text: 'Tirage au vide, essais, contrôle, réglages et explications au client.',
      },
      {
        title: 'Conditions',
        text: 'Acompte, délai, validité, TVA à vérifier, garantie et conditions de règlement.',
      },
    ],
    checklistTitle: 'Lignes possibles',
    checklist: [
      'Unité intérieure murale.',
      'Groupe extérieur.',
      'Support mural ou sol.',
      'Liaison frigorifique.',
      'Goulotte de finition.',
      'Évacuation condensats.',
      'Raccordement électrique.',
      'Main-d’œuvre pose.',
      'Mise en service.',
      'Forfait déplacement.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Oublier les condensats.',
      'Ne pas préciser les longueurs incluses.',
      'Oublier les percements.',
      'Ne pas distinguer monosplit et multisplit.',
      'Ne pas indiquer la mise en service.',
    ],
    chiffrTitle: 'Chiffr structure les devis climatisation',
    chiffrText:
      'Chiffr aide à démarrer depuis un modèle clim monosplit ou multisplit, avec les lignes utiles et les prix à compléter.',
    chiffrBenefits: defaultChiffrBenefits,
    relatedLinks: [
      { label: 'Modèle devis clim monosplit', href: '/modele-devis-clim-monosplit' },
      { label: 'Modèle devis clim multisplit', href: '/modele-devis-clim-multisplit' },
      { label: 'Comment faire un devis climatisation', href: '/comment-faire-un-devis-climatisation' },
      { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
      { label: 'Logiciel devis mobile artisan', href: '/logiciel-devis-mobile-artisan' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
    ],
    faqs: defaultFaqs('savoir quoi mettre dans un devis climatisation'),
  },

  {
    slug: 'facture-acompte-artisan-energie',
    title: 'Facture acompte artisan énergie | Guide Chiffr',
    metaDescription:
      'Guide pour gérer une facture d’acompte artisan énergie : devis signé, acompte, paiement, facture de solde et suivi client.',
    h1: 'Facture d’acompte artisan énergie : comment garder un dossier propre ?',
    eyebrow: 'Facture acompte artisan',
    intro:
      'Pour les chantiers énergie, l’acompte sert souvent à sécuriser le dossier et le matériel. Le plus important est de garder un lien clair entre devis signé, paiement, facture d’acompte et facture de solde.',
    searchIntent:
      'L’artisan cherche comment gérer une facture d’acompte liée à un devis.',
    problemTitle: 'L’acompte devient vite confus s’il est séparé du devis',
    problemText:
      'Sans suivi clair, l’artisan peut perdre le lien entre le devis accepté, le paiement reçu, la facture d’acompte et le solde restant.',
    stepsTitle: 'Les étapes pour gérer l’acompte',
    steps: [
      {
        title: 'Prévoir l’acompte dans le devis',
        text: 'Indiquer clairement les conditions de paiement et le montant ou pourcentage demandé.',
      },
      {
        title: 'Faire signer le devis',
        text: 'La signature permet de garder une trace claire de l’accord client.',
      },
      {
        title: 'Demander le paiement',
        text: 'L’acompte peut être demandé après acceptation du devis, selon vos conditions.',
      },
      {
        title: 'Émettre la facture d’acompte',
        text: 'La facture d’acompte doit rester liée au dossier client et au devis initial.',
      },
      {
        title: 'Suivre le solde',
        text: 'À la fin du chantier, le reste à encaisser doit être visible pour créer la facture de solde.',
      },
    ],
    checklistTitle: 'Points à vérifier',
    checklist: [
      'Devis accepté ou signé.',
      'Montant de l’acompte clair.',
      'Conditions de paiement indiquées.',
      'Facture d’acompte générée.',
      'Paiement suivi.',
      'Reste à encaisser visible.',
      'Facture de solde prévue.',
      'Historique client conservé.',
    ],
    commonMistakesTitle: 'Erreurs fréquentes',
    commonMistakes: [
      'Demander un acompte sans conditions claires.',
      'Oublier la facture d’acompte.',
      'Perdre le lien entre acompte et solde.',
      'Ne pas suivre le reste à encaisser.',
      'Faire les factures dans un outil séparé du devis.',
    ],
    chiffrTitle: 'Chiffr relie devis, acompte et factures',
    chiffrText:
      'Chiffr est pensé pour suivre le dossier complet : devis, signature, acompte, facture d’acompte, solde, relance et historique client.',
    chiffrBenefits: [
      'Acompte lié au devis.',
      'Signature client.',
      'Facture d’acompte.',
      'Facture de solde ou finale.',
      'Suivi du reste à encaisser.',
      'Relances client.',
    ],
    relatedLinks: [
      { label: 'Logiciel devis avec acompte', href: '/logiciel-devis-avec-acompte' },
      { label: 'Logiciel devis avec facture acompte', href: '/logiciel-devis-avec-facture-acompte' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Contact', href: '/contact' },
    ],
    faqs: defaultFaqs('gérer une facture d’acompte artisan'),
  },

  {
    slug: 'facture-solde-chantier',
    title: 'Facture de solde chantier | Guide artisan énergie',
    metaDescription:
      'Comment gérer une facture de solde chantier après acompte : devis, facture d’acompte, reste à encaisser, facture finale et suivi client.',
    h1: 'Facture de solde chantier : comment éviter les oublis ?',
    eyebrow: 'Facture solde chantier',
    intro:
      'Après un devis signé et un acompte encaissé, il faut garder une vue claire sur ce qui a déjà été facturé et ce qu’il reste à encaisser.',
    searchIntent:
      'L’artisan cherche comment gérer une facture de solde après un chantier.',
    problemTitle: 'Le solde est facile à oublier quand le suivi est séparé',
    problemText:
      'Si le devis, l’acompte, les paiements et les factures sont dispersés, il devient plus difficile de savoir quoi facturer à la fin.',
    stepsTitle: 'Les étapes pour gérer le solde',
    steps: [
      {
        title: 'Repartir du devis accepté',
        text: 'Le devis initial sert de base pour vérifier le total et les postes prévus.',
      },
      {
        title: 'Vérifier l’acompte',
        text: 'Identifier ce qui a déjà été demandé, facturé et encaissé.',
      },
      {
        title: 'Contrôler les éventuels changements',
        text: 'Options ajoutées, lignes modifiées ou ajustements de chantier doivent être vérifiés.',
      },
      {
        title: 'Créer la facture de solde',
        text: 'La facture de solde doit refléter le reste à encaisser.',
      },
      {
        title: 'Archiver le dossier client',
        text: 'Devis, photos, factures et paiements doivent rester disponibles dans l’historique client.',
      },
    ],
    checklistTitle: 'Points à vérifier',
    checklist: [
      'Total du devis initial.',
      'Acompte facturé.',
      'Acompte encaissé.',
      'Reste à encaisser.',
      'Travaux complémentaires éventuels.',
      'TVA applicable.',
      'PDF facture propre.',
      'Historique client à jour.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Ne pas déduire l’acompte.',
      'Oublier une option validée.',
      'Créer une facture sans lien avec le devis.',
      'Ne pas suivre l’encaissement.',
      'Ne pas relancer le client si le paiement tarde.',
    ],
    chiffrTitle: 'Chiffr suit le facturé, encaissé et reste à encaisser',
    chiffrText:
      'Chiffr aide à garder le lien entre devis, facture d’acompte, facture de solde et suivi client.',
    chiffrBenefits: [
      'Facture de solde liée au devis.',
      'Vue sur acompte et reste à encaisser.',
      'PDF facture sobre et professionnel.',
      'Historique client.',
      'Relance paiement.',
      'Suivi du dossier après chantier.',
    ],
    relatedLinks: [
      { label: 'Logiciel devis avec facture acompte', href: '/logiciel-devis-avec-facture-acompte' },
      { label: 'Logiciel devis avec relance client', href: '/logiciel-devis-avec-relance-client' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Contact', href: '/contact' },
    ],
    faqs: defaultFaqs('faire une facture de solde chantier'),
  },

  {
    slug: 'relance-devis-artisan',
    title: 'Relance devis artisan | Méthode et suivi client',
    metaDescription:
      'Comment relancer un devis artisan sans perdre le fil : devis envoyé, signature, acompte, paiement, facture et suivi client.',
    h1: 'Relance devis artisan : comment ne plus perdre les dossiers envoyés ?',
    eyebrow: 'Relance devis artisan',
    intro:
      'Un devis envoyé mais jamais relancé peut devenir une vente perdue. La relance doit être simple, utile et reliée au statut du dossier : devis, signature, acompte, paiement ou facture.',
    searchIntent:
      'L’artisan cherche une méthode pour relancer ses devis et mieux suivre les clients.',
    problemTitle: 'Le vrai problème n’est pas le devis, c’est le suivi après l’envoi',
    problemText:
      'Quand les devis s’accumulent, il devient difficile de savoir qui relancer, pourquoi et à quel moment.',
    stepsTitle: 'Les étapes pour relancer proprement',
    steps: [
      {
        title: 'Identifier le statut',
        text: 'Devis envoyé, devis lu, en attente de signature, acompte demandé, paiement en attente.',
      },
      {
        title: 'Choisir le bon canal',
        text: 'Appel, SMS, email, WhatsApp ou copie de message selon la relation client.',
      },
      {
        title: 'Relancer avec contexte',
        text: 'Rappeler le chantier, le devis, la validité et la prochaine étape.',
      },
      {
        title: 'Tracer la relance',
        text: 'Garder une trace évite de relancer trop tôt ou d’oublier un client.',
      },
      {
        title: 'Transformer la relance en action',
        text: 'Signature, acompte, rendez-vous, modification du devis ou abandon du dossier.',
      },
    ],
    checklistTitle: 'Informations utiles pour relancer',
    checklist: [
      'Date d’envoi du devis.',
      'Montant du devis.',
      'Objet du chantier.',
      'Statut signature.',
      'Acompte demandé ou non.',
      'Dernière relance.',
      'Réponse client.',
      'Prochaine action.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Relancer sans contexte.',
      'Ne pas savoir quel devis est concerné.',
      'Oublier les devis en attente.',
      'Ne pas tracer les relances.',
      'Relancer trop tard après l’envoi.',
    ],
    chiffrTitle: 'Chiffr affiche la prochaine bonne action',
    chiffrText:
      'Chiffr aide à suivre les devis envoyés, les signatures, les acomptes, les paiements et les factures pour relancer au bon moment.',
    chiffrBenefits: [
      'Relance devis.',
      'Relance signature.',
      'Relance acompte.',
      'Historique client.',
      'Statuts clairs.',
      'Dashboard métier.',
    ],
    relatedLinks: [
      { label: 'Logiciel devis avec relance client', href: '/logiciel-devis-avec-relance-client' },
      { label: 'Logiciel devis avec signature client', href: '/logiciel-devis-avec-signature-client' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
      { label: 'Contact', href: '/contact' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
    ],
    faqs: defaultFaqs('relancer un devis artisan'),
  },

  {
    slug: 'devis-artisan-photos-chantier',
    title: 'Devis artisan avec photos chantier | Guide Chiffr',
    metaDescription:
      'Pourquoi ajouter des photos chantier à un devis artisan : ancien équipement, plaque machine, accès, tableau électrique, PDF et suivi client.',
    h1: 'Devis artisan avec photos chantier : pourquoi c’est utile ?',
    eyebrow: 'Photos chantier devis',
    intro:
      'Les photos chantier permettent de garder une trace claire du contexte : ancien équipement, accès, tableau électrique, plaque machine, emplacement unité extérieure, croquis ou état avant travaux.',
    searchIntent:
      'L’artisan cherche à comprendre comment utiliser les photos chantier dans ses devis.',
    problemTitle: 'Les photos se perdent quand elles restent dans la galerie du téléphone',
    problemText:
      'Une photo utile doit être reliée au client, au devis et au chantier. Sinon, elle devient difficile à retrouver au moment de finaliser le dossier.',
    stepsTitle: 'Comment utiliser les photos chantier',
    steps: [
      {
        title: 'Prendre les bonnes photos',
        text: 'Ancien équipement, accès, tableau électrique, emplacement, plaque machine, passage de gaines ou liaisons.',
      },
      {
        title: 'Les classer par dossier',
        text: 'Chaque photo doit être reliée au bon client et au bon devis.',
      },
      {
        title: 'Ajouter une légende',
        text: 'Une courte note aide à comprendre pourquoi la photo est utile.',
      },
      {
        title: 'Choisir les photos à mettre dans le PDF',
        text: 'Toutes les photos ne doivent pas forcément être visibles côté client.',
      },
      {
        title: 'Garder l’historique',
        text: 'Les photos restent utiles pour la facture, la relance ou un futur chantier.',
      },
    ],
    checklistTitle: 'Photos utiles',
    checklist: [
      'Ancien équipement.',
      'Plaque signalétique.',
      'Tableau électrique.',
      'Emplacement unité extérieure.',
      'Accès chantier.',
      'Passage de liaisons.',
      'Plan ou croquis.',
      'Finitions ou avant/après.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Tout laisser dans la galerie téléphone.',
      'Ne pas relier la photo au devis.',
      'Envoyer trop de photos au client.',
      'Oublier les photos techniques importantes.',
      'Ne pas distinguer photo interne et photo PDF.',
    ],
    chiffrTitle: 'Chiffr garde les photos dans le bon dossier',
    chiffrText:
      'Chiffr relie les photos chantier au devis, avec la possibilité de choisir ce qui reste interne et ce qui peut apparaître dans le PDF.',
    chiffrBenefits: [
      'Photos liées au devis.',
      'Catégories chantier.',
      'Légendes.',
      'Photos internes.',
      'Photos visibles PDF.',
      'Historique client.',
    ],
    relatedLinks: [
      { label: 'Logiciel devis avec photos chantier', href: '/logiciel-devis-avec-photos-chantier' },
      { label: 'Logiciel devis mobile artisan', href: '/logiciel-devis-mobile-artisan' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Logiciel devis climatisation', href: '/logiciel-devis-climatisation' },
      { label: 'Logiciel devis IRVE', href: '/logiciel-devis-irve' },
    ],
    faqs: defaultFaqs('ajouter des photos chantier à un devis'),
  },

  {
    slug: 'devis-artisan-prix-a-renseigner',
    title: 'Devis artisan prix à renseigner | Méthode Chiffr',
    metaDescription:
      'Pourquoi signaler les prix à renseigner dans un devis artisan : éviter les oublis, garder le contrôle et produire un devis clair.',
    h1: 'Devis artisan : pourquoi signaler les prix à renseigner ?',
    eyebrow: 'Prix à renseigner',
    intro:
      'Dans un devis métier, certaines lignes doivent être préparées sans imposer un prix automatique. Les prix à renseigner permettent de garder la structure tout en laissant l’artisan décider.',
    searchIntent:
      'L’artisan cherche une méthode pour préparer un devis sans oublier les lignes dont le prix doit être complété.',
    problemTitle: 'Un modèle utile ne doit pas inventer les prix',
    problemText:
      'Les prix varient selon le chantier, la marque, le fournisseur, la région, la marge, les quantités et les conditions. Le modèle doit aider sans remplacer l’expertise de l’artisan.',
    stepsTitle: 'Comment gérer les prix à renseigner',
    steps: [
      {
        title: 'Préparer les lignes',
        text: 'Le modèle liste les postes fréquents même si le prix exact n’est pas encore connu.',
      },
      {
        title: 'Marquer les lignes à compléter',
        text: 'Les prix à renseigner doivent être visibles pour éviter un oubli avant envoi.',
      },
      {
        title: 'Ajouter vos prix',
        text: 'L’artisan complète selon son fournisseur, sa marge, le chantier et ses habitudes.',
      },
      {
        title: 'Vérifier les totaux',
        text: 'Les totaux, TVA et conditions doivent être relus avant envoi.',
      },
      {
        title: 'Envoyer seulement un devis validé',
        text: 'Le client ne doit recevoir qu’un document propre, complet et assumé.',
      },
    ],
    checklistTitle: 'Lignes souvent à compléter',
    checklist: [
      'Matériel principal.',
      'Options.',
      'Accessoires.',
      'Main-d’œuvre.',
      'Déplacement.',
      'Désembouage.',
      'Mise en service.',
      'Travaux complémentaires.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Inventer des prix par défaut.',
      'Envoyer un devis avec une ligne non complétée.',
      'Oublier la marge.',
      'Ne pas vérifier la TVA.',
      'Ne pas adapter au chantier réel.',
    ],
    chiffrTitle: 'Chiffr propose la structure, l’artisan garde le contrôle',
    chiffrText:
      'Chiffr peut signaler les lignes à prix à renseigner pour éviter les oublis tout en laissant l’artisan décider du prix final.',
    chiffrBenefits: [
      'Lignes préparées.',
      'Prix à compléter visibles.',
      'Contrôle artisan.',
      'Modèles métier.',
      'PDF propre.',
      'Vérification avant envoi.',
    ],
    relatedLinks: [
      { label: 'Modèles de devis', href: '/modeles-devis' },
      { label: 'Modèle devis PAC air/eau', href: '/modele-devis-pac-air-eau' },
      { label: 'Modèle devis clim monosplit', href: '/modele-devis-clim-monosplit' },
      { label: 'Logiciel devis spécialisé énergie', href: '/logiciel-devis-specialise-energie' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
    ],
    faqs: defaultFaqs('gérer des prix à renseigner dans un devis'),
  },

  {
    slug: 'devis-artisan-signature-acompte-facture',
    title: 'Devis artisan signature acompte facture | Cycle complet',
    metaDescription:
      'Comment gérer le cycle complet devis artisan : PDF, signature client, acompte, paiement, facture d’acompte, facture de solde et relance.',
    h1: 'Devis artisan : signature, acompte, facture et suivi client',
    eyebrow: 'Cycle complet devis artisan',
    intro:
      'Le devis n’est que le début du dossier. Pour un artisan énergie, il faut ensuite faire signer, demander un acompte, facturer, suivre le paiement et relancer si nécessaire.',
    searchIntent:
      'L’artisan cherche une méthode pour gérer tout le cycle après création du devis.',
    problemTitle: 'Un bon devis ne suffit pas si la suite est mal suivie',
    problemText:
      'Un dossier peut se perdre entre l’envoi du devis, la validation orale, l’acompte, la facture d’acompte, le solde et les relances.',
    stepsTitle: 'Le cycle complet à suivre',
    steps: [
      {
        title: 'Créer un devis clair',
        text: 'Structurer les lignes, vérifier les prix, ajouter les conditions et générer un PDF professionnel.',
      },
      {
        title: 'Faire signer',
        text: 'La signature formalise l’accord et déclenche la suite du dossier.',
      },
      {
        title: 'Demander l’acompte',
        text: 'L’acompte peut sécuriser le matériel et l’engagement client.',
      },
      {
        title: 'Créer les factures',
        text: 'Facture d’acompte, facture de solde ou facture finale selon le dossier.',
      },
      {
        title: 'Relancer et archiver',
        text: 'Suivre les paiements, relancer si besoin et conserver l’historique client.',
      },
    ],
    checklistTitle: 'Actions à suivre',
    checklist: [
      'Devis complet.',
      'PDF envoyé.',
      'Signature client.',
      'Acompte demandé.',
      'Paiement suivi.',
      'Facture d’acompte.',
      'Facture de solde.',
      'Relance client.',
    ],
    commonMistakesTitle: 'À éviter',
    commonMistakes: [
      'Séparer devis et facture.',
      'Ne pas suivre la signature.',
      'Oublier la facture d’acompte.',
      'Ne pas voir le reste à encaisser.',
      'Ne pas relancer les dossiers en attente.',
    ],
    chiffrTitle: 'Chiffr guide la suite logique du devis',
    chiffrText:
      'Chiffr ne s’arrête pas au PDF : il accompagne le dossier jusqu’à la signature, l’acompte, la facture, la relance et le suivi client.',
    chiffrBenefits: [
      'PDF premium.',
      'Signature client.',
      'Acompte.',
      'Paiement.',
      'Factures acompte/solde/finale.',
      'Relances et suivi client.',
    ],
    relatedLinks: [
      { label: 'Logiciel devis avec signature client', href: '/logiciel-devis-avec-signature-client' },
      { label: 'Logiciel devis avec acompte', href: '/logiciel-devis-avec-acompte' },
      { label: 'Logiciel devis avec facture acompte', href: '/logiciel-devis-avec-facture-acompte' },
      { label: 'Logiciel devis avec relance client', href: '/logiciel-devis-avec-relance-client' },
      { label: 'Fonctionnalités Chiffr', href: '/fonctionnalites' },
      { label: 'Tarifs Chiffr', href: '/tarifs' },
    ],
    faqs: defaultFaqs('gérer signature acompte et facture après devis'),
  },
];

export function getSeoGuideBySlug(slug: string) {
  return seoGuides.find((guide) => guide.slug === slug);
}