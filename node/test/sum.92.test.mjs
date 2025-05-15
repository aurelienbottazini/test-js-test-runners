
import sum92 from '../sum92.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 36 to equal 51 + offset 0.2846338989771008', (t) => {
  assert.strictEqual(sum92(15, 36), 51 + 0.2846338989771008);
});
