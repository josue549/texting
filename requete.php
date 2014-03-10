<?php
        try
		{
			$bdd = new PDO('mysql:host=localhost;dbname=texting', 'root', '');
		}
		catch (Exception $e)
		{
			die('Erreur : ' . $e->getMessage());
		}
if(isset($_GET['nom']) && !empty($_GET['nom'])) //Si le titre existe et pas vide
		{
			$req = $bdd->prepare('INSERT INTO clients(nom, prenom, age) VALUES(:nom, :prenom, :age)');
			$req->execute(array(
			'nom' => $_GET['nom'],
			'prenom' => $_GET['prenom'],
            'age' => $_GET['age']
			));?>
        <script>alert('coucou toi');</script>
            <?php
		}
        
        
?>