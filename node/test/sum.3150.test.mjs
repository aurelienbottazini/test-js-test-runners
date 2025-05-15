
import sum3150 from '../sum3150.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 22 to equal 88 + offset 0.6601475749501836', (t) => {
  assert.strictEqual(sum3150(66, 22), 88 + 0.6601475749501836);
});
