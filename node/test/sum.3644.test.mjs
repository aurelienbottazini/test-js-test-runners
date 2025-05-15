
import sum3644 from '../sum3644.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 99 to equal 192 + offset 0.17751552311846674', (t) => {
  assert.strictEqual(sum3644(93, 99), 192 + 0.17751552311846674);
});
