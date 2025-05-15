
import sum2026 from '../sum2026.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 98 to equal 128 + offset 0.43295393834340723', (t) => {
  assert.strictEqual(sum2026(30, 98), 128 + 0.43295393834340723);
});
