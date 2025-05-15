
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 5 to equal 81', (t) => {
  assert.strictEqual(sum(76, 5), 81);
});
