<?php
/* Admixt Interview Assignment-Task 1
 * Write a PHP script that loops over an array and inserts 1,000,000 rows into a database.
 */

// Increase memory limit
ini_set('memory_limit', '256M');

// Build an array with one million entries
$count = 1;

while ($count <= 1000000)
{
	$array[] = $count;
	$count++;
}

// Insert array of numbers into table named data
if (isset($array)) {

	// Helper file to connect to DB
	include $_SERVER['HOME'] . '/jamesoquendo.com/includes/db.admixt.inc.php';

	try
	{
		// Remove previous rows in table data
		$sql = 'TRUNCATE data';
		$pdo->exec($sql);
	}
	catch (PDOException $e)
	{
		$error = 'Error truncating table data: ' . $e->getMessage();
		echo $error;
		exit();
	}

	try
	{
		// Microtime start to measure the time it takes to complete the SQL query
		$start = microtime(true);

		// Prepare SQL statement
		$sql = 'INSERT INTO data SET numbers = :numbers';
		$s = $pdo->prepare($sql);

		// For each numbers in array execute query
		foreach($array as $numbers) {
			$s->bindValue(':numbers', $numbers);
			$s->execute();
		}

		// Microtime time elapsed shows total time to complete the SQL query
		$time_elapsed = microtime(true) - $start;
		$output .= 'Time elapsed for inserting 1,000,000 entries into the data table: ' . $time_elapsed;
	}
	catch (PDOException $e)
	{
		$error = 'Error inserting numbers to table data: ' . $e->getMessage();
		echo $error;
		exit();
	}

	echo $output;
}

?>