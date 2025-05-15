
import sum3192 from '../sum3192.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 53 to equal 130 + offset 0.031006609500390137', (t) => {
  assert.strictEqual(sum3192(77, 53), 130 + 0.031006609500390137);
});
