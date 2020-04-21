<?php
// Perform a SQL Query
// That incorporates a left outer join
// and returns JSON

// Allow for cross-domain request
header("Access-Control-Allow-Origin: *");

// PHP helper-DB connect
include $_SERVER['DOCUMENT_ROOT'] . '/includes/db.inc.php';

try
{// LEFT JOIN QUERY for all rows in the author table to appear
	$sql = 'SELECT author.name, joke.id AS jokeid, joketext FROM author LEFT JOIN joke on authorid = author.id ORDER BY name';
	$result = $pdo->query($sql);
}
catch (PDOException $e)
{
	$error = 'Error fetching list of authors: ' . $e->getMessage();
	echo $error;
	exit();
}

while ($row = $result->fetch(PDO::FETCH_ASSOC))
{
	$data[] = $row;
}

// Return JSON encoded
echo json_encode($data);

?>