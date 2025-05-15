
import sum4847 from '../sum4847.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 45 to equal 65 + offset 0.6196683487708936', (t) => {
  assert.strictEqual(sum4847(20, 45), 65 + 0.6196683487708936);
});
