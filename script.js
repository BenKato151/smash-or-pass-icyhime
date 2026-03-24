// Lista de personajes / Character List
const characters = [

  { name: "Apoint-Ahoki  Dokomi 26", images: ["smash_or_pass/Ahoki_Shogun/Apoint-Ahoki_ Dokomi 26-1.jpg"] },
  { name: "Akilotl 🩸 🩷 {ImpVtuber} @Dokomi", images: ["smash_or_pass/Akilotl/Akilotl 🩸 🩷 {ImpVtuber} @Dokomi-1.jpg"] },
  { name: "AliceDFK GERVtuber🏳️‍⚧️💮 New Branding 2026", images: ["smash_or_pass/Alice_DFK/AliceDFK GERVtuber🏳️‍⚧️💮 New Branding 2026-1.jpg"] },
  { name: "Allodia aka Max 💜 @Dokomi26 🐍 GerVtuber 🐍 VGen", images: ["smash_or_pass/Allodia_aka_Max/Allodia_aka_Max 💜 @Dokomi26 🐍 GerVtuber 🐍 VGen-1.jpeg"] },
  { name: "Amunri van Thornwick🧡🩵", images: ["smash_or_pass/Amunri_/Amunri van Thornwick🧡🩵-1.jpg"] },
  { name: "Aregion", images: ["smash_or_pass/AregionOfDoom/Aregion-1.jpg"] },
  { name: "Ahr0n", images: ["smash_or_pass/AxeolotlAhr0n/Ahr0n-1.jpg"] },
  { name: "Blaic🦇GerVTuber💜DOKOMI2026", images: ["smash_or_pass/BlaicMarrow/Blaic🦇GerVTuber💜DOKOMI2026-1.jpg"] },
  { name: "Robin ✧˚ ₊Birb PNGtuber₊˚✧", images: [
    "smash_or_pass/Bloody_RobinVT/Robin ✧˚ ₊Birb PNGtuber₊˚✧-1.jpg",
    "smash_or_pass/Bloody_RobinVT/Robin ✧˚ ₊Birb PNGtuber₊˚✧-2.jpg"
  ]},
  { name: "Mizuki   Re-Debut 2026   VArtist", images: ["smash_or_pass/BnuyMizukii/Mizuki _ Re-Debut 2026 _ VArtist-1.jpg"] },
  { name: "Cellara   GERVTuber ✧˚ ₊", images: ["smash_or_pass/CellaraVT/Cellara _ GERVTuber ✧˚ ₊-1.jpg"] },
  { name: "CharmingMonster   Chibi Debut 2. March", images: ["smash_or_pass/CharmingM0nster/CharmingMonster _ Chibi Debut 2. March-1.jpg"] },
  { name: "Corvis   🐦‍⬛🇮🇹   Debut 28.03 2026   Dokomi 2026", images: ["smash_or_pass/CorvisAtreis/Corvis _ 🐦‍⬛🇮🇹 _ Debut 28.03 2026 _ Dokomi 2026-1.jpg"] },
  { name: "Darkisara - Lost 🐯", images: ["smash_or_pass/DarkIsara/Darkisara - Lost 🐯-1.jpg"] },
  { name: "Onkeelchen    Toni", images: [
    "smash_or_pass/DasOnkeelchen/Onkeelchen __ Toni-1.jpg",
    "smash_or_pass/DasOnkeelchen/Onkeelchen __ Toni-2.jpg",
    "smash_or_pass/DasOnkeelchen/Onkeelchen __ Toni-3.jpg"
  ]},
  { name: "Tion GERVtuber 🦋", images: [
    "smash_or_pass/DemonLordTion/Tion GERVtuber 🦋-1.jpg",
    "smash_or_pass/DemonLordTion/Tion GERVtuber 🦋-2.jpg",
    "smash_or_pass/DemonLordTion/Tion GERVtuber 🦋-3.jpg"
  ]},
  { name: "Drachy   PNG VTuber🐉DOKOMI2026", images: ["smash_or_pass/Drachy11/Drachy _ PNG_VTuber🐉DOKOMI2026-1.jpg"] },
  { name: "🪐Shiny Moon  Bundroid Vtuber", images: ["smash_or_pass/Emilia98299945/🪐Shiny Moon__Bundroid Vtuber-1.jpg"] },
  { name: "Fenari👁️", images: [
    "smash_or_pass/FenariMori/Fenari👁️-1.jpg",
    "smash_or_pass/FenariMori/Fenari👁️-2.jpg",
    "smash_or_pass/FenariMori/Fenari👁️-3.jpg"
  ]},
  { name: "Frau Ente I Mex 2026♡", images: [
    "smash_or_pass/Frau_Ente_VT/Frau_Ente I Mex 2026♡-1.jpg",
    "smash_or_pass/Frau_Ente_VT/Frau_Ente I Mex 2026♡-2.jpg"
  ]},
  { name: "GoodOldMario🐺✨️", images: [
    "smash_or_pass/GoodOldMario/GoodOldMario🐺✨️-1.jpg",
    "smash_or_pass/GoodOldMario/GoodOldMario🐺✨️-2.jpg",
    "smash_or_pass/GoodOldMario/GoodOldMario🐺✨️-3.jpg"
  ]},
  { name: "Greph Xordero", images: ["smash_or_pass/GrephXordero/Greph Xordero-1.jpeg"] },
  { name: "Haunty 🖤🌸 DoKomi 2026", images: ["smash_or_pass/HauntingHana/Haunty 🖤🌸 DoKomi 2026-1.jpg"] },
  { name: "Himechii 🦋   04.04. JUBILÄUM   GerVTuber", images: [
    "smash_or_pass/HimechiiVT/Himechii 🦋 _ 04.04. JUBILÄUM _ GerVTuber-1.jpg",
    "smash_or_pass/HimechiiVT/Himechii 🦋 _ 04.04. JUBILÄUM _ GerVTuber-2.jpg"
  ]},
  { name: "Hoshizuki 🦊⛩️   🏳️‍⚧️ (Un-) Heilige Allianz", images: ["smash_or_pass/HoshizukiVT/Hoshizuki 🦊⛩️ _ 🏳️‍⚧️ (Un-) Heilige Allianz-1.jpg"] },
  { name: "Ignitris - Feuerbär-Geist", images: [
    "smash_or_pass/IgnitrisVt/Ignitris - Feuerbär-Geist-1.jpg",
    "smash_or_pass/IgnitrisVt/Ignitris - Feuerbär-Geist-2.jpg"
  ]},
  { name: "Akari", images: [
    "smash_or_pass/ImAkari4/Akari-1.jpg",
    "smash_or_pass/ImAkari4/Akari-2.jpg",
    "smash_or_pass/ImAkari4/Akari-3.jpg"
  ]},
  { name: "HappyBen✨GERVtuber (comms  waitlist)", images: ["smash_or_pass/ItsHappyBen/HappyBen✨GERVtuber (comms_ waitlist)-1.jpg"] },
  { name: "Jandy Chris ~ Fae PNG-Tuber", images: ["smash_or_pass/JandyChris/Jandy_Chris ~ Fae PNG-Tuber-1.jpg"] },
  { name: "💜Jodaiku💜 GERVtuber", images: ["smash_or_pass/Jodaiku/💜Jodaiku💜 GERVtuber-1.jpg"] },
  { name: "Katerchen   ka7erchen.vtubers.social", images: ["smash_or_pass/Ka7erchen/Katerchen _ ka7erchen.vtubers.social-1.png"] },
  { name: "KaleenaVT", images: [
    "smash_or_pass/KaleenaVT/KaleenaVT-1.jpg",
    "smash_or_pass/KaleenaVT/KaleenaVT-2.jpg",
    "smash_or_pass/KaleenaVT/KaleenaVT-3.jpg"
  ]},
  { name: "Karion Zephyr 🌹☁️ AGENT VTUBER (HIATUS)", images: ["smash_or_pass/KarionZephyr/Karion Zephyr 🌹☁️ AGENT VTUBER (HIATUS)-1.jpg"] },
  { name: "Kijo", images: ["smash_or_pass/KijoGato/Kijo-1.jpg"] },
  { name: "Kiochi - ReDebut 06.03.2026 - Dokomi 2026", images: ["smash_or_pass/Kiochi_vt/Kiochi - ReDebut 06.03.2026 - Dokomi 2026-1.jpg"] },
  { name: "LadySelphia 👑 🐺❄   DER Squad   Rebrand Arc", images: ["smash_or_pass/LadySelphia/LadySelphia 👑 🐺❄ _ DER Squad _ Rebrand Arc-1.jpg"] },
  { name: "Leanorar 🐈🪽Cat Angel Vtuber   Dokomi 2026", images: [
    "smash_or_pass/Leanorar_Mao/Leanorar 🐈🪽Cat Angel Vtuber _ Dokomi 2026 _-1.jpg",
    "smash_or_pass/Leanorar_Mao/Leanorar 🐈🪽Cat Angel Vtuber _ Dokomi 2026 _-2.jpg"
  ]},
  { name: "ElGurko   Kaito Gurke🃏   Dokomi 2026", images: [
    "smash_or_pass/Leon_ElGurko/ElGurko _ Kaito Gurke🃏 _ Dokomi 2026 _-1.jpg",
    "smash_or_pass/Leon_ElGurko/ElGurko _ Kaito Gurke🃏 _ Dokomi 2026 _-2.jpg"
  ]},
  { name: "Luis the Croc 🐊   Crocodile Vtuber", images: ["smash_or_pass/Luis_the_croc/Luis the Croc 🐊__ Crocodile Vtuber-1.jpg"] },
  { name: "Luricerus   höllenhund 🇩🇪🇮🇹", images: [
    "smash_or_pass/Luricerus/Luricerus__ höllenhund 🇩🇪🇮🇹-1.jpg",
    "smash_or_pass/Luricerus/Luricerus__ höllenhund 🇩🇪🇮🇹-2.jpg",
    "smash_or_pass/Luricerus/Luricerus__ höllenhund 🇩🇪🇮🇹-3.jpg",
    "smash_or_pass/Luricerus/Luricerus__ höllenhund 🇩🇪🇮🇹-4.jpg"
  ]},
  { name: "Lysander 🦋📚 Moth-VTuber @Vibrant", images: [
    "smash_or_pass/LysanderVT_/Lysander 🦋📚 Moth-VTuber @Vibrant-1.jpg",
    "smash_or_pass/LysanderVT_/Lysander 🦋📚 Moth-VTuber @Vibrant-2.jpg",
    "smash_or_pass/LysanderVT_/Lysander 🦋📚 Moth-VTuber @Vibrant-3.jpg"
  ]},
  { name: "Leon S. Kennedy", images: ["smash_or_pass/Mayura_channel/Leon S. Kennedy-1.jpg"] },
  { name: "Milkyray🪽🥛【YUNYUN!!】", images: [
    "smash_or_pass/Milkmeray/Milkyray🪽🥛【YUNYUN!!】-1.jpg",
    "smash_or_pass/Milkmeray/Milkyray🪽🥛【YUNYUN!!】-2.jpg"
  ]},
  { name: "Mochi 🤍 4.4 Chibi Debut 🐾🩷", images: [
    "smash_or_pass/MochipawsVT/Mochi 🤍 4.4 Chibi Debut 🐾🩷-1.jpg",
    "smash_or_pass/MochipawsVT/Mochi 🤍 4.4 Chibi Debut 🐾🩷-2.jpg"
  ]},
  { name: "Mozilla HD", images: ["smash_or_pass/Modzilla_HD/Mozilla_HD-1.jpg"] },
  { name: "🀄️Koi of Chaos - MrShooshman🀄️", images: ["smash_or_pass/MrShooshman/🀄️Koi of Chaos - MrShooshman🀄️-1.jpg"] },
  { name: "🍰 NagiNova ☕   VTuber   Club MaidZone", images: [
    "smash_or_pass/NagiNovaNya/🍰 NagiNova ☕ _ VTuber _ Club MaidZone-1.jpg",
    "smash_or_pass/NagiNovaNya/🍰 NagiNova ☕ _ VTuber _ Club MaidZone-2.jpg",
    "smash_or_pass/NagiNovaNya/🍰 NagiNova ☕ _ VTuber _ Club MaidZone-3.jpg"
  ]},
  { name: "NangijalaTV 🐾 Catgirl VTuber 💜", images: ["smash_or_pass/NangijalaTV/NangijalaTV 🐾 Catgirl VTuber 💜-1.jpg"] },
  { name: "Naumy   Fangs in the dark", images: [
    "smash_or_pass/NaumySouls/Naumy _ Fangs in the dark-1.jpg",
    "smash_or_pass/NaumySouls/Naumy _ Fangs in the dark-2.jpg"
  ]},
  { name: "NessaNoCho🖤💙  @DoKomi26", images: ["smash_or_pass/NessaNoCho/NessaNoCho🖤💙_ @DoKomi26-1.jpg"] },
  { name: "NezuAwoo   VTuber   Bodybuilding", images: ["smash_or_pass/NezuAwoo/NezuAwoo _ VTuber _ Bodybuilding-1.jpg"] },
  { name: "Noctus_DER_Squad_Dokomi_2026", images: [
    "smash_or_pass/NoctusVT/Noctus_DER_Squad_Dokomi_2026-1.jpeg",
    "smash_or_pass/NoctusVT/Noctus_DER_Squad_Dokomi_2026-2.jpeg"
  ]},
  { name: "Okami der große Böse Wolf Ger VTuber", images: ["smash_or_pass/Okami_Blain/Okami der große Böse Wolf_Ger VTuber-1.jpg"] },
  { name: "Pantero Reborn 🖤🐾🌿   GerVTuber   🇩🇪", images: ["smash_or_pass/PanteroReborn/Pantero Reborn 🖤🐾🌿 _ GerVTuber _ 🇩🇪-1.jpg"] },
  { name: "Lucius Pavonum🦚 @DOKOMI", images: [
    "smash_or_pass/PfauTuberLucius/Lucius Pavonum🦚 @DOKOMI-1.jpg",
    "smash_or_pass/PfauTuberLucius/Lucius Pavonum🦚 @DOKOMI-2.jpg",
    "smash_or_pass/PfauTuberLucius/Lucius Pavonum🦚 @DOKOMI-3.jpg",
    "smash_or_pass/PfauTuberLucius/Lucius Pavonum🦚 @DOKOMI-4.jpg"
  ]},
  { name: "PyroBunferno (Enya's Hat)", images: [
    "smash_or_pass/PyroBunferno/PyroBunferno (Enya's Hat)-1.jpg",
    "smash_or_pass/PyroBunferno/PyroBunferno (Enya's Hat)-2.jpg",
    "smash_or_pass/PyroBunferno/PyroBunferno (Enya's Hat)-3.jpg"
  ]},
  { name: "Raelia Laubwind   (Un-) Heilige Allianz", images: ["smash_or_pass/RaeliaLaubwind/Raelia Laubwind _ (Un-) Heilige Allianz-1.jpg"] },
  { name: "Renchen   LeFamily~", images: ["smash_or_pass/RenchenVT/Renchen _ LeFamily~-1.jpg"] },
  { name: "Jack Knight (der mit der maske)", images: ["smash_or_pass/RobbysHobbyEcke/Jack Knight (der mit der maske)-1.jpg"] },
  { name: "ShinoChoi   Vtuber -.✦", images: ["smash_or_pass/ShinoChoiVTuber/ShinoChoi _ Vtuber -.✦-1.jpg"] },
  { name: "Shiyo 💎", images: [
    "smash_or_pass/ShiyoVT/Shiyo 💎-1.jpg",
    "smash_or_pass/ShiyoVT/Shiyo 💎-2.jpg",
    "smash_or_pass/ShiyoVT/Shiyo 💎-3.jpg",
    "smash_or_pass/ShiyoVT/Shiyo 💎-4.jpg"
  ]},
  { name: "SoHoshiko   Elf Witch Vtuber", images: ["smash_or_pass/SoHoshiko/SoHoshiko _ Elf_Witch Vtuber-1.jpg"] },
  { name: "SpiritsSoul    GerVTuber    Dokomi 2026", images: [
    "smash_or_pass/SpiritsSoul_08/SpiritsSoul __ GerVTuber __ Dokomi 2026-1.jpg",
    "smash_or_pass/SpiritsSoul_08/SpiritsSoul __ GerVTuber __ Dokomi 2026-2.jpg"
  ]},
  { name: "StrayMajora", images: [
    "smash_or_pass/StrayMajora/StrayMajora-1.jpg",
    "smash_or_pass/StrayMajora/StrayMajora-2.jpg"
  ]},
  { name: "Suiiki GerVTuber Dokomi2026", images: ["smash_or_pass/Suiiki_34/Suiiki_GerVTuber_Dokomi2026-1.jpg"] },
  { name: "Suo ⚔️🌓 Demigod Vtuber", images: [
    "smash_or_pass/SuoRaihatsu/Suo ⚔️🌓 Demigod Vtuber-1.jpg",
    "smash_or_pass/SuoRaihatsu/Suo ⚔️🌓 Demigod Vtuber-2.jpg",
    "smash_or_pass/SuoRaihatsu/Suo ⚔️🌓 Demigod Vtuber-3.jpg",
    "smash_or_pass/SuoRaihatsu/Suo ⚔️🌓 Demigod Vtuber-4.jpg"
  ]},
  { name: "Syraxis 🐛✨  Monster Boy Vtuber", images: [
    "smash_or_pass/Syraxis/Syraxis 🐛✨_ Monster Boy Vtuber-1.jpg",
    "smash_or_pass/Syraxis/Syraxis 🐛✨_ Monster Boy Vtuber-2.jpg"
  ]},
  { name: "🍁Takiyasha🍁   Dokomi 2026", images: [
    "smash_or_pass/TakiyashaSan/🍁Takiyasha🍁 _ Dokomi 2026-1.jpg",
    "smash_or_pass/TakiyashaSan/🍁Takiyasha🍁 _ Dokomi 2026-2.jpg"
  ]},
  { name: "EinfachTamTam  🍗Schnitzel Vtuber 🍗", images: [
    "smash_or_pass/TamEinfach/EinfachTamTam _🍗Schnitzel Vtuber 🍗-1.jpg",
    "smash_or_pass/TamEinfach/EinfachTamTam _🍗Schnitzel Vtuber 🍗-2.jpg"
  ]},
  { name: "Timotry Hikona⛩️Demon VTuber", images: ["smash_or_pass/TheTimotry/Timotry_Hikona⛩️Demon VTuber-1.jpg"] },
  { name: "TimoTamunVT   ~ 21.03. Debut ~   GERVtuber~ ⚡🦅", images: [
    "smash_or_pass/TimotamunVT/TimoTamunVT _ ~ 21.03. Debut ~ _ GERVtuber~ ⚡🦅-1.jpg",
    "smash_or_pass/TimotamunVT/TimoTamunVT _ ~ 21.03. Debut ~ _ GERVtuber~ ⚡🦅-2.jpg",
    "smash_or_pass/TimotamunVT/TimoTamunVT _ ~ 21.03. Debut ~ _ GERVtuber~ ⚡🦅-3.jpg",
    "smash_or_pass/TimotamunVT/TimoTamunVT _ ~ 21.03. Debut ~ _ GERVtuber~ ⚡🦅-4.jpg"
  ]},
  { name: "ToruVT 👾", images: ["smash_or_pass/ToruBTW/ToruVT 👾-1.jpg"] },
  { name: "Tsukii", images: [
    "smash_or_pass/TsukiiYumii/Tsukii-1.jpg",
    "smash_or_pass/TsukiiYumii/Tsukii-2.jpg",
    "smash_or_pass/TsukiiYumii/Tsukii-3.jpg"
  ]},
  { name: "Vel👑🩸   Vtuber 👑🩸", images: [
    "smash_or_pass/Velytress/Vel👑🩸 _ Vtuber 👑🩸-1.jpg",
    "smash_or_pass/Velytress/Vel👑🩸 _ Vtuber 👑🩸-2.jpg",
    "smash_or_pass/Velytress/Vel👑🩸 _ Vtuber 👑🩸-3.jpg",
    "smash_or_pass/Velytress/Vel👑🩸 _ Vtuber 👑🩸-4.jpg"
  ]},
  { name: "Viktorija ❄️🦊   🏳️‍⚧️ (Un-) Heilige Allianz", images: [
    "smash_or_pass/VictorijaVT/Viktorija ❄️🦊 _ 🏳️‍⚧️ (Un-) Heilige Allianz-1.jpg",
    "smash_or_pass/VictorijaVT/Viktorija ❄️🦊 _ 🏳️‍⚧️ (Un-) Heilige Allianz-2.jpg",
    "smash_or_pass/VictorijaVT/Viktorija ❄️🦊 _ 🏳️‍⚧️ (Un-) Heilige Allianz-3.jpg",
    "smash_or_pass/VictorijaVT/Viktorija ❄️🦊 _ 🏳️‍⚧️ (Un-) Heilige Allianz-4.jpg"
  ]},
  { name: "XIRESS   GERVTuber", images: ["smash_or_pass/X1RESS/XIRESS _ GERVTuber-1.jpg"] },
  { name: "Yoma 🐯", images: ["smash_or_pass/Yoma_GER/Yoma 🐯-1.jpg"] },
  { name: "💥YooJa💛", images: ["smash_or_pass/Yooja_VT/💥YooJa💛-1.jpg"] },
  { name: "Yura Yami   GerVtuber", images: ["smash_or_pass/YuraYamiDE/Yura Yami _ GerVtuber-1.jpg"] },
  { name: "Yyümira", images: [
    "smash_or_pass/Yyümira/Yyümira-1.png",
    "smash_or_pass/Yyümira/Yyümira-2.png"
  ]},
  { name: "Zero Trinity 🦇🌸  Dokomi 26   GerVtubercouple", images: [
    "smash_or_pass/Zero_Trinity_tv/Zero_Trinity 🦇🌸_ Dokomi 26 _ GerVtubercouple-1.jpg",
    "smash_or_pass/Zero_Trinity_tv/Zero_Trinity 🦇🌸_ Dokomi 26 _ GerVtubercouple-2.jpg"
  ]},
  { name: "SilentPanda - Mafia Panda", images: ["smash_or_pass/silentpandavt/SilentPanda - Mafia Panda-1.jpeg"] },
  { name: "Lunar 🌙 V-ARTIST 💌 TRANSLYRICS", images: ["smash_or_pass/astra_lunar_/Lunar 🌙 V-ARTIST 💌 TRANSLYRICS-1.jpg"] },
  { name: "🫧AvinOcean 💙🐳🦈🫧", images: [
    "smash_or_pass/avinocean/🫧AvinOcean 💙🐳🦈🫧-1.jpg",
    "smash_or_pass/avinocean/🫧AvinOcean 💙🐳🦈🫧-2.jpg"
  ]},
  { name: "Blizz🦎🗺️ GERVTuber", images: ["smash_or_pass/blizzchaq/Blizz🦎🗺️ GERVTuber-1.jpg"] },
  { name: "Lucio volpi", images: ["smash_or_pass/deathangelvolpi/Lucio_volpi_-1.jpg"] },
  { name: "Dotgy 💜😈   @DOKOMI", images: ["smash_or_pass/dotgyy/Dotgy 💜😈 _ @DOKOMI-1.jpg"] },
  { name: "𓄼Azuriel↝   Couch-Dämon", images: ["smash_or_pass/einAzuriel/𓄼Azuriel↝ _ Couch-Dämon-1.jpg"] },
  { name: "Mau⭐   GerVTuber", images: ["smash_or_pass/einmau/Mau⭐__ GerVTuber-1.jpg"] },
  { name: "Elliemirellie", images: ["smash_or_pass/elliemirellie/Elliemirellie-1.jpg"] },
  { name: "Hakujou @Dokomi2026", images: ["smash_or_pass/hakujou_vtuber/Hakujou @Dokomi2026-1.jpeg"] },
  { name: "our lord and savior and master and the HOTTEST Spider in da hood ICYHIMEEEE", images: [
    "smash_or_pass/icyhime/our lord and savior and master and the HOTTEST Spider in da hood ICYHIMEEEE-1.png",
    "smash_or_pass/icyhime/our lord and savior and master and the HOTTEST Spider in da hood ICYHIMEEEE-2.png",
    "smash_or_pass/icyhime/our lord and savior and master and the HOTTEST Spider in da hood ICYHIMEEEE-3.png",
    "smash_or_pass/icyhime/our lord and savior and master and the HOTTEST Spider in da hood ICYHIMEEEE-4.webp"
  ]},
  { name: "Ravora 🍓🍃", images: [
    "smash_or_pass/itsRavora/Ravora 🍓🍃-1.jpg",
    "smash_or_pass/itsRavora/Ravora 🍓🍃-2.jpg",
    "smash_or_pass/itsRavora/Ravora 🍓🍃-3.jpg"
  ]},
  { name: "jenno ✦ artist & gervtuber", images: [
    "smash_or_pass/jennokki/jenno ✦ artist & gervtuber-1.jpg",
    "smash_or_pass/jennokki/jenno ✦ artist & gervtuber-2.jpg"
  ]},
  { name: "Kayaba sama   GERVtuber   Hüter der Zeit ⏳", images: [
    "smash_or_pass/kayaba_sama/Kayaba_sama _ GERVtuber _ Hüter der Zeit ⏳-1.png",
    "smash_or_pass/kayaba_sama/Kayaba_sama _ GERVtuber _ Hüter der Zeit ⏳-2.jpg"
  ]},
  { name: "♡ Kyomi ♡ 🦊❤️", images: ["smash_or_pass/kyowowomi/♡ Kyomi ♡ 🦊❤️-1.jpg"] },
  { name: "maeli 🍞🎀 Narwal Vtuber", images: ["smash_or_pass/maelibun/maeli 🍞🎀 Narwal Vtuber-1.jpg"] },
  { name: "Maggie   Dokomi 26   2.0. SOON", images: ["smash_or_pass/magVariety/Maggie _ Dokomi 26 _ 2.0. SOON-1.jpg"] },
  { name: "Marytsune🎀   🦊🎏", images: ["smash_or_pass/marytsunee/Marytsune🎀 _ 🦊🎏-1.jpg"] },
  { name: "Rinuki   Gunplasüchtig 🇦🇹", images: ["smash_or_pass/mechanukii/Rinuki _ Gunplasüchtig 🇦🇹-1.jpg"] },
  { name: "Misamii🐺🔥💜", images: ["smash_or_pass/misamiix3/Misamii🐺🔥💜-1.jpg"] },
  { name: "MiuYuna   GerVTuber", images: [
    "smash_or_pass/miu__yuna/MiuYuna _ GerVTuber-1.jpg",
    "smash_or_pass/miu__yuna/MiuYuna _ GerVTuber-2.jpg"
  ]},
  { name: "Pyrokid⁄Pikachu", images: [
    "smash_or_pass/pyrokid01/Pyrokid⁄Pikachu-1.jpg",
    "smash_or_pass/pyrokid01/Pyrokid⁄Pikachu-2.jpg"
  ]},
  { name: "Sir Reap", images: [
    "smash_or_pass/reap_sir/Sir Reap-1.jpg",
    "smash_or_pass/reap_sir/Sir Reap-2.jpg"
  ]},
  { name: "Roter Drache", images: ["smash_or_pass/roterdrache611/Roter Drache-1.jpg"] },
  { name: "Ryuko Izumi🫧🐟", images: ["smash_or_pass/ryuko_vt/Ryuko Izumi🫧🐟-1.jpg"] },
  { name: "Suppymeggy   Dokomi 2026", images: [
    "smash_or_pass/suppymeggy/Suppymeggy _ Dokomi 2026-1.jpg",
    "smash_or_pass/suppymeggy/Suppymeggy _ Dokomi 2026-2.jpg",
    "smash_or_pass/suppymeggy/Suppymeggy _ Dokomi 2026-3.jpg"
  ]},
  { name: "wolfiesandy", images: ["smash_or_pass/wolfiesandy/wolfiesandy-1.jpg"] },
  { name: "💜Nebula x3 🐈‍⬛💜NEKO-WITCH-VTUBER", images: [
    "smash_or_pass/x3_nebula/💜Nebula_x3 🐈‍⬛💜NEKO-WITCH-VTUBER-1.jpg",
    "smash_or_pass/x3_nebula/💜Nebula_x3 🐈‍⬛💜NEKO-WITCH-VTUBER-2.jpg"
  ]},
  { name: "Xayrie 🌸   @Dokomi 2026", images: ["smash_or_pass/xayriee/Xayrie 🌸 _ @Dokomi 2026-1.jpg"] },
  { name: "🌸Chiyo", images: ["smash_or_pass/xchiyotan/🌸Chiyo-1.jpg"] }
];

