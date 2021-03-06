function filldynamicWording(){
    var portal = window.location.hostname;

    //Variabeln Öffnungszeiten Telefon
    var uhrzeitPrivatkunde = "";
    var uhrzeitPrivatkunde2 = "";
    var tagePrivatkundeDE = "";
    var tagePrivatkundeFR = "";
    var tagePrivatkundeIT = "";
    var tagePrivatkundeEN = "";
    var tagePrivatkunde2DE = "";
    var tagePrivatkunde2FR = "";
    var tagePrivatkunde2IT = "";
    var tagePrivatkunde2EN = "";

    //Variabeln Öffnungszeiten Chat

    var tagePrivatkundeChatDE = "";
    var tagePrivatkundeChatFR = "";
    var tagePrivatkundeChatIT = "";
    var tagePrivatkundeChatEN = "";
    var tagePrivatkunde2ChatDE = "";
    var tagePrivatkunde2ChatFR = "";
    var tagePrivatkunde2ChatIT = "";
    var tagePrivatkunde2ChatEN = "";
    var tagePrivatkunde2ChatMobileDE = "";

    var privacynoticeDE = '';
    var privacynoticeEN = '';
    var privacynoticeFR = '';
    var privacynoticeIT = '';

    var telPrivatkunde = "";
    var telFirmenkunde = "";
    var telPrivatkundeText = "";
    var telFirmenkundeText = "";


    switch(portal){
        case'helpcenter.digitec.ch':
                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacy statement</a>';

                telPrivatkunde = "+41445759500";
                telPrivatkundeText = "+41 44 575 95 00";
                telFirmenkunde = "+41445759600";
                telFirmenkundeText = "+41 44 575 96 00";    
                break;
        case'helpcenter.galaxus.ch':
                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.ch/wiki/2791" target="blank">Privacy statement</a>';

                telPrivatkunde = "+41445759800";
                telPrivatkundeText = "+41 44 575 98 00";
                telFirmenkunde = "+41445759900";
                telFirmenkundeText = "+41 44 575 99 00";                
                break;
        case'helpcenter.galaxus.de':
                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkunde2DE = " | Sa ";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = " | Sa ";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = " | Sat ";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = " | Sa ";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "09:00 - 17:00";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.de/wiki/5567" target="blank">Privacy statement</a>';

                telPrivatkunde = "+4940334614747";
                telPrivatkundeText = "+49 (0)40 334 614 747";
                telFirmenkunde = "+4940334614748";
                telFirmenkundeText = "+49 (0)40 334 614 748";
                break;
        case'helpcenter.galaxus.at':
                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkunde2DE = " | Sa ";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = " | Sa ";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = " | Sat ";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = " | Sa ";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 20:00";
                uhrzeitPrivatkunde2 = "09:00 - 17:00";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.galaxus.at/wiki/5567" target="blank">Privacy statement</a>';

                telPrivatkunde = "+43800017837";
                telPrivatkundeText = "+43 800 017 837";
                telFirmenkunde = "+43800017837";
                telFirmenkundeText = "+43 800 017 837";
                break;
        case'helpcenter.connect.digitec.ch':
                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 17:00";
                uhrzeitPrivatkunde2 = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacy statement</a>';

                telPrivatkunde = "+41445759700";
                telPrivatkundeText = "+41 44 575 97 00";
                telFirmenkunde = "+41445759700";
                telFirmenkundeText = "+41 44 575 97 00";    
                break;
        default:
                //Öffnungszeiten
                tagePrivatkundeDE = "Mo - Fr "; 
                tagePrivatkundeFR = "Lu - Ve "; 
                tagePrivatkundeIT = "Lun - Ven "; 
                tagePrivatkundeEN = "Mo - Fr "; 
                tagePrivatkunde2DE = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2FR = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2IT = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                tagePrivatkunde2EN = "";  //WICHTIG: braucht leading " |  " wenn befüllt
                uhrzeitPrivatkunde = "08:00 - 19:00";
                uhrzeitPrivatkunde2 = "";
                privacynoticeDE = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Datenschutzerklärung</a>';
                privacynoticeFR = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Déclaration de protection des données</a>';
                privacynoticeIT = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Informativa sulla protezione dei dati</a>';
                privacynoticeEN = '<a style="color:white;font-size:13px;" href="https://www.digitec.ch/wiki/2791" target="blank">Privacy statement</a>';

                telPrivatkunde = "+41445759800";
                telPrivatkundeText = "+41 44 575 98 00";
                telFirmenkunde = "+41445759900";
                telFirmenkundeText = "+41 44 575 99 00";                
                break;
    }


    
    var dynamicWording = {

        de: {
        'privateCustomers' : 'Privatkunden',
        'businessCustomers' : 'Firmenkunden',
        'chatUs': 'Chatte mit uns',
        'callUsPrivate' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Ruf uns an <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Schon gewusst:',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeDE,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2DE,
        'openingHours2' : uhrzeitPrivatkunde2,
        'phone' : 'Telefon',
        'chat' : 'Chat',
        'email' : 'Kontaktformular',
        'emailDescription' : 'Wartezeit <font class="mailWaitTime">1-2</font> Tage',
        'emailDescriptionMobile' : 'Wartezeit <font class="mailWaitTime">1-2</font> Tage',
        'contact' : 'Kontaktiere uns',
        'questionNotAnswered' : 'Deine Frage ist nicht beantwortet?',
        'noAnswerFound' : 'Keine passende Antwort gefunden?',
        'writeUs' : 'Schreib uns',
        'recommendedChannel' : 'Empfohlener Kanal',
        'searchBoxText' : 'Wie können wir dir helfen?', 
        'infoNoteText' : '<br>Aufgrund der aktuellen Wetter- bzw. Strassensituation ist mit Verspätungen bei der Paketzustellung durch die Post zu rechnen. Besten Dank für dein Verständnis<br>&nbsp;',
        'contactFormInfoText' : 'Per Chat, Telefon oder Kontaktformular - wähle nur deine Kundengruppe und den passenden Anfragegrund.',
        'headerTitle' : 'Kontaktiere uns',
        'chatNotOnline': 'Nicht verfügbar',
        'recommendedChannel' : 'EMPFOHLEN',
        'backButtonText' : 'Zurück zur Kontaktauswahl',
        'feedbackHeader' : 'Feedbackformular',
        'feedbackDescription' : 'Bitte verwende das Formular lediglich für Verbesserungsvorschläge zu unseren Beiträgen.<br>Leider können wir nicht auf dein Feedback antworten. Für deine Kundenanfragen kannst du gerne das <a href="/hc/requests/new">Kontaktformular</a> verwenden.<br>Achtung: Auf Kundenanfragen über das Feedbackformular wird nicht geantwortet!',
        'chooseCustomerGroup' : 'Wähle deine Kundengruppe',
        'chooseRequestReason' : 'Wähle deinen Anfragegrund',
        'contactOptions' : 'Deine Kontaktmöglichkeiten',
        'chatLanguage' : 'Sprache:',
        'chatLanguage2' : 'Deutsch',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Jetzt kontaktieren',
        'chatWaitTime': 'Wartezeit <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Wartezeit <font class="callWaitTime"></font> min',
        'toShop' : '<a href="https://www.digitec.ch/" target="blank">Zum Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Vielen Dank für deine Anfrage!',
        'ticketSubmintConfirmationTextPt1' : '&#10003 Deine Anfrage wurde erfolgreich übermittelt.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'Wir senden dir eine Kopie deiner Anfrage an ',
        'ticketSubmintConfirmationTextPt3' : '. Falls sich dein Anliegen in der Zwischenzeit geklärt hat, antworte mit #closeticket auf die E-Mail.<br><br>',
        'backToHelpcenter' : 'Zurück zum Helpcenter',
        'privacynotice' : privacynoticeDE
    },
        fr: {      
        'privateCustomers' : 'Clients privés',
        'businessCustomers' : 'Clients professionnels',
        'chatUs': 'Chattez avec nous',
        'callUsPrivate' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusiness" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Appelez-nous <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Le saviez-vous :',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeFR,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2FR,
        'openingHours2' : uhrzeitPrivatkunde2,
        'phone' : 'Téléphone',
        'chat' : 'Chat',
        'email' : 'Formulaire de contact',
        'emailDescription' : "Réponse dans 1-2 jours",
        'emailDescriptionMobile' : "Réponse dans 1-2 jours",
        'contact' : 'Contactez-nous',
        'questionNotAnswered' : 'Pas trouvé votre réponse ?',
        'noAnswerFound' : 'Vous n\'avez pas trouvé la bonne réponse ?',
        'writeUs' : 'Ecrivez-nous',
        'recommendedChannel' : 'Canal recommandé',
        'searchBoxText' : 'Comment pouvons-nous vous aider?',
        'infoNoteText' : '<br>En raison des conditions météorologiques et de la situation routière actuelles, il faut s\'attendre à des retards dans la livraison des colis par la Poste suisse. Merci de votre compréhension<br>&nbsp;',
        'contactFormInfoText' : 'Par chat, téléphone ou formulaire - choisissez simplement votre groupe de clients et le motif de la demande.',
        'headerTitle' : 'Contactez-nous',
        'chatNotOnline': 'Non disponible',
        'recommendedChannel' : 'RECOMMANDE',
        'backButtonText' : 'Retour à la sélection des contacts',
        'feedbackHeader' : 'Formulaire de commentaires',
        'feedbackDescription' : 'Veuillez utiliser le formulaire uniquement pour suggérer des améliorations à nos articles.<br>Malheureusement, nous ne pouvons pas répondre à vos commentaires. Pour les demandes de vos clients, vous pouvez utiliser le <a href="/requests/new">formulaire de contact</a>.<br>Attention : Nous ne répondons pas aux demandes des clients via le formulaire de feed-back!',
        'chooseCustomerGroup' : 'Choisissez votre groupe de clients',
        'chooseRequestReason' : 'Choisissez le motif de votre demande',
        'contactOptions' : 'Vos options de contact',
        'chatLanguage' : 'Langue:',
        'chatLanguage2' : 'Français',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Contacter maintenant',
        'chatWaitTime': 'Réponse en <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Réponse en <font class="callWaitTime"></font> min',
        'toShop' : '<a href="https://www.digitec.ch/" target="blank">Vers le Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Merci pour votre demande !',
        'ticketSubmintConfirmationTextPt1' : '&#10003 Votre demande a été transmise avec succès.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'Nous vous enverrons une copie de votre demande à ',
        'ticketSubmintConfirmationTextPt3' : '. Si votre demande a été résolue entre-temps, répondez à l\'e-mail avec #closeticket.<br><br>',
        'backToHelpcenter': 'Retour au Helpcenter',
        'privacynotice' : privacynoticeFR
        },
        it: {
        'privateCustomers' : 'Clienti privati',
        'businessCustomers' : 'Clienti commerciali',
        'chatUs': 'Chatta con noi',
        'callUsPrivate' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Chiamaci <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Chiamaci <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Lo sapevi:',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeIT,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2IT,
        'openingHours2' : uhrzeitPrivatkunde2,
        'phone' : 'Telefono',
        'chat' : 'Chat',
        'email' : 'Modulo di contatto',
        'emailDescription' : "Risposta in 1-2 giorni",
        'emailDescriptionMobile' : "Risposta in 1-2 giorni",
        'contact' : 'Contattaci',
        'questionNotAnswered' : 'Non risolve il tuo problema?',
        'noAnswerFound' : 'Non hai trovato la risposta giusta?',
        'writeUs' : 'Scrivici',
        'recommendedChannel' : 'Canale consigliato',
        'searchBoxText' : 'Come possiamo aiutarla?',
        'infoNoteText' : '<br>A causa dell\'attuale situazione meteorologica e stradale, si prevedono ritardi nella consegna dei pacchi da parte della Posta Svizzera. Grazie per la vostra comprensione<br>&nbsp;',
        'contactFormInfoText' : 'Tramite telefono, chat o modulo di contatto – seleziona il tuo gruppo di clienti e il motivo della tua richiesta.',
        'headerTitle' : 'Contattaci',
        'chatNotOnline': 'Non disponible',
        'recommendedChannel' : 'RACCOMANDATO',
        'backButtonText' : 'Torna alla selezione dei contatti',
        'feedbackHeader' : 'Modulo di feedback',
        'feedbackDescription' : 'Si prega di utilizzare il modulo solo per suggerire miglioramenti ai nostri post.<br>Purtroppo, non possiamo rispondere al tuo feedback. Per le richieste dei tuoi clienti puoi usare il <a href="/requests/new">formulario di contatto</a>.<br>Attenzione: non rispondiamo alle richieste dei clienti tramite il modulo di feedback!',
        'chooseCustomerGroup' : 'Scegli il tuo gruppo di clienti',
        'chooseRequestReason' : 'Scegli il motivo della tua richiesta',
        'contactOptions' : 'Le sue opzioni di contatto',
        'chatLanguage' : 'Lingua:',
        'chatLanguage2' : 'Italiano',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Contatta ora',
        'chatWaitTime': 'Risposta in <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Risposta in <font class="callWaitTime"></font> min',
        'toShop' : '<a href="https://www.digitec.ch/" target="blank">Al Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Grazie per la tua richiesta!',
        'ticketSubmintConfirmationTextPt1' : '&#10003 La tua richiesta è stata inviata con successo.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'Vi invieremo una copia della vostra richiesta a ',
        'ticketSubmintConfirmationTextPt3' : '. Se la tua richiesta è stata risolta nel frattempo, rispondi all\'email con #closeticket.<br><br>',
        'backToHelpcenter': 'Ritorna al Centro assistenza',
        'privacynotice' : privacynoticeIT
        },
        'en-US': {
        'privateCustomers' : 'Private customers',
        'businessCustomers' : 'Business customers',
        'chatUs': 'Chat with us',
        'callUsPrivate' : 'Call us <a class="popuptext" id="phoneNumberPrivate" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsPrivateMobile' : 'Call us <a class="popuptext" id="phoneNumberPrivateMobile" href="tel:' + telPrivatkunde + '">' + telPrivatkundeText + '</a>',
        'callUsBusiness' : 'Call us <a class="popuptext" id="phoneNumberBusiness"" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'callUsBusinessMobile' : 'Call us <a class="popuptext" id="phoneNumberBusinessMobile" href="tel:' + telFirmenkunde + '">' + telFirmenkundeText + '</a>',
        'contactFormNoteTitel' : 'Did you know:',
        //Öffnungszeiten
        'openingDays' : tagePrivatkundeEN,
        'openingHours' : uhrzeitPrivatkunde,
        'openingDays2' : tagePrivatkunde2EN,
        'openingHours2' : uhrzeitPrivatkunde2,
        'phone' : 'Phone',
        'chat' : 'Chat',
        'email' : 'Contact form',
        'emailDescription' : "Reply time 1-2 days",
        'emailDescriptionMobile' : "Reply time 1-2 days",
        'contact' : 'Contact us',
        'questionNotAnswered' : 'Your question is not answered?',
        'noAnswerFound' : 'Can\'t find what you\'re looking for?',
        'writeUs' : 'Write us',
        'recommendedChannel' : 'Recommended channel',
        'searchBoxText' : 'How can we help you?',
        'infoNoteText' : '<br>Due to the current weather and road situation, delays in parcel delivery by Swiss Post are to be expected. Thank you for your understanding<br>&nbsp;',
        'contactFormInfoText' : 'By phone, chat or via form - just choose your customer group and the appropriate reason for inquiry.',
        'headerTitle' : 'Contact us',
        'chatNotOnline': 'Not available',
        'recommendedChannel' : 'RECOMMENDED',
        'backButtonText' : 'Back to contact selection',
        'feedbackHeader' : 'Feedback form',
        'feedbackDescription' : 'Please use the form only to suggest improvements to our posts.<br>Unfortunately, we cannot respond to your feedback. For your customer inquiries, feel free to use the <a href="/requests/new">contact form</a>.<br>Attention: Customer inquiries via the feedback form will not be answered!',
        'chooseCustomerGroup' : 'Choose your customer group',
        'chooseRequestReason' : 'Choose your reason for request',
        'contactOptions' : 'Your contact options',
        'chatLanguage' : 'Language:',
        'chatLanguage2' : 'English',
        'fallbackInfoText' : 'Something went wrong! Please open the contact form again through the "Contact us" Button at the bottom of the page.',
        'contactNow' : 'Contact now',
        'chatWaitTime': 'Reply time <font class="chatWaitTime"></font> min',
        'callWaitTime': 'Reply time <font class="callWaitTime"></font> min',
        'toShop' : '<a href="https://www.digitec.ch/" target="blank">To Shop</a>',
        'ticketSubmitConfirmationTitle' : 'Thank you for your request!',
        'ticketSubmintConfirmationTextPt1' : '&#10003 Your request has been successfully submitted.<br><br>',
        'ticketSubmintConfirmationTextPt2' : 'We will send you a copy of your request to ',
        'ticketSubmintConfirmationTextPt3' : '. If your request has been resolved in the meantime, reply to the email with #closeticket.<br><br>',
        'backToHelpcenter': 'Back to the Helpcenter',
        'privacynotice' : privacynoticeEN
        }
    }

    if (window.location.hostname == 'helpcenter.connect.digitec.ch'){
        dynamicWording['de']['questionNotAnswered'] = 'Wähle deinen Kontaktkanal'
        dynamicWording['fr']['questionNotAnswered'] = 'Choisissez votre canal de contact'
        dynamicWording['it']['questionNotAnswered'] = 'Scegli il tuo canale di contatto'
        dynamicWording['en-US']['questionNotAnswered'] = 'Choose your contact channel'
    }

    if (window.location.hostname == 'helpcenter.galaxus.ch'){
        dynamicWording['de']['toShop'] = '<a href="https://www.galaxus.ch/" target="blank">Zum Shop</a>'
        dynamicWording['fr']['toShop'] = '<a href="https://www.galaxus.ch/" target="blank">Vers le Shop</a>'
        dynamicWording['it']['toShop'] = '<a href="https://www.galaxus.ch/" target="blank">Al Shop</a>'
        dynamicWording['en-US']['toShop'] = '<a href="https://www.galaxus.ch/" target="blank">To Shop</a>'
    }

    if (window.location.hostname == 'helpcenter.galaxus.de'){
        dynamicWording['de']['toShop'] = '<a href="https://www.galaxus.de/" target="blank">Zum Shop</a>'
        dynamicWording['fr']['toShop'] = '<a href="https://www.galaxus.de/" target="blank">Vers le Shop</a>'
        dynamicWording['it']['toShop'] = '<a href="https://www.galaxus.de/" target="blank">Al Shop</a>'
        dynamicWording['en-US']['toShop'] = '<a href="https://www.galaxus.de/" target="blank">To Shop</a>'
    }

    if (window.location.hostname == 'helpcenter.galaxus.at'){
        dynamicWording['de']['toShop'] = '<a href="https://www.galaxus.at/" target="blank">Zum Shop</a>'
        dynamicWording['fr']['toShop'] = '<a href="https://www.galaxus.at/" target="blank">Vers le Shop</a>'
        dynamicWording['it']['toShop'] = '<a href="https://www.galaxus.at/" target="blank">Al Shop</a>'
        dynamicWording['en-US']['toShop'] = '<a href="https://www.galaxus.at/" target="blank">To Shop</a>'
    }

  return dynamicWording;  
}