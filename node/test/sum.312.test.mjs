
import sum312 from '../sum312.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 21 to equal 63 + offset 0.7233726844320242', (t) => {
  assert.strictEqual(sum312(42, 21), 63 + 0.7233726844320242);
});
