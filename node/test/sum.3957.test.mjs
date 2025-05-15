
import sum3957 from '../sum3957.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 64 to equal 132 + offset 0.8740341410391517', (t) => {
  assert.strictEqual(sum3957(68, 64), 132 + 0.8740341410391517);
});
