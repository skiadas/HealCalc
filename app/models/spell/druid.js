(function(define) { 'use strict';
define(function(require) {
   // Almost all coefs come with a 1.1 factor to account for Naturalist 10% increased healing
   // All mana costs divided by 5, as they are based on the reduced mana pool that non-spec shamans have
   return [
      {
         nick    : 'HealingTouch',
         name    : 'Healing Touch',
         mana    : 0.115 / 5,
         ct      : 2.5,
         coef    : 3.31916 * 1.1,
         img     : 'link',
         link    : 5185,
         instant : false,
         aoe     : false
      },
      {
         nick    : 'Swiftmend',
         name    : 'Swiftmend',
         mana    : 0.242 / 5,
         cd      : 15,
         ct      : 1.5,
         coef    : 4.285 * 1.1,
         img     : 'link',
         link    : 18562,
         instant : true,
         aoe     : false
      },
      {
         nick     : 'Lifebloom',
         name     : 'Lifebloom',
         mana     : 0.05 / 5,
         ct       : 1.5,
         coefhot  : 0.36729 * 1.1,
         coef     : 4.518,
         nticks   : 15,
         timetick : 1,
         img      : 'link',
         link     : 33763,
         instant  : true,
         aoe      : false
      },
      {
         nick     : 'Regrowth',
         name     : 'Regrowth',
         mana     : 0.23 / 5,
         ct       : 1.5,
         coefhot  : 0.546264 / 6 * 1.2,
         coef     : 1.6524 * 1.2,
         nticks   : 6,
         timetick : 2,
         img      : 'link',
         link     : 8936,
         instant  : false,
         aoe      : false
      },
      {
         nick     : 'Rejuv',
         name     : 'Rejuvenation',
         mana     : 0.105 / 5,
         ct       : 1.5,
         coefhot  : 0.71179 * 1.1,
         coef     : 0.71179 * 1.1,  // Used for the initial heal/tick
         nticks   : 4,
         timetick : 3,
         img      : 'link',
         link     : 774,
         instant  : true,
         aoe      : false
      },
      {
         nick     : 'WildGrowth',
         name     : 'Wild Growth',
         mana     : 0.23 / 5,
         cd       : 8,
         ct       : 1.5,
         coefhot  : 3.318/7 * 1.1,
         nticks   : 7,
         timetick : 1,
         ntargets : 5,
         img      : 'link',
         link     : 48438,
         instant  : true,
         aoe      : true
      },
      {
         nick     : 'Tranq',
         name     : 'Tranquility',
         mana     : 0.23 / 5,
         cd       : 8 * 60,
         ct       : 1.5,
         coefhot  : 2.502 * 1.1,
         nticks   : 4,
         timetick : 2,
         ntargets : 10,
         img      : 'link',
         link     : 740,
         instant  : false,
         aoe      : true
      },
      {
         nick     : 'Mushroom',
         name     : 'Wild Mushroom',
         mana     : 0.27 / 5,
         ct       : 1.5,
         coefhot  : 0.6209,
         nticks   : 30 / 2,
         timetick : 2,
         ntargets : 3,
         img      : 'link',
         link     : 147349,
         instant  : true,
         aoe      : true
      }
   ]
});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
