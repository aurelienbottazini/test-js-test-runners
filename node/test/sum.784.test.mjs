
import sum784 from '../sum784.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 46 to equal 59 + offset 0.08784250151551876', (t) => {
  assert.strictEqual(sum784(13, 46), 59 + 0.08784250151551876);
});
