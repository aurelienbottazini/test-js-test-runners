
import sum3190 from '../sum3190.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 22 to equal 39 + offset 0.6452506444617157', (t) => {
  assert.strictEqual(sum3190(17, 22), 39 + 0.6452506444617157);
});
