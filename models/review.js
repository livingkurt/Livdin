module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        home_quality_review: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "User",
                key: "id"
            }
        }
    });

    Review.associate = function(models) {
        Review.belongsTo(models.User, {
            foreignKey: "id",
            target_Key: "user_id"
        });
    };

    return Review;
};