const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


app.get('/exercicio5', (req, res)=>{
    const salario = Number(req.query.salario)

    if (salario <= 2000){
        const reajuste = salario * 0.5;
        const salarioAtual = salario + reajuste

        res.send(`
        Salario antigo: ${salario}
        Reajuste: ${reajuste}
        Salario atual: ${salarioAtual}
        `)

    } else  {
        const reajuste = salario * 0.3
        const salarioAtual = salario + reajuste


        res.send(`
        Salario antigo: ${salario}
        Reajuste: ${reajuste}
        Salario atual: ${salarioAtual}
        `)
    }
    
    
})






app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})
