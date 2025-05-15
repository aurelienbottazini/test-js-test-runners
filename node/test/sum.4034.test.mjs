
import sum4034 from '../sum4034.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 88 to equal 161 + offset 0.57050476074607', (t) => {
  assert.strictEqual(sum4034(73, 88), 161 + 0.57050476074607);
});
