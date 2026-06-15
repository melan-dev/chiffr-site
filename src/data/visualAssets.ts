export type VisualImage = {
  src: string;
  alt: string;
};

export type VisualStory = {
  eyebrow: string;
  title: string;
  text: string;
  hero: VisualImage;
  cards: {
    title: string;
    text: string;
    image: VisualImage;
  }[];
  ctaLabel: string;
  ctaHref: string;
};

const img = (path: string) => path;

const ui = {
  homeTablettePac: img('/images/features/photos-chantier/photo-unite-exterieure.webp'),
  guidesTabletteAtelier: img('/images/chiffr-ui/ui-guides-tablette-atelier.webp'),
  tarifsLaptopBureau: img('/images/chiffr-ui/ui-tarifs-laptop-bureau.webp'),
  signatureClientTablette: img('/images/chiffr-ui/ui-signature-client-tablette.webp'),
  acompteMobileChantier: img('/images/chiffr-ui/ui-acompte-mobile-chantier.webp'),
  facturationLaptopFacture: img('/images/chiffr-ui/ui-facturation-laptop-facture.webp'),
  contactGuidesTablette: img('/images/chiffr-ui/ui-contact-guides-tablette.webp'),
  tarifsBureauPremium: img('/images/chiffr-ui/ui-tarifs-bureau-premium.webp'),
  guidesSalleTechnique: img('/images/chiffr-ui/ui-guides-salle-technique.webp'),
  modelesDevisLaptop: img('/images/chiffr-ui/ui-modeles-devis-laptop.webp'),
};

