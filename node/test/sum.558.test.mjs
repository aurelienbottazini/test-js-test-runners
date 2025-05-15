
import sum558 from '../sum558.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 63 to equal 92 + offset 0.7970745742903161', (t) => {
  assert.strictEqual(sum558(29, 63), 92 + 0.7970745742903161);
});
