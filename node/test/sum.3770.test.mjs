
import sum3770 from '../sum3770.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 9 to equal 35 + offset 0.6249713619085532', (t) => {
  assert.strictEqual(sum3770(26, 9), 35 + 0.6249713619085532);
});
