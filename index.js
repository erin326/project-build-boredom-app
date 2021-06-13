document.addEventListener('DOMContentLoaded', function() {

    const randomButton = document.getElementById('random');
    randomButton.addEventListener('click', renderRandomActivity);

//fetch random activities

    function renderRandomActivity() {
        fetch("http://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(object => {
            randomize(object);
            console.log(object);
        });
    }

    //append random activites to list
        function randomize(activities) {
            const randomActivityList = document.getElementById('random-activity-list');

            const li = document.createElement('li');

            li.innerHTML = activities.activity;

            randomActivityList.appendChild(li);
            
        }

        //create type buttons and append to their specified lists

        const educationButton = document.getElementById('education-button');

        educationButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=education")
            .then(response => response.json())
            .then(object => {
                const educationList = document.getElementById('education-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                educationList.appendChild(li);

            })
        })

        const relaxationButton = document.getElementById('relaxation-button');

        
        relaxationButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=relaxation")
            .then(response => response.json())
            .then(object => {
                const relaxationList = document.getElementById('relaxation-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                relaxationList.appendChild(li);

            })
        })

        const socialButton = document.getElementById('social-button');

        
        socialButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=social")
            .then(response => response.json())
            .then(object => {
                const socialList = document.getElementById('social-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                socialList.appendChild(li);

            })
        })

        const recreationalButton = document.getElementById('recreational-button');

        recreationalButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=recreational")
            .then(response => response.json())
            .then(object => {
                const recreationalList = document.getElementById('recreational-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                recreationalList.appendChild(li);

            })
        })

        const diyButton = document.getElementById('diy-button');

        diyButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=diy")
            .then(response => response.json())
            .then(object => {
                const diyList = document.getElementById('diy-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                diyList.appendChild(li);

            })
        })

        const charityButton = document.getElementById('charity-button');

        charityButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=charity")
            .then(response => response.json())
            .then(object => {
                const charityList = document.getElementById('charity-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                charityList.appendChild(li);

            })
        })

        const cookingButton = document.getElementById('cooking-button');

        cookingButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=cooking")
            .then(response => response.json())
            .then(object => {
                const cookingList = document.getElementById('cooking-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                cookingList.appendChild(li);

            })
        })

        const musicButton = document.getElementById('music-button');

        musicButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=music")
            .then(response => response.json())
            .then(object => {
                const musicList = document.getElementById('music-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                musicList.appendChild(li);

            })
        })

        const busyworkButton = document.getElementById('busywork-button');

        busyworkButton.addEventListener('click', function() {
            fetch("http://www.boredapi.com/api/activity?type=busywork")
            .then(response => response.json())
            .then(object => {
                const busyworkList = document.getElementById('busywork-list');
                const li = document.createElement('li');

                li.innerHTML = object.activity;
                busyworkList.appendChild(li);

            })
        })

        //get activities with a specified price range, using the user's input

        const priceRangeInput = document.querySelectorAll('.input-price');

        const submitButton = document.querySelector('.submit');

        submitButton.addEventListener('click', function(event) {
            console.log(1);
            event.preventDefault();
            let min = priceRangeInput[0].value;
            let max = priceRangeInput[1].value;

           
           fetch(`http://www.boredapi.com/api/activity?minprice=${min}&maxprice=${max}`)
           .then(response => response.json())
           .then((object) => {
               const priceRangedList= document.getElementById('price-ranged-activities');
               const li = document.createElement('li');

               const price = object.price; 
               li.innerHTML = `${object.activity}. Price: ${price}`;
               priceRangedList.appendChild(li);

            //    event.preventDefault();
            })

        }); 

      

        


    }) 

     

