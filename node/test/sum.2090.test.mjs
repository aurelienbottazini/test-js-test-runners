
import sum2090 from '../sum2090.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 28 to equal 49 + offset 0.8679669651526731', (t) => {
  assert.strictEqual(sum2090(21, 28), 49 + 0.8679669651526731);
});
