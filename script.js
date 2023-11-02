function visibleScroll(){
    var learn = document.querySelector('.learn');
    var introPosition = learn.getBoundingClientRect().top;
    var screenposition = innerHeight /2;
    
    if(introPosition < screenposition){
        learn.classList.add('intro-appear')
    }
}

    window.addEventListener('scroll',visibleScroll);


    function scrollAppear(){
        var line1 = document.querySelector('.line1')
        var introPosition = line1.getBoundingClientRect().top;
        var screenposition = innerHeight /2;
        
        if(introPosition < screenposition){
            line1.classList.add('intro-appear')
        }
    }
    
        window.addEventListener('scroll',scrollAppear);




        function slideScroll(){
            var outings = document.querySelector('.outings')
            var introPosition = outings.getBoundingClientRect().top;
            var screenposition = innerHeight /2;
            
            if(introPosition < screenposition){
                outings.classList.add('intro-appear')
            }
        }

         window.addEventListener('scroll',slideScroll);



         function textScroll(){
            var rentals = document.querySelector('.rentals')
            var introPosition = rentals.getBoundingClientRect().top;
            var screenposition = innerHeight /2;
            
            if(introPosition < screenposition){
                rentals.classList.add('intro-appear')
            }
        }

         window.addEventListener('scroll',textScroll);






         function horiScroll(){
            var quality = document.querySelector('.quality')
            var introPosition = quality.getBoundingClientRect().top;
            var screenposition = innerHeight /2;
            
            if(introPosition < screenposition){
                quality.classList.add('intro-appear')
            }
        }

         window.addEventListener('scroll',horiScroll);








         
        