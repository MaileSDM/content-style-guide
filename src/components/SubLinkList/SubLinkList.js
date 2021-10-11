import config from 'config';
import { useTheme } from 'emotion-theming';
import { anchor } from '../../styles';
import Link from '../Link';
import { calculateNavigation, getNavigationData } from '../Navigation';

const reduceSubLinkSet = (location) => (sublink, edge) => {
  const { url } = edge;
  const active =
    location &&
    (location.pathname === url ||
      location.pathname === url + '/' ||
      location.pathname === config.metadata.pathPrefix + url);

  if (active) {
    return edge;
  }

  if (edge.children) {
    return edge.children.reduce(reduceSubLinkSet(location), sublink);
  }

  return sublink;
}

const getSubLink = (edges, location) => {
    const treeData = calculateNavigation(edges)
    const sublink = treeData.children.reduce(reduceSubLinkSet(location), null);

    return sublink ? (sublink.children || []) : []
}

const SubLinkList = ({ location }) => {
  const edges = getNavigationData()
  const sublinks = getSubLink(edges, location)

  if (!sublinks.length) {
    return ''
  }

  return <ul className={`${"SubLinkList"}`}>
    {sublinks.map(({ url, title }) => (
      <li key={url}>
        <Link to={url} title={title} css={anchor(useTheme())}>{title}</Link>
      </li>
    ))}
  </ul>
};

export default SubLinkList
