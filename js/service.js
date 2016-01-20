blog.service('myblog', function($http, $q, $log, $firebaseArray){
    var self = this;
    self.blog_array=[
        {
        'title': "coffee",
            'src': "images/morning.jpg",
        'summary': "I love coffee Lorem full of life ,Lorem Ipsum has been the indusy"
        },
        {
        'title': "puppies",
            'src': "images/dog.jpg",
        'summary': "Snuggles with publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
        {
            'title': "Have Fun",
            'src': "images/girl.jpeg",
            'summary': "Snuggles and fluffy text ever type specimen book.  leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'title': "Bubbles",
            'src': "images/drink.jpg",
            'summary': "Snuggles and fluffy full of life ,Lorem Ipsumr since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },  {
            'title': "Nap time",
            'src': "images/sleep.jpg",
            'summary': "Snuggles and typesetting. publishing software like Aldus PageMaker including versions of Lorem typesetting.ncluding versions of Lorem Ipsum."
        },  {
            'title': "Taste",
            'src': "images/yum.jpg",
            'summary': "t to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'title': "Ready to Work",
            'src': "images/desk.jpeg",
            'summary': "Snuggles and flu tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            'title': "Mmmmmmm",
            'src': "images/strawberries.jpg",
            'summary': "Snuggles and  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }

    ];
    self.blogs = [{
        "-K8REizSZ3bikH_pWnV9" : {
            "summary" : "Come on now lets get this thing working!",
            "title" : "Adia's Blog"
        },
        "user1" : {
            "image" : "images/girl.jpeg",
            "summary" : "Puppies are the best! Soo snuggly and warm. They are the best. I want one or maybe 10.",
            "title" : "Have Fun"
        },
        "user2" : {
            "image" : "images/strawberries.jpg",
            "summary" : "Who doesnt love cookies? They are so delicious great with milk. ",
            "title" : "Delicious"
        },
        "user3" : {
            "image" : "images/desk.jpeg",
            "summary" : "How much can one person love coffee? Oh I think a whole lot more than one might think!",
            "title" : "coffee, then Work"
        },
        "user4" : {
            "image" : "images/morning.jpg",
            "summary" : "Pancetta pig rump tenderloin. Porchetta bresaola biltong ham tri-tip t-bone flank tenderloin turducken alcatra pork belly. Shoulder",
            "title" : "Coffee"
        },
        "user5" : {
            "image" : "images/dog.jpg",
            "summary" : "beef pork loin flank biltong",
            "title" : "Doggie"
        }
    }];
    var blogRef = new Firebase("https://adiasblog.firebaseio.com/users");
    self.blogs = $firebaseArray(blogRef);
    var query = blogRef.orderByChild("timestamp").limitToLast(10);
    this.filteredblogs = $firebaseArray(query);

    self.createBlog = function(object){
        self.blogs.push(object);
        self.blogs.$add({
            title: object.title,
            summary: object.summary
        });

    }
    self.deleteBlog = function($index, object){
        self.blogs.splice($index, 1);
        console.log($index, object);
        self.blogs.$remove(object);
    }


})


