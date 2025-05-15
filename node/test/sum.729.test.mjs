
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 49 to equal 66', (t) => {
  assert.strictEqual(sum(17, 49), 66);
});
