
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 61 to equal 80', (t) => {
  assert.strictEqual(sum(19, 61), 80);
});