let availableCharacters = [...characters];
let currentCharacter = null;
let currentImageIndex = 0;
let characterHistory = [];
let characterFuture = [];

// Elementos del DOM / DOM Elements
const characterImage = document.getElementById('character-image');
const characterName = document.getElementById('character-name');
const resultText = document.getElementById('result');
const smashBtn = document.getElementById('smash-btn');
const passBtn = document.getElementById('pass-btn');
const card = document.querySelector('.card');
const buttons = document.querySelector('.buttons');
const dragContainer = document.getElementById('drag-container');

const imageCounter = document.createElement('div');
imageCounter.id = 'image-counter';

const prevImgBtn = document.createElement('button');
prevImgBtn.id = 'prev-img-btn';
prevImgBtn.textContent = '‹';

const dotsContainer = document.createElement('div');
dotsContainer.id = 'dots-container';

const nextImgBtn = document.createElement('button');
nextImgBtn.id = 'next-img-btn';
nextImgBtn.textContent = '›';

imageCounter.appendChild(prevImgBtn);
imageCounter.appendChild(dotsContainer);
imageCounter.appendChild(nextImgBtn);
dragContainer.parentNode.insertBefore(imageCounter, dragContainer.nextSibling);

function renderDots(total, active) {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === active ? ' dot-active' : '');
    dot.addEventListener('click', () => showImage(i));
    dotsContainer.appendChild(dot);
  }
}

