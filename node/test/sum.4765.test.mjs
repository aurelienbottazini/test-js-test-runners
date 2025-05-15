
import sum4765 from '../sum4765.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 75 to equal 165 + offset 0.3066975353921031', (t) => {
  assert.strictEqual(sum4765(90, 75), 165 + 0.3066975353921031);
});
