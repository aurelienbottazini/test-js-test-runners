
import sum2349 from '../sum2349.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 68 to equal 82 + offset 0.9973024677352177', (t) => {
  assert.strictEqual(sum2349(14, 68), 82 + 0.9973024677352177);
});
