
import sum3052 from '../sum3052.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 87 to equal 141 + offset 0.6919221753742991', (t) => {
  assert.strictEqual(sum3052(54, 87), 141 + 0.6919221753742991);
});
