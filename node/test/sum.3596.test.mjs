
import sum3596 from '../sum3596.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 64 to equal 107 + offset 0.12845944351639693', (t) => {
  assert.strictEqual(sum3596(43, 64), 107 + 0.12845944351639693);
});
