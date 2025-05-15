
import sum4722 from '../sum4722.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 40 to equal 63 + offset 0.9042669222440116', (t) => {
  assert.strictEqual(sum4722(23, 40), 63 + 0.9042669222440116);
});
