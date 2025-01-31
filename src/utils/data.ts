import { item, champion, fullItem } from "../types/dataTypes"

export const itemsName = {
  ArchangelsStaff: { base1: item.Rod, base2: item.Tear },
  Banshee: { base1: item.Belt, base2: item.Gloves },
  Bloodthirster: { base1: item.bfSword, base2: item.Cloak },
  BlueBuff: { base1: item.Tear, base2: item.Tear },
  BrambleVest: { base1: item.Vest, base2: item.Vest },
  RageBlade: { base1: item.Rod, base2: item.Bow },
  ChaliceOfPower: { base1: item.Cloak, base2: item.Tear },
  Deathblade: { base1: item.bfSword, base2: item.bfSword },
  EdgeofNight: { base1: item.bfSword, base2: item.Vest },
  Gargoyle: { base1: item.Cloak, base2: item.Vest },
  GiantSlayer: { base1: item.bfSword, base2: item.Bow },
  HandOfJustice: { base1: item.Gloves, base2: item.Rod },
  HextechGunblade: { base1: item.bfSword, base2: item.Rod },
  InfinityEdge: { base1: item.bfSword, base2: item.Gloves },
  IonicSpark: { base1: item.Cloak, base2: item.Rod },
  QuickSilver: { base1: item.Cloak, base2: item.Gloves },
  ProtectorsVow: { base1: item.Vest, base2: item.Tear },
  Morellonomicon: { base1: item.Belt, base2: item.Rod },
  LocketSolari: { base1: item.Vest, base2: item.Rod },
  LastWhisper: { base1: item.Bow, base2: item.Gloves },
  JeweledGauntlet: { base1: item.Gloves, base2: item.Rod },
  SpearOfShojin: { base1: item.bfSword, base2: item.Rod },
  Shroud: { base1: item.Vest, base2: item.Gloves },
  RunaansHurricane: { base1: item.Cloak, base2: item.Bow },
  Redemption: { base1: item.Belt, base2: item.Tear },
  RapidFirecannon: { base1: item.Bow, base2: item.Bow },
  RabadonsDeathcap: { base1: item.Rod, base2: item.Rod },
  WarmogsArmor: { base1: item.Belt, base2: item.Belt },
  TitansResolve: { base1: item.Bow, base2: item.Vest },
  ThiefsGloves: { base1: item.Gloves, base2: item.Gloves },
  SunfireCape: { base1: item.Belt, base2: item.Vest },
  StatikkShiv: { base1: item.Bow, base2: item.Tear },
  ZzRotPortal: { base1: item.Belt, base2: item.Bow },
  Zephyr: { base1: item.Belt, base2: item.Cloak },
  ZekesHerald: { base1: item.Belt, base2: item.bfSword },
  DragonsClaw: { base1: item.Cloak, base2: item.Cloak },
}

