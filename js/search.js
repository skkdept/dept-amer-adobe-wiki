// Global search functionality
(function () {
  var searchIndex = null;
  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var toggleBtn = document.getElementById('search-toggle');

  if (!overlay || !input || !results) return;

  // Determine the base path relative to the current page
  function getBasePath() {
    var path = window.location.pathname;
    // Count depth: pages/foo.html => 1, pages/adobe-commerce/foo.html => 2
    var parts = path.split('/').filter(Boolean);
    // Find how many directories deep we are relative to the site root
    // The index.html is at root level
    var depth = 0;
    for (var i = 0; i < parts.length - 1; i++) {
      var part = parts[i];
      // Skip the repo name segment if running on GitHub Pages
      if (part === 'pages' || part === 'adobe-commerce' || part === 'adobe-eds') {
        depth++;
      }
    }
    if (depth === 0) return '';
    if (depth === 1) return '../';
    return '../../';
  }

  var basePath = getBasePath();

  // Load search index
  function loadIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);
    return fetch(basePath + 'js/search-index.json')
      .then(function (res) { return res.json(); })
      .then(function (data) { searchIndex = data; return data; });
  }

  function openSearch() {
    overlay.classList.add('active');
    input.value = '';
    results.innerHTML = '';
    input.focus();
    loadIndex();
  }

  function closeSearch() {
    overlay.classList.remove('active');
  }

  function performSearch(query) {
    if (!searchIndex || !query.trim()) {
      results.innerHTML = '';
      return;
    }
    var q = query.toLowerCase().trim();
    var matches = searchIndex.filter(function (item) {
      if (item.title.toLowerCase().indexOf(q) !== -1) return true;
      if (item.description.toLowerCase().indexOf(q) !== -1) return true;
      for (var i = 0; i < item.keywords.length; i++) {
        if (item.keywords[i].toLowerCase().indexOf(q) !== -1) return true;
      }
      return false;
    });

    if (matches.length === 0) {
      results.innerHTML = '<div class="search-no-results">No results found for "' +
        query.replace(/</g, '&lt;') + '"</div>';
      return;
    }

    results.innerHTML = matches.map(function (item) {
      return '<a class="search-result-item" href="' + basePath + item.url + '">' +
        '<h4>' + item.title + '</h4>' +
        '<p>' + item.description + '</p>' +
        '</a>';
    }).join('');
  }

  // Event listeners
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });
  }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeSearch();
  });

  input.addEventListener('input', function () {
    performSearch(input.value);
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', function (e) {
    // Ctrl/Cmd + K to open search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    // Escape to close
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
  });
})();
