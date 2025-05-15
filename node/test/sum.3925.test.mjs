
import sum3925 from '../sum3925.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 87 to equal 101 + offset 0.7136397897483796', (t) => {
  assert.strictEqual(sum3925(14, 87), 101 + 0.7136397897483796);
});
