import home from './pages/Home';
import auction from './pages/Auction';

class Content {
  constructor() {
    this.pages = {
      '/': home,
      '/auction': auction,
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
