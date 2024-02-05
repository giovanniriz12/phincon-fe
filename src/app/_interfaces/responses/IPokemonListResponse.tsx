export interface IPokemonList {
  name: string;
  url: string;
  img: string;
}

export interface IPokemonListResponse {
  count: number;
  next: string;
  previous: null | string;
  results: IPokemonList[];
  pokemonDetail: IPokemonDetail;
  pokemonStatus: string;
  myPokemons: IMyPokemons[];
  errorStatus?: string;
  renamePokemon : string;
  originalNamePokemon : string;
  renameCount : number;
}

export interface IMyPokemons {
  pokemonImg: string;
  pokemonName: string;
}

// Detail Interface
export interface IPokemonDetail {
  abilities?: AbilitiesEntity[] | null;
  base_experience: number;
  forms?:
    | AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies[]
    | null;
  game_indices?: GameIndicesEntity[] | null;
  height: number;
  held_items?: null[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: MovesEntity[] | null;
  name: string;
  order: number;
  past_abilities?: null[] | null;
  past_types?: null[] | null;
  species: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  sprites: Sprites;
  stats?: StatsEntity[] | null;
  types?: TypesEntity[] | null;
  weight: number;
}
export interface AbilitiesEntity {
  ability: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  is_hidden: boolean;
  slot: number;
}
export interface AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
  name: string;
  url: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface MovesEntity {
  move: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group_details?: VersionGroupDetailsEntity[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface Sprites {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
  other: Other;
  versions: Versions;
}
export interface Other {
  dream_world: DreamWorldOrIcons;
  home: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
  official_artwork: OfficialArtworkOrEmerald;
  showdown: ShowdownOrDiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
}
export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}
export interface HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon {
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface OfficialArtworkOrEmerald {
  front_default: string;
  front_shiny: string;
}
export interface ShowdownOrDiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated {
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface Versions {
  generation_i: GenerationI;
  generation_ii: GenerationIi;
  generation_iii: GenerationIii;
  generation_iv: GenerationIv;
  generation_v: GenerationV;
  generation_vi: GenerationVi;
  generation_vii: GenerationVii;
  generation_viii: GenerationViii;
}
export interface GenerationI {
  red_blue: RedBlueOrYellow;
  yellow: RedBlueOrYellow;
}
export interface RedBlueOrYellow {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}
export interface GenerationIi {
  crystal: Crystal;
  gold: GoldOrSilver;
  silver: GoldOrSilver;
}
export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}
export interface GoldOrSilver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}
export interface GenerationIii {
  emerald: OfficialArtworkOrEmerald;
  firered_leafgreen: FireredLeafgreenOrRubySapphire;
  ruby_sapphire: FireredLeafgreenOrRubySapphire;
}
export interface FireredLeafgreenOrRubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
export interface GenerationIv {
  diamond_pearl: ShowdownOrDiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
  heartgold_soulsilver: ShowdownOrDiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
  platinum: ShowdownOrDiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
}
export interface GenerationV {
  black_white: BlackWhite;
}
export interface BlackWhite {
  animated: ShowdownOrDiamondPearlOrHeartgoldSoulsilverOrPlatinumOrAnimated;
  back_default: string;
  back_female?: null;
  back_shiny: string;
  back_shiny_female?: null;
  front_default: string;
  front_female?: null;
  front_shiny: string;
  front_shiny_female?: null;
}
export interface GenerationVi {
  omegaruby_alphasapphire: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
  x_y: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
}
export interface GenerationVii {
  icons: DreamWorldOrIcons;
  ultra_sun_ultra_moon: HomeOrOmegarubyAlphasapphireOrXYOrUltraSunUltraMoon;
}
export interface GenerationViii {
  icons: DreamWorldOrIcons;
}
export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface TypesEntity {
  slot: number;
  type: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
