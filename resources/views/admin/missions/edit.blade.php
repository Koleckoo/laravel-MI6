<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>Editing form of a mission:</h1>
    <form action="" method="post">
        @csrf
        Name: <br>
        <input type="text" name="name" value=<?= $mission->name ?>> <br>
        Year: <br>
        <input type="text" name="year" value=<?= $mission->year ?>> <br>
        <select name="outcome" id="outcome">
            <option value="Success">Success</option>
            <option value="Failure">Failure</option>
        </select>
        <div id="person-select"></div>
        @viteReactRefresh
        @vite('resources/js/person-select.jsx')
        <button type="submit">Assign</button>
    </form>

</body>

</html>