export const championList = [
  [{
    champion: 'Ao Shin',
    src: '//cdn.lolchess.gg/upload/images/champions/AoShin_1653029477.png'
  },
  [{
    item: {
      name: 'Spear of Shojin',
      ratio: '18.66%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '15.50%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '8.58%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: 'Hextech Gunblade',
      ratio: '6.59%',
      src: '//cdn.lolchess.gg/upload/images/items/HextechGunblade_1640058876.png',
      combination: itemsName.HextechGunblade,
    }
  }, {
    item: {
      name: 'Giant Slayer',
      ratio: '5.65%',
      src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
      combination: itemsName.GiantSlayer,
    }
  }]
  ], [{
    champion: 'Aphelios',
    src: '//cdn.lolchess.gg/upload/images/champions/Aphelios_1661160970-Aphelios.jpg'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '39.71%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Last Whisper',
      ratio: '22.87%',
      src: '//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png',
      combination: itemsName.LastWhisper,
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '6.56%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '4.53%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Giant Slayer',
      ratio: '3.59%',
      src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
      combination: itemsName.GiantSlayer,
    }
  }]
  ], [{
    champion: 'Aurelion',
    src: '//cdn.lolchess.gg/upload/images/champions/AurelionSol_1653030178.png'
  },
  [{
    item: {
      name: "Archangel's Staff",
      ratio: '13.46%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '10.79%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet
    }
  }, {
    item: {
      name: 'Spear of Shojin',
      ratio: '8.57%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: 'Hextech Gunblade',
      ratio: '7.90%',
      src: '//cdn.lolchess.gg/upload/images/items/HextechGunblade_1640058876.png',
      combination: itemsName.HextechGunblade,
    }
  }, {
    item: {
      name: 'Blue Buff',
      ratio: '5.61%',
      src: '//cdn.lolchess.gg/images/tft/item/BlueBuff.png',
      combination: itemsName.BlueBuff,
    }
  }]
  ], [{
    champion: 'Bard',
    src: '//cdn.lolchess.gg/upload/images/champions/Bard_1653029776.png'
  },
  [{
    item: {
      name: 'Spear of Shojin',
      ratio: '8.07%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: "Zeke's Herald",
      ratio: '6.78%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '6.52%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Chalice of Power',
      ratio: '5.51%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: 'Banshee’s Claw',
      ratio: '4.98%',
      src: '//cdn.lolchess.gg/upload/images/items/Backhand_1659422926-Backhand_80.jpg',
      combination: itemsName.Banshee
    }
  }]
  ], [{
    champion: 'Braum',
    src: '//cdn.lolchess.gg/upload/images/champions/Braum_1653029795.png'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '12.43%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '10.27%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '8.96%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '7.52%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: 'Redemption',
      ratio: '6.63%',
      src: '//cdn.lolchess.gg/upload/images/items/Redemption_1642015166.png',
      combination: itemsName.Redemption
    }
  }]
  ], [{
    champion: 'Daeja',
    src: '//cdn.lolchess.gg/upload/images/champions/Daeja_1653027743.png'
  },
  [
    {
      item: {
        name: "Guinsoo's Rageblade",
        ratio: '19.47%',
        src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
        combination: itemsName.RageBlade,
      }
    }
    , {
      item: {
        name: "Archangel's Staff",
        ratio: '19.74%',
        src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
        combination: itemsName.ArchangelsStaff,
      }
    }, {
      item: {
        name: 'Giant Slayer',
        ratio: '12.39%',
        src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
        combination: itemsName.GiantSlayer,
      }
    }, {
      item: {
        name: 'Jeweled Gauntlet',
        ratio: '10.60%',
        src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
        combination: itemsName.JeweledGauntlet,
      }
    }, {
      item: {
        name: 'Infinity Edge',
        ratio: '6.10%',
        src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
        combination: itemsName.InfinityEdge,
      }
    }]
  ], [{
    champion: 'Diana',
    src: '//cdn.lolchess.gg/upload/images/champions/Diana_1653029713.png'
  },
  [{
    item: {
      name: 'Ionic Spark',
      ratio: '16.76%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '14.24%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '9.12%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '5.17%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: "Rabadon's Deathcap",
      ratio: '3.64%',
      src: '//cdn.lolchess.gg/upload/images/items/RabadonsDeathcap_1658368695-3089.png',
      combination: itemsName.RabadonsDeathcap
    }
  }]
  ], [{
    champion: 'Ezreal',
    src: '//cdn.lolchess.gg/upload/images/champions/Ezreal_1653030256.png'
  },
  [{
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '9.95%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: 'Blue Buff',
      ratio: '8.25%',
      src: '//cdn.lolchess.gg/images/tft/item/BlueBuff.png',
      combination: itemsName.BlueBuff,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '8.67%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '6.25%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '8.90%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }]
  ], [{
    champion: 'Gnar',
    src: '//cdn.lolchess.gg/upload/images/champions/Gnar_1653029639.png'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '8.64%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '5.21%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '5.14%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: "Zeke's Herald",
      ratio: '3.96%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Redemption',
      ratio: '3.86%',
      src: '//cdn.lolchess.gg/upload/images/items/Redemption_1642015166.png',
      combination: itemsName.Redemption
    }
  }]
  ], [{
    champion: 'Graves',
    src: '//cdn.lolchess.gg/upload/images/champions/Graves_1661160979-Graves.jpg'
  },
  [{
    item: {
      name: 'Bloodthirster',
      ratio: '15.96%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Last Whisper',
      ratio: '5.08%',
      src: '//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png',
      combination: itemsName.LastWhisper,
    }
  }, {
    item: {
      name: 'TiTans Resolve',
      ratio: '8.55%',
      src: '//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png',
      combination: itemsName.TitansResolve
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '7.78%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '7.25%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge
    }
  }]
  ], [{
    champion: 'Hecarim',
    src: '//cdn.lolchess.gg/upload/images/champions/Hecarim_1653030476.png'
  },
  [{
    item: {
      name: "Protector's Vow",
      ratio: '12.44%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '7.06%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '6.10%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '5.77%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '4.12%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }]
  ], [{
    champion: 'Idas',
    src: '//cdn.lolchess.gg/upload/images/champions/Idas_1653029461.png'
  },
  [{
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '15.00%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '13.42%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '10.44%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: "Mogul's Mail",
      ratio: '6.94%',
      src: '//cdn.lolchess.gg/upload/images/items/MogulsMail_1653451014.png'
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.51%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }]
  ], [{
    champion: 'Jax',
    src: '//cdn.lolchess.gg/upload/images/champions/Jax_1661160884-Jax.jpg'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '8.97%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.48%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '4.43%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '4.24%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '4.17%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }]
  ], [{
    champion: 'Jayce',
    src: '//cdn.lolchess.gg/upload/images/champions/Jayce_1661160949-Jayce.jpg'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '6.93%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '6.33%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '5.91%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '5.87%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '4.16%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }]
  ], [{
    champion: "Kai'sa",
    src: 'https://cdn.lolchess.gg/upload/images/champions/Kaisa_1661160931-Kai%E2%80%99sa.jpg'
  },
  [{
    item: {
      name: 'Statikk Shiv',
      ratio: '13.91%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '10.30%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '5.80%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '4.52%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Zephyr',
      ratio: '4.48%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }]
  ], [{
    champion: 'Karma',
    src: '//cdn.lolchess.gg/upload/images/champions/Karma_1653030340.png'
  },
  [{
    item: {
      name: 'Zephyr',
      ratio: '15.01%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '9.87%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '7.94%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '5.98%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '4.31%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }]
  ], [{
    champion: 'Lee Sin',
    src: '//cdn.lolchess.gg/upload/images/champions/LeeSin_1653029760.png'
  },
  [{
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '13.84%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '11.55%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '8.24%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '6.17%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Chalice of Power',
      ratio: '4.84%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }]
  ], [{
    champion: 'Leona',
    src: '//cdn.lolchess.gg/upload/images/champions/Leona_1653029737.png'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '8.53%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '6.76%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.44%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '5.23%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '4.98%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }]
  ], [{
    champion: 'Lillia',
    src: '//cdn.lolchess.gg/upload/images/champions/Lillia_1653029767.png'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '6.15%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '5.45%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Zephyr',
      ratio: '4.78%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }, {
    item: {
      name: 'Ionic Spark',
      ratio: '4.58%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '4.26%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }]
  ], [{
    champion: 'Lux',
    src: '//cdn.lolchess.gg/upload/images/champions/Lux_1661161022-Lux.jpg'
  },
  [{
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '14.76%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '14.23%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Spear of Shojin',
      ratio: '14.20%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '7.99%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Blue Buff',
      ratio: '5.76%',
      src: '//cdn.lolchess.gg/images/tft/item/BlueBuff.png',
      combination: itemsName.BlueBuff,
    }
  }]
  ], [{
    champion: 'Malphite',
    src: '//cdn.lolchess.gg/upload/images/champions/Malphite_1661161013-Malphite.jpg'
  },
  [{
    item: {
      name: "Zz'Rot Portal",
      ratio: '21.29%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '8.02%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '7.03%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.55%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Ionic Spark',
      ratio: '5.74%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }]
  ], [{
    champion: 'Nasus',
    src: '//cdn.lolchess.gg/upload/images/champions/Nasus_1661161028-Nasus.jpg'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '6.94%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.39%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '5.64%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '4.83%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Ionic Spark',
      ratio: '4.64%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }]
  ], [{
    champion: 'Nidalee',
    src: '//cdn.lolchess.gg/upload/images/champions/Nidalee_1653029698.png'
  },
  [{
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '11.31%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: "Runaan's Hurricane",
      ratio: '7.10%',
      src: '//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png',
      combination: itemsName.RunaansHurricane
    }
  }, {
    item: {
      name: 'Deathblade',
      ratio: '6.98%',
      src: '//cdn.lolchess.gg/upload/images/items/LordsEdge_1658738758-LordsEdge_80.jpg',
      combination: itemsName.Deathblade
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '5.01%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '4.80%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }]
  ], [{
    champion: 'Nilah',
    src: '//ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/Nilah.png'
  },
  [{
    item: {
      name: 'Infinity Edge',
      ratio: '13.49%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '9.18%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '8.68%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: 'Giant Slayer',
      ratio: '7.67%',
      src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
      combination: itemsName.GiantSlayer,
    }
  }, {
    item: {
      name: 'Last Whisper',
      ratio: '5.08%',
      src: '//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png',
      combination: itemsName.LastWhisper,
    }
  }]
  ], [{
    champion: 'Nomsy',
    src: '//cdn.lolchess.gg/upload/images/champions/Nomsy_1661160913-Nomsy.jpg'
  },
  [{
    item: {
      name: 'Spear of Shojin',
      ratio: '14.64%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '13.29%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '13.10%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '6.70%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Hextech Gunblade',
      ratio: '5.32%',
      src: '//cdn.lolchess.gg/upload/images/items/HextechGunblade_1640058876.png',
      combination: itemsName.HextechGunblade,
    }
  }]
  ], [{
    champion: 'Nunu',
    src: '//cdn.lolchess.gg/upload/images/champions/Nunu_1653029687.png'
  },
  [{
    item: {
      name: 'Bloodthirster',
      ratio: '14.41%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '8.21%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '7.21%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '6.71%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: 'Redemption',
      ratio: '6.60%',
      src: '//cdn.lolchess.gg/upload/images/items/Redemption_1642015166.png',
      combination: itemsName.Redemption
    }
  }]
  ], [{
    champion: 'Olaf',
    src: '//cdn.lolchess.gg/upload/images/champions/Olaf_1653030240.png'
  },
  [{
    item: {
      name: 'Bloodthirster',
      ratio: '15.72%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: "Runaan's Hurricane",
      ratio: '13.77%',
      src: '//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png',
      combination: itemsName.RunaansHurricane
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '11.45%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Giant Slayer',
      ratio: '9.03%',
      src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
      combination: itemsName.GiantSlayer,
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '7.20%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }]
  ], [{
    champion: 'Pantheon',
    src: '//cdn.lolchess.gg/upload/images/champions/Pantheon_1661160893-Pantheon.jpg'
  },
  [{
    item: {
      name: 'TiTans Resolve',
      ratio: '11.86%',
      src: '//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png',
      combination: itemsName.TitansResolve
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '11.62%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '7.32%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '5.72%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '3.99%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }]
  ], [{
    champion: 'Qiyana',
    src: '//cdn.lolchess.gg/upload/images/champions/Qiyana_1653030385.png'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '17.14%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Zephyr',
      ratio: '4.76%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '4.54%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }, {
    item: {
      name: 'Darkflight Emblem',
      ratio: '3.63%',
      src: 'https://cdn.lolchess.gg/upload/images/items/DarkflightEmblem_1661407225-darkflight.tft_set7_stage2%20(1).png'
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '3.46%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }]
  ], [{
    champion: 'Rakan',
    src: '//cdn.lolchess.gg/upload/images/champions/Rakan_1661161005-Rakan.jpg'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '8.14%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '5.76%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '5.63%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '4.42%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '3.93%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }]
  ], [{
    champion: 'Rell',
    src: '//cdn.lolchess.gg/upload/images/champions/Rell_1661160999-Rell.jpg'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '42.05%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '12.87%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '5.51%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Locket of the Iron Solari',
      ratio: '4.21%',
      src: '//cdn.lolchess.gg/upload/images/items/LocketoftheIronSolari_YOaQeJjb0jXhQnypCCvBBX2TNxqgICIFAp6lyvqz.png',
      combination: itemsName.LocketSolari
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '3.98%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }]
  ], [{
    champion: 'Rengar',
    src: '//cdn.lolchess.gg/upload/images/champions/Rengar_1661161045-Rengar.jpg'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '40.31%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Cannoneer Emblem',
      ratio: '8.80%',
      src: '//cdn.lolchess.gg/upload/images/items/CannoneerEmblem_1653450930.png'
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '5.03%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '3.49%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '3.18%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }]
  ], [{
    champion: 'Sejuani',
    src: '//cdn.lolchess.gg/upload/images/champions/Sejuani_1653029956.png'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '19.51%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '9.16%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '7.13%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: 'Zephyr',
      ratio: '5.90%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '5.84%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }]
  ], [{
    champion: 'Senna',
    src: '//cdn.lolchess.gg/upload/images/champions/Senna_1653029893.png'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '87.44%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Darkflight Emblem',
      ratio: '1.05%',
      src: 'https://cdn.lolchess.gg/upload/images/items/DarkflightEmblem_1661407225-darkflight.tft_set7_stage2%20(1).png'
    }
  }, {
    item: {
      name: 'Zephyr',
      ratio: '0.90%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '0.77%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '0.52%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }]
  ], [{
    champion: 'Seraphine',
    src: '//cdn.lolchess.gg/upload/images/champions/Seraphine_1661160986-Seraphine.jpg'
  },
  [{
    item: {
      name: 'Chalice of Power',
      ratio: '8.34%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '7.45%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Spear of Shojin',
      ratio: '6.67%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '5.68%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '4.52%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }]
  ], [{
    champion: 'Sett',
    src: '//cdn.lolchess.gg/upload/images/champions/Sett_1653030015.png'
  },
  [{
    item: {
      name: "Zz'Rot Portal",
      ratio: '9.97%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: 'Chalice of Power',
      ratio: '7.21%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: 'Shroud of Stillness',
      ratio: '5.84%',
      src: '//cdn.lolchess.gg/upload/images/items/Shroud_EgjmR23WSHz0nbvbfOk5UYUAmGDsNO0iEPNjl7za.png',
      combination: itemsName.Shroud
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '5.66%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '5.12%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }]
  ], [{
    champion: 'Shi Oh Yu',
    src: '//cdn.lolchess.gg/upload/images/champions/ShiOhYu_1653187776.png'
  },
  [{
    item: {
      name: 'TiTans Resolve',
      ratio: '10.76%',
      src: '//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png',
      combination: itemsName.TitansResolve
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '10.54%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '4.85%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '4.79%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '4.62%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }]
  ], [{
    champion: 'Shyvana',
    src: '//cdn.lolchess.gg/upload/images/champions/Shyvana_1653030108.png'
  },
  [{
    item: {
      name: "Archangel's Staff",
      ratio: '10.12%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '8.77%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '7.67%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: 'Ionic Spark',
      ratio: '6.95%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '5.41%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }]
  ], [{
    champion: 'Skarner',
    src: '//cdn.lolchess.gg/upload/images/champions/Skarner_1653030158.png'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '13.32%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '9.53%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '8.17%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '7.00%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '6.27%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }]
  ], [{
    champion: 'Sohm',
    src: '//cdn.lolchess.gg/upload/images/champions/Sohm_1660918930-Sohm.jpg'
  },
  [{
    item: {
      name: 'Blue Buff',
      ratio: '25.06%',
      src: '//cdn.lolchess.gg/images/tft/item/BlueBuff.png',
      combination: itemsName.BlueBuff,
    }
  }, {
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '17.59%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '10.40%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '9.81%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '8.61%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }]
  ], [{
    champion: 'Soraka',
    src: '//cdn.lolchess.gg/upload/images/champions/Soraka_1653030051.png'
  },
  [{
    item: {
      name: 'Spear of Shojin',
      ratio: '7.32%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '6.24%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Chalice of Power',
      ratio: '5.63%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: "Zeke's Herald",
      ratio: '5.27%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '5.24%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }]
  ], [{
    champion: "Sy'fen",
    src: '//cdn.lolchess.gg/upload/images/champions/Syfen_1653029452.png'
  },
  [{
    item: {
      name: 'Bloodthirster',
      ratio: '15.98%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'TiTans Resolve',
      ratio: '12.96%',
      src: '//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png',
      combination: itemsName.TitansResolve
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '7.49%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '6.86%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: 'Quicksilver',
      ratio: '5.55%',
      src: '//cdn.lolchess.gg/upload/images/items/Quicksilver_1658738710-Quicksilver_80.jpg'
    }
  }]
  ], [{
    champion: 'Sylas',
    src: '//cdn.lolchess.gg/upload/images/champions/Sylas_1653029846.png'
  },
  [{
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '13.97%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '11.96%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '8.94%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.72%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '5.62%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }]
  ], [{
    champion: 'Taliyah',
    src: '//cdn.lolchess.gg/upload/images/champions/Taliyah_1661160902-Taliyah.jpg'
  },
  [{
    item: {
      name: 'Chalice of Power',
      ratio: '12.23%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '6.88%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Banshee’s Claw',
      ratio: '6.82%',
      src: '//cdn.lolchess.gg/upload/images/items/Backhand_1659422926-Backhand_80.jpg',
      combination: itemsName.Banshee
    }
  }, {
    item: {
      name: 'Zephyr',
      ratio: '6.04%',
      src: '//cdn.lolchess.gg/images/tft/item/Zephyr.png',
      combination: itemsName.Zephyr
    }
  }, {
    item: {
      name: "Zeke's Herald",
      ratio: '5.86%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }]
  ], [{
    champion: 'Terra',
    src: '//cdn.lolchess.gg/upload/images/champions/Terra_1660918949-Terra.jpg'
  },
  [{
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '14.87%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '11.62%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '9.78%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: "Dragon's Claw",
      ratio: '7.18%',
      src: '//cdn.lolchess.gg/upload/images/items/DragonsClaw_1640058416.png',
      combination: itemsName.DragonsClaw
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.28%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }]
  ], [{
    champion: 'Twitch',
    src: '//cdn.lolchess.gg/upload/images/champions/Twitch_1653030423.png'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '19.90%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '10.09%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Banshee’s Claw',
      ratio: '8.47%',
      src: '//cdn.lolchess.gg/upload/images/items/Backhand_1659422926-Backhand_80.jpg',
      combination: itemsName.Banshee
    }
  }, {
    item: {
      name: 'Last Whisper',
      ratio: '6.22%',
      src: '//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png',
      combination: itemsName.LastWhisper,
    }
  }, {
    item: {
      name: "Runaan's Hurricane",
      ratio: '5.93%',
      src: '//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png',
      combination: itemsName.RunaansHurricane
    }
  }]
  ], [{
    champion: 'Tyrant Swain',
    src: '//cdn.lolchess.gg/upload/images/champions/Swain_1661160992-Swain, Dragon Tyrant.jpg'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '14.30%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '12.87%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '10.41%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '9.28%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '6.11%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }]
  ], [{
    champion: 'Varus',
    src: '//cdn.lolchess.gg/upload/images/champions/Varus_1653029781.png'
  },
  [{
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '19.84%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: "Runaan's Hurricane",
      ratio: '11.59%',
      src: '//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png',
      combination: itemsName.RunaansHurricane
    }
  }, {
    item: {
      name: 'Giant Slayer',
      ratio: '8.61%',
      src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
      combination: itemsName.GiantSlayer,
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '7.41%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Deathblade',
      ratio: '5.85%',
      src: '//cdn.lolchess.gg/upload/images/items/LordsEdge_1658738758-LordsEdge_80.jpg',
      combination: itemsName.Deathblade
    }
  }]
  ], [{
    champion: 'Vladimir',
    src: '//cdn.lolchess.gg/upload/images/champions/Vladimir_1653029808.png'
  },
  [{
    item: {
      name: "Thief's Gloves",
      ratio: '9.03%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '6.35%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '5.36%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: 'Ionic Spark',
      ratio: '5.28%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '5.16%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }]
  ], [{
    champion: 'Volibear',
    src: '//cdn.lolchess.gg/upload/images/champions/Volibear_1653029788.png'
  },
  [{
    item: {
      name: 'Chalice of Power',
      ratio: '8.00%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: 'Sunfire Cape',
      ratio: '7.85%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '5.81%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '4.72%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: 'Ionic Spark',
      ratio: '4.08%',
      src: '//cdn.lolchess.gg/upload/images/items/IonicSpark_1640059091.png',
      combination: itemsName.IonicSpark
    }
  }]
  ], [{
    champion: 'Wukong',
    src: '//cdn.lolchess.gg/upload/images/champions/MonkeyKing_1661160962-Wukong.jpg'
  },
  [{
    item: {
      name: 'Rapid Firecannon',
      ratio: '6.17%',
      src: '//cdn.lolchess.gg/upload/images/items/3094_SZmtvKzywMHMFOPSyWM1jysci2VFB13EmWzpUkh1.png',
      combination: itemsName.RapidFirecannon
    }
  }, {
    item: {
      name: "Zeke's Herald",
      ratio: '5.84%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '5.53%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: "Runaan's Hurricane",
      ratio: '5.39%',
      src: '//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png',
      combination: itemsName.RunaansHurricane
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '4.95%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }]
  ], [{
    champion: 'Xayah',
    src: '//cdn.lolchess.gg/upload/images/champions/Xayah_1653030304.png'
  },
  [{
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '29.97%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: 'Giant Slayer',
      ratio: '18.53%',
      src: '//cdn.lolchess.gg/upload/images/items/GiantSlayer_1658738581-GiantSlayer_80.jpg',
      combination: itemsName.GiantSlayer,
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '11.34%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }, {
    item: {
      name: 'Last Whisper',
      ratio: '9.80%',
      src: '//cdn.lolchess.gg/upload/images/items/LastWhisper_1642015257.png',
      combination: itemsName.LastWhisper,
    }
  }, {
    item: {
      name: "Runaan's Hurricane",
      ratio: '4.14%',
      src: '//cdn.lolchess.gg/upload/images/items/RunaansHurricane_1640058427.png',
      combination: itemsName.RunaansHurricane
    }
  }]
  ], [{
    champion: 'Yasuo',
    src: '//cdn.lolchess.gg/upload/images/champions/Yasuo_1653030213.png'
  },
  [{
    item: {
      name: 'Bloodthirster',
      ratio: '7.84%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'TiTans Resolve',
      ratio: '7.57%',
      src: '//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png',
      combination: itemsName.TitansResolve
    }
  }, {
    item: {
      name: 'Blue Buff',
      ratio: '7.11%',
      src: '//cdn.lolchess.gg/images/tft/item/BlueBuff.png',
      combination: itemsName.BlueBuff,
    }
  }, {
    item: {
      name: 'Hand of Justice',
      ratio: '6.24%',
      src: '//cdn.lolchess.gg/upload/images/items/HandofJustice_1658738743-HandofJustice_80.jpg',
      combination: itemsName.HandOfJustice
    }
  }, {
    item: {
      name: 'Infinity Edge',
      ratio: '4.06%',
      src: '//cdn.lolchess.gg/upload/images/items/InfinityEdge_ljmJbkViyMGC8IKr50os4jC8Ccl1ro2JbqXuvHqT.png',
      combination: itemsName.InfinityEdge,
    }
  }]
  ], [{
    champion: 'Yone',
    src: '//cdn.lolchess.gg/upload/images/champions/Yone_1653030248.png'
  },
  [{
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '8.43%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: "Zeke's Herald",
      ratio: '8.43%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Bloodthirster',
      ratio: '4.72%',
      src: '//cdn.lolchess.gg/upload/images/items/Bloodthirster_1640059177.png',
      combination: itemsName.Bloodthirster
    }
  }, {
    item: {
      name: 'Rapid Firecannon',
      ratio: '4.27%',
      src: '//cdn.lolchess.gg/upload/images/items/3094_SZmtvKzywMHMFOPSyWM1jysci2VFB13EmWzpUkh1.png',
      combination: itemsName.RapidFirecannon
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '4.11%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }]
  ], [{
    champion: 'Zac',
    src: '//cdn.lolchess.gg/upload/images/champions/Zac_1661160939-Zac.jpg'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '9.41%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '8.66%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Zz'Rot Portal",
      ratio: '7.39%',
      src: '//cdn.lolchess.gg/upload/images/items/ZzRotPortal_1658798410-ZzRotPortal_80.jpg',
      combination: itemsName.ZzRotPortal
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '6.93%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '6.69%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }]
  ], [{
    champion: 'Zeri',
    src: '//cdn.lolchess.gg/upload/images/champions/Zeri_1661160923-Zeri.jpg'
  },
  [{
    item: {
      name: "Zeke's Herald",
      ratio: '12.26%',
      src: '//cdn.lolchess.gg/upload/images/items/ZekesHerald_1640059135.png',
      combination: itemsName.ZekesHerald
    }
  }, {
    item: {
      name: 'Darkflight Emblem',
      ratio: '7.49%',
      src: 'https://cdn.lolchess.gg/upload/images/items/DarkflightEmblem_1661407225-darkflight.tft_set7_stage2%20(1).png'
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '5.37%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: "Thief's Gloves",
      ratio: '5.30%',
      src: '//cdn.lolchess.gg/upload/images/items/ThiefsGloves_9PTkdu1Iyw6L1voQbNlsP5U74TzF7suIeq5RQjbh.png',
      combination: itemsName.ThiefsGloves
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '3.90%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }]
  ], [{
    champion: 'Zippy',
    src: 'https://cdn.lolchess.gg/upload/images/champions/Zippy_1661407350-tft7_zippy_square.tft_set7_stage2%20(1).png'
  },
  [{
    item: {
      name: 'Sunfire Cape',
      ratio: '12.99%',
      src: '//cdn.lolchess.gg/upload/images/items/SunfireCape_1640059158.png',
      combination: itemsName.SunfireCape
    }
  }, {
    item: {
      name: 'Gargoyle Stoneplate',
      ratio: '7.03%',
      src: '//cdn.lolchess.gg/upload/images/items/IronWill_AnyIyxtEcc5fby5mgL1NNIwzm76wiG0yxwcPQ7nj.png',
      combination: itemsName.Gargoyle
    }
  }, {
    item: {
      name: "Warmog's Armor",
      ratio: '5.17%',
      src: '//cdn.lolchess.gg/upload/images/items/3083_C5Y1EvfU08Ug9wCaCJTEp2hNRjh5zSkq9eoY97Uc.png',
      combination: itemsName.WarmogsArmor
    }
  }, {
    item: {
      name: "Protector's Vow",
      ratio: '5.06%',
      src: '//cdn.lolchess.gg/upload/images/items/Fimbulwinter_1660869394-3119_wintersapproach.png',
      combination: itemsName.ProtectorsVow
    }
  }, {
    item: {
      name: 'TiTans Resolve',
      ratio: '4.88%',
      src: '//cdn.lolchess.gg/upload/images/items/TitansResolve_1640058512.png',
      combination: itemsName.TitansResolve
    }
  }]
  ], [{
    champion: 'Zoe',
    src: '//cdn.lolchess.gg/upload/images/champions/Zoe_1653030312.png'
  },
  [{
    item: {
      name: 'Spear of Shojin',
      ratio: '11.24%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: 'Statikk Shiv',
      ratio: '7.57%',
      src: '//cdn.lolchess.gg/upload/images/items/StatikkShiv_1640058978.png',
      combination: itemsName.StatikkShiv
    }
  }, {
    item: {
      name: 'Chalice of Power',
      ratio: '5.61%',
      src: '//cdn.lolchess.gg/upload/images/items/Chalice_D96IpanZVyS5SqA0PxLDfDp7FVAV7WGz6iCZaVLC.png',
      combination: itemsName.ChaliceOfPower
    }
  }, {
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '4.95%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '4.41%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }]
  ], [{
    champion: 'Zyra',
    src: '//cdn.lolchess.gg/upload/images/champions/Zyra_1661160955-Zyra.jpg'
  },
  [{
    item: {
      name: "Guinsoo's Rageblade",
      ratio: '7.97%',
      src: '//cdn.lolchess.gg/upload/images/items/GuinsoosRageblade_1658799327-GuinsoosRageblade.jpg',
      combination: itemsName.RageBlade,
    }
  }, {
    item: {
      name: 'Spear of Shojin',
      ratio: '7.40%',
      src: '//cdn.lolchess.gg/upload/images/items/SpearofShojin_1642015208.png',
      combination: itemsName.SpearOfShojin
    }
  }, {
    item: {
      name: 'Morellonomicon',
      ratio: '6.90%',
      src: '//cdn.lolchess.gg/upload/images/items/Morellonomicon_1640058393.png',
      combination: itemsName.Morellonomicon
    }
  }, {
    item: {
      name: 'Jeweled Gauntlet',
      ratio: '6.52%',
      src: '//cdn.lolchess.gg/upload/images/items/ArcaneGauntlet_1658738730-ArcaneGauntlet_80.jpg',
      combination: itemsName.JeweledGauntlet,
    }
  }, {
    item: {
      name: "Archangel's Staff",
      ratio: '6.19%',
      src: '//cdn.lolchess.gg/upload/images/items/3285_8H5TqcPL1z03UB6hTyP9x6N5hZ9jVJIcf6YhxpUg.png',
      combination: itemsName.ArchangelsStaff,
    }
  }]
  ]
]

export const compoList = [

  {
    title: "xayah ragewing",
    early: [
      champion.Rell,
      champion.Sejuani,
      champion.Ezreal,
      champion.Twitch
    ],
    mid: [
      champion.Rell,
      champion.Sejuani,
      champion.Ezreal,
      champion.Twitch,
      champion.Lillia,
      champion.Qiyana
    ],
    core: [fullItem.GuinsoosRageblade],
    flex: [fullItem.GiantSlayer, fullItem.InfinityEdge, fullItem.HandOfJustice, fullItem.RunaansHurricane],
    itemsHolder: [champion.Ezreal, champion.Nidalee, champion.Senna, champion.Yone, champion.Twitch],
    final: "/comps/xayah.png"
  },
  {
    title: "lagoon sohm/Nilah",
    early: [
      champion.Malphite,
      champion.Skarner,
      champion.Kaisa,
      champion.Taliyah,
    ],
    mid: [
      champion.Malphite,
      champion.Skarner,
      champion.Kaisa,
      champion.Taliyah,
      champion.Sylas,
      champion.Seraphine,
      champion.Vladimir
    ],
    core: [fullItem.ArchangelsStaff],
    flex: [fullItem.BlueBuff, fullItem.RabadonsDeathcap, fullItem.JeweledGauntlet],
    itemsHolder: [champion.Nilah, champion.Seraphine, champion.Malphite, champion.Sylas],
    final: "/comps/sohm.png"
  },
  {
    title: "Mage Nomsy",
    early: [
      champion.Skarner,
      champion.Sylas,
      champion.Vladimir,
      champion.Lux
    ],
    mid: [
      champion.Skarner,
      champion.Sylas,
      champion.Vladimir,
      champion.Lux,
      champion.Nomsy
    ],
    core: [fullItem.ArchangelsStaff],
    flex: [fullItem.SpearofShojin, fullItem.WarmogsArmor],
    itemsHolder: [champion.Vladimir, champion.Skarner, champion.Sylas],
    final: "/comps/nomsy.png"
  },
  {
    title: "graves seraphine pantheon",
    early: [
      champion.Vladimir,
      champion.Wukong,
      champion.Senna,
      champion.Qiyana
    ],
    mid: [
      champion.Jax,
      champion.Braum,
      champion.Yone,
      champion.Aphelios,
      champion.Gnar,
    ],
    core: [fullItem.Morellonomicon],
    flex: [fullItem.SpearofShojin, fullItem.ZekesHerald, fullItem.WarmogsArmor, fullItem.TitansResolve],
    itemsHolder: [champion.Kaisa, champion.Aphelios, champion.Zeri],
    final: "/comps/graves.png"
  },
  {
    title: "Astral Aurelion",
    early: [
      champion.Skarner,
      champion.Vladimir,
      champion.Nidalee,
      champion.Lux
    ],
    mid: [
      champion.Skarner,
      champion.Vladimir,
      champion.Nidalee,
      champion.Lux,
      champion.Sylas,
      champion.Varus
    ],
    core: [fullItem.ArchangelsStaff],
    flex: [fullItem.SpearofShojin, fullItem.WarmogsArmor, fullItem.RabadonsDeathcap, fullItem.GiantSlayer],
    itemsHolder: [champion.Lux, champion.Nidalee, champion.Varus],
    final: "/comps/astral.png"
  },
  {
    title: "mirage daeja",
    early: [
      champion.Jax,
      champion.Malphite,
      champion.Sejuani,
      champion.Twitch
    ],
    mid: [
      champion.Jax,
      champion.Malphite,
      champion.Sejuani,
      champion.Twitch,
      champion.Ezreal,
      champion.LeeSin
    ],
    core: [fullItem.ArchangelsStaff],
    flex: [fullItem.JeweledGauntlet, fullItem.HandOfJustice, fullItem.RabadonsDeathcap, fullItem.GiantSlayer],
    itemsHolder: [champion.Karma, champion.Kaisa, champion.LeeSin, champion.Lillia, champion.Yone,],
    final: "/comps/mirage.png"
  },
  // {
  //   title: "darkflight cannoneer",
  //   early: [
  //     champion.Rell,
  //     champion.Sejuani,
  //     champion.Aphelios,
  //     champion.Senna
  //   ],
  //   mid: [
  //     champion.Rell,
  //     champion.Aphelios,
  //     champion.Aphelios,
  //     champion.Senna,
  //     champion.Zeri,
  //     champion.Rengar
  //   ],
  //   core: [fullItem.ZekesHerald],
  //   flex: [fullItem.GiantSlayer, fullItem.TitansResolve, fullItem.InfinityEdge],
  //   itemsHolder: [champion.Aphelios, champion.Rell, champion.Graves, champion.Rengar],
  //   final: "/comps/darkflight.png"
  // },

]
