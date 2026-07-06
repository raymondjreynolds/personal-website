# Personal Website

A static personal site template designed for [GitHub Pages](https://docs.github.com/en/pages). No build step required.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Landing page with tabbed previews |
| Resume | `resume.html` | Experience, education, skills |
| Cookbook | `cookbook.html` | Recipe cards and template |
| Cars | `cars.html` | Garage notes and project log |

## Local preview

Open `index.html` in a browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (for example `personal-website`).
2. Push this project:

   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/personal-website.git
   git push -u origin main
   ```

3. In the repo on GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**, then save.

Your site will be published at:

`https://YOUR_USERNAME.github.io/personal-website/`

### User site (optional)

To use `https://YOUR_USERNAME.github.io/` without a repo path, name the repository `YOUR_USERNAME.github.io` and deploy the same way.

## Customization

- Replace **Your Name** and placeholder copy in each HTML file.
- Edit styles in `css/styles.css`.
- Tab behavior on the home page lives in `js/main.js`.
- Add images under an `assets/` folder and reference them with relative paths.

## GitHub Pages notes

- All asset paths are **relative**, so the site works for both project sites and user sites.
- `.nojekyll` disables Jekyll processing so static files are served as-is.
- Only static HTML, CSS, and JavaScript are used — fully compatible with GitHub Pages.
