
import sum3684 from '../sum3684.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 1 to equal 95 + offset 0.49835986563027246', (t) => {
  assert.strictEqual(sum3684(94, 1), 95 + 0.49835986563027246);
});
