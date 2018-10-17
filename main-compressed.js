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
  const term = event.target.value

  if(term.length < 3) return showOriginalArticles()

  document.getElementById('articles').innerHTML = filterArticles(getArticles(), term).join("")
}

// Filter the articles
function filterArticles(articles, term)
{
  return articles.filter(element => element.innerText.match(term)).map(element => highlight(element.innerHTML, term))
}

// Highlight the search term occurences
function highlight(string, term)
{
  return string.replace(new RegExp(term, 'gi'), `<span class="highlight">${term}</span>`)
}

// Show original articles
function showOriginalArticles()
{
  document.getElementById('articles').innerHTML = getArticles().map(article => article.innerHTML).join("")
}

// Clear input field and show original articles
function removeFilters()
{
  document.querySelector('.filter input').value = ''
  showOriginalArticles()
}