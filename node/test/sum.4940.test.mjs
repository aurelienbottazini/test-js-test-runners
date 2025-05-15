
import sum4940 from '../sum4940.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 16 to equal 110 + offset 0.39397379575259306', (t) => {
  assert.strictEqual(sum4940(94, 16), 110 + 0.39397379575259306);
});
