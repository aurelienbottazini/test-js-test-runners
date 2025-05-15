
import sum4696 from '../sum4696.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 12 to equal 49 + offset 0.8564796021761869', (t) => {
  assert.strictEqual(sum4696(37, 12), 49 + 0.8564796021761869);
});
