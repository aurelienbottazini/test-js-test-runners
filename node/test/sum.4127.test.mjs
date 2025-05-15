
import sum4127 from '../sum4127.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 86 to equal 134 + offset 0.7141916836983607', (t) => {
  assert.strictEqual(sum4127(48, 86), 134 + 0.7141916836983607);
});
