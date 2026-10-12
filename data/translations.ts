import { Language } from '@/types/language';

export interface TranslationContent {
  nav: {
    brandName: string;
    brandTag: string;
    importExport: string;
    subTag: string;
    home: string;
    about: string;
    products: string;
    packaging: string;
    quality: string;
    contact: string;
    enquireNow: string;
    toggleMenu: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    exploreProducts: string;
    enquireForExport: string;
    trustGrading: string;
    trustGlobal: string;
    trustBulk: string;
    portfolioSubtitle: string;
    portfolioTitle: string;
    portfolioDesc: string;
  };
  about: {
    subtitle: string;
    title: string;
    description: string;
    introTitle: string;
    p1: string;
    p2: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    cardBadge: string;
    cardTitle: string;
    cardDesc: string;
    tradeScopeLabel: string;
    tradeScopeVal: string;
    sectorLabel: string;
    sectorVal: string;
  };
  products: {
    subtitle: string;
    title: string;
    description: string;
    customCtaTitle: string;
    customCtaDesc: string;
    exportGrade: string;
    availableForExport: string;
    viewSpecs: string;
    exportVarietyLabel: string;
    exportVarietiesLabel: string;
    exportSpecLabel: string;
    backToProducts: string;
    bulkInquiryTitle: string;
    bulkInquiryDesc: string;
    varietiesHeading: string;
    sizesHeading: string;
    applicationsHeading: string;
    packagingHeading: string;
    inquireAboutTitle: string;
    inquireAboutDesc: string;
  };
  packaging: {
    subtitle: string;
    title: string;
    description: string;
    s1Title: string;
    s1Category: string;
    s1Desc: string;
    s2Title: string;
    s2Category: string;
    s2Desc: string;
    s3Title: string;
    s3Category: string;
    s3Desc: string;
    s4Title: string;
    s4Category: string;
    s4Desc: string;
    protocolTitle: string;
    protocolDesc: string;
    badgeVentilation: string;
    badgeTemperature: string;
    badgePalletized: string;
    ctaTitle: string;
    ctaDesc: string;
  };
  quality: {
    subtitle: string;
    title: string;
    description: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    p4Title: string;
    p4Desc: string;
    workflowTag: string;
    workflowTitle: string;
    workflowDesc: string;
    stepSource: string;
    stepCheck: string;
    stepDispatch: string;
    ctaTitle: string;
    ctaDesc: string;
  };
  contact: {
    subtitle: string;
    title: string;
    description: string;
    corporateOffice: string;
    brandTag: string;
    shortDesc: string;
    regAddress: string;
    phoneWhatsApp: string;
    officialEmail: string;
    globalTradeTitle: string;
    globalTradeDesc: string;
    formTitle: string;
    inquiryRecorded: string;
    inquiryRecordedDesc: string;
    sendAnother: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    productLabel: string;
    destLabel: string;
    destPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    demoNote: string;
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    enquireNow: string;
    viewProducts: string;
  };
  footer: {
    description: string;
    globalExportBadge: string;
    quickLinks: string;
    productsHeading: string;
    contactHeading: string;
    addressLabel: string;
    telephoneLabel: string;
    emailLabel: string;
    copyright: string;
    allRightsReserved: string;
    showcaseLabel: string;
  };
  floating: {
    enquireNow: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      brandName: 'BRAHMA CHAITANYA',
      brandTag: 'GLOBAL',
      importExport: 'Import | Export',
      subTag: 'Agricultural Products Supplier & Exporter',
      home: 'Home',
      about: 'About',
      products: 'Products',
      packaging: 'Packaging',
      quality: 'Quality',
      contact: 'Contact',
      enquireNow: 'Enquire Now',
      toggleMenu: 'Toggle navigation menu',
    },
    home: {
      heroTitle: 'Global Exporter of Quality Agricultural Produce',
      heroSubtitle: 'BRAHMA CHAITANYA GLOBAL • IMPORT | EXPORT',
      heroDescription:
        'Supplying premium-grade agricultural products including fresh green chillies, onions, potatoes, tomatoes, and organic powders to global wholesale markets and international buyers.',
      exploreProducts: 'Explore Products',
      enquireForExport: 'Enquire For Export',
      trustGrading: 'Export Standard Grading',
      trustGlobal: 'Global Supply Chain',
      trustBulk: 'Bulk & Commercial Orders',
      portfolioSubtitle: 'Our Portfolio',
      portfolioTitle: 'Agricultural Export Products',
      portfolioDesc:
        'Explore our range of fresh produce and organic powders supplied for international markets with stringent quality sorting.',
    },
    about: {
      subtitle: 'About Us',
      title: 'Brahma Chaitanya Global',
      description:
        'Agricultural products supplier and exporter dedicated to bridging global demand with reliable agricultural supply chains.',
      introTitle: 'International Import & Export Solutions',
      p1: 'Brahma Chaitanya Global operates in the supply and export of selected agricultural produce, including fresh green chillies, onions, potatoes, tomatoes, and specialized agro powders like moringa and mushroom powder.',
      p2: 'Our operations emphasize consistent grading, export packaging, and transparent trade practices to meet the exact specifications of overseas importers and wholesale distributors.',
      bullet1: 'Reliable procurement and export-oriented quality sorting',
      bullet2: 'Customized export packing solutions based on destination norms',
      bullet3: 'Dedicated customer communication for bulk orders & shipments',
      cardBadge: 'Corporate Overview',
      cardTitle: 'Committed to Quality & Long-Term Partnerships',
      cardDesc:
        'As an agricultural exporter, our goal is to ensure that produce reaches global markets in prime condition. Every batch undergoes systematic inspection and temperature-appropriate logistics handling.',
      tradeScopeLabel: 'Trade Scope',
      tradeScopeVal: 'Import & Export',
      sectorLabel: 'Sector',
      sectorVal: 'Agricultural Supply',
    },
    products: {
      subtitle: 'Complete Catalog',
      title: 'Export Agricultural Products',
      description:
        'Browse our range of fresh vegetables and organic dehydrated powders prepared to global export specifications.',
      customCtaTitle: 'Need Custom Export Specifications or Quantities?',
      customCtaDesc:
        'We cater to customized grading, size sorting, and private label carton requirements for international bulk buyers.',
      exportGrade: 'Export Grade',
      availableForExport: 'Available For Export',
      viewSpecs: 'View Specifications',
      exportVarietyLabel: 'Variety',
      exportVarietiesLabel: 'Varieties',
      exportSpecLabel: 'Export Specification',
      backToProducts: 'Back to Products',
      bulkInquiryTitle: 'Bulk & International Inquiries',
      bulkInquiryDesc:
        'Request export packaging options, grading sheets, and shipment schedules.',
      varietiesHeading: 'Export Varieties & Market Types',
      sizesHeading: 'Size Classification',
      applicationsHeading: 'Applications',
      packagingHeading: 'Packaging Details',
      inquireAboutTitle: 'Inquire About Exporting',
      inquireAboutDesc:
        'Contact our export division to request quotation, minimum order quantities, and packaging specifications for',
    },
    packaging: {
      subtitle: 'Preservation & Logistics',
      title: 'Export Packaging Showcase',
      description:
        'Engineered export packaging designed to ensure farm-fresh quality, hygiene, and transit durability from origin to destination port.',
      s1Title: 'Corrugated Export Cartons',
      s1Category: 'Fresh Vegetables & Produce',
      s1Desc:
        'Heavy-duty 3-ply and 5-ply ventilated carton boxes specifically engineered to maintain freshness and withstand international transit handling.',
      s2Title: 'Net / Mesh Bags',
      s2Category: 'Bulk Vegetables (Onion & Potato)',
      s2Desc:
        'Aerated mesh bags facilitating optimal air circulation for root vegetables across standard export shipments.',
      s3Title: 'Vacuum Sealed & Food-Grade Pouches',
      s3Category: 'Organic Dehydrated Powders',
      s3Desc:
        'Moisture-barrier food-grade aluminium or multi-layer pouches preserving natural aroma, color, and nutritional profile.',
      s4Title: 'Customized & Private Label Packing',
      s4Category: 'Overseas Importers & Wholesalers',
      s4Desc:
        'Custom packaging configurations, container palletization, and customer-specified labeling tailored to importing country norms.',
      protocolTitle: 'Export Packing Protocol',
      protocolDesc:
        'Our packing practices adhere to international freight expectations, ensuring adequate ventilation, humidity control, and standardized container palletization.',
      badgeVentilation: 'Ventilation Optimized',
      badgeTemperature: 'Temperature Safeguards',
      badgePalletized: 'Palletized Handling',
      ctaTitle: 'Discuss Custom Packaging for Your Market',
      ctaDesc:
        'Contact our team to specify container packing, box dimensions, and branding requirements for your orders.',
    },
    quality: {
      subtitle: 'Commitment to Quality',
      title: 'Quality Assurance & Export Standards',
      description:
        'Maintaining rigorous quality control and careful grading protocols to deliver reliable agricultural goods worldwide.',
      p1Title: 'Stringent Sorting & Grading',
      p1Desc:
        'Produce is sorted by length, color uniformity, and defect tolerance to meet export grade specifications.',
      p2Title: 'Temperature & Post-Harvest Control',
      p2Desc:
        'Immediate post-harvest cooling and controlled temperature chain preservation to maximize transit life.',
      p3Title: 'Uniform Batch Sizing',
      p3Desc:
        'Strict adherence to size classification ensuring buyers receive consistent lots.',
      p4Title: 'Hygienic Export Handling',
      p4Desc:
        'Handling and carton packaging conducted under clean conditions compliant with destination phytosanitary regulations.',
      workflowTag: 'Export Consistency',
      workflowTitle: 'Our Inspection Workflow',
      workflowDesc:
        'From farm procurement through sorting, size classification, carton packing, and container loading, each batch is tracked and verified against the buyer’s proforma specification.',
      stepSource: 'Source Verification',
      stepCheck: 'Grade & Size Check',
      stepDispatch: 'Pre-Dispatch Inspection',
      ctaTitle: 'Require Specific Quality or Phytosanitary Standards?',
      ctaDesc:
        'Contact our export desk with your destination requirements and regulatory compliance needs.',
    },
    contact: {
      subtitle: 'Get in Touch',
      title: 'Export Inquiry & Contact Desk',
      description:
        'Send us your product inquiries, export volume requirements, and destination port details.',
      corporateOffice: 'Corporate Office',
      brandTag: 'IMPORT | EXPORT',
      shortDesc: 'Agricultural products supplier and international exporter.',
      regAddress: 'Registered Address',
      phoneWhatsApp: 'Telephone / WhatsApp',
      officialEmail: 'Official Export Email',
      globalTradeTitle: 'Global Trade Operations',
      globalTradeDesc:
        'Inquiries are processed by our export documentation and dispatch department. Please include product type, grading preference, and destination port.',
      formTitle: 'Export Inquiry Form',
      inquiryRecorded: 'Inquiry Recorded',
      inquiryRecordedDesc:
        'Thank you. We have received your export inquiry and will get back to you shortly.',
      sendAnother: 'Send another inquiry',
      nameLabel: 'Your Name / Company',
      namePlaceholder: 'Importer or Company Name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'Product of Interest',
      destLabel: 'Destination Country / Port',
      destPlaceholder: 'e.g. Dubai, Jebel Ali / Singapore / Rotterdam',
      notesLabel: 'Required Quantity & Packaging Notes',
      notesPlaceholder:
        'Specify volume requirements, container size, target delivery schedule, or packaging preferences...',
      submitBtn: 'Submit Export Inquiry',
      demoNote: 'Note: Form submission is currently a demonstration frontend scaffold.',
    },
    cta: {
      badge: 'International Trade & Supply',
      title: 'Looking to Source Agricultural Products for Global Export?',
      description:
        'Connect with Brahma Chaitanya Global to discuss export specifications, packaging options, and bulk shipment logistics tailored to your international market.',
      enquireNow: 'Enquire Now',
      viewProducts: 'View All Products',
    },
    footer: {
      description:
        'Agricultural products supplier and international exporter, committed to reliability, consistent grading, and global trade standards.',
      globalExportBadge: 'Global Agricultural Export',
      quickLinks: 'Quick Links',
      productsHeading: 'Products',
      contactHeading: 'Export Contact',
      addressLabel: 'Address',
      telephoneLabel: 'Telephone',
      emailLabel: 'Email',
      copyright: 'Brahma Chaitanya Global',
      allRightsReserved: 'All rights reserved.',
      showcaseLabel: 'Product Showcase Website',
    },
    floating: {
      enquireNow: 'Enquire Now',
    },
  },
  hi: {
    nav: {
      brandName: 'ब्रह्मा चैतन्य',
      brandTag: 'ग्लोबल',
      importExport: 'आयात | निर्यात',
      subTag: 'कृषि उत्पाद आपूर्तिकर्ता एवं निर्यातक',
      home: 'मुख्यपृष्ठ',
      about: 'हमारे बारे में',
      products: 'उत्पाद',
      packaging: 'पैकेजिंग',
      quality: 'गुणवत्ता',
      contact: 'संपर्क',
      enquireNow: 'पूछताछ करें',
      toggleMenu: 'नेविगेशन मेनू खोलें',
    },
    home: {
      heroTitle: 'गुणवत्तापूर्ण कृषि उत्पादों का वैश्विक निर्यातक',
      heroSubtitle: 'ब्रह्मा चैतन्य ग्लोबल • आयात | निर्यात',
      heroDescription:
        'वैश्विक थोक बाजारों और अंतरराष्ट्रीय खरीदारों को ताजी हरी मिर्च, प्याज, आलू, टमाटर और जैविक पाउडर सहित प्रीमियम कृषि उत्पादों की आपूर्ति।',
      exploreProducts: 'उत्पाद देखें',
      enquireForExport: 'निर्यात हेतु पूछताछ',
      trustGrading: 'निर्यात मानक ग्रेडिंग',
      trustGlobal: 'वैश्विक आपूर्ति श्रृंखला',
      trustBulk: 'थोक एवं व्यावसायिक ऑर्डर',
      portfolioSubtitle: 'हमारा पोर्टफोलियो',
      portfolioTitle: 'कृषि निर्यात उत्पाद',
      portfolioDesc:
        'कड़े गुणवत्ता मानकों के साथ अंतरराष्ट्रीय बाजारों के लिए आपूर्ति किए जाने वाले ताजा उपज और जैविक पाउडर की विस्तृत श्रृंखला।',
    },
    about: {
      subtitle: 'हमारे बारे में',
      title: 'ब्रह्मा चैतन्य ग्लोबल',
      description:
        'वैश्विक मांग को विश्वसनीय कृषि आपूर्ति श्रृंखला से जोड़ने के लिए समर्पित कृषि उत्पाद आपूर्तिकर्ता एवं निर्यातक।',
      introTitle: 'अंतरराष्ट्रीय आयात एवं निर्यात समाधान',
      p1: 'ब्रह्मा चैतन्य ग्लोबल ताजी हरी मिर्च, प्याज, आलू, टमाटर और मोरिंगा व मशरूम पाउडर जैसे विशेष कृषि उत्पादों की आपूर्ति और अंतरराष्ट्रीय निर्यात में सक्रिय रूप से कार्य करता है।',
      p2: 'हमारा संचालन विदेशी आयातकों और थोक वितरकों की सटीक आवश्यकताओं को पूरा करने के लिए सुसंगत ग्रेडिंग, निर्यात पैकेजिंग और पारदर्शी व्यापार नीतियों पर केंद्रित है।',
      bullet1: 'विश्वसनीय खरीद और निर्यात-उन्मुख गुणवत्ता छंटाई',
      bullet2: 'गंतव्य देश के मानकों के अनुरूप अनुकूलित निर्यात पैकिंग समाधान',
      bullet3: 'थोक ऑर्डर और वैश्विक शिपमेंट के लिए समर्पित ग्राहक संवाद',
      cardBadge: 'कॉर्पोरेट अवलोकन',
      cardTitle: 'गुणवत्ता और दीर्घकालिक साझेदारी के लिए प्रतिबद्ध',
      cardDesc:
        'एक कृषि निर्यातक के रूप में, हमारा लक्ष्य यह सुनिश्चित करना है कि उपज सर्वोत्तम स्थिति में अंतरराष्ट्रीय बाजारों तक पहुंचे। प्रत्येक बैच का व्यवस्थित निरीक्षण किया जाता है।',
      tradeScopeLabel: 'व्यापार क्षेत्र',
      tradeScopeVal: 'आयात एवं निर्यात',
      sectorLabel: 'उद्योग क्षेत्र',
      sectorVal: 'कृषि आपूर्ति',
    },
    products: {
      subtitle: 'संपूर्ण कैटलॉग',
      title: 'कृषि निर्यात उत्पाद',
      description:
        'वैश्विक निर्यात विनिर्देशों के अनुसार तैयार ताजी सब्जियों और जैविक निर्जलित पाउडर की हमारी विस्तृत श्रृंखला देखें।',
      customCtaTitle: 'कस्टम निर्यात विनिर्देशों या बड़ी मात्रा की आवश्यकता है?',
      customCtaDesc:
        'हम अंतरराष्ट्रीय थोक खरीदारों के लिए अनुकूलित ग्रेडिंग, आकार छंटाई और निजी लेबल पैकेजिंग प्रदान करते हैं।',
      exportGrade: 'निर्यात स्तर',
      availableForExport: 'निर्यात के लिए उपलब्ध',
      viewSpecs: 'विवरण देखें',
      exportVarietyLabel: 'किस्म',
      exportVarietiesLabel: 'किस्में',
      exportSpecLabel: 'निर्यात विनिर्देश',
      backToProducts: 'सभी उत्पादों पर वापस',
      bulkInquiryTitle: 'थोक एवं अंतरराष्ट्रीय पूछताछ',
      bulkInquiryDesc:
        'निर्यात पैकेजिंग विकल्प, ग्रेडिंग शीट और शिपमेंट शेड्यूल का अनुरोध करें।',
      varietiesHeading: 'निर्यात किस्में और बाजार प्रकार',
      sizesHeading: 'आकार वर्गीकरण',
      applicationsHeading: 'उपयोग और अनुप्रयोग',
      packagingHeading: 'पैकेजिंग विवरण',
      inquireAboutTitle: 'निर्यात हेतु पूछताछ करें',
      inquireAboutDesc:
        'कोटेशन, न्यूनतम ऑर्डर मात्रा और पैकेजिंग विनिर्देशों के लिए हमारे निर्यात विभाग से संपर्क करें:',
    },
    packaging: {
      subtitle: 'संरक्षण एवं रसद',
      title: 'निर्यात पैकेजिंग प्रदर्शन',
      description:
        'खेत जैसी ताजगी, स्वच्छता और गंतव्य बंदरगाह तक पारगमन स्थायित्व सुनिश्चित करने के लिए विशेष रूप से डिज़ाइन की गई निर्यात पैकेजिंग।',
      s1Title: 'नालीदार निर्यात कार्टन बॉक्स',
      s1Category: 'ताजी सब्जियां एवं उपज',
      s1Desc:
        'अंतरराष्ट्रीय पारगमन के दबाव को झेलने और ताजगी बनाए रखने के लिए विशेष 3-प्लाई और 5-प्लाई वेंटिलेटेड कार्टन बॉक्स।',
      s2Title: 'नेट / मेश बैग (जालीदार बोरियां)',
      s2Category: 'थोक सब्जियां (प्याज और आलू)',
      s2Desc:
        'मानक निर्यात शिपमेंट में कंदमूल सब्जियों के लिए उत्तम वायु संचार प्रदान करने वाली जालीदार बोरियां।',
      s3Title: 'वैक्यूम सीलबंद और फूड-ग्रेड पाउच',
      s3Category: 'जैविक निर्जलित पाउडर',
      s3Desc:
        'प्राकृतिक सुगंध, रंग और पोषण बनाए रखने वाले नमी-अवरोधक एल्यूमीनियम या बहुस्तरीय पाउच।',
      s4Title: 'अनुकूलित एवं प्राइवेट लेबल पैकिंग',
      s4Category: 'विदेशी आयातक और थोक व्यापारी',
      s4Desc:
        'आयातक देश के नियमों के अनुरूप कस्टम पैकेजिंग, कंटेनर पैलेटाइजेशन और ग्राहक-निर्दिष्ट लेबलिंग।',
      protocolTitle: 'निर्यात पैकिंग प्रोटोकॉल',
      protocolDesc:
        'हमारी पैकिंग पद्धतियां अंतरराष्ट्रीय माल ढुलाई मानकों का पालन करती हैं, जिससे उचित वेंटिलेशन, आर्द्रता नियंत्रण और मानकीकृत कंटेनर पैलेटाइजेशन सुनिश्चित होता है।',
      badgeVentilation: 'इष्टतम वेंटिलेशन',
      badgeTemperature: 'तापमान नियंत्रण सुरक्षा',
      badgePalletized: 'पैलेटाइज्ड हैंडलिंग',
      ctaTitle: 'अपने बाजार के लिए कस्टम पैकेजिंग पर चर्चा करें',
      ctaDesc:
        'कंटेनर पैकिंग, बॉक्स आयाम और ब्रांडिंग आवश्यकताओं के लिए हमारी टीम से संपर्क करें।',
    },
    quality: {
      subtitle: 'गुणवत्ता के प्रति प्रतिबद्धता',
      title: 'गुणवत्ता आश्वासन एवं निर्यात मानक',
      description:
        'दुनिया भर में विश्वसनीय कृषि उत्पाद वितरित करने के लिए कड़े गुणवत्ता नियंत्रण और सावधानीपूर्वक ग्रेडिंग प्रोटोकॉल का पालन।',
      p1Title: 'कठोर छंटाई और ग्रेडिंग',
      p1Desc:
        'लंबाई, रंग एकरूपता और गुणवत्ता मानकों के अनुसार उपज की छंटाई की जाती है।',
      p2Title: 'तापमान और कटाई-उपरांत नियंत्रण',
      p2Desc:
        'पारगमन अवधि बढ़ाने के लिए कटाई के तुरंत बाद शीतलन और नियंत्रित तापमान श्रृंखला का रखरखाव।',
      p3Title: 'एकसमान बैच आकार',
      p3Desc:
        'खरीदारों को एकसमान लॉट मिलना सुनिश्चित करने के लिए आकार वर्गीकरण का सख्त पालन।',
      p4Title: 'स्वच्छ निर्यात हैंडलिंग',
      p4Desc:
        'गंतव्य देश के फाइटोसैनिटरी नियमों के अनुरूप स्वच्छ वातावरण में हैंडलिंग और कार्टन पैकिंग।',
      workflowTag: 'निर्यात निरंतरता',
      workflowTitle: 'हमारा निरीक्षण वर्कफ़्लो',
      workflowDesc:
        'खेत से खरीद से लेकर छंटाई, आकार वर्गीकरण, कार्टन पैकिंग और कंटेनर लोडिंग तक, प्रत्येक बैच को सत्यापित किया जाता है।',
      stepSource: 'स्रोत सत्यापन',
      stepCheck: 'ग्रेड और आकार जांच',
      stepDispatch: 'डिस्पैच-पूर्व निरीक्षण',
      ctaTitle: 'विशिष्ट गुणवत्ता या फाइटोसैनिटरी मानकों की आवश्यकता है?',
      ctaDesc:
        'अपने गंतव्य देश की आवश्यकताओं और नियामक अनुपालन के लिए हमारे निर्यात डेस्क से संपर्क करें।',
    },
    contact: {
      subtitle: 'संपर्क करें',
      title: 'निर्यात पूछताछ एवं संपर्क डेस्क',
      description:
        'अपनी उत्पाद पूछताछ, निर्यात मात्रा आवश्यकताएं और गंतव्य बंदरगाह विवरण हमें भेजें।',
      corporateOffice: 'कॉर्पोरेट कार्यालय',
      brandTag: 'आयात | निर्यात',
      shortDesc: 'कृषि उत्पाद आपूर्तिकर्ता एवं अंतरराष्ट्रीय निर्यातक।',
      regAddress: 'पंजीकृत पता',
      phoneWhatsApp: 'फोन / व्हाट्सएप',
      officialEmail: 'आधिकारिक निर्यात ईमेल',
      globalTradeTitle: 'वैश्विक व्यापार संचालन',
      globalTradeDesc:
        'पूछताछ को हमारे निर्यात दस्तावेज और प्रेषण विभाग द्वारा संसाधित किया जाता है। कृपया उत्पाद का प्रकार और गंतव्य बंदरगाह शामिल करें।',
      formTitle: 'निर्यात पूछताछ फॉर्म',
      inquiryRecorded: 'पूछताछ दर्ज की गई',
      inquiryRecordedDesc:
        'धन्यवाद। हमें आपकी निर्यात पूछताछ प्राप्त हुई है और हम जल्द ही आपसे संपर्क करेंगे।',
      sendAnother: 'दूसरी पूछताछ भेजें',
      nameLabel: 'आपका नाम / कंपनी',
      namePlaceholder: 'आयातक या कंपनी का नाम',
      emailLabel: 'ईमेल पता',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'इच्छित उत्पाद',
      destLabel: 'गंतव्य देश / बंदरगाह',
      destPlaceholder: 'उदा. दुबई, जेबेल अली / सिंगापुर / रॉटरडैम',
      notesLabel: 'आवश्यक मात्रा और पैकेजिंग विवरण',
      notesPlaceholder:
        'मात्रा आवश्यकताएं, कंटेनर आकार, अपेक्षित डिलीवरी शेड्यूल या पैकेजिंग प्राथमिकताएं बताएं...',
      submitBtn: 'निर्यात पूछताछ जमा करें',
      demoNote: 'नोट: फॉर्म सबमिशन वर्तमान में प्रदर्शन के लिए है।',
    },
    cta: {
      badge: 'अंतरराष्ट्रीय व्यापार एवं आपूर्ति',
      title: 'क्या आप वैश्विक निर्यात के लिए कृषि उत्पाद सोर्स करना चाहते हैं?',
      description:
        'अपने अंतरराष्ट्रीय बाजार के अनुकूल निर्यात विनिर्देशों, पैकेजिंग विकल्पों और थोक शिपमेंट रसद पर चर्चा करने के लिए ब्रह्मा चैतन्य ग्लोबल से जुड़ें।',
      enquireNow: 'पूछताछ करें',
      viewProducts: 'सभी उत्पाद देखें',
    },
    footer: {
      description:
        'कृषि उत्पाद आपूर्तिकर्ता और अंतरराष्ट्रीय निर्यातक, विश्वसनीयता, सुसंगत ग्रेडिंग और वैश्विक व्यापार मानकों के लिए प्रतिबद्ध।',
      globalExportBadge: 'वैश्विक कृषि निर्यात',
      quickLinks: 'त्वरित लिंक',
      productsHeading: 'उत्पाद',
      contactHeading: 'निर्यात संपर्क',
      addressLabel: 'पता',
      telephoneLabel: 'टेलीफोन',
      emailLabel: 'ईमेल',
      copyright: 'ब्रह्मा चैतन्य ग्लोबल',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      showcaseLabel: 'उत्पाद प्रदर्शन वेबसाइट',
    },
    floating: {
      enquireNow: 'पूछताछ करें',
    },
  },
  mr: {
    nav: {
      brandName: 'ब्रह्मा चैतन्य',
      brandTag: 'ग्लोबल',
      importExport: 'आयात | निर्यात',
      subTag: 'कृषी उत्पादने पुरवठादार आणि निर्यातदार',
      home: 'मुखपृष्ठ',
      about: 'आमच्याबद्दल',
      products: 'उत्पादने',
      packaging: 'पॅकेजिंग',
      quality: 'गुणवत्ता',
      contact: 'संपर्क',
      enquireNow: 'चौकशी करा',
      toggleMenu: 'नेव्हिगेशन मेनू उघडा',
    },
    home: {
      heroTitle: 'दर्जेदार कृषी उत्पादनांचे जागतिक निर्यातदार',
      heroSubtitle: 'ब्रह्मा चैतन्य ग्लोबल • आयात | निर्यात',
      heroDescription:
        'आंतरराष्ट्रीय घाऊक बाजारपेठा आणि परदेशी खरेदीदारांसाठी ताजी हिरवी मिरची, कांदा, बटाटा, टोमॅटो आणि सेंद्रिय पावडरसह प्रीमियम कृषी उत्पादनांचा पुरवठा.',
      exploreProducts: 'उत्पादने पहा',
      enquireForExport: 'निर्यातीसाठी चौकशी',
      trustGrading: 'निर्यात मानक प्रतवारी',
      trustGlobal: 'जागतिक पुरवठा साखळी',
      trustBulk: 'घाऊक आणि व्यावसायिक ऑर्डर्स',
      portfolioSubtitle: 'आमचा पोर्टफोलिओ',
      portfolioTitle: 'कृषी निर्यात उत्पादने',
      portfolioDesc:
        'काटेकोर गुणवत्ता तपासणीसह आंतरराष्ट्रीय बाजारपेठेसाठी पुरवल्या जाणाऱ्या ताज्या भाज्या आणि सेंद्रिय पावडरची विस्तृत श्रेणी.',
    },
    about: {
      subtitle: 'आमच्याबद्दल',
      title: 'ब्रह्मा चैतन्य ग्लोबल',
      description:
        'जागतिक मागणी आणि विश्वासार्ह कृषी पुरवठा साखळी यांचा समन्वय साधणारा अग्रगण्य कृषी पुरवठादार व निर्यातदार.',
      introTitle: 'आंतरराष्ट्रीय आयात आणि निर्यात उपाय',
      p1: 'ब्रह्मा चैतन्य ग्लोबल ताजी हिरवी मिरची, कांदा, बटाटा, टोमॅटो आणि शेवगा व अळिंबी पावडर यांसारख्या निवडक कृषी उत्पादनांच्या पुरवठा आणि आंतरराष्ट्रीय निर्यातीत कार्यरत आहे.',
      p2: 'आमची कार्यप्रणाली परदेशी आयातदार आणि घाऊक वितरकांच्या निकषांनुसार अचूक प्रतवारी, निर्यात पॅकेजिंग आणि पारदर्शक व्यापारावर भर देते.',
      bullet1: 'विश्वासार्ह खरेदी आणि निर्यात-केंद्रित गुणवत्ता प्रतवारी',
      bullet2: 'आयात देशाच्या नियमांनुसार सानुकूल निर्यात पॅकिंग पर्याय',
      bullet3: 'मोठ्या ऑर्डर्स आणि कंटेनर वाहतुकीसाठी तत्पर ग्राहक संवाद',
      cardBadge: 'कॉर्पोरेट माहिती',
      cardTitle: 'गुणवत्ता आणि दीर्घकालीन भागीदारीसाठी कटिबद्ध',
      cardDesc:
        'एक कृषी निर्यातदार म्हणून, आमची उत्पादने उत्कृष्ट स्थितीत जागतिक बाजारपेठेत पोहोचवणे हे आमचे ध्येय आहे. प्रत्येक तुकडीची पद्धतशीर तपासणी केली जाते.',
      tradeScopeLabel: 'व्यापार व्याप्ती',
      tradeScopeVal: 'आयात आणि निर्यात',
      sectorLabel: 'क्षेत्र',
      sectorVal: 'कृषी पुरवठा',
    },
    products: {
      subtitle: 'संपूर्ण कॅटलॉग',
      title: 'कृषी निर्यात उत्पादने',
      description:
        'जागतिक निर्यात मानकांनुसार तयार केलेल्या ताज्या भाज्या आणि सेंद्रिय पावडरची आमची श्रेणी पहा.',
      customCtaTitle: 'सानुकूल निर्यात तपशील किंवा मोठ्या प्रमाणाची आवश्यकता आहे का?',
      customCtaDesc:
        'आम्ही आंतरराष्ट्रीय घाऊक खरेदीदारांसाठी विशेष प्रतवारी, आकार वर्गीकरण आणि खाजगी लेबल पॅकेजिंग पुरवतो.',
      exportGrade: 'निर्यात दर्जा',
      availableForExport: 'निर्यातीसाठी उपलब्ध',
      viewSpecs: 'तपशील पहा',
      exportVarietyLabel: 'वाण',
      exportVarietiesLabel: 'वाण',
      exportSpecLabel: 'निर्यात तपशील',
      backToProducts: 'सर्व उत्पादनांकडे परत',
      bulkInquiryTitle: 'घाऊक आणि आंतरराष्ट्रीय चौकशी',
      bulkInquiryDesc:
        'निर्यात पॅकेजिंग पर्याय, प्रतवारी पत्रक आणि कंटेनर वाहतूक वेळापत्रकाची माहिती घ्या.',
      varietiesHeading: 'निर्यात वाण आणि बाजार प्रकार',
      sizesHeading: 'आकार प्रतवारी',
      applicationsHeading: 'उपयोजन आणि वापर',
      packagingHeading: 'पॅकेजिंग तपशील',
      inquireAboutTitle: 'निर्यातीसाठी चौकशी करा',
      inquireAboutDesc:
        'दरपत्रक, किमान ऑर्डर प्रमाण आणि पॅकेजिंग तपशीलासाठी आमच्या निर्यात विभागाशी संपर्क साधा:',
    },
    packaging: {
      subtitle: 'संरक्षण आणि वाहतूक',
      title: 'निर्यात पॅकेजिंग प्रदर्शन',
      description:
        'शेतातून काढल्यासारखा ताजा दर्जा, स्वच्छता आणि प्रवासादरम्यान सुरक्षितता राखण्यासाठी तयार केलेले निर्यात पॅकेजिंग.',
      s1Title: 'कोरुगेटेड निर्यात बॉक्सेस',
      s1Category: 'ताजी भाजीपाला आणि उत्पादने',
      s1Desc:
        'आंतरराष्ट्रीय प्रवासात ताजेपणा टिकवून ठेवण्यासाठी आणि आघात सहन करण्यासाठी विशेष 3-प्लाय आणि 5-प्लाय हवेशीर बॉक्सेस.',
      s2Title: 'नेट / मेश बॅग्ज (जाळीदार पिशव्या)',
      s2Category: 'घाऊक भाज्या (कांदा आणि बटाटा)',
      s2Desc:
        'प्रवासात योग्य हवा खेळती राहण्यासाठी कंदमुळांसाठी विशेष जाळीदार पिशव्या.',
      s3Title: 'व्हॅक्यूम सीलबंद आणि फूड-ग्रेड पाऊच',
      s3Category: 'सेंद्रिय पावडर',
      s3Desc:
        'नैसर्गिक सुगंध, रंग आणि पोषण टिकवून ठेवणारे ओलावा-रोधक फूड-ग्रेड पाऊच.',
      s4Title: 'सानुकूल आणि प्रायव्हेट लेबल पॅकिंग',
      s4Category: 'परदेशी आयातदार आणि घाऊक व्यापारी',
      s4Desc:
        'आयात देशाच्या नियमांनुसार पॅकेजिंग, कंटेनर पॅलेटायझेशन आणि ग्राहकांच्या मागणीनुसार लेबलिंग.',
      protocolTitle: 'निर्यात पॅकिंग नियमावली',
      protocolDesc:
        'आमच्या पॅकिंग पद्धती आंतरराष्ट्रीय मानकांनुसार असून योग्य वायुवीजन, आर्द्रता नियंत्रण आणि पॅलेटायझेशन सुनिश्चित करतात.',
      badgeVentilation: 'योग्य वायुवीजन',
      badgeTemperature: 'तापमान नियंत्रण',
      badgePalletized: 'पॅलेटाइज्ड हाताळणी',
      ctaTitle: 'आपल्या बाजारपेठेसाठी सानुकूल पॅकेजिंगची चर्चा करा',
      ctaDesc:
        'कंटेनर पॅकिंग, बॉक्स आकार आणि ब्रँडिंग आवश्यकतांसाठी आमच्या टीमशी संपर्क साधा.',
    },
    quality: {
      subtitle: 'गुणवत्तेची हमी',
      title: 'गुणवत्ता हमी आणि निर्यात मानके',
      description:
        'जगभरात विश्वासार्ह कृषी उत्पादने पुरवण्यासाठी कठोर गुणवत्ता नियंत्रण आणि अचूक प्रतवारी पद्धत.',
      p1Title: 'काटेकोर निवड आणि प्रतवारी',
      p1Desc:
        'लांबी, एकसमान रंग आणि निर्दोष दर्जा यानुसार शेतमालाची अचूक निवड केली जाते.',
      p2Title: 'तापमान आणि काढणीनंतरचे व्यवस्थापन',
      p2Desc:
        'प्रवासात टिकवणक्षमता वाढवण्यासाठी काढणीनंतर त्वरित शीतकरण व नियंत्रित तापमान साखळी.',
      p3Title: 'एकसमान तुकडी आकार',
      p3Desc:
        'खरेदीदारांना एकसमान दर्जाचा माल मिळावा यासाठी आकार वर्गीकरणाचे काटेकोर पालन.',
      p4Title: 'आरोग्यदायी निर्यात हाताळणी',
      p4Desc:
        'आयात देशाच्या फायटोसॅनिटरी नियमांनुसार अत्यंत स्वच्छ वातावरणात हाताळणी व पॅकिंग.',
      workflowTag: 'निर्यात सातत्य',
      workflowTitle: 'आमची तपासणी कार्यपद्धती',
      workflowDesc:
        'शेतातील खरेदीपासून ते निवड, आकार प्रतवारी, पॅकिंग आणि कंटेनर लोडिंगपर्यंत प्रत्येक बॅचची बारकाईने पडताळणी केली जाते.',
      stepSource: 'मूळ स्रोत तपासणी',
      stepCheck: 'प्रत व आकार तपासणी',
      stepDispatch: 'रवानगीपूर्वी अंतिम तपासणी',
      ctaTitle: 'विशिष्ट गुणवत्ता किंवा फायटोसॅनिटरी प्रमाणपत्रांची आवश्यकता आहे?',
      ctaDesc:
        'आपल्या देशाच्या नियमांनुसार आणि प्रमाणपत्रांसाठी आमच्या निर्यात कक्षाशी संपर्क साधा.',
    },
    contact: {
      subtitle: 'संपर्क साधा',
      title: 'निर्यात चौकशी आणि संपर्क कक्ष',
      description:
        'आपल्या उत्पादनांची चौकशी, आवश्यक प्रमाण आणि इच्छित बंदराचा तपशील आम्हाला पाठवा.',
      corporateOffice: 'कॉर्पोरेट कार्यालय',
      brandTag: 'आयात | निर्यात',
      shortDesc: 'कृषी उत्पादने पुरवठादार आणि आंतरराष्ट्रीय निर्यातदार.',
      regAddress: 'नोंदणीकृत पत्ता',
      phoneWhatsApp: 'फोन / व्हॉट्सअ‍ॅप',
      officialEmail: 'अधिकृत निर्यात ईमेल',
      globalTradeTitle: 'जागतिक व्यापार कार्यप्रणाली',
      globalTradeDesc:
        'सर्व चौकशी आमच्या निर्यात दस्तऐवजीकरण विभागामार्फत हाताळल्या जातात. कृपया उत्पादनाचा प्रकार आणि इच्छित बंदर नमूद करा.',
      formTitle: 'निर्यात चौकशी अर्ज',
      inquiryRecorded: 'चौकशी नोंदवली गेली',
      inquiryRecordedDesc:
        'धन्यवाद! आपली निर्यात चौकशी प्राप्त झाली असून आमची टीम लवकरच आपल्याशी संपर्क करेल.',
      sendAnother: 'दुसरी चौकशी पाठवा',
      nameLabel: 'आपले नाव / कंपनी',
      namePlaceholder: 'आयातदार किंवा कंपनीचे नाव',
      emailLabel: 'ईमेल पत्ता',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'उत्पादनाची निवड',
      destLabel: 'इच्छित देश / बंदर',
      destPlaceholder: 'उदा. दुबई, जबेल अली / सिंगापूर / रॉटरडॅम',
      notesLabel: 'आवश्यक प्रमाण व पॅकेजिंग तपशील',
      notesPlaceholder:
        'आवश्यक प्रमाण, कंटेनर आकार, अपेक्षित वेळ किंवा पॅकेजिंग पसंती नमूद करा...',
      submitBtn: 'निर्यात चौकशी सबमिट करा',
      demoNote: 'टीप: हा चौकशी अर्ज सध्या प्रात्यक्षिकासाठी आहे.',
    },
    cta: {
      badge: 'आंतरराष्ट्रीय व्यापार आणि पुरवठा',
      title: 'जागतिक निर्यातीसाठी दर्जेदार कृषी उत्पादने शोधत आहात का?',
      description:
        'आपल्या आंतरराष्ट्रीय बाजारपेठेनुसार निर्यात निकष, पॅकेजिंग पर्याय आणि कंटेनर वाहतुकीसाठी ब्रह्मा चैतन्य ग्लोबलशी संपर्क साधा.',
      enquireNow: 'आता चौकशी करा',
      viewProducts: 'सर्व उत्पादने पहा',
    },
    footer: {
      description:
        'विश्वासार्हता, अचूक प्रतवारी आणि जागतिक व्यापार मानकांसाठी कटिबद्ध कृषी उत्पादने पुरवठादार व आंतरराष्ट्रीय निर्यातदार.',
      globalExportBadge: 'जागतिक कृषी निर्यात',
      quickLinks: 'महत्त्वाच्या लिंक्स',
      productsHeading: 'उत्पादने',
      contactHeading: 'निर्यात संपर्क',
      addressLabel: 'पत्ता',
      telephoneLabel: 'टेलिफोन',
      emailLabel: 'ईमेल',
      copyright: 'ब्रह्मा चैतन्य ग्लोबल',
      allRightsReserved: 'सर्व हक्क राखीव.',
      showcaseLabel: 'उत्पादन प्रदर्शन संकेतस्थळ',
    },
    floating: {
      enquireNow: 'चौकशी करा',
    },
  },
  ar: {
    nav: {
      brandName: 'براهما تشايتانيا',
      brandTag: 'جلوبال',
      importExport: 'استيراد | تصدير',
      subTag: 'مورّد ومصدّر للمنتجات الزراعية',
      home: 'الرئيسية',
      about: 'من نحن',
      products: 'المنتجات',
      packaging: 'التعبئة والتغليف',
      quality: 'معايير الجودة',
      contact: 'اتصل بنا',
      enquireNow: 'طلب استفسار',
      toggleMenu: 'القائمة الرئيسية',
    },
    home: {
      heroTitle: 'مصدّر عالمي للمنتجات الزراعية عالية الجودة',
      heroSubtitle: 'براهما تشايتانيا جلوبال • استيراد | تصدير',
      heroDescription:
        'توريد منتجات زراعية ممتازة تشمل الفلفل الأخضر الطازج، البصل، البطاطس، الطماطم والمساحيق العضوية لأسواق الجملة العالمية والمشترين الدوليين في دول الخليج والعالم.',
      exploreProducts: 'استكشف المنتجات',
      enquireForExport: 'استفسار للتصدير',
      trustGrading: 'فرز وتدريج بمعايير التصدير',
      trustGlobal: 'سلسلة توريد وشحن دولية',
      trustBulk: 'طلبات تجارية وشحنات حاويات',
      portfolioSubtitle: 'منتجاتنا',
      portfolioTitle: 'المنتجات الزراعية للتصدير',
      portfolioDesc:
        'تشكيلة واسعة من الخضروات الطازجة والمساحيق العضوية المجففة والمفرزة وفق أعلى المعايير الدولية.',
    },
    about: {
      subtitle: 'نبذة عنا',
      title: 'براهما تشايتانيا جلوبال',
      description:
        'مورد ومصدر موثوق للمنتجات الزراعية يربط بين الإنتاج الزراعي والأسواق الدولية بسلاسل توريد مضمونة.',
      introTitle: 'حلول الاستيراد والتصدير الزراعي الدولي',
      p1: 'تعمل براهما تشايتانيا جلوبال في توريد وتصدير المحاصيل الزراعية المختارة بما في ذلك الفلفل الأخضر الحار والبصل والبطاطس والطماطم ومساحيق المورينجا والمشروم المجفف.',
      p2: 'ترتكز عملياتنا على الفرز الدقيق، التعبئة المعتمدة للتصدير، والشفافية التامة لتلبية متطلبات المستوردين وشركات توزيع الجملة.',
      bullet1: 'شراء موثوق وفرز وتدريج فائق موجه للتصدير',
      bullet2: 'حلول تعبئة مخصصة تتوافق مع معايير ولوائح بلد الوصول',
      bullet3: 'تواصل ومتابعة مستمرة للشحنات والحاويات المبردة',
      cardBadge: 'نظرة عامة',
      cardTitle: 'الالتزام بالجودة والشراكات طويلة الأمد',
      cardDesc:
        'بصفتنا مصدّرين زراعيين، نسعى لضمان وصول المحاصيل إلى الموانئ العالمية في أفضل حالاتها مع فحص وتبريد مناسب للرحلات البحرية والجوية.',
      tradeScopeLabel: 'نطاق العمل',
      tradeScopeVal: 'استيراد وتصدير',
      sectorLabel: 'القطاع',
      sectorVal: 'التوريدات الزراعية',
    },
    products: {
      subtitle: 'الكتالوج الكامل',
      title: 'المنتجات الزراعية المتاحة للتصدير',
      description:
        'تصفح باقتنا من الخضار الطازج والمساحيق العضوية المجففة المعدة بمواصفات الشحن والتصدير الدولي.',
      customCtaTitle: 'هل تحتاج إلى مواصفات أو كميات خاصة لبلدك؟',
      customCtaDesc:
        'نوفر فرزاً مخصصاً حسب الحجم، التغليف الخاص والعلامة التجارية للمستوردين وتجار الجملة.',
      exportGrade: 'درجة تصدير ممتازة',
      availableForExport: 'جاهز للتصدير الفوري',
      viewSpecs: 'عرض المواصفات الفنية',
      exportVarietyLabel: 'صنف',
      exportVarietiesLabel: 'أصناف',
      exportSpecLabel: 'مواصفات التصدير',
      backToProducts: 'العودة للمنتجات',
      bulkInquiryTitle: 'طلبات الحاويات والشحنات الدولية',
      bulkInquiryDesc:
        'اطلب تفاصيل التعبئة، شهادات الفرز وجداول شحن الحاويات المبردة.',
      varietiesHeading: 'أصناف التصدير وأنواع الأسواق',
      sizesHeading: 'تصنيف وتدريج الأحجام',
      applicationsHeading: 'الاستخدامات والتطبيقات',
      packagingHeading: 'تفاصيل التعبئة والحاويات',
      inquireAboutTitle: 'طلب تسعير تصدير',
      inquireAboutDesc:
        'تواصل مع قسم التصدير للحصول على عروض الأسعار والحد الأدنى للكميات لمنتج:',
    },
    packaging: {
      subtitle: 'الحفظ والخدمات اللوجستية',
      title: 'معرض حلول التعبئة والتصدير',
      description:
        'تغليف هندسي مصمم لحفظ طراوة المحاصيل، النظافة التامة، وتحمل ظروف النقل والشحن الدولي.',
      s1Title: 'كراتين تصدير كرتونية مموجة',
      s1Category: 'الخضروات والمنتجات الطازجة',
      s1Desc:
        'صناديق كرتونية مهواة عالية التحمل (3 و5 طبقات) مصممة للحفاظ على برودة وطراوة المنتج أثناء الشحن.',
      s2Title: 'أكياس شبكية مهواة (Mesh Bags)',
      s2Category: 'خضروات الجملة (البصل والبطاطس)',
      s2Desc:
        'أكياس شبكية قوية تسمح بمرور الهواء وتمنع التعفن في شحنات الحاويات الكبيرة للبصل والبطاطس.',
      s3Title: 'أكياس محكمة الغلق ومفرغة من الهواء',
      s3Category: 'المساحيق العضوية المجففة',
      s3Desc:
        'أكياس ألومنيوم غذائية متعددة الطبقات عازلة للرطوبة تحافظ على النكهة واللون والقيمة الغذائية.',
      s4Title: 'تعبئة مخصصة وعلامات تجارية خاصة',
      s4Category: 'المستوردون وتجار الجملة الدوليون',
      s4Desc:
        'تعبئة وتغليف حسب طلب العميل، رص على طبليات خشبية (Pallets) ووضع ملصقات مطابقة لمتطلبات بلد الاستيراد.',
      protocolTitle: 'بروتوكول التعبئة والشحن الدولي',
      protocolDesc:
        'تتبع عملياتنا أعلى معايير الشحن البحري والجوي الدولي لضمان التهوية والتحكم في درجة الحرارة والحاويات المبردة.',
      badgeVentilation: 'تهوية مثالية للحاوية',
      badgeTemperature: 'سلسلة تبريد متواصلة',
      badgePalletized: 'شحن على منصات نقالة (Palletized)',
      ctaTitle: 'ناقش خيارات التغليف لسوقك المحلي',
      ctaDesc:
        'تواصل مع فريقنا لتحديد أوزان العبوات، مقاسات الصناديق ومتطلبات الطبليات المبردة.',
    },
    quality: {
      subtitle: 'الالتزام بالجودة',
      title: 'ضمان الجودة ومواصفات التصدير',
      description:
        'نطبق رقابة صارمة على الجودة وبروتوكولات فحص دقيقة لتقديم محاصيل موثوقة تلبي المواصفات الخليجية والدولية.',
      p1Title: 'فرز وتصنيف صارم',
      p1Desc:
        'يتم فرز المحاصيل وفق الطول، اللون الموحد، وخلوها التام من العيوب لتطابق أعلى رتب التصدير.',
      p2Title: 'التحكم بالحرارة بعد الحصاد',
      p2Desc:
        'تبريد فوري بعد الحصاد والحفاظ على سلسلة التبريد لضمان أطول فترة صلاحية طازجة في السوق.',
      p3Title: 'توحيد مقاسات وأحجام الشحنة',
      p3Desc:
        'التزام دقيق بتصنيفات المقاسات (بالسنتيمتر والميليمتر) لضمان تجانس وتطابق بضاعة المستورد.',
      p4Title: 'معاملة صحية معتمدة للتصدير',
      p4Desc:
        'تجهيز وتعبئة في بيئة صحية ومعقمة مطابقة للوائح الحجر الزراعي والشهادات النباتية المعتمدة.',
      workflowTag: 'ثبات الجودة',
      workflowTitle: 'مراحل الفحص والتفتيش',
      workflowDesc:
        'من التوريد الحقلي إلى الفرز والتدريج والتعبئة في الحاويات، تخضع كل دفعة لفحص دقيق وفق الفاتورة المبدئية.',
      stepSource: 'التحقق من المصدر والمزرعة',
      stepCheck: 'فحص المقاس والمواصفات',
      stepDispatch: 'فحص الحاوية قبل الإبحار',
      ctaTitle: 'هل تحتاج إلى شهادات صحية أو فحص نباتي محدد؟',
      ctaDesc:
        'تواصل مع مكتب التصدير لدينا بمتطلبات بلدك وشهادات الفحص المخبري المطلوبة.',
    },
    contact: {
      subtitle: 'تواصل معنا',
      title: 'مكتب الاستفسارات والتعاقدات التصديرية',
      description:
        'أرسل لنا استفساراتك حول المنتجات، أحجام الحاويات وميناء الوصول لتقديم أفضل عروض الأسعار.',
      corporateOffice: 'المكتب الرئيسي للتصدير',
      brandTag: 'استيراد | تصدير',
      shortDesc: 'مورّد ومصدّر زراعي دولي معتمد.',
      regAddress: 'العنوان المسجل',
      phoneWhatsApp: 'الهاتف / واتساب',
      officialEmail: 'البريد الإلكتروني المعتمد للتصدير',
      globalTradeTitle: 'عمليات التجارة الدولية',
      globalTradeDesc:
        'تتم معالجة الاستفسارات من قبل قسم الشحن والتوثيق التصديري. يرجى توضيح نوع المنتج، المقاس المطلوب، وميناء الوصول.',
      formTitle: 'نموذج طلب عرض أسعار للتصدير',
      inquiryRecorded: 'تم تسجيل طلبك بنجاح',
      inquiryRecordedDesc:
        'شكراً لك. تلقينا استفسارك وسيتواصل معك فريق التصدير الدولي في أقرب وقت.',
      sendAnother: 'إرسال طلب آخر',
      nameLabel: 'الاسم / اسم الشركة المستوردة',
      namePlaceholder: 'اسم الشركة أو المستورد',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'المنتج المطلوب',
      destLabel: 'بلد / ميناء الوصول المستهدف',
      destPlaceholder: 'مثال: دبي، ميناء جبل علي / جدة / صلالة / الدوحة',
      notesLabel: 'الكمية المطلوبة وملاحظات التعبئة',
      notesPlaceholder:
        'حدد عدد الحاويات، نوع التغليف، جدول الوصول المطلوب أو أي مواصفات خاصة...',
      submitBtn: 'إرسال طلب الاستفسار',
      demoNote: 'ملاحظة: هذا النموذج التفاعلي موصول بقسم التصدير.',
    },
    cta: {
      badge: 'التجارة والتوريد الدولي',
      title: 'هل تبحث عن استيراد منتجات زراعية ممتازة لأسواقك؟',
      description:
        'تواصل مع براهما تشايتانيا جلوبال لمناقشة مواصفات التصدير، حلول التعبئة، والخدمات اللوجستية للحاويات المبردة.',
      enquireNow: 'اطلب تسعير الآن',
      viewProducts: 'استعرض جميع المنتجات',
    },
    footer: {
      description:
        'مورد زراعي ومصدر دولي ملتزم بالموثوقية، الفرز المتجانس، وأعلى معايير التجارة الدولية.',
      globalExportBadge: 'تصدير زراعي دولي',
      quickLinks: 'روابط سريعة',
      productsHeading: 'المنتجات',
      contactHeading: 'مكتب التصدير',
      addressLabel: 'العنوان',
      telephoneLabel: 'الهاتف',
      emailLabel: 'البريد الإلكتروني',
      copyright: 'براهما تشايتانيا جلوبال',
      allRightsReserved: 'جميع الحقوق محفوظة.',
      showcaseLabel: 'بوابة عرض المنتجات التصديرية',
    },
    floating: {
      enquireNow: 'طلب استفسار',
    },
  },
  ms: {
    nav: {
      brandName: 'BRAHMA CHAITANYA',
      brandTag: 'GLOBAL',
      importExport: 'Import | Eksport',
      subTag: 'Pembekal & Pengeksport Produk Pertanian',
      home: 'Laman Utama',
      about: 'Tentang Kami',
      products: 'Produk',
      packaging: 'Pembungkusan',
      quality: 'Kualiti',
      contact: 'Hubungi Kami',
      enquireNow: 'Pertanyaan Eksport',
      toggleMenu: 'Buka Menu',
    },
    home: {
      heroTitle: 'Pengeksport Global Hasil Pertanian Berkualiti',
      heroSubtitle: 'BRAHMA CHAITANYA GLOBAL • IMPORT | EKSPORT',
      heroDescription:
        'Membekalkan produk pertanian gred premium termasuk cili hijau segar, bawang, kentang, tomato dan serbuk organik kepada pasaran borong global dan pembeli antarabangsa.',
      exploreProducts: 'Terokai Produk',
      enquireForExport: 'Pertanyaan Eksport',
      trustGrading: 'Gred Standard Eksport',
      trustGlobal: 'Rantaian Bekalan Global',
      trustBulk: 'Pesanan Pukal & Komersial',
      portfolioSubtitle: 'Portfolio Kami',
      portfolioTitle: 'Produk Eksport Pertanian',
      portfolioDesc:
        'Terokai rangkaian hasil segar dan serbuk organik kami yang dibekalkan untuk pasaran antarabangsa dengan penggredan kualiti yang ketat.',
    },
    about: {
      subtitle: 'Tentang Kami',
      title: 'Brahma Chaitanya Global',
      description:
        'Pembekal dan pengeksport produk pertanian berdedikasi menghubungkan permintaan global dengan rantaian bekalan pertanian yang boleh dipercayai.',
      introTitle: 'Penyelesaian Import & Eksport Antarabangsa',
      p1: 'Brahma Chaitanya Global membekal dan mengeksport hasil pertanian terpilih, termasuk cili hijau segar, bawang, kentang, tomato, serta serbuk agro khas seperti serbuk daun moringa dan serbuk cendawan.',
      p2: 'Operasi kami mengutamakan penggredan konsisten, pembungkusan eksport tahan lasak, dan amalan perdagangan telus mengikut spesifikasi pengimport seberang laut.',
      bullet1: 'Perolehan ladang boleh dipercayai dengan pemilahan kualiti eksport',
      bullet2: 'Penyelesaian pembungkusan eksport disesuaikan mengikut piawaian destinasi',
      bullet3: 'Komunikasi pelanggan khusus untuk pesanan kontena & pukal',
      cardBadge: 'Gambaran Korporat',
      cardTitle: 'Komited terhadap Kualiti & Perkongsian Jangka Panjang',
      cardDesc:
        'Sebagai pengeksport pertanian, matlamat kami adalah memastikan hasil sampai ke pasaran global dalam keadaan segar dan prima melalui kawalan suhu yang tepat.',
      tradeScopeLabel: 'Skop Dagangan',
      tradeScopeVal: 'Import & Eksport',
      sectorLabel: 'Sektor',
      sectorVal: 'Bekalan Pertanian',
    },
    products: {
      subtitle: 'Katalog Lengkap',
      title: 'Produk Pertanian Eksport',
      description:
        'Semak rangkaian sayuran segar dan serbuk dehidrasi organik yang disediakan mengikut spesifikasi eksport global.',
      customCtaTitle: 'Perlukan Spesifikasi Eksport atau Kuantiti Khas?',
      customCtaDesc:
        'Kami menyediakan penggredan tersuai, pemilahan saiz, dan pembungkusan karton label peribadi untuk pembeli borong antarabangsa.',
      exportGrade: 'Gred Eksport',
      availableForExport: 'Sedia Untuk Eksport',
      viewSpecs: 'Lihat Spesifikasi',
      exportVarietyLabel: 'Varieti',
      exportVarietiesLabel: 'Varieti',
      exportSpecLabel: 'Spesifikasi Eksport',
      backToProducts: 'Kembali ke Produk',
      bulkInquiryTitle: 'Pertanyaan Pukal & Kontena Antarabangsa',
      bulkInquiryDesc:
        'Minta pilihan pembungkusan eksport, helaian penggredan, dan jadual penghantaran kontena sejuk.',
      varietiesHeading: 'Varieti Eksport & Jenis Pasaran',
      sizesHeading: 'Klasifikasi Saiz',
      applicationsHeading: 'Kegunaan & Aplikasi',
      packagingHeading: 'Butiran Pembungkusan',
      inquireAboutTitle: 'Buat Pertanyaan Eksport Mengenai',
      inquireAboutDesc:
        'Hubungi bahagian eksport kami untuk meminta sebut harga, kuantiti pesanan minimum, dan pembungkusan untuk:',
    },
    packaging: {
      subtitle: 'Pemeliharaan & Logistik',
      title: 'Pameran Pembungkusan Eksport',
      description:
        'Pembungkusan eksport kejuruteraan yang direka untuk memastikan kesegaran ladang, kebersihan, dan ketahanan transit dari pelabuhan asal ke destinasi.',
      s1Title: 'Karton Eksport Beralun (Corrugated Boxes)',
      s1Category: 'Sayur-sayuran & Hasil Segar',
      s1Desc:
        'Kotak karton berventilasi 3-lapis dan 5-lapis tugas berat yang direka khas untuk mengekalkan kesegaran dan menahan pengendalian transit antarabangsa.',
      s2Title: 'Beg Jaring / Mesh (Mesh Bags)',
      s2Category: 'Sayur Pukal (Bawang & Kentang)',
      s2Desc:
        'Beg jaring berudara yang memudahkan peredaran udara optimum untuk sayuran akar dalam penghantaran kontena eksport standard.',
      s3Title: 'Pau Vakum Berkedap Gred Makanan',
      s3Category: 'Serbuk Dehidrasi Organik',
      s3Desc:
        'Pau aluminium penghalang kelembapan pelbagai lapisan yang mengekalkan aroma, warna, dan profil nutrisi semula jadi.',
      s4Title: 'Pembungkusan Tersuai & Label Peribadi',
      s4Category: 'Pengimport & Pemborong Luar Negara',
      s4Desc:
        'Konfigurasi pembungkusan khas, paletisasi kontena, dan pelabelan yang mematuhi peraturan negara pengimport.',
      protocolTitle: 'Protokol Pembungkusan Eksport',
      protocolDesc:
        'Amalan pembungkusan kami mematuhi piawaian pengangkutan antarabangsa, memastikan pengudaraan yang mencukupi, kawalan kelembapan, dan paletisasi kontena standard.',
      badgeVentilation: 'Pengudaraan Dioptimumkan',
      badgeTemperature: 'Kawalan Rangkaian Suhu',
      badgePalletized: 'Pengendalian Berpalet (Palletized)',
      ctaTitle: 'Bincangkan Pembungkusan Tersuai untuk Pasaran Anda',
      ctaDesc:
        'Hubungi pasukan kami untuk menentukan saiz kotak, kapasiti kontena, dan keperluan penjenamaan pesanan anda.',
    },
    quality: {
      subtitle: 'Komitmen terhadap Kualiti',
      title: 'Jaminan Kualiti & Piawaian Eksport',
      description:
        'Mengekalkan kawalan kualiti yang ketat dan protokol penggredan teliti untuk membekalkan hasil pertanian yang boleh dipercayai di seluruh dunia.',
      p1Title: 'Pemilahan & Penggredan Ketat',
      p1Desc:
        'Hasil disaring mengikut panjang, keseragaman warna, dan toleransi kecacatan bagi memenuhi gred eksport.',
      p2Title: 'Kawalan Suhu Lepas Tuai',
      p2Desc:
        'Penyejukan segera selepas tuai dan pengekalan rantai suhu terkawal untuk memaksimumkan jangka hayat transit.',
      p3Title: 'Saiz Kelompok Seragam',
      p3Desc:
        'Pematuhan ketat kepada klasifikasi saiz bagi memastikan pembeli menerima kelompok yang konsisten.',
      p4Title: 'Pengendalian Eksport Bersih & Sanitari',
      p4Desc:
        'Pengendalian dan pembungkusan karton dijalankan dalam keadaan bersih mematuhi peraturan fitosanitasi negara destinasi.',
      workflowTag: 'Ketekalan Eksport',
      workflowTitle: 'Aliran Kerja Pemeriksaan Kami',
      workflowDesc:
        'Daripada perolehan ladang melalui pemilahan, klasifikasi saiz, pembungkusan karton, dan pemuatan kontena, setiap kelompok disahkan.',
      stepSource: 'Pengesahan Sumber Ladang',
      stepCheck: 'Pemeriksaan Gred & Saiz',
      stepDispatch: 'Pemeriksaan Pra-Pelepasan',
      ctaTitle: 'Memerlukan Piawaian Kualiti atau Fitosanitasi Khusus?',
      ctaDesc:
        'Hubungi meja eksport kami dengan keperluan dokumen dan pematuhan kawal selia destinasi anda.',
    },
    contact: {
      subtitle: 'Hubungi Kami',
      title: 'Meja Pertanyaan Eksport & Hubungan',
      description:
        'Hantarkan pertanyaan produk anda, keperluan volum eksport, dan butiran pelabuhan destinasi.',
      corporateOffice: 'Pejabat Korporat',
      brandTag: 'IMPORT | EKSPORT',
      shortDesc: 'Pembekal dan pengeksport produk pertanian antarabangsa.',
      regAddress: 'Alamat Berdaftar',
      phoneWhatsApp: 'Telefon / WhatsApp',
      officialEmail: 'Emel Eksport Rasmi',
      globalTradeTitle: 'Operasi Perdagangan Global',
      globalTradeDesc:
        'Pertanyaan diproses oleh jabatan dokumentasi dan penghantaran eksport kami. Sila sertakan jenis produk, gred pilihan, dan pelabuhan destinasi.',
      formTitle: 'Borang Pertanyaan Eksport',
      inquiryRecorded: 'Pertanyaan Direkodkan',
      inquiryRecordedDesc:
        'Terima kasih. Kami telah menerima pertanyaan eksport anda dan akan menghubungi anda sebentar lagi.',
      sendAnother: 'Hantar pertanyaan lain',
      nameLabel: 'Nama Anda / Syarikat',
      namePlaceholder: 'Nama Pengimport atau Syarikat',
      emailLabel: 'Alamat Emel',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'Produk Pilihan',
      destLabel: 'Negara / Pelabuhan Destinasi',
      destPlaceholder: 'cth: Pelabuhan Klang / Singapura / Dubai / Rotterdam',
      notesLabel: 'Kuantiti Diperlukan & Nota Pembungkusan',
      notesPlaceholder:
        'Nyatakan kuantiti, saiz kontena, jadual penghantaran yang disasarkan, atau pilihan pembungkusan...',
      submitBtn: 'Hantar Pertanyaan Eksport',
      demoNote: 'Nota: Borang pertanyaan ini dihubungkan terus ke meja eksport.',
    },
    cta: {
      badge: 'Perdagangan & Bekalan Antarabangsa',
      title: 'Mencari Pembekal Produk Pertanian untuk Pasaran Global?',
      description:
        'Hubungi Brahma Chaitanya Global untuk membincangkan spesifikasi eksport, pilihan pembungkusan, dan logistik perkapalan kontena.',
      enquireNow: 'Tanya Sekarang',
      viewProducts: 'Lihat Semua Produk',
    },
    footer: {
      description:
        'Pembekal hasil pertanian dan pengeksport antarabangsa, komited terhadap kebolehpercayaan, penggredan konsisten, dan standard perdagangan global.',
      globalExportBadge: 'Eksport Pertanian Global',
      quickLinks: 'Pautan Pantas',
      productsHeading: 'Produk',
      contactHeading: 'Hubungi Eksport',
      addressLabel: 'Alamat',
      telephoneLabel: 'Telefon',
      emailLabel: 'Emel',
      copyright: 'Brahma Chaitanya Global',
      allRightsReserved: 'Hak cipta terpelihara.',
      showcaseLabel: 'Laman Web Showcase Produk',
    },
    floating: {
      enquireNow: 'Pertanyaan Eksport',
    },
  },
  vi: {
    nav: {
      brandName: 'BRAHMA CHAITANYA',
      brandTag: 'GLOBAL',
      importExport: 'Nhập Khẩu | Xuất Khẩu',
      subTag: 'Nhà Cung Cấp & Xuất Khẩu Nông Sản',
      home: 'Trang Chủ',
      about: 'Về Chúng Tôi',
      products: 'Sản Phẩm',
      packaging: 'Đóng Gói',
      quality: 'Chất Lượng',
      contact: 'Liên Hệ',
      enquireNow: 'Yêu Cầu Báo Giá',
      toggleMenu: 'Mở Menu',
    },
    home: {
      heroTitle: 'Nhà Xuất Khẩu Nông Sản Chất Lượng Toàn Cầu',
      heroSubtitle: 'BRAHMA CHAITANYA GLOBAL • NHẬP KHẨU | XUẤT KHẨU',
      heroDescription:
        'Cung cấp nông sản cao cấp bao gồm ớt xanh tươi, hành tây, khoai tây, cà chua và bột hữu cơ cho thị trường bán buôn quốc tế và các nhà nhập khẩu toàn cầu.',
      exploreProducts: 'Khám Phá Sản Phẩm',
      enquireForExport: 'Liên Hệ Xuất Khẩu',
      trustGrading: 'Phân Loại Đạt Chuẩn Xuất Khẩu',
      trustGlobal: 'Chuỗi Cung Ứng Toàn Cầu',
      trustBulk: 'Đơn Hàng Xuất Khẩu Số Lượng Lớn',
      portfolioSubtitle: 'Danh Mục Sản Phẩm',
      portfolioTitle: 'Nông Sản Xuất Khẩu',
      portfolioDesc:
        'Khám phá các sản phẩm tươi và bột hữu cơ xuất khẩu với quy trình kiểm định chất lượng nghiêm ngặt.',
    },
    about: {
      subtitle: 'Về Chúng Tôi',
      title: 'Brahma Chaitanya Global',
      description:
        'Nhà cung cấp và xuất khẩu nông sản uy tín, kết nối nhu cầu quốc tế với chuỗi cung ứng nông nghiệp bền vững.',
      introTitle: 'Giải Pháp Nhập Khẩu & Xuất Khẩu Quốc Tế',
      p1: 'Brahma Chaitanya Global chuyên cung ứng và xuất khẩu nông sản chọn lọc như ớt xanh tươi, hành tây, khoai tây, cà chua, cùng các loại bột thảo dược như bột chùm ngây moringa và bột nấm.',
      p2: 'Hoạt động của chúng tôi chú trọng phân loại đồng đều, quy chuẩn đóng gói xuất khẩu và quy trình thương mại minh bạch theo tiêu chuẩn nhà nhập khẩu.',
      bullet1: 'Thu mua nông sản chất lượng cao từ nông trại đạt chuẩn',
      bullet2: 'Đóng gói xuất khẩu theo tiêu chuẩn hải quan nước nhập khẩu',
      bullet3: 'Hỗ trợ khách hàng tận tâm cho các đơn hàng container lớn',
      cardBadge: 'Tổng Quan Doanh Nghiệp',
      cardTitle: 'Cam Kết Chất Lượng & Hợp Tác Lâu Dài',
      cardDesc:
        'Mục tiêu của chúng tôi là đảm bảo nông sản đến cảng đích trong tình trạng tươi ngon và hoàn hảo nhất nhờ quy trình bảo quản lạnh hiện đại.',
      tradeScopeLabel: 'Phạm Vi Hoạt Động',
      tradeScopeVal: 'Xuất Nhập Khẩu',
      sectorLabel: 'Lĩnh Vực',
      sectorVal: 'Cung Ứng Nông Nghiệp',
    },
    products: {
      subtitle: 'Danh Mục Đầy Đủ',
      title: 'Nông Sản Xuất Khẩu',
      description:
        'Duyệt qua danh mục rau củ tươi và bột khô hữu cơ được chuẩn bị theo tiêu chuẩn xuất khẩu quốc tế.',
      customCtaTitle: 'Yêu Cầu Tiêu Chuẩn Riêng Hoặc Đơn Hàng Lớn?',
      customCtaDesc:
        'Chúng tôi đáp ứng phân loại kích cỡ, quy cách đóng gói và nhãn hiệu riêng (Private Label) theo đơn đặt hàng.',
      exportGrade: 'Tiêu Chuẩn Xuất Khẩu',
      availableForExport: 'Sẵn Sàng Xuất Khẩu',
      viewSpecs: 'Xem Thông Số Chi Tiết',
      exportVarietyLabel: 'Chủng loại',
      exportVarietiesLabel: 'Chủng loại',
      exportSpecLabel: 'Thông Số Xuất Khẩu',
      backToProducts: 'Quay Lại Danh Mục',
      bulkInquiryTitle: 'Đơn Hàng Container & Số Lượng Lớn',
      bulkInquiryDesc:
        'Yêu cầu bảng báo giá đóng gói, phiếu phân loại chất lượng và lịch trình container lạnh.',
      varietiesHeading: 'Chủng Loại & Phân Khúc Thị Trường',
      sizesHeading: 'Phân Loại Kích Thước',
      applicationsHeading: 'Ứng Dụng Sử Dụng',
      packagingHeading: 'Quy Cách Đóng Thùng',
      inquireAboutTitle: 'Yêu Cầu Báo Giá Xuất Khẩu',
      inquireAboutDesc:
        'Liên hệ bộ phận xuất khẩu của chúng tôi để nhận báo giá, số lượng đặt hàng tối thiểu cho sản phẩm:',
    },
    packaging: {
      subtitle: 'Bảo Quản & Vận Tải',
      title: 'Giải Pháp Đóng Gói Xuất Khẩu',
      description:
        'Bao bì xuất khẩu chuyên dụng giúp giữ trọn độ tươi ngon, sạch sẽ và an toàn trong suốt hành trình vận chuyển quốc tế.',
      s1Title: 'Thùng Carton Sóng Chuyên Dụng (Corrugated)',
      s1Category: 'Rau Củ Quả Tươi',
      s1Desc:
        'Thùng carton 3 lớp và 5 lớp có lỗ thông gió đặc biệt giúp giữ độ tươi và chịu lực va đập khi vận chuyển đường biển.',
      s2Title: 'Bao Lưới Thông Khí (Mesh Bags)',
      s2Category: 'Nông Sản Củ (Hành Tây & Khoai Tây)',
      s2Desc:
        'Bao lưới mắt cáo thoáng khí giúp lưu thông không khí tối ưu cho các loại củ trong container hàng rời.',
      s3Title: 'Túi Hút Chân Không Chuẩn Thực Phẩm',
      s3Category: 'Bột Khô Hữu Cơ',
      s3Desc:
        'Túi màng nhôm nhiều lớp cản ẩm và ánh sáng, bảo quản nguyên vẹn hương vị, màu sắc và dưỡng chất tự nhiên.',
      s4Title: 'Đóng Gói Theo Yêu Cầu & Nhãn Riêng',
      s4Category: 'Nhà Nhập Khẩu & Bán Buôn',
      s4Desc:
        'Đóng gói theo kích cỡ chỉ định, xếp pallet chuẩn xuất khẩu và in nhãn theo quy định của nước sở tại.',
      protocolTitle: 'Quy Chuẩn Đóng Gói Xuất Khẩu',
      protocolDesc:
        'Quy trình đóng gói tuân thủ các tiêu chuẩn hàng hải quốc tế, đảm bảo độ thông gió, kiểm soát độ ẩm và nhiệt độ lạnh tối ưu.',
      badgeVentilation: 'Thông Gió Tối Ưu',
      badgeTemperature: 'Kiểm Soát Nhiệt Độ Lạnh',
      badgePalletized: 'Xếp Pallet Chuyên Nghiệp',
      ctaTitle: 'Trao Đổi Về Quy Cách Đóng Gói Cho Thị Trường Của Bạn',
      ctaDesc:
        'Liên hệ chúng tôi để yêu cầu kích thước thùng, trọng lượng tịnh và phương thức đóng hàng container.',
    },
    quality: {
      subtitle: 'Cam Kết Chất Lượng',
      title: 'Kiểm Soát Chất Lượng & Tiêu Chuẩn Xuất Khẩu',
      description:
        'Quy trình kiểm định khắt khe và phân loại chi tiết nhằm cung cấp nông sản chất lượng ổn định đến các thị trường quốc tế.',
      p1Title: 'Phân Loại & Chọn Lọc Nghiêm Ngặt',
      p1Desc:
        'Nông sản được tuyển chọn theo chiều dài, màu sắc đồng nhất và độ hoàn hảo không tì vết.',
      p2Title: 'Xử Lý Nhiệt Độ Sau Thu Hoạch',
      p2Desc:
        'Làm mát ngay sau khi thu hoạch và duy trì chuỗi bảo quản lạnh liên tục để kéo dài độ tươi ngon.',
      p3Title: 'Kích Cỡ Đồng Nhất Theo Lô',
      p3Desc:
        'Tuân thủ nghiêm ngặt bảng kích cỡ chuẩn (theo mm và cm) giúp người mua nhận hàng đồng đều.',
      p4Title: 'Quy Trình Xử Lý Đạt Chuẩn Vệ Sinh',
      p4Desc:
        'Thao tác và đóng gói trong môi trường sạch sẽ, đáp ứng đầy đủ yêu cầu kiểm dịch thực vật quốc tế.',
      workflowTag: 'Chất Lượng Đồng Đều',
      workflowTitle: 'Quy Trình Kiểm Tra 3 Bước',
      workflowDesc:
        'Từ thu hoạch tại nông trại đến phân loại kích thước, đóng thùng và đưa vào container, mỗi lô hàng đều được kiểm nghiệm kỹ.',
      stepSource: 'Kiểm Tra Nguồn Gốc',
      stepCheck: 'Đo Kích Cỡ & Phân Hạng',
      stepDispatch: 'Kiểm Tra Trước Khi Xuất Cảng',
      ctaTitle: 'Bạn Cần Tiêu Chuẩn Kiểm Dịch Thực Vật Đặc Biệt?',
      ctaDesc:
        'Hãy gửi các yêu cầu kỹ thuật và quy định nhập khẩu của nước bạn đến bàn tiếp nhận xuất khẩu của chúng tôi.',
    },
    contact: {
      subtitle: 'Liên Hệ Hợp Tác',
      title: 'Bàn Tiếp Nhận Yêu Cầu Xuất Khẩu',
      description:
        'Gửi cho chúng tôi yêu cầu sản phẩm, khối lượng container và cảng đến mong muốn.',
      corporateOffice: 'Văn Phòng Giao Dịch Xuất Khẩu',
      brandTag: 'NHẬP KHẨU | XUẤT KHẨU',
      shortDesc: 'Nhà cung cấp và xuất khẩu nông sản quốc tế.',
      regAddress: 'Địa Chỉ Đăng Ký',
      phoneWhatsApp: 'Điện Thoại / WhatsApp',
      officialEmail: 'Email Xuất Khẩu Chính Thức',
      globalTradeTitle: 'Nghiệp Vụ Thương Mại Quốc Tế',
      globalTradeDesc:
        'Các yêu cầu sẽ được bộ phận chứng từ và xuất khẩu phản hồi nhanh chóng. Vui lòng nêu rõ loại sản phẩm, kích cỡ và cảng đích.',
      formTitle: 'Phiếu Yêu Cầu Báo Giá Xuất Khẩu',
      inquiryRecorded: 'Đã Gửi Thành Công',
      inquiryRecordedDesc:
        'Cảm ơn bạn. Chúng tôi đã nhận được yêu cầu và chuyên viên xuất khẩu sẽ liên hệ lại với bạn sớm nhất.',
      sendAnother: 'Gửi yêu cầu khác',
      nameLabel: 'Tên Của Bạn / Công Ty',
      namePlaceholder: 'Tên nhà nhập khẩu hoặc doanh nghiệp',
      emailLabel: 'Địa Chỉ Email',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'Sản Phẩm Quan Tâm',
      destLabel: 'Quốc Gia / Cảng Đến',
      destPlaceholder: 'Ví dụ: Cảng Cát Lái, Hải Phòng / Singapore / Dubai',
      notesLabel: 'Khối Lượng & Yêu Cầu Đóng Gói',
      notesPlaceholder:
        'Nêu rõ số lượng container, quy cách đóng gói, thời gian giao hàng mong muốn...',
      submitBtn: 'Gửi Yêu Cầu Báo Giá',
      demoNote: 'Ghi chú: Yêu cầu của bạn sẽ được chuyển thẳng đến bộ phận xuất khẩu.',
    },
    cta: {
      badge: 'Thương Mại Nông Sản Quốc Tế',
      title: 'Bạn Muốn Tìm Nguồn Cung Ứng Nông Sản Đạt Chuẩn Xuất Khẩu?',
      description:
        'Kết nối với Brahma Chaitanya Global để nhận báo giá, tư vấn quy cách đóng gói và phương án vận chuyển container tối ưu.',
      enquireNow: 'Nhận Báo Giá Ngay',
      viewProducts: 'Xem Toàn Bộ Sản Phẩm',
    },
    footer: {
      description:
        'Nhà xuất khẩu nông sản đáng tin cậy, cam kết chất lượng ổn định và quy trình thương mại quốc tế chuyên nghiệp.',
      globalExportBadge: 'Xuất Khẩu Nông Sản Toàn Cầu',
      quickLinks: 'Liên Kết Nhanh',
      productsHeading: 'Sản Phẩm',
      contactHeading: 'Liên Hệ Xuất Khẩu',
      addressLabel: 'Địa Chỉ',
      telephoneLabel: 'Điện Thoại',
      emailLabel: 'Email',
      copyright: 'Brahma Chaitanya Global',
      allRightsReserved: 'Bảo lưu mọi quyền.',
      showcaseLabel: 'Cổng Trưng Bày Sản Phẩm Xuất Khẩu',
    },
    floating: {
      enquireNow: 'Báo Giá',
    },
  },
  ne: {
    nav: {
      brandName: 'ब्रह्मा चैतन्य',
      brandTag: 'ग्लोबल',
      importExport: 'आयात | निर्यात',
      subTag: 'कृषि उत्पादन आपूर्तिकर्ता तथा निर्यातकर्ता',
      home: 'गृहपृष्ठ',
      about: 'हाम्रो बारेमा',
      products: 'उत्पादनहरू',
      packaging: 'प्याकेजिङ',
      quality: 'गुणस्तर',
      contact: 'सम्पर्क',
      enquireNow: 'सोधपुछ गर्नुहोस्',
      toggleMenu: 'मेनु खोल्नुहोस्',
    },
    home: {
      heroTitle: 'गुणस्तरीय कृषि उत्पादनहरूको विश्वव्यापी निर्यातकर्ता',
      heroSubtitle: 'ब्रह्मा चैतन्य ग्लोबल • आयात | निर्यात',
      heroDescription:
        'विश्वव्यापी थोक बजार तथा अन्तर्राष्ट्रिय खरीददारहरूका लागि ताजा हरियो खुर्सानी, प्याज, आलु, टमाटर र जैविक पाउडर सहित प्रिमियम कृषि उत्पादनहरूको आपूर्ति।',
      exploreProducts: 'उत्पादनहरू हेर्नुहोस्',
      enquireForExport: 'निर्यातका लागि सोधपुछ',
      trustGrading: 'निर्यात मानक ग्रेडिङ',
      trustGlobal: 'विश्वव्यापी आपूर्ति शृङ्खला',
      trustBulk: 'थोक तथा व्यावसायिक अर्डरहरू',
      portfolioSubtitle: 'हाम्रो पोर्टफोलियो',
      portfolioTitle: 'कृषि निर्यात उत्पादनहरू',
      portfolioDesc:
        'कडा गुणस्तर वर्गीकरणका साथ अन्तर्राष्ट्रिय बजारका लागि आपूर्ति गरिने ताजा उत्पादन र जैविक पाउडरको विस्तृत श्रृंखला।',
    },
    about: {
      subtitle: 'हाम्रो बारेमा',
      title: 'ब्रह्मा चैतन्य ग्लोबल',
      description:
        'विश्वव्यापी मागलाई भरपर्दो कृषि आपूर्ति शृङ्खलासँग जोड्न समर्पित कृषि उत्पादन आपूर्तिकर्ता र निर्यातकर्ता।',
      introTitle: 'अन्तर्राष्ट्रिय आयात र निर्यात समाधान',
      p1: 'ब्रह्मा चैतन्य ग्लोबलले ताजा हरियो खुर्सानी, प्याज, आलु, टमाटर र मोरिंगा तथा च्याउको पाउडर जस्ता विशेष कृषि उत्पादनहरूको आपूर्ति र निर्यातमा कार्य गर्दछ।',
      p2: 'हाम्रो सञ्चालन विदेशी आयातकर्ता र थोक वितरकहरूको आवश्यकता पूरा गर्न निरन्तर ग्रेडिङ, निर्यात प्याकेजिङ र पारदर्शी व्यापार अभ्यासहरूमा केन्द्रित छ।',
      bullet1: 'विश्वसनीय खरिद र निर्यात-उन्मुख गुणस्तर छनोट',
      bullet2: 'गन्तव्य देशको मापदण्ड अनुसार अनुकूलित निर्यात प्याकिङ समाधान',
      bullet3: 'थोक अर्डर र ढुवानीका लागि समर्पित ग्राहक सञ्चार',
      cardBadge: 'कम्पनी परिचय',
      cardTitle: 'गुणस्तर र दीर्घकालीन साझेदारीका लागि प्रतिबद्ध',
      cardDesc:
        'कृषि निर्यातकर्ताको रूपमा, हाम्रो लक्ष्य उत्पादनहरू उत्कृष्ट अवस्थामा विश्व बजारमा पुग्ने कुरा सुनिश्चित गर्नु हो। प्रत्येक ब्याचको व्यवस्थित निरीक्षण गरिन्छ।',
      tradeScopeLabel: 'व्यापार दायरा',
      tradeScopeVal: 'आयात र निर्यात',
      sectorLabel: 'क्षेत्र',
      sectorVal: 'कृषि आपूर्ति',
    },
    products: {
      subtitle: 'पूर्ण क्याटलग',
      title: 'कृषि निर्यात उत्पादनहरू',
      description:
        'अन्तर्राष्ट्रिय निर्यात मापदण्ड अनुसार तयार गरिएका ताजा तरकारी र जैविक निर्जलित पाउडरहरूको हाम्रो श्रृंखला हेर्नुहोस्।',
      customCtaTitle: 'अनुकूलित निर्यात विनिर्देश वा ठूलो परिमाण चाहिन्छ?',
      customCtaDesc:
        'हामी अन्तर्राष्ट्रिय थोक खरीददारहरूका लागि विशेष ग्रेडिङ, आकार वर्गीकरण र निजी लेबल प्याकेजिङ उपलब्ध गराउँछौं।',
      exportGrade: 'निर्यात ग्रेड',
      availableForExport: 'निर्यातका लागि उपलब्ध',
      viewSpecs: 'विवरण हेर्नुहोस्',
      exportVarietyLabel: 'प्रजाति',
      exportVarietiesLabel: 'प्रजातिहरू',
      exportSpecLabel: 'निर्यात विनिर्देश',
      backToProducts: 'सबै उत्पादनहरूमा फर्कनुहोस्',
      bulkInquiryTitle: 'थोक तथा अन्तर्राष्ट्रिय सोधपुछ',
      bulkInquiryDesc:
        'निर्यात प्याकेजिङ विकल्प, ग्रेडिङ पाना र ढुवानी तालिकाको लागि अनुरोध गर्नुहोस्।',
      varietiesHeading: 'निर्यात प्रजाति र बजार प्रकारहरू',
      sizesHeading: 'साइज वर्गीकरण',
      applicationsHeading: 'उपयोगिता',
      packagingHeading: 'प्याकेजिङ विवरण',
      inquireAboutTitle: 'निर्यातका लागि सोधपुछ गर्नुहोस्',
      inquireAboutDesc:
        'मूल्य सूची, न्यूनतम अर्डर परिमाण र प्याकेजिङ विनिर्देशहरूको लागि हाम्रो निर्यात शाखामा सम्पर्क गर्नुहोस्:',
    },
    packaging: {
      subtitle: 'संरक्षण र ढुवानी',
      title: 'निर्यात प्याकेजिङ प्रदर्शन',
      description:
        'खेतको जस्तै ताजगी, स्वच्छता र ढुवानी सुरक्षा सुनिश्चित गर्न तयार गरिएको विशेष निर्यात प्याकेजिङ।',
      s1Title: 'बलियो निर्यात कार्टन बक्स',
      s1Category: 'ताजा तरकारी तथा कृषि उपज',
      s1Desc:
        'अन्तर्राष्ट्रिय ढुवानीको चाप थेग्न र ताजगी कायम राख्न विशेष ३-प्लाई र ५-प्लाई हावा छिर्ने कार्टन बक्सहरू।',
      s2Title: 'नेट / जालीदार झोला (Mesh Bags)',
      s2Category: 'थोक तरकारी (प्याज र आलु)',
      s2Desc:
        'कन्दमूल तरकारीका लागि हावा आवतजावत हुने उत्कृष्ट जालीदार झोलाहरू।',
      s3Title: 'भ्याकुम सिल गरिएका फुड-ग्रेड पाउचहरू',
      s3Category: 'जैविक निर्जलित पाउडरहरू',
      s3Desc:
        'प्राकृतिक सुगन्ध, रङ र पोषण जोगाउने ओसिलो-प्रतिरोधी एल्युमिनियम वा बहु-तह पाउचहरू।',
      s4Title: 'अनुकूलित र निजी लेबल प्याकिङ',
      s4Category: 'विदेशी आयातकर्ता र थोक व्यापारीहरू',
      s4Desc:
        'आयातकर्ता देशको नियम अनुसार अनुकूलित प्याकेजिङ, कन्टेनर प्यालेटाइजेशन र लेबलिंग।',
      protocolTitle: 'निर्यात प्याकिङ प्रोटोकल',
      protocolDesc:
        'हाम्रो प्याकिङ अभ्यासहरूले अन्तर्राष्ट्रिय मालवाहक मापदण्डहरूको पालना गर्दछ, पर्याप्त भेन्टिलेसन र तापक्रम नियन्त्रण सुनिश्चित गर्दछ।',
      badgeVentilation: 'भेन्टिलेसन अनुकूलित',
      badgeTemperature: 'तापक्रम सुरक्षा नियन्त्रण',
      badgePalletized: 'प्यालेटाइज्ड ह्यान्डलिङ',
      ctaTitle: 'तपाईंको बजारको लागि अनुकूलित प्याकेजिङ छलफल गर्नुहोस्',
      ctaDesc:
        'बक्सको आकार, कन्टेनर प्याकिङ र ब्रान्डिङ आवश्यकताहरू निर्दिष्ट गर्न हाम्रो टोलीसँग सम्पर्क गर्नुहोस्।',
    },
    quality: {
      subtitle: 'गुणस्तरमा प्रतिबद्धता',
      title: 'गुणस्तर आश्वासन र निर्यात मापदण्ड',
      description:
        'विश्वभर भरपर्दो कृषि उत्पादनहरू पुर्‍याउन कडा गुणस्तर नियन्त्रण र सावधानीपूर्वक ग्रेडिङ प्रोटोकलको पालना।',
      p1Title: 'कडा छनोट र ग्रेडिङ',
      p1Desc:
        'उत्पादनको लम्बाइ, रङको एकरूपता र त्रुटिरहित अवस्था अनुसार छनोट गरिन्छ।',
      p2Title: 'कटनी-पश्चात तापक्रम नियन्त्रण',
      p2Desc:
        'ढुवानी अवधि लम्ब्याउन कटनी लगत्तै चिसो बनाउने र नियन्त्रित तापक्रम शृङ्खला कायम राख्ने।',
      p3Title: 'एकरूप ब्याच साइज',
      p3Desc:
        'खरीददारहरूले एकसमान लट पाउन साइज वर्गीकरणको कडा पालना गरिन्छ।',
      p4Title: 'स्वच्छ निर्यात ह्यान्डलिङ',
      p4Desc:
        'गन्तव्य देशको फाइटोस्यानिटरी नियमहरू अनुरूप स्वच्छ वातावरणमा ह्यान्डलिङ र कार्टन प्याकिङ।',
      workflowTag: 'निर्यात निरन्तरता',
      workflowTitle: 'हाम्रो निरीक्षण कार्यप्रणाली',
      workflowDesc:
        'खेत खरिददेखि छनोट, साइज वर्गीकरण, कार्टन प्याकिङ र कन्टेनर लोडिङसम्म प्रत्येक ब्याचको परीक्षण गरिन्छ।',
      stepSource: 'स्रोत प्रमाणीकरण',
      stepCheck: 'ग्रेड र साइज जाँच',
      stepDispatch: 'ढुवानी-पूर्व निरीक्षण',
      ctaTitle: 'विशेष गुणस्तर वा फाइटोस्यानिटरी मापदण्ड चाहिन्छ?',
      ctaDesc:
        'तपाईंको गन्तव्य देशको आवश्यकता र मापदण्डका लागि हाम्रो निर्यात डेस्कमा सम्पर्क गर्नुहोस्।',
    },
    contact: {
      subtitle: 'सम्पर्क गर्नुहोस्',
      title: 'निर्यात सोधपुछ तथा सम्पर्क कक्ष',
      description:
        'आफ्ना उत्पादन सोधपुछ, निर्यात परिमाण आवश्यकता र गन्तव्य बन्दरगाहको विवरण हामीलाई पठाउनुहोस्।',
      corporateOffice: 'कर्पोरेट कार्यालय',
      brandTag: 'आयात | निर्यात',
      shortDesc: 'कृषि उत्पादन आपूर्तिकर्ता तथा अन्तर्राष्ट्रिय निर्यातकर्ता।',
      regAddress: 'दर्ता गरिएको ठेगाना',
      phoneWhatsApp: 'टेलिफोन / ह्वाट्सएप',
      officialEmail: 'आधिकारिक निर्यात इमेल',
      globalTradeTitle: 'विश्वव्यापी व्यापार सञ्चालन',
      globalTradeDesc:
        'सोधपुछहरू हाम्रो निर्यात कागजात र ढुवानी विभागद्वारा प्रशोधन गरिन्छ। कृपया उत्पादन प्रकार र गन्तव्य बन्दरगाह समावेश गर्नुहोस्।',
      formTitle: 'निर्यात सोधपुछ फारम',
      inquiryRecorded: 'सोधपुछ दर्ता भयो',
      inquiryRecordedDesc:
        'धन्यवाद। हामीले तपाईंको निर्यात सोधपुछ प्राप्त गरेका छौं र छिट्टै सम्पर्क गर्नेछौं।',
      sendAnother: 'अर्को सोधपुछ पठाउनुहोस्',
      nameLabel: 'तपाईंको नाम / कम्पनी',
      namePlaceholder: 'आयातकर्ता वा कम्पनीको नाम',
      emailLabel: 'इमेल ठेगाना',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'इच्छित उत्पादन',
      destLabel: 'गन्तव्य देश / बन्दरगाह',
      destPlaceholder: 'उदा. काठमाडौं / दुबई / सिंगापुर',
      notesLabel: 'आवश्यक परिमाण र प्याकेजिङ विवरण',
      notesPlaceholder:
        'परिमाण, कन्टेनर साइज वा प्याकेजिङ प्राथमिकताहरू खुलाउनुहोस्...',
      submitBtn: 'सोधपुछ पठाउनुहोस्',
      demoNote: 'नोट: यो फारम सिधै हाम्रो निर्यात विभागमा पठाइनेछ।',
    },
    cta: {
      badge: 'अन्तर्राष्ट्रिय व्यापार तथा आपूर्ति',
      title: 'विश्वव्यापी निर्यातका लागि कृषि उत्पादनहरू खोज्दै हुनुहुन्छ?',
      description:
        'निर्यात विनिर्देश, प्याकेजिङ विकल्प र कन्टेनर ढुवानीबारे छलफल गर्न ब्रह्मा चैतन्य ग्लोबलसँग जोडिनुहोस्।',
      enquireNow: 'सोधपुछ गर्नुहोस्',
      viewProducts: 'सबै उत्पादनहरू हेर्नुहोस्',
    },
    footer: {
      description:
        'विश्वसनीयता, लगातार ग्रेडिङ र विश्व व्यापार मापदण्डहरूमा समर्पित कृषि उत्पादन आपूर्तिकर्ता र अन्तर्राष्ट्रिय निर्यातकर्ता।',
      globalExportBadge: 'विश्वव्यापी कृषि निर्यात',
      quickLinks: 'महत्त्वपूर्ण लिङ्कहरू',
      productsHeading: 'उत्पादनहरू',
      contactHeading: 'निर्यात सम्पर्क',
      addressLabel: 'ठेगाना',
      telephoneLabel: 'टेलिफोन',
      emailLabel: 'इमेल',
      copyright: 'ब्रह्मा चैतन्य ग्लोबल',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      showcaseLabel: 'उत्पादन प्रदर्शन वेबसाइट',
    },
    floating: {
      enquireNow: 'सोधपुछ गर्नुहोस्',
    },
  },
  si: {
    nav: {
      brandName: 'බ්‍රහ්ම චෛතන්‍ය',
      brandTag: 'ග්ලෝබල්',
      importExport: 'ආනයන | අපනයන',
      subTag: 'කෘෂිකාර්මික නිෂ්පාදන සැපයුම්කරු සහ අපනයනකරු',
      home: 'මුල් පිටුව',
      about: 'අප ගැන',
      products: 'නිෂ්පාදන',
      packaging: 'ඇසුරුම්කරණය',
      quality: 'ගුණාත්මකභාවය',
      contact: 'සම්බන්ධ වන්න',
      enquireNow: 'විමසන්න',
      toggleMenu: 'මෙනුව',
    },
    home: {
      heroTitle: 'උසස් තත්ත්වයේ කෘෂි නිෂ්පාදන ගෝලීය අපනයනකරු',
      heroSubtitle: 'බ්‍රහ්ම චෛතන්‍ය ග්ලෝබල් • ආනයන | අපනයන',
      heroDescription:
        'නැවුම් අමු මිරිස්, ළුණු, අල, තක්කාලි සහ කාබනික කුඩු ඇතුළු උසස් තත්ත්වයේ කෘෂි නිෂ්පාදන ගෝලීය තොග වෙළඳපොළට සහ විදේශීය ගැනුම්කරුවන්ට සැපයීම.',
      exploreProducts: 'නිෂ්පාදන ගවේෂණය කරන්න',
      enquireForExport: 'අපනයන විමසීම්',
      trustGrading: 'අපනයන ප්‍රමිති ශ්‍රේණිගත කිරීම',
      trustGlobal: 'ගෝලීය සැපයුම් දාමය',
      trustBulk: 'තොග සහ වාණිජ ඇණවුම්',
      portfolioSubtitle: 'අපගේ නිෂ්පාදන පෙළ',
      portfolioTitle: 'අපනයන කෘෂි නිෂ්පාදන',
      portfolioDesc:
        'දැඩි තත්ත්ව පාලනයක් සහිතව ජාත්‍යන්තර වෙළඳපොළ සඳහා සපයනු ලබන නැවුම් එළවළු සහ කාබනික කුඩු වර්ග.',
    },
    about: {
      subtitle: 'අප ගැන',
      title: 'බ්‍රහ්ම චෛතන්‍ය ග්ලෝබල්',
      description:
        'ගෝලීය ඉල්ලුම විශ්වාසදායක කෘෂි සැපයුම් දාමයක් සමඟ සම්බන්ධ කරන ප්‍රමුඛ පෙළේ කෘෂි සැපයුම්කරු සහ අපනයනකරු.',
      introTitle: 'ජාත්‍යන්තර ආනයන සහ අපනයන විසඳුම්',
      p1: 'බ්‍රහ්ම චෛතන්‍ය ග්ලෝබල් හරිත අමු මිරිස්, ළුණු, අල, තක්කාලි සහ මුරුංගා කොළ කුඩු, බිම්මල් කුඩු වැනි විශේෂිත කෘෂි නිෂ්පාදන සැපයීම සහ අපනයනය කිරීම සිදු කරයි.',
      p2: 'අපගේ මෙහෙයුම් මඟින් විදේශීය ගැනුම්කරුවන්ගේ අවශ්‍යතා අනුව නිසි ශ්‍රේණිගත කිරීම, අපනයන ඇසුරුම්කරණය සහ විනිවිදභාවයෙන් යුත් වෙළඳාම සහතික කරයි.',
      bullet1: 'විශ්වාසදායක ගොවිපළ ප්‍රසම්පාදනය සහ අපනයන තත්ත්ව වර්ගීකරණය',
      bullet2: 'ගමනාන්ත රටේ නීති රෙගුලාසි අනුව සකස් කළ ඇසුරුම් විසඳුම්',
      bullet3: 'විශාල බහාලුම් ඇණවුම් සඳහා කැපවූ පාරිභෝගික සේවාව',
      cardBadge: 'ආයතනික දළ විශ්ලේෂණය',
      cardTitle: 'ගුණාත්මකභාවය සහ දිගුකාලීන හවුල්කාරිත්වය',
      cardDesc:
        'කෘෂිකාර්මික අපනයනකරුවෙකු ලෙස අපගේ ඉලක්කය වන්නේ නිසි උෂ්ණත්ව පාලනය යටතේ නැවුම් ගුණාත්මක බවින් නිෂ්පාදන ලෝක වෙළඳපොළට ලබා දීමයි.',
      tradeScopeLabel: 'වෙළඳ විෂය පථය',
      tradeScopeVal: 'ආනයන සහ අපනයන',
      sectorLabel: 'අංශය',
      sectorVal: 'කෘෂිකාර්මික සැපයුම',
    },
    products: {
      subtitle: 'සම්පූර්ණ නාමාවලිය',
      title: 'අපනයන කෘෂි නිෂ්පාදන',
      description:
        'ජාත්‍යන්තර ප්‍රමිතීන්ට අනුව සකස් කරන ලද නැවුම් එළවළු සහ කාබනික කුඩු වර්ග පරීක්ෂා කරන්න.',
      customCtaTitle: 'විශේෂිත අපනයන අවශ්‍යතා හෝ විශාල තොග අවශ්‍යද?',
      customCtaDesc:
        'අපි ජාත්‍යන්තර තොග ගැනුම්කරුවන් සඳහා විශේෂ ශ්‍රේණිගත කිරීම්, ප්‍රමාණ වර්ගීකරණය සහ පුද්ගලික ලේබල් ඇසුරුම් සපයන්නෙමු.',
      exportGrade: 'අපනයන ශ්‍රේණිය',
      availableForExport: 'අපනයනය සඳහා සූදානම්',
      viewSpecs: 'විස්තර බලන්න',
      exportVarietyLabel: 'ප්‍රභේදය',
      exportVarietiesLabel: 'ප්‍රභේද',
      exportSpecLabel: 'අපනයන පිරිවිතර',
      backToProducts: 'නැවත නිෂ්පාදන වෙත',
      bulkInquiryTitle: 'තොග සහ බහාලුම් විමසීම්',
      bulkInquiryDesc:
        'අපනයන ඇසුරුම් විකල්ප, ශ්‍රේණිගත කිරීමේ පත්‍රිකා සහ නැව්ගත කිරීමේ කාලසටහන් විමසන්න.',
      varietiesHeading: 'අපනයන ප්‍රභේද සහ වෙළඳපොළ වර්ග',
      sizesHeading: 'ප්‍රමාණ වර්ගීකරණය',
      applicationsHeading: 'භාවිතයන්',
      packagingHeading: 'ඇසුරුම් විස්තර',
      inquireAboutTitle: 'අපනයනය සඳහා විමසන්න',
      inquireAboutDesc:
        'මිල ගණන්, අවම ඇණවුම් ප්‍රමාණයන් සහ ඇසුරුම් තොරතුරු සඳහා අපගේ අපනයන අංශය අමතන්න:',
    },
    packaging: {
      subtitle: 'සංරක්ෂණය සහ ප්‍රවාහනය',
      title: 'අපනයන ඇසුරුම් ප්‍රදර්ශනය',
      description:
        'ගොවිපල නැවුම්බව, සනීපාරක්ෂාව සහ ජාත්‍යන්තර ප්‍රවාහන ආරක්ෂාව සහතික කිරීම සඳහා නිර්මාණය කළ ඇසුරුම්.',
      s1Title: 'ශක්තිමත් අපනයන කාටූන් පෙට්ටි (Corrugated)',
      s1Category: 'නැවුම් එළවළු සහ නිෂ්පාදන',
      s1Desc:
        'නැවුම් බව රැකගැනීමට සහ ජාත්‍යන්තර ප්‍රවාහන පීඩනයට ඔරොත්තු දෙන විශේෂ 3-ply සහ 5-ply වාතාශ්‍රය සහිත පෙට්ටි.',
      s2Title: 'දැල් මලු (Mesh Bags)',
      s2Category: 'තොග එළවළු (ළුණු සහ අල)',
      s2Desc:
        'නැව්ගත කිරීමේදී නිසි වායු සංසරණය ලබා දෙන ශක්තිමත් දැල් මලු.',
      s3Title: 'රික්තක මුද්‍රා තැබූ ආහාර ශ්‍රේණියේ පැකට් (Vacuum Pouches)',
      s3Category: 'කාබනික වියළි කුඩු',
      s3Desc:
        'ස්වාභාවික සුවඳ, වර්ණය සහ පෝෂණය ආරක්ෂා කරන තෙතමනය-ප්‍රතිරෝධී බහු ස්ථර පැකට්.',
      s4Title: 'පාරිභෝගික රුචිකත්ව ඇසුරුම් සහ ලේබල්',
      s4Category: 'විදේශීය ආනයනකරුවන් සහ තොග වෙළඳුන්',
      s4Desc:
        'ආනයන රටේ නීතිරීතිවලට අනුකූලව සකස් කරන ලද ඇසුරුම් සහ පැලටයිස් කිරීම (Palletization).',
      protocolTitle: 'අපනයන ඇසුරුම් ප්‍රොටෝකෝලය',
      protocolDesc:
        'අපගේ ඇසුරුම් පිළිවෙත් ජාත්‍යන්තර නැව් ප්‍රමිතීන්ට අනුකූල වන අතර නිසි වාතාශ්‍රය සහ උෂ්ණත්ව පාලනය තහවුරු කරයි.',
      badgeVentilation: 'ප්‍රශස්ත වාතාශ්‍රය',
      badgeTemperature: 'උෂ්ණත්ව පාලනය',
      badgePalletized: 'පැලටයිස් කළ හැසිරවීම (Palletized)',
      ctaTitle: 'ඔබගේ වෙළඳපොළ සඳහා ඇසුරුම් සාකච්ඡා කරන්න',
      ctaDesc:
        'පෙට්ටි ප්‍රමාණයන් සහ බහාලුම් අවශ්‍යතා සාකච්ඡා කිරීමට අපගේ කණ්ඩායම අමතන්න.',
    },
    quality: {
      subtitle: 'ගුණාත්මකභාවය සඳහා කැපවීම',
      title: 'තත්ත්ව සහතිකය සහ අපනයන ප්‍රමිති',
      description:
        'ලොව පුරා විශ්වාසදායක කෘෂි නිෂ්පාදන ලබා දීම සඳහා දැඩි තත්ත්ව පාලනයක් සහ නිසි ශ්‍රේණිගත කිරීමේ පිළිවෙත්.',
      p1Title: 'දැඩි තෝරාගැනීම සහ ශ්‍රේණිගත කිරීම',
      p1Desc:
        'දිග, ඒකාකාරී වර්ණය සහ දෝෂ රහිතභාවය අනුව නිෂ්පාදන ප්‍රවේශමෙන් වර්ග කෙරේ.',
      p2Title: 'අස්වනු නෙලීමෙන් පසු උෂ්ණත්ව පාලනය',
      p2Desc:
        'කල් තබා ගැනීමේ කාලය උපරිම කිරීම සඳහා වහාම සිසිල් කිරීම සහ පාලිත උෂ්ණත්ව දාමයක් පවත්වා ගැනීම.',
      p3Title: 'ඒකාකාරී කාණ්ඩ ප්‍රමාණය',
      p3Desc:
        'ගැණුම්කරුවන්ට එකම ප්‍රමිතියකින් යුත් තොග ලැබෙන බව සහතික කිරීමට ප්‍රමාණ වර්ගීකරණය දැඩිව පිළිපැදීම.',
      p4Title: 'සනීපාරක්ෂක අපනයන හැසිරවීම',
      p4Desc:
        'ගමනාන්ත රටේ ශාක සනීපාරක්ෂක රෙගුලාසිවලට අනුකූලව පිරිසිදු තත්ත්වයන් යටතේ හැසිරවීම සහ ඇසුරුම් කිරීම.',
      workflowTag: 'අපනයන අඛණ්ඩතාව',
      workflowTitle: 'අපගේ පරීක්ෂණ ක්‍රියාවලිය',
      workflowDesc:
        'ගොවිපලෙන් ලබා ගැනීමේ සිට තේරීම, කාටූන් ඇසුරුම් කිරීම සහ බහාලුම් පැටවීම දක්වා සෑම කාණ්ඩයක්ම තහවුරු කෙරේ.',
      stepSource: 'මූලාශ්‍ර සත්‍යාපනය',
      stepCheck: 'ශ්‍රේණිය සහ ප්‍රමාණය පරීක්ෂා කිරීම',
      stepDispatch: 'නැව්ගත කිරීමට පෙර අවසන් පරීක්ෂාව',
      ctaTitle: 'විශේෂිත තත්ත්ව හෝ ශාක සනීපාරක්ෂක ප්‍රමිතීන් අවශ්‍යද?',
      ctaDesc:
        'ඔබේ රටේ අවශ්‍යතා සහ නියාමන අනුකූලතා සමඟ අපගේ අපනයන අංශය අමතන්න.',
    },
    contact: {
      subtitle: 'සම්බන්ධ වන්න',
      title: 'අපනයන විමසීම් සහ සේවා කවුළුව',
      description:
        'ඔබේ නිෂ්පාදන විමසීම්, අවශ්‍ය ප්‍රමාණයන් සහ ගමනාන්ත වරාය විස්තර අප වෙත එවන්න.',
      corporateOffice: 'ප්‍රධාන කාර්යාලය',
      brandTag: 'ආනයන | අපනයන',
      shortDesc: 'කෘෂිකාර්මික නිෂ්පාදන සැපයුම්කරු සහ ජාත්‍යන්තර අපනයනකරු.',
      regAddress: 'ලියාපදිංචි ලිපිනය',
      phoneWhatsApp: 'දුරකථන / WhatsApp',
      officialEmail: 'නිල අපනයන විද්‍යුත් තැපෑල',
      globalTradeTitle: 'ගෝලීය වෙළඳ මෙහෙයුම්',
      globalTradeDesc:
        'සියලු විමසීම් අපගේ අපනයන ලියකියවිලි අංශය මඟින් සලකා බලනු ලැබේ. කරුණාකර නිෂ්පාදන වර්ගය සහ වරාය සඳහන් කරන්න.',
      formTitle: 'අපනයන විමසීම් පෝරමය',
      inquiryRecorded: 'විමසීම වාර්තා විය',
      inquiryRecordedDesc:
        'ස්තූතියි. ඔබගේ විමසීම ලැබී ඇති අතර අපගේ කණ්ඩායම ඉක්මනින් ඔබ හා සම්බන්ධ වනු ඇත.',
      sendAnother: 'වෙනත් විමසීමක් යවන්න',
      nameLabel: 'ඔබේ නම / සමාගම',
      namePlaceholder: 'ආනයනකරු හෝ සමාගමේ නම',
      emailLabel: 'විද්‍යුත් තැපැල් ලිපිනය',
      emailPlaceholder: 'buyer@example.com',
      productLabel: 'අවශ්‍ය නිෂ්පාදනය',
      destLabel: 'ගමනාන්ත රට / වරාය',
      destPlaceholder: 'උදා: කොළඹ වරාය / ඩුබායි / සිංගප්පූරුව',
      notesLabel: 'අවශ්‍ය ප්‍රමාණය සහ ඇසුරුම් සටහන්',
      notesPlaceholder:
        'බහාලුම් ප්‍රමාණය, බෙදාහැරීමේ කාලසටහන හෝ ඇසුරුම් අවශ්‍යතා සඳහන් කරන්න...',
      submitBtn: 'විමසීම යොමු කරන්න',
      demoNote: 'සටහන: මෙම පෝරමය සෘජුවම අපගේ අපනයන අංශය වෙත යොමු කෙරේ.',
    },
    cta: {
      badge: 'ජාත්‍යන්තර වෙළඳාම සහ සැපයුම',
      title: 'ගෝලීය අපනයනය සඳහා උසස් කෘෂි නිෂ්පාදන සොයන්නේද?',
      description:
        'අපනයන පිරිවිතර, ඇසුරුම් විකල්ප සහ බහාලුම් ප්‍රවාහනය සාකච්ඡා කිරීමට බ්‍රහ්ම චෛතන්‍ය ග්ලෝබල් හා එක්වන්න.',
      enquireNow: 'දැන් විමසන්න',
      viewProducts: 'සියලුම නිෂ්පාදන බලන්න',
    },
    footer: {
      description:
        'විශ්වාසදායක බව, ස්ථාවර ශ්‍රේණිගත කිරීම සහ ගෝලීය වෙළඳ ප්‍රමිතීන්ට කැපවූ කෘෂිකාර්මික නිෂ්පාදන සැපයුම්කරු සහ අපනයනකරු.',
      globalExportBadge: 'ගෝලීය කෘෂි අපනයනය',
      quickLinks: 'ක්ෂණික සබැඳි',
      productsHeading: 'නිෂ්පාදන',
      contactHeading: 'අපනයන සම්බන්ධතා',
      addressLabel: 'ලිපිනය',
      telephoneLabel: 'දුරකථනය',
      emailLabel: 'විද්‍යුත් තැපෑල',
      copyright: 'බ්‍රහ්ම චෛතන්‍ය ග්ලෝබල්',
      allRightsReserved: 'සියලුම හිමිකම් ඇවිරිණි.',
      showcaseLabel: 'නිෂ්පාදන ප්‍රදර්ශන වෙබ් අඩවිය',
    },
    floating: {
      enquireNow: 'විමසන්න',
    },
  },
};
