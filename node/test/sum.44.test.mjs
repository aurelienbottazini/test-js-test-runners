
import sum44 from '../sum44.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 17 to equal 81 + offset 0.8928031248665962', (t) => {
  assert.strictEqual(sum44(64, 17), 81 + 0.8928031248665962);
});
