angular.module('fluidVids', [])

.config(function($sceDelegateProvider) {
    // The whitelist set specific ressources origin to be allowed
    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self',

        // Allow from specific server. 
        // * = one value 
        // ** = any number of value
        // 'http://srv*.assets.example.com/**',
        // Allow from everywhere
        '**'
    ]);

    // The blacklist set specific ressources origin to be denied
    $sceDelegateProvider.resourceUrlBlacklist([]);
})

.directive('fluidvids', function($sce) {
    return {
        // ‘A’ – Attribute (You want to use your directive as <div rating>)
        // ‘E’ – Element (Use it as <rating>) Olders browser doesn't support custom tag elements
        // ‘C’ – Class. (Use it like <div class=”rating”>)
        // ‘M’ – Comment (Use it like <!– directive: rating –>
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            video: '@'
        },
        template: '<div class="fluidvids">' +
            '<iframe ng-src="{{ video }}" allowfullscreen frameborder="0"></iframe>' +
            '</div>',
        link: function($scope, element, attrs) {
            var ratio = (attrs.height / attrs.width) * 100;
            element[0].style.paddingTop = ratio + '%';
        }
    }
});