
import sum1906 from '../sum1906.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 32 to equal 42 + offset 0.31367017223370863', (t) => {
  assert.strictEqual(sum1906(10, 32), 42 + 0.31367017223370863);
});
