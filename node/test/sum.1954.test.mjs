
import sum1954 from '../sum1954.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 33 to equal 102 + offset 0.3527936623686484', (t) => {
  assert.strictEqual(sum1954(69, 33), 102 + 0.3527936623686484);
});
