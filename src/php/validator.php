<?php

class Validator {
    private const X_MIN = -3;
    private const X_MAX = 5;
    private const Y_MIN = -5;
    private const Y_MAX = 3;
    private const R_MIN = 1;
    private const R_MAX = 3;

    public function validate($x, $y, $r) {
        if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r)) {
            return false;
        } else {
            $x_num = intval($x);
            $y_num = floatval($y);
            $r_num = intval($r);


            if (!($x_num >= self::X_MIN && $x_num <= self::X_MAX)) {
                return false;
            }
    
            if (!($y_num >= self::Y_MIN && $y_num <= self::Y_MAX)) {
                return false;
            }
    
            if (!($r_num >= self::R_MIN && $r_num <= self::R_MAX)) {
                return false;
            }

            return true;
        }
    }
}