function updateCounter() {
  const total = characters.length;
  const current = total - availableCharacters.length;
  document.getElementById('character-counter').textContent = `Character ${current} / ${total}`;
}

function showImage(index) {
  if (!currentCharacter) return;
  const imgs = currentCharacter.images;
  currentImageIndex = Math.max(0, Math.min(index, imgs.length - 1));

  characterImage.style.opacity = '0';
  setTimeout(() => {
    characterImage.src = imgs[currentImageIndex] || 'https://freesvg.org/storage/img/thumb/errname1.png';
    characterImage.style.opacity = '1';
  }, 120);

  if (imgs.length > 1) {
    imageCounter.style.display = 'flex';
    renderDots(imgs.length, currentImageIndex);
    prevImgBtn.classList.toggle('nav-disabled', currentImageIndex === 0);
    nextImgBtn.classList.toggle('nav-disabled', currentImageIndex === imgs.length - 1);
  } else {
    imageCounter.style.display = 'none';
  }
}

function loadCharacter() {
  if (availableCharacters.length === 0) {
    showEndMessage();
    return;
  }

  if (currentCharacter) {
    characterHistory.push({character: currentCharacter, imageIndex: currentImageIndex});
  }
  characterFuture = [];

  const randomIndex = Math.floor(Math.random() * availableCharacters.length);
  currentCharacter = availableCharacters[randomIndex];
  availableCharacters.splice(randomIndex, 1);
  currentImageIndex = 0;

  characterName.textContent = currentCharacter.name;
  showImage(0);
  updateCounter();
}

