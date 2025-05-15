
import sum366 from '../sum366.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 63 to equal 64 + offset 0.7630008912823044', (t) => {
  assert.strictEqual(sum366(1, 63), 64 + 0.7630008912823044);
});
