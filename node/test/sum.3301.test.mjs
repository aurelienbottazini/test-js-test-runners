
import sum3301 from '../sum3301.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 24 to equal 95 + offset 0.6288592988716591', (t) => {
  assert.strictEqual(sum3301(71, 24), 95 + 0.6288592988716591);
});
