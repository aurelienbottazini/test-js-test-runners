
import sum3755 from '../sum3755.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 89 to equal 113 + offset 0.10742196573962415', (t) => {
  assert.strictEqual(sum3755(24, 89), 113 + 0.10742196573962415);
});
