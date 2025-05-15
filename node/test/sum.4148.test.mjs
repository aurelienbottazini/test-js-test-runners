
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 19 to equal 47', (t) => {
  assert.strictEqual(sum(28, 19), 47);
});
