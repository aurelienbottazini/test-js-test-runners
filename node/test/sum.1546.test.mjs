
import sum1546 from '../sum1546.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 18 to equal 61 + offset 0.6117048097519341', (t) => {
  assert.strictEqual(sum1546(43, 18), 61 + 0.6117048097519341);
});
