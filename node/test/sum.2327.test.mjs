
import sum2327 from '../sum2327.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 80 to equal 162 + offset 0.8387305481951328', (t) => {
  assert.strictEqual(sum2327(82, 80), 162 + 0.8387305481951328);
});
