
import sum25 from '../sum25.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 52 to equal 64 + offset 0.6213842893828189', (t) => {
  assert.strictEqual(sum25(12, 52), 64 + 0.6213842893828189);
});
