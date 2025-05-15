
import sum4509 from '../sum4509.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 33 to equal 47 + offset 0.8732368570085536', (t) => {
  assert.strictEqual(sum4509(14, 33), 47 + 0.8732368570085536);
});
