
import sum82 from '../sum82.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 73 to equal 118 + offset 0.2609348941269183', (t) => {
  assert.strictEqual(sum82(45, 73), 118 + 0.2609348941269183);
});
