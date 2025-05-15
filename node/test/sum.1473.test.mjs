
import sum1473 from '../sum1473.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 96 to equal 141 + offset 0.1893245824360391', (t) => {
  assert.strictEqual(sum1473(45, 96), 141 + 0.1893245824360391);
});
