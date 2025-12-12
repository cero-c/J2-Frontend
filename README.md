# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.



## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Ceren Coban
  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive
 
</details>



## Je website

<details open>
  <summary>Uitwerken voor kick-off werkgroep</summary>

   https://www.universiteitvannederland.nl/ Home pagina & Doneren pagina
  ### Je opdracht:

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina
    <img src="readme-images/w1-opd-0-1.png" width="375px" alt="Home pagina bevat een hamburger menu, toont laaste aflevering en introduceert de missie van de Universiteit van Nederland. ">
    <img src="readme-images/w1-opd-0-2.png" width="375px" alt="Er is een inputveld om voor de nieuwsbrief in te schrijven. Dan gaat verder nieuws, podcasts..">
    <img src="readme-images/w1-opd-0-3.png" width="375px" alt="Een overzicht van partners, logo's en ondersteunde organisatie. Te klein afbeeldingen">
    <img src="readme-images/w1-opd-0-4.png" width="375px" alt="Einde van de home pagina staat weer een inputveld voor de nieuwsbrief en link naar social media acoounts">
 :

  #### Screenshot(s) van de tweede pagina (small screen):
  Doneren pagina
    <img src="readme-images/w1-opd-0-5.png" width="375px" alt="Een donatiepagina: je ziet een uitleg van het belang van donaties en een call-to-action met Doneer knop">
    <img src="readme-images/w1-opd-0-6.png" width="375px" alt="Transparante uitleg over hoe donaties worden besteed. Tabelachtige presentatie">
    <img src="readme-images/w1-opd-0-7.png" width="375px" alt="Interactieve donatiemodule waar gebruikers eenmalig, maandelijks of jaarlijks een bedrag kunnen kiezen. Inclusief formulier voor persoonlijke gegevens en betaaloptie, bevat CTA knop">
    
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  1. De website ondersteunt geen hoge contrast of licht/donkere modus.
  2. Kleur wordt soms als enige manier gebruikt om informatie over te brengen.
  3. Hoewel de website geen heftige animaties bevat, zou het fijn zijn om gebruik van prefers-reduced-motion te maken.
  4. In theorie worden er een H1 en meerdere H2 tags gebruik gemaakt, maar h1 en h2 hebben dezelfde functie en er zijn geen verschil ivm de functies. 
  5. Podcasts hebben geen ondertiteling, videos wel. 
  6. Niet alle interactieve elementen hebben een duidelijke focus-staat.
  7. Geen skip link (ga naar de inhoud knop)
  8. Focusstijl is niet altijd zichtbaar. 
  9. Horizontaal scrollen is vermijderd, maar je ziet nog steeds een beetje witte ruimte.
  10. Afbeeldingen hebben geen alternatieve tekst.

</details>


## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/doneer-1.jpg" width="375px" alt="breakdown van de hele pagina">
  <img src="readme-images/doneer-2.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/detail-1.jpg" width="375px" alt="tabel en details (uitklappen)">
  In de tabel zit een extra rij waar je meer info kunt tonen. Ik kan dit met 'details' doen, maar waarschijnlijk gebruik ik een button om het uit te klappen.

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="hamburger menu">
  De mobiele versie bevat een hamburger menu.
</details>


## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Table element ken ik niet. Eerste keer ga ik aan de slag gaan. 
  Ik had ze als losse sections gemaakt, maar ze horen eigenlijk allemaal bij de donatie. Dus het moet gewoon één section zijn.


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Ceren           | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | -Toegankelijkheid & kopjes| en dit             | en ik dit    | en dan ik dat    |
  | -Flexbox oefening 4 - Carousel | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...           | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen
  - <img src="readme-images/kopjes.HEIC" width="375px" alt="h3 of p"> De namen van de video's zijn titels binnen hun eigen context, maar niet op mijn website. Dus geen h3, gewoon p. 
  - De carousel-opdracht heb ik samen met de studentassistenten uitgewerkt. Het was complex, maar ik wil deze functionaliteit wel in mijn website toepassen.
  - Een volledige card klikbaar maken lijkt handig, maar is niet toegankelijk voor screenreaders en toetsenbordgebruikers. 
    <em>Waarom?</em> 
    * Een screenreader kan niet duidelijk aangeven welk element er precies klikbaar is, omdat de hele card als één groot linkgebied wordt gezien. 
    * Belangrijke onderdelen in de card (zoals titel, tekst, datum of afbeelding) krijgen dan geen eigen semantische rol. 
    * Voor toetsenbordgebruikers ontstaat er maar één focuspunt, terwijl je soms meerdere onderdelen apart moet kunnen bereiken.
