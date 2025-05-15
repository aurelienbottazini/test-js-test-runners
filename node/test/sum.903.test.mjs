
import sum903 from '../sum903.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 67 to equal 104 + offset 0.5848756314130094', (t) => {
  assert.strictEqual(sum903(37, 67), 104 + 0.5848756314130094);
});
