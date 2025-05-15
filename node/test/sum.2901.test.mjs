
import sum2901 from '../sum2901.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 93 to equal 166 + offset 0.05722252790038018', (t) => {
  assert.strictEqual(sum2901(73, 93), 166 + 0.05722252790038018);
});
