import lineNames from './constants'

export const lineColor = {
  1: '#EE1822',
  2: '#85C73F',
  3: '#FDD303',
  4: '#4E2C8D',
  5: '#8F57A2',
  6: '#D7156B',
  7: '#F26F1F',
  8: '#009DD7',
  9: '#67CCF6',
  10: '#B8A8CF',
  11: '#7C1F31',
  12: '#54ae11',
  13: '#E77DAD',
  16: '#78d6cd',
  17: '#78d6cd'
}

const linePath = {
  1: 'M1133,560 L1133,596 L1133,631 L1133,666 L1133,701 L1133,737 L1133,772 L1133,807 L1133,843 L1133,878 L1133,913 L1133,948 L1133,998 L1133,1059 L1175,1091 L1215,1122 L1215,1165 Q1204,1190 1174,1195 L1133,1195 L1076,1195 L1066,1195 L1036,1225 L1002,1260 L957,1303 L881,1378 L881,1488 L850,1520 L818,1552 L785,1584 L752,1619',
  2: 'M470,1122 L530,1122 L610,1122 L679,1122 L737,1122 L795,1122 L854,1122 L909,1122 L1003,1122 L1074,1122 L1133,1122 L1215,1122 L1298,1122 L1353,1122 L1390,1160 L1429,1196 L1483,1254 L1483,1312 Q1492,1345 1519,1355 L1604,1355 L1653,1355 L1703,1355 L1753,1355 L1803,1355 Q1825,1360 1830,1380 L1830,1415 L1830,1450 L1830,1485 L1830,1520 L1830,1555 L1830,1590',
  3: 'M1325,476 L1325,509 L1325,540 L1325,571 L1325,603 L1325,634 L1325,666 L1325,697 L1325,728 L1325,760 L1325,791 L1325,822 L1325,854 L1325,889 L1271,941 L1215,998 L1175,998 L1133,998 L1045,998 L953,998 Q923,1005 909,1027 L909,1064 L909,1122 L909,1165 L909,1203 L909,1260 L909,1307 L962,1363 L962,1413 L926,1446 L881,1488',
  4: 'M1175,1004 L1133,1004 L1045,1004 L953,1004 Q927,1009 915,1027 L915,1064 L915,1122 L915,1165 L915,1203 L915,1260 L957,1303 L996,1344 Q1019,1359 1045,1364 L1076,1364 L1133,1364 L1202,1364 L1250,1364 L1298,1364 L1350,1364 L1387,1328 L1417,1300 Q1427,1288 1429,1271 L1429,1252 L1429,1196 L1429,1107 L1429,1061 L1429,1031 L1429,1006 Q1418,982 1384,976 L1350,978 L1302,976 L1276,1003 L1175,1004',
  5: 'M752,1619 L752,1659 L752,1696 L752,1737 L752,1778 L752,1819 L752,1862 Q751,1879 739,1895 L715,1916 L669,1961 L653,1975 Q636,1986 612,1991 L577,1991 L502,1991',
  6: 'M1736,578 L1736,619 L1736,665 L1736,710 L1736,756 L1736,801 L1736,854 Q1736,883 1726,900 L1693,933 L1661,965 L1629,997 L1598,1028 L1565,1061 L1534,1092 L1502,1124 L1472,1154 L1429,1196 L1392,1233 Q1388,1239 1387,1252 L1387,1328 L1387,1378 L1387,1440 L1387,1459 L1360,1485 L1316,1530 L1284,1561 L1284,1583 L1284,1644 Q1278,1666 1256,1678 L1174,1678 L1077,1678',
  7: 'M953,583 L953,609 L953,636 L953,663 L953,689 L953,715 L953,742 L953,768 L953,795 L953,821 L953,848 L953,874 L953,901 L953,927 L953,954 L953,998 L1014,1064 L1032,1079 L1074,1122 L1076,1195 L1075,1260 L1076,1364 L1076,1429 Q1085,1471 1112,1483 L1130,1484 L1190,1484 L1250,1483 L1302,1485 L1360,1485 L1438,1485 L1474,1485 L1543,1417 L1604,1355 L1648,1312',
  8: 'M1547,555 L1547,599 L1547,641 L1547,684 L1547,729 L1521,755 L1495,781 L1469,807 L1443,832 L1418,858 L1401,874 Q1384,885 1361,889 L1325,889 L1258,889 Q1223,895 1215,926 L1215,1062 L1215,1122 L1242,1151 Q1248,1160 1251,1170 L1250,1175 L1250,1217 L1250,1260 L1250,1364 L1250,1430 L1250,1483 L1250,1517 L1250,1546 L1208,1546 L1191,1564 L1077,1678 L1077,1709 L1077,1747 L1077,1785 L1077,1823 L1077,1860 L1077,1898',
  9: 'M2110,970 L2040,970 L1970,970 L1940,970 L1864,1015 L1788,1060 L1712,1105 L1636,1150 L1560,1195 L1490,1220 L1452,1220 L1429,1196 L1370,1196 L1300,1260 L1250,1260 L1195,1260 L1165,1260 L1133,1260 L1075,1260 L1002,1260 L912,1260 L852,1260 L789,1260 L723,1260 L671,1260 L619,1260 L572,1260 L542,1260 L508,1291 L482,1317 L444,1354 L406,1392 L368,1430 L331,1468 L331,1508 L331,1548 L331,1588',
  '10a': 'M1443,636 L1443,663 L1443,690 L1443,717 L1443,744 L1443,771 L1443,798 L1443,832 L1443,885 L1411,918 L1350,978 L1314,1015 L1298,1031 L1298,1059 L1298,1122 L1298,1162 L1298,1204 Q1293,1213 1284,1217 L1250,1217 L1176,1217 L1133,1203 L1002,1203 L963,1203 L912,1203 L829,1203 L777,1203 L725,1203 L673,1203 L647,1173 L635,1157 L610,1128 L530,1128',
  '10b': 'M1443,636 L1443,663 L1443,690 L1443,717 L1443,744 L1443,771 L1443,798 L1443,832 L1443,885 L1411,918 L1350,978 L1314,1015 L1298,1031 L1298,1059 L1298,1122 L1298,1162 L1298,1204 Q1293,1213 1284,1217 L1250,1217 L1176,1217 L1133,1203 L1002,1203 L963,1203 L912,1203 L829,1203 L777,1203 L725,1203 L673,1203 L621,1203 L568,1203 L516,1203',
  '11a': 'M1772,1715 L1711,1715 L1650,1715 L1595,1715 L1503,1715 L1410,1715 L1318,1715 L1221,1715 L1162,1715 L1077,1678 L1001,1678 L1002,1542 L1002,1486 L1002,1429 L1002,1327 L1002,1260 L963,1240 L963,1203 L963,1141 L1003,1122 L956,1073 L909,1027 L871,988 L846,963 L819,937 L796,912 L796,880 L796,849 L796,818 L796,787 L796,755 L796,724 L796,674 L796,643 L796,609',
  '11b': 'M1221,1715 L1162,1715 L1077,1678 L1001,1678 L1002,1542 L1002,1486 L1002,1429 L1002,1327 L1002,1260 L963,1240 L963,1203 L963,1141 L1003,1122 L956,1073 L909,1027 L871,988 L846,963 L819,937 L796,912 L796,880 L796,849 L796,818 L796,787 L796,755 L796,724 L778,708 L760,691 L742,675 L724,659 L642,659 L562,659 L480,659',
  '12': 'M1939,970 L1937,900 L1875,900 L1816,900 L1726,900 L1682,900 L1598,900 L1540,900 L1508,936 L1480,966 L1454,996 L1429,1031 L1397,1064 L1355,1064 L1298,1064 L1215,1064 L1130,1064 L1130,1122 L1130,1203 L1130,1260 L1130,1364 L1076,1429 L1002,1429 L962,1413 L881,1378 L837,1378 L790,1378 L721,1378 L684,1378 L628,1378 L579,1378 L540,1378',
  '13': 'M1195,1334 L1195,1290 L1195,1260 L1176,1217 L1155,1167 L1136,1122 L1136,1100 L1136,1064 L1050,1064 L1014,1064 L980,1064 L956,1064 L909,1064 L859,1064 L810,1064 L774,1044 L737,1024 L675,1024 L609,1024',
  16: 'M1604,1355 L1604,1631 L1604,1715 L1604,1782 L1604,1854 L1604,1925 L1604,1971 L1640,1971 L1683,1971 L1750,1970 L1750,2035 L1749,2057 L1836,2055 L1916,2055 L1996,2055',
  17: 'M530,1118 L449,1118 L437,1126 L422,1141, L405,1162 L396,1185 L396,1231 L396,1251 L396,1271 L396,1291 L396,1324 L383,1338, L331,1338'
};

export default linePath;


