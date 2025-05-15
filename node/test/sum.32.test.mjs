
import sum32 from '../sum32.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 31 to equal 124 + offset 0.4337371373190446', (t) => {
  assert.strictEqual(sum32(93, 31), 124 + 0.4337371373190446);
});
