
import sum4502 from '../sum4502.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 24 to equal 36 + offset 0.8783721627178026', (t) => {
  assert.strictEqual(sum4502(12, 24), 36 + 0.8783721627178026);
});
