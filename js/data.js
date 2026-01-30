export const QUESTIONS_DB = [

    // ==========================================
    // 1. LOGICAL INTELLIGENCE
    // Focus: Pattern recognition, structured thinking, deductive reasoning, removing emotion.
    // ==========================================

    {
        id: "log_001",
        category: "Logical Intelligence",
        scenario: "You are designing a safety system for a high-speed train. A failure can occur in System A (0.1% chance) or System B (0.5% chance). A failsafe costs $1M for A and $5M for B. You have $5M total budget.",
        options: [
            "Install failsafe for B only (Result: covers higher prob).",
            "Install failsafe for A and keep $4M (Result: logic error).",
            "Split budget to partially upgrade both (Result: ineffective).",
            "Do nothing and save the money (Result: negligence)."
        ],
        weights: { "0": { logical: 3, strategic: 1 }, "1": { logical: -2 }, "2": { logical: -1 }, "3": { logical: -3 } }
    },
    {
        id: "log_002",
        category: "Logical Intelligence",
        scenario: "All Flurgs are Zarks. Some Zarks are Bleeps. Are some Flurgs definitely Bleeps?",
        options: [
            "Yes, definitely.",
            "No, definitely not.",
            "Impossible to determine.",
            "Only if Bleeps are Zarks."
        ],
        weights: { "0": { logical: -2 }, "1": { logical: -2 }, "2": { logical: 3 }, "3": { logical: -1 } }
    },
    {
        id: "log_003",
        category: "Logical Intelligence",
        scenario: "Three suspects. A says 'B did it'. B says 'I didn't do it'. C says 'A did it'. Only one is telling the truth. Who did it?",
        options: [
            "A",
            "B",
            "C",
            "None of them."
        ],
        weights: { "0": { logical: 3 }, "1": { logical: -2 }, "2": { logical: -2 }, "3": { logical: -1 } }
    },
    {
        id: "log_004",
        category: "Logical Intelligence",
        scenario: "You have two hourglasses: 4-minute and 7-minute. You need to measure exactly 9 minutes. Can you do it?",
        options: [
            "Yes, immediately.",
            "Yes, but it's complex.",
            "No, math doesn't work.",
            "Only if I estimate."
        ],
        weights: { "0": { logical: -1 }, "1": { logical: 3 }, "2": { logical: -2 }, "3": { logical: -1 } }
    },
    {
        id: "log_005",
        category: "Logical Intelligence",
        scenario: "A bat and ball cost $1.10. The bat costs $1.00 more than the ball. How much is the ball?",
        options: [
            "10 cents.",
            "5 cents.",
            "1 cent.",
            "Cannot happen."
        ],
        weights: { "0": { logical: -2, adaptive: -1 }, "1": { logical: 3 }, "2": { logical: -2 }, "3": { logical: -2 } }
    },
    {
        id: "log_006",
        category: "Logical Intelligence",
        scenario: "You are analyzing a data set. Correlation between Ice Cream Sales and Shark Attacks is 0.95. What do you conclude?",
        options: [
            "Sharks like ice cream.",
            "Ice cream attracts sharks.",
            "A third variable (Summer) causes both.",
            "The data is faked."
        ],
        weights: { "0": { logical: -3 }, "1": { logical: -2 }, "2": { logical: 3, strategic: 1 }, "3": { logical: -1 } }
    },
    {
        id: "log_007",
        category: "Logical Intelligence",
        scenario: "If you flip a fair coin 10 times and get Heads every time, what is the probability the next flip is Tails?",
        options: [
            "Higher than 50% (Law of averages).",
            "Exactly 50% (Gambler's fallacy).",
            "Lower than 50% (The coin is rigged).",
            "Who cares?"
        ],
        weights: { "0": { logical: -2 }, "1": { logical: 3 }, "2": { logical: 1, adaptive: 1 }, "3": { logical: -3 } }
    },
    {
        id: "log_008",
        category: "Logical Intelligence",
        scenario: "Identify the next number: 8, 27, 64, 125, ...",
        options: [
            "150",
            "216",
            "256",
            "343"
        ],
        weights: { "0": { logical: -2 }, "1": { logical: 3 }, "2": { logical: -1 }, "3": { logical: -2 } }
    },
    {
        id: "log_009",
        category: "Logical Intelligence",
        scenario: "You are a debugger. The code fails only on Tuesdays at 3 AM. What is the most likely cause?",
        options: [
            "A hacker.",
            "Timezone calculation error or scheduled task.",
            "Hardware overheating.",
            "Cosmic rays."
        ],
        weights: { "0": { logical: -2 }, "1": { logical: 3 }, "2": { logical: -1 }, "3": { logical: 0 } }
    },
    {
        id: "log_010",
        category: "Logical Intelligence",
        scenario: "Which statement is logically equivalent to 'If it rains, the ground is wet'?",
        options: [
            "If the ground is wet, it rained.",
            "If it doesn't rain, the ground is dry.",
            "If the ground is not wet, it did not rain.",
            "It is raining and the ground is wet."
        ],
        weights: { "0": { logical: -2 }, "1": { logical: -2 }, "2": { logical: 3 }, "3": { logical: -1 } }
    },
    {
        id: "log_011",
        category: "Logical Intelligence",
        scenario: "You have 8 balls. One is slightly heavier. You have a balance scale. What is the minimum weighings to find it?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        weights: { "0": { logical: -3 }, "1": { logical: 3 }, "2": { logical: 1 }, "3": { logical: -1 } }
    },
    {
        id: "log_012",
        category: "Logical Intelligence",
        scenario: "A doctor gives you 3 pills. Take one every half hour. How long do they last?",
        options: [
            "1.5 hours",
            "1 hour",
            "2 hours",
            "3 hours"
        ],
        weights: { "0": { logical: -1 }, "1": { logical: 3 }, "2": { logical: -2 }, "3": { logical: -2 } }
    },

    // ==========================================
    // 2. BUSINESS & STRATEGIC INTELLIGENCE
    // Focus: Trade-offs, risk vs reward, long-term thinking, allocating resources.
    // ==========================================

    {
        id: "strat_001",
        category: "Strategic Intelligence",
        scenario: "You are CEO. Your product has a major bug affecting 5% of users. Fixing it delays the new launch by 3 months. Launching now captures the market.",
        options: [
            "Delay launch to fix bug (Quality first).",
            "Launch with bug, fix later (Speed first).",
            "Hide the bug and launch.",
            "Cancel the new launch entirely."
        ],
        weights: { "0": { strategic: 1, social: 1 }, "1": { strategic: 3, risk: 1 }, "2": { strategic: -2, political: -1 }, "3": { strategic: -3 } }
    },
    {
        id: "strat_002",
        category: "Strategic Intelligence",
        scenario: "Two employees. A is brilliant but toxic. B is average but boosts team morale. You have budget for one promotion.",
        options: [
            "Promote A (Results matter most).",
            "Promote B (Culture matters most).",
            "Promote neither.",
            "Split the raise between them."
        ],
        weights: { "0": { strategic: 1, social: -2 }, "1": { strategic: 2, social: 2 }, "2": { strategic: -1 }, "3": { strategic: -1 } }
    },
    {
        id: "strat_003",
        category: "Strategic Intelligence",
        scenario: "A competitor slashes prices to bleed you out. You have cash reserves for 6 months.",
        options: [
            "Slash prices lower (Price war).",
            "Maintain price, increase marketing on quality.",
            "Pivot to a niche market immediately.",
            "Sue them for antitrust."
        ],
        weights: { "0": { strategic: -2 }, "1": { strategic: 3 }, "2": { strategic: 2, adaptive: 2 }, "3": { strategic: -1 } }
    },
    {
        id: "strat_004",
        category: "Strategic Intelligence",
        scenario: "You find a legal loophole that saves $10M tax but is morally grey. Your company is struggling.",
        options: [
            "Use it. Business is war.",
            "Don't use it. Reputation risk is too high.",
            "Use it but donate $1M to charity.",
            "Ask the government for permission."
        ],
        weights: { "0": { strategic: 2, political: 1 }, "1": { strategic: 1, social: 2 }, "2": { strategic: -1 }, "3": { strategic: -2 } }
    },
    {
        id: "strat_005",
        category: "Strategic Intelligence",
        scenario: "You are investing. Option A: 90% chance of 10% return. Option B: 10% chance of 500% return. You are young.",
        options: [
            "Option A (Safe compound growth).",
            "Option B (Asymmetric bet).",
            "Split 50/50.",
            "Keep cash."
        ],
        weights: { "0": { strategic: 1 }, "1": { strategic: 3, adaptive: 1 }, "2": { strategic: 2 }, "3": { strategic: -2 } }
    },
    {
        id: "strat_006",
        category: "Strategic Intelligence",
        scenario: "Your startup is offered a buyout for $10M. You own 50%. You believe it could be worth $1B in 5 years, but 90% chance of failure.",
        options: [
            "Sell now. Take the win.",
            "Reject. Go for the billion.",
            "Sell half your stake.",
            "Counter for $12M."
        ],
        weights: { "0": { strategic: 1, logical: 1 }, "1": { strategic: 2, adaptive: 2 }, "2": { strategic: 3 }, "3": { strategic: 0 } }
    },
    {
        id: "strat_007",
        category: "Strategic Intelligence",
        scenario: "Efficiency expert suggests firing 20% of staff to boost profits by 30%. The company is already profitable.",
        options: [
            "Fire them. Maximize shareholder value.",
            "Keep them. Loyalty pays long term.",
            "Fire 10% as a compromise.",
            "Retrain them for new roles."
        ],
        weights: { "0": { strategic: 1, social: -3 }, "1": { strategic: 1, social: 2 }, "2": { strategic: -1 }, "3": { strategic: 3, adaptive: 2 } }
    },
    {
        id: "strat_008",
        category: "Strategic Intelligence",
        scenario: "You launch a product. Users hate the main feature but love a side feature you built in a day.",
        options: [
            "Educate users on why the main feature is good.",
            "Pivot entirely to the side feature.",
            "Kill the product.",
            "Keep both and confuse the message."
        ],
        weights: { "0": { strategic: -2 }, "1": { strategic: 3, adaptive: 3 }, "2": { strategic: 0 }, "3": { strategic: -2 } }
    },
    {
        id: "strat_009",
        category: "Strategic Intelligence",
        scenario: "Your supplier doubles prices overnight. You are their biggest customer.",
        options: [
            "Pay it. You have no choice.",
            "Threaten to walk away (Bluff).",
            "Immediately start building your own supply chain.",
            "Sue for breach of contract."
        ],
        weights: { "0": { strategic: -2 }, "1": { strategic: 1, political: 2 }, "2": { strategic: 3 }, "3": { strategic: 0 } }
    },
    {
        id: "strat_010",
        category: "Strategic Intelligence",
        scenario: "You are a manager. Your team works best remotely. Your boss demands Return to Office.",
        options: [
            "Enforce the mandate strictly.",
            "Fight the boss openly.",
            "Malicious compliance (Come in but do nothing).",
            "Negotiate a hybrid pilot program."
        ],
        weights: { "0": { strategic: 1, political: -1 }, "1": { strategic: -1, political: -2 }, "2": { strategic: -2 }, "3": { strategic: 3, political: 2 } }
    },
    {
        id: "strat_011",
        category: "Strategic Intelligence",
        scenario: "A client wants a feature that will break your architecture long-term. They pay 50% of your revenue.",
        options: [
            "Build it. Revenue is king.",
            "Refuse. Tech debt kills companies.",
            "Build a 'hacky' version just for them.",
            "Charge them 5x to rebuild the platform properly."
        ],
        weights: { "0": { strategic: -1 }, "1": { strategic: 1 }, "2": { strategic: -2 }, "3": { strategic: 3 } }
    },
    {
        id: "strat_012",
        category: "Strategic Intelligence",
        scenario: "You have 10 hours. Task A takes 10h (Value: 100). Task B, C, D take 3h each (Value: 40 each).",
        options: [
            "Do Task A only.",
            "Do B, C, D.",
            "Start A, see how far you get.",
            "Delegate everything."
        ],
        weights: { "0": { strategic: 1 }, "1": { strategic: 3 }, "2": { strategic: -2 }, "3": { strategic: 1 } }
    },

    // ==========================================
    // 3. SOCIAL INTELLIGENCE
    // Focus: Empathy, conflict handling, social awareness, communication choices.
    // ==========================================

    {
        id: "soc_001",
        category: "Social Intelligence",
        scenario: "At a funeral, a distant relative starts making the eulogy about themselves. People are uncomfortable.",
        options: [
            "Interrupt them and guide them back.",
            "Let them finish to avoid a scene.",
            "Walk out visibly.",
            "Laugh nervously."
        ],
        weights: { "0": { social: 3, political: 1 }, "1": { social: 1 }, "2": { social: -2 }, "3": { social: -3 } }
    },
    {
        id: "soc_002",
        category: "Social Intelligence",
        scenario: "A friend asks 'Do I look fat in this?' prior to a major event. They do, and the outfit is bad.",
        options: [
            "Yes. Change immediately.",
            "You look great! (Lie).",
            "It's not your best color. Try the blue one.",
            "Silence."
        ],
        weights: { "0": { social: -2 }, "1": { social: -1 }, "2": { social: 3 }, "3": { social: -3 } }
    },
    {
        id: "soc_003",
        category: "Social Intelligence",
        scenario: "You are hosting a dinner. Two guests have deep political hatred for each other. One brings it up.",
        options: [
            "Join the debate.",
            "Kick them out.",
            "Firmly change subject: 'No politics at the table'.",
            "Spill a drink to create a distraction."
        ],
        weights: { "0": { social: -2 }, "1": { social: -3 }, "2": { social: 3, political: 1 }, "3": { social: 1, adaptive: 2 } }
    },
    {
        id: "soc_004",
        category: "Social Intelligence",
        scenario: "A coworker takes credit for your idea in a meeting. The boss loves it.",
        options: [
            "Call them a liar immediately.",
            "Say 'Thanks for presenting my idea so well.'",
            "Wait and complain to HR.",
            "Let it go."
        ],
        weights: { "0": { social: -2, political: -2 }, "1": { social: 3, political: 3 }, "2": { social: -1 }, "3": { social: -1 } }
    },
    {
        id: "soc_005",
        category: "Social Intelligence",
        scenario: "You receive a text meant for someone else from your partner. It's flirty but ambiguous.",
        options: [
            "Confront immediately with rage.",
            "Reply 'Wrong number?'.",
            "Wait and observe their behavior for a week.",
            "Ignore it."
        ],
        weights: { "0": { social: -2 }, "1": { social: 3, strategic: 1 }, "2": { social: 1, strategic: 2 }, "3": { social: -1 } }
    },
    {
        id: "soc_006",
        category: "Social Intelligence",
        scenario: "A friend borrows money and keeps 'forgetting' to pay back. It's a small amount but annoying.",
        options: [
            "Demand it publicly.",
            "Let it go but never lend again.",
            "Send a chaotic venmo request.",
            "Ask them if they are struggling financially."
        ],
        weights: { "0": { social: -2 }, "1": { social: 1, strategic: 2 }, "2": { social: 0 }, "3": { social: 3 } }
    },
    {
        id: "soc_007",
        category: "Social Intelligence",
        scenario: "You are new in a group. They all laugh at an inside joke you don't understand.",
        options: [
            "Laugh along (Fake it).",
            "Ask 'What's the joke?'.",
            "Look confused and silent.",
            "Make a joke about being an outsider."
        ],
        weights: { "0": { social: 1 }, "1": { social: 1 }, "2": { social: 0 }, "3": { social: 3 } }
    },
    {
        id: "soc_008",
        category: "Social Intelligence",
        scenario: "Your boss has spinach in teeth before a client pitch.",
        options: [
            "Tell them immediately.",
            "Signal silently.",
            "Tell them after the pitch.",
            "Ignore it."
        ],
        weights: { "0": { social: 1 }, "1": { social: 3 }, "2": { social: -2 }, "3": { social: -2 } }
    },
    {
        id: "soc_009",
        category: "Social Intelligence",
        scenario: "A child gives you a drawing. It is ugly.",
        options: [
            "Critique the perspective.",
            "Praise the effort and creativity.",
            "Put it in the trash when they leave.",
            "Ask what it is supposed to be."
        ],
        weights: { "0": { social: -3 }, "1": { social: 3 }, "2": { social: -1 }, "3": { social: 0 } }
    },
    {
        id: "soc_010",
        category: "Social Intelligence",
        scenario: "Someone keeps interrupting you.",
        options: [
            "Keep talking louder.",
            "Stop participating.",
            "Say 'Please let me finish'.",
            "Interrupt them back."
        ],
        weights: { "0": { social: -1 }, "1": { social: -2 }, "2": { social: 3, political: 2 }, "3": { social: -2 } }
    },
    {
        id: "soc_011",
        category: "Social Intelligence",
        scenario: "You match with a friend's ex on a dating app.",
        options: [
            "Swipe right. All appears fair in love.",
            "Swipe left. Bro code / Girl code.",
            "Message them to announce it to the friend.",
            "Ask the friend for permission first."
        ],
        weights: { "0": { social: -2 }, "1": { social: 2 }, "2": { social: -3 }, "3": { social: 3 } }
    },
    {
        id: "soc_012",
        category: "Social Intelligence",
        scenario: "You arrive at a party and realize you are severely underdressed.",
        options: [
            "Leave immediately.",
            "Apologize to everyone you meet.",
            "Own it. Act like it was a choice.",
            "Hide in the kitchen."
        ],
        weights: { "0": { social: -1 }, "1": { social: -1 }, "2": { social: 3, political: 2 }, "3": { social: -2 } }
    },

    // ==========================================
    // 4. POLITICAL & POWER INTELLIGENCE
    // Focus: Influence, negotiation, moral ambiguity, decision-making under pressure.
    // ==========================================

    {
        id: "pol_001",
        category: "Political Intelligence",
        scenario: "You know a secret that could destroy your rival's career. They just offered you a truce.",
        options: [
            "Use the secret. Finish them.",
            "Accept the truce. Keep the secret as leverage.",
            "Accept truce. Delete the secret.",
            "Tell them you know, then negotiate."
        ],
        weights: { "0": { political: 1, strategic: -1 }, "1": { political: 3, strategic: 2 }, "2": { political: -2 }, "3": { political: 2 } }
    },
    {
        id: "pol_002",
        category: "Political Intelligence",
        scenario: "Your boss asks you to sign off on a report that hides a financial loss. Refusing gets you fired.",
        options: [
            "Sign it. Keep your job.",
            "Refuse. Integrity first.",
            "Sign it but keep a copy as insurance/evidence.",
            "Leak it to the press anonymously."
        ],
        weights: { "0": { political: -1 }, "1": { political: 1, logical: -1 }, "2": { political: 3, strategic: 2 }, "3": { political: 2, risk: 2 } }
    },
    {
        id: "pol_003",
        category: "Political Intelligence",
        scenario: "You are negotiating salary. They offer $100k. You want $120k.",
        options: [
            "Accept immediately.",
            "Say 'I need $120k or I walk.'",
            "Silence. Stare at them.",
            "Ask 'Is that the best you can do?'"
        ],
        weights: { "0": { political: -2 }, "1": { political: 1 }, "2": { political: 2 }, "3": { political: 3 } }
    },
    {
        id: "pol_004",
        category: "Political Intelligence",
        scenario: "A colleague is spreading rumors about you. They are popular.",
        options: [
            "Confront them publicly.",
            "Spread rumors about them.",
            "Befriend them to neutralize the threat.",
            "Focus on work and ignore."
        ],
        weights: { "0": { political: -1 }, "1": { political: -2 }, "2": { political: 3, social: 2 }, "3": { political: 0 } }
    },
    {
        id: "pol_005",
        category: "Political Intelligence",
        scenario: "You are the leader. A faction is rebelling. If you crush them, you look a tyrant. If not, you look weak.",
        options: [
            "Crush them publicly.",
            "Hold a meeting to hear their demands.",
            "Promote the rebel leader to a useless high position.",
            "Resign."
        ],
        weights: { "0": { political: 1 }, "1": { political: 0 }, "2": { political: 3, strategic: 3 }, "3": { political: -3 } }
    },
    {
        id: "pol_006",
        category: "Political Intelligence",
        scenario: "You have 51% of the vote. The minority 49% hates your policy.",
        options: [
            "Force it through. You won.",
            "Dilute the policy to please everyone.",
            "Implement it slowly to reduce shock.",
            "Find a distraction to keep them busy."
        ],
        weights: { "0": { political: 1 }, "1": { political: -2 }, "2": { political: 2 }, "3": { political: 2, strategic: 1 } }
    },
    {
        id: "pol_007",
        category: "Political Intelligence",
        scenario: "Someone compliments you excessively in public. You suspect manipulation.",
        options: [
            "Accept it graciously.",
            "Return the compliment excessively.",
            "Ask 'What do you want?'",
            "Ignore them."
        ],
        weights: { "0": { political: 1 }, "1": { political: 3 }, "2": { political: -1 }, "3": { political: 0 } }
    },
    {
        id: "pol_008",
        category: "Political Intelligence",
        scenario: "You are caught in a lie.",
        options: [
            "Admit it immediately.",
            "Double down. Deny everything.",
            "Pivot to a related truth.",
            "Blame someone else."
        ],
        weights: { "0": { political: 1, social: 2 }, "1": { political: -1 }, "2": { political: 3 }, "3": { political: -2 } }
    },
    {
        id: "pol_009",
        category: "Political Intelligence",
        scenario: "You help a friend get a job. They turn out to be incompetent. It reflects bad on you.",
        options: [
            "Help them improve secretly.",
            "Tell the boss you made a mistake.",
            "Distance yourself publicly.",
            "Do their work for them."
        ],
        weights: { "0": { political: 2, social: 2 }, "1": { political: 2, social: -1 }, "2": { political: 1 }, "3": { political: -2 } }
    },
    {
        id: "pol_010",
        category: "Political Intelligence",
        scenario: "Two powerful leaders invite you to join their coalition. You can only pick one.",
        options: [
            "Pick the stronger one.",
            "Pick the nicer one.",
            "Decline both to stay neutral.",
            "Pit them against each other."
        ],
        weights: { "0": { political: 2 }, "1": { political: -1 }, "2": { political: 1 }, "3": { political: 3 } }
    },
    {
        id: "pol_011",
        category: "Political Intelligence",
        scenario: "You are given credit for a team success.",
        options: [
            "Take it.",
            "Share it with the team.",
            "Give it all to the team.",
            "Use it to ask for a raise."
        ],
        weights: { "0": { political: -1 }, "1": { political: 3 }, "2": { political: 1 }, "3": { political: 2 } }
    },
    {
        id: "pol_012",
        category: "Political Intelligence",
        scenario: "A rule prevents you from doing something good.",
        options: [
            "Follow the rule.",
            "Break it openly.",
            "Break it secretly.",
            "Lobby to change the rule."
        ],
        weights: { "0": { political: -1 }, "1": { political: 1 }, "2": { political: 2 }, "3": { political: 3 } }
    },


    // ==========================================
    // 5. ADAPTIVE INTELLIGENCE
    // Focus: Handling uncertainty, pivoting, learning, chaos.
    // ==========================================

    {
        id: "adt_001",
        category: "Adaptive Intelligence",
        scenario: "You trained 1 year for a marathon. It's cancelled. A cycling race is tomorrow.",
        options: [
            "Join the cycling race.",
            "Run the marathon distance alone anyway.",
            "Sulk and eat pizza.",
            "Find a new marathon next month."
        ],
        weights: { "0": { adaptive: 3 }, "1": { adaptive: 2 }, "2": { adaptive: -2 }, "3": { adaptive: 1 } }
    },
    {
        id: "adt_002",
        category: "Adaptive Intelligence",
        scenario: "You move to a country where you don't speak the language. Your phone dies.",
        options: [
            "Panic.",
            "Find a police officer.",
            "Use gestures and drawings to find a hotel.",
            "Sit in a cafe and wait."
        ],
        weights: { "0": { adaptive: -3 }, "1": { adaptive: 1 }, "2": { adaptive: 3 }, "3": { adaptive: -1 } }
    },
    {
        id: "adt_003",
        category: "Adaptive Intelligence",
        scenario: "The software you legally bought is discontinued. You rely on it for work.",
        options: [
            "Keep using the old version forever.",
            "Learn a new software immediately.",
            "Crack/Pirate the software to keep it working.",
            "Switch career."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: 3 }, "2": { adaptive: 1 }, "3": { adaptive: -3 } }
    },
    {
        id: "adt_004",
        category: "Adaptive Intelligence",
        scenario: "You planned a surprise outdoor party. It starts raining heavily.",
        options: [
            "Cancel the party.",
            "Move everyone into your tiny apartment.",
            "Tell everyone to bring umbrellas and dance in the rain.",
            "Go to a bar instead."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: 1 }, "2": { adaptive: 2 }, "3": { adaptive: 3 } }
    },
    {
        id: "adt_005",
        category: "Adaptive Intelligence",
        scenario: "Your car breaks down in the middle of a roadtrip with friends.",
        options: [
            "Call a tow truck and wait silently.",
            "Try to fix it yourself (you know nothing).",
            "Turn it into a camping adventure while waiting.",
            "Blame the driver."
        ],
        weights: { "0": { adaptive: 0 }, "1": { adaptive: -1 }, "2": { adaptive: 3 }, "3": { adaptive: -2 } }
    },
    {
        id: "adt_006",
        category: "Adaptive Intelligence",
        scenario: "You lose your job to AI.",
        options: [
            "Protest against AI.",
            "Learn to use AI to do your job faster.",
            "Switch to a trade (plumbing/carpentry).",
            "Give up."
        ],
        weights: { "0": { adaptive: -1 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: -3 } }
    },
    {
        id: "adt_007",
        category: "Adaptive Intelligence",
        scenario: "You order a steak. The waiter brings a salad and apologizes profusely. They are busy.",
        options: [
            "Send it back. You want steak.",
            "Eat the salad. It's fine.",
            "Eat the salad but ask for a discount.",
            "Leave."
        ],
        weights: { "0": { adaptive: -1 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: -2 } }
    },
    {
        id: "adt_008",
        category: "Adaptive Intelligence",
        scenario: "You are debating someone. They provide evidence that proves you wrong.",
        options: [
            "Attack their source.",
            "Change the subject.",
            "Admit you were wrong and thank them.",
            "Stop talking."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: -1 }, "2": { adaptive: 3 }, "3": { adaptive: -1 } }
    },
    {
        id: "adt_009",
        category: "Adaptive Intelligence",
        scenario: "Your presentation slides get deleted 5 mins before the meeting.",
        options: [
            "Cancel the meeting.",
            "Present from memory/whiteboard.",
            "Ask for 1 hour delay.",
            "Panic."
        ],
        weights: { "0": { adaptive: -1 }, "1": { adaptive: 3 }, "2": { adaptive: 1 }, "3": { adaptive: -3 } }
    },
    {
        id: "adt_010",
        category: "Adaptive Intelligence",
        scenario: "You accidentally walk into the wrong interview. They offer you a different job.",
        options: [
            "Apologize and leave.",
            "Do the interview anyway.",
            "Explain the mistake but ask to chat.",
            "Pretend to be the person they expected."
        ],
        weights: { "0": { adaptive: 0 }, "1": { adaptive: 2, risk: 2 }, "2": { adaptive: 3 }, "3": { adaptive: 1, social: -1 } }
    },
    {
        id: "adt_011",
        category: "Adaptive Intelligence",
        scenario: "Rules of the game change halfway through play.",
        options: [
            "Quit. That's unfair.",
            "Complain but keep playing.",
            "Analyze new rules and exploit them.",
            "Cheat."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: -1 }, "2": { adaptive: 3 }, "3": { adaptive: 1 } }
    },
    {
        id: "adt_012",
        category: "Adaptive Intelligence",
        scenario: "You are locked in a room. The key doesn't work.",
        options: [
            "Bang on the door.",
            "Check the window.",
            "Pick the lock.",
            "Wait for help."
        ],
        weights: { "0": { adaptive: 0 }, "1": { adaptive: 2 }, "2": { adaptive: 3 }, "3": { adaptive: 0 } }
    }
];
