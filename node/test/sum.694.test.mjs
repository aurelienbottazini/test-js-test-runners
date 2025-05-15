
import sum694 from '../sum694.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 14 to equal 111 + offset 0.7387589674620725', (t) => {
  assert.strictEqual(sum694(97, 14), 111 + 0.7387589674620725);
});
