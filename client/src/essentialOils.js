export function EssentialOils() {
    const oils = [
   { 
        name: "Basil",
        desc: "This crisp smelling essential oil awakens the mind to clarity of thought, steadies the nerves, while easing sinus congestion, cooling down fevers and treating menstrual problems.",
        url: './img/oil-img/basil.jpg',
        mood: "awaken",
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: "Bergamont",
        desc: "This fresh smelling essential oil is great for creating a more relaxed and happy feeling, relieving urinary tract infections, boosting the liver, spleen and stomach, while fighting oily skin, acne, psoriasis, eczema, as well as cold sores.",
        url: './img/oil-img/bergamot.jpg',
        mood: "calm",
        level: "top",
        pregnant: false,
        allergies: null,
        kid: false
    },
    { 
        name: "Cajuput",
        desc: "This powerful oil is used with great success for digestive and skin problems and helps to balance the mind by clearing thoughts, stimulating the mind and dispelling the feeling of sluggishness.",
        url: './img/oil-img/cajuput.jpg',
        mood: "awaken",
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: "Cinnamon",
        desc: "This spicy essential oil fights exhaustion and a feeling of depression and weakness. It has powerful anti-rheumatic properties, is useful in the digestive system, while fighting colds and flu as well.",
        url: './img/oil-img/cinnamon.jpg',
        mood: "sensual",
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
     { 
        name: 'Clary Sage',
        desc: 'This sweet, somewhat herbaceous oil has great benefits - not only for easing depression  and nervous burn-out, but for a host of female complaints and for relieving congested complexions.',
        url: './img/oil-img/clary-sage.jpg',
        mood: 'calm',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Coriander',
        desc: 'The warm, spicy essential oil from this ancient herb has a place in aromatherapy, as it helps to ease the mind and fight fatigue, while it warms and calms the digestive system, relieves rheumatism and arthritic pain, muscular spasms and detoxifies the body.',
        url: './img/oil-img/coriander.jpg',
        mood: 'calm',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Eucalyptus',
        desc: 'This clear, sharp essential oil helps to clear the mind and focus concentration, while reducing swelling in the mucus membranes. It is very valuable in fighting respiratory problems, fighting inflammation and sore muscles, rheumatism, headaches and nervous exhaustion, while boosting wound and ulcer healing and soothing skin eruptions.',
        url: './img/oil-img/eucalyptus.jpg',
        mood: 'calm',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Grapefruit',
        desc: 'This sharp essential oil is useful for more than just fighting cellulite and boosting your lymphatic system - it positively affects your mood and revives the mind while stimulating the digestive system and clearing up congested oily skin and acne.',
        url: './img/oil-img/grapefruit.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Lemon',
        desc: 'This clean smelling citrus essential oil is not only good for helping you make decisions and to improve your concentration, but cuts down on acidity in the body - thereby assisting the digestion, as well as with rheumatism, arthritis and gout, while also sorting out cellulite, abscesses, boils, carbuncles and acne.',
        url: './img/oil-img/lemon.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Lemongrass',
        desc: 'This sweet, fresh smelling oil can be used with success for fighting jet lag, cellulite, revitalizing a tired body and mind, as well as keeping the family pet free of fleas and ticks.',
        url: './img/oil-img/lemongrass.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Lime',
        desc: 'This sharp, clear smelling citrus oil can help lift depression and lighten your mood when feeling blue. It is used to fight cellulite and to tone the skin in general.',
        url: './img/oil-img/lime.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    // { 
    //     name: 'Mandarin',
    //     desc: null,
    //     mood: null,
    //     level: "top",
    //     pregnant: null,
    //     allergies: null,
    //     kid: null
    // },
    { 
        name: 'Neroli',
        desc: 'This sweet, floral essential oil has a greatly relaxing effect on the body and mind, relieving muscle spasms, calming heart palpitations and has a wonderful rejuvenating and regenerative effect on the skin, helping to prevent ugly scarring and fighting stretch marks.',
        url: './img/oil-img/neroli.jpg',
        mood: 'sensual',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Orange',
        desc: 'This unpretentious, citrusy essential oil is used in aromatherapy to create the feeling of happiness and warmth, while calming nervous digestive problems. It deals very well with colds and flu, eliminates toxins and stimulates the lymphatic system, while supporting collagen formation in the skin.',
        url: './img/oil-img/orange.jpg',
        mood: 'calm',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Peppermint',
        desc: 'This cooling and refreshing essential oil is used in aromatherapy to stimulate the mind, increase mental agility and to increase focus, while cooling the skin, reducing redness and calming irritation and itchiness. It furthermore helps to ease spastic colon, migraine, headaches, sinus and chest congestion and boosts the digestive system.',
        url: './img/oil-img/peppermint.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Petitgrain',
        desc: 'This crisp and clear essential oil is most useful to boost the conscious intellectual side of your mind, while calming anger and panic. Its relaxing properties help to calm rapid heartbeat and insomnia while clearing greasy skin and fighting skin blemishes.',
        url: './img/oil-img/petitgrain.jpg',
        mood: 'calm',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Sage',
        desc: 'This sharp, herbal essential oil is great for relieving grief and quickening the senses, while stimulating the lymphatic system and helping with female problems, such as sterility and menopausal problems and on the skin it not only helps healing but also to reduce pore size.',
        url: './img/oil-img/sage.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Spearmint',
        desc: 'This crisp, fresh essential oil has great benefits on the digestive system and relieves flatulence, constipation, vomiting and nausea, as well as the respiratory tract to relieve cough, bronchitis, asthma, catarrh and sinus. On the skin it calms itching and has a stimulant action on the mind.',
        url: './img/oil-img/spearmint.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Tangerine',
        desc: 'This tangy and zesty essential oil has some great properties to help relieve stress and digestive problems, but is mostly used to increase circulation to the skin, reducing fluid retention and to help prevent stretch marks.',
        url: './img/oil-img/tangerine.jpg',
        mood: 'calm',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Tea Tree',
        desc: 'No house should be without this medicinal-smelling essential oil, as it is one of the most powerful immune system stimulants and sorts out most viral, bacterial and fungal infections in a snap, while it is great to clean wounds and also relieves muscle aches and pains.'        ,
        url: './img/oil-img/tea-tree.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Thyme',
        desc: 'This sweet yet strongly herbal essential oil can cause skin irritation, yet has great value to help with concentration and to focus, as well as being an excellent bronchial and lung stimulant, making it valuable in bronchitis, coughs, colds, asthma and the like, while the warming qualities are great for rheumatism, sciatica, arthritis and gout.',
        url: './img/oil-img/thyme.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Lemon Verbena',
        desc: 'This sweet, fresh essential oil is great to banish blues and depression while boosting liver function and helping the digestive and respiratory system and at the same time softening the skin and reducing puffiness.',
        url: './img/oil-img/lemon-verbena.jpg',
        mood: 'awaken',
        level: "top",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Bay',
        desc: 'This warming essential oil is often used in aromatherapy since it is a good antiseptic for the respiratory system, perks up the digestive system, settles stomach pain and expels wind, while promoting confidence, courage and insight. Topically, it is most often used to combat hair loss and to improve the health of the scalp in general.',
        url: './img/oil-img/bay.jpg',
        mood: 'calm',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Black Pepper',
        desc: 'This warm and spicy essential oil helps to increase warmth of the body and mind, relieving sore muscles and joints, boost the immune and digestive system, stimulate the kidneys and disperse bruising by increasing circulation to the skin.',
        url: './img/oil-img/black-pepper.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Cardamom',
        desc: 'This sweet, spicy essential oil stimulates the mind into clarity, yet is subtly sexual in nature, awaking and enlivening the sensual side of a person. Its distinct scent can promote a positive mood and a sense of openness and mental clarity.',
        url: './img/oil-img/cardamom.jpg',
        mood: 'sensual',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Cypress',
        desc: 'This clear and fresh smelling essential oil is a great boon to use during times of major upheavals and changes in your life, as it restores calm, sooths anger and making your life flow better. It has a positive effect on excess fluids in general, thereby improving circulation, sorting out coughs and bronchitis.',
        url: './img/oil-img/cypress.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Fennel',
        desc: 'This herby essential oil is used in aromatherapy to boost your courage, resolve and strength in the face of adversity, while helping a huge array of digestive problems, fighting obesity, clearing an oily skin and fighting wrinkles.',
        url: './img/oil-img/fennel.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Geranium',
        desc: 'This fresh essential oil has a firm place in aromatherapy, as it helps to balance the mind and emotions, while stimulating the adrenal cortex and balancing the hormonal system and stimulating the lymphatic system. On the other hand, it balances the production of sebum in the skin, while keeping it supple and helping with the healing of wounds.',
        url: './img/oil-img/geranium.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Hyssop',
        desc: 'This sweet, warm essential oil is effective in helping to treat female disorders and to relieve monthly water retention, while being excellent to help the respiratory system get rid of mucus and bronchial spasms. It can be used to treat bronchitis, asthma, influenza and colds, while helping wounds heal and dispersing bruises on the skin.',
        url: './img/oil-img/hyssop.jpg',
        mood: 'calm',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Juniper',
        desc: 'This crisp essential oil is used in aromatherapy to help stimulate and strengthen the nerves and bolster the spirits in challenging situations, while helping to relieve urine retention. It is used for treating rheumatism, arthritis and gout, as well as cellulite, acne, dermatitis, blocked pores, psoriasis and weeping eczemas.',
        url: './img/oil-img/juniper.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Lavender',
        desc: 'This calming, relaxing essential oil, which combats stress and crisis, while the antiseptic properties helps with cold, flu and other ailments. It is excellent for asthma and migraines. Apart from that it supports female health and on the skin it has a healing effect, while preventing scarring and balancing the skin.',
        url: './img/oil-img/lavender.jpg',
        mood: 'calm',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Marjoram',
        desc: 'This warm, slightly-spicy essential oil has value when used for asthma and other respiratory complaints and has a calming action on emotions. It helps hyperactive people calm down while boosting circulation.',
        url: './img/oil-img/marjoram.jpg',
        mood: 'calm',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Melissa',
        desc: 'This sweet, citrus-like essential oil has a couple of uses in aromatherapy and helps to bring calmness to the mind, while having a great sedating effect, calming the heartbeat and palpitations.',
        url: './img/oil-img/melissa.jpg',
        mood: 'calm',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Nutmeg',
        desc: 'This warming, spicy essential oil is used in aromatherapy to fight inflammations and muscle as well as rheumatic pain, while assisting the digestive system and supporting the reproductive system, and at the same time stimulating and invigorating the mind.',
        url: './img/oil-img/nutmeg.jpg',
        mood: 'sensual',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Palma Rosa',
        desc: 'This sweet, floral essential oil is fast becoming a firm favorite in essential oil therapy and aromatherapy, as it has excellent skin care properties and is also used to relieve stiff and sore muscles, while calming the mind and uplifting and invigorating the spirits and clearing muddled thinking.',
        url: './img/oil-img/palmaRosa.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Pine',
        desc: 'Although this forest-smelling essential oil can cause allergic reactions, it is very useful to relieve mental, physical and sexual fatigue, while having a cleansing and clearing effect on a room.',
        url: './img/oil-img/pine.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
    { 
        name: 'Rosemary',
        desc: 'This crisp and clean smelling essential oil is great for stimulating the brain, improving memory and mental clarity, while helping with a variety of congested respiratory tract problems, stiff muscles, coldness as well as boosting the liver and gall bladder. It is also used for improving hair and scalp health.',
        url: './img/oil-img/rosemary.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Spikenard',
        desc: 'This warm, misty essential oil can be effective for tension, stress, migraine, nervous indigestion and insomnia. It can help with rejuvenating mature skin, allergies, skin inflammations and rashes.',
        url: './img/oil-img/spikenard.jpg',
        mood: 'calm',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Yarrow',
        desc: 'This sweet, spicy essential oil can be beneficial to the nervous, genito-urinary and digestive systems, and can assist with skin care.',
        url: './img/oil-img/yarrow.jpg',
        mood: 'awaken',
        level: "middle",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Cassia',
        desc: 'This warm, exotic essential oil is more than just a fragrant oil, as it can be used in fever, chills and for supporting the digestive system.',
        url: './img/oil-img/cassia.jpg',
        mood: 'calm',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Cedarwood',
        desc: 'This clean smelling, balsamic essential oil does not only help calm and balance energy, but also promotes spirituality, while helping to clear the respiratory system of excess phlegm and catarrh. It sorts out urinary tract infections, as well as bladder and kidney disorders, while improving oily skin and clearing up dandruff.',
        url: './img/oil-img/cedarwood.jpg',
        mood: 'calm',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Clove',
        desc: 'Although this warm, spicy essential oil is a very potent oil that should be used with great care in aromatherapy, it does have wonderful properties - from stimulating the mind and lifting depression, to aiding digestion, relieving pain in arthritis and rheumatism, easing respiratory problems and assisting leg ulcers.',
        url: './img/oil-img/clove.jpg',
        mood: 'awaken',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Frankincense',
        desc: 'This woody, spicy essential oil has a wonderfully calming effect on the mind and helps to create inner peace, while helping to sooth the respiratory and urinary tract and relieve pain associated with rheumatism and muscular aches, while having a rejuvenating, balancing and healing action on the skin.',
        url: './img/oil-img/frankincense.jpg',
        mood: 'calm',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Ginger',
        desc: 'This spicy, warming essential oil is often used for digestive problems, as well as nausea - be that morning sickness or travel upset. It is also of value when treating colds and flu and especially for catarrhal lung conditions and rheumatic pain. It can also be used on the skin to help clear bruises.',
        url: './img/oil-img/ginger.jpg',
        mood: 'awaken',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Jasmine',
        desc: 'This sweet, exotic, and richly floral essential oil does more than just smell exquisite - it deeply relaxes, lifts depression and boosts confidence, eases childbirth, helps with sexual problems, sooths coughing and tones and improves skin elasticity, while helping to reduce stretch marks and scars.',
        url: './img/oil-img/jasmine.jpg',
        mood: 'sensual',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Myrrh',
        desc: 'If you talk about a magical essential oil in aromatherapy, then this warm, slightly-musty oil must surely be it, as it not only works on increasing your spiritual self, but produce wonderful results when used to treat female complaints, skin ailments, as well as detoxifying the body and expelling mucus and phlegm from the body.',
        url: './img/oil-img/myrrh.jpg',
        mood: 'awaken',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Patchouli',
        desc: 'This rich, musky-sweet essential oil is great for fighting depression and anxiety. It has great diuretic properties and also helps break down cellulite, while stimulating the regeneration of skin cells, speeding up healing and preventing ugly scars forming when wounds heal.',
        url: './img/oil-img/patchouli.jpg',
        mood: 'calm',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Rose',
        desc: 'This deep, fresh aroma essential oil is useful for lifting depression, fighting frigidity and impotence and for skin rejuvenation. It has excellent cell stimulant and tissue regeneration properties, making it a valuable ingredient in mature skin care.',
        url: './img/oil-img/rose.jpg',
        mood: 'awaken',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Rosewood',
        desc: 'This slightly spicy, floral essential oil is useful for lifting depression, fighting frigidity and impotence and for skin rejuvenation. It has excellent cell stimulant and tissue regeneration properties, making it a valuable ingredient in mature skin care.',
        url: './img/oil-img/rosewood.jpg',
        mood: 'awaken',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
  { 
        name: 'Sandalwood',
        desc: 'This woody, exotic essential oil has wonderful qualities for relieving both chest and urinary tract infections, while assisting the skin in promoting hydration and moisture and for the mind it creates a calming and harmonizing effect, while reducing tension and confusion.',
        url: './img/oil-img/sandalwood.jpg',
        mood: 'sensual',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Vanilla',
        desc: 'This aromatic essential oil has strong effects on the mind and body and is used to fight inflammation, works as an antidepressant, contains high levels of antioxidants, promotes skin and hair health, relieves muscle pain and cramps, and balances hormones naturally.',
        url: './img/oil-img/vanilla.jpg',
        mood: 'sensual',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Vetiver',
        desc: 'This earthy essential oil has a wonderful effect on the mind and body and is useful to dispel irritability, anger and hysteria, while having a balancing effect on the hormonal system and is a great boon for the skin. It is used to reduce wrinkles and stretch marks while nourishing and moisturizing the skin and helping wounds heal.',
        url: './img/oil-img/vetiver.jpg',
        mood: 'calm',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    },
   { 
        name: 'Ylang Ylang',
        desc: 'This extremely fragrant essential oil has a calming effect on the mind and body and is used in cases of frigidity and impotence. It has a wonderfully balancing and stimulating effect on the skin, to correct sebum production and is also used to stimulate hair growth.',
        url: './img/oil-img/ylangYlang.jpg',
        mood: 'sensual',
        level: "base",
        pregnant: null,
        allergies: null,
        kid: null
    }
    ]
    return oils;
  }

  

