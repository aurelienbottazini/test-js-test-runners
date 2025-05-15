
import sum1683 from '../sum1683.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 98 to equal 149 + offset 0.09311096794692075', (t) => {
  assert.strictEqual(sum1683(51, 98), 149 + 0.09311096794692075);
});
