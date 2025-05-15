
import sum2316 from '../sum2316.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 68 to equal 113 + offset 0.7371672842151746', (t) => {
  assert.strictEqual(sum2316(45, 68), 113 + 0.7371672842151746);
});
