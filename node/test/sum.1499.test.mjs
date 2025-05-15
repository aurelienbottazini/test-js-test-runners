
import sum1499 from '../sum1499.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 19 to equal 93 + offset 0.4574602814307952', (t) => {
  assert.strictEqual(sum1499(74, 19), 93 + 0.4574602814307952);
});
