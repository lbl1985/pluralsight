

process.stdin.on('data', function(data){
    process.stdout.write('Hello ' + data);
}); 