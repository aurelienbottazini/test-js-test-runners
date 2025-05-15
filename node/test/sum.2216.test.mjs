
import sum2216 from '../sum2216.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 74 to equal 114 + offset 0.6690461027329687', (t) => {
  assert.strictEqual(sum2216(40, 74), 114 + 0.6690461027329687);
});
