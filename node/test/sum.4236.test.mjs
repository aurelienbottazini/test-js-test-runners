
import sum4236 from '../sum4236.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 24 to equal 85 + offset 0.4669464639542238', (t) => {
  assert.strictEqual(sum4236(61, 24), 85 + 0.4669464639542238);
});
