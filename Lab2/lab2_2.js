/* 
    1. 定义 全局变量depth 用于记录使用的是第几块棋子，定义 矩阵 作为棋盘，要求长宽n须满足 n = 2 ^ k，k为整数
    2. 定义 矩阵覆盖函数coverMatrix，参数：起始行startRow、起始列startCol、已被覆盖的点的行号pointRow、已被覆盖的点的行号pointCol、要处理的大小size
    3. 若矩阵的size = 1，表明已到达递归尽头，返回
    4. 将 要处理的范围(由起始行列和要处理的大小构成)均分成四个子矩阵 分别判断已被覆盖的点是否位于四个子矩阵内
        若 已被覆盖的点位于该子矩阵内
            则 coverMatrix(子矩阵)
        否则 将该子矩阵靠近原矩阵中心的角落覆盖，再coverMatrix(子矩阵)
    5. 重复步骤3 ~ 4，直至所有位置均已被覆盖
*/


let matrix = [ // 定义棋盘
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
] 

let depth = 1 // 使用的是第几块棋子
// startRow/startCol：棋盘开始的行列号
// pointRow/pointCol：已被覆盖点的行列号
// size：棋盘大小
let coverMatrix = (startRow, startCol, pointRow, pointCol, size) => {
    if (size === 1) return
    let subSize = size / 2
    let num = depth++ // 为当前这次覆盖获得一个棋子编号

    // 处理左上方子棋盘
    if (pointRow < startRow + subSize && pointCol < startCol + subSize) { // 已被覆盖的点在此子棋盘中
        coverMatrix(startRow, startCol, pointRow, pointCol, subSize)
    } else { // 已被覆盖的点不在此子棋盘中
        matrix[startRow + subSize - 1][startCol + subSize - 1] = num // 用棋子覆盖子棋盘的右下角
        coverMatrix(startRow, startCol, startRow + subSize - 1, startCol + subSize - 1, subSize)
    }
    // 处理右上方子棋盘
    if (pointRow < startRow + subSize && pointCol >= startCol + subSize) {
        coverMatrix(startRow, startCol + subSize, pointRow, pointCol, subSize)
    } else {
        matrix[startRow + subSize - 1][startCol + subSize] = num
        coverMatrix(startRow, startCol + subSize, startRow + subSize - 1, startCol + subSize, subSize)
    }
    // 处理左下方子棋盘
    if (pointRow >= startRow + subSize && pointCol < startCol + subSize) {
        coverMatrix(startRow + subSize, startCol, pointRow, pointCol, subSize)
    } else {
        matrix[startRow + subSize][startCol + subSize - 1] = num
        coverMatrix(startRow + subSize, startCol, startRow + subSize, startCol + subSize - 1, subSize)
    }
    // 处理右下方子棋盘
    if (pointRow >= startRow + subSize && pointCol >= startCol + subSize) {
        coverMatrix(startRow + subSize, startCol + subSize, pointRow, pointCol, subSize)
    } else {
        matrix[startRow + subSize][startCol + subSize] = num
        coverMatrix(startRow + subSize, startCol + subSize, startRow + subSize, startCol + subSize, subSize)
    }
}

coverMatrix(0, 0, 1, 1, 8)

console.log(matrix)