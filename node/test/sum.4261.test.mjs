
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 53 to equal 99', (t) => {
  assert.strictEqual(sum(46, 53), 99);
});
