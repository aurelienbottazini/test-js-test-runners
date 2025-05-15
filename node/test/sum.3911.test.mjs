
import sum3911 from '../sum3911.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 51 to equal 60 + offset 0.6515380428306814', (t) => {
  assert.strictEqual(sum3911(9, 51), 60 + 0.6515380428306814);
});
