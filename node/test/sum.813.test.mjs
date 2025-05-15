
import sum813 from '../sum813.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 94 to equal 160 + offset 0.04076186588871311', (t) => {
  assert.strictEqual(sum813(66, 94), 160 + 0.04076186588871311);
});
