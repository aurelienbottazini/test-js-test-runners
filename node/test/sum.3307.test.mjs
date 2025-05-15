
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 11 to equal 57', (t) => {
  assert.strictEqual(sum(46, 11), 57);
});
