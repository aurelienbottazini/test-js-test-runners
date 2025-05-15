
import sum459 from '../sum459.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 44 to equal 121 + offset 0.9501182168100182', (t) => {
  assert.strictEqual(sum459(77, 44), 121 + 0.9501182168100182);
});
