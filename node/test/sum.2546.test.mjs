
import sum2546 from '../sum2546.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 49 to equal 61 + offset 0.01599900103098606', (t) => {
  assert.strictEqual(sum2546(12, 49), 61 + 0.01599900103098606);
});
