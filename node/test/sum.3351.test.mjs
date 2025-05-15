
import sum3351 from '../sum3351.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 33 to equal 64 + offset 0.04364586520715541', (t) => {
  assert.strictEqual(sum3351(31, 33), 64 + 0.04364586520715541);
});
