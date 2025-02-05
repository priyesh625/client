import React from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const data = [
    {
      name: `Fyodor Dostoevsky\nRussian novelist`,
      description: `Fyodor Dostoevsky is a Russian novelist, however, what distinguishes him most is his style of writing. It's common knowledge that what reshaped him as an outstanding author was his experience with the death penalty; Dostoevsky was sentenced to death for reciting some enlightened quotes by some European thinkers in a gathering of the Russian society. He was 5 minutes away from being shot at in the head when they spared his life and sent him to do time in a prison in Siberia instead. How much this experience affected him as a writer can be noticed in some of his books like “The Idiot”. He was also a gambler; at a certain point in his life, he had to flee Russia, running away from people he was indebted to. Dostoevsky's experience as a gambler had a fascinating effect on his works as well. I highly recommend “The Gambler”.`,
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtS7J3QfQTKYB9XKeXfYr0C9BnH4LJMINLA&s`
    },
    {
      name: `Friedrich Nietzsche`,
      description: `Friedrich Nietzsche (born October 15, 1844, Röcken, Saxony, Prussia [Germany]—died August 25, 1900, Weimar, Thuringian States) was a German classical scholar, philosopher, and critic of culture, who became one of the most influential of all modern thinkers. His attempts to unmask the motives that underlie traditional Western religion, morality, and philosophy deeply affected generations of theologians, philosophers, psychologists, poets, novelists, and playwrights.`,
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0zUgvq_qWUSyywS12xY2jFu_C8ZOekpHzw&s`
    },
    {
      name: `Albert Camus`,
      description: `Albert Camus (born November 7, 1913, Mondovi, Algeria—died January 4, 1960, near Sens, France) was a French novelist, essayist, and playwright, best known for such novels as L’Étranger (1942; The Stranger), La Peste (1947; The Plague), and La Chute (1956; The Fall) and for his work in leftist causes. He received the 1957 Nobel Prize for Literature.`,
      image: `https://static01.nyt.com/images/2020/05/17/books/review/17fromourarchives/merlin_9401712_7e9753aa-778d-4302-96d1-36158288f7ee-superJumbo.jpg`
    },
    {
      name: `Karen L. Carr`,
      description: `Karen Leslie Carr is an American scholar and McNaughton Rosebush Professor of Liberal Studies and Professor of Religious Studies at Lawrence University. She is known for her works on nihilism and philosophy of religion.`,
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7bA6YwCu0_OKTkvBlJ2Gk9eHzwRTApEbRw&s`
    },
    {
      name: `Philipp Mainländer`,
      description: `Philipp Mainländer (5 October 1841 – 1 April 1876) was a German philosopher and poet. Born Philipp Batz, he later changed his name to "Mainländer" in homage to his hometown, Offenbach am Main. In his central work, Die Philosophie der Erlösung (The Philosophy of Redemption or The Philosophy of Salvation) — according to Theodor Lessing, "perhaps the most radical system of pessimism known to philosophical literature" — Mainländer proclaims that life is of negative value, and that "the will, ignited by the knowledge that non-`,
      image: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/P.Mainl%C3%A4nder_%28cropped%29.jpg/640px-P.Mainl%C3%A4nder_%28cropped%29.jpg`
    }
  ];
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };



  return (
    <div className='bg-black h-screen w-screen'>
      <Background />
      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative flex-col pt-40">
        <div className="w-screen h-screen">
          

        </div>




        <div id='home' className="w-3/4 mx-auto  ">
        <Slider {...settings}>
          {
            data.map((item, index) => (
              <Content key={index} item={item} />
            ))
          }

          
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default App