const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/exercicio3', (req, res)=>{
    const nome = (req.query.nome)
    const salario = Number(req.query.salario)
    const vendas = Number(req.query.vendas)
    const comissao = Number(req.query.comissao)

    const reajuste = salario * comissao
    const novoSalario = salario + reajuste

    res.send(`Nome: ${nome}
    Novo Salario: ${novoSalario}
    Total de vendas: ${vendas}
    Comissão pelas vendas: ${comissao}`)
})



