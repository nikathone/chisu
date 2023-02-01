# CHISU Theme

## ⚙️ Requirements

### For CSS development

- [node ^v16.16.0](https://nodejs.org/en/download/)
- [npm ^8.11.0](https://nodejs.org/en/download/)

### For Drupal usage

[Bootstrap barrio](https://www.drupal.org/project/bootstrap_barrio) should be
pulled in by composer.

- In the site main `composer.json` add the code below, under `repositories`
```json
{
  "type": "vcs",
   "url": "https://github.com/nikathone/chisu.git"
}
```
- Still in the main site `composer.json` under `scripts` in the
`post-install-cmd` add the following snippet to ensure that the boostrap js is
placed under libraries:
```json
[
  "mkdir -p web/libraries/bootstrap",
  "cp -R vendor/twbs/bootstrap/dist web/libraries/bootstrap"
]
```
- Then run `composer require drupal/chisu`

## 🚀 Getting started

### Install dependencies when extending the theme

- `npm install`
- `lando composer install`

### Development

- `npm run build`: To build the css artifacts.
- `npm run watch`: To start developing and building the artifacts right away.
- Push the changes to this repo
