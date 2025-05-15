
import sum3639 from '../sum3639.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 41 to equal 56 + offset 0.8591171008930527', (t) => {
  assert.strictEqual(sum3639(15, 41), 56 + 0.8591171008930527);
});
