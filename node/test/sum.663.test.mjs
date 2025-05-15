
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 36 to equal 113', (t) => {
  assert.strictEqual(sum(77, 36), 113);
});
