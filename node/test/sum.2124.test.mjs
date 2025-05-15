
import sum2124 from '../sum2124.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 73 to equal 144 + offset 0.7445649737532187', (t) => {
  assert.strictEqual(sum2124(71, 73), 144 + 0.7445649737532187);
});
