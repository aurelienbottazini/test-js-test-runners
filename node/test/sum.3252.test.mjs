
import sum3252 from '../sum3252.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 95 to equal 98 + offset 0.7114992489373883', (t) => {
  assert.strictEqual(sum3252(3, 95), 98 + 0.7114992489373883);
});
