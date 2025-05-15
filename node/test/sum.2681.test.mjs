
import sum2681 from '../sum2681.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 75 to equal 139 + offset 0.42582071250426223', (t) => {
  assert.strictEqual(sum2681(64, 75), 139 + 0.42582071250426223);
});
