---
title: テーマ選択画面で GitHub Pages サイトにテーマを追加する
intro: 'サイトの見た目をカスタマイズするため、{% data variables.product.prodname_pages %} サイトにテーマを追加できます。'
redirect_from:
  - /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
  - /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Pagesサイトへのテーマの追加
permissions: 'People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.'
---

## テーマ選択画面について

{% ifversion pages-custom-workflow %}

{% note %}

**Note**: The Jekyll theme chooser is not supported for {% data variables.product.prodname_pages %} sites that are published with a custom {% data variables.product.prodname_actions %} workflow. If you build your site with Jekyll and publish your site with a custom {% data variables.product.prodname_actions %} workflow, you can add a theme by editing the `_config.yml` file. For more information, see "[Adding a theme to your GitHub Pages site using Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)."

{% endnote %}

{% endif %}

テーマ選択画面は、リポジトリに Jekyll テーマを追加するためのものです。 Jekyll に関する詳しい情報については、「[{% data variables.product.prodname_pages %} と Jekyll](/articles/about-github-pages-and-jekyll)」を参照してください。

テーマ選択画面の動作は、リポジトリがパブリックかプライベートかにより異なります。
  - {% data variables.product.prodname_pages %} がリポジトリに対して既に有効である場合、テーマ選択画面は、現在の公開元にテーマを追加します。
  - リポジトリがパブリックで、{% data variables.product.prodname_pages %} がリポジトリに対して無効である場合、テーマ選択画面を使用することで {% data variables.product.prodname_pages %} が有効となり、デフォルトブランチを公開元として設定します。
  - リポジトリがプライベートで、{% data variables.product.prodname_pages %}がリポジトリに対して無効である場合、テーマ選択画面を使用する前に、公開元を設定して {% data variables.product.prodname_pages %} を有効にする必要があります。

公開元に関する詳しい情報については、「[{% data variables.product.prodname_pages %} について](/articles/about-github-pages#publishing-sources-for-github-pages-sites)」を参照してください。

Jekyll テーマをリポジトリに手動で追加したことがある場合には、それらのファイルが、テーマ選択画面を使用した後も適用されることがあります。 競合を避けるため、テーマ選択画面を使用する前に、手動で追加したテーマフォルダおよびファイルをすべて削除してください。 詳しい情報については、「[Jekyll を使用して {% data variables.product.prodname_pages %} サイトにテーマを追加する](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)」を参照してください。

## テーマ選択画面でテーマを追加する

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. [{% data variables.product.prodname_pages %}] で、[**Choose a theme**] または [**Change theme**] をクリックします。 ![[Choose a theme] ボタン](/assets/images/help/pages/choose-a-theme.png)
4. ページ上部の、選択したいテーマをクリックし、[**Select theme**] をクリックします。 ![テーマのオプションおよび [Select theme] ボタン](/assets/images/help/pages/select-theme.png)
5. サイトの *README.md* ファイルを編集するようプロンプトが表示される場合があります。
   - ファイルを後で編集する場合、[**Cancel**] をクリックします。 ![ファイルを編集する際の [Cancel] リンク](/assets/images/help/pages/cancel-edit.png)
   - すぐにファイルを編集するには、「[Editing files（ファイルの編集）](/repositories/working-with-files/managing-files/editing-files)」を参照してください。

選択したテーマは、リポジトリの Markdown ファイルに自動的に適用されます。 テーマをリポジトリの HTML ファイルに適用するには、各ファイルのレイアウトを指定する YAML front matter を追加する必要があります。 詳しい情報については、Jekyll サイトの「[Front Matter](https://jekyllrb.com/docs/front-matter/)」を参照してください。

## 参考リンク

- Jekyll サイトの「[Themes](https://jekyllrb.com/docs/themes/)」
