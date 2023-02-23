import './ratings-list.css'
import KnifeTitle from '../../knife-title/knife-title.component';
import RatingCard from './rating-card/rating-card.component';

const RatingsListSection = () => {

  interface IRate {
    image: string,
    name: string,
    job: string,
    title: string,
    description: string,
    stars: number,
  }

  const ratings: IRate[] = [
    {
      "image": "😃",
      "name": "Sara Lee",
      "job": "Business Owner",
      "title": "Game-Changing Technology!",
      "description": "Convenient and profitable! Customers love it, and so do I.",
      "stars": 5
    },
    {
      "image": "👍",
      "name": "Max Powers",
      "job": "Entrepreneur",
      "title": "Best Investment Yet!",
      "description": "Pays for itself! So glad I bought it.",
      "stars": 4
    },
    {
      "image": "🤑",
      "name": "Julie Smith",
      "job": "Small Business Owner",
      "title": "Big Returns on Investment!",
      "description": "A staple in my business. Boosted profits significantly.",
      "stars": 5
    },
    {
      "image": "😍",
      "name": "David Johnson",
      "job": "Entrepreneur",
      "title": "Incredible Technology!",
      "description": "One of the best investments. Brings so much revenue.",
      "stars": 5
    },
    {
      "image": "🥳",
      "name": "Alice Green",
      "job": "Small Business Owner",
      "title": "Revolutionary Idea!",
      "description": "Changed my business. Customers love it.",
      "stars": 5
    },
    {
      "image": "😎",
      "name": "Mike Taylor",
      "job": "Entrepreneur",
      "title": "Profitable Investment!",
      "description": "A game-changer. Generated significant income.",
      "stars": 4
    },
    {
      "image": "🤩",
      "name": "Karen Lee",
      "job": "Small Business Owner",
      "title": "Innovative Solution!",
      "description": "Simple to use. Made significant difference.",
      "stars": 5
    },
    {
      "image": "🚀",
      "name": "Jason Brown",
      "job": "Entrepreneur",
      "title": "Next-Level Profit!",
      "description": "Paid off in spades. Never been better!",
      "stars": 5
    },
    {
      "image": "😀",
      "name": "Samuel Kim",
      "job": "Small Business Owner",
      "title": "Worth Every Penny!",
      "description": "Great investment. Generates consistent revenue.",
      "stars": 4
    },
    {
      "image": "😃",
      "name": "Sophia Adams",
      "job": "Entrepreneur",
      "title": "Profitable and Convenient!",
      "description": "Customers love it! Generates consistent profit.",
      "stars": 4
    },
    {
      "image": "😁",
      "name": "Emily Chen",
      "job": "Small Business Owner",
      "title": "Customer Favorite!",
      "description": "Convenient and delicious. My customers love it!",
      "stars": 5
    },
    {
      "image": "😆",
      "name": "Daniel Smith",
      "job": "Entrepreneur",
      "title": "Easy and Profitable!",
      "description": "Simple to manage. Great investment for my business.",
      "stars": 4
    }
  ]

  return <section className="ratings-list-container">
    <KnifeTitle text={`Buyers Reviews`} column={true}></KnifeTitle>
    <div className="ratings-list-wrapper">
      <div className="ratings-list">
        {
          ratings.map((rate) => <RatingCard image={rate.image} name={rate.name} job={rate.job} title={rate.title} description={rate.description} stars={rate.stars}></RatingCard>)
        }
      </div>
    </div>
  </section>
}

export default RatingsListSection;