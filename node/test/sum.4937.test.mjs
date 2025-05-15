
import sum4937 from '../sum4937.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 95 to equal 110 + offset 0.9535997104696434', (t) => {
  assert.strictEqual(sum4937(15, 95), 110 + 0.9535997104696434);
});
