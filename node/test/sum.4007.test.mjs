
import sum4007 from '../sum4007.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 59 to equal 96 + offset 0.447405638194334', (t) => {
  assert.strictEqual(sum4007(37, 59), 96 + 0.447405638194334);
});
