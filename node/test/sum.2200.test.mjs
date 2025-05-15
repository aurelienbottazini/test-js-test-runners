
import sum2200 from '../sum2200.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 45 to equal 58 + offset 0.27068854206849746', (t) => {
  assert.strictEqual(sum2200(13, 45), 58 + 0.27068854206849746);
});
