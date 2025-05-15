
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 18 to equal 75', (t) => {
  assert.strictEqual(sum(57, 18), 75);
});
