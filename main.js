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

function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  (function($)
 {
   var settings;
     $.fn.tx3TagCloud = function(options)
     {
 
       //
       // DEFAULT SETTINGS
       //
       settings = $.extend({
         multiplier		: 1
       }, options);
       main(this);
 
     }
 
     function main(element)
     {
       // adding style attr
       element.addClass("tx3-tag-cloud");
       addListElementFontSize(element);
     }
 
     /**
      * calculates the font size on each li element 
      * according to their data-weight attribut
      */
     function addListElementFontSize(element)
     {
       var hDataWeight = -9007199254740992;
       var lDataWeight = 9007199254740992;
       $.each(element.find("li"), function(){
         cDataWeight = getDataWeight(this);
         if (cDataWeight == undefined)
         {
           logWarning("No \"data-weight\" attribut defined on <li> element");
         }
         else
         {
           hDataWeight = cDataWeight > hDataWeight ? cDataWeight : hDataWeight;
           lDataWeight = cDataWeight < lDataWeight ? cDataWeight : lDataWeight;
         }
       });
       $.each(element.find("li"), function(){
         var dataWeight = getDataWeight(this);
         var percent = Math.abs((dataWeight - lDataWeight)/(lDataWeight - hDataWeight));
         $(this).css('font-size', (1 + (percent * settings['multiplier'])) + "em");
       });
 
     }
 
     function getDataWeight(element)
     {
       return parseInt($(element).attr("data-weight"));
     }
 
     function logWarning(message)
     {
       console.log("[WARNING] " + Date.now() + " : " + message);
     }
 
 }(jQuery));
  $(document).ready(function(){
     $("#tagcloud").tx3TagCloud({
         multiplier: 5
     });
 });

 function setaDadosModal(id) {
    document.getElementById('title').innerHTML = modais.tips[id].title;
    document.getElementById('text').innerHTML = modais.tips[id].text;	
    document.getElementById('image').src += modais.tips[id].image;	
}
function resetImageModalPath(){
  document.getElementById('image').src = "./Imagens/Modal/";	
}