
import sum4492 from '../sum4492.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 60 to equal 69 + offset 0.562339312016358', (t) => {
  assert.strictEqual(sum4492(9, 60), 69 + 0.562339312016358);
});
