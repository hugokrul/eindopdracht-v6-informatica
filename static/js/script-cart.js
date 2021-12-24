let kaarten = document.querySelectorAll('.add-cart');
let pinned = false

let producten = [
    {
        name: "Acid Black Cherry - Black Cherry",
        tag: "AcidBlackCherryBlackCherry",
        price: 51,
        id: 0,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Acid Black Cherry - Q.E.D",
        tag: "AcidBlackCherryQED",
        price: 44,
        id: 1,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Co Shu Nie - Overkill",
        tag: "CoShuNieOverkill",
        price: 39,
        id: 2,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Co Shu Nie - Pure",
        tag: "CoShuNiePure",
        price: 25,
        id: 3,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "JAM Project - Area Z",
        tag: "JAMProjectAreaZ",
        price: 40,
        id: 4,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Porno Graffiti - Kumo o mo Tsukamu Tami",
        tag: "PornoGraffitiKumoOMoTsukamuTami",
        price: 24,
        id: 5,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Miki Matsubara - The Premium Best",
        tag: "MikiMatsubaraThePremiumBest",
        price: 26,
        id: 6,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Miki Matsubara - Best Collection",
        tag: "MikiMatsubaraBestCollection",
        price: 93,
        id: 7,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Ayumi Hamasaki - LOVEppears",
        tag: "AyumiHamasakiLOVEppears",
        price: 33,
        id: 8,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Ayumi Hamasaki - TROUBLE",
        tag: "AyumiHamasakiTROUBLE",
        price: 38,
        id: 9,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Kat-Tun - Kusabi Kusabi",
        tag: "KATTUNKusabiKusabi",
        price: 14,
        id: 10,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Kat-Tun - Break The Records",
        tag: "KatTunBreakTheRecordsByYouFor",
        price: 38,
        id: 11,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "BTS - Wings",
        tag: "BTSWings",
        price: 28,
        id: 12,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "BTS - Face Yourself",
        tag: "BTSFaceYourself",
        price: 28,
        id: 13,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "PSY - Summer Stand Concert",
        tag: "PSYSummerStandConcert",
        price: 46,
        id: 14,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Seventeen - 24H",
        tag: "Seventeen24H",
        price: 35,
        id: 15,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Seventeen - Attaca",
        tag: "SeventeenAttaca",
        price: 35,
        id: 16,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Girls Generation - Paparazzi",
        tag: "GirlsGenerationPaparazzi",
        price: 20,
        id: 17,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Deep Purple - Turning to Crime",
        tag: "DeepPurpleTurningCrime",
        price: 36,
        id: 18,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "AC/DC - Highway To Hell",
        tag: "AcDcHighwayToHell",
        price: 23,
        id: 19,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "AC/DC - Back In Black",
        tag: "AcDcBackInBlack",
        price: 21,
        id: 20,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Guns N Roses - Appetite for Destruction",
        tag: "GunsNRosesAppetiteFor",
        price: 28,
        id: 21,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Kiss - Destroyer",
        tag: "KissDestroyer",
        price: 40,
        id: 22,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Kiss - Carnival Of Souls",
        tag: "KissCarnivalOfSouls",
        price: 29,
        id: 23,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Elvis Presley - Thats The Way It Is",
        tag: "ElvisPresleyThatsTheWayItIs",
        price: 54,
        id: 24,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Elvis Presley - Merry Christmas Baby",
        tag: "ElvisPresleyMerryChristmasBaby",
        price: 24,
        id: 25,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Chuck Berry - Greatest Hits",
        tag: "ChuckBerryGreatestHits",
        price: 19,
        id: 26,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Chuck Berry - Johnny B. Goode",
        tag: "ChuckBerryJohnnyBGoode",
        price: 16,
        id: 27,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Beach Boys - Beach Boys",
        tag: "BeachBoysBeachBoys",
        price: 38,
        id: 28,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Beach Boys - Greatest Surf Hits",
        tag: "BeachBoysGreatestSurfHits",
        price: 19,
        id: 29,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Iron Maiden - Somewhere In Time",
        tag: "IronMaidenSomewhereInTime",
        price: 23,
        id: 30,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Iron Maiden - Fear Of The Dark",
        tag: "IronMaidenFearOfTheDark",
        price: 42,
        id: 31,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Black Sabbath - Master Of Reality",
        tag: "BlackSabbathMasterOfReality",
        price: 13,
        id: 32,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Black Sabbath - Dehumanizer",
        tag: "BlackSabbathDehumanizer",
        price: 33,
        id: 33,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Judas Priest - Painkiller",
        tag: "JudasPriestPainkiller",
        price: 25,
        id: 34,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Judas Priest - Killing Machine",
        tag: "JudasPriestKillingMachine",
        price: 25,
        id: 35,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "John Adams - Clouds Of Forgetting",
        tag: "JohnAdamsCloudsOfForgetting",
        price: 25,
        id: 36,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Armand Amar- Leyla Et Majnun",
        tag: "ArmandAmarLeylaEtMajnun",
        price: 24,
        id: 37,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "David Bedford - Great Equatorial",
        tag: "DavidBedfordGreatEquatorial",
        price: 14,
        id: 38,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "John Cage - Atlas Eclipticalis With W",
        tag: "JohnCageAtlasEclipticalisWithW",
        price: 54,
        id: 39,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Glenn Branca - Symphony No.5",
        tag: "GlennBrancaSymphonyNo5",
        price: 20,
        id: 40,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "E. Carter - Elliott Carter Edition 9",
        tag: "ElliotCarterEddition9",
        price: 22,
        id: 41,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Beethoven - symfonie nr9",
        tag: "BeethovenSymphonieNr9",
        price: 23,
        id: 42,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Bratislava - Symfonieën en Sonaten",
        tag: "BratislavaSymfonieSonata",
        price: 33,
        id: 43,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Tchaikovski - Symfonie No. 6",
        tag: "ThaikovskiSymfonieNo6",
        price: 24,
        id: 44,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Shostakovich - Symfonie no7 Leningrad",
        tag: "shostakovichSymfonie7Stalingrad",
        price: 16,
        id: 45,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Paradise Lost - Symfonie for the Lost",
        tag: "ParadiseLostSymfonieForTheLost",
        price: 25,
        id: 46,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Beethoven - Symfonie nr. 9 in Dminor",
        tag: "BeethovenSymphonieNr9Dminor",
        price: 23,
        id: 47,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "F. Chopin - Sonata Op.65",
        tag: "FChopinSonataOp65",
        price: 52,
        id: 48,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "E. Satie - Vexations",
        tag: "ESatieVexations",
        price: 17,
        id: 49,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Joep Beving - Trilogy -ltd/box Set",
        tag: "JBevingTrilogy",
        price: 291,
        id: 50,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Joep Beving - Conatus",
        tag: "JBevingConatus",
        price: 48,
        id: 51,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Joep Beving - Solipsism -ltd-",
        tag: "JBevingSolipsism",
        price: 33,
        id: 52,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Yiruma - Rewritten Memories",
        tag: "YirumarewrittenMemories",
        price: 37,
        id: 53,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Daft Punk - Homework",
        tag: "DaftPunkHomework",
        price: 17,
        id: 54,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "John Talabot - Fin",
        tag: "JohnTalabotFin",
        price: 19,
        id: 55,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Doctor Rockit - Bodily Functions",
        tag: "DoctorRockitBodilyFunctions",
        price: 24,
        id: 56,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Nicolas Jaar - Space Is Only Noice..",
        tag: "NicolasJaarSpaceIsOnlyNoice",
        price: 23,
        id: 57,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Daft Punk - Discovery",
        tag: "DaftPunkDiscovery",
        price: 28,
        id: 58,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Richard Dawson & Circle - Henki",
        tag: "CircleHenki",
        price: 28,
        id: 59,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "JS666 - II",
        tag: "JS666II",
        price: 40,
        id: 60,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Nasenbluten - Weve Got The Balls",
        tag: "NasenblutenWeveGotTheBalls",
        price: 31,
        id: 61,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Nasenbluten - Ill Make Them Pay",
        tag: "NasenblutenIllMakeThemPay",
        price: 28,
        id: 62,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Ophidian - Blackbox",
        tag: "OphidianBlackbox",
        price: 50,
        id: 63,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Hellsau - Vain",
        tag: "HollsauVain",
        price: 25,
        id: 64,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Nasenbluten - Youre Going To Die",
        tag: "NasenblutenYoureGoingToDie",
        price: 17,
        id: 65,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "K3 - Tele Romeo",
        tag: "k3TeleRomeo",
        price: 30,
        id: 66,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "K3 - Alle Kleuren",
        tag: "k3AlleKleuren",
        price: 31,
        id: 67,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "The Martin Garrix Collection",
        tag: "TheMartinGarrixCollection",
        price: 23,
        id: 68,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Avicii - Stories",
        tag: "AviciiStories",
        price: 10,
        id: 69,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Avicii - True",
        tag: "AviciiTrue",
        price: 15,
        id: 70,
        inWinkelmandje: 0,
        pinned: false
    },
    {
        name: "Martin Garrix - Martin Garrix Experience",
        tag: "MartinGarrixMartinGarrixExperience",
        price: 34,
        id: 71,
        inWinkelmandje: 0,
        pinned: false
    }
]

