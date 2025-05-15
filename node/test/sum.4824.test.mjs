
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 31 to equal 72', (t) => {
  assert.strictEqual(sum(41, 31), 72);
});
