
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 71 to equal 80', (t) => {
  assert.strictEqual(sum(9, 71), 80);
});