export const tradeVisuals: Record<string, VisualStory> = {
  pac: {
    eyebrow: 'Pompe à chaleur',
    title: 'Des dossiers PAC plus clairs, du rendez-vous à la facture',
    text:
      'Photos chantier, plaque machine, lignes de devis, signature, acompte et facture restent reliés au même client.',
    hero: {
      src: ui.homeTablettePac,
      alt: 'Technicien installant une pompe à chaleur devant une maison',
    },
    ctaLabel: 'Voir les pages PAC',
    ctaHref: '/logiciel-devis-pompe-a-chaleur',
    cards: [
      {
        title: 'Matériel visible',
        text: 'Unité extérieure, accès, contraintes et photos dans le dossier.',
        image: {
          src: img('/images/trades/pac/pac-unite-exterieure.webp'),
          alt: 'Pompe à chaleur installée près d’une maison moderne',
        },
      },
      {
        title: 'Dossier client',
        text: 'Devis, signature, acompte et factures reliés au même chantier.',
        image: {
          src: ui.signatureClientTablette,
          alt: 'Artisan et client consultant Chiffr sur tablette',
        },
      },
      {
        title: 'Suivi bureau',
        text: 'Le devis reste lisible sur ordinateur comme sur le terrain.',
        image: {
          src: ui.modelesDevisLaptop,
          alt: 'Ordinateur affichant Chiffr pour préparer un devis',
        },
      },
    ],
  },

  clim: {
    eyebrow: 'Climatisation',
    title: 'Monosplit, multisplit, entretien : un dossier plus visuel',
    text:
      'Photos, liaisons, options, mise en service et relances client restent simples à retrouver.',
    hero: {
      src: img('/images/trades/clim/clim-installation-murale.webp'),
      alt: 'Technicien installant une climatisation murale',
    },
    ctaLabel: 'Voir les pages clim',
    ctaHref: '/logiciel-devis-climatisation',
    cards: [
      {
        title: 'Installation',
        text: 'Lignes fréquentes, main-d’œuvre et options prêtes à adapter.',
        image: {
          src: img('/images/trades/clim/clim-technicien-split.webp'),
          alt: 'Technicien travaillant sur une climatisation intérieure',
        },
      },
      {
        title: 'Devis au bureau',
        text: 'Une préparation claire depuis un ordinateur ou une tablette.',
        image: {
          src: ui.modelesDevisLaptop,
          alt: 'Ordinateur affichant la page Chiffr pour devis artisans énergie',
        },
      },
      {
        title: 'Relance client',
        text: 'Un suivi clair entre terrain, devis et facture.',
        image: {
          src: ui.contactGuidesTablette,
          alt: 'Artisan consultant Chiffr sur tablette',
        },
      },
    ],
  },

  chauffage: {
    eyebrow: 'Chauffage',
    title: 'Remplacement, dépannage, entretien : un suivi plus sérieux',
    text:
      'Informations client, photos, acomptes et factures restent organisés autour du chantier.',
    hero: {
      src: img('/images/trades/chauffage/chauffage-chaudiere-maintenance.webp'),
      alt: 'Technicien chauffage intervenant sur une chaudière',
    },
    ctaLabel: 'Voir les pages chauffage',
    ctaHref: '/logiciel-devis-chauffagiste',
    cards: [
      {
        title: 'Équipement',
        text: 'Chaudière, réseau, accès et état existant mieux documentés.',
        image: {
          src: img('/images/trades/chauffage/chauffage-technicien-chaudiere.webp'),
          alt: 'Technicien travaillant sur un système de chauffage',
        },
      },
      {
        title: 'Facturation',
        text: 'Facture, acompte et solde mieux rangés.',
        image: {
          src: ui.facturationLaptopFacture,
          alt: 'Ordinateur affichant Chiffr avec documents de facturation',
        },
      },
      {
        title: 'Signature',
        text: 'Client, devis et validation reliés au même dossier.',
        image: {
          src: ui.signatureClientTablette,
          alt: 'Client et artisan autour d’une tablette Chiffr',
        },
      },
    ],
  },

  cvc: {
    eyebrow: 'CVC / frigoriste',
    title: 'Un dossier clair pour les interventions CVC',
    text:
      'Froid, maintenance, remplacement ou dépannage : Chiffr aide à présenter un devis propre et à garder les preuves utiles.',
    hero: {
      src: ui.guidesSalleTechnique,
      alt: 'Deux techniciens CVC consultant Chiffr sur tablette en salle technique',
    },
    ctaLabel: 'Voir les pages CVC',
    ctaHref: '/logiciel-devis-frigoriste-cvc',
    cards: [
      {
        title: 'Machine',
        text: 'Photos, références et notes de contrôle mieux rangées.',
        image: {
          src: img('/images/trades/cvc/cvc-detail-machine.webp'),
          alt: 'Détail d’un équipement CVC en maintenance',
        },
      },
      {
        title: 'Guide terrain',
        text: 'Les informations restent lisibles sur tablette en intervention.',
        image: {
          src: ui.guidesTabletteAtelier,
          alt: 'Techniciens consultant un guide Chiffr en atelier',
        },
      },
      {
        title: 'Équipe',
        text: 'Devis, relance, validation et facturation au même endroit.',
        image: {
          src: ui.guidesSalleTechnique,
          alt: 'Techniciens CVC consultant Chiffr en salle technique',
        },
      },
    ],
  },

  vmc: {
    eyebrow: 'VMC',
    title: 'Des devis VMC plus visuels pour expliquer l’intervention',
    text:
      'Caisson, bouches, gaines, accès combles, équilibrage et photos : Chiffr aide à montrer ce qui est prévu.',
    hero: {
      src: img('/images/trades/vmc/vmc-gaines-combles.webp'),
      alt: 'Installateur travaillant sur un réseau de ventilation',
    },
    ctaLabel: 'Voir les pages VMC',
    ctaHref: '/logiciel-devis-vmc',
    cards: [
      {
        title: 'Accès',
        text: 'Photos des combles, gaines et contraintes avant intervention.',
        image: {
          src: img('/images/trades/vmc/vmc-caisson-technique.webp'),
          alt: 'Caisson technique et gaines de ventilation',
        },
      },
      {
        title: 'Devis',
        text: 'Une présentation plus lisible pour le client final.',
        image: {
          src: ui.guidesTabletteAtelier,
          alt: 'Deux techniciens consultant Chiffr sur tablette',
        },
      },
      {
        title: 'Suivi',
        text: 'Acompte, solde et facture finale mieux suivis.',
        image: {
          src: ui.facturationLaptopFacture,
          alt: 'Ordinateur affichant Chiffr et des factures',
        },
      },
    ],
  },

  irve: {
    eyebrow: 'IRVE',
    title: 'Bornes de recharge : devis, protections et photos au même endroit',
    text:
      'Chiffr garde une trace du tableau, de la borne, des protections, de l’accès chantier et des informations client utiles.',
    hero: {
      src: ui.acompteMobileChantier,
      alt: 'Artisan sur chantier consultant Chiffr sur téléphone pour l’acompte',
    },
    ctaLabel: 'Voir les pages IRVE',
    ctaHref: '/logiciel-devis-irve',
    cards: [
      {
        title: 'Borne',
        text: 'Photos, emplacement et notes techniques mieux rangés.',
        image: {
          src: img('/images/trades/irve/irve-borne-recharge.webp'),
          alt: 'Installateur IRVE sur une borne de recharge',
        },
      },
      {
        title: 'Acompte',
        text: 'Demande d’acompte et suivi client sur mobile.',
        image: {
          src: ui.acompteMobileChantier,
          alt: 'Téléphone affichant Chiffr sur chantier',
        },
      },
      {
        title: 'Client',
        text: 'Signature, acompte et facture reliés au devis.',
        image: {
          src: ui.signatureClientTablette,
          alt: 'Client et artisan autour d’une tablette Chiffr',
        },
      },
    ],
  },

  solaire: {
    eyebrow: 'Solaire',
    title: 'Photovoltaïque : des devis plus visuels et plus rassurants',
    text:
      'Photos toiture, panneaux, options, acompte, signature et factures restent dans un dossier unique.',
    hero: {
      src: img('/images/trades/solaire/solaire-technicienne-tablette.webp'),
      alt: 'Technicienne solaire utilisant une tablette sur une toiture',
    },
    ctaLabel: 'Voir les pages solaire',
    ctaHref: '/logiciel-devis-photovoltaique',
    cards: [
      {
        title: 'Toiture',
        text: 'Photos, accès, orientation et contraintes mieux documentés.',
        image: {
          src: img('/images/trades/solaire/solaire-installation-toiture.webp'),
          alt: 'Installation de panneaux solaires sur toiture',
        },
      },
      {
        title: 'Projet',
        text: 'Un PDF plus lisible pour expliquer l’installation au client.',
        image: {
          src: ui.contactGuidesTablette,
          alt: 'Artisan consultant Chiffr sur tablette',
        },
      },
      {
        title: 'Suivi',
        text: 'Signature, acompte, solde et factures au même endroit.',
        image: {
          src: ui.facturationLaptopFacture,
          alt: 'Ordinateur affichant Chiffr et des documents de facturation',
        },
      },
    ],
  },

  generic: {
    eyebrow: 'Chiffr en situation',
    title: 'Un site plus visuel, parce que votre métier se voit sur le terrain',
    text:
      'Chiffr parle devis et factures, mais l’essentiel part toujours du chantier : photos, matériel, accès, contraintes, client et suivi.',
    hero: {
      src: ui.modelesDevisLaptop,
      alt: 'Ordinateur affichant Chiffr pour préparer un modèle de devis',
    },
    ctaLabel: 'Découvrir les fonctionnalités',
    ctaHref: '/fonctionnalites',
    cards: [
      {
        title: 'Photos chantier',
        text: 'Les images utiles restent reliées au devis.',
        image: {
          src: img('/images/features/photos-chantier/photo-unite-exterieure.webp'),
          alt: 'Photo chantier d’une unité extérieure',
        },
      },
      {
        title: 'Signature',
        text: 'Validation client, acompte et factures mieux reliés.',
        image: {
          src: ui.signatureClientTablette,
          alt: 'Artisan et client consultant Chiffr sur tablette',
        },
      },
      {
        title: 'Suivi',
        text: 'Relances et reste à encaisser plus visibles.',
        image: {
          src: ui.tarifsLaptopBureau,
          alt: 'Ordinateur affichant Chiffr au bureau',
        },
      },
    ],
  },
};

