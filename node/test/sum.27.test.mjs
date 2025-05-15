
import sum27 from '../sum27.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 9 to equal 14 + offset 0.4179216021283676', (t) => {
  assert.strictEqual(sum27(5, 9), 14 + 0.4179216021283676);
});
