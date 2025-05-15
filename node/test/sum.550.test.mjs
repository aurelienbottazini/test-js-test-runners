
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 16 to equal 47', (t) => {
  assert.strictEqual(sum(31, 16), 47);
});
