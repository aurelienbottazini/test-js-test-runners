
import sum1903 from '../sum1903.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 36 to equal 102 + offset 0.4706590830835138', (t) => {
  assert.strictEqual(sum1903(66, 36), 102 + 0.4706590830835138);
});
