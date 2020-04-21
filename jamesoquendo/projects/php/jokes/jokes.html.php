<?php include_once $_SERVER['DOCUMENT_ROOT'] . '/includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
  	<meta charset="utf-8">
  	<title>Jokes</title>
	<style>
	  blockquote { margin: 0px; float: left; margin-right: .5em; }
	  input[type="submit"] { margin: 1.5em auto; }
	  form:after { content: ""; clear:both; display:block;}
	</style>
  </head>
  <body>
	<p><a href="?addjoke">Add your own joke</a></p>
	<p>Here are all the jokes inside the database:</p>
	<?php foreach ($jokes as $joke): ?>
	  <form action="?deletejoke" method="post">
	  	<blockquote>
	  	  <p><?php htmlout($joke['text']); ?></p>
	  	  - <cite>
		  	  <?php if (isset($joke['email'])):
		  	      echo '<a href="mailto:' . html($joke['email']) . '">' . html($joke['name']) . '</a>';
		  	    elseif (isset($joke['website'])):
		  	  	  echo '<a href="' . html($joke['website']) . '" target="joke-source">' . html($joke['name']) . '</a>';
		  	    else:
				  htmlout($joke['name']);
			    endif;
			  ?>
		  </cite>
		</blockquote>
		<input type="hidden" name="id" value="<?php echo $joke['id'] ?>">
		<input type="submit" value="Delete">
	  </form>
	<?php endforeach; ?>
  </body>
</html>