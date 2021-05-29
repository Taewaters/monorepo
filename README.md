# DHRA Phone & Website

You know what it is.

## How this phone thing will work (from a runner's & user's perspective)

A user places a call or text to the publicly published main number, then the
code checks to see who is on call. Whoever is on call and hasn't had a new
user call in for the longest gets the call or text. If no one is on call, the
call or text goes to the default runner, they're like backup.

The number that the runner sees the user calling from will not actually be the
user's number but a "proxy" number. As long as someone has some exchange (text
or call) every 6 hours both the user and runner will be able to contact each
other using the main line (if you're a user) or the "proxy" number if you're a
runner. No one should be able to know the other's actual number. Think like how
Uber or craigslist lets you call without knowing the reall cell number; same
thing basically.

There is a number runners can text to put themselves on a break. The runner can
text the word "break" and the time their break will be over (in 24hr military
time) to take themselves off call temporarily (like if you got work or
something). When their break is over, they'll get a text reminding them that
they're back on call.

Once a week the schedule will be set. Runners will pick which days they'll be
on call. When the day comes, the runner's phone will automatically be put "on
call". Before this happens, the runner will be sent a text reminding them.

At any moment a runner can take themselves off call by texting the "on break"
number "off duty". They will recieve a text showing how many people are left
on call and ask them to confirm that they do want to go off duty.

## What's happening to the burner number?
the burner number will be ported over when the minimum viable product described
above is met, so that number is still going to be the number to call. Also we
will maintain a test number, so new features can be added and tested with no
interruption of normal DHRA service.

## Log bugs and request features

Go [here](https://github.com/DallasHRA/monorepo/issues) to log bugs and request
new features.

## Coming Features

* Integration with Google Sheets for scheduling
* Voicemail obfuscation & delivery
* RONA (Routed On No Answer)
* Report a bad date line
* ASR (Automatic Speech Recognition)
* 5 digit Mass SMS number to warn about bad batches
* 5 digit Mass SMS number to warn about bad dates

## How to contribute

Fork the motherfucking repo, make improvements, make a goddamned pull request.
You know the drill. Get off yer butts and write some shit.

## License
[MIT](https://choosealicense.com/licenses/mit/)
