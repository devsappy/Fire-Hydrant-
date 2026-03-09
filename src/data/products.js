export const products = [
    // --- VALVES ---
    {
        id: "lv-single",
        name: "SINGLE LANDING VALVE TYPE-A",
        shortDesc: "Single outlet, Type-A configuration",
        fullDesc: "Our Single Landing Valve Type-A is engineered to provide a reliable and rapid water supply for firefighting operations. Perfect for both indoor and outdoor wet riser systems, it is manufactured from high-quality corrosion-resistant alloys ensuring longevity even under harsh environmental conditions.",
        image: "/images/single_landing_valve.png",
        category: "valve",
        techSpecs: { material: "Gunmetal / Stainless Steel", maxFlowRate: "900 L/min", certifications: "IS:5290 Type A", standardColor: "Fire Red / Brass", nozzleSizes: "63mm Instantaneous" }
    },
    {
        id: "lv-double",
        name: "DOUBLE OUTLET TYPE LANDING VALVE TYPE-B",
        shortDesc: "Double outlet, Type-B configuration",
        fullDesc: "The Double Outlet Type Landing Valve (Type-B) offers dual rapid hose connections, doubling the firefighting capability from a single riser point. It features dual independent handwheels allowing selective flow control. Built with robust marine-grade materials to withstand immense pressure systems without leakage.",
        image: "/images/double_landing_valve.png",
        category: "valve",
        techSpecs: { material: "Gunmetal", maxFlowRate: "1800 L/min", certifications: "IS:5290 Type B", standardColor: "Fire Red", nozzleSizes: "Dual 63mm Instantaneous" }
    },
    {
        id: "so-nozzle",
        name: "SHUT-OFF-NOZZLE",
        shortDesc: "Solid brass, ball valve mechanism",
        fullDesc: "This heavy-duty shut-off nozzle is designed to give the operator complete control over the water stream. Utilizing a precision-machined internal ball valve, it can instantly toggle between fully open to completely closed, reducing water waste and allowing for immediate response adjustments.",
        image: "/images/shut_off_nozzle.png",
        category: "valve",
        techSpecs: { material: "Solid Brass", maxFlowRate: "450 L/min", certifications: "CE / EN", standardColor: "Brass Finish", nozzleSizes: "Adjustable 12mm to 19mm" }
    },

    // --- HYDRANTS ---
    {
        id: "ch-four",
        name: "COLLECTING HEADS (FOUR WAY)",
        shortDesc: "Four-way connection, robust design",
        fullDesc: "Four-Way Collecting Heads are an essential component for feeding multiple lines into a single substantial water reservoir or manifold. Equipped with built-in non-return valves, they ensure seamless water flow management and prevent backpressure, making them highly reliable in large-scale fire deployments.",
        image: "/images/collecting_head.png",
        category: "hydrant",
        techSpecs: { material: "Cast Iron / Gunmetal", maxFlowRate: "3600 L/min", certifications: "IS:904", standardColor: "Fire Red", nozzleSizes: "4 x 63mm Inlets, 1 x 100mm Flange" }
    },
    {
        id: "wm-standard",
        name: "WATER MONITOR",
        shortDesc: "Red pipe, brass nozzle, handle operated",
        fullDesc: "Industrial-grade Water Monitors deliver a highly concentrated, long-distance water stream necessary for tackling large fires from a safe distance. Featuring 360-degree continuous rotation and extensive vertical elevation adjustments, it is perfect for industrial plants, refineries, and chemical depots.",
        image: "/images/water_monitor.png",
        category: "hydrant",
        techSpecs: { material: "Carbon Steel & Brass Nozzle", maxFlowRate: "1750 to 2580 L/min", certifications: "UL Listed / FM Approved", standardColor: "Fire Red", nozzleSizes: "63mm / 75mm / 100mm Flange" }
    },

    // --- ACCESSORIES ---
    {
        id: "hc-delivery",
        name: "DELIVERY HOSE COUPLING",
        shortDesc: "Brass coupling for delivery hoses",
        fullDesc: "Constructed to rigorous standards, these couplings ensure a secure, watertight connection between delivery hoses and firefighting equipment. Designed with an instantaneous lock-and-release mechanism to save crucial seconds during an emergency setup.",
        image: "/images/delivery_hose_coupling.png",
        category: "accessory",
        techSpecs: { material: "Gunmetal / Aluminum Alloy", maxFlowRate: "N/A", certifications: "IS:903", standardColor: "Natural / Brass", nozzleSizes: "63mm (2.5\")" }
    },
    {
        id: "hb-standard",
        name: "HOSE BOX",
        shortDesc: "Wall mounted, glass panels",
        fullDesc: "Protects your critical fire hose assemblies from dust, debris, and environmental degradation. Featuring a sturdy MS metal body and easily breakable safety glass, it provides quick access during emergencies while maintaining a neat, professional appearance.",
        image: "/images/hose_box.png",
        category: "accessory",
        techSpecs: { material: "Mild Steel Sheet (18 SWG)", maxFlowRate: "N/A", certifications: "ISO 9001", standardColor: "Powder Coated Red", nozzleSizes: "Accommodates up to 30m Hose" }
    },
    {
        id: "bp-nozzle",
        name: "BRANCH PIPE & NOZZLE",
        shortDesc: "Solid brass, ribbed grip",
        fullDesc: "Classic, reliable short branch pipe fitted with a focused nozzle for delivering a tight, unbroken water jet. The ribbed grip handles permit excellent control even with wet gloves, making it indispensable for frontline firefighting operations.",
        image: "/images/branch_pipe_nozzle.png",
        category: "accessory",
        techSpecs: { material: "Gunmetal / Stainless Steel", maxFlowRate: "Varies by Nozzle", certifications: "IS:903", standardColor: "Natural Polish", nozzleSizes: "12mm to 25mm bore" }
    },
    {
        id: "hr-drum",
        name: "HOSE REEL DRUMS",
        shortDesc: "Wall mounted, thick hose included",
        fullDesc: "Provides a continuous water supply through a non-kinking, semi-rigid hose. Ideal for commercial buildings, the drum swings out easily, allowing for rapid deployment in any direction without tangling.",
        image: "/images/hose_reel_drum.png",
        category: "accessory",
        techSpecs: { material: "Mild Steel, Rubber/PVC Hose", maxFlowRate: "24 L/min at 3 bar", certifications: "IS:884", standardColor: "Fire Red", nozzleSizes: "19mm / 25mm x 30m length" }
    },
    {
        id: "sp-standard",
        name: "SPRINKLERS",
        shortDesc: "Chrome frame, red glass bulb",
        fullDesc: "Automatic fire sprinklers utilizing a heat-sensitive quartzoid glass bulb. Designed to burst precisely at designated temperatures, quickly discharging water in a broad, effective coverage pattern to suppress early-stage fires.",
        image: "/images/sprinkler.png",
        category: "accessory",
        techSpecs: { material: "Brass Frame, Chrome Finish", maxFlowRate: "K-Factor 5.6", certifications: "UL / FM Approved", standardColor: "Chrome (Red Bulb for 68°C)", nozzleSizes: "15mm (1/2\") NPT" }
    },

    // --- ALARMS ---
    {
        id: "mcp-standard",
        name: "MANUAL CALL POINT (M.S. & ABS)",
        shortDesc: "Glass center, hammer on chain",
        fullDesc: "A robust fire alarm trigger device designed for instant manual intervention. When the frangible glass element is broken, an immediate signal is transmitted to the core fire alarm control panel, instantly triggering the building's emergency response.",
        image: "/images/manual_call_point.png",
        category: "alarm",
        techSpecs: { material: "Mild Steel / ABS Plastic", maxFlowRate: "N/A", certifications: "CE Certified", standardColor: "Signal Red", nozzleSizes: "Surface or Flush Mount" }
    },
    {
        id: "fap-standard",
        name: "FIRE ALARM PANEL",
        shortDesc: "Digital display, keypad interface",
        fullDesc: "The central nervous system of your building's fire safety. This intelligent control panel monitors all connected sensors, call points, and detectors, providing precise zoning information and automating horn/strobe deployment in crisis scenarios.",
        image: "/images/fire_alarm_panel.png",
        category: "alarm",
        techSpecs: { material: "Steel Enclosure", maxFlowRate: "N/A", certifications: "EN-54 / IS:2189", standardColor: "Off-White / Red", nozzleSizes: "2 to 8 Zones (Expandable)" }
    },
    {
        id: "ms-hooter",
        name: "M.S HOOTER",
        shortDesc: "Red metal box, slatted speaker",
        fullDesc: "Industrial audio alarm device producing an intense, piercing sound designed to penetrate heavy ambient noise. Ensures immediate evacuation protocol awareness even in loud manufacturing or heavy machinery environments.",
        image: "/images/M.S Hooter.png",
        category: "alarm",
        techSpecs: { material: "Heavy Duty Mild Steel", maxFlowRate: "N/A", certifications: "CE", standardColor: "Fire Red", nozzleSizes: "Volume: >95dB at 1m" }
    },
    {
        id: "fa-strobe",
        name: "FIRE ALARM",
        shortDesc: "Red alarm unit with strobe light",
        fullDesc: "A dual-action electronic signaling device combining a loud audible siren with a high-intensity xenon strobe light. Critical for warning individuals with hearing impairments or in environments where ear protection is worn.",
        image: "/images/fire_alarm.png",
        category: "alarm",
        techSpecs: { material: "Flame-retardant ABS", maxFlowRate: "N/A", certifications: "UL Listed", standardColor: "Red Chassis, Clear Strobe", nozzleSizes: "Multi-tone Audio, 75+ Candela" }
    },

    // --- EXTINGUISHERS (NEW) ---
    {
        id: "fire-kit-1kg",
        name: "FIRE KIT - 1 KG.",
        shortDesc: "Compact fire safety kit, 1 kg",
        fullDesc: "An all-in-one introductory safety pack featuring a 1kg ABC powder extinguisher and emergency accessories. Perfectly sized for personal vehicles, robust kitchens, and small workshop applications to manage unexpected flare-ups.",
        image: "/images/fire_kit.png",
        category: "extinguisher",
        techSpecs: { material: "Steel Cylinder", maxFlowRate: "Discharge Time: ~8s", certifications: "ISI Marked", standardColor: "Fire Red", nozzleSizes: "Squeeze Grip Nozzle" }
    },
    {
        id: "auto-modular",
        name: "5, 10, 15 KGS. AUTOMATIC FIRE MODULAR",
        shortDesc: "Modular automatic fire extinguisher",
        fullDesc: "Ceiling-mounted automatic suppression systems that activate autonomously upon detecting precise threshold temperatures. Ideal for unmanned server rooms, electrical transformer cabinets, and hazardous storage units.",
        image: "/images/Automatic fire modular extinguisher.png",
        category: "extinguisher",
        techSpecs: { material: "Anti-corrosive Powder Coated Steel", maxFlowRate: "Total Flooding System", certifications: "IS:15683", standardColor: "Fire Red", nozzleSizes: "Sprinkler head with quartz bulb" }
    },
    {
        id: "portable-400ml",
        name: "400 ML. PORTABLE",
        shortDesc: "High-portability 400ml extinguisher",
        fullDesc: "Ultra-compact and lightweight, this aerosol-style mini extinguisher is designed to fit seamlessly into glove compartments, backpacks, or tight kitchen spaces to effortlessly handle minor ignitions.",
        image: "/images/400mlportable.png",
        category: "extinguisher",
        techSpecs: { material: "Aluminum / Light Tin", maxFlowRate: "Spray Distance: 2-3m", certifications: "CE / SGS", standardColor: "Fire Red", nozzleSizes: "Aerosol Spray Cap" }
    },
    {
        id: "abc-1kg",
        name: "ABC 1 KG",
        shortDesc: "ABC powder type fire extinguisher, 1kg",
        fullDesc: "Highly versatile 1kg dry powder extinguisher capable of combatting Class A (combustible), Class B (flammable liquid), and Class C (electrical) fires. A reliable multi-purpose tool for immediate residential or vehicular emergencies.",
        image: "/images/abc1kg.png",
        category: "extinguisher",
        techSpecs: { material: "Mild Steel Cylinder", maxFlowRate: "Discharge Time: ~8s", certifications: "IS:15683", standardColor: "Red Cylindrical", nozzleSizes: "Standard Squeeze Grip" }
    },
    {
        id: "abc-2kg",
        name: "ABC 2 KGS",
        shortDesc: "ABC powder type fire extinguisher, 2kg",
        fullDesc: "Providing double the suppression capacity of the base model, this 2kg ABC dry chemical extinguisher delivers extended discharge duration for tackling moderate-sized multi-class fires in offices and light commercial spaces.",
        image: "/images/abc2kg.png",
        category: "extinguisher",
        techSpecs: { material: "High Quality Steel", maxFlowRate: "Discharge Time: ~10s", certifications: "IS:15683 / CE", standardColor: "Fire Red", nozzleSizes: "Standard M10 Nozzle" }
    },
    {
        id: "afff-9l",
        name: "AFFF 9 Ltrs",
        shortDesc: "Aqueous Film Forming Foam, 9 liters",
        fullDesc: "Specialized foam liquid extinguisher that forms a powerful vapor-sealing film across pools of flammable liquids (Class B fires), starving them of oxygen and preventing highly dangerous re-ignitions.",
        image: "/images/AFFF 9 Ltrs.png",
        category: "extinguisher",
        techSpecs: { material: "Anti-corrosive Internal Lined Steel", maxFlowRate: "Discharge Time: >30s", certifications: "IS:15683", standardColor: "Red with Cream Label", nozzleSizes: "Foam Aerating Branch" }
    },
    {
        id: "dcp-5kg",
        name: "DCP 5 Kgs",
        shortDesc: "Dry Chemical Powder, 5kg",
        fullDesc: "A heavy-duty dry chemical powder (DCP) unit holding 5 kilograms of suppression agent. Forms a dense dust cloud over severe Class B and C conflagrations, rapidly halting the chemical reaction of the fire.",
        image: "/images/DCP 5 Kgs.png",
        category: "extinguisher",
        techSpecs: { material: "Deep Drawn Steel Base", maxFlowRate: "Discharge Time: ~14s", certifications: "ISI / ISO", standardColor: "Red Cylinder", nozzleSizes: "High Pressure EPDM Hose" }
    },
    {
        id: "dcp-10kg",
        name: "DCP 10 Kgs",
        shortDesc: "Dry Chemical Powder, 10kg",
        fullDesc: "Designed for serious industrial hazard areas, this massive 10kg dry powder unit provides extended, aggressive firefighting power for substantial blazes before comprehensive municipal resources arrive on scene.",
        image: "/images/dcp 10 kgs.png",
        category: "extinguisher",
        techSpecs: { material: "Heavy Duty Steel", maxFlowRate: "Discharge Time: >20s", certifications: "IS:15683", standardColor: "Red Cylinder", nozzleSizes: "Ergonomic Long Hose & Nozzle" }
    },
    {
        id: "co2-4-5kg",
        name: "CO2 4.5 Kgs",
        shortDesc: "Carbon Dioxide extinguisher, 4.5kg",
        fullDesc: "Filled with clean, non-conductive pressurized carbon dioxide gas. This 4.5kg model is essential for protecting delicate electrical equipment, extinguishing fires by aggressively displacing oxygen without leaving any damaging chemical residue.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "Seamless Manganese Steel", maxFlowRate: "Discharge Time: ~15s", certifications: "IS:2878", standardColor: "Red / Black Band markings", nozzleSizes: "High Velocity Horn" }
    },
    {
        id: "co2-6-5kg",
        name: "CO2 6.5 Kgs",
        shortDesc: "Carbon Dioxide extinguisher, 6.5kg",
        fullDesc: "A mid-size carbon dioxide extinguisher designed specifically for severe electrical hazard zones, substations, and major computer centers where massive clean suppression force is critical to saving multi-million-dollar infrastructure.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "Seamless Steel Cylinder", maxFlowRate: "Discharge Time: ~20s", certifications: "ISO / CE", standardColor: "Fire Red", nozzleSizes: "Elongated Swivel Horn" }
    },
    {
        id: "co2-9kg",
        name: "CO2 9 Kgs",
        shortDesc: "Carbon Dioxide extinguisher, 9kg",
        fullDesc: "Providing vast capacity clean-agent extinguishing capabilities. Used primarily in heavy industrial plants, large generator rooms, and marine environments. Suppresses severe electrical fires efficiently leaving zero post-fire cleanup.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "High Pressure Seamless Steel", maxFlowRate: "Discharge Time: ~25s", certifications: "IS:2878", standardColor: "Fire Red", nozzleSizes: "Anti-frost Horn with handle grip" }
    },
    {
        id: "co2-22-5kg",
        name: "CO2 22.5 Kgs",
        shortDesc: "Large capacity CO2 extinguisher, 22.5kg",
        fullDesc: "A wheeled or heavy stationary CO2 cylinder deployment meant for absolute worst-case scenario electrical fires involving massive transformers or sprawling engine rooms. Delivering massive, rapid thermal cooling and oxygen starvation.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "High Pressure Seamless Bottle", maxFlowRate: "Discharge Time: >45s", certifications: "IS/UL Specs", standardColor: "Red & Black", nozzleSizes: "Heavy Duty Hose & Large Horn" }
    },
    {
        id: "afff-9l-sp",
        name: "AFFF 9 LTR. (Stored Pressure)",
        shortDesc: "AFFF stored pressure type, 9 liters",
        fullDesc: "This user-friendly stored-pressure AFFF unit relies on a constant internal pressurization of nitrogen gas, meaning zero delay time upon squeezing the lever. Ideal for immediate reaction to petrol or diesel spill ignitions.",
        image: "/images/AFFF.png",
        category: "extinguisher",
        techSpecs: { material: "Internal ERW Steel Lined", maxFlowRate: "Discharge Time: >30s", certifications: "IS:15683", standardColor: "Fire Red", nozzleSizes: "Foam Aerating Branchpipe" }
    },
    {
        id: "water-co2-9l-sp",
        name: "9 LTR. WATER CO2 (Stored Pressure)",
        shortDesc: "Water CO2 stored pressure, 9 liters",
        fullDesc: "A 9-liter stored pressure water extinguisher built to combat deep-seated Class A fires involving wood, paper, and textiles. Delivers a steady, powerful stream of cooling water to douse embers to their core.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "Welded Steel Cylinder", maxFlowRate: "Range: 6-8 meters", certifications: "CE Standard", standardColor: "Fire Red", nozzleSizes: "Standard Water Jet Nozzle" }
    },
    {
        id: "water-co2-9l",
        name: "WATER CO2 9 Ltrs",
        shortDesc: "Water CO2 extinguisher, 9 liters",
        fullDesc: "A classic cartridge-operated 9-liter water extinguisher. Featuring a robust internal CO2 gas cartridge that, when punctured, provides consistent high pressure to propel the water jet deep into the burning material.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "Anti-corrosive Powder Coated Steel", maxFlowRate: "Discharge Time: >40s", certifications: "IS:15683", standardColor: "Fire Red", nozzleSizes: "Solid Core Jet Nozzle" }
    },
    {
        id: "afff-50l",
        name: "AFFF 50 Ltrs",
        shortDesc: "Trolley mounted AFFF, 50 liters",
        fullDesc: "A heavy-duty 50-liter mobile foam suppression unit mounted on a rugged trolley. Essential for aviation hangars, massive fuel depots, and chemical synthesis plants requiring massive volume foam dispersion by a single operator.",
        image: "/images/AFFF.png",
        category: "extinguisher",
        techSpecs: { material: "Heavy Duty Welded Chassis", maxFlowRate: "Discharge Time: >90s", certifications: "IS:13386", standardColor: "Red Cart, Yellow Band", nozzleSizes: "Extended 5m Hose + Foam Branch" }
    },
    {
        id: "dcp-25kg",
        name: "DCP 25 Kgs",
        shortDesc: "Trolley mounted DCP, 25kg",
        fullDesc: "A 25kg capacity trolley-mounted dry chemical powder unit combining massive suppression payload with rapid mobility. Equipped with heavy solid rubber wheels for traversing rough industrial terrain to reach large Class B and C blazes rapidly.",
        image: "/images/DCP 25 Kgs.png",
        category: "extinguisher",
        techSpecs: { material: "Seamless Deep Drawn Steel", maxFlowRate: "Range: 8-10 meters", certifications: "IS:10658", standardColor: "Fire Red", nozzleSizes: "5m flexible hose with applicator" }
    },
    {
        id: "water-co2-50l",
        name: "WATER CO2 50 Ltrs",
        shortDesc: "Trolley mounted Water CO2, 50 liters",
        fullDesc: "A tremendous 50-liter mobile water unit providing extreme cooling capabilities over vast Class A fire scenarios such as lumber yards, extensive warehouse fires, and refuse plant complications where continuous water access is limited.",
        image: "/images/co2.png",
        category: "extinguisher",
        techSpecs: { material: "Mild steel on rugged trolley", maxFlowRate: "Discharge Time: >120s", certifications: "ISO 9001", standardColor: "Red / Black Trolley Base", nozzleSizes: "High Pressure Jet Nozzle" }
    }
];
