
import sum4988 from '../sum4988.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 6 to equal 73 + offset 0.3607801050600258', (t) => {
  assert.strictEqual(sum4988(67, 6), 73 + 0.3607801050600258);
});
