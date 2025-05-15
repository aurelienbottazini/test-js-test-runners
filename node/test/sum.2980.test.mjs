
import sum2980 from '../sum2980.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 8 to equal 93 + offset 0.9611562756761605', (t) => {
  assert.strictEqual(sum2980(85, 8), 93 + 0.9611562756761605);
});
