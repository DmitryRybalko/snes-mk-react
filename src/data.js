import pRain from "./assets/img/rain.png";
import aRain from "./assets/mp3/rain.mp3";
import aReptile from "./assets/mp3/reptile.mp3";
import pReptile from "./assets/img/reptile.png";
import pStryker from "./assets/img/stryker.png";
import aStryker from "./assets/mp3/stryker.mp3";
import pJax from "./assets/img/jax.png";
import aJax from "./assets/mp3/jax.mp3";
import pNightwolf from "./assets/img/nightwolf.png";
import aNightwolf from "./assets/mp3/nightwolf.mp3";
import pJade from "./assets/img/jade.png";
import aJade from "./assets/mp3/jade.mp3";
import pNoob from "./assets/img/noobsaibot.png";
import aNoob from "./assets/mp3/noobsaibot.mp3";
import pSonya from "./assets/img/sonya.png";
import aSonya from "./assets/mp3/sonya.mp3";
import pKano from "./assets/img/kano.png";
import aKano from "./assets/mp3/kano.mp3";
import pMileena from "./assets/img/mileena.png";
import aMileena from "./assets/mp3/mileena.mp3";
import pSubZero from "./assets/img/sub-zero.png";
import aSubZero from "./assets/mp3/sub-zero.mp3";
import pcSubZero from "./assets/img/classic-sub-zero.png";
import acSubZero from "./assets/mp3/sub-zero.mp3";
import pKunglao from "./assets/img/kunglao.png";
import aKunglao from "./assets/mp3/kunglao.mp3";
import pSektor from "./assets/img/sektor.png";
import aSektor from "./assets/mp3/sektor.mp3";
import pKitana from "./assets/img/kitana.png";
import aKitana from "./assets/mp3/kitana.mp3";
import pErmac from "./assets/img/ermac.png";
import aErmac from "./assets/mp3/ermac.mp3";
import pScorpion from "./assets/img/scorpion.png";
import aScorpion from "./assets/mp3/scorpion.mp3";
import pCyrax from "./assets/img/cyrax.png";
import aCyrax from "./assets/mp3/cyrax.mp3";
import pKabal from "./assets/img/kabal.png";
import aKabal from "./assets/mp3/kabal.mp3";
import pSindel from "./assets/img/sindel.png";
import aSindel from "./assets/mp3/sindel.mp3";
import pSmoke from "./assets/img/smoke.png";
import aSmoke from "./assets/mp3/smoke.mp3";
import pLiukang from "./assets/img/liukang.png";
import aLiukang from "./assets/mp3/liukang.mp3";
import pShangtsung from "./assets/img/shangtsung.png";
import aShangtsung from "./assets/mp3/shangtsung.mp3";

