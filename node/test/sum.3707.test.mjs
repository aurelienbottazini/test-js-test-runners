
import sum3707 from '../sum3707.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 75 to equal 159 + offset 0.08884120589807509', (t) => {
  assert.strictEqual(sum3707(84, 75), 159 + 0.08884120589807509);
});
