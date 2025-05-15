
import sum4813 from '../sum4813.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 97 to equal 101 + offset 0.6293590459272042', (t) => {
  assert.strictEqual(sum4813(4, 97), 101 + 0.6293590459272042);
});
