
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 71 to equal 81', (t) => {
  assert.strictEqual(sum(10, 71), 81);
});
