/**
 * Created by Christophe on 31/01/2017.
 */

(function (global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            src: "src",
            'rxjs': 'npm:rxjs',
            'blip-framework': 'npm:blip-framework/blip-framework.umd.js'
        },
        packages: {
            src: {
                main: '../compiled/main.js',
                defaultExtension: 'js'
            },
            //'blip-framework': { defaultExtension: 'js', main: 'bundles/blip-framework.umd' },
        }
    })
})(this);