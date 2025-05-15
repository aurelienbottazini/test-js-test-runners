
import sum1492 from '../sum1492.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 68 to equal 137 + offset 0.6097047936682304', (t) => {
  assert.strictEqual(sum1492(69, 68), 137 + 0.6097047936682304);
});
