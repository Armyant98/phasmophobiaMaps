document.querySelector('#willowStreetHouse').addEventListener('click', getWillowMap)
document.querySelector('#prison').addEventListener('click', getPrisonMap)
document.querySelector('#tanglewood').addEventListener('click', getTanglewoodMap)
document.querySelector('#brownstoneHighSchool').addEventListener('click', getHighschoolMap)
document.querySelector('#asylum').addEventListener('click', getAsylumMap)
document.querySelector('#ridgeviewRoadHouse').addEventListener('click', getRidgeviewMap)
document.querySelector('#graftonFarmhouse').addEventListener('click', getGraftonMap)
document.querySelector('#bleasdaleFarmhouse').addEventListener('click', getBleasdaleMap)
document.querySelector('#edgefieldStreetHouse').addEventListener('click', getEdgefieldMap)
document.querySelector('#sunnyMeadows').addEventListener('click', getSunnyMeadowsMap)
document.querySelector("#campWoodwind").addEventListener('click', getWoodwindMap)



let mapImage = document.querySelector('img')

function getWillowMap() {
    mapImage.src="./willowStreetHouse.jpg"   
}


function getPrisonMap() {
    mapImage.src="./Prison.jpg"
}


function getTanglewoodMap() {
    mapImage.src="./Tanglewood.jpg"
}

function getHighschoolMap() {
    mapImage.src="./brownstoneHighSchool.jpg"
}

function getAsylumMap() {
    mapImage.src="./Asylum.jpg"
}

function getRidgeviewMap() {
    mapImage.src="./RiggeviewRoadHouse.jpg"
}

function getGraftonMap() {
    mapImage.src="./GraftonFarmhouse.jpg"
}

function getBleasdaleMap() {
    mapImage.src="./bleasdaleFarmhouse.jpg"
}

function getEdgefieldMap() {
    mapImage.src="./EdgefieldStreethouse.jpg"
}

function getSunnyMeadowsMap() {
    mapImage.src="./sunnyMeadows.png"
}

function getWoodwindMap() {
    mapImage.src="./campWoodwind.webp"
}

document.querySelector('#mapselect').addEventListener('change', mapselect)


function mapselect () {

    let mapSelected = document.querySelector('#mapselect').value
    
    if (mapSelected == 'willowStreetHouse'){
        mapImage.src="./willowStreetHouse.jpg"
    }

    else if (mapSelected == "prison" ){
        mapImage.src="./Prison.jpg"
    }

    else if (mapSelected == 'tanglewood'){
        mapImage.src="./Tanglewood.jpg"
    }

    else if (mapSelected == 'brownstoneHighSchool'){
        mapImage.src="./brownstoneHighSchool.jpg"
    }
    
    else if (mapSelected == 'asylum'){
        mapImage.src="./Asylum.jpg"
    }

    else if (mapSelected == 'ridgeviewRoadHouse'){
        mapImage.src="./RiggeviewRoadHouse.jpg"
    }

    else if (mapSelected == 'graftonFarmhouse'){
        mapImage.src="./GraftonFarmhouse.jpg"
    }

    else if (mapSelected == 'bleasdaleFarmhouse'){
        mapImage.src="./bleasdaleFarmhouse.jpg"
    }

    else if (mapSelected == 'edgefieldStreetHouse'){
        mapImage.src="./EdgefieldStreethouse.jpg"
    }

    else if (mapSelected == 'sunnyMeadows'){
        mapImage.src="./sunnyMeadows.png"
    }

    else if (mapSelected == 'campWoodwind'){
        mapImage.src="./campWoodwind.webp"
    }
}