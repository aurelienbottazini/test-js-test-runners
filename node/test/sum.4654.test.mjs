
import sum4654 from '../sum4654.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 16 to equal 68 + offset 0.23624331532177767', (t) => {
  assert.strictEqual(sum4654(52, 16), 68 + 0.23624331532177767);
});
