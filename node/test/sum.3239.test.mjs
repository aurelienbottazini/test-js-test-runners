
import sum3239 from '../sum3239.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 33 to equal 80 + offset 0.33123117352493736', (t) => {
  assert.strictEqual(sum3239(47, 33), 80 + 0.33123117352493736);
});
