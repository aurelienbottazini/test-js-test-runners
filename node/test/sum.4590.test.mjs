
import sum4590 from '../sum4590.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 4 to equal 26 + offset 0.8270337447663116', (t) => {
  assert.strictEqual(sum4590(22, 4), 26 + 0.8270337447663116);
});
