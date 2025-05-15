
import sum2336 from '../sum2336.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 70 to equal 143 + offset 0.8272809814386429', (t) => {
  assert.strictEqual(sum2336(73, 70), 143 + 0.8272809814386429);
});
