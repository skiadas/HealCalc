(function(define) { 'use strict';
define(function(require) {

   return [
      {
         nick    : 'HealingTouch',
         name    : 'Healing Touch',
         mana    : 0.115 / 5, // Percent of mana pool
         ct      : 2.5,
         coef    : 3.31916 * 1.2,   // Improved Healing
         img     : 'link',
         link    : 5185,           // id of wow-head's link
         instant : false,
         aoe     : false
      },
      {
         nick    : 'Swiftmend',
         name    : 'Swiftmend',
         mana    : 0.242 / 5, // Percent of mana pool
         cd      : 15,
         ct      : 1.5,
         coef    : 4.285 * 1.2,    // Improved Healing
         img     : 'link',
         link    : 18562,           // id of wow-head's link
         instant : true,
         aoe     : false
      },
      {
         nick     : 'Lifebloom',
         name     : 'Lifebloom',
         mana     : 0.05 / 5, // Percent of mana pool
         ct       : 1.5,
         coefdot  : 0.36729 * 1.1,
         coef     : 4.518,
         nticks   : 15,
         timetick : 1,
         img      : 'link',
         link     : 33763,           // id of wow-head's link
         instant  : true,
         aoe      : false
      },
      {
         nick     : 'Regrowth',
         name     : 'Regrowth',
         mana     : 0.23 / 5, // Percent of mana pool
         ct       : 1.5,
         coefdot  : 0.36729 * 1.1,
         coef     : 4.518,
         nticks   : 6,
         timetick : 2,
         img      : 'link',
         link     : 8936,           // id of wow-head's link
         instant  : false,
         aoe      : false
      },
      {
         nick     : 'Regrowth',
         name     : 'Regrowth',
         mana     : 0.23 / 5, // Percent of mana pool
         ct       : 1.5,
         coefdot  : 0.71179,
         nticks   : 4,
         timetick : 2,
         img      : 'link',
         link     : 8936,           // id of wow-head's link
         instant  : false,
         aoe      : false
      }
   ]

});

}(typeof define == 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));
