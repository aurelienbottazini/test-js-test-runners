
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 4 to equal 89', (t) => {
  assert.strictEqual(sum(85, 4), 89);
});
