
import sum1211 from '../sum1211.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 1 to equal 64 + offset 0.7686236364004058', (t) => {
  assert.strictEqual(sum1211(63, 1), 64 + 0.7686236364004058);
});
