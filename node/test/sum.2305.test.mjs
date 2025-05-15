
import sum2305 from '../sum2305.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 70 to equal 129 + offset 0.24199034263936425', (t) => {
  assert.strictEqual(sum2305(59, 70), 129 + 0.24199034263936425);
});