export const featureVisuals = {
  signature: {
    src: ui.signatureClientTablette,
    alt: 'Client et artisan consultant Chiffr sur tablette pour valider un devis',
  },
  facture: {
    src: ui.facturationLaptopFacture,
    alt: 'Ordinateur affichant Chiffr avec documents de facturation',
  },
  acompte: {
    src: ui.acompteMobileChantier,
    alt: 'Téléphone affichant Chiffr sur chantier pour suivre un acompte',
  },
  relance: {
    src: ui.contactGuidesTablette,
    alt: 'Artisan consultant Chiffr sur tablette pour suivre un dossier client',
  },
  photosChantier: {
    src: img('/images/chiffr-ui/ui-plaque-machine-photo.webp'),
    alt: 'Technicien photographiant une plaque machine sur un équipement technique',
  },
  plaqueMachine: {
    src: img('/images/chiffr-ui/ui-plaque-machine-photo.webp'),
    alt: 'Technicien photographiant une plaque machine sur un équipement technique',
  },
  scanEan: {
    src: img('/images/chiffr-ui/ui-scan-catalogue-mobile.webp'),
    alt: 'Technicien scannant une référence matériel dans un atelier ou un stock',
  },
  pdf: {
    src: ui.modelesDevisLaptop,
    alt: 'Ordinateur affichant Chiffr pour préparer un document propre',
  },
  dashboard: {
    src: ui.tarifsBureauPremium,
    alt: 'Bureau professionnel avec ordinateur affichant Chiffr',
  },
  reforme: {
    src: ui.facturationLaptopFacture,
    alt: 'Bureau avec ordinateur affichant Chiffr pour préparer la facturation électronique',
  },
};

