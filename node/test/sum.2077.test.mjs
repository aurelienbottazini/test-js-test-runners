
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 13 to equal 66', (t) => {
  assert.strictEqual(sum(53, 13), 66);
});
