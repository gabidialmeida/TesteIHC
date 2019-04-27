
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

 $('.jqcloud-word').on("hover",function(){
   $('.img_bg').addClass("img2");
   $('.img_bg.img2').removeClass("img_bg");
 });

 function setaDadosModal(valor) {
	var modais = {
   tips: [
   {
  "title": "Exames de Rotina",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat, ligula ac pellentesque faucibus, risus lorem eleifend turpis, id egestas massa tortor at urna. Vivamus at sodales elit. Donec vestibulum ex nulla, a hendrerit erat elementum sit amet. Sed ac cursus nisi, nec porttitor diam. Nullam malesuada rhoncus sapien quis gravida. Sed eget massa suscipit, varius turpis nec, efficitur metus. Morbi aliquet venenatis nibh, non varius risus sodales et. Aenean eget felis tincidunt dui condimentum aliquam. Vivamus ultricies rutrum dolor, in viverra nisi ultricies hendrerit. Aenean fringilla porta dolor at fermentum. Fusce fermentum nibh a mauris sollicitudin egestas. Donec sed sapien mattis risus porta imperdiet. Nullam rhoncus magna eget nibh gravida, suscipit cursus dui volutpat. Aenean pretium augue interdum libero malesuada egestas. Nulla facilisi. Pellentesque facilisis tristique lectus vel ornare. Vestibulum vel urna lectus. Cras id viverra nisl. Curabitur vel tristique metus, non blandit mauris. Proin viverra vehicula turpis, at malesuada sapien pretium nec. Nam in tortor ac dolor feugiat porttitor. In consequat mollis nulla porttitor tempor. Duis vel turpis turpis. Mauris vitae sagittis erat. Nam auctor nulla vitae imperdiet commodo. Suspendisse vulputate ex sit amet quam dignissim, nec vulputate tellus accumsan. Ut id sapien placerat, interdum risus a, scelerisque.",
  "image": "gravidez.jpg"
},
{
  "title": "Infertilidade",
  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat, ligula ac pellentesque faucibus, risus lorem eleifend turpis, id egestas massa tortor at urna. Vivamus at sodales elit. Donec vestibulum ex nulla, a hendrerit erat elementum sit amet. Sed ac cursus nisi, nec porttitor diam. Nullam malesuada rhoncus sapien quis gravida. Sed eget massa suscipit, varius turpis nec, efficitur metus. Morbi aliquet venenatis nibh, non varius risus sodales et. Aenean eget felis tincidunt dui condimentum aliquam. Vivamus ultricies rutrum dolor, in viverra nisi ultricies hendrerit. Aenean fringilla porta dolor at fermentum. Fusce fermentum nibh a mauris sollicitudin egestas. Donec sed sapien mattis risus porta imperdiet. Nullam rhoncus magna eget nibh gravida, suscipit cursus dui volutpat. Aenean pretium augue interdum libero malesuada egestas. Nulla facilisi. Pellentesque facilisis tristique lectus vel ornare. Vestibulum vel urna lectus. Cras id viverra nisl. Curabitur vel tristique metus, non blandit mauris. Proin viverra vehicula turpis, at malesuada sapien pretium nec. Nam in tortor ac dolor feugiat porttitor. In consequat mollis nulla porttitor tempor. Duis vel turpis turpis. Mauris vitae sagittis erat. Nam auctor nulla vitae imperdiet commodo. Suspendisse vulputate ex sit amet quam dignissim, nec vulputate tellus accumsan. Ut id sapien placerat, interdum risus a, scelerisque.",
  "image": "infertilidade-feminina.jpg"
},
   {
  "title": "Doenças Femininas",
  "text": "Want people to use your product? Use it yourself",
  "image": "gravidez.jpg"
},
{
  "title": "Infertilidade",
  "text": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
  "image": "gravidez.jpg"
},
   {
  "title": "Exames de Rotina",
  "text": "Want people to use your product? Use it yourself",
  "image": "gravidez.jpg"
},
{
  "title": "Infertilidade",
  "text": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
  "image": "gravidez.jpg"
},
   {
  "title": "Exames de Rotina",
  "text": "Want people to use your product? Use it yourself",
  "image": "gravidez.jpg"
},
{
  "title": "Infertilidade",
  "text": "Font Size Idea: px at Root, rem for Components, em for Text Elements",
  "image": "gravidez.jpg"
}
]};

    document.getElementById('title').innerHTML = modais.tips[valor].title;
    document.getElementById('text').innerHTML = modais.tips[valor].text;	
    document.getElementById('image').src += modais.tips[valor].image;	
}