
import sum2203 from '../sum2203.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 37 to equal 52 + offset 0.8646902616468527', (t) => {
  assert.strictEqual(sum2203(15, 37), 52 + 0.8646902616468527);
});
