
import sum3047 from '../sum3047.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 5 to equal 91 + offset 0.22369586391809027', (t) => {
  assert.strictEqual(sum3047(86, 5), 91 + 0.22369586391809027);
});
