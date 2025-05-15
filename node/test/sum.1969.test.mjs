
import sum1969 from '../sum1969.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 64 to equal 122 + offset 0.945235700071681', (t) => {
  assert.strictEqual(sum1969(58, 64), 122 + 0.945235700071681);
});
