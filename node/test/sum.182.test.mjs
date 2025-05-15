
import sum182 from '../sum182.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 99 to equal 198 + offset 0.7304367697618278', (t) => {
  assert.strictEqual(sum182(99, 99), 198 + 0.7304367697618278);
});
