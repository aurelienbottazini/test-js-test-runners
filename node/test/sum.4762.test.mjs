
import sum4762 from '../sum4762.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 49 to equal 84 + offset 0.6361467941830754', (t) => {
  assert.strictEqual(sum4762(35, 49), 84 + 0.6361467941830754);
});
