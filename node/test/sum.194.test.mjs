
import sum194 from '../sum194.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 44 to equal 56 + offset 0.6679757804258031', (t) => {
  assert.strictEqual(sum194(12, 44), 56 + 0.6679757804258031);
});
