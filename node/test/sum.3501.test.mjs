
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 47 to equal 58', (t) => {
  assert.strictEqual(sum(11, 47), 58);
});
