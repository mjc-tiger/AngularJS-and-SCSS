var app = angular.module('app', []);
app.controller('tableController', [ '$scope','$filter', function($scope, $filter){
  $scope.jumpers =  [
 {
   "Rank": 1,
   "Bib": 40,
   "Name": "KUBACKI Dawid",
   "Tot. Points": 255.6
 },
 {
   "Rank": 2,
   "Bib": 47,
   "Name": "KOT Maciej",
   "Tot. Points": 252.2
 },
 {
   "Rank": 3,
   "Bib": 41,
   "Name": "GEIGER Karl",
   "Tot. Points": 251.5
 },
 {
   "Rank": 4,
   "Bib": 49,
   "Name": "TANDE Daniel Andre",
   "Tot. Points": 245.2
 },
 {
   "Rank": 5,
   "Bib": 33,
   "Name": "HULA Stefan",
   "Tot. Points": 243.9
 },
 {
   "Rank": 6,
   "Bib": 36,
   "Name": "KOUDELKA Roman",
   "Tot. Points": 243.3
 },
 {
   "Rank": 7,
   "Bib": 25,
   "Name": "COLLOREDO Sebastian",
   "Tot. Points": 242.9
 },
 {
   "Rank": 8,
   "Bib": 4,
   "Name": "GANGNES Kenneth",
   "Tot. Points": 241.2
 },
 {
   "Rank": 9,
   "Bib": 38,
   "Name": "LEYHE Stephan",
   "Tot. Points": 240.6
 },
 {
   "Rank": 10,
   "Bib": 43,
   "Name": "JOHANSSON Robert",
   "Tot. Points": 239.5
 },
 {
   "Rank": 11,
   "Bib": 26,
   "Name": "SEMENIC Anze",
   "Tot. Points": 236.1
 },
 {
   "Rank": 12,
   "Bib": 31,
   "Name": "SCHLIERENZAUER Gregor",
   "Tot. Points": 235.2
 },
 {
   "Rank": 13,
   "Bib": 45,
   "Name": "ZYLA Piotr",
   "Tot. Points": 234.5
 },
 {
   "Rank": 14,
   "Bib": 19,
   "Name": "LARINTO Ville",
   "Tot. Points": 234
 },
 {
   "Rank": 15,
   "Bib": 15,
   "Name": "ALTENBURGER Florian",
   "Tot. Points": 233.2
 },
 {
   "Rank": 16,
   "Bib": 46,
   "Name": "PREVC Peter",
   "Tot. Points": 233.1
 },
 {
   "Rank": 17,
   "Bib": 18,
   "Name": "BRESADOLA Davide",
   "Tot. Points": 232.5
 },
 {
   "Rank": 18,
   "Bib": 3,
   "Name": "KRANJEC Robert",
   "Tot. Points": 231.9
 },
 {
   "Rank": 19,
   "Bib": 48,
   "Name": "WELLINGER Andreas",
   "Tot. Points": 230.6
 },
 {
   "Rank": 20,
   "Bib": 32,
   "Name": "LANISEK Anze",
   "Tot. Points": 228.9
 },
 {
   "Rank": 21,
   "Bib": 35,
   "Name": "FANNEMEL Anders",
   "Tot. Points": 227.3
 },
 {
   "Rank": 22,
   "Bib": 28,
   "Name": "AIGNER Clemens",
   "Tot. Points": 226.4
 },
 {
   "Rank": 23,
   "Bib": 22,
   "Name": "INSAM Alex",
   "Tot. Points": 225.4
 },
 {
   "Rank": 24,
   "Bib": 37,
   "Name": "KOFLER Andreas",
   "Tot. Points": 225.1
 },
 {
   "Rank": 25,
   "Bib": 13,
   "Name": "PAVLOVCIC Bor",
   "Tot. Points": 225
 },
 {
   "Rank": 26,
   "Bib": 20,
   "Name": "ROMASHOV Alexey",
   "Tot. Points": 220.4
 },
 {
   "Rank": 27,
   "Bib": 8,
   "Name": "PEIER Killian",
   "Tot. Points": 219
 },
 {
   "Rank": 28,
   "Bib": 34,
   "Name": "AMMANN Simon",
   "Tot. Points": 216.8
 },
 {
   "Rank": 29,
   "Bib": 2,
   "Name": "WOLNY Jakub",
   "Tot. Points": 212.5
 },
 {
   "Rank": 30,
   "Bib": 16,
   "Name": "DESCHWANDEN Gregor",
   "Tot. Points": 210.9
 },
 {
   "Rank": 31,
   "Bib": 50,
   "Name": "STOCH Kamil",
   "Tot. Points": 105.6
 },
 {
   "Rank": 32,
   "Bib": 42,
   "Name": "DESCOMBES SEVOIE Vincent",
   "Tot. Points": 105.3
 },
 {
   "Rank": 32,
   "Bib": 9,
   "Name": "AALTO Antti",
   "Tot. Points": 105.3
 },
 {
   "Rank": 34,
   "Bib": 14,
   "Name": "MURANKA Klemens",
   "Tot. Points": 104.8
 },
 {
   "Rank": 35,
   "Bib": 17,
   "Name": "ZNISZCZOL Aleksander",
   "Tot. Points": 101.9
 },
 {
   "Rank": 36,
   "Bib": 27,
   "Name": "BICKNER Kevin",
   "Tot. Points": 101.4
 },
 {
   "Rank": 37,
   "Bib": 11,
   "Name": "HUBER Daniel",
   "Tot. Points": 100.7
 },
 {
   "Rank": 38,
   "Bib": 39,
   "Name": "TEPES Jurij",
   "Tot. Points": 100
 },
 {
   "Rank": 39,
   "Bib": 29,
   "Name": "STURSA Vojtech",
   "Tot. Points": 97.6
 },
 {
   "Rank": 40,
   "Bib": 23,
   "Name": "POLASEK Viktor",
   "Tot. Points": 95.8
 },
 {
   "Rank": 41,
   "Bib": 24,
   "Name": "VANCURA Tomas",
   "Tot. Points": 94.7
 },
 {
   "Rank": 42,
   "Bib": 44,
   "Name": "FREITAG Richard",
   "Tot. Points": 94.3
 },
 {
   "Rank": 42,
   "Bib": 1,
   "Name": "KANTYKA Przemyslaw",
   "Tot. Points": 94.3
 },
 {
   "Rank": 44,
   "Bib": 10,
   "Name": "SATO Yukiya",
   "Tot. Points": 92.1
 },
 {
   "Rank": 44,
   "Bib": 7,
   "Name": "ZUPANCIC Miran",
   "Tot. Points": 92.1
 },
 {
   "Rank": 46,
   "Bib": 5,
   "Name": "TROFIMOV Roman Sergeevich",
   "Tot. Points": 87.7
 },
 {
   "Rank": 47,
   "Bib": 12,
   "Name": "TOLLINGER Elias",
   "Tot. Points": 84.6
 },
 {
   "Rank": 48,
   "Bib": 21,
   "Name": "KOBAYASHI Junshiro",
   "Tot. Points": 83.3
 },
 {
   "Rank": 49,
   "Bib": 6,
   "Name": "BJOERENG Joacim Oedegaard",
   "Tot. Points": 71
 }
];
}]);
