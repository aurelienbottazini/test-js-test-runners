
import sum4460 from '../sum4460.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 92 to equal 191 + offset 0.8091144394822932', (t) => {
  assert.strictEqual(sum4460(99, 92), 191 + 0.8091144394822932);
});
