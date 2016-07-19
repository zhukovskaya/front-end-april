(function () {


    var ALL_ARTICLES = [];
    var VIEW = document.getElementById('ui-view');

    function handlerError(error) {
        return new Error(error)
    }

    function createArticles(article) {
        var template = '<article> <h3 class="title"> <a href="/articles/' + article.id + '" > ' + article.title + ' </a></h3>' +
            '<div class="text-holder">' + '<p class="article-text">' + blog.Utils.formatArticleText(article.text) +
            '</p></div>' + '<div class="author-holder"><img src="' + article.photo + '" alt="">' +
            '<span class="author-name">' + article.author + '</span></div>' + '<div class="meta-data">' +
            '<span class="likes"><button data-article-id="' + article.id + '" >Likes : ' + article.likes +'</button> </span>' +
            '<span class="data"> Date of post: ' + blog.Utils.formatDate(article.createdAt) + '</span></div></article>'
        return template;
    }

    function createArticle(article) {
        var template = '<article> <h3 class="title"> ' + article.title + '</h3>' +
            '<div class="text-holder">' + '<p class="article-text">' + blog.Utils.formatArticleText(article.text) +
            '</p></div>' + '<div class="author-holder"><img src="' + article.photo + '" alt="">' +
            '<span class="author-name">' + article.author + '</span></div>' + '<div class="meta-data">' +
            '<span class="likes"><button data-article-id="' + article.id + '">Likes : ' + article.likes +'</button> </span>' +
            '<span class="data"> Date of post: ' + blog.Utils.formatDate(article.createdAt) + '</span></div></article>'
        return template;
    }

    function createAbout() {
        var template = `
<div class="about-head">
    <h2>By Me!</h2>
    <h3>Who am i?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quidem vel tempore harum non laboriosam, ex
        possimus voluptatibus quae exercitationem illum dolores eos doloremque soluta aut! Consequatur minima, totam
        maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quidem vel tempore harum non laboriosam, ex
        possimus voluptatibus quae exercitationem illum dolores eos doloremque soluta aut! Consequatur minima, totam
        maxime.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, quidem vel tempore harum non laboriosam, ex
        possimus voluptatibus quae exercitationem illum dolores eos doloremque soluta aut! Consequatur minima, totam
        maxime.</p>
</div>
        
        `;
        return template;
    }


    function createContacts() {
        var template = `
<div class="about-head">
    <h2>How to contact with me?</h2>
    <h3>Easy!</h3>
    <ul>
    <li>Phone: +2355134</li>
    <li>Email: byme@gmail.com</li>
    <li>Twitter: @bymne</li>
    <li>Skype: byme</li>
    </ul>  
        `;

        return template;
    }

    function createNewArticle() {
        var template = `
        <form>
            <div class="row">
                <label for="title"></label>
                <input id="title" type="text" placeholder="Enter title">
            </div>
            <div class="row">
                <label for="text">
                <input id="text" type="textarea" placeholder="Enter text of an article">
            </div>
            <div class="row">
                <label for="author""></label>
                <input id="author" type="text" placeholder="Enter your name">
            </div>
            <div class="row">
                <label for="photo""></label>
                <input id="photo" type="text" placeholder="Enter link of photo">
            </div>
            <button id="addNewArticle" type="button"> Send an article </button>
            </form>
            `;
        return template;

    }

    function renderAbout() {
        var aboutHolder = document.createElement('div');
        aboutHolder.id = 'about';

        VIEW.appendChild(aboutHolder);

        aboutHolder.innerHTML = createAbout();
        blog.Utils.isLoading(false, 'spinner');
    }

    function renderContact() {
        var aboutHolder = document.createElement('div');
        aboutHolder.id = 'contact';

        VIEW.appendChild(aboutHolder);

        aboutHolder.innerHTML = createContacts();
        blog.Utils.isLoading(false, 'spinner');
    }

    function renderNewArticle() {
        var newArticleHolder = document.createElement('div');
        newArticleHolder.id = 'newArticleHolder';

        VIEW.appendChild(newArticleHolder);

        newArticleHolder.innerHTML = createNewArticle();
        blog.Utils.isLoading(false, 'spinner');
        var buttonAddNewArticle = document.getElementById('addNewArticle');

        buttonAddNewArticle.addEventListener('click', setForm);
    }
    

    function renderArticles() {
        var params = {
            method: "GET",
            url: "/articles",
            async: true,
            dataType: "json"
        };

        blog.Utils.isLoading(true, 'spinner');

        blog.Utils.sendRequest(params, function (error, data) {

            var articlesHolder = document.createElement('div');
            articlesHolder.id = 'articles';
            articlesHolder.addEventListener('click', setLike);

            VIEW.appendChild(articlesHolder);

            if (error) throw handlerError(error);

            ALL_ARTICLES = data;

            var i = 0,
                dataLen = data.length,
                articles = [];

            for (; i < dataLen; i += 1) {
                articles.push(createArticles(data[i]))
            }

            setTimeout(function () {
                blog.Utils.isLoading(false, 'spinner');
                articlesHolder.innerHTML = articles.join('');
            }, 100)
        })
    }

    function renderArticleById(id) {
        var params = {
            method: "GET",
            url: "/articles/" + id,
            async: true
        };

        blog.Utils.isLoading(true, 'spinner');

        blog.Utils.sendRequest(params, function(error, data) {
            if (error) throw handlerError(error);

            var articleHolder = document.createElement('div');
            articleHolder.id = 'article';
            articleHolder.addEventListener('click', setLike);

            VIEW.appendChild(articleHolder);

            ALL_ARTICLES.push(data);
            blog.Utils.isLoading(false, 'spinner');
            articleHolder.innerHTML = createArticle(data);

        })

    }

    function setLike(e) {
        if (e.target.tagName != 'BUTTON') return;
        var articleId = +e.target.dataset.articleId;
        var article = ALL_ARTICLES.filter(function(el) {
            console.log(el);
            return el.id === articleId;
        })[0];
        article.likes++;

        var options = {
            method: "PUT",
            url: '/articles/' + article.id,
            async: true,
            dataType: "json",
            body: article
        };

        blog.Utils.sendRequest(options, function (error, data) {
            if (error) throw handlerError(error);
            e.target.textContent = 'Likes : ' + article.likes;

        })
    }

    function setForm(e) {
        
        var newArticle = {
           title: document.getElementById('title').value,
           text: document.getElementById('text').value,
           author: document.getElementById('author').value,
           photo: document.getElementById('photo').value
       }
        console.log(newArticle)
        var options = {
            method: "POST",
            url: '/article/create/',
            async: true,
            dataType: "json",
            body: newArticle
        };
        
       
        blog.Utils.sendRequest(options, function (error, data){
            console.log(data)
        })
        //     if (error) throw handlerError(error);
    }


    function init() {
        var route = window.location.pathname.match(/\/[a-z]+/i);

        if (!route) {
            window.location = 'http://localhost:8000/blog';
        }

        switch (route[0]) {
            case '/blog':
                renderArticles();
                break;
            case '/about':
                renderAbout();
                break;
            case '/contacts':
                renderContact();
                break;
            case '/articles':
                var id = route.input.match(/[0-9]+/);
                renderArticleById(id);
                break;
            case '/newarticle':
                renderNewArticle();
                break;
            default:
                window.location = 'http://localhost:8000/blog';
        }
    }

    init();


})();
