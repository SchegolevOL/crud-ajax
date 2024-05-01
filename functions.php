<?php
function print_arr($data){
    echo "<pre>".print_r($data, 1)."</pre>";
}
function getCount(string $table){
    global $db;
    return $db->query("SELECT COUNT(*) FROM {$table}")->findColumn();

}