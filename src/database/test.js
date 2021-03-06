const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");
Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-15.8023004",
    lng: "-47.8884603",
    name: "Lar das meninas",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se escontre em situação de risco e/ou vunerabilidade social.",
    whatsapp: "61986836345",
    images: [
      "https://images.unsplash.com/photo-1603138461764-d2358b5db8b3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horários de visitas Das 18h até 8h",
    open_on_weekends: "0",
  });
  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);
  //consultar somente 1 orphato, pelo id
  const orphanages = await db.all('SELECT  * FROM orphanages WHERE id = "1"');
  console.log(orphanages);
  //deletar dado na tabela
  //console.log( await db.run('DELETE FROM orphanages WHERE id = "11"'))
});
