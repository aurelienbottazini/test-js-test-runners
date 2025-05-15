
import sum4895 from '../sum4895.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 40 to equal 87 + offset 0.39457207684164364', (t) => {
  assert.strictEqual(sum4895(47, 40), 87 + 0.39457207684164364);
});
