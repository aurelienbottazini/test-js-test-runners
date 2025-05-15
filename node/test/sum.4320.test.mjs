
import sum4320 from '../sum4320.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 31 to equal 121 + offset 0.48318634365681734', (t) => {
  assert.strictEqual(sum4320(90, 31), 121 + 0.48318634365681734);
});
