
import sum3635 from '../sum3635.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 9 to equal 63 + offset 0.04624374159012001', (t) => {
  assert.strictEqual(sum3635(54, 9), 63 + 0.04624374159012001);
});
