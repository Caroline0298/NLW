// create map
const map = L.map('mapid').setView([-15.8023004,-47.8864603], 13);
// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    
});
let marker;

//create and add maker
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icon 
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
});

//adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container =  document.querySelector('#images');
    //pegar o conatiner para duplicar.new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //realizar o clone da  ultima imagem adicinada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //verificar se o campo está vazio, se sim , não adicionar imagens ao conatainer
    const input = newFieldContainer.children[0]
    if(input.value ==""){
        return
    }
    //limpar o campo antes de adicionar ao conatiner de imagens
    input.value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//selecionar  do sim e não
function toggleSelect(event){
    //get th button clicacado
    document.querySelectorAll(".button-select button")
    .forEach(function(button){
        button.classList.remove('active')
    })
    //retirar a class.active nesse botaço clicado
    const button = event.currentTarget
    button.classList.add('active')
    //atualiza meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    input.value = button.dataset.value
    //verificar se  sim ou não    
    }
    //colocar a class . active (dos botoes)
    function validate(event) {

        const lat = document.querySelector('[name = lat]').value;
        const lng = document.querySelector('[name = lng]').value;
        if(lat == "" && lng == "") {
            event.preventDefault();
            alert("Favor escolher uma localização no mapa");
        }    
        
        // salvar um orfanato
        
        }