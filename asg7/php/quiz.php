<html lang="en">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet">

    <head>
        <title>Quiz Results</title>
    </head>

    <body>
        <div class="header">
            <h1>Quiz Results</h1>
        </div>

        <div id="asg7-result">
            <?php
                $answers = array('Loudness', 'Complex', 'Solids', 'Transducer');
                $input = array($_POST['q1'], $_POST['q2'], $_POST['q3'], $_POST['q4']);
                $score = 0;

                for ($i = 0; $i < 4; $i++) {
                    $num = $i + 1;
                    print("<h2>Question $num</h2>");
                    $in = $input[$i];
                    print("<p>Your answer: $in</p>");
                    $out = $answers[$i];
                    if ($out != $in) {
                        print("<h3>Correct answer: $out</h3>");
                        print("<h3>0 / 1</h3>");
                    }
                    else {
                        print("<h4>1 / 1</h4>");
                        $score++;
                    }
                    print("<br>");
                }
                $percent = ($score / 4) * 100;
                print("<h2>Score: $percent%</h2>");
                print("<h2>Good job!</h2>");
            ?>
        </div>
    </body>
</html>