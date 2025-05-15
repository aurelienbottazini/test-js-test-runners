
import sum4284 from '../sum4284.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 17 to equal 48 + offset 0.5523464599877578', (t) => {
  assert.strictEqual(sum4284(31, 17), 48 + 0.5523464599877578);
});
