function fillInfoBoxWording(){
    //var portal1 = window.location.hostname;
    //var portal2 = window.location.hostname;
    
    var link1 = ""
    var link2 = ""
    console.log(portal1);
    console.log(portal2);

    switch (portal1){
            case 'digitec.ch':
                    link1 = "'https://www.digitec.ch/"
            case 'galaxus.ch':
                    link1 = "'https://www.galaxus.ch/"
            case 'galaxus.de':
                    link1 = "'https://www.galaxus.de/"
    }
    
    switch (portal2){
            case 'helpcenter.digitec.ch':
                    link2 = "'https://helpcenter.digitec.ch/"
            case 'helpcenter.galaxus.ch':
                    link2 = "'https://helpcenter.galaxus.ch/"
            case 'helpcenter.galaxus.de':
                    link2 = "'https://helpcenter.galaxus.de/"
    }

       
    infoBoxWording = {
    //DEUTSCH
          de: {
    "-" : "inputNone",
          "outputNone" : "-",

    "Anderweitige Anfrage" : "inputOtherRequest" ,
                  "outputOtherRequest" : "Die aktuellen Informationen zum Lieferstatus, Kaufbelege, Garantiescheine und Weiteres findest du in der <a href='" + link1 + "Order' target='blank'>Bestell�bersicht</a> in deinem Kundenkonto.<br><br>Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + link1 + "Warranty/Overview' target='blank'>Defekt anmelden</a>.",

    //Level 0: Wo ist meine Bestellung?
        "Ich will den Status meiner Bestellung �berpr�fen" : "inputOrderStatus",
        "outputOrderStatus" : "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + link1 + "Order' target='blank'>Bestell�bersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.",

        "Der Versandstatus lautet \"versendet\", aber die Sendung ist nicht angekommen" : "inputShippingStatus",
        "outputShippingStatus": "Die aktuellen Informationen zum Lieferstatus deiner Produkte findest du in der <a href='" + link1 + "Order' target='blank'>Bestell�bersicht</a> in deinem Kundenkonto. Zudem findest du dort die Sendungsnummer deines Pakets.<br><br>Leider kann ein Paket auch mal etwas l�nger unterwegs sein oder es landet bei deinem Nachbarn. Sollte das Paket auch nach ein paar Tagen nicht auftauchen, leiten wir gerne eine Nachforschung ein.",
        "Der Versandstatus lautet \"versendet\", aber die Sendung ist nicht angekommen descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Welche Artikel fehlen:\nSendungsnummer:",

        "Der Versandstatus lautet \"versandbereit\". Wann wird die Sendung verschickt?" : "inputReadyForShipment",
        "outputReadyForShipment" : "Erst wenn alle Produkte deiner Bestellung versandbereit sind, wird die Bestellung versendet. Soll es schneller gehen kannst du eine <a href='https://helpcenter.digitec.ch/hc/de/articles/115005646225-Wie-l�se-ich-eine-Teillieferung-aus-' target='blank'>kostenlose Teillieferung aktivieren</a>.",

    //Level 0: Probleme mit einer Bestellung
        "Ich habe ein �usserlich besch�digtes Produkt erhalten" : "inputDamagedProduct",
        "outputDamagedProduct" : "F�r eine rasche Bearbeitung ben�tigen wir folgende Informationen von dir: <br><br>� Auftragsnummer deiner Bestellung<br>� Beschreibung des Schadens<br>� Fotos des Schadens und der Verpackung<br><br>Wir werden deine Anfrage zusammen mit unseren Logistikpartnern pr�fen und dich so rasch als m�glich �ber die weiteren Schritte informieren.",

        "Mein Produkt funktioniert nicht" : "inputNotWorking",
        "outputNotWorking" : "Sollte ein Produkt defekt sein und es sich um einen Garantiefall handeln, dann musst du in deinem Kundenkonto einen <a href='" + link1 + "Warranty/Overview' target='blank'>Defekt anmelden</a>.<br><br>Besch�digungen, welche auf unsachgem�sse Bedienung zur�ckzuf�hren sind, fallen nicht unter Garantie. Weitere Informationen findest du in unseren <a href='" + link1 + "wiki/559' target='blank'>Garantierichtlinien</a> sowie in unseren <a href='" + link1 + "Wiki/478' target='blank'>AGBs</a>.",

        "Ich habe ein falsches Produkt erhalten" : "inputWrongProduct",
        "outputWrongProduct" : "Damit wir dein Anliegen rasch pr�fen k�nnen, w�re es hilfreich, wenn du uns die Herstellernummer oder den EAN-Code des falsch erhaltenen Produkt mitteilen k�nntest. Die Angaben dazu findest du auf der Produktverpackung.",

        "Meine Bestellung wurde nicht komplett geliefert" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Nicht alle Produkte kommen direkt ab unserem eigenen Lager. Produkte von unseren Partnern werden dir somit direkt und in einem separaten Paket zugestellt. in deinem Kundenkonto kannst du unter <a href='" + link1 + "Order' target='blank'>Bestellungen</a> �berpr�fen, ob dein Paket bereits versendet wurde oder noch vorbereitet wird.",

                  "Ich m�chte eine Bestellung stornieren" : "inputCancelOrder",
                  "outputCancelOrder" : "Solange deine Lieferung noch nicht f�r den Versand vorbereitet wurde, kannst du in deinem Kundenkonto unter <a href='" + link1 + "Order' target='blank'>Bestellungen</a> das unerw�nschte Produkt selbstst�ndig stornieren. Sollte das Produkt bereits versendet worden sein, kannst du in deinem Kundenkonto eine <a href='" + link1 + "Return' target='blank'>R�ckgabe erfassen</a>.",

    //Level 0: R�ckgabe
          "Status einer R�ckgabe �berpr�fen" : "inputReturnStatus",
           "outputReturnStatus" : "Unter <a href='" + link1 + "ServiceCase/List' target='blank'>\"Alle R�cksendungen\"</a> findest du eine �bersicht und den aktuellen Status zu allen von dir eingereichten R�ckgaben und Garantief�llen.",

          "Ich m�chte ein Produkt zur�ckgeben" : "inputReturn",
          "outputReturn" : "Du kannst direkt von digitec gekaufte Produkte innerhalb von 30 Tagen, oder von einem <a href='" + link2 +"articles/360012370979-Angebote-von-Drittanbietern' target='blank'>Drittanbieter</a> gekaufte Produkte w�hrend 14 Tagen nach dem Erhalt zur�ckgeben. Du kannst in deinem Kundenkonto direkt deine <a href='" + link1 + "ReturnsAndWarranty' target='blank'>R�ckgabe erfassen</a>.",

  //Level 0: Zahlung und R�ckerstattung
          "R�ckerstattung meiner Gutschrift" : "inputCreditReturn",
          "outputCreditReturn" : "Du kannst die R�ckerstattung einer Gutschrift in wenigen Schritten selbst vornehmen. Das genaue Vorgehen beschreiben wir in diesem <a href='" + link2 +"articles/360000457949-R�ckerstattung-einer-Gutschrift' target='blank'>Artikel</a>.<br><br>Bitte beachte, dass die Geld�berweisung in der Regel 1-3 Werktage in Anspruch nimmt.<br><br>R�ckerstattungen auf deine Kreditkarte werden auf deiner n�chsten Kreditkartenabrechnung ersichtlich.",

          "Ich ben�tige eine/n Kaufbeleg/Rechnung" : "inputReceipt",
          "outputReceipt" : "S�mtliche Kaufbelege, Garantiescheine und Weiteres findest du unter dem Men�punkt <a href='" + link1 + "Order' target='blank'>Bestellungen</a> in deinem Kundenkonto, indem du den gew�nschten Auftrag ausw�hlst.<br><br>Rechnungsbelege f�r Bestellungen, welche du per Rechnung get�tigt hast, findest du <a href='" + link1 + "Invoice/ListInvoices' target='blank'>hier</a>.",

          "Ich habe eine Mahnung erhalten, obwohl ich bezahlt habe" : "inputPaymentReminder",
          "outputPaymentReminder" : "Es kann bis zu f�nf Werktage dauern, bis deine Zahlung in unserem System verbucht wird. Deshalb kann es sein, dass sich die Mahnung/Zahlungserinnerung mit deiner Zahlung �berschnitten hat. In diesem Fall musst du nichts weiter tun und kannst die Mahnung ignorieren.<br><br>Bitte beachte, dass Sammel�berweisungen nicht korrekt verbucht werden. �berweise immer f�r jede Bestellung separat, damit wir deine Zahlung eindeutig zuordnen k�nnen.",

          "Ich kann nicht per Rechnung bestellen" : "inputNoBill",
          "outputNoBill": "Wenn der Wert deines Warenkorbs h�her ist als dein individuelles Kreditlimit oder du dein Kreditlimit durch noch nicht bezahlte Bestellungen bereits ausgereizt hast, entf�llt die Rechnung als Zahlungsoption.<br><br>Bitte beachte: Unser Kundenservice kann die verf�gbaren Zahlungsarten sowie das Kreditlimit nicht beeinflussen.",

          "Ich ben�tige eine l�ngere Zahlungsfrist" : "inputLongerPayment",
          "outputLongerPayment" : "Die Zahlungsfrist betr�gt 20 Tagen und kann generell nicht verl�ngert werden. Nat�rlich kann es passieren, dass eine Rechnung einmal �bersehen wird. Aus diesem Grund versenden wir nach Ablauf der Zahlungsfrist eine Zahlungserinnerung. Auf der Zahlungserinnerung ist der Zeitraum der Fristerstreckung aufgef�hrt. Diese Nachfrist ist generell nicht verl�ngerbar.<br><br>Um zus�tzliche Geb�hren zu vermeiden, solltest du den ausstehenden Betrag umgehend begleichen. Eine Best�tigung von dir, dass du die Zahlung get�tigt hast, ist nicht n�tig.",

  //Level 0: Kundenkonto
          "Ich m�chte mein Kundenkonto l�schen" : "inputDeleteAccount",
          "outputDeleteAccount" : "Nachdem dein Konto gel�scht wurde, hast du keinen Zugriff mehr auf deine elektronischen Kaufbelege und andere Unterlagen. Wir empfehlen dir daher, eine Kopie der noch ben�tigten Formulare zu drucken oder abzuspeichern, bevor du dein Konto l�schen l�sst.<br><br>Du kannst die L�schung direkt �ber dein <a href='" + link1 + "DeleteAccount' target='blank'>Benutzerkonto</a> einleiten.",
      "Ich m�chte mein Kundenkonto l�schen descriptionLabel" : "inputDeleteAccountDescriptionLabel",
      "outputDeleteAccountDescriptionLabel" : "Beschreibung<br>Hinweis: F�r eine rasche Bearbeitung ben�tigen wir deine Kundennummer",

                  "Ich komme nicht auf mein Benutzerkonto" : "inputCantLogin",
          "outputCantLogin" : "Du kannst dein Passwort jederzeit zur�cksetzen und ein neues zusenden lassen:<br><br>�	Klicke im Login-Bereich auf <a href='" + link1 + "Register/RequestPassword' target='blank'>Passwort vergessen?</a><br>�	Gib deinen Benutzernamen oder die hinterlegte E-Mail-Adresse an und klicke auf \"Link anfordern\"",
      "Ich komme nicht auf mein Benutzerkonto descriptionLabel" : "inputCantLoginDescriptionLabel",
      "outputCantLoginDescriptionLabel" : "Beschreibung<br>Hinweis: F�r eine rasche Bearbeitung ben�tigen wir deine Kundennummer",

  //Level 0: Produktberatung
          "Produktberatung" : "inputProductAdvice",
          "outputProductAdvice" : "Fragen zu einem bereits auf digitec vorhandenen Produkt kannst du direkt auf der jeweiligen Produktseite verfassen. Unsere Community antwortet dir innerhalb von wenigen Stunden. Das Beste: alle profitieren von deinem Beitrag :-)",

  //Level 0: Offerte
      "Offerte" : "inputOffer",
      "outputOffer" : "Offerten mit einem Auftragsvolumen von bis zu CHF 5'000.- werden nicht gepriced. Es gelten die Preisangaben auf unserem Shop."

      },



    //FRANZ�SISCH
                  fr: {   
                  "-" : "inputNone",
                  "outputNone" : "-",

                  "Autre demande" : "inputOtherRequest" ,
                  "outputOtherRequest" : "Dans l'<a href='https://www.digitec.ch/fr/Order' target='blank'>aper�u des commandes</a> de votre compte client, vous pouvez consulter les derni�res informations relatives au statut de livraison de vos produits et tous les re�us, certificats de garantie.<br><br>Si un produit est d�fectueux et s'il peut �tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='https://www.digitec.ch/fr/Warranty/Overview' target='blank'>signaler un d�faut</a>.",

        //Level 0: Ou est ma commande?
        "V�rifier l'�tat de ma commande" : "inputOrderStatus",
        "outputOrderStatus" : "Dans l'<a href='https://www.digitec.ch/fr/Order' target='blank'>aper�u des commandes</a> de votre compte client, vous pouvez consulter les derni�res informations relatives au statut de livraison de vos produits. Vous y trouverez �galement le num�ro de suivi de votre colis.",

        "Le statut de l'envoi est � exp�di� �, mais l'envoi n'est pas arriv�" : "inputShippingStatus",
        "outputShippingStatus": "Dans l'<a href='https://www.digitec.ch/fr/Order' target='blank'>aper�u des commandes</a> de votre compte client, vous pouvez consulter les derni�res informations relatives au statut de livraison de vos produits. Vous y trouverez �galement le num�ro de suivi de votre colis.<br><br>Malheureusement, un colis peut parfois rester plus longtemps en cours d'acheminement ou atterrir chez le voisin. Si le colis n'arrive pas, m�me apr�s quelques jours, nous serons heureux d'ouvrir une enqu�te.",
        "Le statut de l'envoi est � exp�di� �, mais l'envoi n'est pas arriv� descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Quels sont les articles manquants :\nNum�ro de suivi :",

        "Le statut d'exp�dition est � pr�t � �tre exp�di� �. Quand l'envoi sera-t-il effectu� ?" : "inputReadyForShipment",
        "outputReadyForShipment" : "La commande ne sera exp�di�e que lorsque tous les produits de votre commande seront pr�ts � �tre envoy�s. Pour acc�l�rer ce processus, vous pouvez activer la <a href='https://helpcenter.digitec.ch/hc/fr/articles/115005646225-Comment-activer-une-livraison-partielle-' target='blank'>livraison partielle</a>.",

    //Level 0: Probl�me avec la commande
        "J'ai re�u un produit endommag� � l'ext�rieur" : "inputDamagedProduct",
        "outputDamagedProduct" : "Pour un traitement rapide, nous avons besoin des informations suivantes de votre part : <br><br>�	num�ro de votre commande<br>�	description du dommage<br>�	photos du dommage et de l'emballage<br><br>Nous examinerons votre demande avec nos partenaires logistiques et vous informerons d�s que possible des �tapes suivantes.",

        "Mon produit ne fonctionne pas" : "inputNotWorking",
        "outputNotWorking" : "Si un produit est d�fectueux et s'il peut �tre pris en charge par la garantie, vous devez aller dans votre compte client pour <a href='https://www.digitec.ch/fr/Warranty/Overview' target='blank'>signaler un d�faut</a>.<br><br>Les dommages caus�s par une utilisation inappropri�e ne sont pas couverts par la garantie. Vous trouverez un compl�ment d'information concernant ce point dans nos <a href='https://www.digitec.ch/fr/wiki/559' target='blank'>conditions de garantie</a> et <a href='https://www.digitec.ch/Wiki/478' target='blank'>CGV</a>.",

        "J'ai re�u le mauvais produit" : "inputWrongProduct",
        "outputWrongProduct" : "Afin de pouvoir v�rifier rapidement votre demande, il serait utile que vous nous communiquiez le num�ro du fabricant ou le code EAN du produit re�u par erreur. Vous trouverez ces informations sur l'emballage du produit.",

        "Ma commande n'a pas �t� enti�rement livr�e" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Tous les produits ne proviennent pas directement de notre entrep�t. Les produits de nos partenaires vous sont donc livr�s directement et dans un colis s�par�. Dans votre compte client sous <a href='https://www.digitec.ch/fr/Order' target='blank'>commandes</a>, vous pouvez v�rifier si votre colis a d�j� �t� envoy� ou est encore en cours de pr�paration.",

                  "Je souhaite annuler une commande" : "inputCancelOrder",
                  "outputCancelOrder" : "Tant que votre commande n'a pas �t� pr�par�e pour l'exp�dition, vous pouvez annuler le produit non d�sir� de mani�re ind�pendante en allant dans votre compte client sous <a href='https://www.digitec.ch/fr/Order' target='blank'>commandes</a>. Si le produit a d�j� �t� exp�di�, vous pouvez <a href='https://www.digitec.ch/fr/Return' target='blank'>enregistrer un retour</a> dans votre compte client .",

    //Level 0: Retour
          "V�rifier le statut d'un retour" : "inputReturnStatus",
           "outputReturnStatus" : "Sous la rubrique � <a href='https://www.digitec.ch/fr/ServiceCase/List' target='blank'>Tous les retours</a> �, vous trouverez une vue d'ensemble et le statut actuel de tous les retours et demandes de garantie que vous avez soumis.",

          "Je souhaite retourner un produit" : "inputReturn",
          "outputReturn" : "Les produits achet�s directement chez digitec peuvent �tre retourn�s dans les 30 jours, ceux achet�s aupr�s d'un <a href='https://helpcenter.digitec.ch/hc/fr/articles/360012370979-Offres-de-fournisseur-tiers' target='blank'>fournisseur tiers</a>, dans les 14 jours suivant leur r�ception. Vous pouvez <a href='https://www.digitec.ch/fr/ReturnsAndWarranty' target='blank'>enregistrer un retour</a> directement dans votre compte client.",

  //Level 0: Paiement et remboursement
          "Remboursement de mon avoir" : "inputCreditReturn",
          "outputCreditReturn" : "Vous pouvez effectuer vous-m�me le remboursement d'un avoir en quelques �tapes. La proc�dure exacte est d�crite dans le pr�sent <a href='https://helpcenter.digitec.ch/hc/fr/articles/360000457949-Que-faire-pour-lancer-le-processus-de-remboursement-' target='blank'>article</a>.<br><br>Veuillez noter que le virement prend habituellement entre 1 � 3 jours ouvrables.<br><br>Les remboursements sur votre carte de cr�dit figureront sur votre prochain relev� de carte de cr�dit.",

          "J'ai besoin d'un re�u/une facture" : "inputReceipt",
          "outputReceipt" : "Vous trouverez tous les re�us, certificats de garantie et autres � la rubrique <a href='https://www.digitec.ch/fr/Order' target='blank'>commandes</a> dans votre compte client en s�lectionnant la commande souhait�e.<br><br>Vous trouverez <a href='https://www.digitec.ch/fr/Invoice/ListInvoices' target='blank'>ici</a> un justificatif de facture pour les commandes pay�es sur facture.",

          "J'ai re�u un rappel m�me si j'ai pay�" : "inputPaymentReminder",
          "outputPaymentReminder" : "Jusqu'� cinq jours ouvrables peuvent s'�couler avant que nous recevions votre paiement. Il se peut donc que notre rappel de paiement et votre paiement se soient crois�s. Dans ce cas, vous n'avez rien � faire et pouvez simplement ignorer le rappel.<br><br>Veuillez noter que les virements group�s ne sont pas comptabilis�s correctement. R�glez toujours une commande � la fois pour que nous puissions clairement attribuer votre paiement.",

          "Je n'arrive pas � effectuer de commande avec paiement sur facture" : "inputNoBill",
          "outputNoBill": "Si la valeur de votre panier est sup�rieure � votre limite de cr�dit individuelle ou si vous avez d�j� �puis� votre limite de cr�dit par des commandes non encore pay�es, le paiement sur facture n'est pas applicable.<br><br>Attention : notre service client n'a aucune influence sur les modes de paiement disponibles et sur votre limite de cr�dit.",

          "J'ai besoin d'un d�lai de paiement plus long" : "inputLongerPayment",
          "outputLongerPayment" : "Le d�lai de paiement s'�l�ve � 20 jours et ne peut g�n�ralement pas �tre prolong�. Bien s�r, un oubli de facture peut arriver. C'est pourquoi nous vous enverrons un rappel apr�s l'expiration du d�lai de paiement. Le rappel de paiement pr�cise la p�riode pour laquelle le d�lai est prolong�. Ce d�lai n'est g�n�ralement pas prorogeable.<br><br>Pour �viter des frais suppl�mentaires, vous devez r�gler le montant d� imm�diatement. Une confirmation de votre part du paiement effectu� n'est pas n�cessaire.",

  //Level 0: Compte client
          "Je souhaite supprimer mon compte client" : "inputDeleteAccount",
          "outputDeleteAccount" : "Une fois votre compte supprim�, vous n'aurez plus acc�s � vos re�us �lectroniques et autres documents. De ce fait, nous vous recommandons d'imprimer ou de sauvegarder une copie des formulaires dont vous avez encore besoin avant de supprimer votre compte.<br><br>Vous pouvez initier la suppression directement � partir de votre <a href='https://www.digitec.ch/DeleteAccount' target='blank'>compte d'utilisateur</a>.",
          "Je souhaite supprimer mon compte client descriptionLabel" : "inputDeleteAccountDescriptionLabel",
      "outputDeleteAccountDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre num�ro de client",

                  "Je n'arrive pas � acc�der � mon compte d'utilisateur" : "inputCantLogin",
          "outputCantLogin" : "Vous pouvez � tout moment r�initialiser votre mot de passe pour qu'un nouveau vous soit envoy� : <br><br>�	Cliquez dans la zone de connexion sur <a href='https://www.digitec.ch/fr/Register/RequestPassword' target='blank'>mot de passe oubli� ?</a><br>�	Saisissez votre nom d'utilisateur ou adresse �lectronique fournie et cliquez sur � Demander un lien �",
          "Je n'arrive pas � acc�der � mon compte d'utilisateur descriptionLabel" : "inputCantLoginDescriptionLabel",
      "outputCantLoginDescriptionLabel" : "Description<br>Note : Pour un traitement rapide, nous avons besoin de votre num�ro de client",

  //Level 0: Conseil produits
          "Conseil produits" : "inputProductAdvice",
          "outputProductAdvice" : "Les questions concernant un produit d�j� disponible sur digitec peuvent �tre pos�es directement sur la page du produit concern�. Notre communaut� vous r�pondra dans les heures qui suivent. La meilleure chose : tout le monde b�n�ficie de votre contribution :-)",

  //Level 0: Offre
      "Offre" : "inputOffer",
      "outputOffer" : "Remarque : pour une offre, le volume de la commande doit �tre d'au moins 5'000 CHF. Les prix indiqu�s dans notre boutique s'appliquent."

      },




    //ITALIENISCH
      it: {
                  "-" : "inputNone",
                  "outputNone" : "-",

        "Altre domande" : "inputOtherRequest" ,
                  "outputOtherRequest" : "Trovi informazioni pi� dettagliate sullo stato di consegna dei tuoi articoli, tutte le ricevute d'acquisto, i certificati di garanzia e altro nel tuo conto cliente alla voce <a href='https://www.digitec.ch/it/Order' target='blank'>ordini</a>.<br><br>Se un prodotto � difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='https://www.digitec.ch/it/Warranty/Overview' target='blank'>segnala un difetto</a>.",

    //Level 0: Dove si trova il mio ordine?
        "Verificare lo stato del mio ordine" : "inputOrderStatus",
        "outputOrderStatus" : "Trovi informazioni pi� dettagliate sullo stato di consegna dei tuoi articoli nel tuo conto cliente alla voce <a href='https://www.digitec.ch/it/Order' target='blank'>ordini</a>. Trovi, inoltre, anche il numero di tracking del tuo pacco.",

        "Sullo stato della spedizione � indicato �spedito�, ma la spedizione non � arrivata" : "inputShippingStatus",
        "outputShippingStatus": "Trovi informazioni pi� dettagliate sullo stato di consegna dei tuoi articoli nel tuo conto cliente alla voce <a href='https://www.digitec.ch/it/Order' target='blank'>ordini</a>. Trovi, inoltre, anche il numero di tracking del tuo pacco.<br><br>Purtroppo, a volte la consegna del pacco pu� avere ritardi oppure essere recapitato a un indirizzo errato. Se il pacco non dovesse arrivare dopo qualche giorno, avvieremo una ricerca.",
        "Sullo stato della spedizione � indicato �spedito�, ma la spedizione non � arrivata descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Quali articoli mancano:\nNumero di spedizione:",

        "Sullo stato della spedizione � indicato �pronto per la spedizione�. Quando verr� inviata la spedizione?" : "inputReadyForShipment",
        "outputReadyForShipment" : "Solo quando tutti i prodotti del tuo ordine saranno pronti per essere spediti, l'ordine verr� inviato. Se vuoi che sia pi� veloce, puoi attivare gratuitamente la <a href='https://helpcenter.digitec.ch/hc/it/articles/115005646225-Come-faccio-a-richiedere-una-consegna-parziale-' target='blank'>consegna parziale</a>.",

    //Level 0: Problemi con un ordine
        "Ho ricevuto un prodotto danneggiato esternamente" : "inputDamagedProduct",
        "outputDamagedProduct" : "Per una rapida elaborazione abbiamo bisogno delle seguenti informazioni:<br><br>� Numero d�ordine<br>� Breve descrizione del danno<br>�	Foto dell�articolo e dell�imballaggio danneggiati<br><br>Esamineremo la tua richiesta insieme ai nostri partner logistici e ti informeremo al pi� presto su come procedere.",

        "Il mio prodotto non funziona" : "inputNotWorking",
        "outputNotWorking" : "Se un prodotto � difettoso e se si tratta di un caso coperto dalla garanzia, devi notificare il danno tramite il tuo conto cliente alla voce <a href='https://www.digitec.ch/it/Warranty/Overview' target='blank'>segnala un difetto</a>.<br><br>I danni dovuti ad un uso improprio non sono coperti dalla garanzia. Puoi trovare ulteriori informazioni nelle nostre <a href='https://www.digitec.ch/it/wiki/559' target='blank'>condizioni di garanzia</a> e nelle <a href='https://www.digitec.ch/Wiki/478' target='blank'>CGC</a>.",

        "Ho ricevuto un prodotto sbagliato" : "inputWrongProduct",
        "outputWrongProduct" : "Per poter verificare rapidamente la vostra richiesta, sarebbe utile che ci forniste il numero del produttore o il codice EAN del prodotto ricevuto in modo errato. Queste informazioni sono riportate sulla confezione del prodotto.",

        "Il mio ordine non � stato consegnato completamente" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Non tutti i prodotti provengono direttamente dal nostro magazzino. I prodotti dei nostri partner ti vengono consegnati direttamente in un pacchetto separato. Nel menu <a href='https://www.digitec.ch/it/Order' target='blank'>ordini</a> puoi anche vedere se il tuo pacco � gi� stato spedito o se � ancora in fase di preparazione.",

                  "Desidero stornare un ordine" : "inputCancelOrder",
                  "outputCancelOrder" : "Finch� il tuo ordine non � stato preparato per la spedizione, puoi stornare l�ordine del prodotto che non vuoi pi� acquistare direttamente nel tuo conto cliente alla voce <a href='https://www.digitec.ch/it/Order' target='blank'>ordini</a>. Se il prodotto � gi� stato spedito, puoi registrare il reso nel tuo conto cliente cliccando su <a href='https://www.digitec.ch/it/Return' target='blank'>registra il reso</a>.",

    //Level 0: Resi
          "Verificare lo stato di un reso" : "inputReturnStatus",
           "outputReturnStatus" : "Sotto <a href='https://www.digitec.ch/it/ServiceCase/List' target='blank'>tutti i resi</a> trovi una panoramica e lo stato attuale di tutti i resi e le richieste di garanzia da te presentate.",

          "Vorrei restituire un prodotto" : "inputReturn",
          "outputReturn" : "Puoi restituire gli articoli acquistati direttamente da digitec entro 30 giorni dal ricevimento, mentre gli articoli acquistati da un <a href='https://helpcenter.digitec.ch/hc/it/articles/360012370979-Offerte-da-parte-di-terzi' target='blank'>fornitore terzo</a> entro 14 giorni dal ricevimento. Puoi registrare il <a href='https://www.digitec.ch/it/ReturnsAndWarranty' target='blank'>reso</a> direttamente nel tuo conto cliente.",

  //Level 0: Pagamento e rimborso
          "Rimborso di un credito" : "inputCreditReturn",
          "outputCreditReturn" : "Puoi avviare il rimborso di un credito autonomamente. La procedura esatta � descritta in questo <a href='https://helpcenter.digitec.ch/hc/it/articles/360000457949-Come-faccio-a-richiedere-il-rimborso-' target='blank'>articolo</a>.<br><br>Si prega di notare che il trasferimento di denaro di solito richiede da 1 a 3 giorni lavorativi.<br><br>I rimborsi sulla carta di credito appariranno sul prossimo estratto conto della carta di credito.",

          "Necessito di una ricevuta/fattura" : "inputReceipt",
          "outputReceipt" : "Trovi tutte le ricevute d'acquisto, i certificati di garanzia e altro ancora alla voce <a href='https://www.digitec.ch/it/Order' target='blank'>ordini</a> nel tuo conto cliente selezionando l�articolo desiderato.<br><br><a href='https://www.digitec.ch/it/Invoice/ListInvoices' target='blank'>Qui</a> trovi le ricevute per gli ordini che hai pagato tramite fattura.",

          "Ho ricevuto un richiamo, nonostante io abbia gi� effettuato il pagamento" : "inputPaymentReminder",
          "outputPaymentReminder" : "Possono volerci fino a cinque giorni lavorativi per ricevere il pagamento. � possibile che il tuo pagamento sia avvenuto contemporaneamente al nostro sollecito. In questo caso non devi fare nulla e puoi ignorare il sollecito.<br><br>Si prega di notare che i pagamenti collettivi non vengono registrati correttamente. Effettua sempre un bonifico separato per ciascun ordine, in modo che possiamo assegnare il pagamento all�ordine corretto.",

          "Non posso effettuare ordini su fattura" : "inputNoBill",
          "outputNoBill" : "Se il valore del tuo carrello � superiore al tuo limite di credito individuale o se hai gi� esaurito il tuo limite di credito con ordini non ancora pagati, la modalit� di pagamento tramite fattura viene disabilitata.<br><br>Nota bene: il nostro servizio clienti non ha alcun influsso sui metodi di pagamento disponibili o sul tuo limite di credito.",

          "Ho bisogno di un termine di pagamento pi� lungo" : "inputLongerPayment",
          "outputLongerPayment" : "Il termine di pagamento � di 20 giorni e in generale non pu� essere prorogato. Naturalmente, pu� succedere che una fattura vada dimenticata. Per questo motivo, dopo la scadenza del termine di pagamento inviamo un sollecito. Sul sollecito di pagamento � indicato il periodo di proroga del termine. Questo periodo non � generalmente prorogabile.<br><br>Per evitare costi aggiuntivi, effettua immediatamente il pagamento.Non � necessaria una conferma da parte tua di effettuato pagamento.",

  //Level 0: Conto cliente
          "Desidero cancellare il mio conto cliente" : "inputDeleteAccount",
          "outputDeleteAccount" : "Una volta eliminato il conto, non avrai pi� accesso alle tue ricevute e documenti elettronici. Pertanto, consigliamo di stamparne o salvare una copia delle ricevute e dei moduli prima di cancellare il tuo conto in maniera definitiva.<br><br>Potete avviare la cancellazione direttamente dal vostro <a href='https://www.digitec.ch/DeleteAccount' target='blank'>conto utente</a>.",
                  "Desidero cancellare il mio conto cliente descriptionLabel" : "inputDeleteAccountDescriptionLabel",
      "outputDeleteAccountDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",

                  "Non riesco ad accedere al mio conto utente" : "inputCantLogin",
          "outputCantLogin" : "Puoi reimpostare la tua password in qualsiasi momento e fartene inviare una nuova:<br><br>� Nell'area di login, clicca su <a href='https://www.digitec.ch/it/Register/RequestPassword' target='blank'>Hai dimenticato la password?</a><br>� Inserisci il tuo nome utente o l'indirizzo e-mail che hai registrato nel tuo conto e clicca poi su �Richiedi link�.",
          "Non riesco ad accedere al mio conto utente descriptionLabel" : "inputCantLoginDescriptionLabel",
      "outputCantLoginDescriptionLabel" : "Descrizione<br>Nota: per una rapida elaborazione abbiamo bisogno del vostro numero cliente",

  //Level 0: Consigli sui prodotti
          "Consulenza prodotti" : "inputProductAdvice",
          "outputProductAdvice" : "Le domande su un prodotto gi� disponibile su digitec possono essere scritte direttamente sulla relativa pagina del prodotto. La nostra comunit� vi risponder� entro poche ore. La cosa migliore: tutti beneficiano del vostro contributo :-)",

  //Level 0: Offerta
      "Offerta" : "inputOffer",
      "outputOffer" : "Attenzione: per un'offerta, il volume dell'ordine deve essere di almeno 5'000 CHF. Si applicano i prezzi indicati nel nostro negozio."
      },




    //ENGLISCH
      'en-US': {
                  "-" : "inputNone",
                  "outputNone" : "-",

                  "Other requests" : "inputOtherRequest" ,
                  "outputOtherRequest" : "We'll keep the delivery status, sales receipts and warranty certificates updated in the <a href='https://www.digitec.ch/en/Order' target='blank'>order overview</a> in your customer account.<br><br>Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='https://www.digitec.ch/en/Warranty/Overview' target='blank'>report a defect</a>.",

    //Level 0: Where is my order?
        "I�d like to check the status of my order" : "inputOrderStatus",
        "outputOrderStatus" : "We'll keep the delivery status updated in the <a href='https://www.digitec.ch/en/Order' target='blank'>order overview</a> in your customer account. You�ll also find the tracking number of your parcel there.",

        "The shipment status is �sent�, but the parcel hasn�t arrived" : "inputShippingStatus",
        "outputShippingStatus": "We'll keep the delivery status updated in the <a href='https://www.digitec.ch/en/Order' target='blank'>order overview</a> in your customer account. You�ll also find the tracking number of your parcel there.<br><br>Sometimes it takes a little longer for a parcel to arrive � or it may end up at your neighbour's. If it still hasn�t arrived after a few days, we�re happy to initiate an investigation.",
        "The shipment status is �sent�, but the parcel hasn�t arrived descriptionTemplate" : "inputShippingStatusMailTemplate",
        "outputShippingStatusMailTemplate" : "Which articles are missing:\nConsigment number:",

        "The shipment status is �ready for shipment�. When will the order be sent?" : "inputReadyForShipment",
        "outputReadyForShipment" : "We don't ship the order until all your products are in the warehouse and �ready for shipment�. If you need any items sooner, please <a href='https://helpcenter.digitec.ch/hc/en-us/articles/115005646225-How-do-I-arrange-partial-delivery-' target='blank'>activate partial delivery</a>.",

    //Level 0: Problems with an order
        "I've received an externally damaged product" : "inputDamagedProduct",
        "outputDamagedProduct" : "For quick processing, please send us the following details:<br><br>� Order number<br>� Description of the damage<br>� Photos of the damage and packaging<br><br>We'll then work together with the delivery company to check what happened to your order and will get back to you as quickly as possible with updates and next steps.",

        "My product isn�t working" : "inputNotWorking",
        "outputNotWorking" : "Should a product prove defective and constitute a warranty claim, go to your customer account and <a href='https://www.digitec.ch/en/Warranty/Overview' target='blank'>report a defect</a>.<br><br>Damage caused by incorrect use is not covered by the warranty. For more information, see our <a href='https://www.digitec.ch/en/wiki/559' target='blank'>warranty policy</a> and our <a href='https://www.digitec.ch/Wiki/478' target='blank'>terms and conditions</a>.",

        "I�ve received the wrong product" : "inputWrongProduct",
        "outputWrongProduct" : "To be able to check your request quickly, it would be helpful if you could provide us with the manufacturer's number or the EAN code of the incorrectly received product. You can find this information on the product packaging.",

        "There are items missing in my order" : "inputReceivedNotEverything",
        "outputReceivedNotEverything" : "Not all products are sent from our warehouse. When an item comes from one of our partner suppliers, it'll be sent to you directly in a separate parcel. Go to <a href='https://www.digitec.ch/en/Order' target='blank'>orders</a> in your customer account to find your order status to check if it has been shipped or if it's not been processed yet.",

                  "I�d like to cancel my order" : "inputCancelOrder",
                  "outputCancelOrder" : "As long as we haven�t yet got your order ready to ship, you can still cancel the product you no longer want in the <a href='https://www.digitec.ch/en/Order' target='blank'>orders</a> section in your customer account. If the product has already been shipped, you�ll have to <a href='https://www.digitec.ch/en/Return' target='blank'>register a return</a> in your customer account.",

    //Level 0: Returns
          "I�d like to check the status of a return" : "inputReturnStatus",
           "outputReturnStatus" : "Go to <a href='https://www.digitec.ch/en/ServiceCase/List' target='blank'>all returns</a> to find an overview and the current status of all your returns and warranty cases.",

          "I need to return a product" : "inputReturn",
          "outputReturn" : "You have 30 days to return products sold by digitec and 14 days to return items sold by <a href='https://helpcenter.digitec.ch/hc/en-us/articles/360012370979-Buying-from-third-party-sellers' target='blank'>third parties</a> from the day you received them. <a href='https://www.digitec.ch/en/ReturnsAndWarranty' target='blank'>Register returns</a> in your customer account.",

  //Level 0: Payment and refund
          "I want to refund my credit" : "inputCreditReturn",
          "outputCreditReturn" : "To refund a credit note, please follow the simple steps described in this <a href='https://helpcenter.digitec.ch/hc/en-us/articles/360000457949-How-do-I-get-a-refund-' target='blank'>article</a>.<br><br>Please bear in mind that transfers usually take one to three working days.<br><br>Refunds to your credit card will appear on your next credit card statement.",

          "I need a receipt/invoice" : "inputReceipt",
          "outputReceipt" : "All sales receipts and warranty certificates are saved in the <a href='https://www.digitec.ch/en/Order' target='blank'>orders</a> section in your customer account. Go to the according order detail page.<br><br>You�ll find the sales receipt for all orders you paid by invoice <a href='https://www.digitec.ch/en/Invoice/ListInvoices' target='blank'>here</a>.",

          "I�ve received a reminder even though I paid for my order" : "inputPaymentReminder",
          "outputPaymentReminder" : "It can take up to five working days until your payment arrives in our system. Therefore, it�s possible that the reminder has overlapped with your payment. In this case, please ignore the reminder.<br><br>Please note that collective transfers are not entered correctly. It�s important you pay for each order in a separate bank transfer to make sure we can clearly identify your payment.",

          "I can�t pay by invoice" : "inputNoBill",
          "outputNoBill": "Payment by invoice is not possible if your order costs more than your credit limit allows or if you have reached your credit limit with unpaid orders.<br><br>Please note: our customer service has no influence on the available payment methods and the credit limit.",

          "I need to extend the payment deadline" : "inputLongerPayment",
          "outputLongerPayment" : "Our payment deadline is 20 days after the invoice is issued. Generally, this deadline cannot be extended. Of course, we understand that invoices are occasionally overlooked. For this reason, we send a reminder after the payment deadline has expired. The reminder will state the date of the new payment deadline. We cannot extend this final deadline.<br><br>The best way forward is to transfer the amount straight away to avoid any extra charges. There is no need for you to send us a confirmation of payment.",

  //Level 0: Customer account
          "I�d like to delete my customer account" : "inputDeleteAccount",
          "outputDeleteAccount" : "Once your account is deleted, you will no longer have access to your sales receipts and other documents. That�s why we recommend making a copy (printing out a hard copy or saving an electronic one) before you ask us to delete your account.<br><br>You can initiate the deletion directly from your <a href='https://www.digitec.ch/DeleteAccount' target='blank'>user account</a>.",
      "I�d like to delete my customer account descriptionLabel" : "inputDeleteAccountDescriptionLabel",
      "outputDeleteAccountDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number",

                  "I can�t access my customer account" : "inputCantLogin",
          "outputCantLogin" : "You can reset your password at any time:<br><br>� Go to the login screen and click <a href='https://www.digitec.ch/en/Register/RequestPassword' target='blank'>forgot your password?</a><br>� Enter your username or e-mail address and click �Request link�.",
      "I can�t access my customer account descriptionLabel" : "inputCantLoginDescriptionLabel",
      "outputCantLoginDescriptionLabel" : "Description<br>Note: For quick processing we need your customer number",

  //Level 0: Product advice
          "Product information" : "inputProductAdvice",
          "outputProductAdvice" : "You can enter questions about products that are already available on digitec directly on its product page. Our Community answers within a few hours. Additionally: everyone benefits from your contribution :-)",

      //Level 0: Offer
      "Offer" : "inputOffer",
      "outputOffer" : "Please note: For a quotation, the minimum order volume must be 5'000 CHF. The prices quoted in our store apply."        
        }
    }
    return infoBoxWording;
}
