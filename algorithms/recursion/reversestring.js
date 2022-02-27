function reverse(word) {
    if(word === "") return word;
    else return reverse(word.substr(1)) + word.charAt(0);
}

console.log(reverse('tester'));