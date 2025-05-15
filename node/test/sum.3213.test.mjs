
import sum3213 from '../sum3213.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 94 to equal 152 + offset 0.11183410686433348', (t) => {
  assert.strictEqual(sum3213(58, 94), 152 + 0.11183410686433348);
});
