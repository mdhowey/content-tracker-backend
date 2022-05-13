module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    // TODO implement new UUID for primary key
    group: {
      type: Sequelize.INTEGER,
      // allowNull: false,
    },
    posted_url: {
      type: Sequelize.STRING,
    },
    brief: {
      type: Sequelize.TEXT,
    },
    updates: {
      type: Sequelize.TEXT,
    },
    focus_keywords: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
    },
    wordpress_url: {
      type: Sequelize.STRING,
    },
    doc_url: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.ENUM({
        values: [
          "Not Started",
          "Writing in Progress",
          "Ready for Internal Review",
          "Writing Finished - Pending Approval",
          "Approved & Posted",
          "Not Approved - Rework",
          "Consolidate",
          "Unsalvagable",
          "Questionable",
          "Large Article - Evaluate"
        ]
      })
    },
    // Possibly change this to owner since contributer is already connected through join table
    contributor: {
      // foreign key to user
      type: Sequelize.STRING,
    },
    delivered_date: {
      type: Sequelize.DATEONLY,
    },
    published_date: {
      type: Sequelize.DATEONLY,
    }, 
    original_title: {
      type: Sequelize.STRING,
    },
    final_title: {
      type: Sequelize.STRING,
    },
    meta_description: {
      type: Sequelize.STRING,
    },
    needs_images: {
      type: Sequelize.BOOLEAN,
    }
  });

  return Article;
};