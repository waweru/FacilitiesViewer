// JavaScript Document

$(function () {
    $("#basemapBtn").click(
        function () {
            $("#baseGalleryPane").toggle();
            $("#measurePane").hide();
        }
    )
});

$(function () {
    $("#measureToolsBtn").click(
        function () {
            $("#measurePane").toggle();
            $("#baseGalleryPane").hide();
        }
    )
    });

//Tool bar click functions
//functions to activate/toggle visibility when clicked
$(function(){
    $("#navToolsBtn").click(
		function(){
		    if ($('#navigationTools').css('visibility') == 'hidden') {
		        $('#navigationTools').css('visibility', 'visible');						
			}
			else
			{
			    $('#navigationTools').css('visibility', 'hidden');				
			}	
		});
});

