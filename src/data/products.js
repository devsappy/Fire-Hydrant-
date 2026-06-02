export const products = [
    // --- VALVES ---
    {
        id: "lv-single",
        name: "SINGLE LANDING VALVE TYPE-A",
        shortDesc: "Single outlet, Type-A configuration",
        fullDesc: "Our Single Landing Valve Type-A is engineered to provide a reliable and rapid water supply for firefighting operations. Perfect for both indoor and outdoor wet riser systems, it is manufactured from high-quality corrosion-resistant alloys ensuring longevity even under harsh environmental conditions.",
        image: "/images/hydrants/single_landing_valve.png",
        category: "valve",
        techSpecs: { material: "Gunmetal / Stainless Steel", maxFlowRate: "900 L/min", certifications: "IS:5290 Type A", standardColor: "Fire Red / Brass", nozzleSizes: "63mm Instantaneous" }
    },
    {
        id: "lv-double",
        name: "DOUBLE OUTLET TYPE LANDING VALVE TYPE-B",
        shortDesc: "Double outlet, Type-B configuration",
        fullDesc: "The Double Outlet Type Landing Valve (Type-B) offers dual rapid hose connections, doubling the firefighting capability from a single riser point. It features dual independent handwheels allowing selective flow control. Built with robust marine-grade materials to withstand immense pressure systems without leakage.",
        image: "/images/hydrants/double_landing_valve.png",
        category: "valve",
        techSpecs: { material: "Gunmetal", maxFlowRate: "1800 L/min", certifications: "IS:5290 Type B", standardColor: "Fire Red", nozzleSizes: "Dual 63mm Instantaneous" }
    },
    {
        id: "so-nozzle",
        name: "SHUT-OFF-NOZZLE",
        shortDesc: "Solid brass, ball valve mechanism",
        fullDesc: "This heavy-duty shut-off nozzle is designed to give the operator complete control over the water stream. Utilizing a precision-machined internal ball valve, it can instantly toggle between fully open to completely closed, reducing water waste and allowing for immediate response adjustments.",
        image: "/images/hydrants/shut_off_nozzle.png",
        category: "valve",
        techSpecs: { material: "Solid Brass", maxFlowRate: "450 L/min", certifications: "CE / EN", standardColor: "Brass Finish", nozzleSizes: "Adjustable 12mm to 19mm" }
    },

    // --- HYDRANTS ---
    {
        id: "ch-four",
        name: "COLLECTING HEADS (FOUR WAY)",
        shortDesc: "Four-way connection, robust design",
        fullDesc: "Four-Way Collecting Heads are an essential component for feeding multiple lines into a single substantial water reservoir or manifold. Equipped with built-in non-return valves, they ensure seamless water flow management and prevent backpressure, making them highly reliable in large-scale fire deployments.",
        image: "/images/hydrants/collecting_head.png",
        category: "hydrant",
        techSpecs: { material: "Cast Iron / Gunmetal", maxFlowRate: "3600 L/min", certifications: "IS:904", standardColor: "Fire Red", nozzleSizes: "4 x 63mm Inlets, 1 x 100mm Flange" }
    },
    {
        id: "wm-standard",
        name: "WATER MONITOR",
        shortDesc: "Red pipe, brass nozzle, handle operated",
        fullDesc: "Industrial-grade Water Monitors deliver a highly concentrated, long-distance water stream necessary for tackling large fires from a safe distance. Featuring 360-degree continuous rotation and extensive vertical elevation adjustments, it is perfect for industrial plants, refineries, and chemical depots.",
        image: "/images/hydrants/watermonitor.png",
        category: "hydrant",
        techSpecs: { material: "Carbon Steel & Brass Nozzle", maxFlowRate: "1750 to 2580 L/min", certifications: "UL Listed / FM Approved", standardColor: "Fire Red", nozzleSizes: "63mm / 75mm / 100mm Flange" }
    },

    // --- ACCESSORIES ---
    {
        id: "hc-delivery",
        name: "DELIVERY HOSE COUPLING",
        shortDesc: "Brass coupling for delivery hoses",
        fullDesc: "Constructed to rigorous standards, these couplings ensure a secure, watertight connection between delivery hoses and firefighting equipment. Designed with an instantaneous lock-and-release mechanism to save crucial seconds during an emergency setup.",
        image: "/images/hydrants/delivery_hose_coupling.png",
        category: "accessory",
        techSpecs: { material: "Gunmetal / Aluminum Alloy", maxFlowRate: "N/A", certifications: "IS:903", standardColor: "Natural / Brass", nozzleSizes: "63mm (2.5\")" }
    },
    {
        id: "hb-standard",
        name: "HOSE BOX",
        shortDesc: "Wall mounted, glass panels",
        fullDesc: "Protects your critical fire hose assemblies from dust, debris, and environmental degradation. Featuring a sturdy MS metal body and easily breakable safety glass, it provides quick access during emergencies while maintaining a neat, professional appearance.",
        image: "/images/hydrants/hose_box.png",
        category: "accessory",
        techSpecs: { material: "Mild Steel Sheet (18 SWG)", maxFlowRate: "N/A", certifications: "ISO 9001", standardColor: "Powder Coated Red", nozzleSizes: "Accommodates up to 30m Hose" }
    },
    {
        id: "bp-nozzle",
        name: "BRANCH PIPE & NOZZLE",
        shortDesc: "Solid brass, ribbed grip",
        fullDesc: "Classic, reliable short branch pipe fitted with a focused nozzle for delivering a tight, unbroken water jet. The ribbed grip handles permit excellent control even with wet gloves, making it indispensable for frontline firefighting operations.",
        image: "/images/hydrants/branch_pipe_nozzle.png",
        category: "accessory",
        techSpecs: { material: "Gunmetal / Stainless Steel", maxFlowRate: "Varies by Nozzle", certifications: "IS:903", standardColor: "Natural Polish", nozzleSizes: "12mm to 25mm bore" }
    },
    {
        id: "bp-nozle-alt",
        name: "BRANCH PIPE NOZLE",
        shortDesc: "Alternative branch pipe nozzle",
        fullDesc: "High-performance branch pipe nozzle designed for versatile firefighting stream application. Delivers excellent reach and precise flow control during critical emergency scenarios.",
        image: "/images/hydrants/Branch_Pipe_nozle.png",
        category: "accessory",
        techSpecs: { material: "Brass / Aluminum Alloy", maxFlowRate: "Adjustable", certifications: "CE / IS", standardColor: "Brass/Red", nozzleSizes: "Standard sizes available" }
    },
    {
        id: "hr-drum",
        name: "HOSE REEL DRUMS",
        shortDesc: "Wall mounted, thick hose included",
        fullDesc: "Provides a continuous water supply through a non-kinking, semi-rigid hose. Ideal for commercial buildings, the drum swings out easily, allowing for rapid deployment in any direction without tangling.",
        image: "/images/hydrants/hose_reel_drum.png",
        category: "accessory",
        techSpecs: { material: "Mild Steel, Rubber/PVC Hose", maxFlowRate: "24 L/min at 3 bar", certifications: "IS:884", standardColor: "Fire Red", nozzleSizes: "19mm / 25mm x 30m length" }
    },
    {
        id: "sp-standard",
        name: "SPRINKLERS",
        shortDesc: "Chrome frame, red glass bulb",
        fullDesc: "Automatic fire sprinklers utilizing a heat-sensitive quartzoid glass bulb. Designed to burst precisely at designated temperatures, quickly discharging water in a broad, effective coverage pattern to suppress early-stage fires.",
        image: "/images/hydrants/sprinkler.png",
        category: "accessory",
        techSpecs: { material: "Brass Frame, Chrome Finish", maxFlowRate: "K-Factor 5.6", certifications: "UL / FM Approved", standardColor: "Chrome (Red Bulb for 68°C)", nozzleSizes: "15mm (1/2\") NPT" }
    },

    // --- ALARMS ---
    {
        id: "mcp-standard",
        name: "MANUAL CALL POINT (M.S. & ABS)",
        shortDesc: "Glass center, hammer on chain",
        fullDesc: "A robust fire alarm trigger device designed for instant manual intervention. When the frangible glass element is broken, an immediate signal is transmitted to the core fire alarm control panel, instantly triggering the building's emergency response.",
        image: "/images/alarms/manual_call_point.png",
        category: "alarm",
        techSpecs: { material: "Mild Steel / ABS Plastic", maxFlowRate: "N/A", certifications: "CE Certified", standardColor: "Signal Red", nozzleSizes: "Surface or Flush Mount" }
    },
    {
        id: "fap-standard",
        name: "FIRE ALARM PANEL",
        shortDesc: "Digital display, keypad interface",
        fullDesc: "The central nervous system of your building's fire safety. This intelligent control panel monitors all connected sensors, call points, and detectors, providing precise zoning information and automating horn/strobe deployment in crisis scenarios.",
        image: "/images/alarms/fire_alarm_panel.png",
        category: "alarm",
        techSpecs: { material: "Steel Enclosure", maxFlowRate: "N/A", certifications: "EN-54 / IS:2189", standardColor: "Off-White / Red", nozzleSizes: "2 to 8 Zones (Expandable)" }
    },
    {
        id: "ms-hooter",
        name: "M.S HOOTER",
        shortDesc: "Red metal box, slatted speaker",
        fullDesc: "Industrial audio alarm device producing an intense, piercing sound designed to penetrate heavy ambient noise. Ensures immediate evacuation protocol awareness even in loud manufacturing or heavy machinery environments.",
        image: "/images/alarms/M.S Hooter.png",
        category: "alarm",
        techSpecs: { material: "Heavy Duty Mild Steel", maxFlowRate: "N/A", certifications: "CE", standardColor: "Fire Red", nozzleSizes: "Volume: >95dB at 1m" }
    },
    {
        id: "fa-strobe",
        name: "FIRE ALARM",
        shortDesc: "Red alarm unit with strobe light",
        fullDesc: "A dual-action electronic signaling device combining a loud audible siren with a high-intensity xenon strobe light. Critical for warning individuals with hearing impairments or in environments where ear protection is worn.",
        image: "/images/alarms/Fire alarms.png",
        category: "alarm",
        techSpecs: { material: "Flame-retardant ABS", maxFlowRate: "N/A", certifications: "UL Listed", standardColor: "Red Chassis, Clear Strobe", nozzleSizes: "Multi-tone Audio, 75+ Candela" }
    },
    {
        id: "sd-detector",
        name: "SMOKE DETECTOR",
        shortDesc: "Photoelectric smoke sensing technology",
        fullDesc: "Advanced photoelectric smoke detector designed to sense smoldering fires rapidly. Highly reliable ceiling-mounted unit that integrates seamlessly with existing fire alarm control panels to provide crucial early warning in commercial and residential settings.",
        image: "/images/alarms/Smoke_detector.jpg",
        category: "alarm",
        techSpecs: { material: "High Impact ABS Plastic", maxFlowRate: "N/A", certifications: "UL / CE", standardColor: "White", nozzleSizes: "Photoelectric Sensing Chamber" }
    },

    // --- EXTINGUISHERS ---
    {
        id: "abc-powder",
        name: "ABC Dry Powder Extinguisher",
        shortDesc: "Multi-purpose ABC dry chemical powder",
        fullDesc: "Versatile ABC dry chemical powder extinguisher capable of combatting Class A (combustibles), Class B (flammable liquids) and Class C (electrical) fires. A reliable multi-purpose unit for homes, offices, vehicles and light commercial spaces.",
        image: "/images/extinguishers/abc2kg.png",
        category: "extinguisher",
        sizes: ["1 Kg", "2 Kg"],
        techSpecs: { material: "Mild Steel Cylinder", maxFlowRate: "Discharge: ~8-10 s", certifications: "IS:15683 / CE", standardColor: "Fire Red", nozzleSizes: "Squeeze Grip Nozzle" }
    },
    {
        id: "dcp-powder",
        name: "DCP Dry Powder Extinguisher",
        shortDesc: "High-capacity dry chemical powder",
        fullDesc: "Heavy-duty dry chemical powder (DCP) extinguisher that forms a dense suppression cloud over severe Class B and C fires, rapidly halting combustion. Available from compact 5 kg units up to trolley-mounted 25 kg models for industrial hazard areas.",
        image: "/images/extinguishers/DCP 5 Kgs.png",
        category: "extinguisher",
        sizes: ["5 Kg", "10 Kg", "25 Kg (Trolley)"],
        techSpecs: { material: "Deep Drawn Steel", maxFlowRate: "Range: 8-10 m", certifications: "IS:10658 / ISI", standardColor: "Fire Red", nozzleSizes: "High Pressure Hose & Nozzle" }
    },
    {
        id: "co2-extinguisher",
        name: "CO2 (Carbon Dioxide) Extinguisher",
        shortDesc: "Clean, residue-free electrical fire protection",
        fullDesc: "Filled with clean, non-conductive pressurised carbon dioxide gas, ideal for protecting sensitive electrical equipment, server rooms and substations. Extinguishes by displacing oxygen and leaves zero chemical residue. Available from 4.5 kg up to wheeled 22.5 kg units.",
        image: "/images/extinguishers/co2.png",
        category: "extinguisher",
        sizes: ["4.5 Kg", "6.5 Kg", "9 Kg", "22.5 Kg (Trolley)"],
        techSpecs: { material: "Seamless Steel Cylinder", maxFlowRate: "Discharge: ~15-45 s", certifications: "IS:2878", standardColor: "Red / Black Band", nozzleSizes: "High Velocity Horn" }
    },
    {
        id: "afff-foam",
        name: "AFFF Foam Extinguisher",
        shortDesc: "Aqueous Film Forming Foam for liquid fires",
        fullDesc: "Specialised foam extinguisher that forms a vapour-sealing film across pools of flammable liquids (Class B fires), smothering them and preventing dangerous re-ignition. Available as 9 Ltr cartridge / stored-pressure units and trolley-mounted 50 Ltr models.",
        image: "/images/extinguishers/AFFF.png",
        category: "extinguisher",
        sizes: ["9 Ltr", "9 Ltr (Stored Pressure)", "50 Ltr (Trolley)"],
        techSpecs: { material: "Lined Steel Cylinder", maxFlowRate: "Discharge: >30 s", certifications: "IS:15683 / IS:13386", standardColor: "Red with Cream Label", nozzleSizes: "Foam Aerating Branch" }
    },
    {
        id: "water-extinguisher",
        name: "Water (Water-CO2) Extinguisher",
        shortDesc: "High-capacity cooling for Class A fires",
        fullDesc: "Water extinguisher pressurised by CO2 that delivers a powerful cooling jet to douse deep-seated Class A fires involving wood, paper and textiles. Available as 9 Ltr cartridge / stored-pressure units and trolley-mounted 50 Ltr models.",
        image: "/images/extinguishers/co2.png",
        category: "extinguisher",
        sizes: ["9 Ltr", "9 Ltr (Stored Pressure)", "50 Ltr (Trolley)"],
        techSpecs: { material: "Welded Steel Cylinder", maxFlowRate: "Range: 6-8 m", certifications: "IS:15683 / CE", standardColor: "Fire Red", nozzleSizes: "Solid Jet Nozzle" }
    },
    {
        id: "auto-modular",
        name: "Automatic Modular Extinguisher",
        shortDesc: "Ceiling-mounted automatic suppression",
        fullDesc: "Ceiling-mounted automatic suppression unit that activates autonomously on detecting threshold temperatures. Ideal for unmanned server rooms, electrical panels and storage units. Available in 5, 10 and 15 kg modules.",
        image: "/images/extinguishers/Automatic fire modular extinguisher.png",
        category: "extinguisher",
        sizes: ["5 Kg", "10 Kg", "15 Kg"],
        techSpecs: { material: "Powder Coated Steel", maxFlowRate: "Total Flooding System", certifications: "IS:15683", standardColor: "Fire Red", nozzleSizes: "Sprinkler head with quartz bulb" }
    },
    {
        id: "portable-400ml",
        name: "400 ml Portable Extinguisher",
        shortDesc: "Compact aerosol mini extinguisher",
        fullDesc: "Ultra-compact, lightweight aerosol-style mini extinguisher that fits in glove compartments, backpacks and tight kitchen spaces to handle minor ignitions instantly.",
        image: "/images/extinguishers/400mlportable.png",
        category: "extinguisher",
        techSpecs: { material: "Aluminium / Light Tin", maxFlowRate: "Spray Distance: 2-3 m", certifications: "CE / SGS", standardColor: "Fire Red", nozzleSizes: "Aerosol Spray Cap" }
    },
    {
        id: "fire-kit-1kg",
        name: "Fire Kit - 1 Kg",
        shortDesc: "Compact all-in-one fire safety kit",
        fullDesc: "An all-in-one introductory safety pack featuring a 1 kg ABC powder extinguisher and emergency accessories. Perfectly sized for personal vehicles, kitchens and small workshops.",
        image: "/images/extinguishers/fire_kit.png",
        category: "extinguisher",
        techSpecs: { material: "Steel Cylinder", maxFlowRate: "Discharge: ~8 s", certifications: "ISI Marked", standardColor: "Fire Red", nozzleSizes: "Squeeze Grip Nozzle" }
    },

    // --- FIRE HOSES ---
    {
        id: "premier-fire-hose",
        name: "Premier Fire Hose",
        shortDesc: "RRL controlled-percolating fire hose",
        fullDesc: "Reinforced Rubber Lined (RRL) controlled-percolating fire hose with a smooth bore for high flow, excellent flexibility and abrasion resistance. A dependable choice for building hydrant systems and fire-brigade use.",
        image: "/images/hoses/premier-fire-hose.jpg",
        category: "hose",
        sizes: ["63 mm × 15 m", "63 mm × 30 m"],
        techSpecs: { material: "Synthetic jacket, rubber lining (RRL)", maxFlowRate: "Working pressure ~7 bar", certifications: "IS:636 Type A/B", standardColor: "Red", nozzleSizes: "63 mm (2.5\") dia" }
    },
    {
        id: "premier-extra-fire-hose",
        name: "Premier Extra Fire Hose",
        shortDesc: "Heavy-duty reinforced fire hose",
        fullDesc: "A heavier-duty reinforced fire hose engineered for higher burst pressure and rugged industrial environments. Resists heat, abrasion and chemicals while maintaining high flow under demanding conditions.",
        image: "/images/hoses/premier-extra-fire-hose.jpg",
        category: "hose",
        sizes: ["63 mm × 15 m", "63 mm × 30 m"],
        techSpecs: { material: "Reinforced synthetic jacket, rubber lining", maxFlowRate: "Working pressure ~8.4 bar", certifications: "IS:636 Type B / Type 3", standardColor: "Red", nozzleSizes: "63 mm (2.5\") dia" }
    },
    {
        id: "premier-dj-hydroline",
        name: "Premier DJ / Hydroline Hose",
        shortDesc: "Double-jacket fire hose",
        fullDesc: "Double-jacket (DJ) fire hose providing an extra protective layer for superior resistance to abrasion, heat and rough handling. Ideal for severe-duty municipal and industrial firefighting applications.",
        image: "/images/hoses/premier-dj-hydroline.jpg",
        category: "hose",
        sizes: ["63 mm × 15 m", "63 mm × 30 m"],
        techSpecs: { material: "Double synthetic jacket, rubber lining", maxFlowRate: "Working pressure ~10 bar", certifications: "IS:636 / EN 14540", standardColor: "Red", nozzleSizes: "63 mm (2.5\") dia" }
    },
    {
        id: "pyrofrac",
        name: "Pyrofrac (Large Diameter Hose)",
        shortDesc: "Large-diameter water supply hose",
        fullDesc: "Large-diameter layflat supply hose for moving high volumes of water over long distances between pumps, tankers and hydrant networks. Lightweight yet rugged, with a high-strength reinforced construction.",
        image: "/images/hoses/pyrofrac.jpg",
        category: "hose",
        sizes: ["100 mm", "150 mm"],
        techSpecs: { material: "Reinforced synthetic, EPDM/nitrile lining", maxFlowRate: "High-volume supply", certifications: "IS:636 / industry standard", standardColor: "Red / Yellow", nozzleSizes: "100 mm / 150 mm dia" }
    },
    {
        id: "watershield",
        name: "Watershield Fire Hose",
        shortDesc: "Weather & abrasion resistant hose",
        fullDesc: "Fire hose with a protective outer shield offering enhanced resistance to water absorption, weathering and abrasion. Stays light and flexible for fast deployment in outdoor and marine settings.",
        image: "/images/hoses/watershield.jpg",
        category: "hose",
        sizes: ["63 mm × 15 m", "63 mm × 30 m"],
        techSpecs: { material: "Coated synthetic jacket, rubber lining", maxFlowRate: "Working pressure ~7 bar", certifications: "IS:636 Type A/B", standardColor: "Red", nozzleSizes: "63 mm (2.5\") dia" }
    },
    {
        id: "pyroprotect",
        name: "Pyroprotect Fire Hose",
        shortDesc: "Thermoplastic-coated layflat hose",
        fullDesc: "Thermoplastic-coated layflat fire hose delivering excellent durability, chemical resistance and a long service life. Its non-percolating construction keeps the outer surface dry during operation.",
        image: "/images/hoses/permaline-hose.jpg",
        category: "hose",
        sizes: ["63 mm × 15 m", "63 mm × 30 m"],
        techSpecs: { material: "TPU/PU coated synthetic jacket", maxFlowRate: "Working pressure ~8 bar", certifications: "IS:636 / EN 14540", standardColor: "Red", nozzleSizes: "63 mm (2.5\") dia" }
    },
    {
        id: "aquasurge",
        name: "Aquasurge Hose",
        shortDesc: "Flexible general-purpose fire hose",
        fullDesc: "Flexible, lightweight general-purpose fire hose for reliable water delivery across commercial and residential hydrant systems. Easy to roll, store and deploy while delivering consistent flow.",
        image: "/images/hoses/permaline-hose.jpg",
        category: "hose",
        sizes: ["63 mm × 15 m", "63 mm × 30 m"],
        techSpecs: { material: "Synthetic jacket, rubber lining", maxFlowRate: "Working pressure ~7 bar", certifications: "IS:636 Type A/B", standardColor: "Red", nozzleSizes: "63 mm (2.5\") dia" }
    },

    // --- HOSE FITTINGS & COUPLINGS ---
    {
        id: "storz-coupling",
        name: "Storz Coupling",
        shortDesc: "Symmetrical quarter-turn coupling",
        fullDesc: "Symmetrical Storz (sexless) coupling that connects with a simple quarter-turn — a global standard for fast, reliable hose-to-hose and hose-to-hydrant joints with a dependable seal.",
        image: "/images/fittings/storz-coupling.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm"],
        techSpecs: { material: "Aluminium Alloy / Gunmetal", maxFlowRate: "N/A", certifications: "DIN 14301 / IS", standardColor: "Natural", nozzleSizes: "63 mm / 100 mm" }
    },
    {
        id: "suction-coupling",
        name: "Suction Coupling",
        shortDesc: "Heavy-duty suction hose coupling",
        fullDesc: "Heavy-duty suction hose coupling engineered for negative-pressure draft lines from pumps to open water sources, with a secure threaded/lug lock for an air-tight joint.",
        image: "/images/fittings/suction-coupling.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm", "150 mm"],
        techSpecs: { material: "Gunmetal / Aluminium Alloy", maxFlowRate: "N/A", certifications: "IS:903", standardColor: "Natural", nozzleSizes: "63 / 100 / 150 mm" }
    },
    {
        id: "threaded-adaptor",
        name: "Threaded Adaptors",
        shortDesc: "Male/female threaded adaptors",
        fullDesc: "Male and female threaded adaptors for joining hoses, valves and nozzles of differing thread standards into a single watertight line.",
        image: "/images/fittings/threaded-adaptor.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm"],
        techSpecs: { material: "Gunmetal", maxFlowRate: "N/A", certifications: "IS:903", standardColor: "Brass / Natural", nozzleSizes: "63 mm / 100 mm" }
    },
    {
        id: "storz-adaptor",
        name: "Storz Adaptors",
        shortDesc: "Storz-to-standard adaptors",
        fullDesc: "Adaptor that converts Storz couplings to instantaneous, threaded or flanged connections, ensuring compatibility across mixed equipment.",
        image: "/images/fittings/storz-adaptor.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm"],
        techSpecs: { material: "Aluminium Alloy / Gunmetal", maxFlowRate: "N/A", certifications: "DIN 14301 / IS", standardColor: "Natural", nozzleSizes: "63 mm / 100 mm" }
    },
    {
        id: "gost-adaptor",
        name: "GOST Adaptors",
        shortDesc: "GOST conversion adaptors",
        fullDesc: "Adaptor for converting between GOST-pattern couplings and standard instantaneous or threaded fittings, enabling cross-standard hose connections.",
        image: "/images/fittings/gost-adaptor.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm"],
        techSpecs: { material: "Aluminium Alloy", maxFlowRate: "N/A", certifications: "GOST / IS", standardColor: "Natural", nozzleSizes: "63 mm / 100 mm" }
    },
    {
        id: "pumper-adaptor",
        name: "Pumper Adaptors",
        shortDesc: "Pumper / standpipe connection adaptor",
        fullDesc: "Pumper/standpipe connection adaptor that links fire-brigade pumps to building risers and hydrant outlets, bridging different thread and coupling standards.",
        image: "/images/fittings/pumper-adaptor.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm"],
        techSpecs: { material: "Gunmetal / Aluminium Alloy", maxFlowRate: "N/A", certifications: "IS:903 / BSRT", standardColor: "Natural", nozzleSizes: "63 mm / 100 mm" }
    },
    {
        id: "flange-adaptor",
        name: "Flange Adaptors",
        shortDesc: "Flanged shore-connection adaptor",
        fullDesc: "Flanged adaptor (shore connection) for permanently joining hose-coupling systems to flanged pipework, manifolds and shore supply points.",
        image: "/images/fittings/flange-adaptor.jpg",
        category: "fitting",
        techSpecs: { material: "Gunmetal / Cast Iron", maxFlowRate: "N/A", certifications: "IS:903", standardColor: "Natural / Red", nozzleSizes: "63 mm / 100 mm flange" }
    },
    {
        id: "blank-cap-chain",
        name: "Blank Caps & Chains",
        shortDesc: "Protective blank caps with chains",
        fullDesc: "Blank caps with retaining chains that protect landing-valve and coupling outlets from dust, debris and tampering when not in use.",
        image: "/images/fittings/blank-cap-chain.jpg",
        category: "fitting",
        sizes: ["63 mm", "100 mm"],
        techSpecs: { material: "Gunmetal / Aluminium Alloy", maxFlowRate: "N/A", certifications: "IS:5290", standardColor: "Natural / Red", nozzleSizes: "63 mm / 100 mm" }
    },
    {
        id: "collecting-breeching",
        name: "Collecting Breeching",
        shortDesc: "Two-way collecting breeching",
        fullDesc: "Two-way collecting breeching that combines two hose lines into a single delivery, feeding pumps or risers from multiple sources, with built-in non-return valves.",
        image: "/images/fittings/collecting-breeching.jpg",
        category: "fitting",
        techSpecs: { material: "Gunmetal / Aluminium Alloy", maxFlowRate: "Dual inlet to single outlet", certifications: "IS:904", standardColor: "Fire Red", nozzleSizes: "2 x 63 mm inlets" }
    },

    // --- PILLAR HYDRANTS ---
    {
        id: "pillar-hydrant-standpost",
        name: "Pillar Hydrant Standpost",
        shortDesc: "Above-ground hydrant standpost",
        fullDesc: "Above-ground pillar hydrant standpost providing rapid fire-brigade water access on industrial sites, townships and large campuses. Available in one-, two- and four-way outlet configurations.",
        image: "/images/hydrants/pillar-hydrant-standpost.jpg",
        category: "hydrant",
        sizes: ["One-Way", "Two-Way", "Four-Way"],
        techSpecs: { material: "Cast Iron / Gunmetal", maxFlowRate: "High-volume outlet", certifications: "IS:908", standardColor: "Fire Red", nozzleSizes: "63 mm / 100 mm outlets" }
    },
    {
        id: "standpipe-hydrant-key",
        name: "Standpipe, Hydrant & Key",
        shortDesc: "Standpipe with hydrant key & bar",
        fullDesc: "Portable standpipe assembly with hydrant key and bar for drawing water from underground hydrants. Includes single and double outlet options for fast deployment.",
        image: "/images/hydrants/standpipe-hydrant-key.jpg",
        category: "hydrant",
        sizes: ["Single Outlet", "Double Outlet"],
        techSpecs: { material: "Gunmetal / Aluminium Alloy", maxFlowRate: "High-volume outlet", certifications: "IS:909", standardColor: "Natural / Red", nozzleSizes: "63 mm instantaneous" }
    },

    // --- WATER MONITORS & NOZZLES ---
    {
        id: "carbon-steel-monitor",
        name: "Carbon Steel Water Monitor",
        shortDesc: "Long-range carbon-steel water monitor",
        fullDesc: "Heavy-duty carbon-steel water/jet monitor delivering a powerful long-range stream for industrial plants, refineries and storage depots. Offers 360° rotation and wide elevation control.",
        image: "/images/monitors/carbon-steel-monitor.jpg",
        category: "monitor",
        sizes: ["Long Range", "Water Jet"],
        techSpecs: { material: "Carbon Steel", maxFlowRate: "1750-2580 L/min", certifications: "IS / FM", standardColor: "Fire Red", nozzleSizes: "63 / 75 / 100 mm" }
    },
    {
        id: "ul-monitor",
        name: "UL Listed Monitor",
        shortDesc: "UL listed fixed/adjustable-flow monitor",
        fullDesc: "UL-listed water monitor engineered to international standards, available in fixed-flow and adjustable-flow variants for high-hazard occupancies requiring certified performance.",
        image: "/images/monitors/ul-monitor.jpg",
        category: "monitor",
        sizes: ["Fixed Flow", "Adjustable Flow"],
        techSpecs: { material: "Gunmetal / Alloy", maxFlowRate: "Up to 3800 L/min", certifications: "UL Listed", standardColor: "Fire Red", nozzleSizes: "65 / 100 mm" }
    },
    {
        id: "remote-monitor",
        name: "Remote Operated Monitor",
        shortDesc: "Hydraulic/electric remote monitor",
        fullDesc: "Remote-operated water monitor with hydraulic or electric actuation, allowing safe firefighting from a distance in hazardous and high-temperature environments.",
        image: "/images/monitors/remote-monitor.jpg",
        category: "monitor",
        techSpecs: { material: "Stainless / Carbon Steel", maxFlowRate: "High-volume", certifications: "Industry standard", standardColor: "Fire Red", nozzleSizes: "Programmable spray/jet" }
    },
    {
        id: "monitor-jet-nozzle",
        name: "Monitor Jet Nozzle",
        shortDesc: "Jet/spray nozzle for monitors",
        fullDesc: "High-performance jet and spray nozzles for water monitors, delivering selectable straight-jet to wide-fog patterns for maximum reach and cooling.",
        image: "/images/monitors/monitor-jet-nozzle.jpg",
        category: "monitor",
        techSpecs: { material: "Gunmetal / Alloy", maxFlowRate: "Selectable jet/spray", certifications: "IS standard", standardColor: "Natural / Red", nozzleSizes: "Jet & spray pattern" }
    },

    // --- HOSE REELS & CABINETS ---
    {
        id: "hose-reel-drum-newage",
        name: "Hose Reel Drum",
        shortDesc: "Fixed/swing/stand hose reel",
        fullDesc: "First-aid hose reel drum providing a continuous, non-kinking water supply for immediate firefighting. Available in fixed, swing-out and stand-mounted variants for any installation.",
        image: "/images/reels/hose-reel.jpg",
        category: "reel",
        sizes: ["Fixed Type", "Swing Type", "Stand Mounted"],
        techSpecs: { material: "Mild Steel, Rubber/PVC Hose", maxFlowRate: "24 L/min at 3 bar", certifications: "IS:884", standardColor: "Fire Red", nozzleSizes: "19 / 25 mm x 30 m" }
    },
    {
        id: "hose-reel-accessories",
        name: "Hose Reel Accessories",
        shortDesc: "Nozzles, hoses & spares",
        fullDesc: "Complete range of hose-reel accessories including gunmetal and PVC reel nozzles, rubber, PVC and thermoplastic hoses, and replacement spares.",
        image: "/images/reels/hose-reel-accessories.jpg",
        category: "reel",
        techSpecs: { material: "Gunmetal / PVC / Rubber", maxFlowRate: "N/A", certifications: "IS:884", standardColor: "Red / Natural", nozzleSizes: "19 / 25 mm" }
    },
    {
        id: "fire-hose-cabinet",
        name: "Fire Hose Cabinet",
        shortDesc: "Hose & equipment storage cabinet",
        fullDesc: "Robust fire hose cabinet that protects hoses, nozzles and landing valves from dust and tampering while keeping equipment instantly accessible. Single, double, vertical and stand-type options.",
        image: "/images/reels/hose-cabinet.jpg",
        category: "reel",
        sizes: ["Single", "Double", "Stand Type"],
        techSpecs: { material: "MS Sheet, Powder Coated / Glass", maxFlowRate: "N/A", certifications: "ISO 9001", standardColor: "Fire Red", nozzleSizes: "Wall / Stand mount" }
    },

    // --- SPRINKLER SYSTEMS ---
    {
        id: "pendent-sprinkler",
        name: "Pendent Type Sprinkler",
        shortDesc: "Downward-spray ceiling sprinkler",
        fullDesc: "Pendent-type automatic sprinkler that hangs below the ceiling and discharges a downward hemispherical spray. Uses a heat-sensitive quartzoid bulb that bursts at its rated temperature.",
        image: "/images/sprinklers/pendent-sprinkler.jpg",
        category: "sprinkler",
        sizes: ["68°C", "79°C", "93°C"],
        techSpecs: { material: "Brass, Chrome Finish", maxFlowRate: "K-Factor 5.6 / 8.0", certifications: "UL / FM", standardColor: "Chrome", nozzleSizes: "15 / 20 mm NPT" }
    },
    {
        id: "upright-sprinkler",
        name: "Upright Type Sprinkler",
        shortDesc: "Upward-spray sprinkler",
        fullDesc: "Upright-type automatic sprinkler mounted above the pipe to deflect water upward then outward, ideal for exposed-pipe installations in warehouses and plant rooms.",
        image: "/images/sprinklers/upright-sprinkler.jpg",
        category: "sprinkler",
        sizes: ["68°C", "79°C", "93°C"],
        techSpecs: { material: "Brass, Chrome Finish", maxFlowRate: "K-Factor 5.6 / 8.0", certifications: "UL / FM", standardColor: "Chrome / Brass", nozzleSizes: "15 / 20 mm NPT" }
    },
    {
        id: "concealed-sprinkler",
        name: "Concealed Type Sprinkler",
        shortDesc: "Flush concealed sprinkler",
        fullDesc: "Concealed sprinkler hidden behind a decorative cover plate that drops away under heat, giving a clean ceiling appearance with quick-response protection for offices and hotels.",
        image: "/images/sprinklers/concealed-sprinkler.jpg",
        category: "sprinkler",
        techSpecs: { material: "Brass with cover plate", maxFlowRate: "K-Factor 5.6", certifications: "UL / FM", standardColor: "White Cover", nozzleSizes: "15 mm NPT" }
    },
    {
        id: "alarm-check-valve",
        name: "Alarm Check Valve",
        shortDesc: "Wet-riser alarm check valve",
        fullDesc: "Alarm check valve for wet-pipe sprinkler systems that detects water flow during activation and triggers a hydraulic/electric alarm, ensuring rapid notification of a fire event.",
        image: "/images/sprinklers/alarm-check-valve.jpg",
        category: "sprinkler",
        sizes: ["100 mm", "150 mm"],
        techSpecs: { material: "Cast Iron / Gunmetal trim", maxFlowRate: "System rated", certifications: "UL / FM", standardColor: "Red", nozzleSizes: "100 / 150 mm flanged" }
    },
    {
        id: "water-spray-nozzle",
        name: "Water Spray Nozzle",
        shortDesc: "Medium/high velocity spray nozzle",
        fullDesc: "Projector-type water spray nozzles for deluge and fixed water-spray systems protecting transformers, vessels and conveyor lines. Available in medium- and high-velocity patterns.",
        image: "/images/sprinklers/water-spray-nozzle.jpg",
        category: "sprinkler",
        sizes: ["Medium Velocity", "High Velocity"],
        techSpecs: { material: "Gunmetal / Brass", maxFlowRate: "Pattern dependent", certifications: "TAC / UL", standardColor: "Natural / Brass", nozzleSizes: "Various spray angles" }
    },
    {
        id: "sprinkler-flexible-hose",
        name: "Sprinkler Flexible Hose",
        shortDesc: "Braided flexible sprinkler connector",
        fullDesc: "Flexible stainless-steel hose connector that links sprinkler heads to branch lines, simplifying alignment with ceiling grids and speeding up installation. Braided and unbraided options.",
        image: "/images/sprinklers/sprinkler-flexible-hose.jpg",
        category: "sprinkler",
        sizes: ["700 mm", "1000 mm", "1200 mm", "1500 mm"],
        techSpecs: { material: "Stainless Steel 304", maxFlowRate: "K-Factor matched", certifications: "UL / FM", standardColor: "Steel", nozzleSizes: "15 / 20 / 25 mm" }
    }
];

