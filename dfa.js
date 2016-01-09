'use strict';

const StateMachine = require('./fa');
const utils = require('./utils');
const has = utils.has;

class DeterministicStateMachine extends StateMachine {
  test(s) {
    var state = 0;
    var index = 0;
    var length = s.length;

    while (index < length) {
      state = this.transition[state][s[index]];
      if (state === undefined) {
        return false;
      }

      index++;
    }

    return has(this.final, state);
  }
}

module.exports = DeterministicStateMachine;
