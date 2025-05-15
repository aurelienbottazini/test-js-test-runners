
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 43 to equal 45', (t) => {
  assert.strictEqual(sum(2, 43), 45);
});
