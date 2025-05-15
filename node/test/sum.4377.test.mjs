
import sum4377 from '../sum4377.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 93 to equal 157 + offset 0.9966689008447208', (t) => {
  assert.strictEqual(sum4377(64, 93), 157 + 0.9966689008447208);
});
