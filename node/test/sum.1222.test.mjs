
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 19 to equal 65', (t) => {
  assert.strictEqual(sum(46, 19), 65);
});
