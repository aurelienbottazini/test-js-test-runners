
import sum1112 from '../sum1112.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 22 to equal 23 + offset 0.3579277250162003', (t) => {
  assert.strictEqual(sum1112(1, 22), 23 + 0.3579277250162003);
});
