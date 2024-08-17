export default function handler(req, res) {
  if (req.method === 'POST') {
    const { move } = req.body;

    // Define possible moves for the computer
    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    // Calculate the result of the game
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

    // Return the result as JSON
    res.status(200).json({ result, move, computerMove });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
