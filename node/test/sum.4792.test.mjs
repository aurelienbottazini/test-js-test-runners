
import sum4792 from '../sum4792.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 57 to equal 81 + offset 0.6279926361909013', (t) => {
  assert.strictEqual(sum4792(24, 57), 81 + 0.6279926361909013);
});
