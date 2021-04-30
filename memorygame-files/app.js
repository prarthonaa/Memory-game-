document.addEventListener('DOMContentLoaded', () =>{
    
    let cardArray = [];

    // create three card arrays for 8, 10, and 12 card counts 
    const cardArrayEight = [
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        }
    ];

    const cardArrayTen = [
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png' 
        },
        {
            name: '10',
            img: 'images/10.png' 
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png'
        },
        {
            name: '10',
            img: 'images/10.png'
        }
    ];

    const cardArrayTwelve = [
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png' 
        },
        {
            name: '10',
            img: 'images/10.png' 
        },
        {
            name: '11',
            img: 'images/11.png' 
        },
        {
            name: '12',
            img: 'images/12.png' 
        },
        {
            name: '1',
            img: 'images/1.png'
        },
        {
            name: '2',
            img: 'images/2.png'
        },
        {
            name: '3',
            img: 'images/3.png'
        },
        {
            name: '4',
            img: 'images/4.png'
        },
        {
            name: '5',
            img: 'images/5.png'
        },
        {
            name: '6',
            img: 'images/6.png'
        },
        {
            name: '7',
            img: 'images/7.png'
        },
        {
            name: '8',
            img: 'images/8.png'
        },
        {
            name: '9',
            img: 'images/9.png'
        },
        {
            name: '10',
            img: 'images/10.png'
        },
        {
            name: '11',
            img: 'images/11.png'
        },
        {
            name: '12',
            img: 'images/12.png'
        }
    ];

    //start game
    const startGame = ()=>{
        // query selections to 
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const grid = document.querySelector('.grid');
        const cardChoices = document.querySelector('.card-choices')
        const scoreBoard = document.querySelector('.playerScore');
        const options = document.querySelectorAll('.options button'); 

        /** when '.intro' is clicked which has the 'Lets Play' button, 
        the intro screen fades out and the card choices screen pop up showing
        the possible card choices for the user as three buttons */ 
        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            cardChoices.classList.add('fadeIn');
            
        });

        options.forEach(option =>{
            // add an event listener to every card option
            option.addEventListener('click', function(){  
                /** Grab the inner text of the button that is clicked */              
                const playerChoice = this.innerText;
                cardChoices.classList.remove('fadeIn');
                scoreBoard.classList.add('fadeIn'); 
                grid.classList.add('fadeIn');   
                // load arrays depending on card choice and display            
                if(playerChoice==='eight'){
                   cardArray = cardArrayEight;
                   gamePlay();
                   //console.log(cardArray);
                   
                }
                //for 10 and 12 slight adjustments are required for the grid in order for it to fit better
                if(playerChoice==='ten'){                    
                    grid.style.width = "550px";
                    cardArray = cardArrayTen;
                    gamePlay();
                    //console.log(cardArray);
                }
                if(playerChoice==='twelve'){                    
                    grid.style.width = "665px";
                    cardArray = cardArrayTwelve;
                    gamePlay();
                    //console.log(cardArray);
                }   
              
            });
        }); 
        

    };
       
        function gamePlay(){
            // get random arrangements every time
            cardArray.sort(() => 0.5 - Math.random());
    
        const grid = document.querySelector('.grid');
        const resultDisplay = document.querySelector('#result');
        let cardsChosen = [];
        let cardsChosenId = [];
        let cardsWon = [];
    
        //create board
        function createBoard(){
            for(let i = 0; i< cardArray.length; i++){
                let card = document.createElement('img');
                //set the back of card as default for every image until clicked and flipped
                card.setAttribute('src', 'images/13.png');
                card.setAttribute('data-id', i);
                card.addEventListener('click', flipCard)
                grid.appendChild(card);
            }
        }
    
        //check for matches
        function checkForMatch(){
            let cards = document.querySelectorAll('img');
            // store the two cards picked in two variables 
            const optionOneId = cardsChosenId[0];
            const optionTwoId = cardsChosenId[1];
            const match = document.querySelector('.match');
            //compare and update scores if it is a match
            if (cardsChosen[0] === cardsChosen[1]){                                
                match.textContent = "It's a match!";                              
                               
                //make sure the cards are no longer visible and clickable
                cards[optionOneId].setAttribute('src', 'images/white.png');
                cards[optionOneId].style.pointerEvents = "none";                
                cards[optionTwoId].setAttribute('src', 'images/white.png');                
                cards[optionTwoId].style.pointerEvents = "none"; 
                // add to cardWon array 
                cardsWon.push(cardsChosen);
            }
            else{          
                match.textContent = "It's not a match!";  
                //flip card back to default card image
                cards[optionOneId].setAttribute('src', 'images/13.png');
                cards[optionTwoId].setAttribute('src', 'images/13.png');
                
            }
            //clear the arrays
            cardsChosen=[];
            cardsChosenId=[];
            resultDisplay.textContent = cardsWon.length;
            // once game is over remove game play screen 
            if(cardsWon.length === cardArray.length/2){
                const scoreBoard = document.querySelector('.playerScore');
                scoreBoard.classList.remove('fadeIn');                
                const final = document.querySelector('.congrats');
                final.classList.add('fadeIn');

            }
    
    
        }
        
        
        //flip the card
        function flipCard(){
            let cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img)
            if(cardsChosen.length === 2){
                setTimeout(checkForMatch, 1000)
            }
        }

       
        
        createBoard();
        }
    
        
    
    startGame();
    
    
});