const roster = [
  {
    name: "Rain",
    profilePic: pRain,
    id: 0,
    announce: aRain,
    specialMoves: [
      "Lightning: Back, Back, Y",
      "Mind Control Orb: Down, Right, Y",
      "Super Roundhouse: Back, X",
    ],
    finishingMoves: [
      "Brutality: Y, Y, L, A, X, L, A, X, L, Y, B",
      "Stage Fatality: Forward, Down, Forward, A",
      "Babality: Forward, Back, Back, Y",
    ],
    combo: [
      "Combo 1: Y, Y, B, Y",
      "Combo 2: X, X, A, X, Back + X",
      "Combo 3: X, X, B, Y",
    ],
  },
  {
    name: "Reptile",
    profilePic: pReptile,
    id: 1,
    announce: aReptile,
    specialMoves: [
      "Acid Spit: Forward, Forward, Y",
      "Slow Forceball: Back, Back, Y + B",
      "Fast Forceball: Forward, Forward, Y + B",
      "Slide: Back + B + A + L",
      "Invisibility: (Use L) Up, Up, Down, X",
      "Reverse Elbow: Back, Forward, A",
    ],
    finishingMoves: [
      "Fatality 1: (One Jump Away) Back, Forward, Down, L",
      "Fatality 2: (Sweep) Forward, Forward, Up, Up, X",
      "Stage Fatality: L, R, L, L",
      "Brutality: High Punch, L, X, X, L, Y, B, A, A, L, L + B",
      "Babality: Forward, Forward, Back, Down, A",
    ],
    combo: [
      "Combo 1: Y, Y, Down + B",
      "Combo 2: Y, Y, X, Back + X",
      "Combo 3: X, X, Left + X",
    ],
  },
  {
    name: "Stryker",
    profilePic: pStryker,
    id: 2,
    announce: aStryker,
    specialMoves: [
      "Low Grenade: Down, Back, B",
      "High Grenade: Down, Back, Y",
      "Baton Trip: Forward, Back, B",
      "Baton Toss: Forward, Forward, X",
      "Rapid Fire Gun: Back, Forward, Y",
    ],
    finishingMoves: [
      "Fatality 1: (Close) Down, Forward, Down, Forward, L",
      "Fatality 2: (Almost One Screen Away) Forward, Forward, Forward, A",
      "Babality: Down, Forward, Forward, Back, Y",
      "Friendship: Run, B, Run, A",
      "Stage Fatality: Forward, Up, Up, X",
      "Brutality: Y, B, X, A, Y, B, A, X, Y, A, A",
    ],
    combo: [
      "Combo 1: A, Y, Y, B",
      "Combo 2: X, Y, Y, B",
      "Combo 3: A, A, Left + X",
      "Combo 4: A, A, Left + B, Left + X",
    ],
  },
  {
    name: "Jax",
    profilePic: pJax,
    id: 3,
    announce: aJax,
    specialMoves: [
      "Single Missile: Back, Forward, Y",
      "Double Missile: Forward, Forward, Back, Back, Y",
      "Grab: Forward, Forward, B (Mash B for extra hits)",
      "Back Breaker: L in air when next to airborne opponent",
      "Body Slam: Perform a Throw and repeatedly tap Y",
      "Ground Pound: Hold B for 3 seconds, then release",
      "Dash Punch: Forward, Forward, A",
    ],
    finishingMoves: [
      "Fatality 1: Up, Up, Down, Forward, Up, L",
      "Fatality 2: Run, Block, Run, Run, A",
      "Babality: Down, Down, Down, A",
      "Friendship: Low Kick, Run, Run, A",
      "Stage Fatality: Down, Forward, Down, B",
      "Brutality: Y, Y, Y, L, B, Y, Y, Y, L, B, Y",
    ],
    combo: [
      "Combo 1: Y, Y, L, Back + Y",
      "Combo 2: Y, Y, B, L, Back + Y",
      "Combo 3: X, X, Back + X",
      "Combo 4: X, X, Down + Y, Y, L, B, Back + Y",
    ],
  },
  {
    name: "Nightwolf",
    profilePic: pNightwolf,
    id: 4,
    announce: aNightwolf,
    specialMoves: [
      "Arrow: Down, Back, B",
      "Hatchet Uppercut: Down, Forward, Y",
      "Green Shoulder Charge: Forward, Forward, A",
      "Red Shoulder Charge: Back, Back, Forward, X",
      "Glow Shield: Back, Back, Back, X",
    ],
    finishingMoves: [
      "Fatality 1: (Close) Up, Up, Back, Forward, L",
      "Fatality 2: Back, Back, Down, Y",
      "Babality: Forward, Back, Forward, Back, B",
      "Friendship: High Punch, Run, Run, Run, Down",
      "Stage Fatality: Run, Run, L",
      "Brutality: Y, Y, X, A, A, L, L, B, B, Y, X",
    ],
    combo: [
      "Combo 1: Y, Y, B",
      "Combo 2: Y, Y, B, X",
      "Combo 3: Y, Y, B, Back + X",
      "Combo 4: A, Y, Y, B",
    ],
  },
  {
    name: "Jade",
    profilePic: pJade,
    id: 5,
    announce: aJade,
    specialMoves: [
      "Boomerang: Back, Forward, A",
      "Upward Boomerang: Back, Forward, Y",
      "Downward Boomerang: Back, Forward, A",
      "Returning Boomerang: Back, Back, Forward, B",
      "Shadow Kick: Down, Forward, A",
      "Projectile Shield: Back, Forward, X",
    ],
    finishingMoves: [
      "Fatality 1: (Close) Up, Up, Down, Forward, Y",
      "Fatality 2: (Close) R, R, R, L, R",
      "Babality: Down, Down, Forward, Down, X",
      "Friendship: Back, Down, Back, Back, X",
      "Stage Fatality: Back, Forward, Down, Forward, R",
      "Brutality: Y, A, Y, B, X, X, A, L, Y, X",
    ],
    combo: [
      "Combo 1: Y, Y, Down + B, Down + Y",
      "Combo 2: X, X, A, Back + X",
      "Combo 3: Y, Y, Down + B, A, X, Back + A, Back + X",
    ],
  },
  {
    name: "Noobsaibot",
    profilePic: pNoob,
    id: 6,
    announce: aNoob,
    specialMoves: [
      "Shadow Toss: Forward, Forward, Y",
      "Teleport Slam: Down, Up",
      "Fireball: Down, Forward, B",
    ],
    finishingMoves: [
      "Babality: Forward, Forward, Forward, B",
      "Stage Fatality: Forward, Down, Forward, L",
      "Brutality: Y, A, B, L, A, X, Y, B, L, A, X",
    ],
    combo: [
      "Combo 1: A, A, A, A",
      "Combo 2: Y, Y, Down + B, X",
      "Combo 3: Y, Y, B, X",
      "Combo 4: X, A, A, A",
      "Combo 5: Down, Up, Up, Y",
    ],
  },
  {
    name: "Sonya",
    profilePic: pSonya,
    id: 7,
    announce: aSonya,
    specialMoves: [
      "Ring Toss: Down, Forward, B",
      "Leg Grab: Down + B + L",
      "Square Wave Punch: Forward, Back, Y",
      "Rising Bicycle Kick: Back, Back, Down, X",
    ],
    finishingMoves: [
      "Fatality 1: Back, Forward, Down, Down, R",
      "Fatality 2: (Hold R + L) Up, Up, Back, Down, (Release R + L)",
      "Babality: Down, Down, Forward, A",
      "Friendship: Back, Forward, Down, Forward, R",
      "Stage Fatality: Forward, Forward, Down, Y",
      "Brutality: Y, A, L, Y, A, L, Y, L, X, A",
    ],
    combo: [
      "Combo 1: Y, Y, B, Y",
      "Combo 2: X, X, Back + X",
      "Combo 3: X, X, Y, Y, B, Back + Y",
      "Combo 4: Y, Y, B, Left + Y",
      "Combo 5: X, X, Y, Y, Up + B",
    ],
  },
  {
    name: "Kano",
    profilePic: pKano,
    id: 8,
    announce: aKano,
    specialMoves: [
      "Cannonball: Hold A for 3 seconds and release",
      "Knife Throw: Down, Back, Y",
      "Blade Swipe: Down, Forward, Y",
      "Grab and Shake: Down, Forward, B",
      "Air Throw: L in air when next to airborne opponent",
      "High Cannon Ball: Forward, Down, Forward, X",
    ],
    finishingMoves: [
      "Fatality 1: (Hold B) Forward, Down, Down, Forward, (Release B)",
      "Fatality 2: (Close) B, L, L, X",
      "Babality: Forward, Forward, Down, Down, A",
      "Friendship: Low Kick, Run, Run, X",
      "Stage Fatality: Up, UP, Back, A",
      "Brutality: Y, B, L, Y, L, X, A, L, X, A",
    ],
    combo: [
      "Combo 1: Y, Y, Down + B, Down + Y",
      "Combo 2: X, X, A, Back + X",
      "Combo 3: Y, Y, X, A, Back + X",
      "Combo 4: Y, Y, B",
      "Combo 5: A, B, Up",
      'Combo 6: A, B, "High Cannon Ball"',
      "Combo 7: A, Down + B, Down + Y",
    ],
  },
  {
    name: "Mileena",
    profilePic: pMileena,
    id: 9,
    announce: aMileena,
    specialMoves: [
      "Sai Toss: Hold Y for 2 seconds and release",
      "Teleport Kick: Forward, Forward, A",
      "Ground Roll: Back, Back, Down, X",
    ],
    finishingMoves: [
      "Fatality 1: (One Screen Away) Back, Back, Back, Forward, A",
      "Fatality 2: (Close) Down, Forward, Down, Forward, B",
      "Babality: Down, Down, Forward, Forward, Y",
      "Friendship: Down, Down, Back, Forward, Y",
      "Stage Fatality: L, R, L, L",
      "Brutality: Y, B, B, Y, L, X, A, A, X, L, Y",
    ],
    combo: [
      "Combo 1: Y, Y, X, X, Ground Roll",
      "Combo 2: Y, Y, X, X, Up + A, Up + X",
      "Combo 3: X, X, Down, Forward + A",
      "Combo 4: Y, Y, Up + B, Down + B",
      "Combo 5: X, X, Up + A, Up + X",
    ],
  },
  {
    name: "Sub-zero",
    profilePic: pSubZero,
    id: 10,
    announce: aSubZero,
    specialMoves: [
      "Freeze: Down, Forward, B",
      "Ice Shower: Down, Forward, Y",
      "Front Ice Shower: Down, Forward, Back, Y",
      "Behind Ice Shower: Down, Back, Forward, Y",
      "Ice Clone: Down, Back, B",
      "Ground Slide: Back + B + A + L",
    ],
    finishingMoves: [
      "Fatality 1: (Close) L, L, R, L, R",
      "Fatality 2: (Outside Sweep) Back, Back, Down, Back, R",
      "Babality: Down, Back, Back, X",
      "Friendship: A, R, R, Up",
      "Stage Fatality: Back, Down, Forward, Forward, X",
      "Brutality: Y, A, X, B, Y, X, X, Y, Y, B",
    ],
    combo: [
      "Combo 1: X, X, Back + X",
      "Combo 2: Y, Y, B, A, X, Back + X",
      "Combo 3: Y, Y, A, X, Left + X",
      "Combo 4: Jump, Y, Y, Y, B, A, X, Left + X, 'Ground Slide'",
      "Combo 5: Kick while jump, 'Ground Slide'",
    ],
  },
  {
    name: "Sub-zero",
    profilePic: pcSubZero,
    id: 11,
    announce: acSubZero,
    specialMoves: [
      "Freeze: Down, Forward, B",
      "Ground Freeze: Down, Back, A",
      "Slide: Back + B + L + A",
    ],
    finishingMoves: [
      "Fatality 1: Down, Down, Down, Forward, Y",
      "Babality: Down, Back, Back, X",
      "Stage Fatality: Forward, Down, Forward, Forward, Y",
      "Brutality: Y, B, Y, L, A, A, X, X, X, B, Y, B",
    ],
    combo: [
      "Combo 1: Forward + A, Back + X, Forward + A",
      "Combo 2: Y, Y, Down + B, Down + Y",
      "Combo 3: Y, Y, A, Back + X, Forward + A",
      "Combo 4: Kick while jump, Slide",
      "Combo 5: X, Left + X, Forward + A",
      "Combo 6: Freeze, Jump, Y, Y, Y, Down + B, Down + Y, Jump while kick, Slide",
    ],
  },
  {
    name: "Kunglao",
    profilePic: pKunglao,
    id: 12,
    announce: aKunglao,
    specialMoves: [
      "Hat Throw: Back, Forward, B",
      "Teleport: Down, Up",
      "Spinning Shield: Forward, Down, Forward, R",
      "Diving Kick: (In Air) Down + X",
    ],
    finishingMoves: [
      "Fatality 1: (Close) Forward, Forward, Back, Down, Y",
      "Fatality 2: (Half Screen Away) Run, L, Run, L, Down",
      "Babality: Down, Down, Forward, Forward, Y",
      "Friendship: Run, B, Run, A",
      "Stage Fatality: Down, Down, Forward, Forward, A",
      "Brutality: Y, B, A, X, L, Y, B, A, X, L, Y",
    ],
    combo: [
      "Combo 1: A, A, Back + X",
      "Combo 2: Y, B, Y, B, A, A, Back + X",
      "Combo 3: A, A, X",
      "Combo 4: Y, A, Left + X",
    ],
  },
  {
    name: "Sektor",
    profilePic: pSektor,
    id: 13,
    announce: aSektor,
    specialMoves: [
      "Missile: Forward, Forward, B",
      "Homing Missile: Forward, Down, Back, Y",
      "Teleport Uppercut: Forward, Forward, A",
    ],
    finishingMoves: [
      "Fatality 1: (Sweep) Low Punch, R, R, L",
      "Fatality 2: (Half Screen Away) Forward, Forward, Forward, Back, L",
      "Babality: Back, Down, Down, Down, X",
      "Friendship: R, R, R, R, Down",
      "Stage Fatality: Down, Down, Down, R",
      "Brutality: Y, Y, Y, L, B, Y, Y, Y, L, B, Y",
    ],
    combo: [
      "Combo 1: X, X",
      "Combo 2: Y, Y, Down + B",
      "Combo 3: Y, Y, A, B",
      "Combo 4: Y, Y, X, X, Back + X",
      "Combo 5: Y, Y, X, Back + X",
    ],
  },
  {
    name: "Kitana",
    profilePic: pKitana,
    id: 14,
    announce: aKitana,
    specialMoves: [
      "Fan Throw: Forward, Forward, Y + B",
      "Fan Lift: Back, Back, Back, Y",
      "Square Wave Punch: Down, Back, Y",
    ],
    finishingMoves: [
      "Fatality 1: (Close) R, R, L, L, A",
      "Fatality 2: (Close) Back, Down, Forward, Forward, X",
      "Babality: Forward, Forward, Down, Forward, X",
      "Friendship: Down, Back, Forward, Forward, B",
      "Stage Fatality: Forward, Down, Down, A",
      "Brutality: Y, Y, L, X, L, A, L, B, L, Y, L",
    ],
    combo: [
      "Combo 1: X, X, A, Back + X",
      "Combo 2: Y, Y, Back + B, Down + B",
      "Combo 3: Y, Y, Down + B, Down + Y",
      "Combo 4: Y, Y, Down + B, A, X, A, Back + X",
    ],
  },
  {
    name: "Ermac",
    profilePic: pErmac,
    id: 15,
    announce: aErmac,
    specialMoves: [
      "Fireball: Down, Back, B",
      "Teleport Punch: Down, Back, Y",
      "Telekinetic Slam: Back, Down, Back, X",
    ],
    finishingMoves: [
      "Fatality 1: (Close) Run, L, R, R, X",
      "Fatality 2: (Sweep) Down, Up, Down, Down, Down, L",
      "Babality: Down, Down, Forward, Down, X",
      "Stage Fatality: R, R, R, R, A",
      "Brutality: Y, Y, B, L, X, A, L, Y, B, A, X",
    ],
    combo: [
      "Combo 1: Y, Y, Down + B",
      "Combo 2: X, X, A, Back + X",
      "Combo 3: Y, Y, Back + B, X, A",
      "Combo 4: Telekinetic Slam, Y, Y, Fireball",
    ],
  },
  {
    name: "Scorpion",
    profilePic: pScorpion,
    id: 16,
    announce: aScorpion,
    specialMoves: [
      "Spear: Back, Back, B",
      "Teleport Punch: Down, Back, Y",
      "Air Throw: L in air when next to airborne opponent",
    ],
    finishingMoves: [
      "Fatality 1: (Outside Sweep) Down, Down, Up, X",
      "Fatality 2: (Close) (Use L) Forward, Forward, Down, Up, Run",
      "Babality: Down, Back, Back, Forward, Y",
      "Friendship: Back, Forward, Forward, Back, A",
      "Stage Fatality: (Use L) Forward, Up, Up, B",
      "Brutality: Y, Y, L, X, X, A, X, Y, Y, B, Y",
    ],
    combo: [
      "Combo 1: Y, Y, Up + B",
      "Combo 2: X, X, A, A",
      "Combo 3: Y, Y, X, Back + X",
      "Combo 4: Spear, Down + Y",
      "Combo 5: Spear, Y, Y, X, Left + X",
      "Combo 6: Kick while jump, Spear, Y, Y, X, Left + X",
      "Combo 7: Teleport Punch, Spear, X, X, A, A",
      "Combo 8: Kick while jump, Teleport Punch",
    ],
  },
  {
    name: "Cyrax",
    profilePic: pCyrax,
    id: 17,
    announce: aCyrax,
    specialMoves: [
      "Green Net: Back, Back, A",
      "Short Bomb: (Hold A) Back, Back, X",
      "Long Bomb: (Hold A) Forward, Forward, X",
      "Air Throw: Forward, Down, Forward, L, B",
      "Teleport: Forward, Down, L",
    ],
    finishingMoves: [
      "Fatality 1: Down, Down, Up, Down, Y",
      "Fatality 2: (Close) Down, Down, Forward, Up, R",
      "Babality: Forward, Forward, Back, Y",
      "Friendship: (Close) (Use L) Up, Up, Down, Down",
      "Stage Fatality: R, L, R",
      "Brutality: Y, X, Y, X, X, Y, X, Y, X, A, B",
    ],
    combo: [
      "Combo 1: Y, Y, B",
      "Combo 2: X, X, Back + X",
      "Combo 3: Y, Y, X, Y, X, Back + X",
      "Combo 4: Green Net, Jump, Y, Y, Y, X, Y, X, Left + X",
      "Combo 5: Long Bomb, Short Bomb, Come closer, Uppercut",
      "Combo 6: Long Bomb, Jump, Y, Y, Y, X, Y, Come closer, Uppercut",
    ],
  },
  {
    name: "Kabal",
    profilePic: pKabal,
    id: 18,
    announce: aKabal,
    specialMoves: [
      "Fireball: Back, Back, Y",
      "Web Spin: Back, Forward, A",
      "Ground Saw: Back, Back, Back, R",
    ],
    finishingMoves: [
      "Fatality 1: (Half Screen Away) Down, Down, Back, Forward, L",
      "Fatality 2: (Close) R, L, L, L, X",
      "Babality: R, R, A",
      "Friendship: R, A, R, R, Up",
      "Stage Fatality: L, L, X",
      "Brutality: Y, L, A, A, A, X, B, B, B, Y, B",
    ],
    combo: [
      "Combo 1: A, A, Back + X",
      "Combo 2: A, A, X, Back + X",
      "Combo 3: A, A, Y, Y, Down + Y",
      "Combo 4: A, A, Y, Y, Down + B, Down + Y",
      "Combo 5: Y, Y, Down + Y",
      "Combo 6: Y, Y, Down + B, Down + Y",
      "Combo 7: A, A, Y, Y, X, Left + X",
    ],
  },
  {
    name: "Sindel",
    profilePic: pSindel,
    id: 19,
    announce: aSindel,
    specialMoves: [
      "Fireball: Forward, Forward, B",
      "Scream: Forward, Forward, Forward, Y",
      "Levitate: Back, Back, Forward, X",
      "Air Fireball: Down, Forward, A",
    ],
    finishingMoves: [
      "Fatality 1: R, R, L, R, L",
      "Fatality 2: R, R, L, L, R + L",
      "Babality: R, R, R, Up",
      "Friendship: R, R, R, R, R, Up",
      "Stage Fatality: Down, Down, Down, B",
      "Brutality: Y, L, A, L, A, X, L, X, A, L, B",
    ],
    combo: [
      "Combo 1: Y, Y, Down + Y",
      "Combo 2: Y, Y, B, X",
      "Combo 3: A, Y, Y, B, X",
      "Combo 4: A, Y, Y, B, Down + Y",
      "Combo 5: X, Y, Y, B, X",
      "Combo 6: X, X, Left + X",
    ],
  },
  {
    name: "Smoke",
    profilePic: pSmoke,
    id: 20,
    announce: aSmoke,
    specialMoves: [
      "Spear: Back, Back, B",
      "Teleport Uppercut: Forward, Forward, A",
      "Air Throw: L in air when next to airborne opponent",
      "Invisibility: (Hold L) Up, Up, Run, (Release L)",
    ],
    finishingMoves: [
      "Fatality 1: (More than half screen away) (Hold L) Up, Up, Forward, Down, (Release L)",
      "Fatality 2: (Outside Sweep) (Hold L + R) Down, Down, Forward, Up, (Release L + R)",
      "Babality: Down, Down, Back, Back, X",
      "Friendship: Run, R, R, X",
      "Stage Fatality: Forward, Forward, Down, A",
      "Brutality: Y, A, A, X, L, L, B, B, Y, Y, L, L",
    ],
    combo: [
      "Combo 1: Y, Y, B",
      "Combo 2: Y, Y, X",
      "Combo 3: Y, Y, A, X, B",
      "Combo 4: X, X, B",
      "Combo 5: Kick while jump, Teleport Uppercut, Come closer, Y, Spear, Y, Y, A, Y, B",
    ],
  },
  {
    name: "Liukang",
    profilePic: pLiukang,
    id: 21,
    announce: aLiukang,
    specialMoves: [
      "High Fireball: Forward, Forward, Y",
      "Low Fireball: Forward, Forward, B",
      "Bicycle Kick: Hold A for 4 seconds and release",
      "Flying Kick: Forward, Forward, X",
    ],
    finishingMoves: [
      "Fatality 1: Forward, Forward, Down, Down, A",
      "Fatality 2: Up, Down, Up, Up, Run + L",
      "Babality: Down, Down, Down, X",
      "Friendship: Down, Down, Down, Run",
      "Stage Fatality: Run, L, L, A",
      "Brutality: Y, B, Y, L, A, X, X, A, X, B, Y",
    ],
    combo: [
      "Combo 1: A, A, X, Back + A",
      "Combo 2: Y, Y, R, A, A, X, Back + A",
      "Combo 3: Y, A, A, X, A",
    ],
  },
  {
    name: "Shangtsung",
    profilePic: pShangtsung,
    id: 22,
    announce: aShangtsung,
    specialMoves: [
      "Fireball: Back, Back, Y",
      "Double Fireball: Back, Back, Forward, Y",
      "Triple Fireball: Back, Back, Forward, Forward, Y",
      "Volcanic Eruption: Forward, Back, Back, A",
    ],
    finishingMoves: [
      "Fatality 1: (Close) (Hold B) Down, Forward, Forward, Down, (Release B)",
      "Fatality 2: (Close) (Hold B) R, L, R, L, (Release B)",
      "Babality: R, R, R, A",
      "Friendship: LK, R, R, Down",
      "Stage Fatality: Up, Up, Back, B",
      "Brutality: Y, L, L, L, A, Y, B, B, L, X, A",
    ],
    combo: [
      "Combo 1: Y, Y, B, Back + X",
      "Combo 2: A, Y, Y, B, Back + X",
      "Combo 3: X, X, Left + X",
    ],
  },
];

export default roster;
