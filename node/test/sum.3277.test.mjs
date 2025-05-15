
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 54 to equal 100', (t) => {
  assert.strictEqual(sum(46, 54), 100);
});
