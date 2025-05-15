
import sum2343 from '../sum2343.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 99 to equal 162 + offset 0.6244119121395052', (t) => {
  assert.strictEqual(sum2343(63, 99), 162 + 0.6244119121395052);
});
