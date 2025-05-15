
import sum2008 from '../sum2008.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 8 to equal 31 + offset 0.582071630906289', (t) => {
  assert.strictEqual(sum2008(23, 8), 31 + 0.582071630906289);
});
