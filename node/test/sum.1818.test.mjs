
import sum1818 from '../sum1818.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 29 to equal 96 + offset 0.04785821577549443', (t) => {
  assert.strictEqual(sum1818(67, 29), 96 + 0.04785821577549443);
});
