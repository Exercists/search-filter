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
  const term = event.target.value

  // @TODO: check if search term is long enough
  if(term.length < 3) return showOriginalArticles()

  // @TODO: Filter articles
  const filteredArticles = filterArticles(getArticles(), term)

  // @TODO: update DOM (Insert filtered articles in HTML)
  document.getElementById('articles').innerHTML = filteredArticles.join("")
}

// Filter the articles
function filterArticles(articles, term)
{
  // @TODO: create a filter that returns articles where the search term exists
  articles = articles.filter(element => element.innerText.match(term))

  // @TODO: Highlight search terms with
  articles = articles.map(element => highlight(element.innerHTML, term))

  // @TODO: return filtered and highlighted articles
  return articles;
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
  const html = getArticles().map(article => article.innerHTML)

  // @TODO: update the DOM with the HTML
  document.getElementById('articles').innerHTML = html.join("")
}

// Clear input field and show original articles
function removeFilters()
{
  // @TODO: clear search term
  document.querySelector('.filter input').value = ''
  
  // @TODO: show original articles in the DOM
  showOriginalArticles()
}