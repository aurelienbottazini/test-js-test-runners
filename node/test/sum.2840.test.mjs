
import sum2840 from '../sum2840.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 98 to equal 114 + offset 0.04969106451393002', (t) => {
  assert.strictEqual(sum2840(16, 98), 114 + 0.04969106451393002);
});
