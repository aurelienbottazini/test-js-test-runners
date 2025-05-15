
import sum2947 from '../sum2947.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 47 to equal 80 + offset 0.6040411839748412', (t) => {
  assert.strictEqual(sum2947(33, 47), 80 + 0.6040411839748412);
});
