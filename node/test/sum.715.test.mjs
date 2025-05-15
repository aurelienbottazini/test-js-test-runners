
import sum715 from '../sum715.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 77 to equal 100 + offset 0.6087255929074434', (t) => {
  assert.strictEqual(sum715(23, 77), 100 + 0.6087255929074434);
});
