# slush-reveal [![Build Status](https://secure.travis-ci.org/arvindr21/slush-reveal.png?branch=master)](https://travis-ci.org/arvindr21/slush-reveal) [![NPM version](https://badge-me.herokuapp.com/api/npm/slush-reveal.png)](http://badges.enytc.com/for/npm/slush-reveal) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/arvindr21/slush-reveal/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![NPM](https://nodei.co/npm/slush-reveal.png?downloads=true&stars=true)](https://nodei.co/npm/slush-reveal/)

> A Slush Generator for creating Revealjs presentation.

## Getting Started

### Installation

Install `slush-reveal` globally:

```bash
$ npm install -g slush-reveal
```

Remember to install `gulp` and `slush` globally as well, if you haven't already:

```bash
$ npm install -g gulp slush
```

### Usage

Create a new folder for your project:

```bash
$ mkdir my-slush-reveal
```

Run the generator from within the new folder:

```bash
$ cd my-slush-reveal && slush reveal
```

You can pick from a
- A Basic Setup : `"I would like to use the default options and build a presentation"`
- A Dev Setup : `"I would like to modify the source & theme and build a presentation"`

## Usage
### Basic setup

You can launch `index.html` directly to view the presentation.

### Dev setup

You can launcg the app by running
```bash
$ gulp serve
```

To build the theme files from SASS, you can run
```bash
$ gulp themes
```

To zip the presentation for deployment run
```bash
$ gulp package
```

## TODOS
- [ ] add sub-gens to add various types of slides
- [ ] add sub-gen to export as PDF
- [ ] add sub-gen to push the presentation to Github pages

## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/klei/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/arvindr21/slush-reveal/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/arvindr21/slush-reveal/issues).

## License 

The MIT License

Copyright (c) 2014, Arvind Ravulavaru

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

