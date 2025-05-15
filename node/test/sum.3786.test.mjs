
import sum3786 from '../sum3786.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 83 to equal 142 + offset 0.65889333494361', (t) => {
  assert.strictEqual(sum3786(59, 83), 142 + 0.65889333494361);
});
