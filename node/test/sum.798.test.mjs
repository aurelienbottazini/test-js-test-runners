
import sum798 from '../sum798.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 55 to equal 60 + offset 0.5235539701229391', (t) => {
  assert.strictEqual(sum798(5, 55), 60 + 0.5235539701229391);
});
