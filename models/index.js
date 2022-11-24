// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.BelongsTo( Category, {
  foreignKey: 'Product_id',
  // When we delete a Product, make sure to also delete the Catergoery????????.
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.HasMany(Product,{
  foreignKey: 'Category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.BelongsToMany( Tag,{
  foreignKey: 'Product_id',
});
// Tags belongToMany Products (through ProductTag)
Tag.BelongsToMany( Product,{
  foreignKey: 'Tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};