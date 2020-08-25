const pokemon = {
    sprite: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name'),
    types: document.getElementById('pokemon-types'),
    abilities: document.getElementById('pokemon-abilities'),
   // egg: document.getElementById('pokemon-egg'),
    //type: document.getElementById('pokemon-type'),
    //ability1: document.getElementById('pokemon-ability1')

    sprite1: document.getElementById('pokemon1'),
    sprite2: document.getElementById('pokemon2'),
    sprite3: document.getElementById('pokemon3'),
    sprite4: document.getElementById('pokemon4'),
    sprite5: document.getElementById('pokemon5'),
    sprite6: document.getElementById('pokemon6'),
    sprite7: document.getElementById('pokemon7'),
    sprite8: document.getElementById('pokemon8'),
    sprite9: document.getElementById('pokemon9'),
    sprite10: document.getElementById('pokemon10')


}

const GetPokemon = async ()=>{
    const url='https://pokeapi.co/api/v2/pokemon/jigglypuff';

    const data= await fetch(url);
    const dataJson = await data.json();

    const{sprites, name, types, abilities}= dataJson;

    types.forEach(element => { //forEach para recorrer arreglos
        const {type} = element;
        //console.log(type.name);
        pokemon.types.innerHTML += `<li>${type.name}</li>`;

    });

    abilities.forEach(element => {
        const{ability}= element;
        //pokemon.abilities.innerHTML += `<li>${ability.name}</li>`;
        //console.log(ability.url);
        GetAbilityInfo(ability.url, ability.name);
    })

    //console.log(await abilities);

    pokemon.sprite.src = await dataJson.sprites['front_default'];
    pokemon.name.innerHTML= await `Name: ${name}`;

}

const GetAbilityInfo= async (url, abilityName)=>{
    const data= await fetch(url);
    const dataJson= await data.json();
    const{effect_entries}= dataJson;

    let effectsList='';

    effect_entries.forEach(element => {

        const{effect, language} = element;

        if(language.name === 'en'){
            console.log(effect);
            effectsList += `<li>${effect}</li>`;
        }
    });


    pokemon.abilities.innerHTML += 
    `<li>
        ${abilityName}
        <div>effect</div>
        <ul>
            ${effectsList}
        </ul>
    </li> `;

  

    //console.log(await dataJson);
}

GetPokemon();

const GetPikachu= async ()=>{
    const url=' https://pokeapi.co/api/v2/pokemon/pikachu';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite1.src = await sprites.front_default;

}
GetPikachu();

const GetCharmander= async ()=>{
    const url=' https://pokeapi.co/api/v2/pokemon/charmander';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite2.src = await sprites.front_default;

}
GetCharmander();

const GetBulbasaur= async ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite3.src = await sprites.front_default;

}
GetBulbasaur();

const GetSquirtle= async ()=>{
    const url= ' https://pokeapi.co/api/v2/pokemon/squirtle';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite4.src = await sprites.front_default;

}
GetSquirtle();

const GetPidgeotto= async ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/pidgeotto';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite5.src = await sprites.front_default;

}
GetPidgeotto();

const GetEkans= async ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/ekans';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite6.src = await sprites.front_default;

}
GetEkans();

const GetRaichu= async ()=>{
    const url= ' https://pokeapi.co/api/v2/pokemon/raichu';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite7.src = await sprites.front_default;

}
GetRaichu();

const GetNidorina= async ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/nidorina';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite8.src = await sprites.front_default;

}
GetNidorina();

const GetGolbat= async ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/golbat';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite9.src = await sprites.front_default;

}
GetGolbat();

const GetMankey= async ()=>{
    const url= 'https://pokeapi.co/api/v2/pokemon/mankey';
    const data= await fetch(url);
    const dataJson = await data.json();
    const{sprites}= dataJson;
    pokemon.sprite10.src = await sprites.front_default;

}
GetMankey();

