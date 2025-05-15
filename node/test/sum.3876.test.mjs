
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 16 to equal 62', (t) => {
  assert.strictEqual(sum(46, 16), 62);
});
