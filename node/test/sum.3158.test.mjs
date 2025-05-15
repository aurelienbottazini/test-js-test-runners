
import sum3158 from '../sum3158.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 54 to equal 123 + offset 0.9626071213244197', (t) => {
  assert.strictEqual(sum3158(69, 54), 123 + 0.9626071213244197);
});
