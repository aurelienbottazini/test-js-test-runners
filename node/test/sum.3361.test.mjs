
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 43 to equal 65', (t) => {
  assert.strictEqual(sum(22, 43), 65);
});
