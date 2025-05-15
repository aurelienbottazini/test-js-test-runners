
import sum4513 from '../sum4513.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 83 to equal 147 + offset 0.7959243922861978', (t) => {
  assert.strictEqual(sum4513(64, 83), 147 + 0.7959243922861978);
});
