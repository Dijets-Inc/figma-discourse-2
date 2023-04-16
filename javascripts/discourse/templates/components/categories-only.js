if ('define' in window) {
define("discourse/theme-31/discourse/templates/components/categories-only", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if categories}}
    {{#if filteredCategories}}
      <section class="category-boxes with-logos with-subcategories {{if showTopics "with-topics"}}">
          {{#each categories as |category|}}
            {{parent-category-row category=category showTopics=showTopics}}
          {{/each}}
      </section>
    {{/if}}
  
    {{#if mutedCategories}}
      <div class="muted-categories">
        <a href class="muted-categories-link" {{action "toggleShowMuted"}}>
          <h3 class="muted-categories-heading">{{i18n "categories.muted"}}</h3>
          {{#if mutedToggleIcon}}
            {{d-icon mutedToggleIcon}}
          {{/if}}
        </a>
        <section class="category-boxes with-logos with-subcategories {{if showTopics "with-topics"}} {{unless showMutedCategories "hidden"}}">
          <div>
            {{#if showTopics}}
              <div class="latest">{{i18n "categories.latest"}}</div>
            {{/if}}
          </div>
          {{#each categories as |category|}}
            {{parent-category-row category=category showTopics=showTopics listType="muted"}}
          {{/each}}
        </section>
      </div>
    {{/if}}
  {{/if}}
  
  {{plugin-outlet name="below-categories-only" tagName="" args=(hash categories=categories showTopics=showTopics)}}
  */
  {
    "id": null,
    "block": "[[[41,[33,1],[[[41,[33,2],[[[1,\"    \"],[10,\"section\"],[15,0,[29,[\"category-boxes with-logos with-subcategories \",[52,[33,3],\"with-topics\"]]]],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[33,1]],null]],null],null,[[[1,\"          \"],[1,[28,[35,6],null,[[\"category\",\"showTopics\"],[[30,1],[33,3]]]]],[1,\"\\n\"]],[1]],null],[1,\"    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[33,7],[[[1,\"    \"],[10,0],[14,0,\"muted-categories\"],[12],[1,\"\\n      \"],[11,3],[24,6,\"\"],[24,0,\"muted-categories-link\"],[4,[38,8],[[30,0],\"toggleShowMuted\"],null],[12],[1,\"\\n        \"],[10,\"h3\"],[14,0,\"muted-categories-heading\"],[12],[1,[28,[35,9],[\"categories.muted\"],null]],[13],[1,\"\\n\"],[41,[33,10],[[[1,\"          \"],[1,[28,[35,11],[[33,10]],null]],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,\"section\"],[15,0,[29,[\"category-boxes with-logos with-subcategories \",[52,[33,3],\"with-topics\"],\" \",[52,[51,[33,13]],\"hidden\"]]]],[12],[1,\"\\n        \"],[10,0],[12],[1,\"\\n\"],[41,[33,3],[[[1,\"            \"],[10,0],[14,0,\"latest\"],[12],[1,[28,[35,9],[\"categories.latest\"],null]],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[33,1]],null]],null],null,[[[1,\"          \"],[1,[28,[35,6],null,[[\"category\",\"showTopics\",\"listType\"],[[30,2],[33,3],\"muted\"]]]],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"\\n\"],[1,[28,[35,14],null,[[\"name\",\"tagName\",\"args\"],[\"below-categories-only\",\"\",[28,[37,15],null,[[\"categories\",\"showTopics\"],[[33,1],[33,3]]]]]]]]],[\"category\",\"category\"],false,[\"if\",\"categories\",\"filteredCategories\",\"showTopics\",\"each\",\"-track-array\",\"parent-category-row\",\"mutedCategories\",\"action\",\"i18n\",\"mutedToggleIcon\",\"d-icon\",\"unless\",\"showMutedCategories\",\"plugin-outlet\",\"hash\"]]",
    "moduleName": "discourse/theme-31/discourse/templates/components/categories-only",
    "isStrictMode": false
  });
  _exports.default = _default;
});
}
