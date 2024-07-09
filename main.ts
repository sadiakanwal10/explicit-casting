
// explicit casting //
// jb hum variable ki type ko change krna chahen tw explicit casting ki madad sy krty hain //
// casting k liye hum 'as' ka word bhe use krty aur yei <> bhe use krty //
// 


// with as //
let b :unknown = 4;
console.log((b as string).length);

// with <> 
let c :unknown="world";
console.log((<string>c).length);
console.log(c as string);


