
import sum3840 from '../sum3840.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 22 to equal 34 + offset 0.936753148814605', (t) => {
  assert.strictEqual(sum3840(12, 22), 34 + 0.936753148814605);
});
