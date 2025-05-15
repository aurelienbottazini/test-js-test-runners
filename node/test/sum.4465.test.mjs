
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 53 to equal 81', (t) => {
  assert.strictEqual(sum(28, 53), 81);
});
