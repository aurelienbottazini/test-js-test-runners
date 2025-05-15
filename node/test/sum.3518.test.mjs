
import sum3518 from '../sum3518.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 81 to equal 84 + offset 0.4969843200215497', (t) => {
  assert.strictEqual(sum3518(3, 81), 84 + 0.4969843200215497);
});
