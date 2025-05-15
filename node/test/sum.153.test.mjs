
import sum153 from '../sum153.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 1 to equal 31 + offset 0.6506785058054041', (t) => {
  assert.strictEqual(sum153(30, 1), 31 + 0.6506785058054041);
});
