
import sum4002 from '../sum4002.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 14 to equal 81 + offset 0.7274925945296349', (t) => {
  assert.strictEqual(sum4002(67, 14), 81 + 0.7274925945296349);
});
