function firstUnqChar(s){
    const charCount={};
    // count the freqency of each character
    for(let i=0;i<s.length;i++){
        const char=s[i];
        charCount[char]=(charCount[char] || 0)+1;
    }
    // first non-repeating character
    for(let i=0;i<s.length;i++){
        const char=s[i];
        if(charCount[char]===1){
        return i;
        }
    }
    return -1;
}
 const s="loveleetcode";
 const result=firstUnqChar(s);
 console.log(result);