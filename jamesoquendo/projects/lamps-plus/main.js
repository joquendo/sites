$(function() {
	var $ul = $('#grocery-list');
	$('button').click( function sortOrder() {
		$('li', $ul).sort( function() {
			return (Math.round( Math.random() ) - 0.5 )
		}).appendTo($ul);
	})
});