
import sum1210 from '../sum1210.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 1 to equal 75 + offset 0.6104283489750627', (t) => {
  assert.strictEqual(sum1210(74, 1), 75 + 0.6104283489750627);
});
