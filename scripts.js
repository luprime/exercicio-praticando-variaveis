// 1. Declare uma variável de nome weight
 let weight

// 2. Que tipo de dado é a variável acima?
//console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/

//let name = "Lucas"
//let age = 26
//let stars = 4.5
//let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
    name: "Lucas",
    age: 26,
    weight: 90,
    isSubscribed: true
};

// console.log(typeof student)
// console.log(stundent)
//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja,
    somente o Array vazio.
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4
    (não copiar e colar o objeto, mas usar objeto criado e inserir ele no array)
*/

students = [
    student
]

//console.log(students)

/*
    7. Coloque no console o valor da posição zero no Array acima.
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students.
*/

const john = {
    name: "John",
    age: 20,
    weight: 69.5,
    isSubscribed: true
}

// forma de adicionar john na posição 1 do Array
students[1] = john
console.log(students.length)


/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e porque?
    após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

/* o código acima dará resultado de undefined, já que a variável foi declarada depois do
    console.log, caso coloque outro console.log logo abaixo, ele dará o valor de 1.
*/
    console.log(a)
    var a = 1


