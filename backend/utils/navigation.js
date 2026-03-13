import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function loadNavData() {
  const navPath = path.join(process.cwd(), 'data/_nav.yml');
  return yaml.load(fs.readFileSync(navPath, 'utf8'));
}

export function processNav(requestPath, data) {
  Object.values(data).forEach(item =>
    processNavItem(requestPath, item)
  );
}

function processNavItem(requestPath, data) {
  if (data.content) {
    data.content.forEach(item => processNavItem(requestPath, item));
    data.is_active = data.content.some(i => i.is_active);
  } else {
    if (data.url) {
      let url = data.url;
      if (!url.startsWith('http') && !url.startsWith('/')) url = '/' + url;
      data.url = url;
    }

    if (data.urlPattern) {
      data.is_active = new RegExp(data.urlPattern).test(requestPath);
    } else if (data.url) {
      data.is_active = requestPath.startsWith(data.url);
    } else {
      data.is_active = false;
    }
  }
}

export function processVideoNav(data) {
  return data.map(processVideoNavItem);
}

function processVideoNavItem(item) {
  if (item.content) {
    item.content = item.content.map(processVideoNavItem);
  } else {
    item.class = 'video-item';
    item.title_class = 'video-item-title';
    if (isExternal(item.url)) item.title_class += ' is_external';
    if (item.description) {
      item.title_arguments = { 'data-description': item.description };
      delete item.description;
    }
  }
  return item;
}

export function isExternal(link) {
  return !link.includes('www.youtube.com');
}

export function getCurrentUrl(subnav) {
  const current = subnav.find(i => i.is_active);
  return current && current.url ? current.url : '/';
}
