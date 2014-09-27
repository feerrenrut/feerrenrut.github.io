# A blog for Reef Turner

A Jekyll based blog, using a them based on  [pixyll.com](http://www.pixyll.com)
modified and dubbed pixyll-paper

## Getting Started

If you're completely new to Jekyll, I recommend checking out the documentation
at <http://jekyllrb.com> or there's a tutorial by
[Smashing Magazine](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/).

### Installing Jekyll

If you don't have Jekyll already installed, you will need to go ahead and do
that.

```
$ gem install jekyll
```

### Fork, then clone

Fork the repo, and then clone it so you've got the code locally.

### Modify the _config.yml

The `_config.yml` located in the root directory contains all of
the configuration details for the Jekyll site. You can modify this to make it
your own.

In particular please remove the line `google_analytics:`

### Jekyll Serve

Then, start the Jekyll Server. I always like to give the `--watch` option so it
updates the generated HTML when I make changes.

```
$ jekyll serve --watch
```

Now you can navigate to `localhost:4000` in your browser to see the site.

### Using Github Pages

You can host your Jekyll site for free with Github Pages.
[Click here](https://pages.github.com/) for more information.

#### A configuration tweak if you're using a gh-pages sub-folder

In addition to your github-username.github.io repo that maps to the root url,
you can serve up sites by using a gh-pages branch for other repos so they're
available at github-username.github.io/repo-name.

This will require you to modify the `_config.yml`:

```yml
# Site settings
title: Repo Name
email: your_email@example.com
author: your name
description: "Repo description"
baseurl: "/repo-name"
url: "http://github-username.github.io"

# Build settings
markdown: kramdown
permalink: pretty
paginate: 3
```

This will ensure that the the correct relative path is constructed for your
assets and posts. Also, in order to run the project locally, you will need to
specify the blank string for the baseurl: `$ jekyll serve --baseurl ''`.

##### If you don't want the header to link back to the root url

You will also need to tweak the header include `/{{ site.baseurl }}`:

```html
<header class="site-header px2 px-responsive">
  <div class="mt2 wrap">
    <div class="measure">
      <a href="{{ site.url }}/{{ site.baseurl }}">{{ site.title }}</a>
      <nav class="site-nav right">
        {% include navigation.html %}
      </nav>
    </div>
  </div>
</header>
```

A relevant Jekyll Github Issue: <https://github.com/jekyll/jekyll/issues/332>

### Page Animation

If you would like to add a [fade-in-down effect](http://daneden.github.io/animate.css/), you can add `animated: true` to your `_config.yml`.

### Put in a Pixyll Plug

Since this work is based on Pixyll, please also give credit to <http://pixyll.com>
or <http://johnotander.com> somewhere.

### Enjoy

I hope you enjoy using Pixyll. If you encounter any issues, please feel free to
 let me know by creating an [issue](https://github.com/johnotander/pixyll/issues).
 I'd love to help.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Thanks to the following:

* [BASSCSS](http://basscss.com)
* [Jekyll](http://jekyllrb.com)
* [Refills](http://refills.bourbon.io/)
* [Solarized](http://ethanschoonover.com/solarized)
* [Animate.css](http://daneden.github.io/animate.css/)
