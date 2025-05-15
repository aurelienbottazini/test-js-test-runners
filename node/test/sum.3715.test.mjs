
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 84 to equal 130', (t) => {
  assert.strictEqual(sum(46, 84), 130);
});
