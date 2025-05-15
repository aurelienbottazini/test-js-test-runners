
import sum3606 from '../sum3606.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 56 to equal 141 + offset 0.4967199813629607', (t) => {
  assert.strictEqual(sum3606(85, 56), 141 + 0.4967199813629607);
});
