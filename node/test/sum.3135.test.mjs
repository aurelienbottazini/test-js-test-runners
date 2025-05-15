
import sum3135 from '../sum3135.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 64 to equal 127 + offset 0.502535406244097', (t) => {
  assert.strictEqual(sum3135(63, 64), 127 + 0.502535406244097);
});
