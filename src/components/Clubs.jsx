import React, { useState, useEffect } from 'react';
import ClubSection from './ClubSection';
import { Gift, PlusSquare, Cake } from 'lucide-react';

const Clubs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getClubIcon = (id) => {
    switch (id) {
      case "puzzle-club":
        return PlusSquare;
      case "free-gifts":
        return Gift;
      case "birthday-blessing":
        return Cake;
      default:
        return PlusSquare;
    }
  };

  const clubs = [
    {
      id: "puzzle-club",
      title: "Puzzle Club",
      description: "Exercise your mind while strengthening your faith with our weekly faith-based puzzles and activities.",
      icon: getClubIcon("puzzle-club"),
      benefits: [
        {
          iconName: "brain",
          title: "Weekly Puzzles",
          description: "Receive new faith-based puzzles every week to challenge your mind and deepen your biblical knowledge."
        },
        {
          iconName: "users",
          title: "Community Solutions",
          description: "Share your solutions and see how others approached the puzzles in our supportive community."
        },
        {
          iconName: "book-open",
          title: "Scripture Focus",
          description: "Each puzzle is designed around specific Bible verses to help you memorize and understand God's word."
        }
      ],
      buttonText: "Download Puzzles",
      link: "/puzzles.rar",
      isPopular: true
    },
    {
      id: "free-gifts",
      title: "Free Gifts",
      description: "Receive complimentary resources to support your spiritual journey and share with others.",
      icon: getClubIcon("free-gifts"),
      benefits: [
        {
          iconName: "book",
          title: "E-Books",
          description: "Download free inspirational e-books written by spiritual leaders to guide your faith journey."
        },
        {
          iconName: "heart",
          title: "Prayer Guides",
          description: "Access beautifully designed prayer guides to enhance your daily devotional practice."
        },
        {
          iconName: "file-text",
          title: "Scripture Cards",
          description: "Receive printable scripture cards to place around your home or share with friends and family."
        }
      ],
      buttonText: "Claim Your Gifts",
      link: "https://drive.google.com/file/d/1_ZH5DY6jWv4PGVY5geXkUynCEyI8nGbt/view?usp=sharing",
      isNew: true
    },
    {
      id: "birthday-blessing",
      title: "Birthday Blessing Club",
      description: "Join our Birthday Blessing Club and receive special prayers and gifts on your special day.",
      icon: getClubIcon("birthday-blessing"),
      benefits: [
        {
          iconName: "mail",
          title: "Birthday Prayer",
          description: "Receive a personalized prayer on your birthday from our prayer team to bless your new year."
        },
        {
          iconName: "gift",
          title: "Special Gift",
          description: "Enjoy a complimentary digital gift on your birthday as our way of celebrating with you."
        },
        {
          iconName: "users",
          title: "Community Celebration",
          description: "Be recognized in our community celebration and receive birthday wishes from fellow members."
        }
      ],
      buttonText: "Claim Birthday Gift",
      link: "/birthday_gifts.rar"
    }
  ];

  return (
    <section className={`py-16 px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-3">Join Our Faith Communities</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Connect with like-minded believers and enrich your spiritual journey through our specialized clubs and free resources.
        </p>
        
        <div className="space-y-12">
          {clubs.map((club, index) => (
            <ClubSection
              key={index}
              id={club.id}
              title={club.title}
              description={club.description}
              benefits={club.benefits}
              buttonText={club.buttonText}
              link={club.link}
              isEven={index % 2 === 0}
              icon={club.icon}
              isPopular={club.isPopular}
              isNew={club.isNew}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://drive.google.com/file/d/1JLosCQRhkplm4YDhOjTlgqo0ee4GysFj/view?usp=drive_link"
            className="inline-flex items-center bg-purple-800 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition transform hover:scale-105"
          >
            <Gift className="mr-2" size={20} />
            Claim All Puzzles and Gifts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clubs;