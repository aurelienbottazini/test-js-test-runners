
import sum3920 from '../sum3920.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 64 to equal 78 + offset 0.3093445059332238', (t) => {
  assert.strictEqual(sum3920(14, 64), 78 + 0.3093445059332238);
});
