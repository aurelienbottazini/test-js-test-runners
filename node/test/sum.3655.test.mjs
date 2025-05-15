
import sum3655 from '../sum3655.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 59 to equal 155 + offset 0.7790045333805254', (t) => {
  assert.strictEqual(sum3655(96, 59), 155 + 0.7790045333805254);
});
