
import sum3889 from '../sum3889.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 32 to equal 118 + offset 0.5213431171272278', (t) => {
  assert.strictEqual(sum3889(86, 32), 118 + 0.5213431171272278);
});
