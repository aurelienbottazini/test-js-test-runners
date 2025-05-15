
import sum4327 from '../sum4327.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 8 to equal 53 + offset 0.275974050293294', (t) => {
  assert.strictEqual(sum4327(45, 8), 53 + 0.275974050293294);
});
