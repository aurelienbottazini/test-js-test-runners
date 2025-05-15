
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 59 to equal 113', (t) => {
  assert.strictEqual(sum(54, 59), 113);
});
