
import sum4996 from '../sum4996.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 65 to equal 96 + offset 0.8485502297821162', (t) => {
  assert.strictEqual(sum4996(31, 65), 96 + 0.8485502297821162);
});
