
import sum3746 from '../sum3746.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 57 to equal 146 + offset 0.9322565312615126', (t) => {
  assert.strictEqual(sum3746(89, 57), 146 + 0.9322565312615126);
});
