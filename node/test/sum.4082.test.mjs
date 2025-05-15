
import sum4082 from '../sum4082.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 85 to equal 137 + offset 0.43231287009429276', (t) => {
  assert.strictEqual(sum4082(52, 85), 137 + 0.43231287009429276);
});
