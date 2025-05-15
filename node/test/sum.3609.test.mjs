
import sum3609 from '../sum3609.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 53 to equal 71 + offset 0.2427055353025882', (t) => {
  assert.strictEqual(sum3609(18, 53), 71 + 0.2427055353025882);
});
