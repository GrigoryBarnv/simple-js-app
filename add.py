class Card:
    suit_names = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    rank_names = [None, 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

    def __init__(self, suit=0, rank=2):
        self.suit = suit
        self.rank = rank


    def __srt__(self):
        return f'{Card.rank_names[self.rank]} of {Card.suit_names[self.suit]}'
    
karte = Card(2, 11)  # Jack of Hearts
print(karte)         # Ausgabe: Jack of Hearts



import random

class Deck:
    def __init__(self):
        self.cards = [Card(suit, rank)
                      for suit in range(4)
                      for rank in range(1, 14)]
    
    def __str__(self):
        return '\n'.join(str(card) for card in self.cards)
    
    def shuffle(self):
        random.shuffle(self.cards)

    def pop_card(self):
        return self.cards.pop()
    

    def add_card(self, card):
        self.cards.append(card)


    def sort(self):
        self.cards.sort(key=lambda card: card.rank)


    def move_cards(self, hand, num):
        for i in range(num):
            hand.add_card(self.pop_card())

deck = Deck()
deck.shuffle()
print(deck.pop_card())
print(deck.__str__())



class Hand(Deck):
    """ekne Hand, die von Deck erbt"""
    def __init__(self, label):
        self.cards = []
        self.label = label

    def __str__(self):
        return f'{self.label} Hand contains {len(self.cards)} cards'
    

if __name__ == '__main__':
    deck = Deck()
    deck.shuffle()

    hand1 = Hand('Spieler 1')
    hand2 = Hand('Spieler 2')

    deck.move_cards(hand1, 5)
    deck.move_cards(hand2, 5)

    print(hand1)
    print()
    print(hand2)



any([False, False, True])
any(latter == 'a' for latter in 'apple')


def avoids(word, forbidden):
    return not any(letter in forbidden for letter in word)

word1 = 'apple'
forbidden = 'ds'
print(avoids(word1, forbidden))

all([True, True, True])
all([True, False, True])


def uses_all(word, required):
    return all(letter in word for letter in required)

word1 = 'apple'
required = 'a'
print(uses_all(word1, required))