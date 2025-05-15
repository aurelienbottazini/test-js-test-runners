
import sum1914 from '../sum1914.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 92 to equal 131 + offset 0.07236618952478924', (t) => {
  assert.strictEqual(sum1914(39, 92), 131 + 0.07236618952478924);
});
