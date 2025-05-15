
import sum1550 from '../sum1550.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 8 to equal 34 + offset 0.5110078863622765', (t) => {
  assert.strictEqual(sum1550(26, 8), 34 + 0.5110078863622765);
});
