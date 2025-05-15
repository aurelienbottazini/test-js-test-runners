
import sum4195 from '../sum4195.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 22 to equal 86 + offset 0.04028708552462601', (t) => {
  assert.strictEqual(sum4195(64, 22), 86 + 0.04028708552462601);
});
