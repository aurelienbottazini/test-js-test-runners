
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 9 to equal 38', (t) => {
  assert.strictEqual(sum(29, 9), 38);
});
