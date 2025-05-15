
import sum4547 from '../sum4547.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 6 to equal 77 + offset 0.528904453428311', (t) => {
  assert.strictEqual(sum4547(71, 6), 77 + 0.528904453428311);
});
