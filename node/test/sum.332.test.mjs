
import sum332 from '../sum332.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 57 to equal 119 + offset 0.7399281932371423', (t) => {
  assert.strictEqual(sum332(62, 57), 119 + 0.7399281932371423);
});
