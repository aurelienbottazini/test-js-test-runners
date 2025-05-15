
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 75 to equal 89', (t) => {
  assert.strictEqual(sum(14, 75), 89);
});
