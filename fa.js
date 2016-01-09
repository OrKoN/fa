'use strict';

/**
 Base Class for state machines
*/
class StateMachine {

  /**
  transition is an array where
  i-th element describes i-th state
  each state is an object where keys are input characters
  and values are target keys

  final is an array of final transitions
  */
  constructor(transition, final) {
    this.transition = transition;
    this.final = final;
  }
}

module.exports = StateMachine;
