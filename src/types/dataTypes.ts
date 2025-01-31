export interface IProps {
  searchChampion: string;
  setSearchChampion: React.Dispatch<React.SetStateAction<string>>;
}

export enum item {
  bfSword = "https:////cdn.lolchess.gg/upload/images/items/BFSword_1658364277-1038.png",
  Vest = "https:////cdn.lolchess.gg/upload/images/items/ChainVest_1640058945.png",
  Belt = "https:////cdn.lolchess.gg/upload/images/items/GiantsBelt_1658368751-1011.png",
  Rod = "https:////cdn.lolchess.gg/upload/images/items/NeedlesslyLargeRod_1640059008.png",
  Gloves = "https:////cdn.lolchess.gg/upload/images/items/SparringGloves_1640059055.png",
  Cloak = "https:////cdn.lolchess.gg/upload/images/items/NegatronCloak_1640059073.png",
  Bow = "https:////cdn.lolchess.gg/upload/images/items/RecurveBow_1640058784.png",
  Tear = "https:////cdn.lolchess.gg/upload/images/items/Tearofthegoddess_1640059037.png",
}

export enum champion {
  AoShin = "//cdn.lolchess.gg/upload/images/champions/AoShin_1653029477.png",
  Aphelios = "//cdn.lolchess.gg/upload/images/champions/Aphelios_1661160970-Aphelios.jpg",
  AurelionSol = "//cdn.lolchess.gg/upload/images/champions/AurelionSol_1653030178.png",
  Bard = "//cdn.lolchess.gg/upload/images/champions/Bard_1653029776.png",
  Braum = "//cdn.lolchess.gg/upload/images/champions/Braum_1653029795.png",
  Daeja = "//cdn.lolchess.gg/upload/images/champions/Daeja_1653027743.png",
  Diana = "//cdn.lolchess.gg/upload/images/champions/Diana_1653029713.png",
  Ezreal = "//cdn.lolchess.gg/upload/images/champions/Ezreal_1653030256.png",
  Gnar = "//cdn.lolchess.gg/upload/images/champions/Gnar_1653029639.png",
  Graves = "//cdn.lolchess.gg/upload/images/champions/Graves_1661160979-Graves.jpg",
  Hecarim = "//cdn.lolchess.gg/upload/images/champions/Hecarim_1653030476.png",
  Idas = "//cdn.lolchess.gg/upload/images/champions/Idas_1653029461.png",
  Jax = "//cdn.lolchess.gg/upload/images/champions/Jax_1661160884-Jax.jpg",
  Jayce = "//cdn.lolchess.gg/upload/images/champions/Jayce_1661160949-Jayce.jpg",
  Kaisa = "//cdn.lolchess.gg/upload/images/champions/Kaisa_1661160931-Kai’sa.jpg",
  Karma = "//cdn.lolchess.gg/upload/images/champions/Karma_1653030340.png",
  LeeSin = "//cdn.lolchess.gg/upload/images/champions/LeeSin_1653029760.png",
  Leona = "//cdn.lolchess.gg/upload/images/champions/Leona_1653029737.png",
  Lillia = "//cdn.lolchess.gg/upload/images/champions/Lillia_1653029767.png",
  Lux = "//cdn.lolchess.gg/upload/images/champions/Lux_1661161022-Lux.jpg",
  Malphite = "//cdn.lolchess.gg/upload/images/champions/Malphite_1661161013-Malphite.jpg",
  Nasus = "//cdn.lolchess.gg/upload/images/champions/Nasus_1661161028-Nasus.jpg",
  Nidalee = "//cdn.lolchess.gg/upload/images/champions/Nidalee_1653029698.png",
  Nilah = "//ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/Nilah.png",
  Nomsy = "//cdn.lolchess.gg/upload/images/champions/Nomsy_1661160913-Nomsy.jpg",
  Nunu = "//cdn.lolchess.gg/upload/images/champions/Nunu_1653029687.png",
  Olaf = "//cdn.lolchess.gg/upload/images/champions/Olaf_1653030240.png",
  Pantheon = "//cdn.lolchess.gg/upload/images/champions/Pantheon_1661160893-Pantheon.jpg",
  Qiyana = "//cdn.lolchess.gg/upload/images/champions/Qiyana_1653030385.png",
  Rakan = "//cdn.lolchess.gg/upload/images/champions/Rakan_1661161005-Rakan.jpg",
  Rell = "//cdn.lolchess.gg/upload/images/champions/Rell_1661160999-Rell.jpg",
  Rengar = "//cdn.lolchess.gg/upload/images/champions/Rengar_1661161045-Rengar.jpg",
  Sejuani = "//cdn.lolchess.gg/upload/images/champions/Sejuani_1653029956.png",
  Senna = "//cdn.lolchess.gg/upload/images/champions/Senna_1653029893.png",
  Seraphine = "//cdn.lolchess.gg/upload/images/champions/Seraphine_1661160986-Seraphine.jpg",
  Sett = "//cdn.lolchess.gg/upload/images/champions/Sett_1653030015.png",
  ShiOhYu = "//cdn.lolchess.gg/upload/images/champions/ShiOhYu_1653187776.png",
  Shyvana = "//cdn.lolchess.gg/upload/images/champions/Shyvana_1653030108.png",
  Skarner = "//cdn.lolchess.gg/upload/images/champions/Skarner_1653030158.png",
  Sohm = "//cdn.lolchess.gg/upload/images/champions/Sohm_1660918930-Sohm.jpg",
  Soraka = "//cdn.lolchess.gg/upload/images/champions/Soraka_1653030051.png",
  Syfen = "//cdn.lolchess.gg/upload/images/champions/Syfen_1653029452.png",
  Sylas = "//cdn.lolchess.gg/upload/images/champions/Sylas_1653029846.png",
  Taliyah = "//cdn.lolchess.gg/upload/images/champions/Taliyah_1661160902-Taliyah.jpg",
  Terra = "//cdn.lolchess.gg/upload/images/champions/Terra_1660918949-Terra.jpg",
  Twitch = "//cdn.lolchess.gg/upload/images/champions/Twitch_1653030423.png",
  TyrantSwain = "//cdn.lolchess.gg/upload/images/champions/Swain_1661160992-Swain, Dragon Tyrant.jpg",
  Varus = "//cdn.lolchess.gg/upload/images/champions/Varus_1653029781.png",
  Vladimir = "//cdn.lolchess.gg/upload/images/champions/Vladimir_1653029808.png",
  Volibear = "//cdn.lolchess.gg/upload/images/champions/Volibear_1653029788.png",
  Wukong = "//cdn.lolchess.gg/upload/images/champions/MonkeyKing_1661160962-Wukong.jpg",
  Xayah = "//cdn.lolchess.gg/upload/images/champions/Xayah_1653030304.png",
  Yasuo = "//cdn.lolchess.gg/upload/images/champions/Yasuo_1653030213.png",
  Yone = "//cdn.lolchess.gg/upload/images/champions/Yone_1653030248.png",
  Zac = "//cdn.lolchess.gg/upload/images/champions/Zac_1661160939-Zac.jpg",
  Zeri = "//cdn.lolchess.gg/upload/images/champions/Zeri_1661160923-Zeri.jpg",
  Zippy = "//cdn.lolchess.gg/upload/images/champions/Zippy_1661407350-tft7_zippy_square.tft_set7_stage2 (1).png",
  Zoe = "//cdn.lolchess.gg/upload/images/champions/Zoe_1653030312.png",
  Zyra = "//cdn.lolchess.gg/upload/images/champions/Zyra_1661160955-Zyra.jpg",
}

