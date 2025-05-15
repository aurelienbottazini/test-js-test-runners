
import sum4156 from '../sum4156.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 85 to equal 131 + offset 0.03487689925425119', (t) => {
  assert.strictEqual(sum4156(46, 85), 131 + 0.03487689925425119);
});
