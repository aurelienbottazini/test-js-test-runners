
import sum232 from '../sum232.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 25 to equal 34 + offset 0.9282035506754449', (t) => {
  assert.strictEqual(sum232(9, 25), 34 + 0.9282035506754449);
});
