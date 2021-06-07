import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.wagyuswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.wagyuswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://wagyuswap.info",
      },
      {
        label: "Tokens",
        href: "https://wagyuswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://wagyuswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://wagyuswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.wagyuswap.finance",
      },
      {
        label: "Github",
        href: "https://github.com/wagyuswap",
      },
      {
        label: "Docs",
        href: "https://docs.wagyuswap.finance",
      },
      {
        label: "Blog",
        href: "https://wagyuswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/wagyuswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/WagyuSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/WagyuSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/WagyuSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/wagyuswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/wagyuswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/wagyuswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/WagyuSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/WagyuswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/wagyuswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/wagyuswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/WagyuSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/WagyuSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/wagyuswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
