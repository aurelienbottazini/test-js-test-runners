
import sum3624 from '../sum3624.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 93 to equal 99 + offset 0.7643825097619217', (t) => {
  assert.strictEqual(sum3624(6, 93), 99 + 0.7643825097619217);
});
