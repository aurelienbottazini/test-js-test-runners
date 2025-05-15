
import sum203 from '../sum203.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 13 to equal 15 + offset 0.22831393697829105', (t) => {
  assert.strictEqual(sum203(2, 13), 15 + 0.22831393697829105);
});
