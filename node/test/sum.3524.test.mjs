
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 87 to equal 91', (t) => {
  assert.strictEqual(sum(4, 87), 91);
});
