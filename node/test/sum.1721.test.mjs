
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 43 to equal 48', (t) => {
  assert.strictEqual(sum(5, 43), 48);
});
