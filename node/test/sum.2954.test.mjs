
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 54 to equal 120', (t) => {
  assert.strictEqual(sum(66, 54), 120);
});
