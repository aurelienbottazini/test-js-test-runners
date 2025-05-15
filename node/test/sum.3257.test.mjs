
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 34 to equal 123', (t) => {
  assert.strictEqual(sum(89, 34), 123);
});
