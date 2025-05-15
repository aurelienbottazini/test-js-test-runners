
import sum3127 from '../sum3127.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 39 to equal 49 + offset 0.5151063191801175', (t) => {
  assert.strictEqual(sum3127(10, 39), 49 + 0.5151063191801175);
});
