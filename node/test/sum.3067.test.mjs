
import sum3067 from '../sum3067.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 44 to equal 126 + offset 0.6366421019452089', (t) => {
  assert.strictEqual(sum3067(82, 44), 126 + 0.6366421019452089);
});
