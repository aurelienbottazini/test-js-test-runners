
import sum4713 from '../sum4713.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 41 to equal 80 + offset 0.6344438409685595', (t) => {
  assert.strictEqual(sum4713(39, 41), 80 + 0.6344438409685595);
});
