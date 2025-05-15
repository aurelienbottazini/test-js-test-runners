
import sum11 from '../sum11.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 75 to equal 138 + offset 0.09073644481874021', (t) => {
  assert.strictEqual(sum11(63, 75), 138 + 0.09073644481874021);
});