function goBack() {
  if (characterHistory.length === 0) return;

  responses.pop();
  updateDownloadButton();

  if (currentCharacter) {
    characterFuture.push({character: currentCharacter, imageIndex: currentImageIndex});
    availableCharacters.push(currentCharacter);
  }

  const previous = characterHistory.pop();
  availableCharacters = availableCharacters.filter(c => c !== previous.character);

  currentCharacter = previous.character;
  currentImageIndex = previous.imageIndex;

  characterName.textContent = currentCharacter.name;
  showImage(currentImageIndex);
  updateCounter();
}

prevImgBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentImageIndex > 0) showImage(currentImageIndex - 1);
});

nextImgBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  if (currentCharacter && currentImageIndex < currentCharacter.images.length - 1)
    showImage(currentImageIndex + 1);
});

function renderOverview() {
  const container = document.getElementById('overview-grid');
  container.innerHTML = '';

  const seen = new Set();
  const uniqueResponses = responses.filter(resp => {
    if (seen.has(resp.character)) return false;
    seen.add(resp.character);
    return true;
  });

  uniqueResponses.forEach(resp => {
    const cell = document.createElement('div');
    cell.className = 'overview-cell';

    const img = document.createElement('img');
    img.src = resp.image;

    const overlay = document.createElement('div');
    overlay.className = resp.response === 'Smash' ? 'overlay-smash' : 'overlay-pass';

    const label = document.createElement('span');
    label.className = 'overview-label';
    label.textContent = resp.character;

    cell.appendChild(img);
    cell.appendChild(overlay);
    cell.appendChild(label);
    container.appendChild(cell);
  });

  container.style.display = 'grid';
}

