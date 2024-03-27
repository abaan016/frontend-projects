
$table = document.querySelectorAll("#tablenumber");
$startNum = document.querySelectorAll("#start");
$endNum = document.querySelectorAll("#end");

const generate = () => {
    
    for(let i = $startNum; $i <= $endNum; $i++){

        console.log($table + "x" + $i + "=" + $table * $i);
    }
}