
import sum2254 from '../sum2254.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 7 to equal 90 + offset 0.8708868158315288', (t) => {
  assert.strictEqual(sum2254(83, 7), 90 + 0.8708868158315288);
});
