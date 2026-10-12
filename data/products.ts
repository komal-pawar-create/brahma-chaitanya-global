import { Product } from '@/types/product';
import { Language } from '@/types/language';

export const products: Product[] = [
  {
    id: 'prod-green-chilli',
    slug: 'green-chilli',
    name: 'Green Chilli',
    category: 'Fresh Vegetables',
    tagline: 'Premium quality fresh green chillies for global export',
    description:
      'Supplied directly for international wholesale and commercial requirements with consistent grading and export standard sorting.',
    mainImage: '/images/products/green-chilli/main.svg',
    gallery: ['/images/products/green-chilli/main.svg'],
    varieties: [
      { name: 'G4 Green Chilli', marketType: 'Export / Wholesale' },
      { name: 'G5 Green Chilli', marketType: 'Fresh Market' },
      { name: 'Long Green Chilli', marketType: 'Retail / Food Service' },
      { name: 'Medium Green Chilli', marketType: 'Wholesale' },
      { name: 'Hybrid Green Chilli', marketType: 'Commercial Supply' },
      { name: 'Hot Green Chilli', marketType: 'Ethnic / Asian Markets' },
    ],
    sizes: [
      { range: '5–7 cm', label: 'Small' },
      { range: '7–9 cm', label: 'Medium' },
      { range: '9–12 cm', label: 'Large' },
      { range: '12 cm+', label: 'Extra Large / Long type', notes: 'Subject to availability' },
    ],
    applications: ['Export Wholesale', 'Food Processing', 'Retail & Distribution'],
    packaging: [
      'Corrugated Carton Boxes (3kg / 4kg / 5kg)',
      'Custom Export Packing Available Upon Request',
    ],
    isFeatured: true,
    translations: {
      hi: {
        name: 'हरी मिर्च (Green Chilli)',
        category: 'ताजी सब्जियां',
        tagline: 'वैश्विक निर्यात के लिए प्रीमियम गुणवत्ता वाली ताजी हरी मिर्च',
        description:
          'सख्त ग्रेडिंग और निर्यात मानकों के साथ अंतरराष्ट्रीय थोक और वाणिज्यिक आवश्यकताओं के लिए सीधे आपूर्ति की जाती है।',
      },
      mr: {
        name: 'हिरवी मिरची (Green Chilli)',
        category: 'ताजी भाजीपाला',
        tagline: 'जागतिक निर्यातीसाठी उत्तम दर्जाची ताजी हिरवी मिरची',
        description:
          'आंतरराष्ट्रीय घाऊक बाजारासाठी काटेकोर प्रतवारी आणि निर्यात मानकांनुसार थेट शेतातून पॅकिंग व पुरवठा.',
      },
      ar: {
        name: 'فلفل أخضر طازج (Green Chilli)',
        category: 'خضروات طازجة',
        tagline: 'فلفل أخضر حار عالي الجودة للشحن والتصدير الدولي',
        description: 'توريد مباشر لحاويات التصدير والأسواق المركزية مع فرز دقيق وتعبئة كرتونية مهواة.',
      },
      ms: {
        name: 'Cili Hijau Segar (Green Chilli)',
        category: 'Sayur-sayuran Segar',
        tagline: 'Cili hijau segar berkualiti premium untuk eksport global',
        description: 'Dibekalkan terus untuk keperluan borong antarabangsa dengan penggredan konsisten.',
      },
      vi: {
        name: 'Ớt Xanh Tươi Xuất Khẩu (Green Chilli)',
        category: 'Rau Củ Tươi',
        tagline: 'Ớt xanh tươi tiêu chuẩn xuất khẩu cho thị trường quốc tế',
        description: 'Phân loại kích cỡ và đóng thùng carton đạt tiêu chuẩn bảo quản container lạnh.',
      },
      ne: {
        name: 'ताजा हरियो खुर्सानी (Green Chilli)',
        category: 'ताजा तरकारी',
        tagline: 'विश्वव्यापी निर्यातका लागि प्रिमियम गुणस्तरको ताजा हरियो खुर्सानी',
        description: 'अन्तर्राष्ट्रिय थोक बजारका लागि कडा ग्रेडिङका साथ प्रत्यक्ष आपूर्ति।',
      },
      si: {
        name: 'නැවුම් අමු මිරිස් (Green Chilli)',
        category: 'නැවුම් එළවළු',
        tagline: 'ගෝලීය අපනයනය සඳහා උසස් තත්ත්වයේ නැවුම් අමු මිරිස්',
        description: 'ජාත්‍යන්තර තොග වෙළඳපොළ සඳහා ප්‍රමිතිගත ඇසුරුම් සහිතව සපයනු ලැබේ.',
      },
    },
  },
  {
    id: 'prod-onion',
    slug: 'onion',
    name: 'Onion',
    category: 'Fresh Vegetables',
    tagline: 'Export grade fresh onions sorted and graded for international markets',
    description:
      'Carefully harvested, sun-cured, and cleaned export quality red and pink onions. High pungency, firm skins, and extended transit life for overseas containers.',
    mainImage: '/images/products/onion/main.svg',
    gallery: ['/images/products/onion/main.svg'],
    varieties: [
      { name: 'Nashik Red Onion (Garwa)', marketType: 'Global Export & Supermarkets' },
      { name: 'Pink Onion', marketType: 'Middle East & Southeast Asia' },
      { name: 'White Onion', marketType: 'Processing & Culinary' },
      { name: 'Small / Sambhar Onion', marketType: 'Specialty & Retail' },
    ],
    sizes: [
      { range: '40–50 mm', label: 'Medium Small' },
      { range: '50–60 mm', label: 'Standard Export' },
      { range: '55–65 mm', label: 'Big / Gulf Quality' },
      { range: '65 mm+', label: 'Jumbo Size', notes: 'Subject to crop season' },
    ],
    applications: [
      'Wholesale Commodity Trading',
      'Food Processing & Dehydration',
      'Retail Chain & Supermarket Supply',
    ],
    packaging: [
      'Red Mesh / Leno Bags (10kg / 25kg / 50kg)',
      'Jute Bags upon destination request',
      'Ventilated 40ft Reefer Container Palletization',
    ],
    isFeatured: true,
    translations: {
      hi: {
        name: 'प्याज (Onion)',
        category: 'ताजी सब्जियां',
        tagline: 'अंतरराष्ट्रीय बाजारों के लिए छांटे और वर्गीकृत किए गए निर्यात ग्रेड प्याज',
        description: 'सावधानीपूर्वक निकाले गए, धूप में सुखाए गए और साफ किए गए उत्कृष्ट निर्यात गुणवत्ता वाले लाल और गुलाबी प्याज।',
      },
      mr: {
        name: 'कांदा (Onion)',
        category: 'ताजी भाजीपाला',
        tagline: 'जागतिक बाजारासाठी उत्कृष्ट प्रतवारी केलेले निर्यात दर्जाचे दर्जेदार कांदे',
        description: 'उत्तम प्रकारे वाळवलेले, घट्ट सालीचे व दीर्घकाळ टिकणारे नाशिकचे दर्जेदार लाल आणि गुलाबी कांदे.',
      },
      ar: {
        name: 'بصل أحمر طازج ممتاز (Red Onion)',
        category: 'خضروات طازجة',
        tagline: 'بصل هندي أحمر ممتاز مفرز ومدرج لأسواق الخليج والشرق الأوسط',
        description: 'أكياس شبكية حمراء مهواة ومجهزة لحاويات الشحن البحري مع قشور متماسكة وجودة عالية.',
      },
      ms: {
        name: 'Bawang Merah Eksport (Red Onion)',
        category: 'Sayur-sayuran Segar',
        tagline: 'Bawang merah segar gred eksport yang dipilah untuk pasaran antarabangsa',
        description: 'Bawang merah berkualiti tinggi dengan kulit tebal sesuai untuk pengangkutan laut.',
      },
      vi: {
        name: 'Hành Tây Đỏ Xuất Khẩu (Red Onion)',
        category: 'Rau Củ Tươi',
        tagline: 'Hành tây đỏ tươi phân loại đạt chuẩn xuất khẩu quốc tế',
        description: 'Được phơi khô tự nhiên, vỏ dày dặn và bảo quản bền bỉ trong hành trình đường biển.',
      },
      ne: {
        name: 'ताजा रातो प्याज (Red Onion)',
        category: 'ताजा तरकारी',
        tagline: 'अन्तर्राष्ट्रिय बजारका लागि वर्गीकृत निर्यात ग्रेड प्याज',
        description: 'राम्रोसँग सुकाइएको र सफा गरिएको उत्कृष्ट निर्यात गुणस्तरको रातो प्याज।',
      },
      si: {
        name: 'නැවුම් රතු ළුණු (Red Onion)',
        category: 'නැවුම් එළවළු',
        tagline: 'ජාත්‍යන්තර වෙළඳපොළ සඳහා අපනයන ශ්‍රේණියේ නැවුම් රතු ළුණු',
        description: 'නැව්ගත කිරීම සඳහා ශක්තිමත් දැල් මලුවල අසුරා සපයනු ලැබේ.',
      },
    },
  },
  {
    id: 'prod-potato',
    slug: 'potato',
    name: 'Potato',
    category: 'Fresh Vegetables',
    tagline: 'Farm-fresh potatoes graded for processing, wholesale, and export',
    description:
      'Evenly graded potatoes sourced from fertile agricultural belts. Clean skin, solid flesh, low sugar content varieties for table consumption and wafer/fries processing.',
    mainImage: '/images/products/potato/main.svg',
    gallery: ['/images/products/potato/main.svg'],
    varieties: [
      { name: 'Lady Rosetta (Processing)', marketType: 'Chips & Snack Manufacturing' },
      { name: 'Chipsona (1 & 2)', marketType: 'French Fries & Commercial Kitchens' },
      { name: 'Jyoti / Pukhraj (Table Variety)', marketType: 'Retail & Supermarket Fresh Supply' },
      { name: 'Kufri Bahar', marketType: 'Bulk Wholesale Markets' },
    ],
    sizes: [
      { range: '35–45 mm', label: 'Small / Medium' },
      { range: '45–55 mm', label: 'Standard Table Grade' },
      { range: '55–70 mm', label: 'Processing & Export Grade' },
      { range: '70 mm+', label: 'Extra Large Jumbo', notes: 'Selected batches' },
    ],
    applications: [
      'Commercial Food Processing (Chips / Snacks)',
      'Fresh Table Wholesale & Export',
      'Institutional & Hotel Industry Procurement',
    ],
    packaging: [
      'Leno Mesh Bags (25kg / 50kg)',
      'Traditional Jute Gunny Bags',
      'Corrugated Heavy-Duty Shipping Boxes for Air/Sea',
    ],
    isFeatured: true,
    translations: {
      hi: {
        name: 'आलू (Potato)',
        category: 'ताजी सब्जियां',
        tagline: 'प्रसंस्करण, थोक और निर्यात के लिए वर्गीकृत खेत-ताजा आलू',
        description: 'उर्वर कृषि क्षेत्रों से प्राप्त समान रूप से वर्गीकृत आलू। साफ त्वचा, ठोस गूदा और कम शर्करा वाली किस्में।',
      },
      mr: {
        name: 'बटाटा (Potato)',
        category: 'ताजी भाजीपाला',
        tagline: 'प्रक्रिया उद्योग, घाऊक बाजार आणि निर्यातीसाठी शेतातून काढलेले दर्जेदार बटाटे',
        description: 'स्वच्छ साल, घट्ट गर आणि कमी साखरेचे प्रमाण असलेले बटाटे. घरगुती व वेफर्स प्रक्रियेसाठी उत्तम.',
      },
      ar: {
        name: 'بطاطس طازجة للتصنيع والمائدة (Potato)',
        category: 'خضروات طازجة',
        tagline: 'بطاطس عالية الجودة للاستهلاك الطازج وتصنيع رقائق الشيبس',
        description: 'مفرزة بعناية ونظيفة خالية من العيوب، مجهزة للشحن بأكياس شبكية وجوت قوية.',
      },
      ms: {
        name: 'Kentang Segar & Pemprosesan (Potato)',
        category: 'Sayur-sayuran Segar',
        tagline: 'Kentang segar dari ladang digredkan untuk pemprosesan dan eksport',
        description: 'Kulit bersih, isi pejal dan kandungan gula rendah sesuai untuk kerepek dan meja makan.',
      },
      vi: {
        name: 'Khoai Tây Tươi & Chế Biến (Potato)',
        category: 'Rau Củ Tươi',
        tagline: 'Khoai tây tươi tuyển chọn cho chế biến khoai tây chiên và bán buôn',
        description: 'Vỏ sạch, ruột đặc và độ đường thấp, đáp ứng tiêu chuẩn chế biến thực phẩm.',
      },
      ne: {
        name: 'खेत-ताजा आलु (Potato)',
        category: 'ताजा तरकारी',
        tagline: 'प्रशोधन, थोक र निर्यातका लागि वर्गीकृत खेत-ताजा आलु',
        description: 'सफा बोक्रा र ठोस गुदी भएको उत्कृष्ट गुणस्तरको आलु।',
      },
      si: {
        name: 'නැවුම් අර්තාපල් / අල (Potato)',
        category: 'නැවුම් එළවළු',
        tagline: 'ආහාර සැකසීම සහ තොග වෙළඳාම සඳහා උසස් තත්ත්වයේ අර්තාපල්',
        description: 'පිරිසිදු පොත්ත සහ ඝන මදය සහිත නැවුම් අර්තාපල්.',
      },
    },
  },
  {
    id: 'prod-tomato',
    slug: 'tomato',
    name: 'Tomato',
    category: 'Fresh Vegetables',
    tagline: 'Carefully sorted and packed fresh tomatoes for international supply',
    description:
      'Export-grade firm red and semi-ripe tomatoes. Harvested at turning stage for extended international transit, featuring uniform size, bright color, and high pulp density.',
    mainImage: '/images/products/tomato/main.svg',
    gallery: ['/images/products/tomato/main.svg'],
    varieties: [
      { name: 'Hybrid Round Tomato', marketType: 'Fresh Retail & Wholesalers' },
      { name: 'Roma / Plum Type (Elongated)', marketType: 'Culinary, Puree & Sauces' },
      { name: 'Semi-Determinate Export Quality', marketType: 'Long Distance Air/Sea Cargo' },
    ],
    sizes: [
      { range: '45–55 mm', label: 'Small' },
      { range: '55–65 mm', label: 'Standard Export' },
      { range: '65–75 mm', label: 'Large' },
    ],
    applications: [
      'Fresh Supermarket Retail Chains',
      'Industrial Tomato Paste & Puree',
      'Food Service & Hospitality Supply',
    ],
    packaging: [
      'Heavy-Duty Ventilated Export Cartons (6kg / 7kg / 10kg)',
      'Stackable Food-Grade Plastic Crates',
    ],
    isFeatured: true,
    translations: {
      hi: {
        name: 'टमाटर (Tomato)',
        category: 'ताजी सब्जियां',
        tagline: 'अंतरराष्ट्रीय आपूर्ति के लिए सावधानीपूर्वक छांटे और पैक किए गए ताजा टमाटर',
        description: 'निर्यात ग्रेड के ठोस लाल और अर्ध-पके टमाटर। एकसमान आकार, चमकदार रंग और उच्च गूदा घनत्व।',
      },
      mr: {
        name: 'टोमॅटो (Tomato)',
        category: 'ताजी भाजीपाला',
        tagline: 'आंतरराष्ट्रीय पुरवठ्यासाठी काळजीपूर्वक निवडलेले आणि पॅक केलेले ताजे टोमॅटो',
        description: 'कडक, लाल आणि लांब प्रवासात टिकणारे निर्यात दर्जाचे टोमॅटो.',
      },
      ar: {
        name: 'طماطم طازجة ممتازة (Fresh Tomato)',
        category: 'خضروات طازجة',
        tagline: 'طماطم حمراء متماسكة مقطوفة بمرحلة النضج المناسبة للشحن الدولي',
        description: 'تعبئة في صناديق كرتونية وبلاستيكية قوية تحفظ الطماطم من التلف طوال فترة النقل.',
      },
      ms: {
        name: 'Tomato Segar Eksport (Fresh Tomato)',
        category: 'Sayur-sayuran Segar',
        tagline: 'Tomato segar dipilih dan dibungkus rapi untuk bekalan antarabangsa',
        description: 'Tomato merah pejal dituai pada peringkat sesuai untuk transit eksport jauh.',
      },
      vi: {
        name: 'Cà Chua Tươi Xuất Khẩu (Fresh Tomato)',
        category: 'Rau Củ Tươi',
        tagline: 'Cà chua tươi đỏ mọng, thịt dày đóng thùng xuất khẩu chuyên dụng',
        description: 'Thu hoạch đúng độ chín để duy trì độ tươi giòn qua các chuyến tàu biển.',
      },
      ne: {
        name: 'ताजा गोलभेंडा / टमाटर (Tomato)',
        category: 'ताजा तरकारी',
        tagline: 'अन्तर्राष्ट्रिय आपूर्तिका लागि सावधानीपूर्वक प्याक गरिएका ताजा टमाटर',
        description: 'लामो यात्रा थेग्न सक्ने दरिलो र चम्किलो रातो ताजा टमाटर।',
      },
      si: {
        name: 'නැවුම් තක්කාලි (Tomato)',
        category: 'නැවුම් එළවළු',
        tagline: 'ජාත්‍යන්තර සැපයුම සඳහා ප්‍රවේශමෙන් තෝරාගත් නැවුම් තක්කාලි',
        description: 'දිගුකාලීන ප්‍රවාහනය සඳහා ශක්තිමත් ඇසුරුම්වල සපයනු ලැබේ.',
      },
    },
  },
  {
    id: 'prod-moringa-powder',
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'Organic Powders',
    tagline: 'Finely processed nutrient-rich moringa powder for global buyers',
    description:
      '100% natural, shadow-dried drumstick leaf powder (Moringa Oleifera). Retains vibrant green hue, rich in antioxidants, plant protein, iron, and multivitamins for health formulations.',
    mainImage: '/images/products/moringa/main.svg',
    gallery: ['/images/products/moringa/main.svg'],
    varieties: [
      { name: 'Organic Drumstick Leaf Powder (Fine 80–100 Mesh)', marketType: 'Nutraceuticals & Dietary Supplements' },
      { name: 'Standard Grade Moringa Leaf Powder', marketType: 'Food Ingredients & Fortification' },
      { name: 'Herbal Tea Cut Flakes', marketType: 'Beverage & Infusion Brands' },
    ],
    sizes: [
      { range: '100g / 250g / 500g', label: 'Retail Pouches' },
      { range: '1kg / 5kg', label: 'Commercial Food Pack' },
      { range: '20kg / 25kg', label: 'Bulk Export Fiber Drum' },
    ],
    applications: [
      'Nutraceutical & Dietary Capsule Formulations',
      'Smoothies, Energy Drinks & Health Beverages',
      'Cosmetic & Skincare Formulations',
      'Functional Food & Snack Fortification',
    ],
    packaging: [
      'Multi-Layer Moisture Barrier Foil Pouches',
      'Airtight Vacuum Bags in Corrugated Master Cartons',
      'Food-Grade Poly-Lined 25kg Fiber Drums',
    ],
    isFeatured: true,
    translations: {
      hi: {
        name: 'सहजन पाउडर (Moringa Powder)',
        category: 'जैविक पाउडर',
        tagline: 'वैश्विक खरीदारों के लिए सूक्ष्म प्रसंस्कृत पोषक तत्वों से भरपूर मोरिंगा पाउडर',
        description: '100% प्राकृतिक, छाया में सुखाई गई सहजन की पत्तियों का बारीक पाउडर।',
      },
      mr: {
        name: 'शेवगा पावडर (Moringa Powder)',
        category: 'सेंद्रिय पावडर',
        tagline: 'जागतिक खरेदीदारांसाठी पोषक तत्वांनी समृद्ध दर्जेदार शेवगा पानांची पावडर',
        description: '100% नैसर्गिक, सावलीत वाळवलेल्या शेवग्याच्या पानांची बारीक पावडर.',
      },
      ar: {
        name: 'مسحوق أوراق المورينجا العضوي (Moringa Powder)',
        category: 'مساحيق عضوية وطبيعية',
        tagline: 'مسحوق مورينجا أخضر نقي غني بمضادات الأكسدة للصناعات الغذائية والدوائية',
        description: 'مجفف في الظل ومطحون بدقة فائقة مع تعبئة عازلة للرطوبة في براميل تصدير غذائية.',
      },
      ms: {
        name: 'Serbuk Daun Moringa Organik (Moringa Powder)',
        category: 'Serbuk Organik',
        tagline: 'Serbuk moringa kaya nutrien diproses halus untuk pembeli global',
        description: '100% asli, dikeringkan di bawah teduhan dan kaya dengan antioksidan.',
      },
      vi: {
        name: 'Bột Lá Chùm Ngây Hữu Cơ (Moringa Powder)',
        category: 'Bột Hữu Cơ',
        tagline: 'Bột chùm ngây giàu dinh dưỡng phục vụ ngành dược phẩm và thực phẩm bổ sung',
        description: 'Lá chùm ngây sấy lạnh nghiền mịn 80-100 mesh, đóng gói túi màng nhôm bảo vệ dưỡng chất.',
      },
      ne: {
        name: 'जैविक मोरिंगा पाउडर (Moringa Powder)',
        category: 'जैविक पाउडर',
        tagline: 'पोषक तत्वले भरिपूर्ण मसिनो मोरिंगा पाउडर',
        description: '१००% प्राकृतिक र छायाँमा सुकाइएको सहजनको पातको पाउडर।',
      },
      si: {
        name: 'කාබනික මුරුංගා කුඩු (Moringa Powder)',
        category: 'කාබනික කුඩු',
        tagline: 'පෝෂ්‍ය පදාර්ථ බහුල උසස් තත්ත්වයේ මුරුංගා කොළ කුඩු',
        description: 'ඖෂධ සහ ආහාර නිෂ්පාදන සඳහා සුදුසු ස්වභාවික මුරුංගා කුඩු.',
      },
    },
  },
  {
    id: 'prod-mushroom-powder',
    slug: 'mushroom-powder',
    name: 'Mushroom Powder',
    category: 'Dehydrated & Powders',
    tagline: 'Premium dried and ground mushroom powder for industrial and culinary use',
    description:
      'Carefully dehydrated oyster and button mushrooms ground to exact mesh specifications. Delivers rich umami flavor, vitamin D, and functional polysaccharides for food processors.',
    mainImage: '/images/products/mushroom/main.svg',
    gallery: ['/images/products/mushroom/main.svg'],
    varieties: [
      { name: 'Oyster Mushroom Powder (Pleurotus)', marketType: 'Health Foods & Supplements' },
      { name: 'Button Mushroom Powder (Agaricus)', marketType: 'Soups, Seasonings & Sauces' },
      { name: 'Shiitake Mushroom Powder', marketType: 'Gourmet Culinary & Umami Blends' },
    ],
    sizes: [
      { range: '250g / 500g', label: 'Sample / Retail Pack' },
      { range: '1kg / 5kg', label: 'Food Service Pack' },
      { range: '20kg / 25kg', label: 'Bulk Export Drum' },
    ],
    applications: [
      'Instant Soups, Broths & Seasoning Cubes',
      'Plant-Based Meat & Savory Seasonings',
      'Dietary Health Supplements & Powders',
      'Bakery & Specialty Culinary Mixes',
    ],
    packaging: [
      'Airtight Vacuum Sealed Barrier Pouches',
      'Inner Poly-Lined Corrugated Master Boxes',
      'Heavy-Duty Sealed Fiber Drums for Sea Freight',
    ],
    isFeatured: true,
    translations: {
      hi: {
        name: 'मशरूम पाउडर (Mushroom Powder)',
        category: 'निर्जलित एवं पाउडर उत्पाद',
        tagline: 'औद्योगिक और पाक उपयोग के लिए प्रीमियम सुखाया और पीसा गया मशरूम पाउडर',
        description: 'सटीक मेश विनिर्देशों के अनुसार पीसा गया ऑयस्टर और बटन मशरूम पाउडर।',
      },
      mr: {
        name: 'अळिंबी पावडर (Mushroom Powder)',
        category: 'निर्जलीकरण व पावडर उत्पादने',
        tagline: 'अन्न प्रक्रिया आणि स्वयंपाकासाठी वाळवलेली आणि दळलेली दर्जेदार मशरूम पावडर',
        description: 'स्वच्छ वातावरणात वाळवून बारीक दळलेली ऑयस्टर व बटन मशरूम पावडर.',
      },
      ar: {
        name: 'مسحوق فطر المشروم المجفف (Mushroom Powder)',
        category: 'منتجات ومساحيق مجففة',
        tagline: 'مسحوق فطر عالي النقاء بنكهة أومامي غنية لصناعة الشوربات والتوابل',
        description: 'فطر مجفف ومطحون بدقة معبأ في براميل محكمة الإغلاق ومفرغة من الهواء للشحن الدولي.',
      },
      ms: {
        name: 'Serbuk Cendawan Kering (Mushroom Powder)',
        category: 'Produk Dehidrasi & Serbuk',
        tagline: 'Serbuk cendawan premium untuk kegunaan industri makanan dan kulinari',
        description: 'Cendawan tiram dan butang dikeringkan dan dikisar halus memberikan rasa umami semula jadi.',
      },
      vi: {
        name: 'Bột Nấm Khô Cao Cấp (Mushroom Powder)',
        category: 'Nông Sản Sấy & Bột',
        tagline: 'Bột nấm sấy mịn cao cấp tạo vị umami tự nhiên cho súp và gia vị thực phẩm',
        description: 'Nấm sò và nấm mỡ khử nước sấy lạnh, đóng gói thùng phuy kín khí đạt chuẩn vận tải biển.',
      },
      ne: {
        name: 'सुकेको च्याउको पाउडर (Mushroom Powder)',
        category: 'निर्जलित पाउडर',
        tagline: 'औद्योगिक र भान्साको उपयोगका लागि प्रिमियम च्याउको पाउडर',
        description: 'प्राकृतिक स्वाद र पोषणयुक्त मसिनो च्याउको पाउडर।',
      },
      si: {
        name: 'වියළි බිම්මල් කුඩු (Mushroom Powder)',
        category: 'විජලනය කළ කුඩු',
        tagline: 'ආහාර කර්මාන්තය සහ සුප් නිෂ්පාදනය සඳහා උසස් තත්ත්වයේ බිම්මල් කුඩු',
        description: 'ස්වාභාවික උමාමි රසය සහිත පිරිසිදු විජලනය කළ බිම්මල් කුඩු.',
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getLocalizedProduct(product: Product, lang: Language) {
  if (lang === 'en' || !product.translations || !product.translations[lang]) {
    return product;
  }
  const loc = product.translations[lang]!;
  return {
    ...product,
    name: loc.name || product.name,
    category: loc.category || product.category,
    tagline: loc.tagline || product.tagline,
    description: loc.description || product.description,
    varieties: loc.varieties && loc.varieties.length > 0 ? loc.varieties : product.varieties,
    sizes: loc.sizes && loc.sizes.length > 0 ? loc.sizes : product.sizes,
    applications: loc.applications && loc.applications.length > 0 ? loc.applications : product.applications,
    packaging: loc.packaging && loc.packaging.length > 0 ? loc.packaging : product.packaging,
  };
}
