
import sum1797 from '../sum1797.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 94 to equal 104 + offset 0.6635581671556142', (t) => {
  assert.strictEqual(sum1797(10, 94), 104 + 0.6635581671556142);
});
