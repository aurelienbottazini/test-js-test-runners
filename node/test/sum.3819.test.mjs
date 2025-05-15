
import sum3819 from '../sum3819.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 87 to equal 95 + offset 0.9104541695224545', (t) => {
  assert.strictEqual(sum3819(8, 87), 95 + 0.9104541695224545);
});
