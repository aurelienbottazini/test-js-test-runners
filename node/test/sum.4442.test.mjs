
import sum4442 from '../sum4442.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 44 to equal 107 + offset 0.767222483252123', (t) => {
  assert.strictEqual(sum4442(63, 44), 107 + 0.767222483252123);
});
