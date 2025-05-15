
import sum4826 from '../sum4826.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 48 to equal 53 + offset 0.7812021375761129', (t) => {
  assert.strictEqual(sum4826(5, 48), 53 + 0.7812021375761129);
});
