
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 14 to equal 65', (t) => {
  assert.strictEqual(sum(51, 14), 65);
});
