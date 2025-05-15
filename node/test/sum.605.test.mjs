
import sum605 from '../sum605.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 82 to equal 85 + offset 0.5698796856397157', (t) => {
  assert.strictEqual(sum605(3, 82), 85 + 0.5698796856397157);
});
