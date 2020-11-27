function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var b=n[t];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ANEU:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var b=t("tk/3"),s=t("2Vo4"),a=t("fXoL"),i=t("ej43"),o=t("H+bZ"),c=function(){var e=function(){function e(n,t,b){_classCallCheck(this,e),this.htttpClient=n,this.userConnect=t,this.hostTestService=b,this.jwtToken=new s.a({isAuthenticated:null,token:null}),this.hostTest=b.TEST_MICRO_APP,this.initToken()}return _createClass(e,[{key:"initToken",value:function(){var e=sessionStorage.getItem("token");this.jwtToken.next(e?{isAuthenticated:!0,token:e}:{isAuthenticated:!1,token:null})}},{key:"saveListMetierClient",value:function(e){return this.initToken(),this.htttpClient.post(this.hostTest+"/saveMetierByClient/",e.valueOf(),{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"modifListMetierClient",value:function(e){return this.initToken(),this.htttpClient.put(this.hostTest+"/modifMetierByClient/",e.valueOf(),{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getFicheMetierClient",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/getMetierByClient/"+this.userConnect.userAuthenticated.id,{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getQuestionnaireProfileU",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/listQuestion/",{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"saveProfilU",value:function(e){return this.initToken(),this.htttpClient.post(this.hostTest+"/saveClientRa/",e.valueOf(),{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getResultatProfileU",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/questionClient/"+this.userConnect.userAuthenticated.id,{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getRestitusionProfilU",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/restitusionAll/",{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getRestitusionProfilUByPosAndDim",value:function(e,n){return this.initToken(),this.htttpClient.get(this.hostTest+"/restitusionByDimAndPos/"+e+"/"+n,{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"saveCompetence",value:function(e){return this.initToken(),this.htttpClient.post(this.hostTest+"/saveListCompetences/",e.valueOf(),{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getCompetence",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/listCompetences/",{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getCompetenceById",value:function(e){return this.initToken(),this.htttpClient.get(this.hostTest+"/getCompetenceById/"+e,{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getCompetenceByCompetence",value:function(e){return this.initToken(),this.htttpClient.get(this.hostTest+"/getCompetenceByCompetence/"+e,{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"saveCompetenceClient",value:function(e){return this.initToken(),this.htttpClient.post(this.hostTest+"/saveListCompetencesClient/",e.valueOf(),{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getCompetenceClient",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/getCompetenceClientByIdClient/"+this.userConnect.userAuthenticated.id,{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"saveHandiWatt",value:function(e){return this.initToken(),this.htttpClient.post(this.hostTest+"/saveHandiWatt/",e.valueOf(),{headers:new b.d({Authorization:this.jwtToken.value.token})})}},{key:"getHandiWattClient",value:function(){return this.initToken(),this.htttpClient.get(this.hostTest+"/getHandiWattByIdClient/"+this.userConnect.userAuthenticated.id,{headers:new b.d({Authorization:this.jwtToken.value.token})})}}]),e}();return e.\u0275fac=function(n){return new(n||e)(a.cc(b.b),a.cc(i.a),a.cc(o.a))},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},l0mC:function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var b=t("fXoL"),s=t("tk/3"),a=t("Jmk/"),i=t("ej43"),o=t("ANEU"),c=t("tyNb"),p=t("znSr"),r=t("bTqV"),u=t("ofXK"),W=t("NFeN"),X=t("cH1L");function l(e,n){if(1&e){var t=b.Yb();b.Xb(0,"div",11),b.Xb(1,"div",12),b.Xb(2,"h2"),b.Nc(3,"Contexte"),b.Wb(),b.Xb(4,"button",13),b.gc("click",(function(){return b.Ec(t),b.kc().contexte()})),b.Xb(5,"mat-icon"),b.Nc(6,"filter_list"),b.Wb(),b.Wb(),b.Wb(),b.Xb(7,"div",14),b.Xb(8,"p",15),b.Xb(9,"span"),b.Nc(10,"A\nquoi sert un "),b.Xb(11,"b"),b.Nc(12,"CV"),b.Wb(),b.Nc(13," ou "),b.Xb(14,"span",16),b.Xb(15,"b"),b.Xb(16,"i"),b.Nc(17,"Curriculum Vitae"),b.Wb(),b.Wb(),b.Wb(),b.Nc(18,"\xa0"),b.Wb(),b.Xb(19,"span",17),b.Nc(20,"?"),b.Wb(),b.Sb(21,"span"),b.Wb(),b.Xb(22,"p",15),b.Xb(23,"span",18),b.Nc(24,"Il s"),b.Wb(),b.Sb(25,"span",19),b.Sb(26,"span",19),b.Xb(27,"span",20),b.Sb(28,"span",19),b.Sb(29,"span",19),b.Nc(30," \u2019"),b.Wb(),b.Xb(31,"span"),b.Nc(32,"agit\nd"),b.Wb(),b.Sb(33,"span",19),b.Sb(34,"span",19),b.Xb(35,"span",20),b.Sb(36,"span",19),b.Sb(37,"span",19),b.Nc(38,"\u2019"),b.Wb(),b.Xb(39,"span"),b.Nc(40,"un\ndocument qui regroupe "),b.Xb(41,"b"),b.Nc(42,"votre parcours professionnelle, vos comp\xe9tences"),b.Wb(),b.Nc(43,"\net\xa0 "),b.Xb(44,"b"),b.Nc(45,"vos exp\xe9riences"),b.Wb(),b.Nc(46," que vous aurez\nacquis au fur et \xe0 mesure de votre vie. "),b.Wb(),b.Sb(47,"span"),b.Wb(),b.Xb(48,"p",15),b.Xb(49,"span"),b.Nc(50,"ce\ndocument est "),b.Xb(51,"b"),b.Nc(52,"essentiel"),b.Wb(),b.Nc(53," pour pouvoir "),b.Xb(54,"b"),b.Nc(55,"postuler"),b.Wb(),b.Nc(56," aux diff\xe9rentes\noffres qui se pr\xe9sentent \xe0 vous. Et ainsi pouvoir "),b.Xb(57,"b"),b.Nc(58,"trouver le m\xe9tier de vos\nr\xeaves"),b.Wb(),b.Nc(59,"\xa0"),b.Wb(),b.Xb(60,"span",21),b.Nc(61,"!"),b.Wb(),b.Sb(62,"span"),b.Wb(),b.Xb(63,"p",15),b.Xb(64,"span"),b.Nc(65,"Votre\nCV doit donc "),b.Xb(66,"b"),b.Nc(67,"\xeatre clair"),b.Wb(),b.Nc(68," et "),b.Xb(69,"b"),b.Nc(70,"donner envie"),b.Wb(),b.Xb(71,"b"),b.Nc(72,"au recruteur de vous\nrencontrer"),b.Wb(),b.Nc(73," pour ainsi avoir une chance d"),b.Wb(),b.Sb(74,"span",19),b.Sb(75,"span",19),b.Xb(76,"span",20),b.Sb(77,"span",19),b.Sb(78,"span",19),b.Nc(79,"\u2019"),b.Wb(),b.Xb(80,"b"),b.Xb(81,"span",18),b.Nc(82,"acc"),b.Wb(),b.Wb(),b.Xb(83,"b"),b.Xb(84,"span"),b.Nc(85,"\xe9"),b.Wb(),b.Wb(),b.Xb(86,"b"),b.Xb(87,"span",22),b.Nc(88,"der "),b.Wb(),b.Wb(),b.Xb(89,"b"),b.Xb(90,"span"),b.Nc(91,"\xe0 un entretien."),b.Wb(),b.Wb(),b.Wb(),b.Xb(92,"p",15),b.Xb(93,"span"),b.Nc(94,"\xa0"),b.Wb(),b.Wb(),b.Xb(95,"p",15),b.Xb(96,"b"),b.Xb(97,"span"),b.Nc(98,"A\nquoi sert une lettre de motivation\xa0:"),b.Wb(),b.Wb(),b.Wb(),b.Xb(99,"p",15),b.Xb(100,"span"),b.Nc(101,"Apr"),b.Wb(),b.Xb(102,"span",18),b.Nc(103,"\xe8"),b.Wb(),b.Xb(104,"span"),b.Nc(105,"s avoir finalis\xe9 votre CV, vous pouvez\nvous attaquer \xe0 l\u2019 \xe9laboration de votre lettre de motivation. Mais c"),b.Wb(),b.Sb(106,"span",19),b.Sb(107,"span",19),b.Xb(108,"span",20),b.Sb(109,"span",19),b.Sb(110,"span",19),b.Nc(111,"\u2019"),b.Wb(),b.Xb(112,"span"),b.Nc(113,"est\nquoi la lettre de motivation\xa0"),b.Wb(),b.Xb(114,"span",17),b.Nc(115,"?"),b.Wb(),b.Sb(116,"span"),b.Wb(),b.Xb(117,"p",15),b.Xb(118,"span"),b.Nc(119,"Elle\nva vous permettre de "),b.Xb(120,"b"),b.Nc(121,"compl\xe9ter votre CV"),b.Wb(),b.Nc(122," et convaincre votre futur\nemployeur que vous \xeates le candidat qu\u2019il recherche. "),b.Wb(),b.Wb(),b.Xb(123,"p",15),b.Xb(124,"b"),b.Xb(125,"span",23),b.Nc(126,"ATTENTION"),b.Wb(),b.Wb(),b.Xb(127,"span"),b.Nc(128,"\xa0: elle ne doit \xeatre en aucun cas\nune redite de votre CV.\xa0 Votre lettre de\nmotivation va devoir "),b.Xb(129,"b"),b.Nc(130,"\xea"),b.Wb(),b.Wb(),b.Xb(131,"b"),b.Xb(132,"span",24),b.Nc(133,"tre synth"),b.Wb(),b.Wb(),b.Xb(134,"b"),b.Xb(135,"span"),b.Nc(136,"\xe9tique"),b.Wb(),b.Wb(),b.Xb(137,"span"),b.Nc(138,",\n15 \xe0 20 lignes suffiront (1 page)."),b.Wb(),b.Wb(),b.Xb(139,"span",25),b.Nc(140,"L\u2019objectif de la lettre de motivation est de pouvoir "),b.Xb(141,"b"),b.Nc(142,"d\xe9velopper ce\nque vous avez pu marquer dans votre cv et surtout de montrer votre motivation et pourquoi vous voulez ce poste."),b.Wb(),b.Wb(),b.Wb(),b.Wb()}}function d(e,n){if(1&e){var t=b.Yb();b.Xb(0,"div",26),b.Xb(1,"div",12),b.Xb(2,"h2"),b.Nc(3,"Objectifs"),b.Wb(),b.Xb(4,"button",13),b.gc("click",(function(){return b.Ec(t),b.kc().objectif()})),b.Xb(5,"mat-icon"),b.Nc(6,"filter_list"),b.Wb(),b.Wb(),b.Wb(),b.Xb(7,"div",14),b.Xb(8,"p",15),b.Xb(9,"span"),b.Nc(10,"-"),b.Xb(11,"span"),b.Nc(12,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(13,"span"),b.Nc(14,"Mettre en valeur son parcours, ses\natouts, sa motivation et sa disponibilit\xe9"),b.Wb(),b.Wb(),b.Xb(15,"p",15),b.Xb(16,"span"),b.Nc(17,"- "),b.Xb(18,"span"),b.Nc(19,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(20,"span"),b.Nc(21,"Augmenter vos chances d\u2019obtenir une\nentrevue avec un recruteur "),b.Wb(),b.Wb(),b.Xb(22,"p",15),b.Xb(23,"span"),b.Nc(24,"-"),b.Xb(25,"span"),b.Nc(26,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(27,"span"),b.Nc(28,"\xcatre rep\xe9r\xe9 .e et trouver l\u2019emploi de\nvos r\xeaves\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Wb()}}function N(e,n){if(1&e){var t=b.Yb();b.Xb(0,"div",27),b.Xb(1,"div",12),b.Xb(2,"h2"),b.Nc(3,"Process"),b.Wb(),b.Xb(4,"button",13),b.gc("click",(function(){return b.Ec(t),b.kc().process()})),b.Xb(5,"mat-icon"),b.Nc(6,"filter_list"),b.Wb(),b.Wb(),b.Wb(),b.Xb(7,"div",14),b.Xb(8,"p",15),b.Xb(9,"b"),b.Xb(10,"span"),b.Nc(11,"POUR\nREALISER VOTRE CV\xa0:"),b.Wb(),b.Wb(),b.Wb(),b.Xb(12,"p",15),b.Xb(13,"span"),b.Nc(14,"Pour se faire, nous allons vous donnez\nquelques conseils\xa0:"),b.Wb(),b.Sb(15,"span"),b.Wb(),b.Xb(16,"p",15),b.Xb(17,"span"),b.Nc(18,"\xa0"),b.Wb(),b.Wb(),b.Xb(19,"p",28),b.Xb(20,"span"),b.Nc(21,"1."),b.Xb(22,"span"),b.Nc(23,"\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(24,"span"),b.Nc(25,"Indiquez le poste vis\xe9,\nvotre projet professionnel"),b.Wb(),b.Wb(),b.Xb(26,"p",28),b.Xb(27,"span"),b.Nc(28,"\xa0"),b.Wb(),b.Wb(),b.Xb(29,"p",28),b.Xb(30,"span"),b.Nc(31,"2."),b.Xb(32,"span"),b.Nc(33,"\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(34,"span"),b.Nc(35,"Renseignez vos\ninformations personnelles (contact, \xe2ge, etc.)"),b.Wb(),b.Wb(),b.Xb(36,"p",28),b.Xb(37,"span"),b.Nc(38,"\xa0"),b.Wb(),b.Wb(),b.Xb(39,"p",28),b.Xb(40,"span"),b.Nc(41,"3."),b.Xb(42,"span"),b.Nc(43,"\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(44,"span"),b.Nc(45,"Indiquez vos\nformations (dipl\xf4mes obtenus du plus r\xe9cents au plus anciens)"),b.Wb(),b.Wb(),b.Xb(46,"p",29),b.Xb(47,"span",25),b.Nc(48,"\xa0"),b.Wb(),b.Wb(),b.Xb(49,"p",28),b.Xb(50,"span"),b.Nc(51,"4."),b.Xb(52,"span"),b.Nc(53,"\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(54,"span"),b.Nc(55,"Indiquer vos\ncomp\xe9tences linguistiques et informatique (logiciels, langages\u2026)"),b.Wb(),b.Wb(),b.Xb(56,"p",28),b.Xb(57,"span"),b.Nc(58,"\xa0"),b.Wb(),b.Wb(),b.Xb(59,"p",28),b.Xb(60,"span"),b.Nc(61,"5."),b.Xb(62,"span"),b.Nc(63,"\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(64,"span"),b.Nc(65,"Pr\xe9sentez"),b.Wb(),b.Xb(66,"span",30),b.Nc(67," vos exp\xe9riences "),b.Wb(),b.Xb(68,"span"),b.Nc(69,"(du plus r\xe9cent au plus ancien)"),b.Wb(),b.Xb(70,"span",30),b.Nc(71," et d\xe9taillez vos comp"),b.Wb(),b.Xb(72,"span"),b.Nc(73,"\xe9tences (hard skills* & softs\nskills**,*comp\xe9tences techniques. **comp\xe9tences comportementales,\nr\xe9sultats\xa0: indiquer le CA atteints ou le nombre de collaborateurs que\nvous avez manag\xe9s."),b.Wb(),b.Wb(),b.Xb(74,"p",28),b.Xb(75,"span"),b.Nc(76,"\xa0"),b.Wb(),b.Wb(),b.Xb(77,"p",28),b.Xb(78,"span"),b.Nc(79,"6."),b.Xb(80,"span"),b.Nc(81,"\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(82,"span"),b.Nc(83,"\xc9noncez"),b.Wb(),b.Xb(84,"span",31),b.Nc(85," vos centres "),b.Wb(),b.Xb(86,"span"),b.Nc(87,"d\u2019 int\xe9r\xeats\net"),b.Wb(),b.Xb(88,"span",30),b.Nc(89," vos activit"),b.Wb(),b.Xb(90,"span"),b.Nc(91,"\xe9s extra professionnelles"),b.Wb(),b.Wb(),b.Xb(92,"p",15),b.Xb(93,"i"),b.Xb(94,"span"),b.Nc(95,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Xb(96,"p",15),b.Xb(97,"span"),b.Nc(98,"\xa0"),b.Wb(),b.Wb(),b.Xb(99,"p",15),b.Xb(100,"span"),b.Nc(101,"*N"),b.Wb(),b.Sb(102,"span",19),b.Sb(103,"span",19),b.Xb(104,"span",20),b.Sb(105,"span",19),b.Sb(106,"span",19),b.Nc(107,"\u2019"),b.Wb(),b.Xb(108,"span"),b.Nc(109,"oubliez\npas que votre CV doit \xeatre attractif pour que le recruteur retienne votre\ncandidature\xa0"),b.Wb(),b.Xb(110,"span",21),b.Nc(111,"! "),b.Wb(),b.Wb(),b.Xb(112,"p",15),b.Xb(113,"span",21),b.Nc(114,"\xa0"),b.Wb(),b.Wb(),b.Xb(115,"p",15),b.Xb(116,"span"),b.Nc(117,"Nous\nmettons \xe0 dispositif gratuitement un "),b.Xb(118,"b"),b.Nc(119,"g\xe9n\xe9rateur de CV"),b.Wb(),b.Nc(120," o\xf9 vous pourrez\nint\xe9grer vos informations. En cliquant sur \xab\xa0Faire votre CV\xa0\xbb, vous\nacc\xe9derez \xe0 une base de CV et vous int\xe9grerez toutes vos informations en y\nadaptant les couleurs."),b.Wb(),b.Wb(),b.Xb(121,"p",15),b.Xb(122,"span"),b.Nc(123,"\xa0"),b.Wb(),b.Wb(),b.Xb(124,"p",15),b.Xb(125,"span"),b.Nc(126,"Pour\ntou.te.s celles et ceux qui ont l\u2019\xe2me voyageur, nous avons \xe9galement pensez \xe0\nvous en vous mettant \xe0 disposition une information sur les CV pour\nl\u2019international. "),b.Wb(),b.Wb(),b.Xb(127,"p",15),b.Xb(128,"span"),b.Nc(129,"Vous\ntrouverez des exemples de CV hispanique (Colombie) et anglophone (Canada et\nUSA). "),b.Wb(),b.Sb(130,"span"),b.Wb(),b.Xb(131,"p",15),b.Xb(132,"span"),b.Nc(133,"\xa0"),b.Wb(),b.Wb(),b.Xb(134,"p",15),b.Xb(135,"span"),b.Nc(136,"\xa0"),b.Wb(),b.Wb(),b.Xb(137,"p",15),b.Xb(138,"b"),b.Xb(139,"u"),b.Xb(140,"span"),b.Nc(141,"POUR REDIGER VOTRE LETTRE DE MOTIVATION\xa0:"),b.Wb(),b.Wb(),b.Wb(),b.Xb(142,"b"),b.Xb(143,"u"),b.Sb(144,"span"),b.Wb(),b.Wb(),b.Wb(),b.Xb(145,"p",15),b.Xb(146,"span"),b.Nc(147,"\xa0"),b.Wb(),b.Wb(),b.Xb(148,"p",15),b.Xb(149,"span"),b.Nc(150,"Veillez\n\xe0 respecter l"),b.Wb(),b.Sb(151,"span",19),b.Sb(152,"span",19),b.Xb(153,"span",20),b.Sb(154,"span",19),b.Sb(155,"span",19),b.Nc(156,"\u2019"),b.Wb(),b.Xb(157,"span"),b.Nc(158,"ensemble\ndes champs dit \xab\xa0obligatoire\xa0\xbb, c"),b.Wb(),b.Sb(159,"span",19),b.Sb(160,"span",19),b.Xb(161,"span",20),b.Sb(162,"span",19),b.Sb(163,"span",19),b.Nc(164,"\u2019"),b.Wb(),b.Xb(165,"span"),b.Nc(166,"est-\xe0-dire\xa0:"),b.Wb(),b.Sb(167,"span"),b.Wb(),b.Xb(168,"p",15),b.Xb(169,"span"),b.Nc(170,"-"),b.Xb(171,"span"),b.Nc(172,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(173,"b"),b.Xb(174,"span"),b.Nc(175,"Votre identit\xe9 \xe0 gauche"),b.Wb(),b.Wb(),b.Xb(176,"span"),b.Nc(177,"\xa0:\nnom, pr\xe9"),b.Wb(),b.Xb(178,"span",24),b.Nc(179,"nom, adresse, num"),b.Wb(),b.Xb(180,"span"),b.Nc(181,"\xe9"),b.Wb(),b.Xb(182,"span",31),b.Nc(183,"ro de t"),b.Wb(),b.Xb(184,"span"),b.Nc(185,"\xe9l\xe9phone et adresse mail\n(s\xe9rieuse\xa0: ex\xa0: sarah.gandhi@gmail.com)."),b.Wb(),b.Sb(186,"span"),b.Wb(),b.Xb(187,"p",15),b.Xb(188,"span"),b.Nc(189,"- "),b.Xb(190,"span"),b.Nc(191,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(192,"b"),b.Xb(193,"span"),b.Nc(194,"L"),b.Wb(),b.Wb(),b.Sb(195,"span",19),b.Sb(196,"span",19),b.Xb(197,"b"),b.Xb(198,"span",20),b.Sb(199,"span",19),b.Sb(200,"span",19),b.Nc(201,"\u2019"),b.Wb(),b.Wb(),b.Xb(202,"b"),b.Xb(203,"span",18),b.Nc(204,"identit"),b.Wb(),b.Wb(),b.Xb(205,"b"),b.Xb(206,"span"),b.Nc(207,"\xe9\nde votre interlocuteur "),b.Wb(),b.Wb(),b.Xb(208,"span"),b.Nc(209,"(Responsable RH, recruteur\u2026)\xa0 sera\n\xe0 droite\xa0: son nom, son pr\xe9nom, le nom de l"),b.Wb(),b.Sb(210,"span",19),b.Sb(211,"span",19),b.Xb(212,"span",20),b.Sb(213,"span",19),b.Sb(214,"span",19),b.Nc(215," \u2019"),b.Wb(),b.Xb(216,"span"),b.Nc(217,"entreprise pour laquelle vous\npostulez, son adresse."),b.Wb(),b.Sb(218,"span"),b.Wb(),b.Xb(219,"p",15),b.Xb(220,"span"),b.Nc(221,"-"),b.Xb(222,"span"),b.Nc(223,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(224,"span"),b.Nc(225,"N"),b.Wb(),b.Sb(226,"span",19),b.Sb(227,"span",19),b.Xb(228,"span",20),b.Sb(229,"span",19),b.Sb(230,"span",19),b.Nc(231,"\u2019"),b.Wb(),b.Xb(232,"span"),b.Nc(233,"oubliez pas le "),b.Xb(234,"b"),b.Nc(235,"Lieu "),b.Wb(),b.Nc(236,"et la "),b.Xb(237,"b"),b.Nc(238,"date\nde r\xe9daction"),b.Wb(),b.Nc(239,"\xa0de votre lettre."),b.Wb(),b.Sb(240,"span"),b.Wb(),b.Xb(241,"p",15),b.Xb(242,"span",16),b.Xb(243,"span"),b.Nc(244,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Xb(245,"p",15),b.Xb(246,"span"),b.Nc(247," -"),b.Xb(248,"span"),b.Nc(249,"\xa0\xa0\xa0\xa0\xa0 "),b.Wb(),b.Wb(),b.Xb(250,"span",16),b.Xb(251,"b"),b.Xb(252,"span"),b.Nc(253,"L"),b.Wb(),b.Wb(),b.Wb(),b.Sb(254,"span",19),b.Sb(255,"span",19),b.Xb(256,"span",16),b.Xb(257,"b"),b.Xb(258,"span",20),b.Sb(259,"span",19),b.Sb(260,"span",19),b.Nc(261,"\u2019"),b.Wb(),b.Wb(),b.Wb(),b.Xb(262,"span",16),b.Xb(263,"b"),b.Xb(264,"span",31),b.Nc(265,"objet"),b.Wb(),b.Wb(),b.Wb(),b.Xb(266,"span",16),b.Xb(267,"span"),b.Nc(268,"\xa0:\xa0 \xe9crivez l"),b.Wb(),b.Wb(),b.Sb(269,"span",19),b.Sb(270,"span",19),b.Xb(271,"span",16),b.Xb(272,"span",20),b.Sb(273,"span",19),b.Sb(274,"span",19),b.Nc(275,"\u2019"),b.Wb(),b.Wb(),b.Xb(276,"span",16),b.Xb(277,"span"),b.Nc(278,"intitul\xe9 du poste pour lequel vous postulez "),b.Wb(),b.Wb(),b.Xb(279,"i"),b.Xb(280,"span"),b.Nc(281,"(par\nexemple\xa0: \xab\xa0Candidature spontan\xe9e pour un poste de \u2026\xa0\xbb ou bien\n\xab\xa0"),b.Wb(),b.Wb(),b.Xb(282,"i"),b.Xb(283,"span",22),b.Nc(284,"Recherche d"),b.Wb(),b.Wb(),b.Sb(285,"span",19),b.Sb(286,"span",19),b.Xb(287,"i"),b.Xb(288,"span",20),b.Sb(289,"span",19),b.Sb(290,"span",19),b.Nc(291,"\u2019"),b.Wb(),b.Wb(),b.Xb(292,"i"),b.Xb(293,"span"),b.Nc(294,"un\ncontrat d"),b.Wb(),b.Wb(),b.Sb(295,"span",19),b.Sb(296,"span",19),b.Xb(297,"i"),b.Xb(298,"span",20),b.Sb(299,"span",19),b.Sb(300,"span",19),b.Nc(301,"\u2019"),b.Wb(),b.Wb(),b.Xb(302,"i"),b.Xb(303,"span"),b.Nc(304,"alternance\nen \u2026\xa0\xbb)"),b.Wb(),b.Wb(),b.Xb(305,"i"),b.Sb(306,"span"),b.Wb(),b.Wb(),b.Xb(307,"p",29),b.Xb(308,"i"),b.Xb(309,"span",25),b.Nc(310,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Xb(311,"p",15),b.Xb(312,"span"),b.Nc(313,"-"),b.Xb(314,"span"),b.Nc(315,"\xa0\xa0\xa0\xa0\xa0\n"),b.Wb(),b.Wb(),b.Xb(316,"i"),b.Xb(317,"span"),b.Nc(318,"V"),b.Wb(),b.Wb(),b.Xb(319,"span"),b.Nc(320,"ous commencerez ensuite par "),b.Xb(321,"b"),b.Nc(322,"la\nformule d"),b.Wb(),b.Wb(),b.Sb(323,"span",19),b.Sb(324,"span",19),b.Xb(325,"b"),b.Xb(326,"span",20),b.Sb(327,"span",19),b.Sb(328,"span",19),b.Nc(329,"\u2019"),b.Wb(),b.Wb(),b.Xb(330,"b"),b.Xb(331,"span"),b.Nc(332,"appel"),b.Wb(),b.Wb(),b.Xb(333,"span"),b.Nc(334,"\xa0:\n\xab\xa0Madame, Monsieur\xa0\xbb"),b.Wb(),b.Sb(335,"span"),b.Wb(),b.Xb(336,"p",15),b.Xb(337,"span"),b.Nc(338,"\xa0"),b.Wb(),b.Wb(),b.Xb(339,"p",15),b.Xb(340,"b"),b.Xb(341,"u"),b.Xb(342,"span"),b.Nc(343,"La\nstructure de votre lettre de motivation\xa0: "),b.Wb(),b.Wb(),b.Wb(),b.Xb(344,"b"),b.Xb(345,"u"),b.Sb(346,"span"),b.Wb(),b.Wb(),b.Wb(),b.Xb(347,"p",15),b.Xb(348,"b"),b.Xb(349,"span"),b.Nc(350,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Xb(351,"p",15),b.Xb(352,"b"),b.Xb(353,"span"),b.Nc(354,"3\nparties se distinguent\xa0:"),b.Wb(),b.Wb(),b.Xb(355,"b"),b.Sb(356,"span"),b.Wb(),b.Wb(),b.Xb(357,"p",15),b.Xb(358,"span"),b.Nc(359,"-\xab\xa0"),b.Xb(360,"b"),b.Nc(361,"Vous"),b.Wb(),b.Wb(),b.Xb(362,"span",21),b.Nc(363,"\xa0\xbb\xa0"),b.Wb(),b.Xb(364,"span"),b.Nc(365,": Cette partie vise \xe0 montrer que vous\navez compris les besoins de l"),b.Wb(),b.Sb(366,"span",19),b.Sb(367,"span",19),b.Xb(368,"span",20),b.Sb(369,"span",19),b.Sb(370,"span",19),b.Nc(371,"\u2019"),b.Wb(),b.Xb(372,"span"),b.Nc(373,"entreprise\net que vous avez pris connaissance de l"),b.Wb(),b.Sb(374,"span",19),b.Sb(375,"span",19),b.Xb(376,"span",20),b.Sb(377,"span",19),b.Sb(378,"span",19),b.Nc(379,"\u2019"),b.Wb(),b.Xb(380,"span"),b.Nc(381,"entreprise."),b.Wb(),b.Sb(382,"span"),b.Wb(),b.Xb(383,"p",15),b.Xb(384,"span"),b.Nc(385,"-\xab\xa0"),b.Xb(386,"b"),b.Nc(387,"Moi"),b.Wb(),b.Wb(),b.Xb(388,"span",21),b.Nc(389," \xa0\xbb\xa0"),b.Wb(),b.Xb(390,"span"),b.Nc(391,": Montrer au recruteur que par le\nbiais de vos exp\xe9riences et vos comp\xe9tences vous correspondez \xe0 ces attentes."),b.Wb(),b.Sb(392,"span"),b.Wb(),b.Xb(393,"p",15),b.Xb(394,"span"),b.Nc(395,"-\xab\xa0Nous"),b.Wb(),b.Xb(396,"span",21),b.Nc(397,"\xa0\xbb\xa0"),b.Wb(),b.Xb(398,"span"),b.Nc(399,": Expliquez les "),b.Xb(400,"b"),b.Nc(401,"b\xe9n\xe9fices mutuels"),b.Wb(),b.Nc(402,"\nque vous et l"),b.Wb(),b.Sb(403,"span",19),b.Sb(404,"span",19),b.Xb(405,"span",20),b.Sb(406,"span",19),b.Sb(407,"span",19),b.Nc(408,"\u2019"),b.Wb(),b.Xb(409,"span"),b.Nc(410,"entreprise\npouvez tirer de cette collaboration et faites "),b.Xb(411,"b"),b.Nc(412,"une demande de rendez-vous"),b.Wb(),b.Nc(413,"\nen lui proposant de vous recevoir dans le cadre d\u2019un entretien de recrutement."),b.Wb(),b.Sb(414,"span"),b.Wb(),b.Xb(415,"p",15),b.Xb(416,"span"),b.Nc(417,"\xa0"),b.Wb(),b.Wb(),b.Xb(418,"p",15),b.Xb(419,"span"),b.Nc(420,"Vous\npourrez finir votre lettre de motivation par une "),b.Xb(421,"b"),b.Nc(422,"formule de politesse"),b.Wb(),b.Nc(423,",\ncomme\xa0:"),b.Wb(),b.Sb(424,"span"),b.Wb(),b.Xb(425,"p",15),b.Xb(426,"span"),b.Nc(427,"\xd8"),b.Xb(428,"span"),b.Nc(429,"\xa0\n"),b.Wb(),b.Wb(),b.Xb(430,"span"),b.Nc(431,"Dans la perspective"),b.Wb(),b.Xb(432,"span",18),b.Nc(433," d"),b.Wb(),b.Sb(434,"span",19),b.Sb(435,"span",19),b.Xb(436,"span",20),b.Sb(437,"span",19),b.Sb(438,"span",19),b.Nc(439,"\u2019"),b.Wb(),b.Xb(440,"span"),b.Nc(441,"une\nr\xe9ponse de votre part, je vous prie d"),b.Wb(),b.Sb(442,"span",19),b.Sb(443,"span",19),b.Xb(444,"span",20),b.Sb(445,"span",19),b.Sb(446,"span",19),b.Nc(447,"\u2019"),b.Wb(),b.Xb(448,"span"),b.Nc(449,"agr\xe9er,\nmadame, l"),b.Wb(),b.Sb(450,"span",19),b.Sb(451,"span",19),b.Xb(452,"span",20),b.Sb(453,"span",19),b.Sb(454,"span",19),b.Nc(455," \u2019"),b.Wb(),b.Xb(456,"span"),b.Nc(457,"expression\nde mes salutations distingu\xe9es."),b.Wb(),b.Sb(458,"span"),b.Wb(),b.Xb(459,"p",15),b.Xb(460,"span"),b.Nc(461,"\xd8"),b.Xb(462,"span"),b.Nc(463,"\xa0\n"),b.Wb(),b.Wb(),b.Xb(464,"span"),b.Nc(465,"Dans la perspective d\u2019un prochain\nentretien \xe0 votre gr\xe9, je vous prie, madame, de bien vouloir recevoir mes plus\nrespectueuses"),b.Wb(),b.Xb(466,"span",18),b.Nc(467," salutations."),b.Wb(),b.Sb(468,"span"),b.Wb(),b.Xb(469,"p",15),b.Xb(470,"span"),b.Nc(471,"\xa0"),b.Wb(),b.Wb(),b.Xb(472,"p",15),b.Xb(473,"span"),b.Nc(474,"Puis,\n"),b.Xb(475,"b"),b.Nc(476,"signez votre lettre"),b.Wb(),b.Nc(477," en bas \xe0 droite avec votre "),b.Xb(478,"b"),b.Nc(479,"Nom et pr\xe9nom."),b.Wb(),b.Wb(),b.Xb(480,"b"),b.Sb(481,"span"),b.Wb(),b.Wb(),b.Xb(482,"p",15),b.Xb(483,"span"),b.Nc(484,"\xa0"),b.Wb(),b.Wb(),b.Xb(485,"p",15),b.Xb(486,"b"),b.Xb(487,"u"),b.Xb(488,"span",32),b.Nc(489,"Quelques conseils\nsuppl\xe9mentaires\xa0:"),b.Wb(),b.Wb(),b.Wb(),b.Xb(490,"b"),b.Xb(491,"u"),b.Sb(492,"span"),b.Wb(),b.Wb(),b.Wb(),b.Xb(493,"p",15),b.Xb(494,"span"),b.Nc(495,"\xd8"),b.Xb(496,"span"),b.Nc(497,"\xa0\n"),b.Wb(),b.Wb(),b.Xb(498,"span"),b.Nc(499,"N"),b.Wb(),b.Sb(500,"span",19),b.Sb(501,"span",19),b.Xb(502,"span",20),b.Sb(503,"span",19),b.Sb(504,"span",19),b.Nc(505,"\u2019 "),b.Wb(),b.Xb(506,"span"),b.Nc(507,"oubliez pas d"),b.Wb(),b.Sb(508,"span",19),b.Sb(509,"span",19),b.Xb(510,"span",20),b.Sb(511,"span",19),b.Sb(512,"span",19),b.Nc(513,"\u2019"),b.Wb(),b.Xb(514,"span"),b.Nc(515,"expliquer et d"),b.Wb(),b.Sb(516,"span",19),b.Sb(517,"span",19),b.Xb(518,"span",20),b.Sb(519,"span",19),b.Sb(520,"span",19),b.Nc(521,"\u2019"),b.Wb(),b.Xb(522,"span"),b.Nc(523,"illustrer vos affirmations\xa0"),b.Wb(),b.Sb(524,"span"),b.Wb(),b.Xb(525,"p",15),b.Xb(526,"span"),b.Nc(527,"\xd8"),b.Xb(528,"span"),b.Nc(529,"\xa0\n"),b.Wb(),b.Wb(),b.Xb(530,"span"),b.Nc(531,"Soyez poli.e et ne faites pas de faute\nd"),b.Wb(),b.Sb(532,"span",19),b.Sb(533,"span",19),b.Xb(534,"span",20),b.Sb(535,"span",19),b.Sb(536,"span",19),b.Nc(537,"\u2019"),b.Wb(),b.Xb(538,"span");b.Nc(539,"orthographe.\nRien ne vous emp\xeache de vous faire relire par une personne de votre entourage."),b.Wb(),b.Sb(540,"span"),b.Wb(),b.Xb(541,"p",15),b.Xb(542,"span"),b.Nc(543,"\xd8"),b.Xb(544,"span"),b.Nc(545,"\xa0\n"),b.Wb(),b.Wb(),b.Xb(546,"span"),b.Nc(547,"Soigner votre pr\xe9sentation en optant\npour une police ni trop petite, ni trop grande. "),b.Wb(),b.Sb(548,"span"),b.Wb(),b.Xb(549,"p",15),b.Xb(550,"span"),b.Nc(551,"\xa0"),b.Wb(),b.Wb(),b.Xb(552,"p",15),b.Xb(553,"b"),b.Xb(554,"span"),b.Nc(555,"Portefolio"),b.Wb(),b.Wb(),b.Xb(556,"b"),b.Sb(557,"span"),b.Wb(),b.Wb(),b.Xb(558,"p",15),b.Xb(559,"span"),b.Nc(560,"Tableau\npour faciliter votre cr\xe9ation de lettre de motivation (r\xe9f\xe9rez-vous \xe0 votre "),b.Xb(561,"b"),b.Nc(562,"portefolio"),b.Wb(),b.Nc(563,"\nr\xe9alis\xe9 lors de la phase "),b.Xb(564,"b"),b.Nc(565,"Go\u2019n Believe"),b.Wb(),b.Nc(566,")"),b.Wb(),b.Wb(),b.Xb(567,"p",15),b.Xb(568,"span"),b.Nc(569,"\xa0"),b.Wb(),b.Wb(),b.Xb(570,"table",33),b.Xb(571,"tbody"),b.Xb(572,"tr"),b.Xb(573,"td",34),b.Xb(574,"p",35),b.Nc(575,"Vous"),b.Wb(),b.Wb(),b.Xb(576,"td",34),b.Xb(577,"p",35),b.Nc(578,"Moi"),b.Wb(),b.Wb(),b.Xb(579,"td",34),b.Xb(580,"p",35),b.Nc(581,"Nous"),b.Wb(),b.Wb(),b.Wb(),b.Xb(582,"tr"),b.Xb(583,"td",34),b.Xb(584,"p",36),b.Xb(585,"span",25),b.Nc(586,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Xb(587,"td",34),b.Xb(588,"p",36),b.Xb(589,"span",25),b.Nc(590,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Xb(591,"td",34),b.Xb(592,"p",36),b.Xb(593,"span",25),b.Nc(594,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(595,"p",15),b.Xb(596,"span"),b.Nc(597,"\xa0"),b.Wb(),b.Wb(),b.Wb(),b.Wb()}}function v(e,n){if(1&e&&(b.Xb(0,"div"),b.Xb(1,"div",37),b.Xb(2,"p"),b.Nc(3,"Le CV est comme une publicit\xe9 de vous-m\xeame et de votre parcours professionnel et scolaire."),b.Wb(),b.Xb(4,"p"),b.Nc(5,"L\u2019objectif du Cv est de vous mettre en lumi\xe8re en mettant en avant votre parcours, vos comp\xe9tences, qualit\xe9s et bien d\u2019autres atouts."),b.Wb(),b.Xb(6,"p"),b.Nc(7,"La lettre de motivation accompagne votre CV dans le cadre de vos candidatures. Elle va mettre en valeur vos aptitudes, capacit\xe9s, comp\xe9tences, qualit\xe9s et motivations en lien avec le poste vis\xe9."),b.Wb(),b.Xb(8,"p"),b.Nc(9,"Votre lettre de motivation refl\xe8te qui vous \xeates et comment vous vous projeter dans le poste et plus largement dans l\u2019entreprise pour laquelle vous postulez."),b.Wb(),b.Xb(10,"p"),b.Nc(11,"Ce sont deux outils incontournables pour vous faire conna\xeetre aupr\xe8s de votre futur employeur ou pour postuler aupr\xe8s d\u2019une \xe9cole."),b.Wb(),b.Xb(12,"p"),b.Nc(13,"D\xe9couvrez les 2 vid\xe9os ci-dessous et suivez la m\xe9thode pas \xe0 pas pour cr\xe9er votre CV professionnel et votre lettre de motivation."),b.Wb(),b.Wb(),b.Xb(14,"div",38),b.Xb(15,"div",39),b.Xb(16,"h4"),b.Nc(17,"VIDEO COMMENT CREER SON CV"),b.Wb(),b.Xb(18,"video",40),b.Sb(19,"source",41),b.Wb(),b.Wb(),b.Xb(20,"div",39),b.Xb(21,"h4"),b.Nc(22,"VIDEO LETTRE DE MOTIVATION"),b.Wb(),b.Xb(23,"video",40),b.Sb(24,"source",41),b.Wb(),b.Wb(),b.Wb(),b.Xb(25,"h4"),b.Nc(26,"Deux mod\xe8les Simple, facile et rapide"),b.Wb(),b.Xb(27,"div",38),b.Xb(28,"button",42),b.Nc(29,"CREER SON CV"),b.Wb(),b.Xb(30,"button",43),b.Nc(31,"EXEMPLES DE LETTRES DE MOTIVATION"),b.Wb(),b.Wb(),b.Wb()),2&e){var t=b.kc();b.Db(19),b.pc("src",t.cv,b.Gc),b.Db(5),b.pc("src",t.motivation,b.Gc)}}var h=function(){var e=function(){function e(n,t,b,s,a){_classCallCheck(this,e),this.http=n,this.clientService=t,this.userConnect=b,this.bnbecome=s,this.router=a,this.contexteValide=!1,this.objectifValide=!1,this.processValide=!1,this.entretien="assets/video/entretien.mp4",this.cv="assets/video/cv.mp4",this.motivation="assets/video/motivation.mp4",b.userAuthenticated&&(this.clientConnect=this.userConnect.isAuthenticated,this.userId=this.userConnect.userAuthenticated.id)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"contexte",value:function(){this.contexteValide?(this.contexteValide=!1,this.router.navigate(["/gonbecome/newCv"],{fragment:"haut"})):(this.contexteValide=!0,this.objectifValide=!1,this.processValide=!1,this.router.navigate(["/gonbecome/newCv"],{fragment:"contexte"}))}},{key:"objectif",value:function(){this.objectifValide?(this.objectifValide=!1,this.router.navigate(["/gonbecome/newCv"],{fragment:"haut"})):(this.objectifValide=!0,this.contexteValide=!1,this.processValide=!1,this.router.navigate(["/gonbecome/newCv"],{fragment:"objectif"}))}},{key:"process",value:function(){this.processValide?(this.processValide=!1,this.router.navigate(["/gonbecome/newCv"],{fragment:"haut"})):(this.processValide=!0,this.objectifValide=!1,this.contexteValide=!1,this.router.navigate(["/gonbecome/newCv"],{fragment:"process"}))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(b.Rb(s.b),b.Rb(a.a),b.Rb(i.a),b.Rb(o.a),b.Rb(c.e))},e.\u0275cmp=b.Lb({type:e,selectors:[["app-accueil-cv"]],decls:15,vars:4,consts:[["id","haut",1,"titre"],[1,"selection"],["fxHide.lt-sm","",1,"clic"],["mat-button","",1,"contexte",3,"click"],["mat-button","",1,"objectif",3,"click"],["mat-button","",1,"process",3,"click"],[1,"bndream"],["class","item","id","contexte",4,"ngIf"],["class","item","id","objectif",4,"ngIf"],["class","item","id","process",4,"ngIf"],[4,"ngIf"],["id","contexte",1,"item"],[1,"button-container"],["mat-mini-fab","","color","warn",3,"click"],[1,"texte"],[1,"Pardfaut"],[1,"Aucun"],["lang","ZH-TW"],["lang","IT"],["dir","RTL"],["lang","AR-SA","dir","RTL"],["lang","RU"],["lang","DE"],[2,"color","#c1260e"],["lang","DA"],["lang","EN-US"],["id","objectif",1,"item"],["id","process",1,"item"],[1,"Corps"],[1,"MsoListParagraph"],["lang","ES-TRAD"],["lang","PT"],[2,"color","#b65010"],["border","1","cellspacing","0","cellpadding","0","width","627",1,"TableNormal"],["width","209","valign","top"],[1,"Styledetableau2"],[1,"MsoNormal"],[1,"text"],[1,"container"],[1,"videoCV"],["width","500","height","300","controls",""],["type","video/mp4",3,"src"],["routerLink","/newCv/monCv",1,"btn","btn-success"],[1,"btn","btn-success"]],template:function(e,n){1&e&&(b.Xb(0,"h1",0),b.Nc(1,"R\xe9alisez votre CV et votre lettre de motivation"),b.Wb(),b.Xb(2,"div",1),b.Xb(3,"div",2),b.Xb(4,"button",3),b.gc("click",(function(){return n.contexte()})),b.Nc(5,"Contexte"),b.Wb(),b.Xb(6,"button",4),b.gc("click",(function(){return n.objectif()})),b.Nc(7,"Objectifs"),b.Wb(),b.Xb(8,"button",5),b.gc("click",(function(){return n.process()})),b.Nc(9,"Process"),b.Wb(),b.Wb(),b.Wb(),b.Xb(10,"div",6),b.Lc(11,l,143,0,"div",7),b.Lc(12,d,29,0,"div",8),b.Lc(13,N,598,0,"div",9),b.Wb(),b.Lc(14,v,32,2,"div",10)),2&e&&(b.Db(11),b.pc("ngIf",n.contexteValide),b.Db(1),b.pc("ngIf",n.objectifValide),b.Db(1),b.pc("ngIf",n.processValide),b.Db(1),b.pc("ngIf",n.clientConnect))},directives:[p.b,r.a,u.k,W.a,X.b,c.f],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.titre[_ngcontent-%COMP%]{margin:50px;text-align:center;color:#000;font-size:40px;font-family:Uberhand pro,serif;-webkit-text-decoration-style:double;text-decoration-style:double;-webkit-text-decoration-line:underline;text-decoration-line:underline;-webkit-text-decoration:#000;text-decoration:#000}.texte[_ngcontent-%COMP%]{margin:20px}.bndream[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}h2[_ngcontent-%COMP%]{text-align:center}.item[_ngcontent-%COMP%]{border:1px solid #b65010;padding:20px;margin-bottom:50px;border-radius:10px;width:70%}.button-container[_ngcontent-%COMP%]{font-family:Uberhand pro,serif;font-size:30px;background-color:#134a6b;color:#fff;padding:10px 50px 10px 10px}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;margin-top:-50px}.selection[_ngcontent-%COMP%]{background:#134a6b;border:solid #134a6b;height:60px;margin-bottom:60px}.contexte[_ngcontent-%COMP%]{background:#f8c620;color:#134a6b}.contexte[_ngcontent-%COMP%], .objectif[_ngcontent-%COMP%]{margin-top:10px;margin-right:50px}.objectif[_ngcontent-%COMP%]{background:#60cfbe;color:#fff}.process[_ngcontent-%COMP%]{background:#b65010;color:#000;margin-top:10px}.clic[_ngcontent-%COMP%]{float:right;margin-right:50px}h4[_ngcontent-%COMP%]{text-align:center;font-size:30px;margin:30px 50px;color:#134a6b}.text[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-family:Uberhand pro,serif}.text[_ngcontent-%COMP%]{margin-left:10%;font-size:20px}"]}),e}()}}]);