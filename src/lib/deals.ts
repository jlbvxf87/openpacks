export type Tier = {
  name: string;
  price: number;
  perks: string;
  revShare?: string;
  cap?: string;
  term?: string;
  spots: number | null; // null = unlimited
  spotsRemaining: number | null;
  stripeProductId?: string;
};

export type Deal = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  raise: number;
  status: "open" | "coming-soon" | "closed";
  tiers: Tier[];
  raised: number;
};

export const deals: Deal[] = [
  {
    slug: "awa-installs",
    name: "AWA Installs",
    category: "AI Infrastructure",
    tagline: "White-glove AI workforce installation for SMBs.",
    description:
      "6 autonomous agents handle leads, outreach, follow-up 24/7. We install an AI workforce inside your business — fully configured, trained on your offer, and running in 7 days. AWA Installs is the infrastructure layer that makes AI practical for small businesses who don't have technical teams.",
    raise: 25000,
    raised: 4500,
    status: "open",
    tiers: [
      {
        name: "Supporter",
        price: 100,
        perks: "Updates + early access to new products",
        spots: null,
        spotsRemaining: null,
      },
      {
        name: "Backer",
        price: 1000,
        perks: "0.5% revenue share, 2x cap, 12 months",
        revShare: "0.5%",
        cap: "2x",
        term: "12 months",
        spots: 10,
        spotsRemaining: 7,
      },
      {
        name: "Operator",
        price: 5000,
        perks: "3% revenue share, 2x cap, 12 months",
        revShare: "3%",
        cap: "2x",
        term: "12 months",
        spots: 3,
        spotsRemaining: 2,
      },
    ],
  },
  {
    slug: "feedr",
    name: "FEEDR (T2V Engine)",
    category: "Consumer App",
    tagline: "Autonomous text-to-video pipeline.",
    description:
      "Type a prompt, get a viral-optimized video. Zero human intervention. FEEDR handles scripting, visuals, pacing, and platform optimization automatically. Built for creators who want output volume without sacrificing quality. The engine runs 24/7 and learns what performs.",
    raise: 15000,
    raised: 0,
    status: "coming-soon",
    tiers: [
      {
        name: "Supporter",
        price: 100,
        perks: "Updates + early access to new products",
        spots: null,
        spotsRemaining: null,
      },
      {
        name: "Backer",
        price: 1000,
        perks: "0.5% revenue share, 2x cap, 12 months",
        revShare: "0.5%",
        cap: "2x",
        term: "12 months",
        spots: 10,
        spotsRemaining: 10,
      },
      {
        name: "Operator",
        price: 5000,
        perks: "3% revenue share, 2x cap, 12 months",
        revShare: "3%",
        cap: "2x",
        term: "12 months",
        spots: 3,
        spotsRemaining: 3,
      },
    ],
  },
  {
    slug: "clipfit",
    name: "ClipFit",
    category: "Consumer App",
    tagline: "Swipe-based fashion feedback app.",
    description:
      "Rate outfits, get style insights, discover what works. ClipFit learns your taste through interaction and surfaces looks you'll actually wear. Built for people who want a personal stylist that doesn't cost $500/hour. The recommendation engine gets sharper with every swipe.",
    raise: 10000,
    raised: 0,
    status: "coming-soon",
    tiers: [
      {
        name: "Supporter",
        price: 100,
        perks: "Updates + early access to new products",
        spots: null,
        spotsRemaining: null,
      },
      {
        name: "Backer",
        price: 1000,
        perks: "0.5% revenue share, 2x cap, 12 months",
        revShare: "0.5%",
        cap: "2x",
        term: "12 months",
        spots: 10,
        spotsRemaining: 10,
      },
      {
        name: "Operator",
        price: 5000,
        perks: "3% revenue share, 2x cap, 12 months",
        revShare: "3%",
        cap: "2x",
        term: "12 months",
        spots: 3,
        spotsRemaining: 3,
      },
    ],
  },
  {
    slug: "chipshot-creator",
    name: "ChipShot Creator",
    category: "Consumer App (iOS)",
    tagline: "Record. Trace. Edit. Export. The all-in-one golf content app.",
    description:
      "ChipShot Creator is a native iOS app built for golfers who want to create pro-level content without a production crew. Film your shots at 60fps, and the app runs them through a 7-step shot tracer pipeline — impact detection, ball tracking via Apple Vision + CoreML, physics-based trajectory estimation, and Metal-rendered tracer paths. Apply pre-built templates, add scorecards and overlays, then export directly to TikTok, Instagram Reels, or YouTube Shorts with platform-optimized presets. Built on SwiftUI (iOS 17+) with Supabase for auth and cloud storage. This is the golf content tool that doesn't exist yet.",
    raise: 10000,
    raised: 0,
    status: "coming-soon",
    tiers: [
      {
        name: "Supporter",
        price: 100,
        perks: "Updates + early access to new products",
        spots: null,
        spotsRemaining: null,
      },
      {
        name: "Backer",
        price: 1000,
        perks: "0.5% revenue share, 2x cap, 12 months",
        revShare: "0.5%",
        cap: "2x",
        term: "12 months",
        spots: 10,
        spotsRemaining: 10,
      },
      {
        name: "Operator",
        price: 5000,
        perks: "3% revenue share, 2x cap, 12 months",
        revShare: "3%",
        cap: "2x",
        term: "12 months",
        spots: 3,
        spotsRemaining: 3,
      },
    ],
  },
];

export function getDeal(slug: string): Deal | undefined {
  return deals.find((d) => d.slug === slug);
}
