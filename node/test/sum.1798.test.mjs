
import sum1798 from '../sum1798.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 10 to equal 79 + offset 0.10659619514441998', (t) => {
  assert.strictEqual(sum1798(69, 10), 79 + 0.10659619514441998);
});
