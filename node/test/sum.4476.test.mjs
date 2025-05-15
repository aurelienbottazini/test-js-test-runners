
import sum4476 from '../sum4476.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 64 to equal 74 + offset 0.021343437449824698', (t) => {
  assert.strictEqual(sum4476(10, 64), 74 + 0.021343437449824698);
});
