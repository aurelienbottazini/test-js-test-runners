
import sum3454 from '../sum3454.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 29 to equal 31 + offset 0.7437844219236838', (t) => {
  assert.strictEqual(sum3454(2, 29), 31 + 0.7437844219236838);
});