export const pageVisuals = {
  tarifs: {
    src: ui.tarifsLaptopBureau,
    alt: 'Ordinateur affichant la page tarifs Chiffr dans un bureau',
  },
  contact: {
    src: ui.contactGuidesTablette,
    alt: 'Artisan consultant Chiffr sur tablette dans un espace professionnel',
  },
  guides: {
    src: ui.guidesTabletteAtelier,
    alt: 'Techniciens consultant les guides Chiffr sur tablette',
  },
  alternatives: {
    src: ui.tarifsBureauPremium,
    alt: 'Professionnel comparant Chiffr sur ordinateur',
  },
  modeles: {
    src: ui.modelesDevisLaptop,
    alt: 'Ordinateur affichant Chiffr pour préparer des modèles de devis',
  },
};

export function getVisualStoryByPath(path: string): VisualStory {
  const cleanPath = path.toLowerCase();

  if (
    cleanPath.includes('pompe-a-chaleur') ||
    cleanPath.includes('pac') ||
    cleanPath.includes('chaudiere') ||
    cleanPath.includes('chauffe-eau-thermodynamique')
  ) {
    return tradeVisuals.pac;
  }

  if (cleanPath.includes('clim')) return tradeVisuals.clim;

  if (
    cleanPath.includes('chauffage') ||
    cleanPath.includes('chauffagiste') ||
    cleanPath.includes('desembouage') ||
    cleanPath.includes('chauffe-eau')
  ) {
    return tradeVisuals.chauffage;
  }

  if (
    cleanPath.includes('frigoriste') ||
    cleanPath.includes('cvc') ||
    cleanPath.includes('froid')
  ) {
    return tradeVisuals.cvc;
  }

  if (cleanPath.includes('vmc') || cleanPath.includes('ventilation')) {
    return tradeVisuals.vmc;
  }

  if (
    cleanPath.includes('irve') ||
    cleanPath.includes('borne') ||
    cleanPath.includes('recharge')
  ) {
    return tradeVisuals.irve;
  }

  if (
    cleanPath.includes('photovoltaique') ||
    cleanPath.includes('solaire') ||
    cleanPath.includes('panneau')
  ) {
    return tradeVisuals.solaire;
  }

  return tradeVisuals.generic;
}
