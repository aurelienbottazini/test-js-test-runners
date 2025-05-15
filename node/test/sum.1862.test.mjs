
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 19 to equal 40', (t) => {
  assert.strictEqual(sum(21, 19), 40);
});
