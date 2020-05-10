<?php
set_include_path(get_include_path() . PATH_SEPARATOR . '/posts');

$local_env = 'localhost:8000';
$prod_env = 'tenie.ro';
class Image{

    public function getPost($name, $folder){
        $path = utf8_decode($folder).'/'.utf8_decode($name);
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Allow-Headers: Range, Origin, X-Requested-With, Content-Type, Accept");
        header("Content-disposition: attachment; filename=\"" . basename($path));
        header('Content-Length: ' . filesize($path));
        header("Pragma: public");
        header("Cache-Control: public",FALSE);
        header('Content-Type: text/markdown; charset=UTF-8');
        require $path;
    }

    public function getIndex(){
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Allow-Headers: Range, Origin, X-Requested-With, Content-Type, Accept");
        $result = array();
        $cdir = scandir("posts");
            foreach ($cdir as $key => $value)
            {
                if (!in_array($value,array(".","..")))
                {
                    if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
                    {
                        $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
                    }
                    else
                    {
                        $value = substr($value, 0, strrpos($value, "."));
                        $result[] = $value;
                    }
                }
            }
            foreach ($result as $row)
            {
                $titles[] = array(
                'item' => $row,
                );
            }
        return json_encode(array('titles' => $titles));
    }
}

$image = new Image();
if(isset($_GET['name'])&&isset($_GET['folder'])){
    die($image->getPost($_GET['name'],$_GET['folder']));
}
if(isset($_GET['index'])){
    die($image->getIndex($_GET['index']));
}
?>
