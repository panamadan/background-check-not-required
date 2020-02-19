module.exports = function(sequelize, DataTypes)
{
    var Job_Posts = sequelize.define("Job_Posts", 
    {
        jobTitle:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        company:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        salary:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        summary:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Job_Posts;
};