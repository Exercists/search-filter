let articles

// Get original articles
function getArticles()
{
  // Fetch articles if articles does not exists
  if( ! articles) {
    // Transform object returned from querySelectorAll to array
    articles = Object.values(document.querySelectorAll('.article'))
  }
 return articles
}

// Function that triggers the search/filter
function filter(event)
{
  // @TODO: get search term from event

  // @TODO: check if search term is long enough

  // @TODO: Filter articles

  // @TODO: update DOM (Insert filtered articles in HTML)
}

// Filter the articles
function filterArticles(articles, term)
{
  // @TODO: create a filter that returns articles where the search term exists

  // @TODO: Highlight search terms with

  // @TODO: return filtered and highlighted articles
}

// Highlight the search term occurences
function highlight(string, term)
{
  // Wrap each occurance in a span with a CSS class to hightlight the term
  return string.replace(new RegExp(term, 'gi'), `<span class="highlight">${term}</span>`)
}

// Show original articles
function showOriginalArticles()
{
  // @TODO: create HTML from the original articles

  // @TODO: update the DOM with the HTML
}

// Clear input field and show original articles
function removeFilters()
{
  // @TODO: clear search term
  // @TODO: show original articles in the DOM
}