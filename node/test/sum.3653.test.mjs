
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 18 to equal 103', (t) => {
  assert.strictEqual(sum(85, 18), 103);
});
