
import sum1371 from '../sum1371.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 88 to equal 147 + offset 0.7312484688860582', (t) => {
  assert.strictEqual(sum1371(59, 88), 147 + 0.7312484688860582);
});
