
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 64 to equal 81', (t) => {
  assert.strictEqual(sum(17, 64), 81);
});
