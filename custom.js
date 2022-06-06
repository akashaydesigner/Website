function colorchange1()
{
document.getElementById('poloshirt').src='img/white-polo-shirt.png'
}

function colorchange2()
{
document.getElementById('poloshirt').src='img/red-polo-shirt.png'
}

function colorchange3()
{
document.getElementById('poloshirt').src='img/black-polo-shirt.png'
}

function colorchange4()
{
document.getElementById('poloshirt').src='img/blue-polo-shirt.png'
}

function colorchange5()
{
document.getElementById('poloshirt').src='img/gray-polo-shirt.png'
}

function colorchange6()
{
document.getElementById('poloshirt').src='img/sky-polo-shirt.png'
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


function sidenavopener()
{
    var a = document.getElementById("col-sidenav");
        if (a.style.display ==="block") {
            a.style.display = "none";
        } else{
            a.style.display ="block"
        }
        
        var Image_Id = document.getElementById("iconChange");
        if (Image_Id.src.match("img/menu-icon.svg")) {
            Image_Id.src = "img/back-icon.svg";
        }
        else {
            Image_Id.src = "img/menu-icon.svg";
        }

    

    }
    

//     // window.addEventListener('mouseup',function(event){
//     //     var b = document.getElementById('col-sidenav');
//     //     if(event.target != b && event.target.parentNode != b){
//     //         b.style.display = 'none';
//     //     }
//   });

    
