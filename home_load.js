
var cardtbl = [
  "63bacc32-d6ba-420c-9b49-299c08e5fb39", //eye dia
  "e4a2d2c6-8eaa-4760-b620-921b807baa2e", //feather
  "d0825bcd-8cf8-498a-a61e-406f136e1f3f", //ghired
  "3bd81ae6-e628-447a-a36b-597e63ede295", //yuriko
  "ff5987ab-570a-426c-ae4a-a270fac6b346", //macar
  "3184b138-1109-4195-9d96-4f190164e98b", //xena
  "213d6fb8-5624-4804-b263-51f339482754", //lord wind
  "176596fd-fc6d-46ae-a64d-d9147430fe0f", //purp
  "a33add37-379d-4a90-9c04-529dff676986", //syr gwyn
  //future_decks below
  "5f03c944-1929-4cb2-a373-d57eefa29ed1", //rielle
  "3afa434f-3080-496f-a53a-4439f80e9f8c", //vorel

];

var cardimg = document.querySelectorAll(".img_card");
var regcardprice = document.querySelectorAll(".price_reg");
var foilcardprice = document.querySelectorAll(".price_foil");
for (i=0; i < cardtbl.length; i++)
{
  getdata(cardtbl[i], cardimg[i], regcardprice[i], foilcardprice[i]);
}

function getdata(cardid, imgele, regtxt, foiltxt){
  var requestURL = "https://api.scryfall.com/cards/" + cardid;
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();

  request.onload = function() 
  {
    var data = request.response;

    //Set image
    imgele.src = data["image_uris"]["normal"]

    //Check prices before setting them
    if (parseFloat(data["prices"]["usd"]) > 0)
    {
      regtxt.textContent += ("$" + data["prices"]["usd"]);
    } else
    {
      regtxt.textContent += ("$0.00");
    }

    if (parseFloat(data["prices"]["usd_foil"]) > 0)
    {
      foiltxt.textContent += ("$" + data["prices"]["usd_foil"]); 
    }else
    {
      foiltxt.textContent += ("$0.00");
    }



  } //End onload
 
}//End getdata
