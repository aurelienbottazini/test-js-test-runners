
import sum1474 from '../sum1474.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 78 to equal 120 + offset 0.8926815094294129', (t) => {
  assert.strictEqual(sum1474(42, 78), 120 + 0.8926815094294129);
});
