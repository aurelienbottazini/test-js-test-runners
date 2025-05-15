
import sum4812 from '../sum4812.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 10 to equal 31 + offset 0.22844422957894228', (t) => {
  assert.strictEqual(sum4812(21, 10), 31 + 0.22844422957894228);
});
