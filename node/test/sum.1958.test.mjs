
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 59 to equal 90', (t) => {
  assert.strictEqual(sum(31, 59), 90);
});