// Función para mostrar mensaje final (Al acabarse la lista de personajes) / Function to show end message (When the character list runs out)
function showEndMessage() {
  card.style.display = 'none';
  buttons.style.display = 'none';
  imageCounter.style.display = 'none';

  // Aquí puedes personalizar el mensaje final / Here you can customize the end message
  resultText.innerHTML = `
    <h2 style="color: #2196F3; margin: 5px 0;">

    Ihr habt das Ende erreicht!

    </h2>
    <p style="color:rgb(124, 128, 129); font-size: 12px; margin: 2px 0;">

    (oder lade die Seite einfach neu)

    </p>
    <p style="color: white; margin: 20px 0;">

    👇 Hier könnt ihr eure Entscheidungen herunterladen 👇

    </p>
  `;
  document.getElementById('download-btn').style.animation = 'pulse 1.5s infinite';
  renderOverview();
}

// Eventos de botones / Button events
smashBtn.addEventListener('click', () => handleVote('Smash'));
passBtn.addEventListener('click', () => handleVote('Pass'));

function handleVote(voteType) {
  if (!currentCharacter) return;

  responses.push({ character: currentCharacter.name, image: currentCharacter.images[0] ,response: voteType });
  
  // Muestra el texto "Elección anterior" / Show the text "Previous choice"
  document.querySelector('.result-label').classList.add('visible');

  const emoji = voteType === 'Smash' ? '😍' : '😒';
  document.getElementById('result-text').textContent = `${voteType.toUpperCase()}! ${emoji} (${currentCharacter.name})`;
  document.getElementById('back-btn').style.display = 'inline-block';

  nextCharacter();
  updateDownloadButton();
}

