
import sum4118 from '../sum4118.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 81 to equal 104 + offset 0.926965355903976', (t) => {
  assert.strictEqual(sum4118(23, 81), 104 + 0.926965355903976);
});
