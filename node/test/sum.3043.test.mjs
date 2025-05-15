
import sum3043 from '../sum3043.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 54 to equal 121 + offset 0.8205234950422837', (t) => {
  assert.strictEqual(sum3043(67, 54), 121 + 0.8205234950422837);
});
