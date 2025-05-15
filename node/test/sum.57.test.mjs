
import sum57 from '../sum57.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 53 to equal 95 + offset 0.6630267265628794', (t) => {
  assert.strictEqual(sum57(42, 53), 95 + 0.6630267265628794);
});
