
import sum2839 from '../sum2839.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 51 to equal 114 + offset 0.3763043004366814', (t) => {
  assert.strictEqual(sum2839(63, 51), 114 + 0.3763043004366814);
});