// Lógica de arrastre / Drag logic
let isDragging = false;
let startPosX = 0;
let currentTranslateX = 0;
const SWIPE_THRESHOLD = 200;

dragContainer.addEventListener('touchstart', startDrag, { passive: true });
dragContainer.addEventListener('touchmove', duringDrag, { passive: false });
// Añadir eventos de arrastre / Add drag events
dragContainer.addEventListener('touchend', endDrag);
dragContainer.addEventListener('mousedown', startDrag);
dragContainer.addEventListener('mousemove', duringDrag);
dragContainer.addEventListener('mouseup', endDrag);
dragContainer.addEventListener('mouseleave', endDrag);

// Función para manejar el inicio del arrastre / Function to handle the start of the drag
function startDrag(e) {
  if (!currentCharacter) return;
  isDragging = true;
  dragContainer.classList.add('dragging');
  startPosX = e.clientX ?? e.touches[0].clientX;
  currentTranslateX = 0;
}

// Función para manejar el arrastre / Function to handle the drag
function duringDrag(e) {
  if (!isDragging || !currentCharacter) return;
  e.preventDefault();
  const currentX = e.clientX ?? e.touches[0].clientX;
  currentTranslateX = currentX - startPosX;
  dragContainer.style.transform =
    `translateX(${currentTranslateX}px) rotate(${currentTranslateX * 0.1}deg)`;
}

