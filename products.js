// Product categories from Excel files

// products.js - Complete with all products from Excel files

const productData = {
  chemicals: [
    // From Chemicals 1.xlsx
    { name: "Acacia gum", unit: "500g", category: "chemicals" },
    { name: "Acetaldhyde", unit: "500ml", category: "chemicals" },
    { name: "acetanilide", unit: "Kg", category: "chemicals" },
    { name: "acetic acid glacial", unit: "Liter", category: "chemicals" },
    { name: "acetone", unit: "Liter", category: "chemicals" },
    { name: "Acetophenone", unit: "500ml", category: "chemicals" },
    { name: "Activiated charcoal", unit: "500g", category: "chemicals" },
    { name: "Acrylamide", unit: "500g", category: "chemicals" },
    { name: "Agar agar", unit: "500g", category: "chemicals" },
    { name: "Agarose", unit: "100g", category: "chemicals" },
    { name: "Alanine", unit: "25g", category: "chemicals" },
    { name: "Albumin egg", unit: "500g", category: "chemicals" },
    { name: "Alpha naphthylamine", unit: "500g", category: "chemicals" },
    { name: "beta naphthylamine", unit: "500g", category: "chemicals" },
    { name: "Aluminium chloride", unit: "Kg", category: "chemicals" },
    { name: "Aluminium chlorohydrate", unit: "500g", category: "chemicals" },
    { name: "Aluminium hydroxide", unit: "500g", category: "chemicals" },
    { name: "Aluminium sulphate", unit: "500g", category: "chemicals" },
    { name: "Ammonia solution 25%", unit: "Liter", category: "chemicals" },
    { name: "Ammonia solution 33%", unit: "Liter", category: "chemicals" },
    { name: "Ammonium acetate", unit: "500g", category: "chemicals" },
    { name: "Ammonium benzoate", unit: "500g", category: "chemicals" },
    { name: "Ammonium bicarbonate", unit: "500g", category: "chemicals" },
    { name: "Ammonium carbonate", unit: "500g", category: "chemicals" },
    { name: "Ammonium chloride", unit: "500g", category: "chemicals" },
    { name: "Ammonium citrate", unit: "500g", category: "chemicals" },
    { name: "Ammonium dihydrogen phosphate", unit: "500g", category: "chemicals" },
    { name: "Ammonium formate", unit: "500g", category: "chemicals" },
    { name: "Ammonium oxalate", unit: "500g", category: "chemicals" },
    { name: "Ammonium persulfate", unit: "500g", category: "chemicals" },
    { name: "Ammonium sulphate", unit: "500g", category: "chemicals" },
    { name: "Ammonium sulfide", unit: "Liter", category: "chemicals" },
    { name: "Ammonium metavanadate", unit: "100g", category: "chemicals" },
    { name: "Ammonium molybdate", unit: "500g", category: "chemicals" },
    { name: "Ammonium tartarate", unit: "500g", category: "chemicals" },
    { name: "Ammonium thiocyanate", unit: "500g", category: "chemicals" },
    { name: "Amylase", unit: "100g", category: "chemicals" },
    { name: "Anthracene", unit: "250g", category: "chemicals" },
    { name: "Anthrone reagent", unit: "25g", category: "chemicals" },
    { name: "Aniline", unit: "Liter", category: "chemicals" },
    { name: "Aniline HCl", unit: "250g", category: "chemicals" },
    { name: "Aniline sulphate", unit: "250g", category: "chemicals" },
    { name: "Antimony trichloride", unit: "500g", category: "chemicals" },
    { name: "Ascorbic acid", unit: "500g", category: "chemicals" },
    { name: "Aspartic acid", unit: "100g", category: "chemicals" },
    { name: "Aspirin (Acetylsalicylic acid)", unit: "500g", category: "chemicals" },
    { name: "Barium chloride", unit: "500g", category: "chemicals" },
    { name: "Barium sulphate", unit: "500g", category: "chemicals" },
    { name: "fuchsin acid", unit: "100g", category: "chemicals" },
    { name: "basic fuchsin", unit: "100g", category: "chemicals" },
    { name: "beef extract", unit: "500g", category: "chemicals" },
    { name: "beeswax white", unit: "500g", category: "chemicals" },
    { name: "bendict solution", unit: "Liter", category: "chemicals" },
    { name: "Benzaldhyde", unit: "Liter", category: "chemicals" },
    { name: "Benzene", unit: "Liter", category: "chemicals" },
    { name: "benzoic acid", unit: "500g", category: "chemicals" },
    { name: "benzyl alcohol", unit: "Liter", category: "chemicals" },
    { name: "benzyl adenine", unit: "25g", category: "chemicals" },
    { name: "benzyl amino adenine", unit: "25g", category: "chemicals" },
    { name: "bile salt", unit: "100g", category: "chemicals" },
    { name: "Bismuth nitrate", unit: "500g", category: "chemicals" },
    { name: "Bismuth oxychloride", unit: "25g", category: "chemicals" },
    { name: "Bismuth subnitrate", unit: "500g", category: "chemicals" },
    { name: "borax", unit: "500g", category: "chemicals" },
    { name: "boric acid", unit: "500g", category: "chemicals" },
    { name: "Bovine serum albumin", unit: "100g", category: "chemicals" },
    { name: "Bromocresol green", unit: "25g", category: "chemicals" },
    { name: "Bromophenol blue", unit: "100g", category: "chemicals" },
    { name: "Bromine", unit: "100ml", category: "chemicals" },
    { name: "bitter almond oil", unit: "Liter", category: "chemicals" },
    { name: "Bis acrylamide", unit: "100g", category: "chemicals" },
    { name: "Buffer solution Ph 4, 7, 10", unit: "Liter", category: "chemicals" },
    { name: "Butanol", unit: "Liter", category: "chemicals" },
    { name: "catechol", unit: "500g", category: "chemicals" },
    { name: "calcium carbonate", unit: "500g", category: "chemicals" },
    { name: "calcium chloride", unit: "500g", category: "chemicals" },
    { name: "calcium oxide", unit: "500g", category: "chemicals" },
    { name: "calcium phosphate", unit: "500g", category: "chemicals" },
    { name: "calcium sulphate", unit: "500g", category: "chemicals" },
    { name: "calcium nitrate", unit: "500g", category: "chemicals" },
    { name: "carbon disulphide", unit: "Liter", category: "chemicals" },
    { name: "Carbon tetrachloride", unit: "Liter", category: "chemicals" },
    { name: "Carbol fuchsin", unit: "100g", category: "chemicals" },
    { name: "carmin stain", unit: "25g", category: "chemicals" },
    { name: "Carnuba wax", unit: "500g", category: "chemicals" },
    { name: "carpabol", unit: "250g", category: "chemicals" },
    { name: "castor oil", unit: "Liter", category: "chemicals" },
    { name: "casien", unit: "500g", category: "chemicals" },
    { name: "cadmium chloride", unit: "500g", category: "chemicals" },
    { name: "cadmium sulphate", unit: "500g", category: "chemicals" },
    { name: "canada balsm", unit: "100ml", category: "chemicals" },
    { name: "caffiene", unit: "500g", category: "chemicals" },
    { name: "cetostearyl alcohol", unit: "500g", category: "chemicals" },
    { name: "cetrimide", unit: "500g", category: "chemicals" },
    { name: "cedar oil", unit: "100ml", category: "chemicals" },
    { name: "cellulose soluble", unit: "500g", category: "chemicals" },
    { name: "chalk", unit: "500g", category: "chemicals" },
    { name: "chitosan", unit: "500g", category: "chemicals" },
    { name: "Chitosan low molecular wt 20KD", unit: "100g", category: "chemicals" },
    { name: "chloroacetone", unit: "250ml", category: "chemicals" },
    { name: "chloroform", unit: "Liter", category: "chemicals" },
    { name: "cinnamic acid", unit: "500g", category: "chemicals" },
    { name: "cremophore", unit: "Kg", category: "chemicals" },
    { name: "cholesterol", unit: "100g", category: "chemicals" },
    { name: "chromium chloride", unit: "500g", category: "chemicals" },
    { name: "chromium sulphate", unit: "500g", category: "chemicals" },
    { name: "citric acid anhydrous", unit: "500g", category: "chemicals" },
    { name: "clove oil", unit: "Liter", category: "chemicals" },
    { name: "cobalt chloride", unit: "500g", category: "chemicals" },
    { name: "Cobalt sulphate", unit: "500g", category: "chemicals" },
    { name: "Cobalt nitrate", unit: "500g", category: "chemicals" },
    { name: "cocoa butter", unit: "500g", category: "chemicals" },
    { name: "Cocamidopropyl betaine", unit: "Kg", category: "chemicals" },
    { name: "coconut oil", unit: "Liter", category: "chemicals" },
    { name: "congo red", unit: "100g", category: "chemicals" },
    { name: "copper acetate mono", unit: "500g", category: "chemicals" },
    { name: "copper chloride", unit: "500g", category: "chemicals" },
    { name: "copper sulphate penta", unit: "500g", category: "chemicals" },
    { name: "copper nitrate", unit: "500g", category: "chemicals" },
    { name: "colchicine", unit: "1g", category: "chemicals" },
    { name: "crystal violet", unit: "100g", category: "chemicals" },
    { name: "Bromide Cetyltrimethylammonium (CTAB)", unit: "100g", category: "chemicals" },
    { name: "Decyl glucoside", unit: "500g", category: "chemicals" },
    { name: "Dextrin", unit: "500g", category: "chemicals" },
    { name: "Diethyl ether", unit: "Liter", category: "chemicals" },
    { name: "Dimethylformamide (DMF)", unit: "Liter", category: "chemicals" },
    { name: "Dimethylglyoxime (DMG)", unit: "500g", category: "chemicals" },
    { name: "Dimethylsulfoxide (DMSO)", unit: "Liter", category: "chemicals" },
    { name: "Diphenyl amine", unit: "500g", category: "chemicals" },
    { name: "3,5 dinitrosalicylic acid", unit: "100g", category: "chemicals" },
    { name: "2,4 dinitrophenyl hydrazine", unit: "100g", category: "chemicals" },
    { name: "Dioxane 1,4", unit: "Liter", category: "chemicals" },
    { name: "EDTA tetrasodium", unit: "500g", category: "chemicals" },
    { name: "EDTA disodium", unit: "500g", category: "chemicals" },
    { name: "eosin yellow", unit: "25g", category: "chemicals" },
    { name: "Eriochrome black T", unit: "25g", category: "chemicals" },
    { name: "ethanol 70%", unit: "Liter", category: "chemicals" },
    { name: "ethanol 96%", unit: "Liter", category: "chemicals" },
    { name: "ethanol 99.9%", unit: "Liter", category: "chemicals" },
    { name: "ethyl acetate", unit: "Liter", category: "chemicals" },
    { name: "ethyl cyanoacetate", unit: "Liter", category: "chemicals" },
    { name: "ethylene glycol", unit: "Liter", category: "chemicals" },
    { name: "Fehling A", unit: "Liter", category: "chemicals" },
    { name: "Fehling B", unit: "Liter", category: "chemicals" },
    { name: "ferric chloride anhydrous", unit: "500g", category: "chemicals" },
    { name: "ferric chloride hexahydrate", unit: "500g", category: "chemicals" },
    { name: "ferric sulphate", unit: "500g", category: "chemicals" },
    { name: "ferric nitrate", unit: "500g", category: "chemicals" },
    { name: "ferric ammonium sulphate", unit: "500g", category: "chemicals" },
    { name: "ferrous ammonium sulphate", unit: "500g", category: "chemicals" },
    { name: "ferrous sulphate", unit: "500g", category: "chemicals" },
    { name: "formalin / formaldhyde", unit: "Liter", category: "chemicals" },
    { name: "formic acid", unit: "Liter", category: "chemicals" },
    { name: "Folin reagent", unit: "500ml", category: "chemicals" },
    { name: "Flourescien", unit: "100g", category: "chemicals" },
    { name: "fructose", unit: "500g", category: "chemicals" },
    { name: "furfural", unit: "500ml", category: "chemicals" },
    { name: "gallic acid", unit: "100g", category: "chemicals" },
    { name: "gibbrerellic acid", unit: "25g", category: "chemicals" },
    { name: "giemsa stain", unit: "25g", category: "chemicals" },
    { name: "gelatin", unit: "500g", category: "chemicals" },
    { name: "glucose / dextrose monohydrate", unit: "500g", category: "chemicals" },
    { name: "gum tragacanth", unit: "500g", category: "chemicals" },
    { name: "glutaraldehyde 50%", unit: "Liter", category: "chemicals" },
    { name: "Grapeseed Oil", unit: "Liter", category: "chemicals" },
    { name: "glycerol", unit: "Liter", category: "chemicals" },
    { name: "glyceryl monostearate", unit: "500g", category: "chemicals" },
    { name: "glycine", unit: "500g", category: "chemicals" },
    { name: "glycolic acid", unit: "500ml", category: "chemicals" },
    { name: "Guaiacol", unit: "250ml", category: "chemicals" },
    { name: "hematoxylin stain", unit: "25g", category: "chemicals" },
    { name: "hexane 60-80", unit: "Liter", category: "chemicals" },
    { name: "Hexane normal", unit: "Liter", category: "chemicals" },
    { name: "Hyaluronic acid 10K", unit: "500g", category: "chemicals" },
    { name: "Hydrochloric acid (HCl) 33%", unit: "Liter", category: "chemicals" },
    { name: "Hydrochloric acid (HCl) 37%", unit: "Liter", category: "chemicals" },
    { name: "Hydroflouric acid (HF) 40%", unit: "Liter", category: "chemicals" },
    { name: "hydrogen peroxide 50%", unit: "Liter", category: "chemicals" },
    { name: "hydroquinone", unit: "500g", category: "chemicals" },
    { name: "Hydroxyl amine HCl", unit: "100g", category: "chemicals" },
    { name: "Isoamyl alcohol", unit: "Liter", category: "chemicals" },
    { name: "Iso octane", unit: "Liter", category: "chemicals" },
    { name: "isopropanol", unit: "Liter", category: "chemicals" },
    { name: "Isopropyl myristate", unit: "Liter", category: "chemicals" },
    { name: "2,6 indophenol dichlorophenol sodium salt", unit: "25g", category: "chemicals" },
    { name: "Indole butyric acid", unit: "25g", category: "chemicals" },
    { name: "Indole 3 acetic acid", unit: "25g", category: "chemicals" },
    { name: "iodine", unit: "500g", category: "chemicals" },
    { name: "Iodine solution", unit: "Liter", category: "chemicals" },
    { name: "Iron oxide (black, brown, red, yellow)", unit: "500g", category: "chemicals" },
    { name: "Jojoba oil", unit: "Liter", category: "chemicals" },
    { name: "Kaolin", unit: "500g", category: "chemicals" },
    { name: "kojic acid", unit: "500g", category: "chemicals" },
    { name: "L-cysteine HCl", unit: "100g", category: "chemicals" },
    { name: "lanolin / wool fat", unit: "500g", category: "chemicals" },
    { name: "lactose", unit: "500g", category: "chemicals" },
    { name: "lactic acid", unit: "Liter", category: "chemicals" },
    { name: "lead acetate", unit: "500g", category: "chemicals" },
    { name: "lead subacetate", unit: "500g", category: "chemicals" },
    { name: "lead nitrate", unit: "500g", category: "chemicals" },
    { name: "leishman stain", unit: "25g", category: "chemicals" },
    { name: "lysozyme", unit: "1g", category: "chemicals" },
    { name: "L-methionine", unit: "100g", category: "chemicals" },
    { name: "Lysine", unit: "500g", category: "chemicals" },
    { name: "malachite green", unit: "100g", category: "chemicals" },
    { name: "maleic acid", unit: "100g", category: "chemicals" },
    { name: "malt extract", unit: "500g", category: "chemicals" },
    { name: "Maltose", unit: "500g", category: "chemicals" },
    { name: "magnesium carbonate", unit: "500g", category: "chemicals" },
    { name: "magnesium chloride", unit: "500g", category: "chemicals" },
    { name: "magnesium metal turning", unit: "250g", category: "chemicals" },
    { name: "magnesium oxide heavy", unit: "500g", category: "chemicals" },
    { name: "magnesium sulphate", unit: "500g", category: "chemicals" },
    { name: "Malononitrile", unit: "100ml", category: "chemicals" },
    { name: "manganese chloride", unit: "500g", category: "chemicals" },
    { name: "manganese sulphate", unit: "500g", category: "chemicals" },
    { name: "mannitol", unit: "500g", category: "chemicals" },
    { name: "menthol crystal", unit: "500g", category: "chemicals" },
    { name: "mercapto ethanol", unit: "100ml", category: "chemicals" },
    { name: "Mercurous nitrate", unit: "500g", category: "chemicals" },
    { name: "mercuric chloride", unit: "100g", category: "chemicals" },
    { name: "mercuric oxide red", unit: "25g", category: "chemicals" },
    { name: "mercuric oxide yellow", unit: "25g", category: "chemicals" },
    { name: "mercuric iodide", unit: "100g", category: "chemicals" },
    { name: "mercuric sulphate", unit: "500g", category: "chemicals" },
    { name: "methanol", unit: "Liter", category: "chemicals" },
    { name: "methylene chloride / dichloromethane", unit: "Liter", category: "chemicals" },
    { name: "methylene blue", unit: "25g", category: "chemicals" },
    { name: "methyl orange", unit: "25g", category: "chemicals" },
    { name: "methyl red", unit: "25g", category: "chemicals" },
    { name: "Molybdic acid", unit: "500g", category: "chemicals" },
    { name: "Murexide", unit: "25g", category: "chemicals" },
    { name: "naphthalene", unit: "500g", category: "chemicals" },
    { name: "naphthalene acetic acid", unit: "500g", category: "chemicals" },
    { name: "naphthol (Alpha)", unit: "500g", category: "chemicals" },
    { name: "naphthol (Beta)", unit: "500g", category: "chemicals" },
    { name: "nickel chloride", unit: "500g", category: "chemicals" },
    { name: "nickel sulphate", unit: "500g", category: "chemicals" },
    { name: "nigrosin", unit: "25g", category: "chemicals" },
    { name: "ninhydrin", unit: "100g", category: "chemicals" },
    { name: "nitric acid 50-55%", unit: "Liter", category: "chemicals" },
    { name: "neutral red", unit: "100g", category: "chemicals" },
    { name: "Nutrient agar / broth", unit: "500g", category: "chemicals" },
    { name: "octanol normal", unit: "Liter", category: "chemicals" },
    { name: "oleic acid", unit: "Liter", category: "chemicals" },
    { name: "olive oil", unit: "Liter", category: "chemicals" },
    { name: "oxalic acid", unit: "500g", category: "chemicals" },
    { name: "ortho phosphoric acid", unit: "Liter", category: "chemicals" },
    { name: "O-phenylene diamine", unit: "500g", category: "chemicals" },
    { name: "P-phenylene diamine", unit: "500g", category: "chemicals" },
    { name: "paraformaldehyde", unit: "500g", category: "chemicals" },
    { name: "panthenol", unit: "Kg", category: "chemicals" },
    { name: "Indole reagent (P-dimethyl aminobenzaldhyde)", unit: "100g", category: "chemicals" },
    { name: "paraffin oil", unit: "Liter", category: "chemicals" },
    { name: "paraffin wax", unit: "500g", category: "chemicals" },
    { name: "Parafoid solution", unit: "Liter", category: "chemicals" },
    { name: "peptone", unit: "500g", category: "chemicals" },
    { name: "pippermint oil", unit: "Liter", category: "chemicals" },
    { name: "pepsin", unit: "100g", category: "chemicals" },
    { name: "petroleum ether 60-80", unit: "Liter", category: "chemicals" },
    { name: "petroleum ether 40-60", unit: "2.5L", category: "chemicals" },
    { name: "phenol crystal", unit: "500g", category: "chemicals" },
    { name: "phenolphthalein", unit: "100g", category: "chemicals" },
    { name: "phenol red", unit: "100g", category: "chemicals" },
    { name: "Phenylhydrazine HCl", unit: "500g", category: "chemicals" },
    { name: "phthalic acid", unit: "500g", category: "chemicals" },
    { name: "phthalic anhydride", unit: "500g", category: "chemicals" },
    { name: "Phthalimide", unit: "500g", category: "chemicals" },
    { name: "polyethylene glycol 400", unit: "Liter", category: "chemicals" },
    { name: "polyethylene glycol 4000", unit: "500g", category: "chemicals" },
    { name: "polyethylene glycol 6000", unit: "500g", category: "chemicals" },
    { name: "potassium acetate", unit: "500g", category: "chemicals" },
    { name: "potassium aluminium sulphate", unit: "500g", category: "chemicals" },
    { name: "potassium benzoate", unit: "500g", category: "chemicals" },
    { name: "Potassium bromide", unit: "500g", category: "chemicals" },
    { name: "potassium cabonate", unit: "500g", category: "chemicals" },
    { name: "potassium chloride", unit: "500g", category: "chemicals" },
    { name: "potassium cyanide", unit: "500g", category: "chemicals" },
    { name: "potassium chromate", unit: "500g", category: "chemicals" },
    { name: "potassium dichromate", unit: "500g", category: "chemicals" },
    { name: "potassium ferrocyanide", unit: "500g", category: "chemicals" },
    { name: "potassium ferricyanide", unit: "500g", category: "chemicals" },
    { name: "potassium hydroxide", unit: "500g", category: "chemicals" },
    { name: "Potassium nitrate", unit: "500g", category: "chemicals" },
    { name: "potassium oxalate", unit: "500g", category: "chemicals" },
    { name: "potassium iodate", unit: "500g", category: "chemicals" },
    { name: "potassium iodide", unit: "500g", category: "chemicals" },
    { name: "potassium permenganate", unit: "500g", category: "chemicals" },
    { name: "potassium persulfate", unit: "500g", category: "chemicals" },
    { name: "Potassium tartrate", unit: "500g", category: "chemicals" },
    { name: "potassium phosphate tribasic", unit: "500g", category: "chemicals" },
    { name: "potassium phosphate dibasic", unit: "500g", category: "chemicals" },
    { name: "potassium phosphate monobasic", unit: "500g", category: "chemicals" },
    { name: "Potassium phthalate", unit: "500g", category: "chemicals" },
    { name: "potassium sorbate", unit: "500g", category: "chemicals" },
    { name: "potassium sulphate", unit: "500g", category: "chemicals" },
    { name: "potassium thiocyanate", unit: "500g", category: "chemicals" },
    { name: "picric acid", unit: "100ml", category: "chemicals" },
    { name: "red alcohol", unit: "Liter", category: "chemicals" },
    { name: "Pyridine", unit: "500ml", category: "chemicals" },
    { name: "renin", unit: "100g", category: "chemicals" },
    { name: "resazurin sodium", unit: "5g", category: "chemicals" },
    { name: "phenoxyethanol", unit: "500g", category: "chemicals" },
    { name: "propylene glycol", unit: "Liter", category: "chemicals" },
    { name: "Polyvinyl alcohol (PVA)", unit: "500g", category: "chemicals" },
    { name: "Polyvinyl Pyrrolidone (PVP)", unit: "500g", category: "chemicals" },
    { name: "pyrogallol", unit: "100g", category: "chemicals" },
    { name: "PQ7", unit: "Kg", category: "chemicals" },
    { name: "Quercetin", unit: "5g", category: "chemicals" },
    { name: "witepsol", unit: "500g", category: "chemicals" },
    { name: "resorcinol", unit: "500g", category: "chemicals" },
    { name: "rosaline", unit: "100g", category: "chemicals" },
    { name: "Rose bengal", unit: "25g", category: "chemicals" },
    { name: "ribose", unit: "250g", category: "chemicals" },
    { name: "RPMI", unit: "500ml", category: "chemicals" },
    { name: "safranine", unit: "100g", category: "chemicals" },
    { name: "salicylic acid", unit: "500g", category: "chemicals" },
    { name: "Schiff reagent", unit: "Liter", category: "chemicals" },
    { name: "shea butter", unit: "500g", category: "chemicals" },
    { name: "selefonof solution", unit: "Liter", category: "chemicals" },
    { name: "selenium", unit: "100g", category: "chemicals" },
    { name: "silica gel", unit: "Kg", category: "chemicals" },
    { name: "silicon dioxide", unit: "500g", category: "chemicals" },
    { name: "silicon oil", unit: "500ml", category: "chemicals" },
    { name: "silver nitrate", unit: "100g", category: "chemicals" },
    { name: "silver sulphate", unit: "25g", category: "chemicals" },
    { name: "sodium acetate", unit: "500g", category: "chemicals" },
    { name: "sodium alginate", unit: "500g", category: "chemicals" },
    { name: "sodium arsenate", unit: "100g", category: "chemicals" },
    { name: "sodium benzoate", unit: "500g", category: "chemicals" },
    { name: "Sodium bisulphite", unit: "500g", category: "chemicals" },
    { name: "sodium bicarbonate", unit: "500g", category: "chemicals" },
    { name: "Sodium borate", unit: "500g", category: "chemicals" },
    { name: "sodium bromide", unit: "500g", category: "chemicals" },
    { name: "sodium carbonate", unit: "500g", category: "chemicals" },
    { name: "sodium carboxymethyl cellulose", unit: "500g", category: "chemicals" },
    { name: "sodium chloride", unit: "500g", category: "chemicals" },
    { name: "sodium citrate", unit: "500g", category: "chemicals" },
    { name: "sodium cyanide", unit: "500g", category: "chemicals" },
    { name: "sodium dichromate", unit: "500g", category: "chemicals" },
    { name: "sodium phosphate tribasic", unit: "500g", category: "chemicals" },
    { name: "sodium phosphate dibasic", unit: "500g", category: "chemicals" },
    { name: "sodium phosphate monobasic", unit: "500g", category: "chemicals" },
    { name: "sodium formate", unit: "500g", category: "chemicals" },
    { name: "sodium flouride", unit: "500g", category: "chemicals" },
    { name: "sodium hexameta phosphate", unit: "500g", category: "chemicals" },
    { name: "sodium hydroxide flakes", unit: "500g", category: "chemicals" },
    { name: "sodium hydroxide pellets", unit: "Kg", category: "chemicals" },
    { name: "sodium hypochlorite", unit: "Liter", category: "chemicals" },
    { name: "sodium lauryl sulphate", unit: "Kg", category: "chemicals" },
    { name: "sodium lauryl ether sulphate (texapon)", unit: "Kg", category: "chemicals" },
    { name: "sodium phthalate", unit: "500g", category: "chemicals" },
    { name: "sodium metabisulphite", unit: "500g", category: "chemicals" },
    { name: "sodium molybdate", unit: "250g", category: "chemicals" },
    { name: "sodium nitrate", unit: "500g", category: "chemicals" },
    { name: "sodium nitrite", unit: "500g", category: "chemicals" },
    { name: "sodium nitrophenolate", unit: "500g", category: "chemicals" },
    { name: "sodium nitroprusside", unit: "500g", category: "chemicals" },
    { name: "sodium oxalate", unit: "500g", category: "chemicals" },
    { name: "sodium potassium tartarate", unit: "500g", category: "chemicals" },
    { name: "sodium sacchrine", unit: "500g", category: "chemicals" },
    { name: "sodium salicylate", unit: "500g", category: "chemicals" },
    { name: "sodium sulphate", unit: "Kg", category: "chemicals" },
    { name: "sodium sulphide", unit: "Kg", category: "chemicals" },
    { name: "sodium sulphite", unit: "Kg", category: "chemicals" },
    { name: "sodium tartarate", unit: "Kg", category: "chemicals" },
    { name: "sodium thiocyanate", unit: "500g", category: "chemicals" },
    { name: "sodium thiosulphate", unit: "Kg", category: "chemicals" },
    { name: "sodium tungstate", unit: "100g", category: "chemicals" },
    { name: "soyabean lecithin", unit: "500g", category: "chemicals" },
    { name: "span 60", unit: "Kg", category: "chemicals" },
    { name: "stannous chloride", unit: "500g", category: "chemicals" },
    { name: "starch maize", unit: "500g", category: "chemicals" },
    { name: "starch potato", unit: "500g", category: "chemicals" },
    { name: "starch rice", unit: "500g", category: "chemicals" },
    { name: "stearic acid", unit: "500g", category: "chemicals" },
    { name: "Strontium chloride", unit: "500g", category: "chemicals" },
    { name: "strychnine", unit: "25g", category: "chemicals" },
    { name: "stryptomycin sulphate", unit: "5g", category: "chemicals" },
    { name: "sucrose", unit: "Kg", category: "chemicals" },
    { name: "sulfosalicylic acid", unit: "500g", category: "chemicals" },
    { name: "sulphanilic acid", unit: "500g", category: "chemicals" },
    { name: "sulphur", unit: "Kg", category: "chemicals" },
    { name: "sulphuric acid 98%", unit: "Liter", category: "chemicals" },
    { name: "succinic acid", unit: "500g", category: "chemicals" },
    { name: "talc powder", unit: "Kg", category: "chemicals" },
    { name: "tannic acid", unit: "500g", category: "chemicals" },
    { name: "tartaric acid", unit: "500g", category: "chemicals" },
    { name: "Tetrahydrofuran (THF)", unit: "500ml", category: "chemicals" },
    { name: "trichloroacetic acid", unit: "500g", category: "chemicals" },
    { name: "Triethylamine", unit: "500ml", category: "chemicals" },
    { name: "toluene", unit: "Liter", category: "chemicals" },
    { name: "turpentine oil", unit: "Liter", category: "chemicals" },
    { name: "thiourea", unit: "500g", category: "chemicals" },
    { name: "thiobarbituric acid", unit: "25g", category: "chemicals" },
    { name: "titanium dioxide", unit: "500g", category: "chemicals" },
    { name: "triethanol amine", unit: "Liter", category: "chemicals" },
    { name: "Thiopental", unit: "5g", category: "chemicals" },
    { name: "tris acid", unit: "100g", category: "chemicals" },
    { name: "tris base", unit: "500g", category: "chemicals" },
    { name: "trypsin", unit: "100g", category: "chemicals" },
    { name: "tween 20", unit: "Liter", category: "chemicals" },
    { name: "tween 60", unit: "Liter", category: "chemicals" },
    { name: "tween 80", unit: "Liter", category: "chemicals" },
    { name: "triethyl orthophosphate", unit: "500ml", category: "chemicals" },
    { name: "tryptophane", unit: "100g", category: "chemicals" },
    { name: "tyrosine", unit: "100g", category: "chemicals" },
    { name: "urea", unit: "500g", category: "chemicals" },
    { name: "vaniline", unit: "500g", category: "chemicals" },
    { name: "vaseline", unit: "Kg", category: "chemicals" },
    { name: "Quinine HCl", unit: "25g", category: "chemicals" },
    { name: "vitamin E oil", unit: "500g", category: "chemicals" },
    { name: "xanthan gum", unit: "500g", category: "chemicals" },
    { name: "Xylene", unit: "Liter", category: "chemicals" },
    { name: "yeast extract", unit: "500g", category: "chemicals" },
    { name: "zinc acetate", unit: "500g", category: "chemicals" },
    { name: "zinc chloride", unit: "500g", category: "chemicals" },
    { name: "zinc dust", unit: "500g", category: "chemicals" },
    { name: "zinc oxide", unit: "500g", category: "chemicals" },
    { name: "zinc sulphate", unit: "500g", category: "chemicals" },
    { name: "Zinc nitrate", unit: "500g", category: "chemicals" },

    // From Chemicals 2.xlsx
    { name: "Anthrone reagent", unit: "25gm", category: "chemicals" },
    { name: "1.2 dichloroether", unit: "Liter", category: "chemicals" },
    { name: "1-naphthyl amine", unit: "100gm", category: "chemicals" },
    { name: "2 naphthyl amine", unit: "100gm", category: "chemicals" },
    { name: "2.2 dipyridyl", unit: "25gm", category: "chemicals" },
    { name: "2.4 dichlorophenoxy acetic acid", unit: "25gm", category: "chemicals" },
    { name: "3.5 dinitrosalicylic acid", unit: "100gm", category: "chemicals" },
    { name: "4 amino anti pyridine", unit: "25gm", category: "chemicals" },
    { name: "Anthracene", unit: "250g", category: "chemicals" },
    { name: "Alpha Ketoglutarate", unit: "25gm", category: "chemicals" },
    { name: "ALPHA naphtyl amine", unit: "100gm", category: "chemicals" },
    { name: "ATP", unit: "5gm", category: "chemicals" },
    { name: "Atropine", unit: "25 g", category: "chemicals" },
    { name: "Barbituric acid", unit: "25gm", category: "chemicals" },
    { name: "Benzamide", unit: "500gm", category: "chemicals" },
    { name: "BHT", unit: "500gm", category: "chemicals" },
    { name: "Blood agar base", unit: "500gm", category: "chemicals" },
    { name: "Bromocresol purple", unit: "25gm", category: "chemicals" },
    { name: "Bromophenol blue", unit: "25gm", category: "chemicals" },
    { name: "Bromothymol blue", unit: "25gm", category: "chemicals" },
    { name: "brilliant green bile lactose broth", unit: "500gm", category: "chemicals" },
    { name: "bile salt", unit: "100g", category: "chemicals" },
    { name: "bis acrylamide", unit: "100g", category: "chemicals" },
    { name: "Cerium nitrate", unit: "25gm", category: "chemicals" },
    { name: "Chloromphenicol", unit: "5gm", category: "chemicals" },
    { name: "chloropromazine", unit: "5g", category: "chemicals" },
    { name: "Christensen's media", unit: "500gm", category: "chemicals" },
    { name: "colchicine", unit: "1g", category: "chemicals" },
    { name: "Collagen type", unit: "25gm", category: "chemicals" },
    { name: "Collagenase", unit: "100ml", category: "chemicals" },
    { name: "coumaric acid", unit: "100gm", category: "chemicals" },
    { name: "DMEM", unit: "500ml", category: "chemicals" },
    { name: "DNA", unit: "5gm", category: "chemicals" },
    { name: "DNA ladder 100bp", unit: "500micro", category: "chemicals" },
    { name: "Dnase agar", unit: "500gm", category: "chemicals" },
    { name: "dNBTS", unit: "1ml", category: "chemicals" },
    { name: "DPPH", unit: "1gm", category: "chemicals" },
    { name: "DTNB", unit: "1GM", category: "chemicals" },
    { name: "DTT", unit: "5gm", category: "chemicals" },
    { name: "Dulbecco's PBS (1×)", unit: "500ml", category: "chemicals" },
    { name: "Eosine methylene blue medium", unit: "500gm", category: "chemicals" },
    { name: "Ethidium bromide", unit: "10ml", category: "chemicals" },
    { name: "ferric citrate", unit: "500gm", category: "chemicals" },
    { name: "ferric sulphate", unit: "500gm", category: "chemicals" },
    { name: "Ferrous chloride", unit: "500gm", category: "chemicals" },
    { name: "Fetal bovine serum (FPS)", unit: "100ml", category: "chemicals" },
    { name: "Ficoll", unit: "5GM", category: "chemicals" },
    { name: "Fluid thioglucollate", unit: "500gm", category: "chemicals" },
    { name: "Foil reagent", unit: "100ml", category: "chemicals" },
    { name: "Gas Pack", unit: "bag", category: "chemicals" },
    { name: "Glutathione oxidized", unit: "0.5 g", category: "chemicals" },
    { name: "Glutathione reduced", unit: "5g", category: "chemicals" },
    { name: "glutatione Reduced", unit: "5gm", category: "chemicals" },
    { name: "Glycine", unit: "500gm", category: "chemicals" },
    { name: "Guaiacol", unit: "250ml", category: "chemicals" },
    { name: "Hydrazine sulphate", unit: "100gm", category: "chemicals" },
    { name: "Hydroquinone", unit: "kg", category: "chemicals" },
    { name: "Indo reagent(P. Dimethyl aminobenzaldehyde)", unit: "100g", category: "chemicals" },
    { name: "Inositol", unit: "25gm", category: "chemicals" },
    { name: "iron Solution 1000PPM", unit: "500ml", category: "chemicals" },
    { name: "kinetin", unit: "5gm", category: "chemicals" },
    { name: "kojic acid", unit: "100g", category: "chemicals" },
    { name: "lead Solution 1000PPM", unit: "500ml", category: "chemicals" },
    { name: "litmus milk indicator", unit: "500gm", category: "chemicals" },
    { name: "Loading dye", unit: "5×1ml", category: "chemicals" },
    { name: "Lysozyme", unit: "1g", category: "chemicals" },
    { name: "Maleic acid", unit: "100gm", category: "chemicals" },
    { name: "Malet extract", unit: "500gm", category: "chemicals" },
    { name: "Mangnese chloride", unit: "500gm", category: "chemicals" },
    { name: "mannitol salt agar", unit: "500gm", category: "chemicals" },
    { name: "Mercuric iodide", unit: "100gm", category: "chemicals" },
    { name: "MIO medium", unit: "500gm", category: "chemicals" },
    { name: "MTT", unit: "1gm", category: "chemicals" },
    { name: "MTT dye", unit: "1gm", category: "chemicals" },
    { name: "N acetyl glucose amine", unit: "25gm", category: "chemicals" },
    { name: "NADH", unit: "1gm", category: "chemicals" },
    { name: "NADHP", unit: "100ml", category: "chemicals" },
    { name: "Nitroblue tetrazolium", unit: "1gm", category: "chemicals" },
    { name: "NBT", unit: "1g", category: "chemicals" },
    { name: "Orcinol", unit: "10gm", category: "chemicals" },
    { name: "Papaverin hcl", unit: "25gm", category: "chemicals" },
    { name: "phloroglucinol", unit: "25gm", category: "chemicals" },
    { name: "Phosphotungstic acid", unit: "25gm", category: "chemicals" },
    { name: "Pilocarpine", unit: "5g", category: "chemicals" },
    { name: "poneceau red stain", unit: "5 gm", category: "chemicals" },
    { name: "Potassium iodate", unit: "100g", category: "chemicals" },
    { name: "Potassium tellurite", unit: "5g", category: "chemicals" },
    { name: "Proteinase K", unit: "1ml", category: "chemicals" },
    { name: "pyruvic acid", unit: "250ml", category: "chemicals" },
    { name: "quercetin", unit: "5gm", category: "chemicals" },
    { name: "Rennin", unit: "25gm", category: "chemicals" },
    { name: "Riboflavin", unit: "25gm", category: "chemicals" },
    { name: "RNA", unit: "5gm", category: "chemicals" },
    { name: "Rose bengal", unit: "25gm", category: "chemicals" },
    { name: "simmons citrate media", unit: "500gm", category: "chemicals" },
    { name: "Sodium bromide", unit: "250g", category: "chemicals" },
    { name: "sodium cyanide", unit: "250gm", category: "chemicals" },
    { name: "Sodium formate", unit: "500 g", category: "chemicals" },
    { name: "Sodium orthovanadate", unit: "50gm", category: "chemicals" },
    { name: "Sodium persulphate", unit: "500gm", category: "chemicals" },
    { name: "steptomycin and penicillin(100×)", unit: "100ml", category: "chemicals" },
    { name: "strontium chloride", unit: "100gm", category: "chemicals" },
    { name: "strychnine", unit: "25gm", category: "chemicals" },
    { name: "Succinamide", unit: "250gm", category: "chemicals" },
    { name: "Succinic acid", unit: "500gm", category: "chemicals" },
    { name: "sulfanilic acid", unit: "100gm", category: "chemicals" },
    { name: "sulfosalicylic acid", unit: "500gm", category: "chemicals" },
    { name: "sulphanilamide", unit: "100gm", category: "chemicals" },
    { name: "Sulphosalicylic acid", unit: "100gm", category: "chemicals" },
    { name: "TBE", unit: "Liter", category: "chemicals" },
    { name: "TEMED", unit: "100ml", category: "chemicals" },
    { name: "Tetraethyl orthosilicate", unit: "Liter", category: "chemicals" },
    { name: "Thiobarbituric acid", unit: "25gm", category: "chemicals" },
    { name: "thiopental", unit: "500mg", category: "chemicals" },
    { name: "thymol blue", unit: "25gm", category: "chemicals" },
    { name: "TMB", unit: "1gm", category: "chemicals" },
    { name: "triazol", unit: "100ml", category: "chemicals" },
    { name: "triphenyl tetrazoolium chloride", unit: "5gm", category: "chemicals" },
    { name: "Tris acetate EDTA", unit: "Liter", category: "chemicals" },
    { name: "tris base", unit: "500gm", category: "chemicals" },
    { name: "tris HCL", unit: "kg", category: "chemicals" },
    { name: "trypsin", unit: "25gm", category: "chemicals" },
    { name: "Tryptophan", unit: "25gm", category: "chemicals" },
    { name: "XLD agar", unit: "500gm", category: "chemicals" },
    { name: "Zeil nelsen", unit: "2×100ml", category: "chemicals" }
  ],
  
  media: [
    { name: "sabroud dextrose broth", unit: "500gm", category: "media" },
    { name: "sorbitol", unit: "500gm", category: "media" },
    { name: "Aeromonas m884", unit: "500gm", category: "media" },
    { name: "urea broth", unit: "500gm", category: "media" },
    { name: "Sabroud dextrose medium", unit: "500gm", category: "media" },
    { name: "Cled medium", unit: "500gm", category: "media" },
    { name: "Eosin methylene blue agar", unit: "500gm", category: "media" },
    { name: "Macconkey agar", unit: "500gm", category: "media" },
    { name: "Macconkey broth", unit: "500gm", category: "media" },
    { name: "Aneraobic", unit: "10 kits", category: "media" },
    { name: "Muller Hinton broth", unit: "500gm", category: "media" },
    { name: "Citrate medium", unit: "500gm", category: "media" },
    { name: "Triple suger iron medium", unit: "500gm", category: "media" },
    { name: "Nutrient agar", unit: "500gm", category: "media" },
    { name: "Mio medium", unit: "500gm", category: "media" },
    { name: "Kovacs", unit: "500gm", category: "media" },
    { name: "oxidase sb strips", unit: "500ml", category: "media" },
    { name: "Aneraobic", unit: "2.5liter", category: "media" },
    { name: "TSb", unit: "500gm", category: "media" },
    { name: "Ss agar", unit: "500gm", category: "media" },
    { name: "Potato dextrose agar", unit: "500gm", category: "media" },
    { name: "Mueller agar", unit: "500gm", category: "media" },
    { name: "M17 broth", unit: "500gm", category: "media" },
    { name: "MRs Agar", unit: "500gm", category: "media" },
    { name: "MRS broth", unit: "500gm", category: "media" },
    { name: "supplement", unit: "5vial", category: "media" },
    { name: "cation adjusted muller hinton broth", unit: "500gm", category: "media" },
    { name: "plat mo91", unit: "500gm", category: "media" },
    { name: "Rose-Bengal M1881", unit: "500gm", category: "media" },
    { name: "chloramphenicol supp", unit: "5vial", category: "media" },
    { name: "mossel enrichment broth media", unit: "500gm", category: "media" },
    { name: "violat red bile glocose agar", unit: "500gm", category: "media" },
    { name: "Mannitol salt agar", unit: "500gm", category: "media" },
    { name: "Bile esculine", unit: "500gm", category: "media" },
    { name: "Lactobacullus MRS broth", unit: "500gm", category: "media" },
    { name: "listeria enrichment broth", unit: "500gm", category: "media" },
    { name: "LB broth", unit: "500gm", category: "media" },
    { name: "LB agar", unit: "500gm", category: "media" },
    { name: "Muller Hinton agar", unit: "500gm", category: "media" },
    { name: "Muller Hinton broth", unit: "500gm", category: "media" },
    { name: "Brain heart infusion broth", unit: "500gm", category: "media" },
    { name: "ENB agar", unit: "500gm", category: "media" },
    { name: "tryptic soy broth", unit: "500gm", category: "media" },
    { name: "vogel johnson agar", unit: "500gm", category: "media" },
    { name: "XLD agar", unit: "500gm", category: "media" }
  ],
  
  glassware: [
    { name: "glass tubes screw cap", unit: "unit", category: "glassware" },
    { name: "Graduated pipette", unit: "10ml", category: "glassware" },
    { name: "Graduated pipette", unit: "1ml", category: "glassware" },
    { name: "Graduated pipette", unit: "2ml", category: "glassware" },
    { name: "Graduated pipette", unit: "5ml", category: "glassware" },
    { name: "inoculating Loop (metal)", unit: "unit", category: "glassware" },
    { name: "inoculating Loop Holders", unit: "unit", category: "glassware" },
    { name: "inverted Durham tubes", unit: "pk500", category: "glassware" },
    { name: "Lap porceiain mortar and pestie", unit: "10cm", category: "glassware" },
    { name: "Laporatory glass thremometer", unit: "110درجه", category: "glassware" },
    { name: "Litmus paper", unit: "blue", category: "glassware" },
    { name: "Litmus paper", unit: "red", category: "glassware" },
    { name: "Litmus paper", unit: "unit", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "unit", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "1.5cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "2cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "3cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "4cm", category: "glassware" },
    { name: "Magnetic stirrer bar", unit: "6cm", category: "glassware" },
    { name: "Measuring cylinder", unit: "10ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "50ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "100ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "250ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "500ml", category: "glassware" },
    { name: "Measuring cylinder", unit: "1Liter", category: "glassware" },
    { name: "Measuring flask", unit: "100ml", category: "glassware" },
    { name: "Measuring flask", unit: "250ml", category: "glassware" },
    { name: "Measuring flask", unit: "500ml", category: "glassware" },
    { name: "Measuring flask", unit: "1Liter", category: "glassware" },
    { name: "Measuring flask", unit: "2Liter", category: "glassware" },
    { name: "Measuring flask", unit: "25ml", category: "glassware" },
    { name: "Measuring flask", unit: "10ml", category: "glassware" },
    { name: "Membrane filter", unit: "علبه100 فلتر", category: "glassware" },
    { name: "Micropipette", unit: "(0.5-10ul)", category: "glassware" },
    { name: "Micropipette", unit: "(10-100ul)", category: "glassware" },
    { name: "Micropipette", unit: "(100-1000ul)", category: "glassware" },
    { name: "Microscope cover slide", unit: "باكت", category: "glassware" },
    { name: "Nassler tubes", unit: "50ml", category: "glassware" },
    { name: "Nylone syringe Filters 0.2um", unit: "pk", category: "glassware" },
    { name: "Ostwald viscometer", unit: "unit", category: "glassware" },
    { name: "Parafilm", unit: "roll", category: "glassware" },
    { name: "3Neck flask", unit: "500ml", category: "glassware" },
    { name: "Beaker glass", unit: "100ml", category: "glassware" },
    { name: "Beaker glass", unit: "1000ml", category: "glassware" },
    { name: "Beaker glass", unit: "2000ml", category: "glassware" },
    { name: "Beaker glass", unit: "250ml", category: "glassware" },
    { name: "Beaker glass", unit: "500ml", category: "glassware" },
    { name: "Beaker low From", unit: "50ml", category: "glassware" },
    { name: "Beaker plastic", unit: "100ML", category: "glassware" },
    { name: "Beaker plastic", unit: "500ml", category: "glassware" },
    { name: "Bulb pipette", unit: "1ml", category: "glassware" },
    { name: "Bulb pipette", unit: "10ml", category: "glassware" },
    { name: "Bulb pipette", unit: "5ml", category: "glassware" },
    { name: "Bunsen Bumer(Gas cartridges)", unit: "unit", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "25ml", category: "glassware" },
    { name: "Burette graduated", unit: "50ml", category: "glassware" },
    { name: "Burette holder", unit: "4 قطع", category: "glassware" },
    { name: "Condenser", unit: "220ml", category: "glassware" },
    { name: "Concial glass flask", unit: "100ml", category: "glassware" },
    { name: "Concial glass flask", unit: "500ml", category: "glassware" },
    { name: "Concial glass flask", unit: "250ml", category: "glassware" },
    { name: "Concial glass flask", unit: "2000ml", category: "glassware" },
    { name: "Concial glass flask", unit: "1000ml", category: "glassware" },
    { name: "Crucible", unit: "40cm", category: "glassware" },
    { name: "Crucible", unit: "30cm", category: "glassware" },
    { name: "Crucible", unit: "10ml", category: "glassware" },
    { name: "Crucible", unit: "50ml", category: "glassware" },
    { name: "Crucible", unit: "150ml", category: "glassware" },
    { name: "Crucible sintered glass (G4)", unit: "unit", category: "glassware" },
    { name: "Cuvette glass 3cm", unit: "unit", category: "glassware" },
    { name: "Cuvette glass 5cm", unit: "unit", category: "glassware" },
    { name: "Cuvette glass 1cm", unit: "unit", category: "glassware" },
    { name: "Dropping funnel", unit: "10cm", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "pk500/0.5ml", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "pk500/1.5ml", category: "glassware" },
    { name: "Eppendorf tube transparent", unit: "pk500/2ml", category: "glassware" },
    { name: "Falcon tupe", unit: "15ml", category: "glassware" },
    { name: "Falcon tupe", unit: "50ml", category: "glassware" },
    { name: "Filter paper", unit: "11cm", category: "glassware" },
    { name: "Filter paper", unit: "12.5cm", category: "glassware" },
    { name: "Filter paper", unit: "15 cm", category: "glassware" },
    { name: "Filter paper", unit: "24", category: "glassware" },
    { name: "Filter paper", unit: "18cm", category: "glassware" },
    { name: "Filter paper", unit: "9cm", category: "glassware" },
    { name: "forceps", unit: "unit", category: "glassware" },
    { name: "funels glass", unit: "50mm", category: "glassware" },
    { name: "funels glass", unit: "75mm", category: "glassware" },
    { name: "funels glass", unit: "100mm", category: "glassware" },
    { name: "glass bottel screw cap", unit: "100ml", category: "glassware" },
    { name: "glass bottel screw cap", unit: "250ml", category: "glassware" },
    { name: "Pasteur polyethylene pipettes", unit: "Plastic", category: "glassware" },
    { name: "Petri Dish", unit: "9cm", category: "glassware" },
    { name: "pipette filler", unit: "10ml green", category: "glassware" },
    { name: "pipette glass", unit: "10ml", category: "glassware" },
    { name: "pipette glass", unit: "5ml", category: "glassware" },
    { name: "Plastic dropper", unit: "unit", category: "glassware" },
    { name: "Porcelin crucible with lid", unit: "50ml", category: "glassware" },
    { name: "Porcelin dish", unit: "100ml", category: "glassware" },
    { name: "Round Bottom Quick fit flask", unit: "250ml", category: "glassware" },
    { name: "spatula", unit: "unit", category: "glassware" },
    { name: "Stainless steel spatula", unit: "unit", category: "glassware" },
    { name: "Stalagmometer", unit: "unit", category: "glassware" },
    { name: "Test tube clamp", unit: "unit", category: "glassware" },
    { name: "Test tube Rack", unit: "unit", category: "glassware" },
    { name: "tast tubes", unit: "unit", category: "glassware" },
    { name: "Tips Rack", unit: "Blue", category: "glassware" },
    { name: "Tips Rack", unit: "yellow", category: "glassware" },
    { name: "Wash bottel", unit: "250ml", category: "glassware" },
    { name: "Wash bottel", unit: "500ml", category: "glassware" },
    { name: "Wash glass", unit: "unit", category: "glassware" },
    { name: "Water condenser", unit: "unit", category: "glassware" },
    { name: "Porcelain morter", unit: "10cm", category: "glassware" },
    { name: "Porcelain morter", unit: "13cm", category: "glassware" },
    { name: "Porcelain morter", unit: "16cm", category: "glassware" },
    { name: "Conical flask with stopper", unit: "500ml", category: "glassware" },
    { name: "Conical flask with stopper", unit: "1Liter", category: "glassware" },
    { name: "Separating funnel", unit: "250ml", category: "glassware" },
    { name: "Separating funnel", unit: "500ml", category: "glassware" },
    { name: "glass filter funnel", unit: "100mm", category: "glassware" },
    { name: "Hct tubes", unit: "heparinized", category: "glassware" }
  ]
};

// Fixed data structure
const productCategories = {
    chemicals: productData.chemicals,
    media: productData.media,
    glassware: productData.glassware
};

let currentProducts = [];

function initializeProducts() {
    console.log('Initializing products...');
    
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Setup category event listeners
    setupCategoryListeners();
    
    // Load initial products
    handleCategoryChange(category || 'all');
}

function setupCategoryListeners() {
    // For dropdown
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            handleCategoryChange(e.target.value);
        });
    }
    
    // For category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            handleCategoryChange(category);
        });
    });
}

