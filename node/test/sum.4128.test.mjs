
import sum4128 from '../sum4128.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 15 to equal 65 + offset 0.33448719408384286', (t) => {
  assert.strictEqual(sum4128(50, 15), 65 + 0.33448719408384286);
});
