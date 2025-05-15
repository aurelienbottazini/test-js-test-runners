
import sum4187 from '../sum4187.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 30 to equal 61 + offset 0.856767389743715', (t) => {
  assert.strictEqual(sum4187(31, 30), 61 + 0.856767389743715);
});
