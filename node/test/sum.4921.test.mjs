
import sum4921 from '../sum4921.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 56 to equal 87 + offset 0.9001393497238271', (t) => {
  assert.strictEqual(sum4921(31, 56), 87 + 0.9001393497238271);
});
