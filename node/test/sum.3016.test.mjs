
import sum3016 from '../sum3016.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 11 to equal 33 + offset 0.4776357852054687', (t) => {
  assert.strictEqual(sum3016(22, 11), 33 + 0.4776357852054687);
});
