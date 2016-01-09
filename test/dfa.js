/* globals it, describe */

'use strict';

const DFA = require('../index').DetermenisticStateMachine;
const assert = require('assert');

describe('DFA', function() {
  it('should work on a basic example', function() {
    var dfa = new DFA([
      { a: 1 },
      { b: 2, a: 1 },
      { b: 3 },
      { },
    ], [3]);

    assert(dfa.test('aaabb'));
    assert(dfa.test('aabb'));
    assert(dfa.test('abb'));

    assert(!dfa.test('bb'));
    assert(!dfa.test('aabab'));
  });
});
