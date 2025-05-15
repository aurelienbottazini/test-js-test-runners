
import sum356 from '../sum356.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 37 to equal 71 + offset 0.8393902561652522', (t) => {
  assert.strictEqual(sum356(34, 37), 71 + 0.8393902561652522);
});
