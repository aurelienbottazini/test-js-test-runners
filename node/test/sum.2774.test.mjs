
import sum2774 from '../sum2774.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 28 to equal 71 + offset 0.9421783493858676', (t) => {
  assert.strictEqual(sum2774(43, 28), 71 + 0.9421783493858676);
});
