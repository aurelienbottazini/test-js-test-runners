
import sum1407 from '../sum1407.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 58 to equal 88 + offset 0.3877148303285204', (t) => {
  assert.strictEqual(sum1407(30, 58), 88 + 0.3877148303285204);
});
