
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 64 to equal 110', (t) => {
  assert.strictEqual(sum(46, 64), 110);
});
