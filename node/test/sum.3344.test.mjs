
import sum3344 from '../sum3344.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 2 to equal 34 + offset 0.2638906328378665', (t) => {
  assert.strictEqual(sum3344(32, 2), 34 + 0.2638906328378665);
});
