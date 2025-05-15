
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 29 to equal 123', (t) => {
  assert.strictEqual(sum(94, 29), 123);
});
