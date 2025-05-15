
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 94 to equal 123', (t) => {
  assert.strictEqual(sum(29, 94), 123);
});
