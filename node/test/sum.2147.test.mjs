
import sum2147 from '../sum2147.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 64 to equal 104 + offset 0.7438738925451971', (t) => {
  assert.strictEqual(sum2147(40, 64), 104 + 0.7438738925451971);
});
