
import sum169 from '../sum169.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 62 to equal 121 + offset 0.9332185863347676', (t) => {
  assert.strictEqual(sum169(59, 62), 121 + 0.9332185863347676);
});
