
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 15 to equal 61', (t) => {
  assert.strictEqual(sum(46, 15), 61);
});
