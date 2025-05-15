
import sum1037 from '../sum1037.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 48 to equal 139 + offset 0.19916375035835454', (t) => {
  assert.strictEqual(sum1037(91, 48), 139 + 0.19916375035835454);
});
