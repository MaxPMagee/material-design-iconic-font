module.exports = {
    'prod': {
        src: 'svg/2.2/*/*.svg',
        dest: 'dist/fonts',
        destCss: 'less/temp',
        options: {
            font: 'Material-Design-Iconic-Font',
            types: 'eot,ttf,svg,woff,woff2',
            autoHint: false,
            syntax: 'bootstrap',
            stylesheet: 'less',
            centerHorizontally : true,
            normalize: true,
            template: 'grunt/templates/glyphs.css',
            destHtml: 'dist',
            htmlDemoTemplate: 'grunt/templates/glyphs.html',
            templateOptions: {
                baseClass:   'zmdi',
                classPrefix: 'zmdi-',
                mixinPrefix: 'zmdi-'
            }
        }
    },
    'dev': {
        src: 'svg/2.2/*/*.svg',
        dest: 'test/fonts',
        destCss: 'less/temp',
        options: {
            font: 'Material-Design-Iconic-Font',
            types: 'ttf,woff',
            autoHint: false,
            syntax: 'bootstrap',
            styles: 'icon',
            stylesheet: 'less',
            centerHorizontally : true,
            normalize: true,
            template: 'grunt/templates/glyphs.css',
            destHtml: 'test',
            htmlDemoTemplate: 'grunt/templates/glyphs.html',
            templateOptions: {
                baseClass:   'zmdi',
                classPrefix: 'zmdi-',
                mixinPrefix: 'zmdi-'
            }
        }
    }
};
