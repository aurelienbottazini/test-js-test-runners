
import sum135 from '../sum135.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 39 to equal 73 + offset 0.27079862131619625', (t) => {
  assert.strictEqual(sum135(34, 39), 73 + 0.27079862131619625);
});