function handleCategoryChange(category) {
    console.log('Changing category to:', category);
    
    // Update products list
    if (category === 'all') {
        currentProducts = [
            ...productData.chemicals,
            ...productData.media,
            ...productData.glassware
        ];
    } else {
        currentProducts = productData[category] || [];
    }
    
    // Update UI
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    
    updateActivePill(category);
    renderProducts(currentProducts);
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('category', category);
    window.history.pushState({}, '', url);
}

function updateActivePill(category) {
    document.querySelectorAll('.category-pill').forEach(pill => {
        if (pill.dataset.category === category) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });
}

// Update render function to include more product details
function renderProducts(filteredProducts) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="col-span-full text-center py-8 text-gray-500">No products found</div>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex justify-between items-start mb-4">
                <h3 class="text-lg font-semibold text-primary">${product.name}</h3>
                <span class="text-sm bg-gray-100 px-2 py-1 rounded">${product.unit}</span>
            </div>
            <div class="mb-4">
                <span class="inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}">
                    ${product.category}
                </span>
            </div>
            <button class="cart-btn w-full bg-white text-black border border-gray-300 hover:bg-gray-50 transition-colors py-2 px-4 rounded text-center">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Helper function for category colors
function getCategoryColor(category) {
    const colors = {
        chemicals: 'bg-blue-100 text-blue-800',
        media: 'bg-green-100 text-green-800',
        glassware: 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
}

// Improved search functionality
function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter');
    const category = categoryFilter?.value || 'all';
    
    showSearchSuggestions(searchTerm);
    
    return currentProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.unit.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
}

