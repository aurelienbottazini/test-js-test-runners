
import sum1563 from '../sum1563.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 23 to equal 28 + offset 0.7626708701044502', (t) => {
  assert.strictEqual(sum1563(5, 23), 28 + 0.7626708701044502);
});
