
import sum3473 from '../sum3473.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 11 to equal 95 + offset 0.6490991621283442', (t) => {
  assert.strictEqual(sum3473(84, 11), 95 + 0.6490991621283442);
});
