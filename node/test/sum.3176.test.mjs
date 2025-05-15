
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 34 to equal 58', (t) => {
  assert.strictEqual(sum(24, 34), 58);
});
