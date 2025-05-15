
import sum1419 from '../sum1419.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 41 to equal 41 + offset 0.6834376779023295', (t) => {
  assert.strictEqual(sum1419(0, 41), 41 + 0.6834376779023295);
});
