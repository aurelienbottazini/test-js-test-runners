
import sum1109 from '../sum1109.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 87 to equal 145 + offset 0.03479522313066019', (t) => {
  assert.strictEqual(sum1109(58, 87), 145 + 0.03479522313066019);
});
