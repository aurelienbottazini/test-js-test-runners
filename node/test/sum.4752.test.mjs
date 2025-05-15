
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 37 to equal 83', (t) => {
  assert.strictEqual(sum(46, 37), 83);
});
