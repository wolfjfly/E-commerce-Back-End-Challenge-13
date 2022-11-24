// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// LibraryCard.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });
// Reader.hasMany(Book, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// Book.belongsTo(Reader, {
//   foreignKey: 'reader_id',
// });
// module.exports = { Reader, Book, LibraryCard };