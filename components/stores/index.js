import home from './pages/Home';

class Content {
  constructor() {
    this.pages = {
      '/': home,
    };
  }
  contentFilter(pathname) {
    return this.pages[pathname];
  }

  content(pathname) {
    return this.contentFilter(pathname);
  }
}

export default (pathname) => {
  const c = new Content();
  return c.content(pathname);
};
