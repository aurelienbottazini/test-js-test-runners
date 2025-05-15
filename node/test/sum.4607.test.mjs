
import sum4607 from '../sum4607.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 48 to equal 68 + offset 0.4207031888398436', (t) => {
  assert.strictEqual(sum4607(20, 48), 68 + 0.4207031888398436);
});
