
import sum4908 from '../sum4908.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 36 to equal 131 + offset 0.9310388868657637', (t) => {
  assert.strictEqual(sum4908(95, 36), 131 + 0.9310388868657637);
});
