
import sum4223 from '../sum4223.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 40 to equal 71 + offset 0.09662927690183754', (t) => {
  assert.strictEqual(sum4223(31, 40), 71 + 0.09662927690183754);
});
