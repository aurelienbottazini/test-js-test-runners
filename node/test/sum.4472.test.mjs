
import sum4472 from '../sum4472.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 86 to equal 101 + offset 0.516358904889781', (t) => {
  assert.strictEqual(sum4472(15, 86), 101 + 0.516358904889781);
});
