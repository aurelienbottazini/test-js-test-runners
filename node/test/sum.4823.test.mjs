
import sum4823 from '../sum4823.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 57 to equal 83 + offset 0.22335850103202237', (t) => {
  assert.strictEqual(sum4823(26, 57), 83 + 0.22335850103202237);
});
