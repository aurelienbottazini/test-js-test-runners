
import sum4102 from '../sum4102.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 16 to equal 24 + offset 0.07491686178299306', (t) => {
  assert.strictEqual(sum4102(8, 16), 24 + 0.07491686178299306);
});
