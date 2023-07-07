let score = JSON.parse(localStorage.getItem('score'));

    if(!score){
        score = {
            Wins : 0,
            Losses : 0,
            Ties : 0
        };
    }

    updateScore();

    function playGame(playerMove){
        
        const computerMove = pickComputerMove();

        let result = '';

        if(playerMove==='rock'){
            if(computerMove==='rock'){
            result = "It's a Tie!";
            }
            else if(computerMove==='paper'){
                result = 'You Lose!';
            }
            else if(computerMove==='scissors'){
                result = 'You Won!';
            }
        }

        else if(playerMove==='paper'){
            if(computerMove==='rock'){
                result = 'You Won!';
            }
            else if(computerMove==='paper'){
                result = "It's a Tie!";
            }
            else if(computerMove==='scissors'){
                result = 'You Lose!';
            }
        }
        
        else if(playerMove==='scissors'){
            if(computerMove==='rock'){
                result = 'You Lose!';
            }
            else if(computerMove==='paper'){
                result = 'You Won!';
            }
            else if(computerMove==='scissors'){
                result = "It's a Tie!";
            }
        }
        
        if(result==='You Won!'){
            score.Wins++;
        }
        else if(result==='You Lose!'){
            score.Losses++;
        }
        else if(result==="It's a Tie!"){
            score.Ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-moves')
        .innerHTML = `You 
        <img src="icon/${playerMove}-emoji.png" alt="" class="move-icon">
         <img src="icon/${computerMove}-emoji.png" alt="" class="move-icon">Computer`;

        document.querySelector('.js-result')
        .innerHTML = `${result}`;

        updateScore();
    }

    function updateScore(){
        document.querySelector('.js-score')
         .innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
    }

    function pickComputerMove(){

        const randomNum = Math.random();
        let computerMove = '';

        if(randomNum >=0 && randomNum<1/3){
            computerMove = 'rock';
        }
        else if(randomNum>=1/3 && randomNum<2/3){
            computerMove = 'paper';
        }
        else if(randomNum>=2/3 && randomNum<1){
            computerMove = 'scissors';
        }
        return computerMove;
    }