
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 92 to equal 138', (t) => {
  assert.strictEqual(sum(46, 92), 138);
});
