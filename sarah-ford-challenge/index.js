$(document).ready(function() {

//object that holds the different form pages html elements in string format
const pageHTML = {

  page1LeftCol: `<p>LAST NAME</p>
    <input type='text' name='last name' placeholder='Doe'>
    <p>EMAIL ADDRESS</p>
    <input type="email" name="email" placeholder="name@gmail.com">`,

  page1RightCol: `<p id>FIRST NAME</p>
    <input type='text' name='first name' placeholder='John'>
    <p>ZIP CODE</p>
    <input id='zip' type='number' name='zip code' placeholder='12345'>
    <a id="next-btn-1" class="form-btn form-btn-next" title="Next" href="#">Next</a>`,

  page2LeftCol: `<p>CITY</p>
    <input id='city' type='text' name='first name' placeholder='Chicago' value=''>
    <p>STATE</p>
    <input type='text' id='state' name='state' placeholder='Illinois' value=''>
    <a id='back-btn-2' class='form-btn form-btn-back' title='Back' href='#'>Back</a>`,

  page2RightCol: `<p>BIRTHDATE</p>
    <input type='date' name='birthdate'>
    <p>PHONE</p>
    <input type='number' name='phone'>
    <a id='next-btn-2' class='form-btn form-btn-next' title='Next' href='#'>Next</a>`,

  page3LeftCol: `<p>PAY DATE 1</p>
    <input type='date' name='pay date 1'>
    <p>EMPLOYER NAME</p>
    <input type='text' name='employer name'>
    <a id='back-btn-3' class='form-btn form-btn-back' title='Back' href='#'>Back</a>`,

  page3RightCol: `<p>PAY DATE 2</p>
      <input type='date' name='pay date 2'>
      <p>EMPLOYMENT TYPE</p>
      <input type='text' name='employment type'>
    <a id='next-btn-3' class='form-btn form-btn-next' title='Next' href='#'>Submit</a>`
 }

 // FORM FUNCTIONALITY - function to get city and state from api call, populate the data
 // in next form and render that next form as well
 function getCityAndState() {
   let zip = $("#zip").val();
   if (zip) {
     $.ajax({
       method: 'GET',
       url: "http://ZiptasticAPI.com/"+zip,
       datatype: "json",
       success: function(data) {
         let parsedData = JSON.parse(data);
         $(".form-column").empty();
         $(".column-left").append(pageHTML.page2LeftCol);
         $(".column-right").append(pageHTML.page2RightCol);
         document.getElementById("city").value = parsedData.city;
         document.getElementById("state").value = parsedData.state;
       }
      });
      } else {
        $(".form-column").empty();
        $(".column-left").append(pageHTML.page2LeftCol);
        $(".column-right").append(pageHTML.page2RightCol);
      }
   }

  //page 1 button (next)
  $("#next-btn-1").click(function() {
    getCityAndState();
  });

  // page 1 button (next) for navigating from page 2
  $(".column-right").on('click', '#next-btn-1', function() {
    getCityAndState();
  });

  //page 2 buttons
  $(".column-left").on('click', '#back-btn-2', function() {
    $(".form-column").empty();
    $(".column-left").append(pageHTML.page1LeftCol);
    $(".column-right").append(pageHTML.page1RightCol);
  });

  $(".column-right").on('click', '#next-btn-2', function() {
    $(".form-column").empty();
    $(".column-left").append(pageHTML.page3LeftCol);
    $(".column-right").append(pageHTML.page3RightCol);
  });

  //page 3 button (back)
  $(".column-left").on('click', '#back-btn-3', function() {
    $(".form-column").empty();
    $(".column-left").append(pageHTML.page2LeftCol);
    $(".column-right").append(pageHTML.page2RightCol);
  });

  // NAVIGATION BAR FUNCTIONALITY - responsive
  $("#menu-icon").click(function() {
    console.log($("nav").height())
    if ($("nav").height() == 10){
      $("nav").removeClass("hide").addClass("show");
    } else {
      $("nav").removeClass("show").addClass("hide");
    }
  });

});
