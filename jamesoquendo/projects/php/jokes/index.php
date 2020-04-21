<?php
include_once $_SERVER['DOCUMENT_ROOT'] . '/includes/magicquotes.inc.php';

// Display form to add joke if addjoke parameter is present in URL
if(isset($_GET['addjoke'])) 
{
	include 'form.html.php';
	exit();
}

// Insert joke text and date into joke table
if (isset($_POST['joketext']))
{
	include $_SERVER['DOCUMENT_ROOT'] . '/includes/db.inc.php';

	try
	{
		$sql = 'INSERT into joke SET
			joketext = :joketext,
			jokedate = CURDATE()';
		$s = $pdo->prepare($sql);
		$s->bindValue(':joketext', $_POST['joketext']);
		$s->execute();
	}
	catch (PDOException $e)
	{
		$error = 'Error adding submitted joke: ' . $e->getMessage();
		include 'error.html.php';
		exit();
	}

	header('Location: .');
	exit();
}

// Delete a joke from the joke database
if (isset($_GET['deletejoke']))
{
	include $_SERVER['DOCUMENT_ROOT'] . '/includes/db.inc.php';

	try
	{
		$sql = 'DELETE FROM joke WHERE id = :id';
		$s = $pdo->prepare($sql);
		$s->bindValue(':id', $_POST['id']);
		$s->execute();
	}
	catch (PDOException $e)
	{
		$error = 'Error deleting joke from database: ' . $e->getMessage();
		include 'error.html.php';
		exit();
	}

	header('Location: .');
	exit();
}

include $_SERVER['DOCUMENT_ROOT'] . '/includes/db.inc.php';

// Request all jokes from the database
try
{
	$sql = 'SELECT joke.id, joketext, name, email, website FROM joke INNER JOIN author ON authorid = author.id';
	$result = $pdo->query($sql);
}
catch (PDOException $e)
{
	$error = 'Error fetching jokes: ' . $e->getMessage();
	include 'error.html.php';
	exit();
}

// while $result returns a value on fetch(). If no more values, fetch() returns false.
// while ($row = $result->fetch())
// other method--$result knows to act as an array in a 'foreach' statement even though $result is a PDOStatement list(?)
foreach ($result as $row)
{
	// store database results into an array
	
	// store the joke text as a single item in jokes[]
	//$jokes[] = $row['joketext']; 

	// store both, id and text as an array in jokes[]
	$jokes[] = array(
		'id' => $row['id'],
		'text' => $row['joketext'],
		'name' => $row['name'],
		'email' => $row['email'],
		'website' => $row['website']
	); 
}

include 'jokes.html.php';