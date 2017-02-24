<?PHP
   $adresat = 'martos19993@gmail.com';    // pod ten adres zostanie wysłana wiadomosc 
   $imie = $_POST['imie'];
   $email = $_POST['email']; // Tutaj być powinno 
   $content = $_POST['content']; // Tutaj być powinno 
   	      echo 'przed ifem9!'; 
    if (mail($adresat, 'Moja Strona Portfolio', 'email: ' . $email . 'imię: ' . $imie . 'zawartość: \n' . $content)) {
    	 echo 'Wysłano !!!'; 
     	 header('location: http://mjportfolio.wex.pl'); 
     	 exit;
    }

	else{
	  echo 'nie udało się :('; 
	  echo '<a href="mjportfolio.wex.pl/#contact">Wróć</a>';
	}
?>