// Minecraft Strategic Content Data for QMC Studio

const STRATEGIC_CONTENT = {
    // 1. KREASI DATA (Portfolio Kategori)
    kreasi: [
        {
            id: 1,
            category: "builder",
            title: "Fantasy Medieval Mountain",
            desc: "Peta Gunun Medieval Fantasi yang dirancang untuk spawn server Minecraft.",
            thumbnail: "https://cdn.discordapp.com/attachments/1348278857307783301/1511345551071907870/IMG-20260321-WA0079.jpg?ex=6a201dba&is=6a1ecc3a&hm=f3c2e56787a961fcdc81f79a80777330848bf6386d326064f2329846f1c1b579&"
        },
        {
            id: 2,
            category: "modeling",
            title: "Fallen Armor",
            desc: "Model armor 3D kustom (.json/.bbmodel) Armor dengan bentuk robot yang unik.",
            thumbnail: "https://media.discordapp.net/attachments/1501970188067799231/1511366355973308637/Template_Desain_Seperti_Ini.png?ex=6a20311b&is=6a1edf9b&hm=3d8ea652157e5521e2970f3b581bf826750263829020a513ec854eb54510f483&=&format=webp&quality=lossless&width=1526&height=859"
        },
        {
            id: 3,
            category: "animasi",
            title: "Server Trailer Cinematic Animation",
            desc: "Pembuatan video intro animasi promosi server berskala sinematik AAA menggunakan Blender/Mine-imator.",
            thumbnail: "https://cdn.discordapp.com/attachments/1348278857307783301/1511345310780358766/Tak_berjudul246_20260602192448.png?ex=6a201d81&is=6a1ecc01&hm=583e7e6561e26d9a9d8915f93d7577a8d4dc9da5b9e827130b31bb1016d3de88&"
        },
        {
            id: 4,
            category: "render",
            title: "Banner Render",
            desc: "Two Minecraft-style characters are facing each other intensely, with dramatic lighting and colorful blue/red hair, creating a cinematic rivalry scene.",
            thumbnail: "https://cdn.discordapp.com/attachments/1348278857307783301/1511345789123825745/export202603281818522320.png?ex=6a201df3&is=6a1ecc73&hm=a2e602385cace6d25d286c9db62408244e1de23272fbebd0959ed585bbaa1e0b&"
        }
    ],

    // 2. PRODUCTS DATA (Marketplace Premium Store)
    products: [
        {   
            id: 1,
            tag: "Skin Premium",
            rating: "4.8",
            terjual: "100+ terjual",
            title: "Skin Minecraft Premium 64x - 512x All Request",
            hargaAsli: "Rp 5.000.00 - Rp 70.000.00",
            diskon: "0%",
            hargaDiskon: "Rp 5.000.00 - Rp 70.000.00",
            badgeText: "MINECRAFT SKIN PREMIUM ALL REQ REFERENCE 64x - 512x",
            badgeType: "slow", // untuk ikon kilat/proses cepat
            stok: " ",
            image: "https://cdn.discordapp.com/attachments/1501970188067799231/1511662775900962896/quality_restoration_20260411150912295.jpg?ex=6a21452b&is=6a1ff3ab&hm=5c6852f77a3501a43c70e22898560c4f9df3f24fe816ca9041f2cbd6cce268e7&" // Ganti dengan path gambar Anda
        },
        {
            id: 2,
            tag: "Render",
            tagAlt: "Render Minecraft", // Dual tag seperti di gambar kedua
            rating: "4.9",
            terjual: "100+ terjual",
            title: "Render Minecraft",
            hargaAsli: "Rp 20.000.00",
            diskon: "-0%",
            hargaDiskon: "Rp 20.000.00",
            badgeText: "Render Minecraft Kualitas HD, Bisa Request Pose & Background!",
            badgeType: "fast", // untuk ikon pembuatan cepat
            stok: "",
            image: "https://cdn.discordapp.com/attachments/1348278857307783301/1511345789123825745/export202603281818522320.png?ex=6a20c6b3&is=6a1f7533&hm=28cb2e3dfc9af1e4e15fbcfae6aaec775c8c910f04593291a3629e8e768fd026&"
        },
        {
            id: 3,
            tag: "Model",
            tagAlt: "Model All Req", // Dual tag seperti di gambar kedua
            rating: "4.9",
            terjual: "100+ terjual",
            title: "3D Model Minecraft All Request",
            hargaAsli: "Rp 250.000.00",
            diskon: "25%",
            hargaDiskon: "Rp 187.500.00",
            badgeText: "32 Model Kustom Java Dan Bedrock",
            badgeType: "slow", // untuk ikon pembuatan cepat
            stok: "Sisa 25",
            image: "https://cdn.discordapp.com/attachments/1501970188067799231/1511357673583677440/image.png?ex=6a20d1c5&is=6a1f8045&hm=161774558fd4a5e4d852220f07e8b987f595d1a89ab19ad6ff9a146641033ec1&"
        },
        {
            id: 4,
            tag: "Animation",
            rating: "4.8",
            terjual: "20+ terjual",
            title: "Animasi Minecraft Kustom",
            hargaAsli: "Rp 8.000.00 - Rp 1.000.000.00",
            diskon: "0%",
            hargaDiskon: "Rp 8.000.00 - Rp 1.000.000.00",
            badgeText: "BISA REQUEST ANIMASI DAN SCENENYA!",
            badgeType: "very-slow", // untuk ikon kilat/proses cepat
            stok: "Sisa 3",
            image: "https://cdn.discordapp.com/attachments/1348278857307783301/1511345310780358766/Tak_berjudul246_20260602192448.png?ex=6a20c641&is=6a1f74c1&hm=b6f20af54ac54466185c664f227eccb808b5db9b3e613486cd88129e28c3f421&" // Ganti dengan path gambar Anda
        },
        {
            id: 5,
            tag: "Photoshot",
            tagAlt: "Photoshot", // Dual tag seperti di gambar kedua
            rating: "4.9",
            terjual: "100+ terjual",
            title: "Photoshot Minecraft",
            hargaAsli: "Rp 5.000.00 - Rp 15.000.00",
            diskon: "-0%",
            hargaDiskon: "Rp 5.000.00 - Rp 15.000.00",
            badgeText: "Photoshot Minecraft Kualitas HD, Bisa Request Ukuran Gambar!",
            badgeType: "slow", // untuk ikon pembuatan cepat
            stok: "",
            image: "https://cdn.discordapp.com/attachments/1501970188067799231/1511660828297007154/IMG-20260413-WA0016.jpg?ex=6a21435a&is=6a1ff1da&hm=e54af47d76256cb62fd122218ec729d2b7892cb24ba3a67df6b8dc4b21534117&"
        },
        {
            id: 6,
            tag: "JJ",
            tagAlt: "JJ All Req Music", // Dual tag seperti di gambar kedua
            rating: "4.9",
            terjual: "40+ terjual",
            title: "JJ / Editor Am All Request Music And Style JJ",
            hargaAsli: "Rp 5.000.00",
            diskon: "0%",
            hargaDiskon: "Rp 5.000.00",
            badgeText: "Custom JJ All Request Music And Style JJ, Bisa Request Lagu Dan Style JJ Sesuai Keinginan!",
            badgeType: "slow", // untuk ikon pembuatan cepat
            stok: "",
            image: "https://cdn.discordapp.com/attachments/1501970188067799231/1511661705497677895/WA_1780478600567.jpg?ex=6a21442b&is=6a1ff2ab&hm=094949ab46847cc6df525840d4ceba54addc00d2c25a31b8f75defc14fcb0f0e&"
        },
        {
            id: 7,
            tag: "Build",
            tagAlt: "Building", // Dual tag seperti di gambar kedua
            rating: "4.9",
            terjual: "100+ terjual",
            title: "Building Minecraft Kustom",
            hargaAsli: "Rp 50.000.00 - Rp 5.000.000.00",
            diskon: "0%",
            hargaDiskon: "Rp 50.000.00 - Rp 5.000.000.00",
            badgeText: "Custom Building Minecraft Kustom, Bisa Request Desain Dan Style Sesuai Keinginan!",
            badgeType: "very-slow", // untuk ikon pembuatan cepat
            stok: "",
            image: "https://cdn.discordapp.com/attachments/1348278857307783301/1511345551071907870/IMG-20260321-WA0079.jpg?ex=6a20c67a&is=6a1f74fa&hm=e2810778639e7fb3c7c975a68d64318fe7bb7fe5df27e4c8ada7680a7aa846d8&"
        }
    ],

    // 3. STAFF / MEMBERS DATA
    members: [
        {
            name: "QodliMC",
            role: "Animator & Owner",
            avatar: "https://cdn.discordapp.com/attachments/1348278857307783301/1511338385774481459/IMG_20260523_104847.jpg?ex=6a20170e&is=6a1ec58e&hm=28441d8f5ae28e5b669aa3f5ee4091fb02a4c24029517e207edfc527807fbbb4&"
        },
        {
            name: "FedericMC",
            role: "Blockbench Designer & Skin Maker",
            avatar: "img/profil/Federic.jpg"
        },
        {
            name: "Exel",
            role: "Photoshop Editor & Thumbnail Maker",
            avatar: "https://cdn.discordapp.com/attachments/1501970188067799231/1511340470486175886/WA_1780402035641.jpg?ex=6a2018ff&is=6a1ec77f&hm=d279738b4f0ee55b6e36196bce9f8a4411ffc96b86320fb250444bec37936a5d&"
        },
        {
            name: "Tama",
            role: "Blockbench Designer",
            avatar: "https://cdn.discordapp.com/attachments/1501970188067799231/1511350910138454146/WA_1780404523821.jpg?ex=6a2022b8&is=6a1ed138&hm=ebe4672336c6efc0b446f058ed976ab7c18a42c6719e3636fd7636ba886d1508&"
        },
        {
            name: "Coji",
            role: "Render, 3D model, & Skin Maker",
            avatar: "https://cdn.discordapp.com/attachments/1506110494023356474/1511351367082446938/IMG_20260602_194823.jpg?ex=6a202325&is=6a1ed1a5&hm=45bffeb848df4121a8a32a47ac2817d4ccd826ce029f161b4c23d33af825864c&"
        },
        {
            name: "Leon",
            role: "Skin Maker & Render",
            avatar: "https://cdn.discordapp.com/attachments/1348278857307783301/1511341353403940964/Tak_berjudul245_20260602190638.png?ex=6a2019d2&is=6a1ec852&hm=9542670b0f733165ff33f34b96e65b8e3d223db5876a3556db5916edea32c040&"
        },
        {
            name: "Regarbuilds",
            role: "Builder",
            avatar: "https://cdn.discordapp.com/attachments/1501970188067799231/1511712435927519362/IMG-20260603-WA0060.jpg?ex=6a21736a&is=6a2021ea&hm=42053adfb5b8d2ad3a3c675aaee3c8dc30ac9ff5b66a875eaa5484b365fc7499&"
        },
        {
            name: "Ryuraviel",
            role: "Management",
            avatar: "https://i.pinimg.com/736x/ff/9f/86/ff9f86fd3b680615afd79396858c3f57.jpg"
        },
        {
            name: "Zen",
            role: "Blockbench Designer (silau dikit)",
            avatar: "https://media.discordapp.net/attachments/1348278857307783301/1511341351533543514/Tak_berjudul245_20260602190728.png?ex=6a2019d1&is=6a1ec851&hm=fb15fabe472960ea04cfe18b42cd8ed62207ab59674de86ac477144e47d147f8&=&format=webp&quality=lossless&width=859&height=859"
        },
        {
            name: "Angga",
            role: "JJ Maker",
            avatar: "https://cdn.discordapp.com/attachments/1348278857307783301/1511708808047497357/IMG-20260603-WA0024.jpg.jpeg?ex=6a21700a&is=6a201e8a&hm=193ac89f6202203735d5f73ad8e56e78e832ccb64ca3ec50239e8af725551dbe&"
        },
        {
            name: "Andi",
            role: "Renderer",
            avatar: "https://cdn.discordapp.com/attachments/1506110493889269794/1511352092273541330/IMG-20260602-WA0055.jpg?ex=6a2023d2&is=6a1ed252&hm=ab585fc7a83ded19d3a951920530bf8923454d46049e919ae6804c463c3e7528&"
        },
        {
            name: "Redonkai",
            role: "Animator Prisma 3D",
            avatar: "https://cdn.discordapp.com/attachments/1506110494023356474/1511359440773709854/Tak_berjudul245_20260602202147.png?ex=6a20d36a&is=6a1f81ea&hm=db2b7abd6b483d61ff6e2cf60f4121dbf41393a61410de621b78cae1e8fac3c2&"
        },
        {
            name: "Ke4izen",
            role: "Render",
            avatar: "https://cdn.discordapp.com/attachments/1501970188067799231/1511352804856434698/WA_1780404969399.jpg?ex=6a20247c&is=6a1ed2fc&hm=cca1bd4f2838a8dc789ead6b3264f52f22df22eae9147d5be796ef0294039bc0&"
        },
        {
            name: "Jhohan",
            role: "Blockbench Designer",
            avatar: "https://media.discordapp.net/attachments/1506110493889269794/1511355326048505867/Tak_berjudul74_20260602195912.png?ex=6a2026d5&is=6a1ed555&hm=330235e989e253459895dbd78a473f8209f1c426a871bcf4f036f7cce63b535d&=&format=webp&quality=lossless&width=1036&height=989"
        },
        {
            name: "Nanda",
            role: "Management",
            avatar: "https://cdn.discordapp.com/attachments/1348278857307783301/1511341352779124837/Tak_berjudul245_20260602191018.png?ex=6a2019d1&is=6a1ec851&hm=6eff879a0d2c6330b0ffc1311184771a6908cf7512b243539b3850c2a492c706&"
        },
        {
            name: "Riju",
            role: "Render & Editor",
            avatar: "https://cdn.discordapp.com/attachments/1511351055152320632/1511351094964392117/IMG-20260602-WA0250.jpg?ex=6a2022e4&is=6a1ed164&hm=0579f3c32219f6330969128fa62666e77b2cf94b68b9c769510f1b5ab55adc3f&"
        }
    ]
};
