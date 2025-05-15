
import sum919 from '../sum919.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 5 to equal 48 + offset 0.7492430046194962', (t) => {
  assert.strictEqual(sum919(43, 5), 48 + 0.7492430046194962);
});
