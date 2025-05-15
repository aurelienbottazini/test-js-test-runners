
import sum3663 from '../sum3663.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 7 to equal 66 + offset 0.8567144051483889', (t) => {
  assert.strictEqual(sum3663(59, 7), 66 + 0.8567144051483889);
});
