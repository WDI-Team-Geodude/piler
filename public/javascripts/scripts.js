window.onload = function(){

	//When you click a#file, "File a Report" sidebar apppears
	$('a#file').click(function(){
		$('div.sidebar').children().remove()
		var template = _.template( $("#file_report_template").html() );
		$('div.sidebar').append(template);
	});

	//When you click a#profile, "User Profile" sidebar apppears
	$('a#profile').click(function(){
		$('div.sidebar').children().remove()
    var form = document.createElement('form'); 
    var input = document.createElement('input');
    var h3 = document.createElement('h3');
    var button = document.createElement('button');
    $(form).attr('action', 'users/:id');
    $(form).attr('method', 'GET')
    $(h3).text('Put Username');
    $(button).text('Edit');
    $(input).attr('name', 'name');
    $(input).attr('type', 'text');
    $(form).append(h3);
    $(form).append(input);
    $(form).append(button);
    $('div.sidebar').append(form);
    $('button').click(function(e){
      $.ajax({url:"/users/:id", success: function(e){
        debugger
      }});
    });
		// var template = _.template( $("#user_profile_template").html() );
		// $('div.sidebar').append(template);
	})
};

function whichNeighborhood(){
  //this is where they pick the neighborhood
  $.get("/neighborhoods", function(neighborhood){
    neighborhoods = _.sortBy(neighborhood, function(neighborhoodObject) {return neighborhoodObject.name})
    var innards = "<select name ='neighborhood' class='neighborhood'>"
    for (var i = 0; i < neighborhoods.length; i ++){
      innards += "<option value="+ neighborhoods[i].id+">" + neighborhoods[i].name + "</option>"
      }
    innards += "</select>"+"<button id='enter'>ENTER</button>"
    $(".sidebar").html(innards)
    $("#enter").click(function(event){
      neighborhood_id = $("[name='neighborhood']").val()
    RSS(neighborhood_id)
  })
  })
  

}

