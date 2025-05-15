
import sum4191 from '../sum4191.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 14 to equal 61 + offset 0.7736806403394404', (t) => {
  assert.strictEqual(sum4191(47, 14), 61 + 0.7736806403394404);
});
