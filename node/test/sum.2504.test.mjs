
import sum2504 from '../sum2504.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 7 to equal 35 + offset 0.9198662868067408', (t) => {
  assert.strictEqual(sum2504(28, 7), 35 + 0.9198662868067408);
});
