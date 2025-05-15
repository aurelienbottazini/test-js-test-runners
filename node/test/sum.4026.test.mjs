
import sum4026 from '../sum4026.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 70 to equal 136 + offset 0.5281505130443618', (t) => {
  assert.strictEqual(sum4026(66, 70), 136 + 0.5281505130443618);
});
