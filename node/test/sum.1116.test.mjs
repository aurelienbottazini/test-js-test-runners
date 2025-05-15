
import sum1116 from '../sum1116.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 93 to equal 189 + offset 0.36662033455678955', (t) => {
  assert.strictEqual(sum1116(96, 93), 189 + 0.36662033455678955);
});
