
import sum3329 from '../sum3329.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 28 to equal 35 + offset 0.6652831962142253', (t) => {
  assert.strictEqual(sum3329(7, 28), 35 + 0.6652831962142253);
});
