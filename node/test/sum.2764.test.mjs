
import sum2764 from '../sum2764.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 2 to equal 77 + offset 0.6828477879718975', (t) => {
  assert.strictEqual(sum2764(75, 2), 77 + 0.6828477879718975);
});
