class Card:
    """Represents a standard playing card."""

    # Class attributes (shared by all instances)
    suit_names = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
    rank_names = [None, 'Ace', '2', '3', '4', '5', '6', '7',
                  '8', '9', '10', 'Jack', 'Queen', 'King']

    def __init__(self, suit=0, rank=2):
        self.suit = suit
        self.rank = rank

    def __str__(self):
        return '%s of %s' % (
            Card.rank_names[self.rank],
            Card.suit_names[self.suit])


# Create card instances
card1 = Card(2, 11)  # Jack of Hearts
card2 = Card(3, 12)  # Queen of Spades
queen_of_diamonds = Card(1, 12)  # Queen of Diamonds

# Compare cards
if card1.rank > card2.rank:
    print("Card 1 is higher.")
else:
    print("Card 2 is higher.")
