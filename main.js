var imgs = ["https://i.pinimg.com/originals/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg","https://image.shutterstock.com/image-vector/cartoon-father-son-playing-together-260nw-537585493.jpg","https://i.pinimg.com/originals/51/0d/6c/510d6c25e8c820ab1391a8f656e19298.jpg","https://thumbs.dreamstime.com/b/cartoon-grandparents-old-couple-senior-isolated-vector-194488189.jpg"];
var name = ["mother","father","son","grandparents"];
 var i = 0 ;
function update()
{
  i++;
  var number_of_family_mebers=4;
 if(i>4)
   {
     i=0;
   }
  var next=imgs[i];
  var next1 = name[i];
  document.getElementById("familY_imgs").src=next;
  document.getElementById("family_members").src=next1;
}