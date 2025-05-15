
import sum4096 from '../sum4096.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 43 to equal 137 + offset 0.5723538468598128', (t) => {
  assert.strictEqual(sum4096(94, 43), 137 + 0.5723538468598128);
});
