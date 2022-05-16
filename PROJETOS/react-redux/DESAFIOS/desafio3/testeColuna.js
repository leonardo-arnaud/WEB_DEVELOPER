    //get column in javascript... 
    let matrix = [10, 4, 32, 34, 543, 3456, 654, 567, 87, 6789, 98];
    let col = 0;
    var column = [];
	function getCol(matrix, col){
        //var column = [];
        for(var i=0; i<matrix.length; i++){
           column.push(matrix[i][col]);
        }
        return column; // return column data..
     }
     console.log(column);

     //--------------------------------

     var array = [new Array(20), new Array(20), new Array(20)]; //..your 3x20 array
     //getCol(array, 0); //Get first column
     array.push(matrix[i][col]);
     console.log(array);
