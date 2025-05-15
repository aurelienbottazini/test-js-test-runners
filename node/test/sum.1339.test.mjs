
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 20 to equal 29', (t) => {
  assert.strictEqual(sum(9, 20), 29);
});
