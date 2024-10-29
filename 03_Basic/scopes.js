// Closure
function one() {
    const username = 'shivam';
    function two() {
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website); // Give us error 
    two();
}
one();