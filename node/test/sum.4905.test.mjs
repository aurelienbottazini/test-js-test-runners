
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 84 to equal 176', (t) => {
  assert.strictEqual(sum(92, 84), 176);
});
