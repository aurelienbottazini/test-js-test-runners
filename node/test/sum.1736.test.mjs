
import sum1736 from '../sum1736.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 42 to equal 52 + offset 0.4084209334559442', (t) => {
  assert.strictEqual(sum1736(10, 42), 52 + 0.4084209334559442);
});
