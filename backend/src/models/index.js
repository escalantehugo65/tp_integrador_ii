import User from "./user.model.js";
import Profile from "./profile.model.js";
import Article from "./article.model.js";
import Tag from "./tag.model.js";
import ArticleTag from "./articleTag.model.js";

// Primero se definen todos los modelos; despues se conectan sus relaciones.
User.hasOne(Profile, { foreignKey: "user_id", as: "profile", onDelete: "CASCADE" });
Profile.belongsTo(User, { foreignKey: "user_id", as: "user", onDelete: "CASCADE" });

User.hasMany(Article, { foreignKey: "user_id", as: "articles", onDelete: "CASCADE" });
Article.belongsTo(User, { foreignKey: "user_id", as: "author", onDelete: "CASCADE" });

Article.belongsToMany(Tag, {
    through: ArticleTag,
    foreignKey: "article_id",
    otherKey: "tag_id",
    as: "tags",
    onDelete: "CASCADE"
});
Tag.belongsToMany(Article, {
    through: ArticleTag,
    foreignKey: "tag_id",
    otherKey: "article_id",
    as: "articles",
    onDelete: "CASCADE"
});

export { User, Profile, Article, Tag, ArticleTag };
