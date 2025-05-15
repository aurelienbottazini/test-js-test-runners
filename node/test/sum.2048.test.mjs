
import sum2048 from '../sum2048.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 14 to equal 44 + offset 0.7494159733975699', (t) => {
  assert.strictEqual(sum2048(30, 14), 44 + 0.7494159733975699);
});
