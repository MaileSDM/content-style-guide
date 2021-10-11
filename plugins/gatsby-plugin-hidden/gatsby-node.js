exports.onCreateNode = ({ node, actions }, pluginOptions) => {
  const { createNodeField } = actions;

  if (node.internal.type !== 'MarkdownRemark' && node.internal.type !== 'Mdx') {
    return;
  }

  const isHidden = node.frontmatter && node.frontmatter.hidden === true;
  createNodeField({
    node,
    name: "hidden",
    value: isHidden
  });

};