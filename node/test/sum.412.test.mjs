
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 14 to equal 89', (t) => {
  assert.strictEqual(sum(75, 14), 89);
});
