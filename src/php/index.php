<?php
header('Access-Control-Allow-Origin: *');
echo $_SERVER['REMOTE_ADDR'];
// echo 'HW';
date_default_timezone_set('Europe/Moscow');

function check_coords($x, $y, $r) {
    $dot_in_circle = false;
    $dot_in_rectangle = false;
    $dot_in_triangle = false;

    if ($x >= 0 && $y >= 0 && pow($x, 2) + pow($y, 2) <= pow($r, 2)) {
        $dot_in_circle = true;
    } else if ($x >= 0 && $y <= 0 && $x - $y <= $r) {
        $dot_in_triangle = true;
    } else if ($x <= 0 && $y <= 0 && $x >= -$r && $y >= -$r/2) {
        $dot_in_rectangle = true;
    }

    return $dot_in_circle || $dot_in_triangle || $dot_in_rectangle; 
}

$start = microtime(true);

$current_time = date("H:i:s");
if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {
    $x = intval($_POST["x"]);
    $y = floatval($_POST["y"]);
    $r = intval($_POST["r"]);
    
        $checked_dot = check_coords($x, $y, $r) ? "TRUE" : "FALSE";

        $finish_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;

        exit("
            <tr>
                <th>$x</th>
                <th>$y</th>
                <th>$r</th>
                <th>$current_time</th>
                <th>$finish_time</th>
                <th>$checked_dot</th>
            </tr>");
}