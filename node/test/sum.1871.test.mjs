
import sum1871 from '../sum1871.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 21 to equal 120 + offset 0.3148570786023436', (t) => {
  assert.strictEqual(sum1871(99, 21), 120 + 0.3148570786023436);
});
