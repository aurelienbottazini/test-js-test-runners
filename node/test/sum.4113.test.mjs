
import sum4113 from '../sum4113.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 28 to equal 117 + offset 0.3370279058425355', (t) => {
  assert.strictEqual(sum4113(89, 28), 117 + 0.3370279058425355);
});
