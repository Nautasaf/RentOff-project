const React = require("react");
const Layout = require("./Layout");

module.exports = function Home({ title, user }) {
  return (
    <Layout title={title} user={ user }>
        <h2>Apartments</h2>
        
    </Layout>
  );
};
