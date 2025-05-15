
import sum3140 from '../sum3140.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 8 to equal 52 + offset 0.6586836335575024', (t) => {
  assert.strictEqual(sum3140(44, 8), 52 + 0.6586836335575024);
});
