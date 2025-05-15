
import sum4875 from '../sum4875.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 6 to equal 28 + offset 0.19336630141402378', (t) => {
  assert.strictEqual(sum4875(22, 6), 28 + 0.19336630141402378);
});
