
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 59 to equal 105', (t) => {
  assert.strictEqual(sum(46, 59), 105);
});
