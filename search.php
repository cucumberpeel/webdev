<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />

        <title>Search Results</title>
    </head>

    <body>
        <?php
            $query = $_GET["query"];
            $file = fopen("products.txt", "r");
            $flag = FALSE;

            while(!(feof($file))) {
                $line = fgets($file);
                $line = rtrim($line);
                $info = explode(":", $line);

                if ((strtolower($query)) == (strtolower($info[0]))) {
                    $flag = TRUE;
                    break;
                }
            }

            if($flag) {
                print("<h2>Product Information</h2>");
                foreach ($info as $value) {
                    print("<li>$value</li>");
                }
            }
            else {
                print("No products found. Try again.");
            }
        ?>
    </body>

    <footer>

    </footer>
</html>