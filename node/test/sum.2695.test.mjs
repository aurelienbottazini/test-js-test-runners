
import sum2695 from '../sum2695.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 7 to equal 63 + offset 0.09790998942071272', (t) => {
  assert.strictEqual(sum2695(56, 7), 63 + 0.09790998942071272);
});
