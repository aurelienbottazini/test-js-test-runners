
import sum3073 from '../sum3073.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 8 to equal 19 + offset 0.9132550815509403', (t) => {
  assert.strictEqual(sum3073(11, 8), 19 + 0.9132550815509403);
});
