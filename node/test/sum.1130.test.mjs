
import sum1130 from '../sum1130.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 46 to equal 109 + offset 0.6625596867527', (t) => {
  assert.strictEqual(sum1130(63, 46), 109 + 0.6625596867527);
});
