(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2qYH":function(t,s,a){"use strict";a.r(s);var e=a("A6W1"),i=a("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},n=a("KHd+"),r=null,c=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof r&&r(c);s.default=c.exports},"7qvl":function(t,s,a){},A6W1:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a("ArLL"),a("KHd+")),o=a("Kw5r"),n=o.a.config.optionMergeStrategies.computed,r={metadata:{siteName:"Sehat Selamanya"}},c=function(t){var s=t.options;s.__staticData?s.__staticData.data=r:(s.__staticData=o.a.observable({data:r}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(i.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"author"},[s("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:a("ESAu"),width:"180",height:"180",blur:"5"}}),this.showTitle?s("h1",{staticClass:"author__site-title"},[this._v("\n\t\t"+this._s(this.$static.metadata.siteName)+"\n\t")]):this._e(),s("p",{staticClass:"author__intro"},[this._v("\n\t\tSolusi Sehat Dengan Herbal Alami.\n\t")]),this._m(0)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"author__links"},[s("a",{attrs:{href:"//twitter.com/gridsome"}},[this._v("Follow on Twitter")]),s("a",{attrs:{href:"//github.com/gridsome/gridsome-starter-blog"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof c&&c(l);s.a=l.exports},AO8t:function(t,s,a){},ArLL:function(t,s,a){"use strict";var e=a("AO8t");a.n(e).a},"BA+P":function(t,s,a){"use strict";var e=a("n6yM"),i=a("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=(a("YDir"),a("KHd+")),r=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=r.exports},ESAu:function(t,s){t.exports={type:"image",mimeType:"image/jpeg",src:"/sehatselamanya.github.io/assets/static/author.e6b6009.b4ae04b0201e23f42f724a860e1f0d16.jpg",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/sehatselamanya.github.io/assets/static/author.e6b6009.b4ae04b0201e23f42f724a860e1f0d16.jpg 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-744f79d56a08abce8288100cd334b4ca'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-744f79d56a08abce8288100cd334b4ca)' width='180' height='180' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABAAEADASIAAhEBAxEB/8QAGwAAAwEBAAMAAAAAAAAAAAAAAAYHCAUCAwT/xAA/EAABAwIEAwQECA8AAAAAAAABAgMEAAUGBxESITFBUWFxkRMUMoEIIiM2dJSxshUWFyQlJzVTVGJkcqGz0f/EABkBAAIDAQAAAAAAAAAAAAAAAAQFAAIDAf/EACcRAAEDAwMEAgMBAAAAAAAAAAECAwQAESEFElETMTJBYYGRwfDh/9oADAMBAAIRAxEAPwDVNFFBIAJJAA6mpUooqeYpzRttscXHtbf4QkJ4FYVtaSf7uvu86WbPmTfbleEtLERlktOr2IaPNLalDiT2gUvc1OOhYbvc/FLXNWjIWG91z2xVpoqG2zNq8MqSZ8WJKbOmu0FtXnxH%2bKpuE8Z2rEqdkVwsywNVRneC/EdFDwq0fUY8g7UHPBq0bU40k7UKzwcUy0UUUdTCipBm1iyRJuH4tWYrJJCJBb9pxZ5NjzGvl21WZjwjxHniptIbQVauK2pGg6noO%2bo9gCzx7fil68YhvFmW5opbeyahZLqjxUfAE%2bdLtQK1hLKDbd3PApXqRcWEsINt3c8CmbBGXEG0x25N4abmXEjdtUNzbJ7AORPefdSHeNE5q3RKQAAH9AOn5uqrOcR2TT9sW76yj/tRG5SGpOalzdjOtutLS%2bUrQoKSoerq5EUHNaZabbQ1byFBT2WWW2m2beQ/jTDkbCi3G23tidHakMqUyChxIUPZV2182YOBnMNqF7w6t1uM0oLUhKjujnopJ57fs8K88ibpBgRruJ82NGK1M7fTOpRu0CtdNTVQkX2wSGHGXrtbVtOJKFpMlGhBGhHOpGjMvw0pUQFZsfYyakWKzJgoSsgKF7H2MmuZlxioYnsu9/am4RyESEjhqeix3H7dabKjmXdncsGNXFR7raX7e/vZCW5qVOLTrqj4vbwHmasdMYLi3GR1fIY/2menuuOMjq%2bQwfn5rhY8%2bZd9%2bhO/cNSDKbBloxRbZ790beU4y%2bG0ejc2DQpBqvY9%2bZN9%2bhPfcNIfweD%2bg7vr/FJ%2b4KHktpcloSsXFjQ0ppDs1tKxcWNdheU2FW0KWtuUlKRqSZB0ApMy9jYcvOKXY1rs81tLTLx9YXNKhsIKPZ29Qrt4V1c3MwWPVHrFYng8878nJfbOoQnqhJHNR5HTly58mHJ/CbmHbEqTOb2XGdotaDzbQPZR48dT491ZdNpySEMJFk5JsPxWPSZclJbYQLJyo2H0P79UgYOteE8Q4hcs8i0zoMhCV7SqcV7lIOhTptHTU%2b6n78kmF/3Uv6waSc2rDMw1ihnFFn3IZddDilJHBp7v7lfbqOtUzAuNLfiu3pUytLM9Cfloqj8ZJ7U9qe/zrkVpneph9I3DtgZFciMsdRUd9A3A4wMipKi0xLFnNAt0BKhHaktbd6tx4o1PH31oSoRfD%2bv%2bMP6lj/WKu9b6ckJLoHbcaJ0tAQXUpFhuNcPHLTj2Db20yhTjq4bqUoQNSolJ4AVn6wYXxvKiOwLfEuESE%2brc6HT6BCjppqddCRp041p2it5MJMhYUokW4reVBTJWFqURbiptl/ldDw%2b83Ouq0TrijigBPyTJ7Ug8z3n3CqTRRW7LKGU7UCwohlhthOxsWFembFYnRXY0tpD0d1JQttY1CgehqL4pyinQphnYQlEhJ3JYW5scbP8AIvr79D3mrdRVH4rcgWWPv3VJERqSLLGefdZyw3Z8TjMazzL/AALiXRJR6SQ62SNANASocOXWtG0UVyLGEcEA3ub5qsSIIwIBJub5r//Z' /%3e%3c/svg%3e"}},GsXb:function(t,s,a){"use strict";var e=a("7qvl");a.n(e).a},NAO6:function(t,s,a){},PpWc:function(t,s,a){"use strict";var e={props:["post"]},i=(a("GsXb"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},YDir:function(t,s,a){"use strict";var e=a("NAO6");a.n(e).a},YIUa:function(t,s,a){"use strict";var e=a("hpwU");a.n(e).a},hpwU:function(t,s,a){},n6yM:function(t,s,a){"use strict";var e={props:["post"]},i=(a("YIUa"),a("KHd+")),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports}}]);