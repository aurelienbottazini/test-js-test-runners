
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 44 to equal 90', (t) => {
  assert.strictEqual(sum(46, 44), 90);
});
