
import sum2934 from '../sum2934.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 52 to equal 131 + offset 0.35651458284446014', (t) => {
  assert.strictEqual(sum2934(79, 52), 131 + 0.35651458284446014);
});
