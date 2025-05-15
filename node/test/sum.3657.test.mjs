
import sum3657 from '../sum3657.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 71 to equal 94 + offset 0.24374052247127698', (t) => {
  assert.strictEqual(sum3657(23, 71), 94 + 0.24374052247127698);
});
