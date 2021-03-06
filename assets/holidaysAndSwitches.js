// --- VARIABLES TO TOGGLE THE SEPARATE CONTACT CHANNELS ON AND OFF ---

//set to true if the contact form should be hidden during live channel opening times, set to false if it should be displayed
var switchHideContactForm = false
//set to true if the phone number should be hidden, set to false if it should be displayed
var switchHidePhone = false
//set to true if the Chat should be hidden, set to false if it should be displayed
var switchHideChat = false


// --- ENTER HOLIDAYS HERE TO BE DISPLAYED IN THE HELPCENTER AND FOR THE WAITING TIMES TO BE REMOVED ---

//WHEN TO SHOW THE HOLIDAY INFORMATION TEXT (USUALLY STARTS SOME DAYS BEFORE THE ACTUAL HOLIDAY)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date to show the text', 'end date to stop showing the text', ID of the text to Display]
var showHolidays = {
    'ch' : [
        ['2022-06-03 00:00:00', '2022-06-06 22:00:00', 0]
    ],
    'eu' : [
        ['2022-06-15 00:00:00', '2022-06-16 22:00:00', 1]
    ],
    'chpe' : [
        ['2022-07-08 17:00:00', '2022-07-11 06:00:00', 2],
        ['2022-07-11 17:00:00', '2022-07-12 06:00:00', 2],
        ['2022-07-12 17:00:00', '2022-07-13 06:00:00', 2],
        ['2022-07-13 17:00:00', '2022-07-14 06:00:00', 2],
        ['2022-07-14 17:00:00', '2022-07-15 06:00:00', 2],
        ['2022-07-15 17:00:00', '2022-07-18 06:00:00', 2],
        ['2022-07-18 17:00:00', '2022-07-19 06:00:00', 2],
        ['2022-07-19 17:00:00', '2022-07-20 06:00:00', 2],
        ['2022-07-20 17:00:00', '2022-07-21 06:00:00', 2],
        ['2022-07-21 17:00:00', '2022-07-22 06:00:00', 2],
        ['2022-07-22 17:00:00', '2022-07-25 06:00:00', 2],
        ['2022-07-25 17:00:00', '2022-07-26 06:00:00', 2],
        ['2022-07-26 17:00:00', '2022-07-27 06:00:00', 2],
        ['2022-07-27 17:00:00', '2022-07-28 06:00:00', 2],
        ['2022-07-28 17:00:00', '2022-07-29 06:00:00', 2],
        ['2022-07-29 17:00:00', '2022-08-01 06:00:00', 2]
    ]
}
//THE TEXT TO BE DISPLAYED ACCORDING TO THE ID SET ABOVE
//NOTE: The values always need a leading <br>
var textToDisplay = {
    0 : {
        'de' : '<br>Pfingstmontag: 06.06. geschlossen',
        'fr' : "<br>Lundi de Pentec??te : 06.06. ferm??",
        'it' : '<br>Luned?? di Pentecoste: 06.06. chiuso',
        'en-US' : '<br>Whit Monday: 06.06. closed',
    },
    1 : {
        'de' : '<br>Fronleichnam: 16.06. geschlossen',
        'fr' : '<br>F??te-Dieu : 16.06. ferm??',
        'it' : '<br>Corpus Christi: 16.06. chiuso',
        'en-US' : '<br>Corpus Christi: 16.06. closed',
    },
    2 : {
        'de' : '<br><font color="red">Hinweis:</font> Eine direkte Produktberatung bieten wir nur w??hrend den ??ffnungszeiten an. Ausserhalb k??nnen Sie sich an unsere Community wenden.',
        'fr' : '<br><font color="red">Remarque :</font> Nous ne proposons un conseil direct sur les produits que pendant les heures d\'ouverture. En dehors de ces heures, vous pouvez vous adresser ?? notre communaut??.',
        'it' : '<br><font color="red">Nota bene:</font> Offriamo consulenza diretta sui prodotti solo durante gli orari di apertura. Al di fuori degli orari di apertura, potete contattare la nostra comunit??.',
        'en-US' : '<br><font color="red">Note:</font> We only offer direct product advice during opening hours. Outside of these hours, you can contact our community.'
    }
}

//WHEN TO HIDE THE WAITING TIMES (WHEN HOLIDAYS ARE ONGOING)
//NOTE THAT DATES MUST BE NOTED IN UTC TIME
//Values per Array: ['starting date of a holiday', 'ending date of a holiday']
var hideWaitingTimes = {
    'ch' : [
        ['2022-06-06 00:00:00', '2022-06-06 22:00:00']
    ],
    'eu' : [
        ['2022-06-16 00:00:00', '2022-06-16 22:00:00']
    ]
}