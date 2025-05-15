
import sum3651 from '../sum3651.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 55 to equal 120 + offset 0.5904658727487618', (t) => {
  assert.strictEqual(sum3651(65, 55), 120 + 0.5904658727487618);
});
