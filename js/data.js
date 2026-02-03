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
    {
        id: "log_013",
        category: "Logical Intelligence",
        scenario: "A box contains 5 red balls and 3 blue balls. You pick two without replacement. Probability both are red?",
        options: [
            "5/8 * 5/8",
            "5/8 * 4/7",
            "5/8 * 1/2",
            "Cannot calculate."
        ],
        weights: { "0": { logical: -1 }, "1": { logical: 3 }, "2": { logical: -1 }, "3": { logical: -2 } }
    },
    {
        id: "log_014",
        category: "Logical Intelligence",
        scenario: "All machines are loud. Some loud things are dangerous. Therefore...",
        options: [
            "All machines are dangerous.",
            "Some machines are dangerous.",
            "Some dangerous things are machines.",
            "None of the above follows logically."
        ],
        weights: { "0": { logical: -2 }, "1": { logical: -1 }, "2": { logical: -1 }, "3": { logical: 3 } }
    },
    {
        id: "log_015",
        category: "Logical Intelligence",
        scenario: "If A > B and B < C, what is the relationship between A and C?",
        options: [
            "A > C",
            "A < C",
            "A = C",
            "Unknown"
        ],
        weights: { "0": { logical: -2 }, "1": { logical: -2 }, "2": { logical: -2 }, "3": { logical: 3 } }
    },
    {
        id: "log_016",
        category: "Logical Intelligence",
        scenario: "Classic Monty Hall: 3 doors. Prize behind one. You pick Door 1. Host opens Door 3 (Goat). Do you switch to Door 2?",
        options: [
            "Yes, always switch.",
            "No, stick with original choice.",
            "It doesn't matter (50/50).",
            "Flip a coin."
        ],
        weights: { "0": { logical: 3 }, "1": { logical: -1 }, "2": { logical: -2 }, "3": { logical: -1 } }
    },
    {
        id: "log_017",
        category: "Logical Intelligence",
        scenario: "Sequence: 2, 6, 12, 20, 30, ... What is next?",
        options: [
            "40",
            "42",
            "36",
            "48"
        ],
        weights: { "0": { logical: -1 }, "1": { logical: 3 }, "2": { logical: -2 }, "3": { logical: -1 } }
    },
    {
        id: "log_018",
        category: "Logical Intelligence",
        scenario: "Five machines take 5 minutes to make 5 widgets. How long do 100 machines take to make 100 widgets?",
        options: [
            "100 minutes",
            "5 minutes",
            "20 minutes",
            "50 minutes"
        ],
        weights: { "0": { logical: -2 }, "1": { logical: 3 }, "2": { logical: -1 }, "3": { logical: -1 } }
    },
    {
        id: "log_019",
        category: "Logical Intelligence",
        scenario: "You have a 3L jug and a 5L jug. You need exactly 4L of water. Is it possible?",
        options: [
            "Yes, fill 5, pour to 3, dump 3, pour 2 to 3, fill 5, pour to 3.",
            "No, you need a 4L jug.",
            "Yes, estimate half of the 5L jug.",
            "Yes, fill both and pour out half."
        ],
        weights: { "0": { logical: 3 }, "1": { logical: -2 }, "2": { logical: -1 }, "3": { logical: -1 } }
    },
    {
        id: "log_020",
        category: "Logical Intelligence",
        scenario: "If 'All Bloops are Glerks' is FALSE, what must be true?",
        options: [
            "No Bloops are Glerks.",
            "Some Bloops are not Glerks.",
            "All Glerks are Bloops.",
            "Some Glerks are not Bloops."
        ],
        weights: { "0": { logical: -1 }, "1": { logical: 3 }, "2": { logical: -2 }, "3": { logical: -1 } }
    },
    {
        id: "log_021",
        category: "Logical Intelligence",
        scenario: "A bat is red. Anything red is hot. Therefore...",
        options: [
            "The bat is hot.",
            "Hot things are bats.",
            "Some bats are not hot.",
            "Red things are bats."
        ],
        weights: { "0": { logical: 3 }, "1": { logical: -2 }, "2": { logical: -3 }, "3": { logical: -2 } }
    },
    {
        id: "log_022",
        category: "Logical Intelligence",
        scenario: "You are in a race. You pass the person in 2nd place. What place are you in?",
        options: [
            "1st",
            "2nd",
            "3rd",
            "Dead last"
        ],
        weights: { "0": { logical: -2 }, "1": { logical: 3 }, "2": { logical: -2 }, "3": { logical: -3 } }
    },
    {
        id: "log_023",
        category: "Logical Intelligence",
        scenario: "Mary's father has 5 daughters: Nana, Nene, Nini, Nono. What is the name of the 5th daughter?",
        options: [
            "Nunu",
            "Mary",
            "Nina",
            "Nana"
        ],
        weights: { "0": { logical: -2, adaptive: -1 }, "1": { logical: 3 }, "2": { logical: -1 }, "3": { logical: -2 } }
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
    {
        id: "strat_013",
        category: "Strategic Intelligence",
        scenario: "A larger company wants to merge. You lose control but gain massive resources. Dominance is likely.",
        options: [
            "Accept. Scale is everything.",
            "Reject. Control is everything.",
            "Accept but demand autonomy clause.",
            "Sell entirely and start over."
        ],
        weights: { "0": { strategic: 2, political: 1 }, "1": { strategic: 0 }, "2": { strategic: 3 }, "3": { strategic: 2 } }
    },
    {
        id: "strat_014",
        category: "Strategic Intelligence",
        scenario: "You have a monopoly. The government threatens regulation.",
        options: [
            "Lobby against it.",
            "Self-regulate to appease them.",
            "Break up your own company into subsidiaries.",
            "Ignore it until sued."
        ],
        weights: { "0": { strategic: 1, political: 2 }, "1": { strategic: 3 }, "2": { strategic: 2 }, "3": { strategic: -2 } }
    },
    {
        id: "strat_015",
        category: "Strategic Intelligence",
        scenario: "Your product is popular but losing money. Raising prices will lose 30% of users.",
        options: [
            "Raise prices. Profitability is required.",
            "Keep bleeding money to grow userbase.",
            "Introduce ads/micro-transactions.",
            "Shut it down."
        ],
        weights: { "0": { strategic: 2 }, "1": { strategic: -1 }, "2": { strategic: 3 }, "3": { strategic: -2 } }
    },
    {
        id: "strat_016",
        category: "Strategic Intelligence",
        scenario: "You have limited fuel. You can save 3 people nearby or drive further to potentially save 10 people (50% chance fuel runs out).",
        options: [
            "Save the 3 (Guaranteed win).",
            "Risk it for the 10 (Max utility).",
            "Call for backup and wait.",
            "Save 1 then try for others."
        ],
        weights: { "0": { strategic: 2 }, "1": { strategic: 3, risk: 2 }, "2": { strategic: -1 }, "3": { strategic: 0 } }
    },
    {
        id: "strat_017",
        category: "Strategic Intelligence",
        scenario: "Market conditions change. Your 5-year plan is now obsolete in Year 2.",
        options: [
            "Stick to the plan (Consistency).",
            "Scrap it and start over.",
            "Adapt existing plan to new reality.",
            "Blame the market."
        ],
        weights: { "0": { strategic: -2 }, "1": { strategic: 0 }, "2": { strategic: 3, adaptive: 2 }, "3": { strategic: -3 } }
    },
    {
        id: "strat_018",
        category: "Strategic Intelligence",
        scenario: "You can automate a job but it requires firing a loyal employee.",
        options: [
            "Automate. Progress is inevitable.",
            "Keep employee. Loyalty is rare.",
            "Automate and retrain employee.",
            "Delay automation."
        ],
        weights: { "0": { strategic: 1, social: -2 }, "1": { strategic: -1, social: 2 }, "2": { strategic: 3, social: 1 }, "3": { strategic: -1 } }
    },
    {
        id: "strat_019",
        category: "Strategic Intelligence",
        scenario: "You are winning a war but your supply lines are overextended. Enemy is retreating.",
        options: [
            "Chase them down (Total Victory).",
            "Halt and fortify. Secure gains.",
            "Retreat to better position.",
            "Send a small squad to chase."
        ],
        weights: { "0": { strategic: -2, risk: 3 }, "1": { strategic: 3 }, "2": { strategic: 0 }, "3": { strategic: 1 } }
    },
    {
        id: "strat_020",
        category: "Strategic Intelligence",
        scenario: "You can buy a competitor for cheap, but their tech is outdated (Legacy code).",
        options: [
            "Buy them for their userbase (migration).",
            "Buy them to shut them down.",
            "Don't buy. Bad tech is a liability.",
            "Buy and try to fix their tech."
        ],
        weights: { "0": { strategic: 3 }, "1": { strategic: 2 }, "2": { strategic: 1 }, "3": { strategic: -2 } }
    },
    {
        id: "strat_021",
        category: "Strategic Intelligence",
        scenario: "Your main product is illegal in a new huge market. You can tweak it to be legal but less fun.",
        options: [
            "Tweak it. Access the market.",
            "Keep it as is. Niche but premium.",
            "Launch a separate 'Lite' version.",
            "Bribe the regulators."
        ],
        weights: { "0": { strategic: 1 }, "1": { strategic: 1 }, "2": { strategic: 3, adaptive: 2 }, "3": { strategic: -3, political: -2 } }
    },
    {
        id: "strat_022",
        category: "Strategic Intelligence",
        scenario: "You have 1 shot to pitch to an investor. Do you pitch the Safe realistic plan or the Moonshot?",
        options: [
            "Safe plan (Show competence).",
            "Moonshot (Show vision).",
            "A mix of both (Confusing).",
            "Ask them what they want first."
        ],
        weights: { "0": { strategic: 1 }, "1": { strategic: 2, risk: 2 }, "2": { strategic: -2 }, "3": { strategic: 3, social: 1 } }
    },
    {
        id: "strat_023",
        category: "Strategic Intelligence",
        scenario: "A crisis hits. 50% revenue drop. Do you cut marketing or R&D?",
        options: [
            "Cut Marketing (Save cash now).",
            "Cut R&D (Save future).",
            "Cut salaries across board.",
            "Cut neither, borrow money."
        ],
        weights: { "0": { strategic: 2 }, "1": { strategic: -3 }, "2": { strategic: 1, social: -1 }, "3": { strategic: 0, risk: 2 } }
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
    {
        id: "soc_013",
        category: "Social Intelligence",
        scenario: "A stranger is crying on a park bench next to you.",
        options: [
            "Ask if they are okay.",
            "Offer a tissue silently.",
            "Move to another bench to give privacy.",
            "Ignore them perfectly."
        ],
        weights: { "0": { social: 2 }, "1": { social: 3 }, "2": { social: 1 }, "3": { social: -2 } }
    },
    {
        id: "soc_014",
        category: "Social Intelligence",
        scenario: "You are invited to two weddings on the same day. One is family, one is a best friend.",
        options: [
            "Go to family. Blood first.",
            "Go to friend. Choice matters.",
            "Split the day (exhausting).",
            "Skip both to avoid conflict."
        ],
        weights: { "0": { social: 2 }, "1": { social: 2 }, "2": { social: 3, adaptive: 2 }, "3": { social: -3 } }
    },
    {
        id: "soc_015",
        category: "Social Intelligence",
        scenario: "A waiter drops food on you. It was an accident.",
        options: [
            "Yell at them.",
            "Demand the manager.",
            "Help them clean it up.",
            "Laugh it off and say it's fine."
        ],
        weights: { "0": { social: -3 }, "1": { social: -2 }, "2": { social: 3 }, "3": { social: 3 } }
    },
    {
        id: "soc_016",
        category: "Social Intelligence",
        scenario: "You forget a person's name immediately after introduction.",
        options: [
            "Fake it and hope.",
            "Ask them to repeat it immediately.",
            "Ask a third person later.",
            "Never address them by name again."
        ],
        weights: { "0": { social: -1 }, "1": { social: 3 }, "2": { social: 2 }, "3": { social: -2 } }
    },
    {
        id: "soc_017",
        category: "Social Intelligence",
        scenario: "A friend is venting. You know exactly how to fix their problem.",
        options: [
            "Give the solution immediately.",
            "Listen and validate feelings first.",
            "Tell them they are overreacting.",
            "Change the subject."
        ],
        weights: { "0": { social: -1 }, "1": { social: 3 }, "2": { social: -3 }, "3": { social: -2 } }
    },
    {
        id: "soc_018",
        category: "Social Intelligence",
        scenario: "You are the third wheel on a date.",
        options: [
            "Make it about you.",
            "Engage both equally.",
            "Find an excuse to leave early.",
            "Sit silently on your phone."
        ],
        weights: { "0": { social: -3 }, "1": { social: 1 }, "2": { social: 3 }, "3": { social: -2 } }
    },
    {
        id: "soc_019",
        category: "Social Intelligence",
        scenario: "You break an expensive vase at a friend's house. No one saw you.",
        options: [
            "Clean it up and confess immediately.",
            "Hide the pieces and leave.",
            "Blame the cat.",
            "Wait for them to find it."
        ],
        weights: { "0": { social: 3 }, "1": { social: -3 }, "2": { social: -2 }, "3": { social: -1 } }
    },
    {
        id: "soc_020",
        category: "Social Intelligence",
        scenario: "A coworker has terrible body odor. It's affecting the team.",
        options: [
            "Leave anonymous hygiene products on their desk.",
            "Tell them privately and gently.",
            "Complain to HR.",
            "Publicly make a joke about the smell."
        ],
        weights: { "0": { social: -1 }, "1": { social: 3 }, "2": { social: 1 }, "3": { social: -3 } }
    },
    {
        id: "soc_021",
        category: "Social Intelligence",
        scenario: "You realize you've been talking about yourself for 20 minutes.",
        options: [
            "Keep going, it's a good story.",
            "Stop abruptly and apologize.",
            "Ask 'But enough about me, how are you?'",
            "Pretend to get a phone call."
        ],
        weights: { "0": { social: -3 }, "1": { social: 1 }, "2": { social: 3 }, "3": { social: -1 } }
    },
    {
        id: "soc_022",
        category: "Social Intelligence",
        scenario: "Your friend asks for a loan. You know they won't pay it back.",
        options: [
            "Give it freely as a gift.",
            "Lie and say you are broke.",
            "Lecture them on finance.",
            "Say 'I don't lend money to friends'."
        ],
        weights: { "0": { social: 2 }, "1": { social: 1 }, "2": { social: -2 }, "3": { social: 3 } }
    },
    {
        id: "soc_023",
        category: "Social Intelligence",
        scenario: "Someone insults your partner in public.",
        options: [
            "Punch them.",
            "Insult them back cleverly.",
            "Take your partner and leave (De-escalate).",
            "Laugh it off."
        ],
        weights: { "0": { social: -2, risk: 2 }, "1": { social: 1 }, "2": { social: 3 }, "3": { social: -1 } }
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
    {
        id: "pol_013",
        category: "Political Intelligence",
        scenario: "An ally betrays you for a promotion. They eventually fail and ask for your help.",
        options: [
            "Help them. Be the bigger person.",
            "Ignore them.",
            "Publicly mock them.",
            "Help them in exchange for a public apology."
        ],
        weights: { "0": { political: 1 }, "1": { political: 1 }, "2": { political: -1 }, "3": { political: 3 } }
    },
    {
        id: "pol_014",
        category: "Political Intelligence",
        scenario: "You need a signature from a bureaucrat who hates you.",
        options: [
            "Beg.",
            "Bribe them.",
            "Find someone who knows them to mediate.",
            "Threaten them."
        ],
        weights: { "0": { political: -2 }, "1": { political: 2, risk: 2 }, "2": { political: 3 }, "3": { political: -1 } }
    },
    {
        id: "pol_015",
        category: "Political Intelligence",
        scenario: "Two departments are fighting. Productivity is zero. As manager, you:",
        options: [
            "Fire both leads.",
            "Force them to work in the same room.",
            "Create a common enemy (competitor).",
            "Pick a side."
        ],
        weights: { "0": { political: 2, strategic: 1 }, "1": { political: 1 }, "2": { political: 3, strategic: 2 }, "3": { political: -2 } }
    },
    {
        id: "pol_016",
        category: "Political Intelligence",
        scenario: "You are asked to give feedback on a peer. They are good but threaten your promotion.",
        options: [
            "Praises them highly (Earn trust).",
            "Criticize them subtly (Sabotage).",
            "Give neutral, forgettable feedback.",
            "Decline to comment."
        ],
        weights: { "0": { political: 2, social: 1 }, "1": { political: 3, social: -2 }, "2": { political: 1 }, "3": { political: 0 } }
    },
    {
        id: "pol_017",
        category: "Political Intelligence",
        scenario: "A powerful person makes a mistake in a meeting.",
        options: [
            "Correct them immediately.",
            "Correct them privately later.",
            "Let it slide.",
            "Agree with the mistake."
        ],
        weights: { "0": { political: -2 }, "1": { political: 3 }, "2": { political: 1 }, "3": { political: 2 } }
    },
    {
        id: "pol_018",
        category: "Political Intelligence",
        scenario: "Your team fails. The boss is looking for a scapegoat.",
        options: [
            "Volunteer yourself (Sacrifice).",
            "Blame the process/system.",
            "Blame the weakest member.",
            "Stay silent."
        ],
        weights: { "0": { political: 2, social: 2 }, "1": { political: 3 }, "2": { political: -2 }, "3": { political: 0 } }
    },
    {
        id: "pol_019",
        category: "Political Intelligence",
        scenario: "Budget cuts. You have to fire one person: The hardworking novice or the lazy genius.",
        options: [
            "Fire Novice (Meritocracy).",
            "Fire Genius (Culture fit).",
            "Fire neither, cut everyone's pay.",
            "Resign in protest."
        ],
        weights: { "0": { political: 1, strategic: 2 }, "1": { political: 2, social: 2 }, "2": { political: -2 }, "3": { political: -1 } }
    },
    {
        id: "pol_020",
        category: "Political Intelligence",
        scenario: "You are offered a bribe to approve a safe building project faster.",
        options: [
            "Take it. It's safe anyway.",
            "Refuse and process normally.",
            "Refuse and report them.",
            "Ask for more money."
        ],
        weights: { "0": { political: -2, risk: 2 }, "1": { political: 1 }, "2": { political: 3 }, "3": { political: -3 } }
    },
    {
        id: "pol_021",
        category: "Political Intelligence",
        scenario: "Your project failed. A rival department offers to 'absorb' your team.",
        options: [
            "Accept. Save your team's jobs.",
            "Fight it. Maintain independence.",
            "Negotiate a merger of equals.",
            "Quit."
        ],
        weights: { "0": { political: 2, social: 2 }, "1": { political: 1, risk: 2 }, "2": { political: 3 }, "3": { political: -2 } }
    },
    {
        id: "pol_022",
        category: "Political Intelligence",
        scenario: "The CEO asks for your honest opinion on their bad idea.",
        options: [
            "Lie. Say it's great.",
            "Tell the brutal truth.",
            "Give a 'feedback sandwich' (Compliment-Critique-Compliment).",
            "Ask clarifying questions to make them realize it's bad."
        ],
        weights: { "0": { political: 2 }, "1": { political: -2 }, "2": { political: 1 }, "3": { political: 3, social: 2 } }
    },
    {
        id: "pol_023",
        category: "Political Intelligence",
        scenario: "A journalist asks for a comment on a company scandal.",
        options: [
            "Deny everything.",
            "Say 'No comment'.",
            "Leaking the real story anonymously.",
            "Give a controlled, vague statement."
        ],
        weights: { "0": { political: -2 }, "1": { political: 1 }, "2": { political: 2, risk: 2 }, "3": { political: 3 } }
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
    },
    {
        id: "adt_013",
        category: "Adaptive Intelligence",
        scenario: "You wake up in a forest with no memory of how you got there.",
        options: [
            "Pick a direction and walk.",
            "Climb a tree to look for landmarks.",
            "Scream for help.",
            "Build a shelter and wait."
        ],
        weights: { "0": { adaptive: 1 }, "1": { adaptive: 3 }, "2": { adaptive: -1 }, "3": { adaptive: 2 } }
    },
    {
        id: "adt_014",
        category: "Adaptive Intelligence",
        scenario: "A fire alarm goes off during a crucial exam.",
        options: [
            "Keep writing until forced to leave.",
            "Leave immediately.",
            "Grab your bag and leave.",
            "Wait for others to move."
        ],
        weights: { "0": { adaptive: -2, risk: 3 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: 0 } }
    },
    {
        id: "adt_015",
        category: "Adaptive Intelligence",
        scenario: "Your flight is cancelled. You will miss the wedding.",
        options: [
            "Yell at the airline staff.",
            "Rent a car and drive 15 hours.",
            "Video call into the wedding.",
            "Go home."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: 0 } }
    },
    {
        id: "adt_016",
        category: "Adaptive Intelligence",
        scenario: "You prepared a speech. The teleprompter breaks instantly.",
        options: [
            "Freeze and stare.",
            "Wing it / Speak from heart.",
            "Read from paper notes (if available).",
            "Ask to restart.",
        ],
        weights: { "0": { adaptive: -3 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: -1 } }
    },
    {
        id: "adt_017",
        category: "Adaptive Intelligence",
        scenario: "Your key tool breaks mid-job. No replacement parts.",
        options: [
            "Quit for the day.",
            "MacGyver a solution with duct tape.",
            "Order a new one over rush shipping.",
            "Ask a neighbor to borrow theirs."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: 3 }, "2": { adaptive: 0 }, "3": { adaptive: 2 } }
    },
    {
        id: "adt_018",
        category: "Adaptive Intelligence",
        scenario: "You are dropped in a random city with $0.",
        options: [
            "Beg for money.",
            "Find a job/gig immediately.",
            "Find a police station.",
            "Cry."
        ],
        weights: { "0": { adaptive: 0 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: -2 } }
    },
    {
        id: "adt_019",
        category: "Adaptive Intelligence",
        scenario: "You break your dominant hand right before a tennis match.",
        options: [
            "Play with the other hand.",
            "Forfeit.",
            "Tape the racket to your cast.",
            "Reschedule."
        ],
        weights: { "0": { adaptive: 3 }, "1": { adaptive: -1 }, "2": { adaptive: 2 }, "3": { adaptive: 0 } }
    },
    {
        id: "adt_020",
        category: "Adaptive Intelligence",
        scenario: "You are cooking dinner for 10. The oven breaks.",
        options: [
            "Order Pizza.",
            "Change menu to salad/sushi (No cook).",
            "Try to cook 10 meals on a camping stove.",
            "Cancel dinner."
        ],
        weights: { "0": { adaptive: 1 }, "1": { adaptive: 3 }, "2": { adaptive: 2 }, "3": { adaptive: -2 } }
    },
    {
        id: "adt_021",
        category: "Adaptive Intelligence",
        scenario: "Your luggage is lost. You have a meeting in 1 hour in sweatpants.",
        options: [
            "Buy closest suit (likely ill-fitting).",
            "Own the look. 'Silicon Valley Chic'.",
            "Borrow clothes from hotel staff.",
            "Cancel meeting."
        ],
        weights: { "0": { adaptive: 1 }, "1": { adaptive: 3, social: 2 }, "2": { adaptive: 2 }, "3": { adaptive: -2 } }
    },
    {
        id: "adt_022",
        category: "Adaptive Intelligence",
        scenario: "A power outage hits while you are working on a deadline (unsaved).",
        options: [
            "Scream.",
            "Switch to pen and paper to outline ideas.",
            "Drive to a cafe with power.",
            "Wait for power to return."
        ],
        weights: { "0": { adaptive: -2 }, "1": { adaptive: 2 }, "2": { adaptive: 3 }, "3": { adaptive: 0 } }
    },
    {
        id: "adt_023",
        category: "Adaptive Intelligence",
        scenario: "You get lost in a dangerous neighborhood. GPS is dead.",
        options: [
            "Walk fast and look confident.",
            "Hide until multiple cops appear.",
            "Ask a local for directions.",
            "Run."
        ],
        weights: { "0": { adaptive: 3 }, "1": { adaptive: 1 }, "2": { adaptive: 2 }, "3": { adaptive: -1 } }
    }
];
