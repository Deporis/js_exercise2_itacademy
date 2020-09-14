function fase12()
{
    let Name = prompt("What is your name?").toLowerCase();
    let charName = Name.split('');
    let Vocals = ['a', 'e', 'i', 'o', 'u'];
    let Numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let k = 0;
    for(let i = 0; i <= charName.length; i++)
    {
        while(k <= charName.length)
        {
            if(Numbers.includes(charName[k]))
            {
                console.log("People names do not contain numbers! Try again.")
                return
            }
            k++;
        }
        if(Vocals.includes(charName[i]))
        {
            console.log(charName[i] + " is a VOCAL");
        }
        else
        {
            console.log(charName[i] + " is a CONSONANT")
        }
    }
}
