
import sum440 from '../sum440.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 45 to equal 78 + offset 0.5802762148892822', (t) => {
  assert.strictEqual(sum440(33, 45), 78 + 0.5802762148892822);
});
