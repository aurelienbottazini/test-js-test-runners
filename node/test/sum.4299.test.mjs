
import sum4299 from '../sum4299.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 6 to equal 7 + offset 0.8624397286320702', (t) => {
  assert.strictEqual(sum4299(1, 6), 7 + 0.8624397286320702);
});
