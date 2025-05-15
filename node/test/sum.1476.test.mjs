
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 20 to equal 66', (t) => {
  assert.strictEqual(sum(46, 20), 66);
});
