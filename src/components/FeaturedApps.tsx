import { AppCard } from "./AppCard";

export const FeaturedApps = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">Featured Applications</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AppCard
          title="Make Words Challenge"
          description="Challenge yourself to create words from a random grid of letters in this engaging word puzzle game."
          image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          gradient="bg-gradient-to-br from-card-purple to-card-green"
          link="https://godlyaiword.netlify.app/"
        />
        <AppCard
          title="Piano Synth"
          description="Create beautiful music with this interactive piano synthesizer featuring multiple instruments and sound effects."
          image="https://images.unsplash.com/photo-1455390582262-044cdead277a"
          gradient="bg-gradient-to-br from-card-blue to-card-purple"
          link="https://godlyai.org/piano"
        />
        <AppCard
          title="CryptoQuote"
          description="Solve encrypted quotes and famous sayings in this cryptogram puzzle game that challenges your decoding skills."
          image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          gradient="bg-gradient-to-br from-card-blue to-card-yellow"
          link="https://godlyai.org/Crypto"
        />
        <AppCard
          title="Monte Carlo PI"
          description="Explore the mathematical concept of PI through interactive Monte Carlo simulation."
          image="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
          gradient="bg-gradient-to-br from-card-purple to-card-pink"
          link="https://godlyai.org/monte"
        />
        <AppCard
          title="Game of Life"
          description="Experience Conway's Game of Life, a fascinating cellular automaton simulation that demonstrates emergent behavior."
          image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
          gradient="bg-gradient-to-br from-card-purple to-card-blue"
          link="https://godlyai.org/life"
        />
        <AppCard
          title="Bible Answer AI"
          description="Discover and explore Bible verses with AI-powered insights and recommendations."
          image="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
          gradient="bg-gradient-to-br from-card-purple to-card-pink"
          link="https://euphonious-sorbet-49e630.netlify.app/"
        />
        <AppCard
          title="Space Invaders"
          description="Experience the classic arcade game reimagined with modern AI-built gameplay."
          image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          gradient="bg-gradient-to-br from-card-purple to-card-blue"
          link="https://godlyai.org/space"
        />
        <AppCard
          title="Sudoku Master"
          description="Challenge yourself with AI-generated Sudoku puzzles of varying difficulty levels."
          image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          gradient="bg-gradient-to-br from-card-yellow to-card-orange"
          link="https://godlyai.org/sudoku"
        />
        <AppCard
          title="Talking Tic-Tac-Toe"
          description="Play against an AI opponent that provides voice feedback and strategic insights."
          image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          gradient="bg-gradient-to-br from-card-blue to-card-purple"
          link="https://godlyai.org/TTT"
        />
        <AppCard
          title="Daily Bible Verse"
          description="Receive daily spiritual inspiration with AI-curated Bible verses and reflections."
          image="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
          gradient="bg-gradient-to-br from-card-peach to-card-pink"
          link="https://godlyai.org/dailyverse"
        />
        <AppCard
          title="Medical Timeline"
          description="Visualize and track medical history with AI-powered insights and reminders."
          image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          gradient="bg-gradient-to-br from-card-blue to-card-yellow"
          link="https://godlyai.org/medical"
        />
        <AppCard
          title="Speaking Slot Machine"
          description="Experience a fun voice-interactive slot machine game with AI-generated responses."
          image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
          gradient="bg-gradient-to-br from-card-purple to-card-blue"
          link="https://godlyai.org/slots"
        />
        <AppCard
          title="AI Word Search"
          description="Challenge yourself with AI-generated word search puzzles that adapt to your skill level."
          image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
          gradient="bg-gradient-to-br from-card-blue to-card-green"
          link="https://frabjous-bublanina-18c4b2.netlify.app/"
        />
        <AppCard
          title="Number Sum Puzzle"
          description="Test your math skills with an engaging number puzzle game powered by AI."
          image="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d"
          gradient="bg-gradient-to-br from-card-yellow to-card-purple"
          link="https://godlyai.org/number"
        />
        <AppCard
          title="Tetris"
          description="Classic Tetris game reimagined with modern AI-powered features and responsive design."
          image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
          gradient="bg-gradient-to-br from-card-blue to-card-purple"
          link="https://godlyai.org/tetris"
        />
      </div>
    </div>
  );
};
