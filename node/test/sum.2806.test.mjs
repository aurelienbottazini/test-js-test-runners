
import sum2806 from '../sum2806.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 32 to equal 64 + offset 0.22717621773478258', (t) => {
  assert.strictEqual(sum2806(32, 32), 64 + 0.22717621773478258);
});
