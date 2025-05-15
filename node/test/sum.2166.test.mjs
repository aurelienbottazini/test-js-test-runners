
import sum2166 from '../sum2166.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 21 to equal 53 + offset 0.19506339259123417', (t) => {
  assert.strictEqual(sum2166(32, 21), 53 + 0.19506339259123417);
});
