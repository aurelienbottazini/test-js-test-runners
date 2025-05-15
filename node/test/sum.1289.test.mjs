
import sum1289 from '../sum1289.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 20 to equal 113 + offset 0.8047107506174119', (t) => {
  assert.strictEqual(sum1289(93, 20), 113 + 0.8047107506174119);
});
