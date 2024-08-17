export default function handler(req, res) {
  if (req.method === 'POST') {
    const { move } = req.body;

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

    res.status(200).json({ result, move, computerMove });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
