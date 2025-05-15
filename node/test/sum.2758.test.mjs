
import sum2758 from '../sum2758.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 53 to equal 104 + offset 0.7064367231259633', (t) => {
  assert.strictEqual(sum2758(51, 53), 104 + 0.7064367231259633);
});
