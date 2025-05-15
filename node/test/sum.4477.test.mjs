
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 43 to equal 83', (t) => {
  assert.strictEqual(sum(40, 43), 83);
});
