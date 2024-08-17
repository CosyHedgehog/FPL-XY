export interface Player {
  [key: string]: any;
  team: string;
  name: string;
  fpl_id: number;
  assists: number[];
  assists_t: number;
  assists_90: number;
  bonus: number[];
  bonus_t: number;
  bonus_90: number;
  bps: number[];
  bps_t: number;
  bps_90: number;
  goals: number[];
  goals_t: number;
  goals_90: number;
  goals_assists: number[];
  goals_assists_t: number;
  goals_assists_90: number;
  minutes: number[];
  minutes_t: number;
  points: number[];
  points_t: number;
  points_90: number;
  price: number;
  red_cards: number[];
  red_cards_t: number;
  red_cards_90: number;
  tsb: number;
  yellow_cards: number[];
  yellow_cards_t: number;
  yellow_cards_90: number;
  key_passes: number[];
  key_passes_t: number;
  key_passes_90: number;
  npg: number[];
  npg_t: number;
  npg_90: number;
  npg_difference: number[];
  npg_difference_t: number;
  npxAttRet: number[];
  npxAttRet_t: number;
  npxAttRet_90: number;
  npAttRet: number[];
  npAttRet_t: number;
  npAttRet_90: number;
  npxG: number[];
  npxG_t: number;
  npxG_90: number;
  npxGxA: number[];
  npxGxA_t: number;
  npxGxA_90: number;
  xGI: number[];
  xGI_t: number;
  xGI_90: number;
  xGI_FPL: number[];
  xGI_FPL_t: number;
  xGI_FPL_90: number;
  shots: number[];
  shots_t: number;
  shots_90: number;
  xG: number[];
  xG_t: number;
  xG_90: number;
  xG_FPL: number[];
  xG_FPL_t: number;
  xG_FPL_90: number;
  xA: number[];
  xA_t: number;
  xA_90: number;
  xA_FPL: number[];
  xA_FPL_t: number;
  xA_FPL_90: number;
  position: string;
  highlight: number;
  xGChain: number[];
  xGChain_t: number;
  xGChain_90: number;
  xGBuildup: number[];
  xGBuildup_t: number;
  xGBuildup_90: Number;
  GC: number[];
  GC_t: number;
  GC_90: number;
  xGC: number[];
  xGC_t: number;
  xGC_90: number;
  saves: number[];
  saves_t: number;
  saves_90: number;
  pen_saves: number[];
  pen_saves_t: number;
  pen_saves_90: number;
  pen_misses: number[];
  pen_misses_t: number;
  pen_misses_90: number;
  OG: number[];
  OG_t: number;
  OG_90: number;
  CS: number[];
  CS_t: number;
  CS_90: number;
  total_minutes: number;
}
