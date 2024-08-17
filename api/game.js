export default function handler(req, res) {
    if (req.method === 'POST') {
      const { move } = req.body;
      
      // Simulate response for the game
      const moves = ['rock', 'paper', 'scissors'];
      const computerMove = moves[Math.floor(Math.random() * moves.length)];
  
      let result = '';
      if (move === computerMove) {
        result = 'draw';
      } else if (
        (move === 'rock' && computerMove === 'scissors') ||
        (move === 'paper' && computerMove === 'rock') ||
        (move === 'scissors' && computerMove === 'paper')
      ) {
        result = 'win';
      } else {
        result = 'lose';
      }
  
      // Return the result
      res.status(200).json({ result: result, move: move, computerMove: computerMove });
    } else {
      // Handle any other HTTP method
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
