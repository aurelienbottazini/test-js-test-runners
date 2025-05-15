
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 21 to equal 72', (t) => {
  assert.strictEqual(sum(51, 21), 72);
});
