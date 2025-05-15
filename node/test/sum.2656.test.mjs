
import sum2656 from '../sum2656.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 68 to equal 89 + offset 0.7113390185779707', (t) => {
  assert.strictEqual(sum2656(21, 68), 89 + 0.7113390185779707);
});
