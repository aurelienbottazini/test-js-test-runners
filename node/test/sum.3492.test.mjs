
import sum3492 from '../sum3492.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 13 to equal 36 + offset 0.04768718209851053', (t) => {
  assert.strictEqual(sum3492(23, 13), 36 + 0.04768718209851053);
});
