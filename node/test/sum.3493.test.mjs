
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 52 to equal 58', (t) => {
  assert.strictEqual(sum(6, 52), 58);
});
