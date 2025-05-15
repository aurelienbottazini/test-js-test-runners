
import sum3952 from '../sum3952.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 45 to equal 134 + offset 0.48995744314870815', (t) => {
  assert.strictEqual(sum3952(89, 45), 134 + 0.48995744314870815);
});
