
import sum3345 from '../sum3345.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 94 to equal 95 + offset 0.08235441321536463', (t) => {
  assert.strictEqual(sum3345(1, 94), 95 + 0.08235441321536463);
});
