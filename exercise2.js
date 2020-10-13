function fase123()
{
    let Name = prompt("What is your name?").toUpperCase();
    let charName = Name.split('');
    let Vocals = ['A', 'E', 'I', 'O', 'U'];
    let Numbers = ['0','1','2','3','4','5','6','7','8','9'];
    let k = 0;
    let dictionary = {};
    for(let i = 0; i < charName.length; i++)
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
function fase4()
{
    let Name = prompt("What is your name?").toUpperCase();
    let charName = Name.split('');
    let Surname = prompt("What is your surname?").toUpperCase();
    let charSurname = Surname.split('');
    let fullName = [];
    countName = 0;
    // We can iterate with a while declaring a variable to count before or
    while(countName < charName.length)
    {
        fullName[countName] = charName[countName];
        countName++;
    }
    fullName[countName] = " "
    //We can iterate with a direct for, in this case, using the variable declared before
    for(let countSurname = 0; countSurname < charSurname.length; countSurname++)
    {
        fullName[countSurname + countName + 1] = charSurname[countSurname];
    }
    console.log(fullName)
}
