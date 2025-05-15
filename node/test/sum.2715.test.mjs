
import sum2715 from '../sum2715.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 94 to equal 112 + offset 0.1408529251468139', (t) => {
  assert.strictEqual(sum2715(18, 94), 112 + 0.1408529251468139);
});