export enum fullItem {
  ZekesHerald = "//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png",
  TitansResolve = "//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png",
  LastWhisper = "//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png",
  InfinityEdge = "//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png",
  GiantSlayer = "//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg",
  EdgeofNight = "//cdn.lolchess.gg/upload/images/items/GuardianAngel_1643780049.png",
  GuinsoosRageblade = "//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg",
  RunaansHurricane = "//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png",
  HandOfJustice = "//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg",
  Bloodthirster = "//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png",
  JeweledGauntlet = "//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg",
  RabadonsDeathcap = "//cdn.lolchess.gg/upload/images/items/RabadonsDeathcap_1658368695-3089.png",
  ArchangelsStaff = " //cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png",
  BlueBuff = "//cdn.lolchess.gg/images/tft/item/BlueBuff.png",
  SpearofShojin = "//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png",
  WarmogsArmor = "//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png",
  Morellonomicon = "//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png"

}

export type ChampionListType =
  [{
    champion: string,
    src: string
  },
    [{
      item: {
        name: string
        ratio: string
        src: string
        combination: string
      }
    }, {
      item: {
        name: string
        ratio: string
        src: string
        combination: string
      }
    }, {
      item: {
        name: string
        ratio: string
        src: string
        combination: string
      }
    }, {
      item: {
        name: string
        ratio: string
        src: string
        combination: string
      }
    }, {
      item: {
        name: string
        ratio: string
        src: string
        combination: string
      }
    }]
  ]
