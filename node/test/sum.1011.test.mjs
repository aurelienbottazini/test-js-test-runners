
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 57 to equal 138', (t) => {
  assert.strictEqual(sum(81, 57), 138);
});
