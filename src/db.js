{
    "Artista"="Juan";
    "Estilo"="realista";
    "correo"="juan@s123.crco";
    "año"="1995"
    
}
db.cliente.insert({

})



// middleware para pasar datos

app.use(bodyParser. urlencoded({extended:true}));

// sed html
app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/Index.html");
});

// manejar el envio del formulario 
app.post("/add",(req,rest)=>{
    const{nombre,apellido,email} =req.body;

    const newUser = new User({nombre,apellido,email});
    newUser.save((err)=>{
        if(err){
            console.error("Error insertado el documento");
            rest.status(500).send("Error agregado usuario");
        }else{
            console.log ("Usuario agregado exitosamente");
            rest.redirect("/");
        }
    });
});

// start el service 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})


// profe //
//Data para instalar en base de datos
const dataToInsert = { Artista:"Maria lucia",Estilo:"Vanguardista", correo:"macs123@cr.go",año:"1967" }

// conectar el servidor y vamos a insertar la data
mongoose. connection.once("open",()=>{
    console.log("se conecto ala base de datos correctamente");
    const db =mongoose.connection.db;

});

const collection = db.colletion("tasks");

// insertar datos

collection.insertOne(dataToInsert,(insertErr,result)=>{
    if(insertErr){
        console.log("Error insertando el documento",insertErr);    
    }else{
        console.log("documeto insertado correctamente")
    }
    mongoose.connection.close();

});
