
import sum2835 from '../sum2835.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 32 to equal 50 + offset 0.8056180092514676', (t) => {
  assert.strictEqual(sum2835(18, 32), 50 + 0.8056180092514676);
});
