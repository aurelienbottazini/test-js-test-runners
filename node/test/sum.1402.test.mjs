
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 46 to equal 123', (t) => {
  assert.strictEqual(sum(77, 46), 123);
});
