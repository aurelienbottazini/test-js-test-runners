
import sum1894 from '../sum1894.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 43 to equal 131 + offset 0.31208786505181774', (t) => {
  assert.strictEqual(sum1894(88, 43), 131 + 0.31208786505181774);
});
