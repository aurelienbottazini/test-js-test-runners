
import sum3224 from '../sum3224.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 13 to equal 69 + offset 0.5366704737918201', (t) => {
  assert.strictEqual(sum3224(56, 13), 69 + 0.5366704737918201);
});
