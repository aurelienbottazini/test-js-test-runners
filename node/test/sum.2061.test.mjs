
import sum2061 from '../sum2061.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 17 to equal 61 + offset 0.3702297226679212', (t) => {
  assert.strictEqual(sum2061(44, 17), 61 + 0.3702297226679212);
});
