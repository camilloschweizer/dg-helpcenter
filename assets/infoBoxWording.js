function fillInfoBoxWording(){
  
      var shopURL = "";
      var helpcenterURL = "";
      
      var hp1 = "";
      var hp2 = "";
      var hp3 = "";
      var hp4 = "";
      var hp5 = "";
      var hp6 = "";
      var offerte = "";
  
      var seite = "";
  
      // Hostname korrekt in der JSON in den Links hinterlegen
      // Helpcenter Links richtig hinterlegen (Helpcenter-spezifische-Nummern); var "hp"
      // Beitrag Seitennamen werden dynamisch angepasst, var "seite"
      switch (portal){
              case 'helpcenter.digitec.ch':
                    shopURL = "https://www.digitec.ch/"; 
  
                    helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                    seite = "digitec";
                     
                    hp1 = "/115005646225";
                    hp2 = "/360012370979";
                    hp3 = "/360014638579";
                    hp4 = "/360010272859";
                    hp5 = "/360012795199";
                    hp6 = "/115005646085";
                    hp7 = "/360000452549";
  
                    offerte = "CHF 5'000.-";
                    break;
              case 'helpcenter.galaxus.ch':
                    shopURL = "https://www.galaxus.ch/";
                    
                    helpcenterURL = "https://helpcenter.galaxus.ch/hc/";
                    seite = "Galaxus";
                      
                    hp1 = "/360007334359";
                    hp2 = "/360012372239";
                    hp3 = "/360007333839";
                    hp4 = "/360010180420";
                    hp5 = "/360012690580";
                    hp6 = "/360007334059";
                    hp7 = "/360014471940";
  
                    offerte = "CHF 5'000.-";
                    break;
              case 'helpcenter.galaxus.de':
                    shopURL = "https://www.galaxus.de/";
  
                    helpcenterURL = "https://helpcenter.galaxus.de/hc/";
                    seite = "Galaxus";
                      
                    hp1 = "/360008216899";
                    hp2 = "";
                    hp3 = "/360016850820";
                    hp4 = "/360010273099";
                    hp5 = "";
                    hp6 = "/360010182760";
                    hp7 = "/360008226499";
  
                    offerte = "EUR 2'000.-";
                    break;
              case 'helpcenter.galaxus.at':
                    shopURL = "https://www.galaxus.at/"
  
                    helpcenterURL = "https://helpcenter.galaxus.at/hc/";
                    seite = "Galaxus";
  
                    hp1 = "/4403441880850";
                    hp2 = "";
                    hp3 = "/4407053718930";  
                    hp4 = "/4407061056530";
                    hp5 = "";
                    hp6 = "/4407011198994";
                    hp7 = "/4407007830674";
  
                    offerte = "EUR 2'000.-";
                    break;
              default:
                    shopURL = "https://www.digitec.ch/";
  
                    helpcenterURL = "https://helpcenter.digitec.ch/hc/";
                    seite = "digitec";
                    
                    hp1 = "/115005646225";
                    hp2 = "/360012370979";
                    hp3 = "/360014638579";
                    hp4 = "/360010272859";
                    hp5 = "/360012795199";
                    hp6 = "/115005646085";
                    hp7 = "/360000452549";
  
                    offerte = "CHF 5'000.-";
                    break;
      }
  
      infoBoxWording = {
        //ALLE ANDERWEITIGEN ANFRAGEN
        "webform_case_other_request_order" : {
              'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
              'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aper??u des commandes</a> de votre compte client, vous pouvez consulter les derni??res informations relatives au statut de livraison de vos produits et tous les re??us, certificats de garantie.<br><br>Si un produit est d??fectueux et s'il peut ??tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un d??faut</a>.",
              'it' : "Trovi informazioni pi?? dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto ?? difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
              'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
        },
        "webform_case_other_request_returns" : {
              'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
              'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aper??u des commandes</a> de votre compte client, vous pouvez consulter les derni??res informations relatives au statut de livraison de vos produits et tous les re??us, certificats de garantie.<br><br>Si un produit est d??fectueux et s'il peut ??tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un d??faut</a>.",
              'it' : "Trovi informazioni pi?? dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto ?? difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
              'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
        },
        "webform_case_other_request_payment" : {
              'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
              'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aper??u des commandes</a> de votre compte client, vous pouvez consulter les derni??res informations relatives au statut de livraison de vos produits et tous les re??us, certificats de garantie.<br><br>Si un produit est d??fectueux et s'il peut ??tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un d??faut</a>.",
              'it' : "Trovi informazioni pi?? dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto ?? difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
              'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
        },
        "webform_case_other_request_account" : {
              'de' : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.",
              'fr' : "Dans l'<a href='" + shopURL + "Order' target='blank'>aper??u des commandes</a> de votre compte client, vous pouvez consulter les derni??res informations relatives au statut de livraison de vos produits et tous les re??us, certificats de garantie.<br><br>Si un produit est d??fectueux et s'il peut ??tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un d??faut</a>.",
              'it' : "Trovi informazioni pi?? dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se un prodotto ?? difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.",
              'en-US' : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>."
        },
  
        //LEVEL 0: Wo ist meine Bestellung?
        "webform_case_shipping_status" : {
              'de' : "Leider kann eine Sendung auch mal etwas l??nger unterwegs sein oder sie erfolgt in mehreren Paketen. Sollte die Sendung auch nach f??nf Tagen nach Versand nicht auftauchen, leiten wir gerne eine Nachforschung ein.<br>Aktuelle Informationen zum Lieferstatus findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto.",
              'fr' : "Malheureusement, un envoi peut prendre un peu plus de temps pour arriver ou il peut ??tre envoy?? en plusieurs colis. Si l'envoi ne se pr??sente pas au bout de cinq jours apr??s l'exp??dition, nous serons heureux d'ouvrir une enqu??te.<br>Vous trouverez des informations actualis??es sur l'??tat de la livraison dans le <a href='" + shopURL + "Order' target='blank'>aper??u des commandes</a> dans votre compte client.",
              'it' : "Sfortunatamente, una spedizione pu?? richiedere un po' pi?? di tempo per arrivare o pu?? essere inviata in pi?? pacchi. Se la spedizione non si presenta entro cinque giorni dalla spedizione, saremo lieti di indagare.<br>Si possono trovare informazioni aggiornate sullo stato della consegna nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente.",
              'en-US' : "Unfortunately, a shipment can sometimes be a little longer on the road or it takes place in several packages. If the shipment does not appear after five days after shipment, we will gladly initiate an investigation.<br>You can find current information on the delivery status in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.",
              'deMailTemplate' : "Welche Artikel fehlen: \nSendungsnummer: ",
              'frMailTemplate' : "Quels sont les articles manquants : \nNum??ro de suivi : ",
              'itMailTemplate' : "Quali articoli mancano: \nNumero di spedizione: ",
              'en-USMailTemplate' : "Which articles are missing: \nConsignment number: "
        },
        "webform_case_ready_for_shipment" : {
              'de' : "Erst wenn alle Produkte deiner Bestellung versandbereit sind, wird die Bestellung versendet. Soll es schneller gehen kannst du eine <a href='" + helpcenterURL + "articles" + hp1 + "-Wie-l??se-ich-eine-Teillieferung-aus-' target='blank'>kostenlose Teillieferung aktivieren</a>.",
              'fr' : "La commande ne sera exp??di??e que lorsque tous les produits de votre commande seront pr??ts ?? ??tre envoy??s. Pour acc??l??rer ce processus, vous pouvez activer la <a href='" + helpcenterURL + "articles" + hp1 + "-Comment-activer-une-livraison-partielle-' target='blank'>livraison partielle</a>.",
              'it' : "Solo quando tutti i prodotti del tuo ordine saranno pronti per essere spediti, l'ordine verr?? inviato. Se vuoi che sia pi?? veloce, puoi attivare gratuitamente la <a href='" + helpcenterURL + "articles" + hp1 + "-Come-faccio-a-richiedere-una-consegna-parziale-' target='blank'>consegna parziale</a>.",
              'en-US' : "We don't ship the order until all your products are in the warehouse and ??ready for shipment??. If you need any items sooner, please <a href='" + helpcenterURL + "articles" + hp1 + "-How-do-I-arrange-partial-delivery-' target='blank'>activate partial delivery</a>."
        },
        "webform_case_order_status" : {
              'de' : "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto.<br><br>Mehr Informationen zu den Versandstatus, findest du unter <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Wo ist mein Paket und wann erhalte ich meine Bestellung?</a>",
              'fr' : "Vous pouvez trouver les informations actuelles sur l'??tat de la livraison de vos produits dans la rubrique <a href='" + shopURL + "Order' target='blank'>aper??u de la commande</a> dans votre compte client.<br><br>Pour plus d'informations sur l'??tat d'exp??dition, voir <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>O?? est mon colis et quand vais-je recevoir ma commande ?</a>",
              'it' : "Potete trovare le informazioni attuali sullo stato di consegna dei vostri prodotti nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente.<br><br>Per maggiori informazioni sullo stato della spedizione, vedi <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Quando ricever?? il mio ordine?</a>",
              'en-US' : "You can find the latest information on the delivery status of your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account.<br><br>You can find more information about the shipping status at <a href='" + helpcenterURL + "articles" + hp5 + "' target='blank'>Where???s my order and when will I receive it?</a>",
        },
  
        //LEVEL 0: Probleme mit einer Bestellung
        "webform_case_damaged_product" : {
              'de' : "F??r eine rasche Bearbeitung ben??tigen wir folgende Informationen von dir: <br><br>??? Auftragsnummer deiner Bestellung<br>??? Beschreibung des Schadens<br>??? Fotos des Schadens und der Verpackung<br><br>Wir werden deine Anfrage zusammen mit unseren Logistikpartnern pr??fen und dich so rasch als m??glich ??ber die weiteren Schritte informieren.",
              'fr' : "Pour un traitement rapide, nous avons besoin des informations suivantes de votre part : <br><br>??? num??ro de votre commande<br>??? description du dommage<br>??? photos du dommage et de l'emballage<br><br>Nous examinerons votre demande avec nos partenaires logistiques et vous informerons d??s que possible des ??tapes suivantes.",
              'it' : "Per una rapida elaborazione abbiamo bisogno delle seguenti informazioni:<br><br>??? Numero d???ordine<br>??? Breve descrizione del danno<br>??? Foto dell???articolo e dell???imballaggio danneggiati<br><br>Esamineremo la tua richiesta insieme ai nostri partner logistici e ti informeremo al pi?? presto su come procedere.",
              'en-US' : "For quick processing, please send us the following details:<br><br>??? Order number<br>??? Description of the damage<br>??? Photos of the damage and packaging<br><br>We'll then work together with the delivery company to check what happened to your order and will get back to you as quickly as possible with updates and next steps."
        },
        "webform_case_not_working_product" : {
              'de' : "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.<br><br>Besch??digungen, welche auf unsachgem????e Bedienung zur??ckzuf??hren sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "wiki/559' target='blank'>Garantierichtlinien</a> sowie in unseren <a href='" + shopURL + "Wiki/478' target='blank'>AGBs</a>.",
              'fr' : "Si un produit est d??fectueux et s'il peut ??tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>signaler un d??faut</a>.<br><br>Les dommages caus??s par une utilisation inappropri??e ne sont pas couverts par la garantie. Vous trouverez un compl??ment d'information concernant ce point dans nos <a href='" + shopURL + "wiki/559' target='blank'>conditions de garantie</a> et <a href='" + shopURL + "Wiki/478' target='blank'>CGV</a>.",
              'it' : "Se un prodotto ?? difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>segnala un difetto</a>.<br><br>I danni dovuti ad un uso improprio non sono coperti dalla garanzia. Puoi trovare ulteriori informazioni nelle nostre <a href='" + shopURL + "wiki/559' target='blank'>condizioni di garanzia</a> e nelle <a href='" + shopURL + "Wiki/478' target='blank'>CGC</a>.",
              'en-US' : "Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>report a defect</a>.<br><br>Damage caused by incorrect use is not covered by the warranty. For more information, see our <a href='" + shopURL + "wiki/559' target='blank'>warranty policy</a> and our <a href='" + shopURL + "Wiki/478' target='blank'>terms and conditions</a>."
        },
        "webform_case_wrong_product" : {
              'de' : "Damit wir dein Anliegen rasch pr??fen k??nnen, stelle uns die Herstellernummer oder den EAN-Code (Strichcode) des falsch erhaltenen Produkt zur Verf??gung. Der EAN-Code befindet sich auf der Produktverpackung und dient dazu ein Produkt zweifelsfrei zu identifizieren. Er besteht aus einem Strichcode, respektive Barcode, und 13 Ziffern:<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'fr' : "Afin que nous puissions v??rifier rapidement votre demande, veuillez nous fournir le num??ro du fabricant ou le code EAN (code-barres) du produit re??u de mani??re incorrecte.  Le code EAN se trouve sur l'emballage du produit et permet d'identifier un produit sans aucun doute. Il se compose d'un code-barres et de 13 chiffres :<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'it' : "Affinch?? possiamo controllare rapidamente la sua richiesta, la preghiamo di fornirci il numero del produttore o il codice EAN (codice a barre) del prodotto ricevuto in modo errato. Il codice EAN si trova sulla confezione del prodotto e serve per identificare un prodotto senza alcun dubbio. Consiste in un codice a barre e 13 cifre:<div style=width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'en-US' : "To enable us to quickly check your request, please provide us with the manufacturer number or EAN code (barcode) of the incorrectly received product. The EAN code can be found on the product packaging and is used to identify a product without any doubt. It consists of a barcode and 13 digits:<div style='width:100%;text-align:center;max-height:55px;overflow:hidden;'><img style='width:200px;' src='https://helpcenter.galaxus.ch/hc/article_attachments/4410101322642/ean13.gif'/></div>",
              'deMailTemplate' : "Bitte beachte, dass wir nachfolgende Angaben zwingend ben??tigen.\nIch habe f??lschlicherweise das folgende Produkt erhalten: \nMenge: \nEAN-Code (Strichcode auf der Verpackung): \nIch vermisse folgendes Produkt: ",
              'frMailTemplate' : "Veuillez noter que les informations suivantes sont obligatoires.\nJ'ai re??u le produit suivant par erreur : \nQuantit?? : \nCode EAN (code barre sur l'emballage) : \nIl me manque le produit suivant : ",
              'itMailTemplate' : "Si prega di notare che le seguenti informazioni sono obbligatorie.\nHo ricevuto il seguente prodotto per errore: \nQuantit??: \nCodice EAN (codice a barre sulla confezione): \nMi manca il seguente prodotto: ",
              "en-USMailTemplate" : "Please note that the following information is mandatory.\nI have received the following product by mistake: \nQuantity: \nEAN code (bar code on the packaging): \nI am missing the following product: "
        },
        "webform_case_missing_product" : {
              'de' : "Nicht immer werden alle Produkte in einem Paket geliefert. Die aktuellen Informationen zum Lieferstatus und deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto. Zudem erh??lst du f??r jede Lieferung eine separate Versandbest??tigung",
              'fr' : "Tous les produits ne sont pas toujours livr??s en un seul colis. Vous pouvez trouver les informations actuelles sur l'??tat de la livraison et vos produits dans la rubrique <a href='" + shopURL + "Order' target='blank'>aper??u de la commande</a> dans votre compte client. En outre, vous recevrez une confirmation d'exp??dition distincte pour chaque livraison.",
              'it' : "Non tutti i prodotti sono sempre consegnati in un unico pacco. Puoi trovare le informazioni attuali sullo stato di consegna e i tuoi prodotti nel <a href='" + shopURL + "Order' target='blank'>riassunto dell'ordine</a> nel tuo account cliente. Inoltre, riceverai una conferma di spedizione separata per ogni consegna.",
              'en-US' : "Not all products are always delivered in one package. You can find the latest information about the delivery status and your products in the <a href='" + shopURL + "Order' target='blank'>order overview</a> in your customer account. In addition, you will receive a separate shipping confirmation for each delivery."
        },
        "webform_case_cancel_order" : {
              'de' : "Solange deine Lieferung noch nicht f??r den Versand vorbereitet wurde, kannst du in deinem Kundenkonto unter <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> das unerw??nschte Produkt selbstst??ndig stornieren.<br><br>Sollte das Produkt bereits versendet worden sein, kannst du in deinem Kundenkonto eine <a href='" + shopURL + "Return' target='blank'>R??ckgabe erfassen</a>.",
              'fr' : "Tant que votre commande n'a pas ??t?? pr??par??e pour l'exp??dition, vous pouvez annuler le produit non d??sir?? de mani??re ind??pendante en allant dans votre compte client sous <a href='" + shopURL + "Order' target='blank'>commandes</a>.<br><br>Si le produit a d??j?? ??t?? exp??di??, vous pouvez <a href='" + shopURL + "Return' target='blank'>enregistrer un retour</a> dans votre compte client .",
              'it' : "Finch?? il tuo ordine non ?? stato preparato per la spedizione, puoi stornare l???ordine del prodotto che non vuoi pi?? acquistare direttamente nel tuo conto cliente alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a>.<br><br>Se il prodotto ?? gi?? stato spedito, puoi registrare il reso nel tuo conto cliente cliccando su <a href='" + shopURL + "Return' target='blank'>registra il reso</a>.",
              'en-US' : "As long as we haven???t yet got your order ready to ship, you can still cancel the product you no longer want in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account.<br><br>If the product has already been shipped, you???ll have to <a href='" + shopURL + "Return' target='blank'>register a return</a> in your customer account."
        },
  
        //LEVEL 0: R??ckgabe
        "webform_case_return" : {
            'de' : "Die R??ckgabe f??r ein Produkt kannst du direkt in deinem Kundenkonto unter <a href='" + shopURL + "order' target='blank'>Bestellungen</a> oder auf der <a href='" + shopURL + "after-sales' target='blank'>R??ckgabeseite</a> erfassen.",
            'fr' : "Vous pouvez saisir le retour d'un produit directement dans votre compte client sous les <a href='" + shopURL + "order' target='blank'>commandes</a> ou sur la <a href='" + shopURL + "after-sales' target='blank'>page des retours</a>.",
            'it' : "Puoi inserire il reso di un prodotto direttamente nel tuo account cliente sotto gli <a href='" + shopURL + "order' target='blank'>ordini</a> o nella <a href='" + shopURL + "after-sales' target='blank'>pagina dei resi</a>.",
            'en-US' : "You can enter the return for a product directly in your customer account under <a href='" + shopURL + "order' target='blank'>orders</a> or on the <a href='" + shopURL + "after-sales' target='blank'>returns page</a>."
        },
        "webform_case_return_status" : {
              'de' : "Unter <a href='" + shopURL + "after-sales/service-cases' target='blank'>\"Alle R??cksendungen\"</a> findest du eine ??bersicht und den aktuellen Status zu allen von dir eingereichten R??ckgaben und Garantief??llen.",
              'fr' : "Sous la rubrique ?? <a href='" + shopURL + "after-sales/service-cases' target='blank'>Tous les retours</a> ??, vous trouverez une vue d'ensemble et le statut actuel de tous les retours et demandes de garantie que vous avez soumis.",
              'it' : "Sotto <a href='" + shopURL + "after-sales/service-cases' target='blank'>tutti i resi</a> trovi una panoramica e lo stato attuale di tutti i resi e le richieste di garanzia da te presentate.",
              'en-US' : "Go to <a href='" + shopURL + "after-sales/service-cases' target='blank'>all returns</a> to find an overview and the current status of all your returns and warranty cases."
        },
        "webform_case_creditnote" : {
              'de' : "Alle deine offenen und eingel??sten Gutschriften findest du <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>hier</a>. Du kannst diese <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>r??ckerstatten lassen</a> oder direkt in einer neuen Bestellung <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>einl??sen</a>.",
              'fr' : "Vous pouvez trouver tous vos cr??dits ouverts et ??chang??s <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>ici</a>. Vous pouvez vous les <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>faire rembourser</a> ou les <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>??changer</a> directement contre une nouvelle commande.",
              'it' : "Puoi trovare tutti i tuoi crediti aperti e riscattati <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>qui</a>. Potete farveli <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>rimborsare</a> o <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>riscattarli</a> direttamente per un nuovo ordine.",
              'en-US' : "You can find all your open and redeemed credits <a href='" + shopURL + "invoice/listcreditnotes' target='blank'>here</a>. You can have them <a href='" + helpcenterURL + "articles" + hp3 + "' target='blank'>refunded</a> or <a href='" + helpcenterURL + "articles" + hp4 + "' target='blank'>redeem</a> them directly in a new order."
        },
  
        //LEVEL 0: Zahlungen, Mahnungen und R??ckestattungen
        "webform_case_refund" : {
              'de' : "Du kannst die R??ckerstattung einer Gutschrift <a href='" + helpcenterURL +"articles" + hp3 + "-R??ckerstattung-einer-Gutschrift' target='blank'>in wenigen Schritten selbst vornehmen</a>.<br>Bitte beachte, dass die Geld??berweisung in der Regel 1-5 Werktage in Anspruch nimmt.<br>R??ckerstattungen auf deine Kreditkarte werden auf deiner n??chsten Kreditkartenabrechnung ersichtlich.",
              'fr' : "Vous pouvez effectuer vous-m??me le remboursement <a href='" + helpcenterURL + "articles" + hp3 + "-Que-faire-pour-lancer-le-processus-de-remboursement-' target='blank'>d'un avoir en quelques ??tapes</a>.<br>Veuillez noter que le virement prend habituellement entre 1 ?? 5 jours ouvrables.<br>Les remboursements sur votre carte de cr??dit figureront sur votre prochain relev?? de carte de cr??dit.",
              'it' : "Puoi avviare <a href='" + helpcenterURL + "articles" + hp3 + "-Come-faccio-a-richiedere-il-rimborso-' target='blank'>il rimborso di un credito autonomamente</a>.<br>Si prega di notare che il trasferimento di denaro di solito richiede da 1 a 5 giorni lavorativi.<br>I rimborsi sulla carta di credito appariranno sul prossimo estratto conto della carta di credito.",
              'en-US' : "To refund a credit note, <a href='" + helpcenterURL + "articles" + hp3 + "-How-do-I-get-a-refund-' target='blank'>please follow the simple steps described in this article</a>.<br>Please bear in mind that transfers usually take one to five working days.<br>Refunds to your credit card will appear on your next credit card statement."
        },
        "webform_case_receipt" : {
              'de' : "S??mtliche Kaufbelege, Garantiescheine und Weiteres findest du unter dem Men??punkt <a href='" + shopURL + "Order' target='blank'>Bestellungen</a> in deinem Kundenkonto, indem du den gew??nschten Auftrag ausw??hlst.<br><br>Rechnungsbelege f??r Bestellungen, welche du per Rechnung get??tigt hast, findest du <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>hier</a>.",
              'fr' : "Vous trouverez tous les re??us, certificats de garantie et autres ?? la rubrique <a href='" + shopURL + "Order' target='blank'>commandes</a> dans votre compte client en s??lectionnant la commande souhait??e.<br><br>Vous trouverez <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>ici</a> un justificatif de facture pour les commandes pay??es sur facture.",
              'it' : "Trovi tutte le ricevute d'acquisto, i certificati di garanzia e altro ancora alla voce <a href='" + shopURL + "Order' target='blank'>ordini</a> nel tuo conto cliente selezionando l???articolo desiderato.<br><br><a href='" + shopURL + "Invoice/ListInvoices' target='blank'>Qui</a> trovi le ricevute per gli ordini che hai pagato tramite fattura.",
              'en-US' : "All sales receipts and warranty certificates are saved in the <a href='" + shopURL + "Order' target='blank'>orders</a> section in your customer account. Go to the according order detail page.<br><br>You???ll find the sales receipt for all orders you paid by invoice <a href='" + shopURL + "Invoice/ListInvoices' target='blank'>here</a>."
        },
        "webform_case_payment_reminder" : {
              'de' : "Es kann bis zu f??nf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung ??berschnitten hat. In diesem Fall kannst du die Mahnung ignorieren.<br>Weitere M??glichkeiten woran es liegen kann findest du unter <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Ich habe eine Mahnung erhalten, obwohl ich bezahlt habe</a>.",
              'fr' : "Jusqu'?? cinq jours ouvrables peuvent s'??couler avant que nous recevions votre paiement. Il se peut donc que notre rappel de paiement et votre paiement se soient crois??s. Dans ce cas, vous pouvez ignorer le rappel.<br>Vous trouverez d'autres raisons possibles sous <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Pourquoi ai-je re??u un rappel de paiement alors que ma commande est r??gl??e ?</a>",
              'it' : "Possono volerci fino a cinque giorni lavorativi per ricevere il pagamento. ?? possibile che il tuo pagamento sia avvenuto contemporaneamente al nostro sollecito. In questo caso puoi ignorare il promemoria.<br>Puoi trovare altri possibili motivi sotto <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Perch?? ho ricevuto un sollecito nonostante abbia gi?? pagato?</a>",
              'en-US' : "It can take up to five working days until your payment arrives in our system. Therefore, it???s possible that the reminder has overlapped with your payment. In this case, please ignore the reminder.<br>You can find more possibilities under <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>I have received a reminder even though I paid for my order</a>."
        },
        "webform_case_no_bill" : {
              'de' : "Wenn der Wert deines Warenkorbs h??her ist als dein individuelles Kreditlimit oder du dein Kreditlimit durch noch nicht bezahlte Bestellungen bereits ausgereizt hast, entf??llt die Rechnung als Zahlungsoption.<br><br>Bitte beachte: Unser Kundenservice kann die verf??gbaren Zahlungsarten sowie das Kreditlimit nicht beeinflussen.",
              'fr' : "Si la valeur de votre panier est sup??rieure ?? votre limite de cr??dit individuelle ou si vous avez d??j?? ??puis?? votre limite de cr??dit par des commandes non encore pay??es, le paiement sur facture n'est pas applicable.<br><br>Attention : notre service client n'a aucune influence sur les modes de paiement disponibles et sur votre limite de cr??dit.",
              'it' : "Se il valore del tuo carrello ?? superiore al tuo limite di credito individuale o se hai gi?? esaurito il tuo limite di credito con ordini non ancora pagati, la modalit?? di pagamento tramite fattura viene disabilitata.<br><br>Nota bene: il nostro servizio clienti non ha alcun influsso sui metodi di pagamento disponibili o sul tuo limite di credito.",
              'en-US' : "Payment by invoice is not possible if your order costs more than your credit limit allows or if you have reached your credit limit with unpaid orders.<br><br>Please note: our customer service has no influence on the available payment methods and the credit limit."
        },
        "webform_case_dunning_block" : {
              'de' : "Die Zahlungsfrist betr??gt 20 Tagen und kann generell nicht verl??ngert werden. Nat??rlich kann es passieren, dass eine Rechnung einmal ??bersehen wird. Aus diesem Grund versenden wir nach Ablauf der Zahlungsfrist eine Zahlungserinnerung. Auf der Zahlungserinnerung ist der Zeitraum der Fristerstreckung aufgef??hrt. Diese Nachfrist ist generell nicht verl??ngerbar.<br><br>Um zus??tzliche Geb??hren zu vermeiden, solltest du den ausstehenden Betrag umgehend begleichen. Eine Best??tigung von dir, dass du die Zahlung get??tigt hast, ist nicht n??tig.",
              'fr' : "Le d??lai de paiement s'??l??ve ?? 20 jours et ne peut g??n??ralement pas ??tre prolong??. Bien s??r, un oubli de facture peut arriver. C'est pourquoi nous vous enverrons un rappel apr??s l'expiration du d??lai de paiement. Le rappel de paiement pr??cise la p??riode pour laquelle le d??lai est prolong??. Ce d??lai n'est g??n??ralement pas prorogeable.<br><br>Pour ??viter des frais suppl??mentaires, vous devez r??gler le montant d?? imm??diatement. Une confirmation de votre part du paiement effectu?? n'est pas n??cessaire.",
              'it' : "Il termine di pagamento ?? di 20 giorni e in generale non pu?? essere prorogato. Naturalmente, pu?? succedere che una fattura vada dimenticata. Per questo motivo, dopo la scadenza del termine di pagamento inviamo un sollecito. Sul sollecito di pagamento ?? indicato il periodo di proroga del termine. Questo periodo non ?? generalmente prorogabile.<br><br>Per evitare costi aggiuntivi, effettua immediatamente il pagamento.Non ?? necessaria una conferma da parte tua di effettuato pagamento.",
              'en-US' : "Our payment deadline is 20 days after the invoice is issued. Generally, this deadline cannot be extended. Of course, we understand that invoices are occasionally overlooked. For this reason, we send a reminder after the payment deadline has expired. The reminder will state the date of the new payment deadline. We cannot extend this final deadline.<br><br>The best way forward is to transfer the amount straight away to avoid any extra charges. There is no need for you to send us a confirmation of payment."
        },
  
        //LEVEL 0: Kundenkonto
        "webform_case_delete_account" : {
              'de' : "Nachdem dein Konto gel??scht oder deaktiviert wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch ben??tigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto l??schen l??sst.<br><br>Als Privatkunde kannst du die L??schung direkt ??ber dein <a href='" + shopURL + "DeleteAccount' target='blank'>Benutzerkonto</a> einleiten.",
              'fr' : "Une fois que ton compte a ??t?? supprim?? ou d??sactiv??, tu n'as plus acc??s ?? tes preuves d'achat ??lectroniques et autres documents. De ce fait, nous vous recommandons d'imprimer ou de sauvegarder une copie des formulaires dont vous avez encore besoin avant de supprimer votre compte.<br><br>En tant que client priv??, vous pouvez initier la suppression directement via votre <a href='" + shopURL + "DeleteAccount' target='blank'>compte d'utilisateur</a>.",
              'it' : "Dopo la cancellazione o la disattivazione del vostro account, non avrete pi?? accesso alle vostre ricevute di acquisto elettroniche e ad altri documenti. Pertanto, consigliamo di stamparne o salvare una copia delle ricevute e dei moduli prima di cancellare il tuo conto in maniera definitiva.<br><br>Come cliente privato, potete avviare la cancellazione direttamente tramite il vostro <a href='" + shopURL + "DeleteAccount' target='blank'>conto utente</a>.",
              'en-US' : "After your account is deleted or deactivated, you will no longer have access to your electronic purchase receipts and other records. That???s why we recommend making a copy (printing out a hard copy or saving an electronic one) before you ask us to delete your account.<br><br>As a private customer you can initiate the deletion directly via your <a href='" + shopURL + "DeleteAccount' target='blank'>user account</a>.",
              "deDescriptionLabel" : "Beschreibung<br>Hinweis: F??r eine rasche Bearbeitung ben??tigen wir deine Kundennummer",
              "frDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre num??ro de client",
              "itDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",
              "en-USDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number"
        },
        "webform_case_cant_login" : {
              'de' : "Du kannst dein Passwort jederzeit zur??cksetzen und ein neues zusenden lassen:<br><br>??? Klicke im Login-Bereich auf <a href='" + shopURL + "Register/RequestPassword' target='blank'>Passwort vergessen?</a><br>??? Gib deinen Benutzernamen oder die hinterlegte E-Mail-Adresse an und klicke auf \"Link anfordern\"",
              'fr' : "Vous pouvez ?? tout moment r??initialiser votre mot de passe pour qu'un nouveau vous soit envoy?? : <br><br>??? Cliquez dans la zone de connexion sur <a href='" + shopURL + "Register/RequestPassword' target='blank'>mot de passe oubli?? ?</a><br>??? Saisissez votre nom d'utilisateur ou adresse ??lectronique fournie et cliquez sur ?? Demander un lien ??",
              'it' : "Puoi reimpostare la tua password in qualsiasi momento e fartene inviare una nuova:<br><br>??? Nell'area di login, clicca su <a href='" + shopURL + "Register/RequestPassword' target='blank'>Hai dimenticato la password?</a><br>??? Inserisci il tuo nome utente o l'indirizzo e-mail che hai registrato nel tuo conto e clicca poi su ??Richiedi link??.",
              'en-US' : "You can reset your password at any time:<br><br>??? Go to the login screen and click <a href='" + shopURL + "Register/RequestPassword' target='blank'>forgot your password?</a><br>??? Enter your username or e-mail address and click ??Request link??.",
              "deDescriptionLabel" : "Beschreibung<br>Hinweis: F??r eine rasche Bearbeitung ben??tigen wir deine Kundennummer",
              "frDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre num??ro de client",
              "itDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",
              "en-USDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number"
        },
  
        //LEVEL 0: Produktberatung
        "webform_case_product_advice_it" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit d??j?? disponible sur " + seite + " peuvent ??tre pos??es directement sur la page du produit concern??. Notre communaut?? vous r??pondra dans les heures qui suivent. La meilleure chose : tout le monde b??n??ficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communaut??</a>",
              'it' : "Le domande su un prodotto gi?? disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit?? vi risponder?? entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunit??</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_network" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit d??j?? disponible sur " + seite + " peuvent ??tre pos??es directement sur la page du produit concern??. Notre communaut?? vous r??pondra dans les heures qui suivent. La meilleure chose : tout le monde b??n??ficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communaut??</a>",
              'it' : "Le domande su un prodotto gi?? disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit?? vi risponder?? entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunit??</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_consumer" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit d??j?? disponible sur " + seite + " peuvent ??tre pos??es directement sur la page du produit concern??. Notre communaut?? vous r??pondra dans les heures qui suivent. La meilleure chose : tout le monde b??n??ficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communaut??</a>",
              'it' : "Le domande su un prodotto gi?? disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit?? vi risponder?? entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunit??</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_photo" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit d??j?? disponible sur " + seite + " peuvent ??tre pos??es directement sur la page du produit concern??. Notre communaut?? vous r??pondra dans les heures qui suivent. La meilleure chose : tout le monde b??n??ficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communaut??</a>",
              'it' : "Le domande su un prodotto gi?? disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit?? vi risponder?? entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunit??</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_home" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit d??j?? disponible sur " + seite + " peuvent ??tre pos??es directement sur la page du produit concern??. Notre communaut?? vous r??pondra dans les heures qui suivent. La meilleure chose : tout le monde b??n??ficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communaut??</a>",
              'it' : "Le domande su un prodotto gi?? disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit?? vi risponder?? entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunit??</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
        "webform_case_product_advice_diy" : {
              'de' : "Fragen zu einem bereits auf " + seite + " vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)<br><br>Hier geht's zur <a href='" + shopURL + "community' target='blank'>Community</a>",
              'fr' : "Les questions concernant un produit d??j?? disponible sur " + seite + " peuvent ??tre pos??es directement sur la page du produit concern??. Notre communaut?? vous r??pondra dans les heures qui suivent. La meilleure chose : tout le monde b??n??ficie de votre contribution :-)<br><br>Cliquez ici pour la <a href='" + shopURL + "community' target='blank'>communaut??</a>",
              'it' : "Le domande su un prodotto gi?? disponibile su " + seite + " possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit?? vi risponder?? entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)<br><br>Clicca qui per la <a href='" + shopURL + "community' target='blank'>comunit??</a>",
              'en-US' : "You can enter questions about products that are already available on " + seite + " directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)<br><br>Click here to go to the <a href='" + shopURL + "community' target='blank'>Community</a>"
        },
  
        //LEVEL 0: Offerte
        "webform_case_offer" : {
              'de' : "F??r Auftragsvolumen unter " + offerte + " werden keine Offerten erstellt. Es gelten die Preisangaben in unserem Onlineshop.",
              'fr' : "Nous n'??tablissons pas d'offres pour les volumes de commande inf??rieurs ?? " + offerte + ". Les prix indiqu??s dans notre boutique en ligne font foi.",
              'it' : "Non verranno emesse quotazioni per volumi d'ordine inferiori a " + offerte + ". Si applicano i prezzi del nostro negozio online.",
              'en-US' : "For order volumes below " + offerte + ", no quotations will be issued. The prices in our online store apply."
        },
  
        //Error-Meldungen f??r Attachment
        "attachment-errors" : {
              'de1' : 'Um dein Anliegen schnellstm??glich zu l??sen, ist ein Foto des Schadens erforderlich. Bitte f??ge deshalb eine entsprechende Datei hinzu.',
              'fr1' : 'Afin de r??soudre votre demande le plus rapidement possible, une photo des dommages est n??cessaire. Veuillez donc ajouter un fichier correspondant.',
              'it1' : 'Per risolvere la vostra richiesta nel pi?? breve tempo possibile, ?? necessaria una foto del danno. Pertanto si prega di aggiungere un file corrispondente.',
              'en-US1' : 'In order to solve your request as quickly as possible, a photo of the damage is required. Therefore please add a corresponding file.',
              'de2' : 'Um dein Anliegen schnellstm??glich zu l??sen, ben??tigen wir ein Foto des falsch erhaltenen Produkts. Bitte f??ge deshalb eine entsprechende Datei hinzu.',
              'fr2' : "Afin de r??soudre votre probl??me le plus rapidement possible, nous avons besoin d'une photo du produit mal re??u. Veuillez donc joindre un fichier appropri??.",
              'it2' : 'Al fine di risolvere il suo problema il pi?? rapidamente possibile, abbiamo bisogno di una foto del prodotto ricevuto in modo errato. Pertanto, si prega di allegare un file appropriato.',
              'en-US2' : 'In order to resolve your issue as soon as possible, we need a photo of the incorrectly received product. Therefore, please attach an appropriate file.'
        },
  
        //Feedback Formular Texte
        "outputUpvoteFeedbackButtonText" : {
            'de' : "Vielen Dank f??r Dein Feedback.<br><br>",
            'fr' : "Merci pour vos commentaires.<br><br>",
            'it' : "Grazie per il vostro feedback.<br><br>",
            'en-US' : "Thank you for your feedback.<br><br>"
      },
      "outputDownvoteFeedbackButtonText" : {
          'de' : "Warum war die Information nicht hilfreich?<br><br>",
          'fr' : "Pourquoi les informations n'ont-elles pas ??t?? utiles ?<br><br>",
          'it' : "Perch?? le informazioni non sono state utili?<br><br>",
          'en-US' : "Why was the information not helpful?<br><br>"
    },
    "outputDownvoteFeedbackButtonText2" : {
          'de' : "<br>Vielen Dank f??r deinen Verbesserungsvorschlag.<br><br>",
          'fr' : "<br>Merci pour votre suggestion d'am??lioration.<br><br>",
          'it' : "<br>Grazie per il vostro suggerimento di miglioramento.<br><br>",
          'en-US' : "<br>Thank you for your suggestion for improvement.<br><br>"
    },
    "outputRadiobuttonFeedback1" : {
          'de' : " Die Informationen sind falsch oder verwirrend.",
          'fr' : " Les informations sont erron??es ou confuses.",
          'it' : " Le informazioni sono sbagliate o confuse.",
          'en-US' : " The information is incorrect or confusing."
    },
    "outputRadiobuttonFeedback2" : {
          'de' : " Die Informationen sind unvollst??ndig.",
          'fr' : " L'information est incompl??te.",
          'it' : " Le informazioni sono incomplete.",
          'en-US' : " The information is incomplete."
    },
    "outputRadiobuttonFeedback3" : {
          'de' : " Ich w??nsche mir einen besseren Service.",
          'fr' : " J'aimerais voir un meilleur service.",
          'it' : " Vorrei vedere un servizio migliore.",
          'en-US' : " I would like to see better service."
    },
    "outputRadiobuttonFeedback4" : {
          'de' : " Es gibt einen fehlerhaften Link, ein fehlendes Bild oder einen Tippfehler.",
          'fr' : " Il y a un lien bris??, une image manquante ou une faute de frappe.",
          'it' : " C'?? un link rotto, un'immagine mancante o un errore di battitura.",
          'en-US' : " There is a broken link, missing image, or typo."
    },
    "outputButtonFeedback" : {
          'de' : "Senden",
          'fr' : "Envoyer",
          'it' : "Invia",
          'en-US' : "Send"
    },
      "outputFeedbackLabelPart1" : {
            'de' : "Feedback zu Helpcenter Beitrag: ",
            'fr' : "Feed-back sur le post du Helpcenter : ",
            'it' : "Feedback sul post dell'Helpcenter: ",
            'en-US' : "Feedback to Helpcenter post: " 
      },
      "feedbackThanks" : {
            'de' : "Vielen Dank f??r dein Feedback!<br>",
            'fr' : "Merci pour vos commentaires!<br>",
            'it' : "Grazie per il tuo feedback!<br>",
            'en-US' : "Thank you for your feedback!<br>"
      },
  
        //LEVEL 0: Connect Tags
        "webform_case_connect_customer" : {
              'de' : "",
              'fr' : "",
              'it' : "",
              'en-US' : "" 
        },
        "webform_case_connect_payment" : {
              'de' : "",
              'fr' : "",
              'it' : "",
              'en-US' : "" 
        },
        "webform_case_connect_technical" : {
              'de' : "",
              'fr' : "",
              'it' : "",
              'en-US' : "" 
        },
        "webform_case_connect_b2b" : {
              'de' : "",
              'fr' : "",
              'it' : "",
              'en-US' : "" 
        }
      }
  
        //TODO: Galaxus AT links pr??fen
      if (portal == 'helpcenter.galaxus.de' || portal == 'helpcenter.galaxus.at'){
        infoBoxWording['webform_case_not_working_product']['de'] = "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + shopURL + "after-sales/service-cases/select-position' target='blank'>Defekt anmelden</a>.<br><br>Besch??digungen, welche auf unsachgem????e Bedienung zur??ckzuf??hren sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + shopURL + "wiki/5547' target='blank'>Gew??hrleistungsinformationen</a> sowie in unseren <a href='" + shopURL + "Wiki/478' target='blank'>AGBs</a>.";
        infoBoxWording['webform_case_shipping_status']['de'] = "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.<br><br>Leider kann ein Paket auch mal etwas l??nger unterwegs sein oder es landet bei deinem Nachbarn. Sollte das Paket auch nach ein paar Tagen nicht auftauchen, leiten wir gerne eine Nachforschung ein.";
        infoBoxWording['webform_case_order_status']['de'] = "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + shopURL + "Order' target='blank'>Bestell??bersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.";
        infoBoxWording['webform_case_payment_reminder']['de'] = "Es kann bis zu f??nf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung ??berschnitten hat. In diesem Fall kannst du die Mahnung ignorieren.<br>Weitere M??glichkeiten woran es liegen kann findest du unter <a href='" + helpcenterURL + "articles" + hp6 + "' target='blank'>Warum habe ich eine Zahlungserinnerung erhalten, obwohl ich bezahlt habe?</a>.";
        }
      if (typeof customerType !== 'undefined') {  
            if (customerType == 'business-customer') {
        infoBoxWording['webform_case_delete_account']['de'] = 'Nachdem dein Konto deaktiviert wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch ben??tigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto deaktivieren l??sst.<br><br>Firmenkunden k??nnen unseren Kundendienst kontaktieren, um die Deaktivierung ihres Kontos zu veranlassen.';
        infoBoxWording['webform_case_delete_account']['fr'] = "Apr??s la d??sactivation de ton compte, tu n'auras plus acc??s ?? tes justificatifs d'achat ??lectroniques et autres documents. Nous te recommandons donc d'imprimer ou de sauvegarder une copie des formulaires dont tu as encore besoin avant de faire d??sactiver ton compte.<br><br>Les entreprises clientes peuvent contacter notre service client??le pour demander la d??sactivation de leur compte.";
        infoBoxWording['webform_case_delete_account']['it'] = "Dopo la disattivazione dell'account, non sar?? pi?? possibile accedere alle ricevute di acquisto elettroniche e ad altri documenti. Si consiglia di stampare o salvare una copia dei moduli necessari prima di disattivare l'account.<br><br>I clienti aziendali possono contattare il nostro servizio clienti per disattivare il proprio account.";
        infoBoxWording['webform_case_delete_account']['en-US'] = 'After your account is deactivated, you will no longer have access to your electronic purchase receipts and other records. We recommend that you print or save a copy of any forms you still need before deactivating your account.<br><br>Business customers can contact our customer service to have their account deactivated.';
      }}
      if (portal == 'helpcenter.digitec.ch' || portal == 'helpcenter.galaxus.ch'){
            infoBoxWording['webform_case_shipping_status']['de'] += "<br><br><b><font color='red'>Hinweis:</font> Aktuell haben wir l??ngere Lieferzeiten (1-3 Werktage) und bitten um Geduld.</b>"
            infoBoxWording['webform_case_ready_for_shipment']['de'] += "<br><br><b><font color='red'>Hinweis:</font> Aktuell haben wir l??ngere Lieferzeiten (1-3 Werktage) und bitten um Geduld.</b>"
            infoBoxWording['webform_case_order_status']['de'] += "<br><br><b><font color='red'>Hinweis:</font> Aktuell haben wir l??ngere Lieferzeiten (1-3 Werktage) und bitten um Geduld.</b>"
            infoBoxWording['webform_case_shipping_status']['fr'] += "<br><br><b><font color='red'>Remarque :</font> Actuellement, nous avons des d??lais de livraison plus longs (1-3 jours ouvrables) et nous vous prions de bien vouloir patienter.</b>"
            infoBoxWording['webform_case_ready_for_shipment']['fr'] += "<br><br><b><font color='red'>Remarque :</font> Actuellement, nous avons des d??lais de livraison plus longs (1-3 jours ouvrables) et nous vous prions de bien vouloir patienter.</b>"
            infoBoxWording['webform_case_order_status']['fr'] += "<br><br><b><font color='red'>Remarque :</font> Actuellement, nous avons des d??lais de livraison plus longs (1-3 jours ouvrables) et nous vous prions de bien vouloir patienter.</b>"
            infoBoxWording['webform_case_shipping_status']['it'] += "<br><br><b><font color='red'>Nota bene:</font> attualmente i tempi di consegna sono pi?? lunghi (1-3 giorni lavorativi) e vi chiediamo di avere pazienza.</b>"
            infoBoxWording['webform_case_ready_for_shipment']['it'] += "<br><br><b><font color='red'>Nota bene:</font> attualmente i tempi di consegna sono pi?? lunghi (1-3 giorni lavorativi) e vi chiediamo di avere pazienza.</b>"
            infoBoxWording['webform_case_order_status']['it'] += "<br><br><b><font color='red'>Nota bene:</font> attualmente i tempi di consegna sono pi?? lunghi (1-3 giorni lavorativi) e vi chiediamo di avere pazienza.</b>"
            infoBoxWording['webform_case_shipping_status']['en-US'] += "<br><br><b><font color='red'>Note:</font> Currently we have longer delivery times (1-3 business days) and ask for your patience.</b>"
            infoBoxWording['webform_case_ready_for_shipment']['en-US'] += "<br><br><b><font color='red'>Note:</font> Currently we have longer delivery times (1-3 business days) and ask for your patience.</b>"
            infoBoxWording['webform_case_order_status']['en-US'] += "<br><br><b><font color='red'>Note:</font> Currently we have longer delivery times (1-3 business days) and ask for your patience.</b>"
      }


        return infoBoxWording;
  }
  
  