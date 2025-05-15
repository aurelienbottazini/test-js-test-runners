
import sum36 from '../sum36.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 51 to equal 122 + offset 0.7689113572338248', (t) => {
  assert.strictEqual(sum36(71, 51), 122 + 0.7689113572338248);
});
