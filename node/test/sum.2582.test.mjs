
import sum2582 from '../sum2582.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 17 to equal 32 + offset 0.12331558247110042', (t) => {
  assert.strictEqual(sum2582(15, 17), 32 + 0.12331558247110042);
});
