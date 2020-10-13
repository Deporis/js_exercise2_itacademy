function fase123()
{
    let Name = prompt("What is your name?").toLowerCase();
    let charName = Name.split('');
    let Vocals = ['a', 'e', 'i', 'o', 'u'];
    let Numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let k = 0;
    let dictionary = {};
    for(let i = 0; i <= charName.length; i++)
    {
        // Check if the name is correct, it must not have numbers
        while(k <= charName.length)
        {
            if(Numbers.includes(charName[k]))
            {
                console.log("People names do not contain numbers! Try again.")
                return
            }
            k++;
            // We take this iteration also to create our dictionary and afterthat fill it with values
            dictionary[charName[k]] = 0;
        }

        if(Vocals.includes(charName[i]))
        {
            console.log(charName[i] + " is a VOCAL");
        }
        else
        {
            console.log(charName[i] + " is a CONSONANT")
        }
        dictionary[charName[i]] = dictionary[charName[i]] + 1;
    }
    console.log(dictionary)
}
