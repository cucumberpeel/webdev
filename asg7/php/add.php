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
        <title>Calculator Result</title>
    </head>

    <body>
        <div class="header">
            <h1>Your Result</h1>
        </div>

        <div id="asg7-result">
            <?php
                $num1 = floatval($_GET['num1']);
                $num2 = floatval($_GET['num2']);
                $op = $_GET['operator'];
                $result = 0;
                if ($op == '+') { $result = $num1 + $num2; }
                elseif ($op == '-') { $result = $num1 - $num2; }
                elseif ($op == '*') { $result = $num1 * $num2; }
                elseif ($op = '/') { $result = $num1 / $num2; }

                print("<h2>$num1 $op $num2 = $result</h2>");
            ?>
        </div>
    </body>

    <footer>
        <p>&copy; 2022 by Amory Gao.</p>
    </footer>
</html>