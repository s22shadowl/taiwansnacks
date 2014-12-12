function myCtrl() {
   this.model = [
     
    {id:0, Chinese:'空心菜', English:'Water Spinach', Japenses:'ほうれん草', Tells:'蕹菜以嫩莖、葉炒食或作湯，為夏秋高溫季節主要菜之一。一般家庭或熱炒店炒空心菜，通常以蒜頭或鹽，醬油進行調味，偶爾加入牛肉。若以豬油炒風味更佳。而椒絲腐乳通菜在廣東、香港和澳門等地區十分流行。',
     img:'http://www.nsseed.com/images/yc/bglykxc-d.jpg', imgSrc:'http://tc.wangchao.net.cn/baike/detail_1546.html'},
     
    {id:1, Chinese:'高麗菜', English:'Cabbage', Japenses:'キャベツ',Tells:'捲心菜營養相當豐富，含有大量維生素C、纖維素、碳水化合物和各種礦物質。除此以外捲心菜還含有維生素U。高麗菜中含有的蘿蔔硫素，則是功能強大的抗氧化物，可以增強體內酵素的解毒能力，也是維生素C和纖維的良好來源。',
     img:'http://ext.pimg.tw/moongenie/4a4ef8009fc44.jpg',imgSrc: 'http://www.techbang.com/posts/11680-guan-yus-second-element-style-grand-parody-of-serious-ladies-should-have'},
     
    {id:2, Chinese:'地瓜葉',  English:'Sweet potato leaves', Japenses:'キャベツ',Tells:'瓜葉、甘藷葉，是旋花科番薯屬植物番薯的葉，可作為蔬菜食用。亦有農民只摘取嫩葉部分炒熟吃，或加入蒜末，再加一些食鹽食用。番薯葉營養豐富，蛋白質、胡蘿蔔素、鈣、磷、鐵、維生素C等含量均比菠菜、韭菜等常見蔬菜來得高，有助抗氧化，因而也成為現代人心目中的健康蔬菜。',
     
     img:'http://tweb.ssps.tp.edu.tw/organization/aao/vegetable/Images/%E5%9C%B0%E7%93%9C%E8%91%89.jpg',imgSrc:'http://news.ifeng.com/history/zhongguogudaishi/detail_2012_01/13/11953125_0.shtml?_from_ralated'},
     
    {id:3, Chinese:'地瓜', English:'Sweet potato', Japenses:'キャベツ',Tells:'番薯基本上加熱即可食用，也可曬製成乾；種植在山丘、高原等土地偏乾燥地區的番薯會因為乾燥原因沉澱澱粉而很甜。地瓜皮含豐富的黏液蛋白等多醣類物質，能降低血液中的膽固醇、保持血管彈性，預防血管硬化及高血壓等心血管疾病。',
     img:'http://9.blog.xuite.net/9/1/c/f/14511915/blog_1223544/txt/26443502/21.jpg',imgSrc:'http://dreamyeh.pixnet.net/blog/post/24755460-%E8%AB%96%E7%9C%9F%E5%AF%A6%E6%AD%B7%E5%8F%B2%E4%B8%8A%E7%9A%84%E8%B6%99%E9%9B%B2(%E8%87%AA%E4%B8%89%E5%9C%8B%E5%BF%97%E8%B6%99%E9%9B%B2%E5%82%B3%E8%88%87%E8%B6%99%E9%9B%B2'},

    {id:4, Chinese:'地瓜球', English:'Sweet potato balls', Japenses:'サツマイモボール',Tells:'地瓜球，又叫做QQ蛋，是台灣小吃的一種。',
     img:'http://2.bp.blogspot.com/-IdWVymg5eGk/UH5SSwGcX6I/AAAAAAAACa0/sYtEulJ9qVQ/s640/IMG_9771.JPG',imgSrc:'http://dreamyeh.pixnet.net/blog/post/24755460-%E8%AB%96%E7%9C%9F%E5%AF%A6%E6%AD%B7%E5%8F%B2%E4%B8%8A%E7%9A%84%E8%B6%99%E9%9B%B2(%E8%87%AA%E4%B8%89%E5%9C%8B%E5%BF%97%E8%B6%99%E9%9B%B2%E5%82%B3%E8%88%87%E8%B6%99%E9%9B%B2'},    
  
    {id:5, Chinese:'菜脯蛋', English:' chopped preserved daikon omelet ', Japenses:'大根エッグ',Tells:'菜脯蛋是一道家常菜，流行於台灣、福建、廣東潮汕地區，在蛋上面加上菜脯炒成，有時也會加入一些蔥。菜脯蛋的「脯」常俗寫為「餔」，其實「脯」字才是正寫，「脯」的本意是肉乾，「菜脯」就是醃製過的蘿蔔乾，而閩南語習慣稱蘿蔔為「菜頭」，因此把醃蘿蔔乾稱為「菜脯」。',
     img:'http://2.bp.blogspot.com/_m_9UOW4l9JQ/TEhXvg0N8dI/AAAAAAAAAnY/pANhyhgobfs/s1600/%C3%A4%C2%B8%C2%BB%C3%A5%C5%93%E2%80%93.jpg ', },    
     
      {id:6, Chinese:'蔥油餅', English:' chopped preserved daikon omelet ', Japenses:'大根エッグ',Tells:'蔥油餅是一種由蔥花作成的煎餅，在華人社會街頭、夜市等地方可見，常作為小吃食用。',
     img:'http://zh.wikipedia.org/wiki/%E8%94%A5%E6%B2%B9%E9%A4%85#mediaviewer/File:Spring_onion_pancake_2013.JPG', },    

      {id:7, Chinese:'豆花', English:'Tofu Pudding ', Japenses:'豆花',Tells:'豆花，或稱豆腐腦，是由黃豆漿絮凝後形成的果凍狀食品，比豆腐嫩軟，是一種常見小吃。對它稱謂則各地略有不同，中國北方多稱豆腐腦，南方多稱豆花，但在部分地區也有其他稱謂。傳統的製作方法，豆花多使用石膏或滷水凝結，在口感上有明顯的粗澀的感覺。現在多使用新型絮凝劑，口感更細膩。',
     img:'http://0225506898.tw.tranews.com/Show/images/News/3268991_1.jpg', },      
      {id:8, Chinese:'愛玉', English:'Fig Jelly ', Japenses:'ゼリー',Tells:'愛玉子（學名：Ficus pumila var. awkeotsang）又稱為愛玉、玉枳、枳仔、草枳仔、澳澆、愛玉欉（以閩南語拉丁化，即為學名來源awkeotsang[1]），屬桑科榕屬植物，為台灣特有亞種，與薜荔（Ficus pu-mila L.）相同皆屬雌雄異株。',
     img:'http://ext.pimg.tw/jan098142/4a486632542e6.jpg', },   
     {id:9, Chinese:'臭豆腐', English:'Stinky Tofuy ', Japenses:'臭い豆腐',Tells:'臭豆腐是中國民間特色豆製品小吃之一，流傳於大中華圈及世界其他地方的豆腐發酵製品。在各地的製作方式、食用方法均有相當大的差異。臭豆腐分臭豆腐乾和臭豆腐乳兩種，都是相當流行的小吃。臭豆腐乳屬於豆腐乳的一種，曾作為御膳小菜送往宮廷，受到慈禧太后的喜愛，親賜名御青方[1]。臭豆腐在長沙、上海、北京、台灣是頗具代表性的小吃。',
     img:'http://upload.wikimedia.org/wikipedia/commons/c/cf/%E9%85%A5%E7%82%B8%E8%87%AD%E8%B1%86%E8%85%90.JPG', },     
     {id:10, Chinese:'珍珠奶茶', English:'Bubble Milk Tea', Japenses:'パールミルクティー',Tells:'珍珠奶茶（Pearl milk tea）簡稱珍奶，又稱粉圓奶茶（Tapioca (ball) tea）、「波霸奶茶」（B(P)oba milk tea），是一項於1980年代發明及廣傳於台灣的茶類飲料，為泡沫紅茶（Bubble tea）、珍珠茶飲文化中的一支，將「粉圓」（「珍珠」，Tapioca ball）加入香醇的奶茶中，也尚有「珍珠紅（綠）茶」、「珍珠奶綠（茶）」等變種，由於口感特殊，所以受到廣大的歡迎與回響，也成為台灣最具代表性的飲料與小吃之一，多年來，已經由台灣流行至東亞、歐洲、美國甚至中東國家等地方。',
     img:'http://upload.wikimedia.org/wikipedia/commons/4/44/Pearl_Milktea.jpg', }, 
     {id:11, Chinese:'豆漿', English:'Soy Milk', Japenses:'ミルク',Tells:'豆漿（亦稱豆奶，台語稱為豆奶 [tāu-ling/tāu-ni][1] ，日語稱豆乳／とうにゅう），是一種以黃豆（或黑豆）為原料製作的飲料。豆奶也可指豆漿加奶的飲品。',
     img:'http://upload.wikimedia.org/wikipedia/commons/f/f4/Soymilk_can_and_glass.jpg', },
     {id:12, Chinese:'蛋餅', English:'Chinese omelet', Japenses:'パンケーキ',Tells:'蛋餅是一種以蛋作食材的菜式，通常使用雞蛋，加入其他配料煎成扁平狀。',
     img:'http://link.photo.pchome.com.tw/s08/kid0406/432/134487149354/', },      {id:13, Chinese:'甘蔗汁', English:'Sugar cane juice', Japenses:'サトウキビジュース',Tells:'甘蔗汁，簡稱蔗汁，是以甘蔗壓榨成汁的飲料，方便不想咀嚼硬甘蔗者直接喝汁食用，原汁原味，最能喝出甘甜滋味，且滋潤美容養顏。常見於台灣中南部甘蔗產區，是來台灣旅遊觀光客首選台灣冰品飲料。在香港一些果汁店也可以買到。除了鮮榨蔗汁外，還有商人推出瓶裝蔗汁，可以貯存較長時間。',
     img:'http://upload.wikimedia.org/wikipedia/commons/5/56/SugarCanejuiceglass.jpg', },
     {id:14, Chinese:'酸梅汁', English:'Plum juice', Japenses:'クランベリージュース',Tells:'酸梅湯是中國一種傳統的消暑酸甜口味飲料，主要用烏梅、桂花、冰糖等材料製成，通常夏天冰鎮飲用，能夠清涼解暑。',
     img:'http://upload.wikimedia.org/wikipedia/commons/6/60/Sour_plum_drink.jpg', },     
     {id:15, Chinese:'楊桃汁', English:'Star fruit juice', Japenses:'カランボラジュース',Tells:'楊桃汁所屬美食之一，主要原料有熟透楊桃一個,細砂糖適量,溫開水適量等，這道菜非常美味。',
     img:'http://www.17life.com/media/A0-02-722/08aa2018EDM4c75EDM4587EDMb644EDM43442973222e.jpg', },     
     {id:16, Chinese:'青草茶', English:'Herb juice', Japenses:'草茶',Tells:'涼茶，也叫青草茶或百草茶，是一種在中國大陸南方（廣東、廣西、福建等地），甚至馬來西亞新加坡等亞熱帶地區，流行的一種飲料，取材自多種藥草組合而成的飲料[1]。因為廣東地處之嶺南，天氣炎熱，多雨地濕，自古多有瘴氣。因此民間流行以藥性寒涼，消暑解熱的中草藥，熬水來喝，稱為各式各樣的「涼茶」。有些帶有苦味的涼茶又稱苦茶。涼茶能流傳起來，是因為涼茶具有獨特的價值。涼茶除了有各種治病及保健的功效，還能清熱去濕，對中國大陸南方人很有幫助，所以涼茶主要於中國南方流傳。在馬來西亞華僑也慣常飲涼茶。源自上世紀四十年代，來自番禺的華僑將廣東涼茶帶到馬來西亞怡保。由於當年的怡保是「世界鍚都」，吸引許多華工漂洋過海到礦場謀生，而大多數華工都是廣東所以保留著這份飲用涼茶的習慣。慢慢涼茶在這片亞熱帶氣候的異國也流行起來。',
     img:'http://072881888.tw.tranews.com/images/Info/Y007989000001_1_1.jpg', },     
     {id:17, Chinese:'蚵仔煎', English:'Oyster omelet', Japenses:'オイスターオムレツ',Tells:'蚵仔煎（白話字：ô-á-chian），為一種流行於大陸的閩南地區、台灣及日本的著名小吃，係用新鮮的牡蠣、蔬菜（多用茼蒿）、雞蛋及太白粉（或番薯粉，即「地瓜粉」）芡水作成。蚵仔煎（閩南話為ô-á-chian，普通話譯作「海蠣煎」），發源於福建閩南，是福建閩南，台灣地區，廣東潮汕的經典小吃。起源是先民在無法飽食下所發明的替代糧食，是一種貧苦生活的象徵。蚵仔煎據傳就是這樣的一種在貧窮社會之下所發明的創意料理。',
     img:'http://upload.wikimedia.org/wikipedia/commons/e/ef/Billyfoodoysteromelette.jpg', },
     {id:18, Chinese:'棺材板', English:'Coffin', Japenses:'棺板',Tells:'棺材板是一種臺灣小吃，是台南當地的特色食品。將厚片吐司炸到金黃色後撈起，中間挖空再放入雞肉、豌豆、蘿蔔和墨魚等以高湯煮成再用些牛奶勾芡，再放上吐司的蓋子即成為美味可口的棺材板。而早期尚有雞肝等素材，現在多已不再使用。',
     img:'http://upload.wikimedia.org/wikipedia/commons/7/7e/%E6%A3%BA%E6%9D%90%E6%9D%BF.jpg', },     
     {id:19, Chinese:'油豆腐', English:'Oily bean curd', Japenses:'油揚げ',Tells:'豆卜，又稱豆腐卜、油泡、豆泡、油豆腐，是一種常見於日本、台灣和中國南方的豆製品，一般是由豆腐經過高溫油炸而成，外表屬金黃色，裡面則由於經過油炸後，水份被抽乾，因此密度呈海綿狀。豆腐卜出現的原因，是由於以前豆腐不易保存，有人在它變壞前，將一塊塊方形的板豆腐，切成小塊或切成片狀，放進油中炸成，令存放的時間增長',
     img:'http://zh.wikipedia.org/wiki/%E8%B1%86%E5%8D%9C#mediaviewer/File:HK_MK_Mongkok_Market_Bean_Curd_a.jpg', },      
          {id:20, Chinese:'麻婆豆腐', English:'Spicy hot bean curd ', Japenses:'スパイシー豆腐',Tells:'麻婆豆腐，中國菜中的川菜的代表名作。材料主要有豆腐、牛肉碎或豬肉碎、辣椒和花椒等。麻來自花椒，辣來自辣椒，這道菜突出了川菜「麻辣」的特點。',
     img:'http://upload.wikimedia.org/wikipedia/commons/a/a5/Billyfoodmabodofu3.jpg', }, 
          {id:21, Chinese:'天婦羅', English:'Tenpura ', Japenses:'天ぷら',Tells:'天婦羅（日語：天婦羅、天麩羅、天ぷら／てんぷら tenpura ?），又稱天麩羅，在台灣、中國大陸也稱為甜不辣。天婦羅源自葡語Tempura，是葡國人在大齋期（Lent，基督教節日，指復活節六個半星期以前）期間因禁吃肉，而以吃魚代替肉而烹煮的一種食物。拉丁文「ad tempora quadragesima」就是「守大齋期」的意思。',
     img:'http://upload.wikimedia.org/wikipedia/commons/8/8b/Tendon.jpg', },           {id:22, Chinese:'蝦片', English:'Prawn cracker', Japenses:'エビ片',Tells:'蝦片，又叫炸蝦片，係種用蝦同澱粉整嘅脆口零食，東南亞（尤其係印尼）比較常見。香港酒樓傳統嘅炸子雞亦會用蝦片伴碟。如果將佢整成好似薯條嘅形狀，就叫蝦條或者炸蝦條。',
     img:'http://upload.wikimedia.org/wikipedia/commons/a/ab/Fried_Krupuk_Udang.JPG', },  
          {id:23, Chinese:'蝦球', English:'Shrimp balls', Japenses:'エビ玉',Tells:'蝦片，又叫炸蝦片，係種用蝦同澱粉整嘅脆口零食，東南亞（尤其係印尼）比較常見。香港酒樓傳統嘅炸子雞亦會用蝦片伴碟。如果將佢整成好似薯條嘅形狀，就叫蝦條或者炸蝦條。',
     img:'http://food.tank.tw/userfiles/image/SeaFood/greenstripball.jpg', },      
 {id:24, Chinese:'春捲', English:'Spring rolls', Japenses:'春巻き',Tells:'春卷是中國民間流行的傳統小吃，用薄麵皮，捲上餡料，經油炸的食品。各地的餡料和大小不同，但基本是扁圓筒狀。以中國為例，一般人多用蔬菜及肉作餡料，而北方部分地區則會改用紅豆沙。中國的春卷一般很小，一直徑20厘米的碟可以裝十多個。美國華人飯店做的春卷有肉餡，很大一個，一個春卷可以當一頓飯，類似於漢堡。春卷亦是滿漢全席中第二席中的一道菜式。',
     img:'http://a1.att.hudong.com/66/92/19300001309012131181928896744.jpg', }, 
 {id:25, Chinese:'雞捲', English:'Chicken rolls', Japenses:'チキンロール',Tells:'雞卷即多卷，原名為石碼卷，又名"燒肝"。本為中國閩南福建石碼一帶名產，後來傳至台灣後，已成為台灣著名小吃。北部地區，甚至常為祭祀時的常見主要供品。',
     img:'http://1.bp.blogspot.com/-fDJ8Q5T2Tdw/Usuic28M-1I/AAAAAAAABPs/GAEdgyS0g5Q/s1600/%E9%9B%9E%E6%8D%B2.JPG', },      
  ];     
    this.myHero = this.model[0];
      
}
