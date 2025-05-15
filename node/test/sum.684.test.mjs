
import sum684 from '../sum684.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 81 to equal 104 + offset 0.952473771229423', (t) => {
  assert.strictEqual(sum684(23, 81), 104 + 0.952473771229423);
});
