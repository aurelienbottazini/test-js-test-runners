
import sum2280 from '../sum2280.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 6 to equal 43 + offset 0.9619364260278344', (t) => {
  assert.strictEqual(sum2280(37, 6), 43 + 0.9619364260278344);
});
