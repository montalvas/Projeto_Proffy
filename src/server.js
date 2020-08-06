const proffys = [
    { 
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8989898989",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [],
        time_from: [],
        time_to: [] 
    },

    { 
        name: "Lucas Montalvani", 
        avatar: "https://avatars1.githubusercontent.com/u/62609007?s=460&u=f26200c0b90b7e6a26eb50e5361f9098b1562e83&v=4",
        whatsapp: "1221122112",
        bio: "A minha arte é apenas o rascunho da minha própria vida.<br><br>A melhor maneira de nos prepararmos para o futuro é concentrar toda a imaginação e entusiasmo na execução perfeita do trabalho de hoje.",
        subject: "Artes",
        cost: "100",
        weekday: [],
        time_from: [],
        time_to: [] 
    }
]

const subjects = [
    "Artes", 
    "Biologia", 
    "Ciências", 
    "Educação física", 
    "Geografia", 
    "História", 
    "Matemática", 
    "Português",
    "Química",
    "Física",
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)

