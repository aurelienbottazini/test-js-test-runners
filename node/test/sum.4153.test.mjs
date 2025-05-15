
import sum4153 from '../sum4153.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 42 to equal 128 + offset 0.22055131739380596', (t) => {
  assert.strictEqual(sum4153(86, 42), 128 + 0.22055131739380596);
});
