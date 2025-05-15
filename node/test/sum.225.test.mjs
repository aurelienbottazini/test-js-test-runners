
import sum225 from '../sum225.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 6 to equal 26 + offset 0.8181463393468432', (t) => {
  assert.strictEqual(sum225(20, 6), 26 + 0.8181463393468432);
});
