
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 30 to equal 76', (t) => {
  assert.strictEqual(sum(46, 30), 76);
});
