
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 43 to equal 141', (t) => {
  assert.strictEqual(sum(98, 43), 141);
});
