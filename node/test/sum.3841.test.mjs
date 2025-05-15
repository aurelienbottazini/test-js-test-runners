
import sum3841 from '../sum3841.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 36 to equal 69 + offset 0.9533739071885856', (t) => {
  assert.strictEqual(sum3841(33, 36), 69 + 0.9533739071885856);
});
