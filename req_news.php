<?php
        try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=electrophile', 'root', '');
		}
		catch (Exception $e)
		{
			die('Erreur : ' . $e->getMessage());
		}
		$reponse = $bdd->query('SELECT * FROM news ORDER BY date DESC LIMIT 0, 3');
while ($donnees = $reponse->fetch())
		{
        
        echo "<p>".$donnees['nom']."</p>";
        }
?>