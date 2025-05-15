
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 37 to equal 57', (t) => {
  assert.strictEqual(sum(20, 37), 57);
});
