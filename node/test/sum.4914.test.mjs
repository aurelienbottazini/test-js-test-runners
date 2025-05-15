
import sum4914 from '../sum4914.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 73 to equal 79 + offset 0.8361833672766373', (t) => {
  assert.strictEqual(sum4914(6, 73), 79 + 0.8361833672766373);
});
