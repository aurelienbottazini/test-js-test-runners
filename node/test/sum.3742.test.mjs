
import sum3742 from '../sum3742.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 66 to equal 134 + offset 0.7626912319354027', (t) => {
  assert.strictEqual(sum3742(68, 66), 134 + 0.7626912319354027);
});
