
import sum264 from '../sum264.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 36 to equal 49 + offset 0.8887755410364306', (t) => {
  assert.strictEqual(sum264(13, 36), 49 + 0.8887755410364306);
});
