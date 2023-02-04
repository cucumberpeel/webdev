<html lang="en">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        <?php include "main.css" ?>
    </style>
    <link rel="stylesheet" type="text/css" href="main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">
    
    <head>
        <title>Your MadLib</title>
    </head>

    <body>
        <div class="header">
            <h1>Your MadLib</h1>
        </div>
        <div id="asg7-result">
            <?php
                $noun1 = $_POST['noun1'];
                $adj1 = $_POST['adj1'];
                $num1 = $_POST['num1'];
                $noun2 = $_POST['noun2'];
                $verb1 = $_POST['verb1'];
                $adj2 = $_POST['adj2'];
                $noun3 = $_POST['noun3'];
                $verb2 = $_POST['verb2'];

                print("Once upon a time, there was a $noun1 that was very $adj1. At just $num1 years old, the $noun1 had $verb1 
                in the City of $noun2. That is, until one day, $adj2 $noun3 moved into the City of $noun2 and $verb2, changing 
                everything...");
            ?>
        </div>
    </body>

    <footer>
        <p>&copy; 2022 by Amory Gao.</p>
    </footer>
</html>

