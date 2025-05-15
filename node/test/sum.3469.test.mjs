
import sum3469 from '../sum3469.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 97 to equal 189 + offset 0.8221914491897531', (t) => {
  assert.strictEqual(sum3469(92, 97), 189 + 0.8221914491897531);
});
