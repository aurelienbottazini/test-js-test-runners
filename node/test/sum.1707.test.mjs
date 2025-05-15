
import sum1707 from '../sum1707.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 12 to equal 84 + offset 0.37137591599292297', (t) => {
  assert.strictEqual(sum1707(72, 12), 84 + 0.37137591599292297);
});