// Función para manejar el final del arrastre / Function to handle the end of the drag
function endDrag() {
  if (!isDragging || !currentCharacter) return;
  isDragging = false;
  dragContainer.classList.remove('dragging');

  if (Math.abs(currentTranslateX) > SWIPE_THRESHOLD) {
    const voteType = currentTranslateX > 0 ? 'Smash' : 'Pass';
    handleVote(voteType);

    // Animación de salida / Exit animation
    dragContainer.style.transform =
      `translateX(${currentTranslateX * 2}px) rotate(${currentTranslateX * 0.2}deg)`;
    dragContainer.style.opacity = '0';
    setTimeout(() => {
      dragContainer.style.transform = 'none';
      dragContainer.style.opacity = '1';
    }, 300);
  } else {
    dragContainer.style.transform = 'none';
  }
}

document.addEventListener('keydown', (e) => {
  if (!currentCharacter) return;
  if (e.key === 'ArrowLeft') {
    if (currentImageIndex > 0) showImage(currentImageIndex - 1);
  } else if (e.key === 'ArrowRight') {
    if (currentImageIndex < currentCharacter.images.length - 1)
      showImage(currentImageIndex + 1);
  } else if (e.key === 's' || e.key === 'S') {
    handleVote('Smash');
  } else if (e.key === 'p' || e.key === 'P') {
    handleVote('Pass');
  }
});

