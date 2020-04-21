<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Add Joke</title>
	<style>
		textarea {
			display:block;
			width: 100%;
		}
	</style>
</head>
<body>
	<form action="?" method="POST">
		<div>
			<label for="joketext">Type your joke here:</label>
			<textarea id="joketext" name="joketext" rows="3" columns="40"></textarea>
			<input type="submit" value="Add">
		</div>
	</form>
</body>
</html>