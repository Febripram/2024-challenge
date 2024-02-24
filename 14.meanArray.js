const getAverage = (marks) => Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length)


console.log(getAverage([1,1,1,1,1,1,1,2]))