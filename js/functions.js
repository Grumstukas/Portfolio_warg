"use strict";
// general
function elementHeight( path ) {
    var height = parseFloat(window.getComputedStyle( document.querySelector( path ) ).height);
    return height;
}
//parseFloat -                          ištraukia skaitinę aukščio vertę;
//window.getComputedStyle( X ).height - ištraukia tekstinę stiliaus elemento (X) aukščio reikšmę;
//document.querySelector( path ) -      nuoroda į konkretų HTML elementą

function headerScrollDetector() {
    var sections = [],
        scroll = window.scrollY + elementHeight('header'),                      //duoda scroll aukštį esamu momentu.
        headerLinkCount = document.querySelectorAll('header nav > a').length,   //suskaičiuoja konkretaus HTML elemento brolių kiekį
        top = document.getElementById('testimonials').offsetTop,                //duoda HTML elemento conteinerio viršaus aukštį.
        sectionID ='',                                                          //ciklas sukaups visus ID
        sekcijuSarasas = [],                                                    //ciklas sukaups visus sekcijų pavadinimus su #
        sekcijosPavadinimas = [],                                               //ciklas sukaups visus sekcijų pavadinimus be #
        sectionNameNow = '';                                                    //sekcijos vardas kuri yra ekrano viršuje vardas
        

    for ( var i=0; i<headerLinkCount; i++ ) {                                             //ciklą riboja konkretaus HTML elemento brolių kiekis
        sectionID = document.querySelectorAll('header nav > a')[i].getAttribute('href');  //ciklas iš konkrečių HTML brolių ims po vieną ir ištrauks nurodyto atributo vertę
        if ( sectionID === '#' ) {                  //jeigu vertė tik #
            sectionID = sectionID.substring(1);     //atima iš sekcijos ID #
            sekcijosPavadinimas.push(sectionID);    //surenka sekcijų pavadinimus į vieną sąrašą;
            sections.push(0);                       //saraše "sections" pirmu nariu įrašys - 0 
            continue;                                // ir tikrins toliau.
        }
        top = document.querySelector(sectionID).offsetTop;  //gavęs atsakymą iš ifo, pasakys jo aukščio vertę, 
        sections.push(top);                                 // ir įstums į sąrašą.
        sekcijuSarasas.push(sectionID);                     //duoda visų sekcijų sąrašą su # (ar reikalingas ???)
        
        sectionID = sectionID.substring(1);                 //atima iš sekcijos ID #
        sekcijosPavadinimas.push(sectionID);                //surenka sekcijų pavadinimus į vieną sąrašą;
        var sectionNameNowH = '#'+sectionID;
        var height = parseFloat(window.getComputedStyle( document.querySelector(sectionNameNowH) ).height);  
            
        if((scroll>=sections[i]) && scroll < sections[i]+height ){       //jeigu skrolas yra tarp tikrinamos sekcijos ir tarp sekančios tikrinamos sekcijos 
                sectionNameNow = sectionID;                 // tada dabartinės sekcijos pavadinimas yra tos sek
                var hrefValue = 'a[href="#'+sectionID+'"]';
                var element = document.querySelector(hrefValue);
                element.classList.add('active');}
        if((scroll<=sections[i]) || scroll > sections[i]+height ){ 
            sectionNameNow = sectionID;                 
            var hrefValue = 'a[href="#'+sectionID+'"]';
            var element = document.querySelector(hrefValue);
            element.classList.remove('active');
            }else{
                continue;
            }
    }
    // console.log( sections );
    // console.log( scroll+'dabartinis aukštis' );
    // console.log( top );
    // console.log (sekcijuSarasas);
    // console.log(sectionID = sectionID.substring(1))
    // console.log( sekcijosPavadinimas );
    console.log( 'sectionNameNow '+ sectionNameNow );
    console.log( hrefValue );
    console.log( element );
    console.log( height )
}









//HERO
function generateIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += '<div><a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a></div>';
    }

    return HTML;
}
// SKILLBARS

function fillbar(seconds) {
    console.log('clicked');
    const bar = document.querySelector('.bar-fill');
    let atPercent = 0;
    const interval = setInterval (() => {
        bar.style.width = atPercent + '%';
        atPercent++;
        console.log('running at', atPercent)
        if (atPercent > 100) {
            clearInterval(interval);
        }
    }, (seconds * 1000 / 100)
}
// function run() {                                     
//     var fill = document.getElementById('bar-fill');    
//     var text = document.getElementById('value');        
//     var width = 10;                                     
//     var id=setInterval(ref, 20);                         
//     function ref() {
//         if (id >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             fill.style.width = width + '%';
//             text.innerHTML = width + '%';
//         }
//     }
// }
//BOTTOM
function generateFooterIcons( data ) {
    var HTML = '';
    
    for ( var i=0; i<data.length; i++ ) {
        if ( data[i].icon === '' ||
             data[i].link === '' ) {
            continue;
        }
        HTML += '<div><a href="'+data[i].link+'" target="_blank" class="fa fa-'+data[i].icon+'"></a></div>';
    }

    return HTML;
}