for (let i=0; i < kaarten.length; i++) {
    kaarten[i].addEventListener('click', () => {
        let hoverScherm = document.querySelector('#kp'+i);
        if (!(producten[i].pinned)) {
            hoverScherm.innerHTML += '<ion-icon name="checkmark-outline"></ion-icon>';
            producten[i].pinned = true
        }
        kaartNummers(producten[i]);
        totaleKosten(producten[i]);
        
    })
}

function laadKaartNummers() {
    let productNummers = localStorage.getItem('kaartNummers');

    if (productNummers) {
        document.querySelector('#cart span').textContent = productNummers;

    }
}

function kaartNummers(product) {
    let productNummers = localStorage.getItem('kaartNummers');
    
    productNummers = parseInt(productNummers);

    if (productNummers) {
        localStorage.setItem('kaartNummers', productNummers+1);
        document.querySelector('#cart span').textContent = productNummers+1;
    } else {
        localStorage.setItem('kaartNummers', 1);
        document.querySelector('#cart span').textContent = 1;
    }

    setItems(product);
};

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inWinkelmandje += 1;
    } else {
        product.inWinkelmandje = 1;
        cartItems = {
            [product.tag]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function addItem(id) {
    let cartItems = localStorage.getItem('productsInCart');
    let kaartNummers = parseInt(localStorage.getItem('kaartNummers'))
    let totaleKosten = parseInt(localStorage.getItem('totaleKosten'))
    cartItems = JSON.parse(cartItems);
    
    let ItemList = []

    if (Object.size(cartItems) > 1) {
        for (i=0; i<Object.size(cartItems); i++) {
            ItemList.push(document.getElementsByClassName(String(id)+"toevoegKnop")[i])
        }
    } else {
        ItemList.push(document.getElementsByClassName(String(id)+"toevoegKnop")[0])
    }

    toeTeVoegenItemTag = ItemList[0].id

    price = cartItems[toeTeVoegenItemTag].price

    cartItems[toeTeVoegenItemTag].inWinkelmandje += 1;
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    
    kaartNummers += 1
    localStorage.setItem('kaartNummers', kaartNummers)
    
    totaleKosten += price
    localStorage.setItem('totaleKosten', totaleKosten)

    location.reload();
}

function deleteItem(id) {
    let cartItems = localStorage.getItem('productsInCart');
    let kaartNummers = parseInt(localStorage.getItem('kaartNummers'))
    let totaleKosten = parseInt(localStorage.getItem('totaleKosten'))
    cartItems = JSON.parse(cartItems);
    
    let verwijderItemList = []
    if (Object.size(cartItems) > 1) {
        for (i=0; i<Object.size(cartItems); i++) {
            verwijderItemList.push(document.getElementsByClassName(String(id)+"verwijderKnop")[i])
        }   
    } else {
        verwijderItemList.push(document.getElementsByClassName(String(id)+"verwijderKnop")[0])
    }
    
    teVerwijderenItemTag = verwijderItemList[0].id
    price = cartItems[teVerwijderenItemTag].price
    if (cartItems[teVerwijderenItemTag].inWinkelmandje == 1) {
        Confirm = confirm('Dit is het laatste item \n\nWilt u dit verwijderen?')
        if (Confirm) {
            delete cartItems[teVerwijderenItemTag]
            localStorage.setItem("productsInCart", JSON.stringify(cartItems));
            
            kaartNummers -= 1
            localStorage.setItem('kaartNummers', kaartNummers)

            totaleKosten -= price
            localStorage.setItem('totaleKosten', totaleKosten)
        }
    } else {
        cartItems[teVerwijderenItemTag].inWinkelmandje -= 1;
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        
        kaartNummers -= 1
        localStorage.setItem('kaartNummers', kaartNummers)
        
        totaleKosten -= price
        localStorage.setItem('totaleKosten', totaleKosten)
    }
    
    if (kaartNummers == 0) {
        localStorage.clear()
    } 
    location.reload();
}

function totaleKosten(x) {
    var kaartKosten = localStorage.getItem('totaleKosten');
    
    if (kaartKosten != undefined) {
        kaartKosten = parseInt(kaartKosten);
        localStorage.setItem('totaleKosten', kaartKosten + x.price)
    } else {
        localStorage.setItem('totaleKosten', x.price)
    }  
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}


function laatKaartenZien() {
    let kaartItem = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(kaartItem);
    let productContainer = document.querySelector(".products")
    let kaartKosten = localStorage.getItem('totaleKosten');
    let kaartNummers = localStorage.getItem('kaartNummers')
    
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product-inTotal">
                <div class="product-text">
                    <div class="product-price">€ ${item.price},00</div>
                        <div class="product-quantity">
                            <ion-icon name="caret-back-circle-outline" onClick="deleteItem(${item.id})" id="${item.tag}" class="${item.id}verwijderKnop"></ion-icon>
                            <span>${item.inWinkelmandje}</span>
                            <ion-icon name="caret-forward-circle-outline" onClick="addItem(${item.id})" id="${item.tag}" class="${item.id}toevoegKnop"></ion-icon>
                        </div>
                        <div class="totalPrice">€ ${item.inWinkelmandje * item.price},00</div>
                        <span>${item.name}</span>
                    </div>
                </div>
                    `});
                }
                
            if (kaartNummers) {
                productContainer.innerHTML += `
                    <div class="basketTotalContainer">
                        <div class="basketTotal">
                            € ${kaartKosten},00
                        </div>
                        <h4 class="basketTotalTitle">
                            Basket Total
                        </h4>
                        <div class="verwijderAlles">
                            <h4>Verwijder alles<ion-icon name="trash-outline"></ion-icon> </h4>
                            </div>
                        <form method="POST">
                            <div class="afrekenen">
                                <input type="hidden" id="hiddenValue" name="hiddenValue" value="">
                                <input type="submit" value="Afrekenen" name="afrekenen">
                            </div>
                        </form>
                    </div>
                `
                

                let verwijderAllesKnop = document.querySelector('.verwijderAlles')
                verwijderAllesKnop.addEventListener('click', () => {
                    localStorage.clear()
                    location.reload();
                })

                let afrekenKnop = document.querySelector('.afrekenen')
                afrekenKnop.addEventListener('click', () => {
                    Confirmation = confirm('Afgerekend!')
                    if (Confirmation) {
                        let token = localStorage.getItem('productsInCart')
                        document.getElementById("hiddenValue").value = token
                        localStorage.clear()
                        redirectTo()
                    }
                })
            } else {
                productContainer.innerHTML += `
                    <div onClick="redirectTo()" class="basketTotalContainer">
                        <h4 class="geenProducten">Je hebt nog geen producten!</h4>
                    </div>
                `
            }
}

function redirectTo() {
    window.location.href = "../index_home.html"
}


if (window.localStorage.length != 0) {
    listOfIdsInStorage = []
    producteninWinkelmandje = JSON.parse(localStorage.getItem('productsInCart'))
        
    for (const [key, value] of Object.entries(producteninWinkelmandje)) {
        let hoverScherm = document.querySelector('#kp'+ value['id']);
        if (hoverScherm) {
            hoverScherm.innerHTML += '<ion-icon name="checkmark-outline"></ion-icon>';
        }
        producten[value['id']].pinned = true
    }

}

let productContainer = document.querySelector(".products")
if (productContainer) {
    laatKaartenZien();
}
laadKaartNummers();