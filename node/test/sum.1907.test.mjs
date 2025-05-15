
import sum1907 from '../sum1907.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 26 to equal 62 + offset 0.8629642444568771', (t) => {
  assert.strictEqual(sum1907(36, 26), 62 + 0.8629642444568771);
});
