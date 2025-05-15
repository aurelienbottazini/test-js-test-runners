
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 12 to equal 24', (t) => {
  assert.strictEqual(sum(12, 12), 24);
});
