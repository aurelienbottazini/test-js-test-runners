
import sum2823 from '../sum2823.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 37 to equal 112 + offset 0.40002524492755986', (t) => {
  assert.strictEqual(sum2823(75, 37), 112 + 0.40002524492755986);
});
