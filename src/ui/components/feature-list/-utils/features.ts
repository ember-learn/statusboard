interface IResource {
    type: string;
    name: string;
    url: string;
}

interface IChampion {
    image: string;
    name: string;
    url: string;
}

interface IFeature {
    name: string;
    description: string;
    icon: string;
    statusText: string;
    status: string;
    availability: string;
    resources: Array<IResource>;
    champions: Array<IChampion>;
}

const Features: Array<IFeature> = [
    {
        "name": "JavaScript Modules API",
        "description": `
When Ember was first designed,
JavaScript did not have the concept of modules and it was the style du jour for front-end code to rely on globals.
This is how the framework ended up with the \`Ember\` namespace,
such as \`Ember.Controller\` or \`Ember.Route\`,
and ultimately \`import Ember from 'Ember'\` when the framework started adopting the then upcoming ES Modules specification.

Now that modules are common placed, the above import of the \`Ember\` namespace feels outdated and monolithic.
[RFC 176](https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md) was introduced to address that,
providing a set of heuristics to help rationalize the surface of Ember's public API in a predictable manner,
as well as a new modules API.

Now, instead of doing the following when creating a controller:

\`\`\`
import Ember from 'ember';

export default Ember.Controller.extend({
});
\`\`\`

You will be able to do:

\`\`\`
import Controller from '@ember/controller';

export default Controller.extend({
});
\`\`\`

You can find the most up-to-date and complete mappings between the previous API and the new modules api at
the [ember-rfc176-data](https://github.com/ember-cli/ember-rfc176-data) repository.
We also provide an [ember-modules-codemod](https://github.com/tomdale/ember-modules-codemod) so that you can easily migrate your project.
`,
        "icon": "http://placehold.it/60x60",
        "statusText": "Shipped",
        "status": "shipped",
        "availability": "Available in Ember CLI Babel v6.6.0 and up",
        "resources": [
            {
                type: "rfc",
                name: "RFC 176",
                url: "https://github.com/emberjs/rfcs/blob/master/text/0176-javascript-module-api.md",
            },
            {
                type: "repo",
                name: "Ember RFC 176 Data",
                url: "https://github.com/ember-cli/ember-rfc176-data",
            },
            {
                type: "repo",
                name: "Ember Modules Codemod",
                url: "https://github.com/tomdale/ember-modules-codemod",
            },            
        ],
        "champions": [
            {
                name: "Tom Dale",
                image: "https://avatars0.githubusercontent.com/u/90888?v=4&s=460",
                url: "https://github.com/tomdale",
            },
            {
                name: "Ricardo Mendes",
                image: "https://avatars2.githubusercontent.com/u/32344?v=4&s=460",
                url: "https://github.com/locks",
            },
        ],
    },
    {
        "name": "Router Service",
        "description": `
`,
        "icon": "http://placehold.it/60x60",
        "statusText": "Partially shipped",
        "status": "shipped",
        "availability": "Available in Ember 2.15 and up",
        "resources": [
            {
                type: "rfc",
                name: "Router Service",
                url: "https://github.com/emberjs/rfcs/blob/master/text/0095-router-service.md",
            },
            {
                type: "pull-request",
                name: "Router Service MVP",
                url: "https://github.com/emberjs/ember.js/pull/14805",
            },
        ],
        "champions": [
            {
                name: "Robert Jackson",
                image: "https://avatars2.githubusercontent.com/u/12637?v=4&s=460",
                url: "https://github.com/rwjblue"
            },
            {
                name: "Edward Faulkner",
                image: "https://avatars0.githubusercontent.com/u/319282?v=4&s=460",
                url: "https://github.com/ef4"
            },
        ],
    },
    // {
    //     "name": "Service Worker",
    //     "description": "Service Workers allow you to register a script that runs in the background, allowing your app to unlock capabilities like push notifications, background sync, and more.",
    //     "icon": "http://placehold.it/60x60",
    //     "statusText": "Under Consideration",
    //     "status": "under-consideration",
    //     "availability": null,
    //     "resources": null,
    //     "champions": null,
    // },
    // {
    //     "name": "Glimmer Components",
    //     "description": "A ground-up rethink of what modern UI components should be, leveraging the lastest JavaScript features, incremental computation, unidirectional data flow and the declarative power of HTML.",
    //     "icon": "http://placehold.it/60x60",
    //     "statusText": "In Development",
    //     "status": "in-development",
    //     "availability": null,
    //     "resources": null,
    //     "champions": null
    // },
    // {
    //     "name": "Svelte Templates",
    //     "description": "Leveraging the Glimmer VM bytecode format, this feature reduces the over-the-wire cost of template files by up to 80%",
    //     "icon": "http://placehold.it/60x60",
    //     "statusText": "Shipped",
    //     "status": "shipped",
    //     "availability": "Available in Ember.js 2.10 and up.",
    //     "resources": [
    //         {
    //             "type": "rfc",
    //             "name": "Glimmer Template Compiler",
    //             "url": "#github-somewherelse"
    //         },
    //         {
    //             "type": "pull-request",
    //             "name": "#172: Implement awesome feature",
    //             "url": "#github-somewhere"
    //         }
    //     ],
    //     "champions": [
    //         {
    //             "name": "Godfrey Chan",
    //             "image": "http://placehold.it/30x30?text=GC",
    //             "url": "#"
    //         },
    //         {
    //             "name": "Yehuda Katz",
    //             "image": "http://placehold.it/30x30?text=YK",
    //             "url": "#"
    //         }
    //     ]
    // },
    // {
    //     "name": "",
    //     "description": "",
    //     "icon": "http://placehold.it/60x60",
    //     "statusText": "",
    //     "status": "",
    //     "availability": null,
    //     "resources": null,
    //     "champions": null,
    // },
]

export default Features;