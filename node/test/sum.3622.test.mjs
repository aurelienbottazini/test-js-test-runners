
import sum3622 from '../sum3622.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 9 to equal 76 + offset 0.778843934090497', (t) => {
  assert.strictEqual(sum3622(67, 9), 76 + 0.778843934090497);
});
