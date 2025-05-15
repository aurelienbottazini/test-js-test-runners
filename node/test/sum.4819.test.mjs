
import sum4819 from '../sum4819.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 97 to equal 160 + offset 0.5274026233192621', (t) => {
  assert.strictEqual(sum4819(63, 97), 160 + 0.5274026233192621);
});
