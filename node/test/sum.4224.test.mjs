
import sum4224 from '../sum4224.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 36 to equal 51 + offset 0.6069232080273002', (t) => {
  assert.strictEqual(sum4224(15, 36), 51 + 0.6069232080273002);
});
