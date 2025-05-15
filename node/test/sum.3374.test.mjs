
import sum3374 from '../sum3374.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 39 to equal 109 + offset 0.08725437835529815', (t) => {
  assert.strictEqual(sum3374(70, 39), 109 + 0.08725437835529815);
});
