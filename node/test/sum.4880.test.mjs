
import sum4880 from '../sum4880.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 74 to equal 80 + offset 0.0706789062329537', (t) => {
  assert.strictEqual(sum4880(6, 74), 80 + 0.0706789062329537);
});
