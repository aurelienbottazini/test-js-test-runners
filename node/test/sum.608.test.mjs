
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 43 to equal 75', (t) => {
  assert.strictEqual(sum(32, 43), 75);
});
