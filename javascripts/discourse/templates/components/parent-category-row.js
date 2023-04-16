if ('define' in window) {
define("discourse/theme-31/discourse/templates/components/parent-category-row", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#unless isHidden}}
    {{plugin-outlet name="category-list-above-each-category" connectorTagName="" tagName="" args=(hash category=category)}}
    <div data-category-id={{category.id}} data-notification-level={{category.notificationLevelString}} style="border-color: {{category.color}}" class="{{if category.description_excerpt "has-description" "no-description"}} {{if category.uploaded_logo.url "has-logo" "no-logo"}} category category-box category-box-{{category.slug}}">
      <div class="category-box-inner {{if isMuted "muted"}} {{if noCategoryStyle "no-category-style"}}" style={{unless noCategoryStyle (border-color category.color)}}>
        
        <div class="category-logo">
          <div class="logo aspect-image" style="--aspect-ratio: 1;">
            <img src="https://aws1.discourse-cdn.com/business7/uploads/figma3/original/1X/c7b941a12b6a8f5cbce4a3003ce17cd48da5af7a.png" width="320" height="320" alt="">
          </div>
        </div>
  
        <div class="category-details">
          <div class="category-box-heading">
            <a class="parent-box-link" href="{{category.url}}">
              <h3>
                <div class="category-text-title">
                  {{category-title-before category=category}}
                  {{#if category.read_restricted}}
                    {{d-icon lockIcon}}
                  {{/if}}
                  <span class="category-name">{{dir-span category.name}}</span>
                </div>
                {{#if category.uploaded_logo.url}}
                  {{cdn-img
                    src=category.uploaded_logo.url
                    class="category-logo"
                    width=category.uploaded_logo.width
                    height=category.uploaded_logo.height}}
                {{/if}}
              </h3>
              {{#if category.description_excerpt}}
                <div class="category-description">
                  {{dir-span category.description_excerpt}}
                </div>
              {{/if}}
              {{#if category.isGrandParent}}
                {{#each category.subcategories as |subcategory|}}
                  {{sub-category-row category=subcategory listType=listType}}
                {{/each}}
              {{else if category.subcategories}}
                <div class="subcategories">
                  {{#each category.subcategories as |subcategory|}}
                    {{sub-category-item category=subcategory listType=listType}}
                  {{/each}}
                </div>
              {{/if}}
            </a>
          </div>
        </div>
      </div>
    </div>
  {{/unless}}
  */
  {
    "id": null,
    "block": "[[[41,[51,[33,1]],[[[1,\"  \"],[1,[28,[35,2],null,[[\"name\",\"connectorTagName\",\"tagName\",\"args\"],[\"category-list-above-each-category\",\"\",\"\",[28,[37,3],null,[[\"category\"],[[33,4]]]]]]]],[1,\"\\n  \"],[10,0],[15,\"data-category-id\",[33,4,[\"id\"]]],[15,\"data-notification-level\",[33,4,[\"notificationLevelString\"]]],[15,5,[29,[\"border-color: \",[33,4,[\"color\"]]]]],[15,0,[29,[[52,[33,4,[\"description_excerpt\"]],\"has-description\",\"no-description\"],\" \",[52,[33,4,[\"uploaded_logo\",\"url\"]],\"has-logo\",\"no-logo\"],\" category category-box category-box-\",[33,4,[\"slug\"]]]]],[12],[1,\"\\n    \"],[10,0],[15,0,[29,[\"category-box-inner \",[52,[33,6],\"muted\"],\" \",[52,[33,7],\"no-category-style\"]]]],[15,5,[52,[51,[33,7]],[28,[37,8],[[33,4,[\"color\"]]],null]]],[12],[1,\"\\n      \\n      \"],[10,0],[14,0,\"category-logo\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"logo aspect-image\"],[14,5,\"--aspect-ratio: 1;\"],[12],[1,\"\\n          \"],[10,\"img\"],[14,\"src\",\"https://aws1.discourse-cdn.com/business7/uploads/figma3/original/1X/c7b941a12b6a8f5cbce4a3003ce17cd48da5af7a.png\"],[14,\"width\",\"320\"],[14,\"height\",\"320\"],[14,\"alt\",\"\"],[12],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"category-details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"category-box-heading\"],[12],[1,\"\\n          \"],[10,3],[14,0,\"parent-box-link\"],[15,6,[29,[[33,4,[\"url\"]]]]],[12],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"category-text-title\"],[12],[1,\"\\n                \"],[1,[28,[35,9],null,[[\"category\"],[[33,4]]]]],[1,\"\\n\"],[41,[33,4,[\"read_restricted\"]],[[[1,\"                  \"],[1,[28,[35,10],[[33,11]],null]],[1,\"\\n\"]],[]],null],[1,\"                \"],[10,1],[14,0,\"category-name\"],[12],[1,[28,[35,12],[[33,4,[\"name\"]]],null]],[13],[1,\"\\n              \"],[13],[1,\"\\n\"],[41,[33,4,[\"uploaded_logo\",\"url\"]],[[[1,\"                \"],[1,[28,[35,13],null,[[\"src\",\"class\",\"width\",\"height\"],[[33,4,[\"uploaded_logo\",\"url\"]],\"category-logo\",[33,4,[\"uploaded_logo\",\"width\"]],[33,4,[\"uploaded_logo\",\"height\"]]]]]],[1,\"\\n\"]],[]],null],[1,\"            \"],[13],[1,\"\\n\"],[41,[33,4,[\"description_excerpt\"]],[[[1,\"              \"],[10,0],[14,0,\"category-description\"],[12],[1,\"\\n                \"],[1,[28,[35,12],[[33,4,[\"description_excerpt\"]]],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[41,[33,4,[\"isGrandParent\"]],[[[42,[28,[37,15],[[28,[37,15],[[33,4,[\"subcategories\"]]],null]],null],null,[[[1,\"                \"],[1,[28,[35,16],null,[[\"category\",\"listType\"],[[30,1],[33,17]]]]],[1,\"\\n\"]],[1]],null]],[]],[[[41,[33,4,[\"subcategories\"]],[[[1,\"              \"],[10,0],[14,0,\"subcategories\"],[12],[1,\"\\n\"],[42,[28,[37,15],[[28,[37,15],[[33,4,[\"subcategories\"]]],null]],null],null,[[[1,\"                  \"],[1,[28,[35,18],null,[[\"category\",\"listType\"],[[30,2],[33,17]]]]],[1,\"\\n\"]],[2]],null],[1,\"              \"],[13],[1,\"\\n            \"]],[]],null]],[]]],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]],null]],[\"subcategory\",\"subcategory\"],false,[\"unless\",\"isHidden\",\"plugin-outlet\",\"hash\",\"category\",\"if\",\"isMuted\",\"noCategoryStyle\",\"border-color\",\"category-title-before\",\"d-icon\",\"lockIcon\",\"dir-span\",\"cdn-img\",\"each\",\"-track-array\",\"sub-category-row\",\"listType\",\"sub-category-item\"]]",
    "moduleName": "discourse/theme-31/discourse/templates/components/parent-category-row",
    "isStrictMode": false
  });
  _exports.default = _default;
});
}
