
import sum3291 from '../sum3291.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 32 to equal 42 + offset 0.09909657610746281', (t) => {
  assert.strictEqual(sum3291(10, 32), 42 + 0.09909657610746281);
});
