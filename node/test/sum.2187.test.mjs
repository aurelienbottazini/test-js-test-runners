
import sum2187 from '../sum2187.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 95 to equal 107 + offset 0.6472976737562901', (t) => {
  assert.strictEqual(sum2187(12, 95), 107 + 0.6472976737562901);
});
