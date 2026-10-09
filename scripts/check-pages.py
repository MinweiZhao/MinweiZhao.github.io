from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

root = Path(__file__).resolve().parents[1]
class Check(HTMLParser):
    def __init__(self, page):
        super().__init__()
        self.page = page
        self.title = False
    def handle_starttag(self, tag, attrs):
        if tag == 'title':
            self.title = True
        for name, value in attrs:
            if name not in ('href', 'src') or not value:
                continue
            url = urlsplit(value)
            if url.scheme or url.netloc or not url.path:
                continue
            target = (root / unquote(url.path.lstrip('/'))) if url.path.startswith('/') else self.page.parent / unquote(url.path)
            if value.endswith('/'):
                target = target / 'index.html'
            assert target.exists(), f'{self.page}: missing {value}'
for name in ('index.html', 'blog/index.html'):
    page = root / name
    check = Check(page)
    check.feed(page.read_text())
    assert check.title, f'{name}: missing title'
assert (root / '.nojekyll').exists()
print('Pages entry points and local resources verified.')
