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