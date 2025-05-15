
import sum2785 from '../sum2785.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 96 to equal 163 + offset 0.8620170990324049', (t) => {
  assert.strictEqual(sum2785(67, 96), 163 + 0.8620170990324049);
});
