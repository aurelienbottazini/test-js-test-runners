
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 21 to equal 38', (t) => {
  assert.strictEqual(sum(17, 21), 38);
});
