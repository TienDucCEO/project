$(document).ready(function(){
	$.post('external/style.php', {z: 'get_style'}, function(rs){
		$('#server_url').html(rs);
	});
});