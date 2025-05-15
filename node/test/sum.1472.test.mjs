
import sum1472 from '../sum1472.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 80 to equal 87 + offset 0.7196325523574489', (t) => {
  assert.strictEqual(sum1472(7, 80), 87 + 0.7196325523574489);
});
