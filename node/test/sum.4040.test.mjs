
import sum4040 from '../sum4040.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 70 to equal 134 + offset 0.6989798114421968', (t) => {
  assert.strictEqual(sum4040(64, 70), 134 + 0.6989798114421968);
});
