// Configuration centrale du site Chiffr.
// ─────────────────────────────────────────────────────────────────────────────
// Lien vers l'application : tous les CTA « Essayer gratuitement » pointent ici.
// Aujourd'hui = l'app live (chiffr.web.app). Quand le domaine de marque
// app.chiffr-devis.fr sera branché, il suffit de changer cette seule ligne.
export const APP_URL = "https://chiffr.web.app";

// Libellé du CTA principal (action d'accès au produit).
export const CTA_PRIMARY = "Essayer gratuitement";

// Téléchargement de l'application de bureau Windows (vrai installeur .exe Electron,
// hébergé sur le hosting de l'app — Cloudflare Pages bloque les fichiers > 25 Mo).
// Nom de fichier sans version → le lien reste stable entre les mises à jour.
export const DOWNLOAD_URL = `${APP_URL}/Chiffr-Setup.exe`;

// ─────────────────────────────────────────────────────────────────────────────
// Conversion (audit UX) : contrat de friction + preuves factuelles.
// L'app étant en self-serve, chaque CTA primaire annonce sa friction réelle.
// Si l'app passait « pas prête », repli : CTA_PRIMARY = "Demander un accès",
// APP_URL = "/contact", CTA_TRUST = "Réponse sous 24 h · sans engagement".

// Micro-ligne sous les CTA primaires (ce qui est VRAI de l'offre).
export const CTA_TRUST = "Gratuit pour commencer · sans carte bancaire · prêt en 2 min";
// Version courte (barre CTA mobile fixe, espaces réduits).
export const CTA_TRUST_SHORT = "Gratuit · sans carte bancaire";

// Bandeau de confiance (preuves factuelles uniquement — aucun chiffre inventé).
export const TRUST_POINTS = [
  "Données hébergées en France",
  "Conforme RGPD",
  "Compatible réforme 2026",
  "Paiements sécurisés Stripe",
];
