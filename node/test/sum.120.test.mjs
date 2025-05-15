
import sum120 from '../sum120.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 54 to equal 120 + offset 0.296463538808703', (t) => {
  assert.strictEqual(sum120(66, 54), 120 + 0.296463538808703);
});
