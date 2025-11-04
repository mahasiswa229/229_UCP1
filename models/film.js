module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define("Film", {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    nama_film: {
        type : DataTypes.STRING,
    },
    deskripsi : {
        type : DataTypes.STRING,
    },
    sutradara: {
        type : DataTypes.STRING,
    },
    tahun_terbit: {
        type : DataTypes.INTEGER,
    },
    genre: {
        type : DataTypes.STRING,
    }
  });

  return Film;
}
