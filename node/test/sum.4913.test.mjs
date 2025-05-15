
import sum4913 from '../sum4913.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 94 to equal 159 + offset 0.2293984216538032', (t) => {
  assert.strictEqual(sum4913(65, 94), 159 + 0.2293984216538032);
});