function showSearchSuggestions(searchTerm) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    if (!suggestionsContainer || !searchTerm) {
        suggestionsContainer?.classList.add('hidden');
        return;
    }

    const matches = currentProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 5); // Limit to 5 suggestions

    if (matches.length > 0) {
        suggestionsContainer.innerHTML = matches.map(product => `
            <div class="suggestion-item p-3 hover:bg-gray-100 cursor-pointer">
                <div class="font-medium">${product.name}</div>
                <div class="flex justify-between mt-1">
                    <span class="text-sm text-gray-500">${product.category}</span>
                    <span class="text-sm bg-gray-100 px-2 py-1 rounded">${product.unit}</span>
                </div>
            </div>
        `).join('');
        suggestionsContainer.classList.remove('hidden');
    } else {
        suggestionsContainer.innerHTML = `
            <div class="p-3 text-gray-500">No matches found</div>
        `;
        suggestionsContainer.classList.remove('hidden');
    }
}

// Update event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing...');
    initializeProducts();

    const searchInput = document.getElementById('searchInput');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    const searchIcon = document.getElementById('searchIcon');

    if (searchInput) {
        // Input event for live search
        searchInput.addEventListener('input', () => {
            const filtered = filterProducts();
            renderProducts(filtered);
        });

        // Handle suggestion clicks
        suggestionsContainer?.addEventListener('click', (e) => {
            const suggestionItem = e.target.closest('.suggestion-item');
            if (suggestionItem) {
                const productName = suggestionItem.querySelector('.font-medium').textContent;
                searchInput.value = productName;
                suggestionsContainer.classList.add('hidden');
                renderProducts(filterProducts());
            }
        });

        // Handle search icon click
        searchIcon?.addEventListener('click', () => {
            renderProducts(filterProducts());
        });

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsContainer?.contains(e.target)) {
                suggestionsContainer?.classList.add('hidden');
            }
        });
    }
});
