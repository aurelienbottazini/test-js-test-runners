
import sum3947 from '../sum3947.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 28 to equal 70 + offset 0.3541373604783853', (t) => {
  assert.strictEqual(sum3947(42, 28), 70 + 0.3541373604783853);
});