// Inicializa el historial de respuestas / Initialize the response history
let responses = [];
function nextCharacter() {
  if (characterFuture.length > 0) {
    const next = characterFuture.pop();
    if (currentCharacter) {
      characterHistory.push({character: currentCharacter, imageIndex: currentImageIndex});
    }
    availableCharacters = availableCharacters.filter(c => c !== next.character);
    currentCharacter = next.character;
    currentImageIndex = next.imageIndex;
    characterName.textContent = currentCharacter.name;
    showImage(currentImageIndex);
    updateCounter();
  }
  else {
    setTimeout(loadCharacter, 0);
  }
}

// Función para mostrar el botón de descarga / Function to show the download button
function updateDownloadButton() {
  const downloadBtn = document.getElementById('download-btn');
  downloadBtn.style.display = responses.length > 0 ? 'inline-block' : 'none';
}

// Función para descargar el historial como CSV / Function to download the history as CSV
function downloadCSV() {
  const csvContent = [
    'Character,Response',
    ...responses.map(r => `"${r.character}",${r.response}`)
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `smash-pass-historial-${new Date().toISOString()}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Evento para descargar el CSV / Event to download the CSV
document.getElementById('download-btn').addEventListener('click', downloadCSV);

// Inicio de la aplicación / Start of the application
loadCharacter();