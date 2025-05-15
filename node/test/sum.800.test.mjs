
import sum800 from '../sum800.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 4 to equal 35 + offset 0.6137932278182452', (t) => {
  assert.strictEqual(sum800(31, 4), 35 + 0.6137932278182452);
});
