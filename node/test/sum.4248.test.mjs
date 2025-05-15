
import sum4248 from '../sum4248.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 18 to equal 82 + offset 0.05627471425210129', (t) => {
  assert.strictEqual(sum4248(64, 18), 82 + 0.05627471425210129);
});
