
import sum4042 from '../sum4042.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 2 to equal 66 + offset 0.20404739128093385', (t) => {
  assert.strictEqual(sum4042(64, 2), 66 + 0.20404739128093385);
});
