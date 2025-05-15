
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 62 + 43 to equal 105', (t) => {
  assert.strictEqual(sum(62, 43), 105);
});
