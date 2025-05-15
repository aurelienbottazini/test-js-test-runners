
import sum4101 from '../sum4101.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 98 to equal 181 + offset 0.9448131718621058', (t) => {
  assert.strictEqual(sum4101(83, 98), 181 + 0.9448131718621058);
});
