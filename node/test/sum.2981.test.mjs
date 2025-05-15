
import sum2981 from '../sum2981.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 29 to equal 38 + offset 0.3129304660751713', (t) => {
  assert.strictEqual(sum2981(9, 29), 38 + 0.3129304660751713);
});
