
import sum4932 from '../sum4932.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 1 to equal 43 + offset 0.2822214520221632', (t) => {
  assert.strictEqual(sum4932(42, 1), 43 + 0.2822214520221632);
});
