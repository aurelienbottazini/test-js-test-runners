
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 12 to equal 38', (t) => {
  assert.strictEqual(sum(26, 12), 38);
});
