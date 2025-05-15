
import sum713 from '../sum713.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 20 to equal 32 + offset 0.7993667009352967', (t) => {
  assert.strictEqual(sum713(12, 20), 32 + 0.7993667009352967);
});
