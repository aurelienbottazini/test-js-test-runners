
import sum4226 from '../sum4226.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 68 to equal 150 + offset 0.8921210172627304', (t) => {
  assert.strictEqual(sum4226(82, 68), 150 + 0.8921210172627304);
});
