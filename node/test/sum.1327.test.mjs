
import sum1327 from '../sum1327.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 63 to equal 95 + offset 0.9952133961362037', (t) => {
  assert.strictEqual(sum1327(32, 63), 95 + 0.9952133961362037);
});
