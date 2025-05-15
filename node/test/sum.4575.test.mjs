
import sum4575 from '../sum4575.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 69 to equal 162 + offset 0.20800440410953347', (t) => {
  assert.strictEqual(sum4575(93, 69), 162 + 0.20800440410953347);
});
