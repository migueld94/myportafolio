'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ed6b208fd795c45c8ffb70daddd3856",
".git/config": "68c60b21235a88e9eac9876ce7737e3b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "191de9f724ee2f1498532ac7a5f3e38e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "08c1143f973f730f43d5021460594b17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18a35cfd2aff5cb0e0a37a0a33454155",
".git/logs/refs/heads/master": "aa87082ef596715085e87b93390d65a3",
".git/logs/refs/remotes/origin/master": "86c5164cacf06a2bffc784401bc48e7f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/3f10af44021fd94114889d33722718db6f0ca9": "5a931ac8725438924c7b78afb87605ca",
".git/objects/05/0c0928c1f770fcc8bb3cc3a7152bcf42246346": "5cfb4446ecd79ff8375802cd46853e56",
".git/objects/08/ec228a768a2b307c5bff8b24e8d85d9449a4f2": "7df8ba1612a59788d72550b95a994857",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/0a/00f63fe98df5edcbdf872cf7e686e082a0cc6c": "c81acb49382ada798f0efa0f16eeaa35",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/db2795e51c26f0d39f40e950c08b55de9c2b7f": "55b57e2a12bbd5022fd79c10c23cff9e",
".git/objects/0c/b4efae9b3472a80f5a03f8d65e00a94136facb": "f257afb47e0ebb2f4825791b4c2a3774",
".git/objects/0e/65bc8ca0ee962f247c33b584ed8865e39256f8": "75195e2ad899e2d0b536eb0c0345ce01",
".git/objects/13/26a7dcf5f3b22e69b0d996e99dae800e71fc68": "c135169e56efcadbd51b3b9eba33750f",
".git/objects/13/ab7bb79014c804371a3e8b66151cff4fb6914c": "a7f3e6cd195e1bbbc356968f30f9d4a3",
".git/objects/14/11e0713adc2541632518f6afd95277787d75ce": "facb73d44be9d176bd5cf83e496787da",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/17/9e09cc0499cadc120867dce8c3a9519fec845c": "afb3464ebc01118dae31cc02635f6d08",
".git/objects/1c/0c8dc8e784016d5697d54e9e59152704684438": "ec1a2ee98cc9ac90b5e3b9a3fb93d742",
".git/objects/1c/e8410f04634ed885d9c306f13958b9f8b4f380": "5a0f62eef0dd19b999e4cdd6735cd09c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/37f4a783f84a94a13e271a07b63c18b4957b73": "f606e1f2bc9d6c1d15175bbb06666a70",
".git/objects/21/198cc2f46be43e078796588cc6da04294f6e8c": "7d2eb4aa345432cc826b62b9215415c7",
".git/objects/25/6e0be4cbef9b76d3a4cf8bd27b4a235012e6af": "de4f8dd46d0ffc55db311e29ab3157d9",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/27/405dbcf184021fec5ab248ea94c89afa67e748": "09aecb5dad63c4ddf6001f224410a235",
".git/objects/2a/396d4a5aa7ba78f7844a7eee0e8612e05e0635": "ab6ef2f35712a33d2ac4e9255d1602f3",
".git/objects/2b/a9db46016e39e882ab63f9e149b74fd0fc1c40": "ac6cdd7f8062ae2c20c0ece445426eb8",
".git/objects/2c/0365d42789153f2a8f8a742a39e04d7edadf01": "1c9d03f8285574ea6c24eafc9f81348e",
".git/objects/2d/928f68be28322d0900d0c76cb64b65ce5f2826": "ea6cc1840cddbd055a6affbafaed47a2",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/38d09469a4c5fdd0c4d90db3c0eade626d0ffc": "82b7bf50d3d9be9a9943f0c069c053ed",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/5ec03bd556156ef5a3c7b2c1339544846043c5": "d3dff730395e520949b912c016fdae39",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/e1ce9c919f9c5e3e689e7ec85645d75c7c21bb": "72972eea16df152fdc0a56befae31671",
".git/objects/3f/13aee2f58c5e46fcd62d5b366d04fc6f07ebdf": "89d571fd96532cf0bf169f0ff4a59801",
".git/objects/47/2df267114585f769f837deacf5362737f91d59": "be65685a48a531e43c0dc83627501825",
".git/objects/4e/51770ff8bdf46fd05412eafb9f9e21ecb938d3": "0097f19be319b568dc0c0252f89a87f2",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/ad154ae579c485473e193958fa1781d623404e": "75a26a2834a5c4d97342ca4ee12e8af4",
".git/objects/55/b816c68522768e8d255c447ce4fb37af7b7f59": "a8e3083e124b24bad1400aed179f2d28",
".git/objects/56/3ccb5e76ec3570f5c7a7999ed521ea54e8a925": "f963f79e79c89d56363006ee20c2d561",
".git/objects/5c/fe79ca22a05d7252366666b8a0b4aeee09dc9d": "05295bfc7ce505a4078cb91089c4f25d",
".git/objects/60/063eab1b59593bf7478027ec73a0cf9960abb5": "94bf4d7048c89fa40b6c8e0f7143e408",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/d813574e621ffb3d8b3d7f0d590d5a08913a88": "36029a543414c2c0c7c8067c001b5748",
".git/objects/6d/5123acf76eb29d8fb9dbc5d4c37c443855d361": "267b81e4376125cf72b601ba057c6f38",
".git/objects/6e/c1895d2c0a84c6046a5681d284561ac7793094": "58e2394a4f94bb6c58829254261397d6",
".git/objects/6f/ec09572352273c88403188071464185c563bca": "fe7219e91ef9b109ac9905f400142f78",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/1765e6e6bfaecbcd422fe8b819b685273b8a80": "0f4aa266574799ad6b7b8290b0648f20",
".git/objects/74/189df354efbe81ff6d6b69da03bd887e410fe3": "4724940b8fb745f7b5c197e6291c0560",
".git/objects/7c/a4d23c41a379a1e5b0393f0ac3efbb6feb1a94": "867f7d25449097deb06efa99bd9b798e",
".git/objects/81/c2a96b71e4fb6a6091a1f50118504e90577777": "014c40f04a4413ef4043d61857e0c77d",
".git/objects/81/d557c5b26d7ddbfe53a6b275685e264a01b496": "161ea918a7add586c453f22e3d1d4316",
".git/objects/88/6134dcfa3c784be09217fe57bf3aac9f059bf2": "5f0760a554ef042e2622fa5103ec4b15",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/97470b01f45bd6328b3131d28a038531f08f85": "7be7e844b6bf18849c31b31ac612f239",
".git/objects/94/11bfbe9801bdde3c7e12fe0af069ad39df5eb0": "2c4aaef84a08f12548d4cf6c36127181",
".git/objects/9b/faa08ddd69c4101e80fbb2eeb2f360f405df74": "6fca3b625fe9430ce1a319597d938e71",
".git/objects/9e/2ef37a9cb2e1c645796e78e811736423e469f3": "716202a4281651eeb108b960f1011865",
".git/objects/9f/f60b84373a9dffda3a639621779035a389ab04": "b8d1e3af15f0af138015dc0d4c1b006d",
".git/objects/a0/2d68ffbb023d9a4a68c3e04c26fa8996dbdb10": "8a57195b3d5fa072f3b6d3821b8922a1",
".git/objects/a0/6fc6e1430e953c9fe88e642a2d4486e170051c": "358576304937b916127a5f841341693a",
".git/objects/a1/1bb93dc2e82e77a0b303c06e0fad4d28c6110e": "ad5c90cb10555c2dfbcbc0f7320a6d94",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a3/3494d681e26729db868c2eb336bd726ab3a588": "00092a1857ae5f0126da52bcc3b9145c",
".git/objects/a5/c042596ad40c2cf8521e315869e2f5c0f009e2": "850ea298a10d33d62264aad4b312b88c",
".git/objects/ab/2a3be0b77c9b1ef93a1479c71ff1cb41c65511": "37a23c1fa068d4f7eafd8bdb7178e7a1",
".git/objects/ab/5e3de77cf5ab965b4d5ec2493ff55f08d44a4e": "472a904e9801413796a37199c0e08ef6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b1/0c7be130054279298780a647a5bde2cc290490": "0445e2a5040d321e8b3033f24a4fa17e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/fd63bebbf6f4cd8ea4a5df6c2fb9c99a1d802d": "cae88289912c7a149f2b1b94e3d73fc2",
".git/objects/b4/65e5a22bdac83e0a70c63421f2fe72a9e22460": "9f188a102b2ca8652af7556408f9f227",
".git/objects/b4/ba5a1fd800a114f44478ccbba94225e6e07564": "5d10f6b9691f0fb940260270f6199cda",
".git/objects/b7/3a272e7248f83bf26670031cb91e0b76b385b9": "cf40fcca83560fcfb4d8bc9569a71a21",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/3390b8c238b04377d4d8d74e96af40f9d6693d": "aa86576f1c3b92f19f52c2859d99dce6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/f83bf89311f3c54685d7d33e435a5bf556906e": "008261c92d9c5bdbbbeffbe436abde69",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/bf/fce10eb76bf578017a29c25091ffefed90281f": "50d465431c13af1e858173e9c91f8fb8",
".git/objects/c1/8fff9358fbcf2e737d7cbf989626b647de608c": "7ee13578034e01d52ab9c4a1645e19b7",
".git/objects/c3/d1868d7ea72af9142efa698111f199e597425d": "9e21d395efccee0165cb0808a87a5e29",
".git/objects/c3/e607594efb1b69ca52487f8c431fb5beb3a3a8": "6b9cd5daf133d035a838b7ac27c17ace",
".git/objects/ce/352327c9c8f9909ad1d5cd7751075c535bfae9": "b58316c19b114258e9db4d193d753124",
".git/objects/d0/d894849d58bdcb623474c98360f5c791ec255f": "c5a1e22a1edd37af2fefe7e4e2f216a2",
".git/objects/d2/0e95f7bc901785c3a42f350feb4403dd329142": "559137af153fca590fdc48efc2c5d188",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/5e864650c3a2750282318037ddd562f62d4ce1": "8bbea19b7108ec059a666e6304a5e94d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5f425fa59bd31f5ed5463a6949408fecff9941": "183648abe0737fc8bc5cabc9837dadc8",
".git/objects/d9/eabf95ef4b8ad414b5228f8e823a4068b16586": "96b68e67217904523e65a33ace0227b7",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/dd/0629865a288c948187493e2baede269d2cbcdc": "9fbb800347b9bdcde294288a37bf4fae",
".git/objects/dd/96ab2dc7892376799c931af38fdb8ff678f9c4": "905c7883d170feb04434aa1f90ee4970",
".git/objects/dd/a3a599ee8b646b224f458755440c2e52959719": "f3955a24c0193431278b8b83575fa801",
".git/objects/df/d3cab3c6152f8fa5198fcd491ba860a22432b1": "65b4c08bc4d7ff987fc13dadc7d73a23",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e1/cfe1b2dc467e56beb5c934a225f59bb326714e": "3efdad11352cf6c4f41de1cc15c1ad96",
".git/objects/e2/4c1d61a49f7d9717226f72faad2e4b37e8cc60": "477c07954e71ac7550effda5c4f1c0c6",
".git/objects/e6/4c0fef6b20de629b2a1d445521eece99df25c5": "2c550a844367c1e242db7ffb653b5973",
".git/objects/ea/10d4bcfd9801ebe9439e6a16d9b3cc18a8efd4": "7c778f3c17aceaaa18a650fc973d5a65",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f4/ab1149644bd5351ee3665e7154e44095e32633": "726d63176e74e8e87bd644d35fd4696a",
".git/ORIG_HEAD": "ff50081c818a18be985be84df27afb29",
".git/refs/heads/master": "ff50081c818a18be985be84df27afb29",
".git/refs/remotes/origin/master": "ff50081c818a18be985be84df27afb29",
"assets/AssetManifest.json": "1e5b298ac0fad96d7f50d6b74d80934e",
"assets/AssetManifest.smcbin": "df221d8a3de89f34f15ec3a5e29085a8",
"assets/assets/curriculum/cv_en.pdf": "851f51c2cf567548d7b4d391f4b5302c",
"assets/assets/curriculum/cv_es.pdf": "1670ecac9b000f09380dd41d122d17a7",
"assets/assets/fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf": "14e83abff83f855acdf3bfd30da3ad79",
"assets/assets/fonts/Nunito/Nunito-VariableFont_wght.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/assets/fonts/Nunito/static/Nunito-Black.ttf": "27ee28fd596c0bd4235fa792d0d8b1ce",
"assets/assets/fonts/Nunito/static/Nunito-BlackItalic.ttf": "47e66b00cd98f1925da80dd6b7ff29a1",
"assets/assets/fonts/Nunito/static/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito/static/Nunito-BoldItalic.ttf": "dc69781f4856bdb711087d1ae07ca208",
"assets/assets/fonts/Nunito/static/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/assets/fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf": "e01118312e526f062fc8ad8f3c64de0e",
"assets/assets/fonts/Nunito/static/Nunito-ExtraLight.ttf": "ef7ff1b92707646c2e02a39067aab385",
"assets/assets/fonts/Nunito/static/Nunito-ExtraLightItalic.ttf": "f9088a8e7dae2fc4e88975f6e1726c93",
"assets/assets/fonts/Nunito/static/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/fonts/Nunito/static/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/assets/fonts/Nunito/static/Nunito-LightItalic.ttf": "cdf25a6c9cbb6def64afcc30d3e511b9",
"assets/assets/fonts/Nunito/static/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/fonts/Nunito/static/Nunito-MediumItalic.ttf": "bd282ec988480f875b2f7cb0465ff7fa",
"assets/assets/fonts/Nunito/static/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito/static/Nunito-SemiBold.ttf": "38257ec36f55676f98fcdf1264adb69d",
"assets/assets/fonts/Nunito/static/Nunito-SemiBoldItalic.ttf": "4c2772c15392fbfdb077342b7851f66c",
"assets/assets/images/profile-circle.png": "262c399cc6ce2a8f2becc8b3a00f2804",
"assets/FontManifest.json": "a54c4e6cd5177365feb9e8f5c69be408",
"assets/fonts/MaterialIcons-Regular.otf": "8d902d0558221a8829ff53e626ec1834",
"assets/NOTICES": "563ab50de51282e10f20a3e8b10e2228",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/profile-circle.png": "262c399cc6ce2a8f2becc8b3a00f2804",
"index.html": "7daeaff851fa2bd5ce31848683c73f26",
"/": "7daeaff851fa2bd5ce31848683c73f26",
"main.dart.js": "01e1a12e0dbdb8efacf359d541e509d2",
"manifest.json": "d86bf755dc285260ec5fbf8e850963c0",
"version.json": "bf65094aea51fdbf7dc5e35ef4f772a9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
