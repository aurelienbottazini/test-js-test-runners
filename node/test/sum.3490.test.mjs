
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 6 to equal 47', (t) => {
  assert.strictEqual(sum(41, 6), 47);
});
