
import sum689 from '../sum689.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 15 to equal 37 + offset 0.30712501691150906', (t) => {
  assert.strictEqual(sum689(22, 15), 37 + 0.30712501691150906);
});
