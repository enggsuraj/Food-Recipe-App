export let recipedata = [
    {
      title: " Pav bhaji",
      ID: 0,
      emoji: "🍞",
      stars:4.5,
      steps: "Instructions for making this recipe",
      time:[{prep:"20 mins"},{cook:"30 mins"},{total:"50 mins"},{servings:4}],
      nutritions:"651.8 calories; protein 13.4g 27% DV; carbohydrates 78.8g 25% DV; fat 33.9g 52% DV; cholesterol 6.1mg 2% DV; sodium 375.1mg 15% DV.",
      about:"This is a very popular recipe in India, liked by almost everyone. You may have to go to a nearby Asian Indian store to get the 'Pav Bhaji Masala' that is the special spice to bring the flavor (Masala means spice). Pav is actually the buns. Bhaji is the vegetables cooked with spice.",
      ingredient: [
        { name: "½ cup vegetable oil", isPresent: true, id: uuidv4() },
        { name: "1 cup chopped cabbage", isPresent: false, id: uuidv4() },
        { name: "4 potatos, boiled and mashed", isPresent: false, id: uuidv4() },
        { name: "3 tablespoons pav bhaji masala", isPresent: false, id: uuidv4() },
        { name: "½ tablespoon butter", isPresent: false, id: uuidv4() },
        { name: "¼ cup finely chopped onion", isPresent: false, id: uuidv4() },
        { name: "1 cup chopped tomatoes", isPresent: false, id: uuidv4() },
        { name: "1 cup green peas", isPresent: false, id: uuidv4() },
        { name: "salt to taste", isPresent: false, id: uuidv4() },
      ],
      directions:[{step:'Step 1: Heat the oil in a wok over medium heat. Saute garlic and green chile for 30 seconds, then stir in onions and ginger. Cook until onions are brown. Add tomatoes, and cook until pasty. Stir in cauliflower, cabbage, peas, carrots and potatoes. Season with pav bhaji masala. Cover, and cook for 15 minutes, stirring occasionally. Season with salt, and stir in lemon juice.'},
      {step:'Step 2: Toast the dinner rolls, and spread lightly with butter. Serve garnished with chopped onion, green chile and cilantro.'}]
  
    },
    {
      title: "Veg Chilli",
      ID: 1,
      emoji: "🥗",
      stars:4,
      steps: "Instructions for making this recipe",
      time:[{prep:"10 mins"},{cook:"20 mins"},{total:"30 mins"},{servings:8}],
      nutritions:"651.8 calories; protein 13.4g 27% DV; carbohydrates 78.8g 25% DV; fat 33.9g 52% DV; cholesterol 6.1mg 2% DV; sodium 375.1mg 15% DV.",
      about:"Black bean veggie chili, richly spiced, can be ready for dinner or game day in only 30 minutes.",
      time:[{prep:"20 mins"},{cook:"30 mins"},{total:"50 mins"},{servings:4}],
      ingredient: [
        { name: "1 tablespoon Spectrum Olive Oil", isPresent: true, id: uuidv4() },
        { name: "1 ½ cups chopped red onions", isPresent: false, id: uuidv4() },
        { name: "1 cup chopped green bell pepper", isPresent: false, id: uuidv4() },
        { name: "1 cup chopped celery", isPresent: true, id: uuidv4() },
        { name: "2 teaspoons minced garlic", isPresent: true, id: uuidv4() },
        { name: "11 ½ tablespoons chili powder", isPresent: true, id: uuidv4() },
        { name: "2 teaspoons dried oregano", isPresent: true, id: uuidv4() },
        { name: "1 teaspoon ground coriander", isPresent: true, id: uuidv4() },
      ],
      directions:[{step:'Step 1: Heat olive oil in a large, non-stick pot over medium-high heat.'},
      {step:'Step 2: Add onions, green pepper, celery and garlic. Cook and stir until vegetables begin to soften, about 5 minutes.'},
      {step:"Step 3: Add Yves Veggie Ground Round, chili powder, cumin, oregano, coriander, red pepper flakes and cinnamon. Mix well and cook for 1 more minute."},
      {step:"Step 4: Add undrained tomatoes, beans, tomato sauce, broth, brown sugar, salt and pepper. Bring mixture to a boil. Reduce heat to low and simmer, covered for 20 minutes."},
      {step:"Step 5: Remove from heat and stir in cilantro (if using). Serve hot."}
    ]
    },
    {
      title: "Sushi Roll",
      ID: 2,
      emoji: "🍣",
      stars:4,
      steps: "Instructions for making this recipe",
      time:[{prep:"10 mins"},{cook:"20 mins"},{total:"30 mins"},{servings:8}],
      nutritions:"152.2 calories; protein 3.9g 8% DV; carbohydrates 25.8g 8% DV; fat 3.9g 6% DV; cholesterol 5.7mg 2% DV; sodium 702.5mg 28% DV.",
      about:"Sushi can be filled with any ingredients you choose. Try smoked salmon instead of imitation crabmeat. Serve with teriyaki sauce and wasabi.",
      time:[{prep:"45 mins"},{cook:"45 mins"},{total:"45 mins"},{servings:8}],
      ingredient: [
        { name: "⅔ cup uncooked white rice", isPresent: true, id: uuidv4() },
        { name: "3 tablespoons rice vinegar", isPresent: false, id: uuidv4() },
        { name: "3 tablespoons white sugar", isPresent: false, id: uuidv4() },
        { name: "1 ½ teaspoons salt", isPresent: true, id: uuidv4() },
        { name: "4 sheets seaweed sheets", isPresent: true, id: uuidv4() },
        { name: "½ cucumber, peeled", isPresent: true, id: uuidv4() },
        { name: "1 avocado", isPresent: true, id: uuidv4() },
      ],
      directions:[{step:'Step 1: In a medium saucepan, bring 1 1/3 cups water to a boil. Add rice, and stir. Reduce heat, cover, and simmer for 20 minutes. In a small bowl, mix the rice vinegar, sugar ,and salt. Blend the mixture into the rice.'},
      {step:'Step 2: Preheat oven to 300 degrees F (150 degrees C). On a medium baking sheet, heat nori in the preheated oven 1 to 2 minutes, until warm.'},
      {step:"Step 3: Center one sheet nori on a bamboo sushi mat. Wet your hands. Using your hands, spread a thin layer of rice on the sheet of nori, and press into a thin layer. Arrange 1/4 of the cucumber, ginger, avocado, and imitation crabmeat in a line down the center of the rice. Lift the end of the mat, and gently roll it over the ingredients, pressing gently. Roll it forward to make a complete roll. Repeat with remaining ingredients."},
      {step:"Step 4: Cut each roll into 4 to 6 slices using a wet, sharp knife."}
    ]
    },
    {
      title: "Vegan Curried Rice",
      ID: 3,
      emoji: "🍛",
      stars:4,
      steps: "Instructions for making this recipe",
      time:[{prep:"5 mins"},{cook:"25 mins"},{total:"30 mins"},{servings:8}],
      nutritions:"152.2 calories; protein 3.9g 8% DV; carbohydrates 25.8g 8% DV; fat 3.9g 6% DV; cholesterol 5.7mg 2% DV; sodium 702.5mg 28% DV.",
      about:"Simple but delicious curried rice that will go well with essentially any meal.",
      time:[{prep:"45 mins"},{cook:"45 mins"},{total:"45 mins"},{servings:8}],
      ingredient: [
        { name: "2 tablespoons olive oil", isPresent: true, id: uuidv4() },
        { name: "1 tablespoon minced garlic", isPresent: false, id: uuidv4() },
        { name: "1 tablespoon ground curry powder", isPresent: false, id: uuidv4() },
        { name: "1 cup uncooked white rice", isPresent: true, id: uuidv4() },
        { name: "1 tablespoon soy sauce", isPresent: true, id: uuidv4() },
      ],
      directions:[{step:'Step 1:  Heat olive oil in a medium saucepan over low heat. Sweat the garlic; when the garlic becomes aromatic, slowly stir in pepper, cumin, curry powder and chili powder. When spices begin to fry and become fragrant, stir in the bouillon cube and a little water.'},
      {step:'Step 2: Increase heat to high and add the rest of the water and the soy sauce. Just before the mixture comes to a boil, stir in rice. Bring to a rolling boil; reduce heat to low, cover, and simmer 15 to 20 minutes, or until all liquid is absorbed.'},
      {step:"Step 3: Remove from heat and let stand 5 minutes."}
    ]
    },
    {
      title: "Orange-Carrot-Ginger Juice",
      ID: 4,
      emoji: "🍹",
      stars:4,
      steps: "Instructions for making this recipe",
      time:[{prep:"10 mins"},{cook:"20 mins"},{total:"30 mins"},{servings:8}],
      nutritions:"158.7 calories; protein 3.3g 7% DV; carbohydrates 40.1g 13% DV; fat 0.6g 1% DV; cholesterolmg; sodium 93.4mg 4% DV",
      about:"Boost your immune system with an orange-carrot-ginger juice packed with healthy citrus and carrots. This juice has tons of flavor, a zing of tartness, and is full of nourishment. The perfect juice to spring-clean your diet!",
      time:[{prep:"15 mins"},{cook:"0 mins"},{total:"15 mins"},{servings:1}],
      ingredient: [
        { name: "1 large orange, peeled", isPresent: true, id: uuidv4() },
        { name: "1 cup carrots, chopped", isPresent: false, id: uuidv4() },
        { name: "¼ cup lemon juice", isPresent: false, id: uuidv4() },
        { name: "1 ½ teaspoons salt", isPresent: true, id: uuidv4() },
        { name: "1 (1 inch) piece ginger", isPresent: true, id: uuidv4() },
        { name: "½ cup ice", isPresent: true, id: uuidv4() },
      ],
      directions:[{step:'Step 1: Place orange, carrots, lemon juice, and ginger in a juicer. Blend, according to manufacturers instructions, until smooth.'},
      {step:'Step 2: Pour juice into a glass filled with ice.'},
    ]
    },
    {
      title: "Strawberry Ice Cream",
      ID: 5,
      emoji: "🍦",
      stars:4,
      steps: "Instructions for making this recipe",
      time:[{prep:"10 mins"},{cook:"60 mins"},{total:"70 mins"},{servings:12}],
      nutritions:"158.7 calories; protein 3.3g 7% DV; carbohydrates 40.1g 13% DV; fat 0.6g 1% DV; cholesterolmg; sodium 93.4mg 4% DV",
      about:"Many people consider this type of strawberry ice cream recipe a 'hack' or a 'cheat' because we're skipping the more time-consuming and sometimes temperamental egg-custard step; but even if I didn't want to save time I'd still prefer this method. To be clear, I'm only speaking about this specific flavor of ice cream. For deep, dark chocolate, or butter pecan, I'll take the classic French-style every time. But, for sweet, juicy strawberries, I'm not a big fan of the egginess you get with the traditional method.",
      time:[{prep:"15 mins"},{cook:"0 mins"},{total:"15 mins"},{servings:1}],
      ingredient: [
        { name: "12 ounces fresh strawberries, hulled", isPresent: true, id: uuidv4() },
        { name: "¾ cup white sugar", isPresent: false, id: uuidv4() },
        { name: "2 cups heavy whipping cream", isPresent: false, id: uuidv4() },
        { name: "1 cup milk", isPresent: true, id: uuidv4() },
        { name: "1 teaspoon vanilla extract", isPresent: true, id: uuidv4() },
      ],
      directions:[{step:'Step 1: Place strawberries and sugar in a blender and pulse until pureed; steep for 10 minutes.'},
      {step:'Step 2: Pour cream, milk, vanilla extract, and salt into strawberry mixture; blend until smooth and slightly thickened, 10 to 15 seconds. Whisk red food color into cream mixture.'},
      {step:'Step 3: Pour strawberry mixture into the container of an ice cream maker and freeze according to the manufacturer instructions. Transfer ice cream to a sealable container, cover the ice cream with plastic wrap, seal the container, and freeze, 2 hours to overnight.'},
      {step:'Step 4: Process in an ice cream maker until thick. Immediately transfer to a sealable container, cover with plastic wrap, cover the bowl with a lid and freeze for 2 hours to overnight.'}
  ]
    },
  ];