</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  <img src="readme-images/grid-flex.HEIC" width="375px" alt="grid of flex"> 
  <img src="readme-images/cards-met-grid.png" width="375px" alt="cards">
  - De flexbox-opdrachten gingen goed. Grid is nog nieuw voor mij. Voor mijn website heb ik aangegeven welke onderdelen ik met flex ga maken en welke met grid. Soms kan het allebei (bijvoorbeeld header), maar ik probeer zoveel mogelijk grid te gebruiken zodat ik het beter kan leren.
 
  <img src="readme-images/tabel-underline.HEIC" width="375px" alt="table en underline"> 
  -De tabel heeft standaard eigenschappen: sommige elementen krijgen automatisch padding, margin of een border. Op de originele website staat er een underline onder bepaalde delen van de tabel. Dat is daar gedaan met een background-image, maar ik denk dat dit ook prima met een border-bottom opgelost kan worden. In eerste instantie had ik die rijen apart een border-bottom gegeven, maar dat zag er vreemd en onregelmatig uit. Uiteindelijk heb ik het opgelost door alleen de caption en het tbody een border te geven. Zo blijft het ontwerp veel netter en consistenter.


  <img src="readme-images/positioneren-1.JPG" width="375px" alt="annotaties-1"> 
  <img src="readme-images/positioneren-2.JPG" width="375px" alt="annotaties-2"> 
  <img src="readme-images/positioneren-3.JPG" width="375px" alt="annotaties-3"> 

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Ceren     | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | -Label & input  | en dit             | en ik dit    | en dan ik dat    |
  | -Position relative & absolute| dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Belangrijke leerpunt: bij een grid-indeling zoals 1fr auto kijkt de browser eerst naar de auto-breedte, waardoor de andere kolom de resterende ruimte krijgt. Dat vind ik nog lastig om goed in te schatten. Ik moet hier nog verder mee oefenen.
  - Display: inline-block kan helpen met tabel. 
  - Een label en input worden aan elkaar gelinkt via dezelfde id/for. Je kunt de input radio of checkbox visueel verbergen via position:absolute.
  <img src="readme-images/grid-input.png" width="375px" alt="input label 1fr 2fr"> 
</details>




## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
  Bevindingen (en verbeteringen)
  - Kleurcontrast: verbeterd. 
  - Titels zijn volledig herschreven naar logische hiërarchie..
  - Skip link: toegevoegd en zichtbaar bij focus.
  - Focus stijt: nu duidelijk zichtbaar en consistent.
  - Alt-teksten: aangevuld en opgeschoond.
  - Formulieren: labels gekoppeld via for en id.
  - Volledige card is niet meer klikbaar voor video's.
</details>


## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  - Eerst probeerde ik met margin en padding de achtergrondkleur over de volledige pagina te krijgen. Dat werkte niet goed en het brak mijn sticky- en relative-elementen. Omdat ik niet de hele viewport als width had gegeven, heb ik uiteindelijk een ::before gebruikt om de achtergrondkleur te plaatsen. Dat zorgde in het begin voor veel problemen met de responsive layout, maar uiteindelijk heb ik het opgelost door in de media query nieuwe ::before-properities toe te voegen. 
  <img src="readme-images/before-width.png" width="375px" alt="achterground">
  - Een negatieve margin-top zorgt voor problemen met elementen die position gebruiken, omdat je de natuurlijke flow van de pagina doorbreekt. Hierdoor gaan bijvoorbeeld sticky, absolute of relative elementen onverwacht verschuiven. 
  <img src="readme-images/margin-top&position.png" width="375px" alt="negatieve margin-top"> 

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Sticky kopjes wil ik in mijn website gebruiken. 

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
 -media query
 <img src="readme-images/responsive.png" width="375px" alt="responsive">
 <img src="readme-images/responsive-footer.png" width="375px" alt="responsive-footer">
 <img src="readme-images/dark-mode-desktop.png" width="375px" alt="dark">
 <img src="readme-images/dark-mode-mobiel.png" width="375px" alt="dark-mobiel">
 -extra aandacht met keyframes
  <img src="readme-images/aandacht.png" width="375px" alt="keyframe">

  ### Dit was lastig/Is niet gelukt:
 -Hamburger menu: sticky en relatieve positineren was lastig:
 <img src="readme-images/mijn-hamburger-menu.png" width="375px" alt="hamburger">
-lasers
 ik heb die laserbeams gecopieerd en geplakt van Codepen
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>



## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. Lasers: https://codepen.io/Evolution/pen/poGOyM?editors=0110
  2. ChatGPT prompt: 'Ik wil deze code gebruiken in mijn project https://codepen.io/Evolution/pen/poGOyM in de CSS staat de regel @import "compass/css3";. Hoe moet ik dat in mijn eigen project importeren? Moet ik hiervoor veel aanpassen en hoe werkt dit precies?' Kort antwoord: 'Werkt de code nog zonder Compass? In dit specifieke CodePen-voorbeeld: ja, alles werkt al zonder Compass. Waarom? Omdat bijna alle dingen die vroeger via Compass nodig waren (zoals border-radius, box-shadow prefixes) nu standaard in CSS zitten.' 
  3. Schoolopdrachten mbv medestudenten 
  4. https://developer.mozilla.org/en-US/ 'The Table element'
  5. https://www.w3schools.com/css/css_positioning.asp positions oefeningen


</details>
