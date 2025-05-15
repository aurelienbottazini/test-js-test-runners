
import sum3216 from '../sum3216.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 15 to equal 48 + offset 0.6093081133644742', (t) => {
  assert.strictEqual(sum3216(33, 15), 48 + 0.6093081133644742);
});
