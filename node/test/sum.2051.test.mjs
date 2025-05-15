
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 22 to equal 68', (t) => {
  assert.strictEqual(sum(46, 22), 68);
});
