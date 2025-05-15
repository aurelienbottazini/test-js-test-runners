
import sum2832 from '../sum2832.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 84 to equal 138 + offset 0.8793053270503159', (t) => {
  assert.strictEqual(sum2832(54, 84), 138 + 0.8793053270503159);
});
