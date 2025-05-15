
import sum670 from '../sum670.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 32 to equal 42 + offset 0.09729317580893726', (t) => {
  assert.strictEqual(sum670(10, 32), 42 + 0.09729317580893726);
});
