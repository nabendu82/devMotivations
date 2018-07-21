var motivationNotification = 'cake-notification';

var MOT_INTERVAL = 30;

browser.alarms.create('', { periodInMinutes: MOT_INTERVAL });

function getRandom() {
  var quotes = [
    'Stay Hungry. Stay Foolish. - Steve Jobs',
    'Good Artists Copy, Great Artists Steal. - Pablo Picasso',
    'Argue with idiots, and you become an idiot. - Paul Graham',
    'Be yourself; everyone else is already taken. - Oscar Wilde',
    'Simplicity is the ultimate sophistication. - Leonardo Da Vinci',
    'Changing the world one code at a time. - Unknown',
    'In real open source, you have the right to control your own destiny - Linus Torvalds',
    'Code long and prosper - Unknown',
    'Success is something you attract by the person you become. - Jim Rohn',
    'Why fit in when you were born to stand out? - Dr. Seuss',
    'You are the average of the five people you spend the most time with. - Jim Rohn',
    'If you run around with 9 losers pretty soon you’ll be the 10th loser. - Les Brown',
    'You can change what you are and where you are by changing what goes into your mind. - Zig Ziglar',
    'Being the richest man in the cemetery doesn’t matter to me. Going to bed at night saying we’ve done something wonderful… that’s what matters to me. - Steve Jobs',
    'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds',
    'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary. - Steve Jobs',
    'I think it is possible for ordinary people to choose to be extraordinary. - Elon Musk'
  ];

  return quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(motivationNotification, {
    type: 'basic',
    iconUrl: browser.extension.getURL('icons/icon.png'),
    title: 'DevMotivational Quote',
    message: getRandom()
  });
});

browser.browserAction.onClicked.addListener(() => {
  var clearing = browser.notifications.clear(motivationNotification);
  clearing.then(() => {
    console.log('cleared');
  });
});
