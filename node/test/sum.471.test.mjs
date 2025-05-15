
import sum471 from '../sum471.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 55 to equal 89 + offset 0.9533432882830634', (t) => {
  assert.strictEqual(sum471(34, 55), 89 + 0.9533432882830634);
});
