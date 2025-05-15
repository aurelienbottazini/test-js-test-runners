
import sum4420 from '../sum4420.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 48 to equal 57 + offset 0.45831407289832504', (t) => {
  assert.strictEqual(sum4420(9, 48), 57 + 0.45831407289832504);
});
