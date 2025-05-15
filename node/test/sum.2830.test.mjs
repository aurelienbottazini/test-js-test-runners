
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 7 to equal 63', (t) => {
  assert.strictEqual(sum(56, 7), 63);
});
