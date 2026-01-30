export const QUESTIONS_DB = [
    // Category 1: Situational Reasoning (10 Questions)
    {
        id: 101,
        category: "Situational Reasoning",
        scenario: "You find a wallet with $500 and an ID inside. The ID belongs to a person you know is extremely wealthy but also notoriously rude/cruel to service staff. You are currently struggling to pay rent.",
        options: [
            "Return it with all money intact.",
            "Keep the money, return the wallet anonymously.",
            "Donate the money to a charity, return the wallet.",
            "Leave the wallet where you found it."
        ],
        weights: { "0": { social: 2, consistency: 2 }, "1": { adaptability: 2, social: -1 }, "2": { reasoning: 2, social: 1 }, "3": { risk: -1 } }
    },
    {
        id: 102,
        category: "Situational Reasoning",
        scenario: "Your best friend's partner is cheating on them. You accidentally find out. Your friend is incredibly happy right now and just got promoted. Telling them will ruin their week/month.",
        options: [
            "Tell them immediately.",
            "Wait until the excitement of the promotion settles.",
            "Confront the cheater and make them confess.",
            "Say nothing; it's not your relationship."
        ],
        weights: { "0": { social: -1, consistency: 2 }, "1": { social: 2, decision: 1 }, "2": { adaptability: 1, decision: 2 }, "3": { social: -2 } }
    },
    {
        id: 103,
        category: "Situational Reasoning",
        scenario: "You are the manager. You have to fire one person. A: The hardest worker who has no family. B: The average worker who supports 3 kids. Performance difference is significant.",
        options: [
            "Fire Person B (Performance first).",
            "Fire Person A (Has fewer dependents).",
            "Cut both their salaries to keep both.",
            "Quit so you don't have to choose."
        ],
        weights: { "0": { decision: 2, social: -1 }, "1": { social: 2, decision: -1 }, "2": { adaptability: 2 }, "3": { decision: -2 } }
    },
    {
        id: 104,
        category: "Situational Reasoning",
        scenario: "A self-driving car must crash. It can kill its 1 passenger (you) or swerve and kill 5 pedestrians.",
        options: [
            "Kill the passenger (Sacrifice self).",
            "Kill the pedestrians.",
            "Try to swerve between them (High risk of killing all 6).",
            "Close your eyes and do nothing."
        ],
        weights: { "0": { social: 2 }, "1": { risk: 1 }, "2": { adaptability: -1, risk: 2 }, "3": { decision: -2 } }
    },
    {
        id: 105,
        category: "Situational Reasoning",
        scenario: "You discover a coworker is stealing small amounts of office supplies. They are a single parent and likely selling them. The company is huge and won't miss it.",
        options: [
            "Report them immediately.",
            "Warn them privately to stop.",
            "Ignore it completely.",
            "Start stealing too."
        ],
        weights: { "0": { consistency: 2 }, "1": { social: 2, leadership: 1 }, "2": { adaptability: 1 }, "3": { consistency: -2 } }
    },
    {
        id: 106,
        category: "Situational Reasoning",
        scenario: "You have 1 hour to prepare for a speech that determines your career. A friend calls in tears needing to talk about a breakup.",
        options: [
            "Ignore the call until after the speech.",
            "Answer, talk for 5 mins, then hang up.",
            "Answer and talk as long as they need, risking the speech.",
            "Text them you are busy."
        ],
        weights: { "0": { decision: 2 }, "1": { adaptability: 2, social: 1 }, "2": { social: 2, decision: -2 }, "3": { decision: 1 } }
    },
    {
        id: 107,
        category: "Situational Reasoning",
        scenario: "You see a student cheating on a final exam that is curved (if they score high, your grade might drop).",
        options: [
            "Report them to the professor.",
            "Confront them after the exam.",
            "Do nothing.",
            "Cheat as well to level the playing field."
        ],
        weights: { "0": { consistency: 2, social: -1 }, "1": { social: 1, leadership: 1 }, "2": { risk: -1 }, "3": { consistency: -2 } }
    },
    {
        id: 108,
        category: "Situational Reasoning",
        scenario: "You are a doctor. You have one dose of a life-saving drug. Patient A is 70 years old but a Nobel prize winner. Patient B is 20 years old, a college dropout with no job.",
        options: [
            "Save Patient A (Value to society).",
            "Save Patient B (Years left to live).",
            "Split the dose (Both likely die, small chance both live).",
            "Flip a coin."
        ],
        weights: { "0": { logic: 1 }, "1": { logic: 1 }, "2": { risk: 2 }, "3": { decision: -2 } }
    },
    {
        id: 109,
        category: "Situational Reasoning",
        scenario: "You are given the power to become invisible, but every time you use it, a random person in the world forgets their childhood.",
        options: [
            "Use it freely.",
            "Use it only for emergencies.",
            "Use it only to stop crimes.",
            "Never use it."
        ],
        weights: { "0": { social: -2 }, "1": { decision: 1 }, "2": { social: 1 }, "3": { consistency: 2 } }
    },
    {
        id: 110,
        category: "Situational Reasoning",
        scenario: "You can save 100 strangers today, or 10,000 strangers 100 years from now.",
        options: [
            "Save the 100 today.",
            "Save the 10,000 future people.",
            "Try to find a way to do both (Fail at both).",
            "Does not matter, we all die."
        ],
        weights: { "0": { social: 1 }, "1": { logic: 2 }, "2": { risk: -1 }, "3": { decision: -1 } }
    },

    // Category 2: Decision Under Pressure (10 Questions)
    {
        id: 201,
        category: "Decision Under Pressure",
        scenario: "The building is on fire. You are on the 10th floor. Stairs are smoke-filled. Elevator is working but risky.",
        options: [
            "Take the stairs (Endure smoke).",
            "Take the elevator (Risk trap).",
            "Wait on the roof for a helicopter.",
            "Jump to the next balcony."
        ],
        weights: { "0": { risk: 1 }, "1": { risk: 2 }, "2": { decision: -1 }, "3": { risk: 3 } }
    },
    {
        id: 202,
        category: "Decision Under Pressure",
        scenario: "You are defusing a bomb. Wire Red or Wire Blue? Red is usually standard, but the bomber knows that.",
        options: [
            "Cut Red.",
            "Cut Blue.",
            "Wait for the squad (Timer hits 0).",
            "Run away."
        ],
        weights: { "0": { logic: 1 }, "1": { logic: 2 }, "2": { decision: -2 }, "3": { risk: -1 } }
    },
    {
        id: 203,
        category: "Decision Under Pressure",
        scenario: "Someone pulls a gun in a store. You are near the exit. You have a concealed carry weapon.",
        options: [
            "Draw and fire.",
            "Escape immediately.",
            "Hide and observe.",
            "Try to talk them down."
        ],
        weights: { "0": { risk: 3 }, "1": { survival: 2 }, "2": { strategy: 1 }, "3": { social: 2 } }
    },
    {
        id: 204,
        category: "Decision Under Pressure",
        scenario: "Your car brakes fail on a highway. You are going 80mph.",
        options: [
            "Pull handbrake (Spin out).",
            "Grind against the guardrail.",
            "Shift to lower gears/Neutral.",
            "Honk and pray."
        ],
        weights: { "0": { risk: 2 }, "1": { strategy: 1 }, "2": { strategy: 2 }, "3": { decision: -2 } }
    },
    {
        id: 205,
        category: "Decision Under Pressure",
        scenario: "You are lost in the woods. Night is falling. Temperature dropping to freezing.",
        options: [
            "Keep walking to find a road.",
            "Build a shelter immediately.",
            "Light a massive fire.",
            "Climb a tree to look for lights."
        ],
        weights: { "0": { risk: 2 }, "1": { survival: 2 }, "2": { survival: 1 }, "3": { risk: 1 } }
    },
    {
        id: 206,
        category: "Decision Under Pressure",
        scenario: "You accidentally reply-all to a company email with a very rude joke about the CEO. 500 people received it.",
        options: [
            "Send an immediate apology email.",
            "Claim you were hacked.",
            "Go to the CEO's office immediately to apologize.",
            "Pack your desk."
        ],
        weights: { "0": { consistency: 1 }, "1": { social: -1 }, "2": { leadership: 2 }, "3": { decision: 1 } }
    },
    {
        id: 207,
        category: "Decision Under Pressure",
        scenario: "Stock market crash. Your portfolio drops 50% in an hour.",
        options: [
            "Sell everything now.",
            "Buy more (Dip).",
            "Hold and do nothing.",
            "Check the news frantically."
        ],
        weights: { "0": { fear: 2 }, "1": { risk: 2 }, "2": { consistency: 2 }, "3": { decision: -1 } }
    },
    {
        id: 208,
        category: "Decision Under Pressure",
        scenario: "You are cooking for a dinner party of 10. The main dish burns completely 30 mins before guests arrive.",
        options: [
            "Order pizza.",
            "Serve the sides as the meal.",
            "Try to cook a fast pasta dish.",
            "Cancel the party."
        ],
        weights: { "0": { adaptability: 2 }, "1": { social: -1 }, "2": { pressure: 2 }, "3": { decision: -2 } }
    },
    {
        id: 209,
        category: "Decision Under Pressure",
        scenario: "You are hiding in a closet from an intruder. You need to sneeze.",
        options: [
            "Hold it in (Painful).",
            "Sneeze into your shirt.",
            "Try to distract them by throwing something.",
            "Burst out and attack."
        ],
        weights: { "0": { survival: 1 }, "1": { survival: 2 }, "2": { risk: 2 }, "3": { risk: 3 } }
    },
    {
        id: 210,
        category: "Decision Under Pressure",
        scenario: "Your pilot passes out. ATC asks you to take controls.",
        options: [
            "Refuse, find someone else.",
            "Take controls immediately.",
            "Try to wake the pilot.",
            "Panic."
        ],
        weights: { "0": { fear: 2 }, "1": { leadership: 2 }, "2": { logic: 1 }, "3": { decision: -2 } }
    },

    // Category 3: Social Intelligence (10 Questions)
    {
        id: 301,
        category: "Social Intelligence",
        scenario: "You are at a networking event. Someone important has spinach in their teeth.",
        options: [
            "Tell them immediately.",
            "Tell them when no one is looking.",
            "Signal them silently.",
            "Ignore it."
        ],
        weights: { "0": { social: 1 }, "1": { social: 2 }, "2": { social: 3 }, "3": { social: -1 } }
    },
    {
        id: 302,
        category: "Social Intelligence",
        scenario: "A friend gives you a terrible gift they clearly put effort into.",
        options: [
            "Pretend to love it enthusiastically.",
            "Politely thank them but stash it away.",
            "Ask for the receipt to exchange it.",
            "Tell them it's not your style."
        ],
        weights: { "0": { social: 2 }, "1": { social: 1 }, "2": { social: -1 }, "3": { honesty: 2, social: -2 } }
    },
    {
        id: 303,
        category: "Social Intelligence",
        scenario: "Your boss presents an idea in a meeting that is factually wrong. Correcting him might embarrass him.",
        options: [
            "Correct him immediately in front of everyone.",
            "Stay silent.",
            "Send him a note/email afterwards.",
            "Ask a 'clarifying question' that highlights the error."
        ],
        weights: { "0": { social: -2, logic: 2 }, "1": { social: -1 }, "2": { social: 1 }, "3": { social: 3 } }
    },
    {
        id: 304,
        category: "Social Intelligence",
        scenario: "You are at a dinner. The host makes a racist joke. Everyone laughs uncomfortably.",
        options: [
            "Laugh along to fit in.",
            "Stay silent and stone-faced.",
            "Say 'That's not funny.'",
            "Change the subject immediately."
        ],
        weights: { "0": { social: -1, integrity: -2 }, "1": { social: 0 }, "2": { integrity: 2, social: -1 }, "3": { social: 1 } }
    },
    {
        id: 305,
        category: "Social Intelligence",
        scenario: "A coworker smells bad every day. It's affecting the team.",
        options: [
            "Leave anonymous deodorant on their desk.",
            "Tell HR.",
            "Talk to them privately and kindly.",
            "Suffer in silence."
        ],
        weights: { "0": { social: -2 }, "1": { social: 0 }, "2": { social: 2 }, "3": { social: -1 } }
    },
    {
        id: 306,
        category: "Social Intelligence",
        scenario: "You forget a person's name immediately after being introduced.",
        options: [
            "Ask for their name again immediately.",
            "Wait for someone else to say it.",
            "Call them 'buddy' or 'mate'.",
            "Avoid addressing them directly the whole night."
        ],
        weights: { "0": { social: 2 }, "1": { social: 1 }, "2": { social: -1 }, "3": { social: 0 } }
    },
    {
        id: 307,
        category: "Social Intelligence",
        scenario: "Two friends are fighting. Both ask you to side with them.",
        options: [
            "Pick the side that is right.",
            "Refuse to get involved.",
            "Mediate a compromise.",
            "Agree with both separately."
        ],
        weights: { "0": { logic: 2, social: -1 }, "1": { social: 1 }, "2": { social: 3 }, "3": { social: -2 } }
    },
    {
        id: 308,
        category: "Social Intelligence",
        scenario: "You accidentally spill red wine on a host's white carpet.",
        options: [
            "Confess immediately and offer to pay.",
            "Try to clean it secretly.",
            "Cover it with a chair.",
            "Blame the dog."
        ],
        weights: { "0": { integrity: 2, social: 2 }, "1": { risk: 1 }, "2": { integrity: -1 }, "3": { integrity: -2 } }
    },
    {
        id: 309,
        category: "Social Intelligence",
        scenario: "Someone is crying on a public bench next to you.",
        options: [
            "Ask 'Are you okay?'",
            "Offer a tissue silently.",
            "Ignore them to give privacy.",
            "Move to another bench."
        ],
        weights: { "0": { social: 1 }, "1": { social: 2 }, "2": { social: 0 }, "3": { social: -1 } }
    },
    {
        id: 310,
        category: "Social Intelligence",
        scenario: "You are assigned a group project. One member does absolutely nothing.",
        options: [
            "Do their work and say nothing.",
            "Report them to the teacher/boss.",
            "Confront them and demand work.",
            "Leave their name off the final submission."
        ],
        weights: { "0": { leadership: -1 }, "1": { logic: 1 }, "2": { leadership: 2 }, "3": { risk: 2 } }
    },

    // Category 4: Logical Adaptability (10 Questions)
    {
        id: 401,
        category: "Logical Adaptability",
        scenario: "If All Bloops are Razzies and No Razzies are Zuffs, are any Bloops Zuffs?",
        options: [
            "Yes.",
            "No.",
            "Maybe.",
            "Not enough info."
        ],
        weights: { "0": { logic: -2 }, "1": { logic: 2 }, "2": { logic: -1 }, "3": { logic: -1 } } // Correct: No
    },
    {
        id: 402,
        category: "Logical Adaptability",
        scenario: "Bat is to Cave as Bear is to...",
        options: [
            "Forest.",
            "Den.",
            "Fur.",
            "Hibernate."
        ],
        weights: { "0": { logic: 0 }, "1": { logic: 2 }, "2": { logic: -1 }, "3": { logic: 0 } }
    },
    {
        id: 403,
        category: "Logical Adaptability",
        scenario: "Sequence: 2, 4, 8, 16, ...",
        options: [
            "24",
            "30",
            "32",
            "64"
        ],
        weights: { "0": { logic: -1 }, "1": { logic: -1 }, "2": { logic: 2 }, "3": { logic: -1 } }
    },
    {
        id: 404,
        category: "Logical Adaptability",
        scenario: "You have a 3L jug and a 5L jug. You need exactly 4L of water.",
        options: [
            "Fill 5, pour into 3. Leftover is 2. Empty 3. Put 2 in 3. Fill 5, pour into 3...",
            "Fill 3, pour into 5. Fill 3 again...",
            "Guess.",
            "It's impossible."
        ],
        weights: { "0": { logic: 2 }, "1": { logic: 1 }, "2": { logic: -2 }, "3": { logic: -2 } }
    },
    {
        id: 405,
        category: "Logical Adaptability",
        scenario: "What breaks when you say its name?",
        options: [
            "Glass.",
            "Silence.",
            "A promise.",
            "A secret."
        ],
        weights: { "0": { logic: -1 }, "1": { logic: 2 }, "2": { logic: 0 }, "3": { logic: 0 } }
    },
    {
        id: 406,
        category: "Logical Adaptability",
        scenario: "A man pushes his car to a hotel and shouts 'I'm bankrupt'. Why?",
        options: [
            "He ran out of gas.",
            "He is playing Monopoly.",
            "He crashed into the hotel.",
            "He lost his wallet."
        ],
        weights: { "0": { logic: -1 }, "1": { logic: 2 }, "2": { logic: -1 }, "3": { logic: -1 } }
    },
    {
        id: 407,
        category: "Logical Adaptability",
        scenario: "Which is heavier? A pound of feathers or a pound of lead?",
        options: [
            "Feathers.",
            "Lead.",
            "Variable.",
            "They are equal."
        ],
        weights: { "0": { logic: -2 }, "1": { logic: -2 }, "2": { logic: -1 }, "3": { logic: 2 } }
    },
    {
        id: 408,
        category: "Logical Adaptability",
        scenario: "Some months have 30 days, some have 31. How many have 28?",
        options: [
            "1",
            "All of them.",
            "Depends on leap year.",
            "None."
        ],
        weights: { "0": { logic: 0 }, "1": { logic: 2 }, "2": { logic: 1 }, "3": { logic: -2 } }
    },
    {
        id: 409,
        category: "Logical Adaptability",
        scenario: "You are running a race. You pass the person in 2nd place. What place are you in?",
        options: [
            "1st",
            "2nd",
            "3rd",
            "Last"
        ],
        weights: { "0": { logic: -1 }, "1": { logic: 2 }, "2": { logic: -1 }, "3": { logic: -1 } }
    },
    {
        id: 410,
        category: "Logical Adaptability",
        scenario: "The more of this there is, the less you see. What is it?",
        options: [
            "Light.",
            "Darkness.",
            "Fog.",
            "Space."
        ],
        weights: { "0": { logic: -1 }, "1": { logic: 2 }, "2": { logic: 1 }, "3": { logic: 0 } }
    }
];
