
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 47 to equal 47', (t) => {
  assert.strictEqual(sum(0, 47), 47);
});
