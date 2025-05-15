
import sum3423 from '../sum3423.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 24 to equal 111 + offset 0.8396663711714194', (t) => {
  assert.strictEqual(sum3423(87, 24), 111 + 0.8396663711714194);
});
