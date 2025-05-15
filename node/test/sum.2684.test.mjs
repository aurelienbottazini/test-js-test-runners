
import sum2684 from '../sum2684.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 65 to equal 124 + offset 0.8836134460862453', (t) => {
  assert.strictEqual(sum2684(59, 65), 124 + 0.8836134460862453);
});
