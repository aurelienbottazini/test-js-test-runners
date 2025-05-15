
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 0 to equal 61', (t) => {
  assert.strictEqual(sum(61, 0), 61);
});
