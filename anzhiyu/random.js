var posts=["posts/8f6f","posts/4165","posts/4c6a","posts/468b","posts/74a0","posts/f6","posts/8835","posts/34888","posts/8451","posts/16848","posts/53903","posts/62626","posts/12396","posts/14430","posts/54911","posts/63362","posts/52674","posts/61021","posts/46178","posts/6951","posts/9619","posts/56210","posts/385","posts/22261","posts/63078","posts/61360","posts/14298","posts/17517","posts/18054","posts/11350","posts/35498","posts/61748","posts/31568","posts/53149","posts/52881","posts/45955","posts/63516","posts/15906","posts/60110","posts/7013","posts/13610","posts/30964","posts/26143","posts/58193","posts/39406","posts/6976","posts/7046","posts/28371","posts/31626","posts/52951","posts/60782","posts/39120","posts/51215","posts/61113","posts/21901","posts/9580","posts/26401","posts/55244","posts/20112","posts/a73beb66","posts/19954","posts/26328","posts/51495","posts/1421","posts/10668","posts/36101","posts/41383","posts/11339","posts/22280","posts/22571","posts/29114","posts/45786","posts/48316","posts/40304","posts/48052","posts/33995","posts/12111","posts/41908","posts/63364","posts/27533","posts/13172","posts/45410","posts/18367","posts/52026","posts/43757","posts/21011","posts/298","posts/8851","posts/3426","posts/37555","posts/10017","posts/62946","posts/8736","posts/33917","posts/30180","posts/10890","posts/51527","posts/4979","posts/55560","posts/40691","posts/43274","posts/21871","posts/39536","posts/42441","posts/6029","posts/34645","posts/621"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};