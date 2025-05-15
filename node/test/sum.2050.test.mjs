
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 25 to equal 71', (t) => {
  assert.strictEqual(sum(46, 25), 71);
});
