var fortunes=[
    "A beautiful, smart, and loving person will be coming into your life.",
"A dubious friend may be an enemy in camouflage.",
"A faithful friend is a strong defense.",
"A feather in the hand is better than a bird in the air.",
"A fresh start will put you on your way.",
"A friend asks only for your time not your money.",
"A friend is a present you give yourself"
]
function getFortune(){
    let randomFortune=fortunes[Math.floor(Math.random()*fortunes.length)];
    return randomFortune
}
export {getFortune}