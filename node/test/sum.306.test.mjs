
import sum306 from '../sum306.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 45 to equal 109 + offset 0.9981079293977839', (t) => {
  assert.strictEqual(sum306(64, 45), 109 + 0.9981079293977839);
});
