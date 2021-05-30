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

### What's happening to the burner number?
the burner number will be ported over when the minimum viable product described
above is met, so that number is still going to be the number to call. Also we
will maintain a test number, so new features can be added and tested with no
interruption of normal DHRA service.

### Data collection and data security.

After every run the runner can text the proxied user's number "END" (in all caps)
and their session is over or they can just wait 6hr. Either way when the session
ends some survey questions regarding what materials (if any) were supplied to
the user and maybe some other stuff. This could potentially put the user's
privicy at risk. To mitigate this, here is what we do:

When a user calls in we take thier phone number and mix it with something called
a "salt" usually these salts are public but in this case we keep it a secret
even from the database. The salt used will be the same for every call. After
the number and salt are mixed, we run that combination through a hashing
algorithm. These are also known as "one-way functions" because its very easy to 
calculate an output but very hard to take an output and work backwards to
determine the input.

This will produce a seemingly random ID for every caller with the benefit of it
being nigh impossible for anyone looking at the data to know who it its.

For example an number like 212-555-0987 is seen by the software as 
```+12125550987``` a salt like ```AF6rPy3jSKorvkKPWU5V6pVq``` gets mixed with the
number so it then looks like ```+12125550987AF6rPy3jSKorvkKPWU5V6pVq``` then this
will be hashed with an algoithm called SHA256 and finally come out looking like: 
```119bdc0acbd3583f2afa1413456494f76b3f9248278a5ef8a33dfe186619e7ce```.

This pretty random looking number will be produced the same way every time the 
same caller calls in with the same phone number, so it can function as a unique
identifier. This way we can log usage stats, and other stuff without sacrificing
anyone's personal identitfying information.

Once every few months, we will dump out the data we collected and replace the hashed
IDs from ```119bdc0acbd3583f2afa1413456494f76b3f9248278a5ef8a33dfe186619e7ce``` into
a psydonym like "Jane Doe" or "Joe Shmoe" and then change the salt we use and start
the data collection again. This will further protect people's identity and allow us
to refer to callers like human beings in any analysis we publically publish.

Both the phone number proxying, and the data collection methods are specifically
designed maintain the highest level of privicy while providing the maximum
convenience to both user and runner. We want it to be easy to volunteer and easy
to get help and easy to show potential donor's that we are effective.

Any crypto nerds out there got any better ideas on how to accomplish this, hit us up!
We're open to suggestion. I was entertaining the idea of taking the hashed output and
running that through a symetrical encryption algorithm like AES with an IV so that
only after we decrypt could we even coorelate the same caller's hashed ID's with
each other, so no data in the db could be reasoned about by a bad-faith actor with
knowledge of certain user's habits with the intent of exposing the user's ID but
that seemed like overkill. IDK? Lmk what y'all think.

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
* Instagram/Facebook/Social media integration

## What if I don't live in Dallas, run a harm reduction org, and think this programmer guy is both handsome with a brilliant idea.

Firstly, I'm flattered, but sorry ladies, gentlemen, and those betwixt, **I'm** spoken for.
But this **system** and its **code** are not! As we write this, we are also writing scripts to 
automate its deployment for any other harm reduction org or any activist org who needs
a hotline with privicy in mind but lacks infrastructure or techie know-how.

At a hundreds of calls per month volume, the cost should be no more than the serivce cost
of a pre-paid burner. Over that the cost is still reasonable. I in no way endorse the 
platforms used for any reason other than their price. All capitalist enterprises must die,
but also until we take back the telecom industry, here we is.

PS anyone willing to forcibly take the telecom industry and distribute its productive
means to the people please email admin@threearrowscommunication.com (I hear those dudes
hate AT&T, fascists, and the bourgeoisie; and love anarchism, the working person, writing
code with VIM, fiber optics, and open source everything).


## How to contribute

Fork the motherfucking repo, make improvements, make a goddamned pull request.
You know the drill. Get off yer butts and write some shit.

## License
[MIT](https://choosealicense.com/licenses/mit/)
