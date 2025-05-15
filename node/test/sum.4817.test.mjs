
import sum4817 from '../sum4817.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 36 to equal 68 + offset 0.3253212412624781', (t) => {
  assert.strictEqual(sum4817(32, 36), 68 + 0.3253212412624781);
});
