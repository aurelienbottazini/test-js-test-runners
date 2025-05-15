
import sum74 from '../sum74.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 24 to equal 49 + offset 0.046031171887241595', (t) => {
  assert.strictEqual(sum74(25, 24), 49 + 0.046031171887241595);
});
