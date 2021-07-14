// You should implement your task here.

module.exports = function towelSort(matrix = 0) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        result = result.concat(i % 2 != 0 ? matrix[i].reverse() : matrix[i]);
        // console.log(result);
    }

    return matrix == 0 ? [] : result;
}