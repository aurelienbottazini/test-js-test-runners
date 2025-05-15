
import sum4867 from '../sum4867.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 1 to equal 16 + offset 0.16260028152373396', (t) => {
  assert.strictEqual(sum4867(15, 1), 16 + 0.16260028152373396);
});
