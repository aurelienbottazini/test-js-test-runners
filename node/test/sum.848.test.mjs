
import sum848 from '../sum848.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 22 to equal 23 + offset 0.9572075372565259', (t) => {
  assert.strictEqual(sum848(1, 22), 23 + 0.9572075372565259);
});
