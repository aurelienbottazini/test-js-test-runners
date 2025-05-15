
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 46 + 82 to equal 128', (t) => {
  assert.strictEqual(sum(46, 82), 128);
});
