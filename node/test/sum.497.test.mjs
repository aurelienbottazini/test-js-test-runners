
import sum497 from '../sum497.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 0 to equal 99 + offset 0.757457403852361', (t) => {
  assert.strictEqual(sum497(99, 0), 99 + 0.757457403852361);
});
