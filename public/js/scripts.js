/*Accordion Display */

    let acc = document.getElementById("accordion");

    acc.addEventListener("click", function() {
          let box = this.nextElementSibling;
          if (box.style.display === "block") {
              box.style.display = "none";
        }
          else {
              box.style.display = "block";
          }
    });



/* Input Focus */

  const input = document.getElementsByTagName("input");
  let i;
  for (i=0; i<input.length; i++)
  {

    input[i].addEventListener("focus", function(){
      let el = (this).getAttribute('type');

      if (el === 'text')
      {
          (this).style.border = "2px solid #33a00f";
          (this).insertAdjacentHTML('afterend', '<span id="desc">This is the most important form of your life. Fill it with love!<span><br><br>');
      }
    });

    input[i].addEventListener("blur", function(){
          let el = (this).getAttribute('type');
          let desc = document.getElementById('desc');
          if (el === 'text')
          {
            (this).style.border = "2px solid #d2d1d1";
          desc.remove();
          }
    });

  }



/* Table row hover */


  const tr = document.getElementsByTagName("tr");
  let ind;
  let val;

    for(ind=0; ind < tr.length; ind++)
    {
        tr[ind].addEventListener("mouseover", function(){
            val = (this).style.backgroundColor;
          (this).style.backgroundColor = "#c5dfbc";
        });

        tr[ind].addEventListener("mouseout", function(){
          (this).style.backgroundColor = val;
        });
    }



/* Form Submit */


  const fm = document.getElementById("fm");

      fm.addEventListener("submit",function (evt){

        evt.preventDefault();
        let tb = document.getElementById('tb');

        let name = fm.elements['name'].value;
        let email = fm.elements['email'].value;
        let city = fm.elements['city'].value;

        var checkboxes = fm.elements['days'];
        var values = [];
        Array.prototype.forEach.call(checkboxes, function(el) {
            if(el.checked)
            {
            values.push(el.value);
            }
        });

        var radio = fm.elements['group'];
        var cradio;

           for(var i = 0; i < radio.length; i++)
           {
              if(radio[i].checked)
              {
                 cradio = radio[i].value;
              }
           }

       var currentdate = new Date();
       var time = currentdate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
          var datetime = currentdate.getDate() + "/"
             + (currentdate.getMonth()+1)  + "/"
             + currentdate.getFullYear() + " "+ time;

          tb.insertAdjacentHTML('beforeend', '<tr class="hv"><td>'+name+'</td>'+'<td>'+email+'</td>'+'<td>'+city+'</td>'+'<td>'+cradio+'</td>'+'<td>'+values+'</td>'+'<td>'+datetime+'</td></tr>');

      });
