
import sum875 from '../sum875.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 86 to equal 93 + offset 0.9921303035583836', (t) => {
  assert.strictEqual(sum875(7, 86), 93 + 0.9921303035583836);
});
