
import sum224 from '../sum224.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 68 to equal 89 + offset 0.13479646841011472', (t) => {
  assert.strictEqual(sum224(21, 68), 89 + 0.13479646841011472);
});
