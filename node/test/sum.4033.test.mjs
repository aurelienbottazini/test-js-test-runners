
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 9 to equal 29', (t) => {
  assert.strictEqual(sum(20, 9), 29);
});
