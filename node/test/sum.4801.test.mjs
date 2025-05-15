
import sum4801 from '../sum4801.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 37 to equal 42 + offset 0.7890560213850082', (t) => {
  assert.strictEqual(sum4801(5, 37), 42 + 0.7890560213850082);
});
