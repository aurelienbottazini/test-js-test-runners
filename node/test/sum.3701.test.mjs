
import sum3701 from '../sum3701.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 30 to equal 39 + offset 0.16760235363510878', (t) => {
  assert.strictEqual(sum3701(9, 30), 39 + 0.16760235363510878);
});
