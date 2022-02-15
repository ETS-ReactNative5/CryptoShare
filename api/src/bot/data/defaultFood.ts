let defaultFood = ["takeout", "take-out", "take out", "steak", "angelica", "savoy cabbage", "silver linden", "kiwi", "allium (onion)", "garden onion", "leek", "garlic", "chives", "lemon verbena", "cashew nut", "pineapple", "dill", "custard apple", "wild celery", "peanut", "burdock", "horseradish", "tarragon", "mugwort", "asparagus", "oat", "star fruit", "brazil nut", "common beet", "borage", "chinese mustard", "swede", "rape", "common cabbage", "cauliflower", "brussel sprouts", "kohlrabi", "broccoli", "chinese cabbage", "turnip", "pigeon pea", "tea", "capers", "pepper (c. annuum)", "papaya", "safflower", "caraway", "pecan nut", "chestnut", "roman camomile", "chickpea", "endive", "chicory", "chinese cinnamon", "ceylon cinnamon", "watermelon", "lime", "lemon", "pummelo", "mandarin orange (clementine, tangerine)", "sweet orange", "coffee", "arabica coffee", "robusta coffee", "coriander", "common hazelnut", "saffron", "muskmelon", "cucumber", "cucurbita (gourd)", "cumin", "turmeric", "quince", "lemon grass", "globe artichoke", "wild carrot", "japanese persimmon", "cardamom", "black crowberry", "loquat", "rocket salad (ssp.)", "wax apple", "common buckwheat", "tartary buckwheat", "fig", "fennel", "strawberry", "black huckleberry", "soy bean", "sunflower", "sea-buckthornberry", "barley", "hyssop", "star anise", "swamp cabbage", "sweet potato", "black walnut", "common walnut", "lettuce", "grass pea", "sweet bay", "lentils", "garden cress", "lovage", "flaxseed", "mexican oregano", "lichee", "lupine", "apple", "mango", "german camomile", "lemon balm", "mentha (mint)", "orange mint", "cornmint", "spearmint", "peppermint", "medlar", "bitter gourd", "mulberry", "black mulberry", "nutmeg", "sweet basil", "evening primrose", "olive", "sweet marjoram", "pot marjoram", "common oregano", "rice", "millet", "poppy", "passion fruit", "parsnip", "avocado", "parsley", "scarlet bean", "lima bean", "common bean", "date", "black chokeberry", "anise", "pine nut", "pepper (spice)", "pistachio", "common pea", "purslane", "prunus (cherry, plum)", "apricot", "sweet cherry", "sour cherry", "european plum", "almond", "peach", "guava", "pomegranate", "pear", "radish", "garden rhubarb", "blackcurrant", "redcurrant", "gooseberry", "watercress", "rosemary", "rubus (blackberry, raspberry)", "cloudberry", "red raspberry", "black raspberry", "sorrel", "common sage", "black elderberry", "summer savory", "winter savory", "rye", "sesame", "garden tomato", "cherry tomato", "garden tomato (var.)", "eggplant", "potato", "rowanberry", "sorghum", "spinach", "cloves", "tamarind", "dandelion", "cocoa bean", "common thyme", "linden", "small-leaf linden", "fenugreek", "common wheat", "vaccinium (blueberry, cranberry, huckleberry)", "lowbush blueberry", "sparkleberry", "highbush blueberry", "american cranberry", "bilberry", "lingonberry", "vanilla", "common verbena", "broad bean", "adzuki bean", "gram bean", "mung bean", "climbing bean", "cowpea", "muscadine grape", "common grape", "corn", "ginger", "arctic blackberry", "banana", "bayberry", "elliott's blueberry", "canada blueberry", "bog bilberry", "buffalo currant", "celeriac", "celery stalks", "chinese chives", "european cranberry", "deerberry", "ginseng", "cascade huckleberry", "oval-leaf huckleberry", "evergreen huckleberry", "red huckleberry", "longan", "macadamia nut (m. tetraphylla)", "garden onion (var.)", "summer grape", "fox grape", "nectarine", "peach (var.)", "pepper (c. baccatum)", "pepper (c. chinense)", "pepper (capsicum)", "rambutan", "red rice", "annual wild rice", "swiss chard", "lemon thyme", "tronchuda cabbage", "japanese walnut", "welsh onion", "hard wheat", "shallot", "rocket salad", "carrot", "triticale", "black cabbage", "half-highbush blueberry", "celery leaves", "chicory leaves", "komatsuna", "pak choy", "napa cabbage", "chicory roots", "grapefruit/pummelo hybrid", "grapefruit", "jostaberry", "kai-lan", "italian oregano", "oxheart cabbage", "daikon radish", "black radish", "radish (var.)", "red beetroot", "sweet rowanberry", "pineappple sage", "skunk currant", "beer", "other bread", "breakfast cereal", "other soy product", "other cereal product", "pasta", "biscuit", "sourdough", "spirit", "fortified wine", "other alcoholic beverage", "abalone", "abiyuch", "acerola", "acorn", "winter squash", "agar", "red king crab", "alfalfa", "allspice", "amaranth", "arrowhead", "arrowroot", "asian pear", "atlantic herring", "atlantic mackerel", "painted comber", "atlantic pollock", "atlantic wolffish", "bamboo shoots", "striped bass", "beaver", "beech nut", "beluga whale", "bison", "black bear", "alaska blackfish", "blue crab", "blue mussel", "northern bluefin tuna", "bluefish", "wild boar", "bowhead whale", "breadfruit", "breadnut tree seed", "rapini", "brown bear", "buffalo", "burbot", "giant butterbur", "american butterfish", "butternut", "butternut squash", "calabash", "cardoon", "caribou", "natal plum", "carob", "common carp", "cassava", "channel catfish", "chayote", "cherimoya", "chervil", "chia", "chicken (cock, hen, rooster)", "chinese broccoli", "chinese chestnut", "chinese water chestnut", "garland chrysanthemum", "cisco", "nuttall cockle", "coconut", "pacific cod", "atlantic cod", "common octopus", "corn salad", "cottonseed", "catjang pea", "malus (crab apple)", "squashberry", "atlantic croaker", "cusk", "cuttlefish", "mule deer", "devilfish", "dock", "dolphin fish", "freshwater drum", "mallard duck", "dungeness crab", "durian", "eastern oyster", "freshwater eel", "elderberry", "elk", "emu", "oregon yampah", "european anchovy", "european chestnut", "turbot", "fireweed", "florida pompano", "ginkgo nuts", "greylag goose", "grape", "greenland halibut/turbot", "groundcherry", "grouper", "guinea hen", "haddock", "hippoglossus (common halibut)", "hazelnut", "hickory nut", "horse", "horseradish tree", "alaska blueberry", "hyacinth bean", "irish moss", "pacific jack mackerel", "jackfruit", "japanese chestnut", "java plum", "jerusalem artichoke", "jujube", "jute", "kale", "kelp", "king mackerel", "kumquat", "lambsquarters", "leather chiton", "wild leek", "common ling", "lingcod", "american lobster", "loganberry", "lotus", "sacred lotus", "white lupine", "malabar spinach", "mammee apple", "purple mangosteen", "alpine sweetvetch", "milkfish", "milk", "monkfish", "moose", "moth bean", "mountain yam", "striped mullet", "muskrat", "white mustard", "mustard spinach", "new zealand spinach", "nopal", "ocean pout", "north pacific giant octopus", "ohelo berry", "okra", "tunicate", "opossum", "ostrich", "spotted seal", "pacific herring", "pacific oyster", "pacific rockfish", "velvet duck", "pepper (c. frutescens)", "common persimmon", "pheasant", "northern pike", "pili nut", "colorado pinyon", "pitanga", "plains prickly pear", "french plantain", "american pokeweed", "polar bear", "opium poppy", "prairie turnip", "prickly pear", "quinoa", "european rabbit", "raccoon", "rainbow smelt", "rainbow trout", "malabar plum", "rose hip", "roselle", "orange roughy", "sablefish", "pink salmon", "chum salmon", "coho salmon", "sockeye salmon", "chinook salmon", "atlantic salmon", "salmonberry", "common salsify", "sapodilla", "mamey sapote", "spanish mackerel", "pacific sardine", "scallop", "scup", "sea cucumber", "steller sea lion", "bearded seal", "ringed seal", "seatrout", "sesbania flower", "american shad", "shark", "sheefish", "sheep (mutton, lamb)", "sheepshead", "hedge mustard", "skipjack tuna", "snapper", "soursop", "spelt", "spirulina", "squab", "squirrel", "strawberry guava", "greater sturgeon", "white sucker", "sugar apple", "pumpkinseed sunfish", "swordfish", "taro", "teff", "tilefish", "mexican groundcherry", "towel gourd", "salmonidae (salmon, trout)", "turkey", "cattle (beef, veal)", "walleye", "alaska pollock", "wasabi", "wax gourd", "whelk", "coalfish pollock", "broad whitefish", "whitefish", "whiting", "wild rice", "tea leaf willow", "winged bean", "yam", "jicama", "yautia", "yellowfin tuna", "yellowtail amberjack", "pollock", "albacore tuna", "gadus (common cod)", "atlantic halibut", "pacific halibut", "pacific salmon", "smelt", "clupeinae (herring, sardine, sprat)", "spiny lobster", "snow crab", "black-eyed pea", "deer", "macadamia nut", "percoidei (bass and others)", "perciformes (perch-like fishes)", "arctic ground squirrel", "rabbit", "domestic goat", "beefalo", "antelope", "bivalvia (clam, mussel, oyster)", "squid", "shrimp", "crayfish", "flatfish", "domestic pig (piglet, pork)", "walrus", "alaska wild rhubarb", "oriental wheat", "yardlong bean", "great horned owl", "quail", "boysenberry", "persian lime", "feijoa", "rowal", "jew's ear", "common mushroom", "shiitake", "purple laver", "wakame", "enokitake", "epazote", "oyster mushroom", "cloud ear fungus", "maitake", "ostrich fern", "spot croaker", "sourdock", "tinda", "atlantic menhaden", "wheat", "common chokecherry", "agave", "narrowleaf cattail", "jellyfish", "anchovy", "blue whiting", "carp bream", "chanterelle", "sturgeon", "charr", "cinnamon", "crab", "common dab", "spiny dogfish", "anatidae (duck, goose, swan)", "anguilliformes (eel)", "true frog", "garfish", "gadiformes (cod, hake)", "mountain hare", "lake trout", "lemon sole", "clawed lobster", "lumpsucker", "scombridae (bonito, mackerel, tuna)", "marine mussel", "norway haddock", "norway lobster", "norway pout", "oil palm", "true oyster", "sago palm", "persimmon", "pikeperch", "pleuronectidae (dab, halibut, plaice)", "rock ptarmigan", "pacific ocean perch", "black salsify", "true seal", "red algae", "kombu", "snail", "true sole", "catfish", "thistle", "thunnus (common tuna)", "walnut", "cetacea (dolphin, porpoise, whale)", "columbidae (dove, pigeon)", "conch", "grape wine", "berry wine", "other wine", "apple cider", "liquor", "cheese", "milk (cow)", "eggs", "yogurt", "bean", "vodka", "whisky", "ice cream", "gin", "honey", "liquorice", "vinegar", "rum", "port wine", "vermouth", "sherry", "madeira wine", "nougat", "toffee", "cake", "pizza", "ymer", "other snack food", "crisp bread", "pastry", "dragée", "chewing gum", "marzipan", "salad dressing", "sauce", "salt", "butter", "butter substitute", "cream", "sugar", "sausage", "meatball", "mustard", "pate", "sugar substitute", "meat bouillon", "other meat product", "whey", "casein", "fruit preserve", "leavening agent", "marshmallow", "gelatin", "water", "other fish product", "milk (human)", "other beverage", "baby food", "dumpling", "soup", "other vegetable product", "unclassified food or beverage", "syrup", "tallow", "remoulade", "chocolate spread", "fruit gum", "curry powder", "other candy", "meringue", "lard", "other animal fat", "other cocoa product", "cocoa butter", "cocoa powder", "cocoa liquor", "chocolate", "hot chocolate", "dried milk", "milk (other mammals)", "kefir", "buttermilk", "other fermented milk", "soy sauce", "miso", "tofu", "zwieback", "roe", "cichlidae (tilapia)", "icing", "snack bar", "green turtle", "energy drink", "burrito", "hamburger", "baked beans", "chili", "taco", "tortilla", "nachos", "processed cheese", "salad", "cream substitute", "dulce de leche", "topping", "sweet custard", "egg roll", "heart of palm", "popcorn", "potato chip", "tortilla chip", "corn chip", "hibiscus tea", "stew", "gelatin dessert", "junket", "falafel", "frybread", "other frozen dessert", "lasagna", "morchella (morel)", "pancake", "pectin", "pudding", "waffle", "soy milk", "meatloaf", "sake", "cocktail", "couscous", "bulgur", "coffee substitute", "coffee mocha", "chimichanga", "semolina", "tapioca pearl", "tostada", "quesadilla", "baked potato", "hot dog", "spread", "enchilada", "egg substitute", "nutritional drink", "other sandwich", "ketchup", "breakfast sandwich", "adobo", "macaroni and cheese", "butterfat", "horned melon", "hushpuppy", "fruit juice", "relish", "other fruit product", "fruit salad", "soy yogurt", "vegetarian food", "veggie burger", "cold cut", "mixed nuts", "canola", "babassu palm", "cupuaçu", "shea tree", "oil-seed camellia", "ucuhuba", "phyllo dough", "cooking oil", "pie crust", "pie filling", "pie", "shortening", "soy cream", "ice cream cone", "molasses", "cracker", "nance", "naranjilla", "natto", "ravioli", "scrapple", "other pasta dish", "succotash", "tamale", "rice cake", "tree fern", "evaporated milk", "flour", "akutaq", "dough", "pita bread", "focaccia", "bagel", "other bread product", "piki bread", "french toast", "wheat bread", "rye bread", "oat bread", "potato bread", "cornbread", "corn grits", "multigrain bread", "rice bread", "pan dulce", "raisin bread", "wonton wrapper", "trail mix", "greenthread tea", "fruit-flavor drink", "vegetable juice", "horchata", "soft drink", "frozen yogurt", "milkshake", "chocolate mousse", "dripping", "pupusa", "empanada", "arepa", "ascidians", "gefilte fish", "yellow pond-lily", "fish burger", "other dish", "pot pie", "stuffing", "edible shell", "fudge", "candy bar", "condensed milk", "margarine", "margarine-like spread", "hummus", "potato puffs", "potato gratin", "milk substitute", "pepper (c. pubescens)", "soft-necked garlic", "cabbage", "chinese bayberry", "mushrooms", "alcoholic beverages", "onion-family vegetables", "pomes", "brassicas", "cereals and cereal products", "citrus", "cocoa and cocoa products", "coffee and coffee products", "crustaceans", "milk and milk products", "fats and oils", "fishes", "herbs and spices", "pulses", "animal foods", "mollusks", "nuts", "beverages", "fruits", "green vegetables", "root vegetables", "sunburst squash (pattypan squash)", "green zucchini", "yellow zucchini", "green bell pepper", "yellow bell pepper", "orange bell pepper", "red bell pepper", "italian sweet red pepper", "yellow wax bean", "green bean", "saskatoon berry", "nanking cherry", "japanese pumpkin", "white cabbage", "romaine lettuce"];

export default defaultFood;