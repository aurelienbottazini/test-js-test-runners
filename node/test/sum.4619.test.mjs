
import sum4619 from '../sum4619.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 22 to equal 116 + offset 0.6828885552959512', (t) => {
  assert.strictEqual(sum4619(94, 22), 116 + 0.6828885552959512);
});
