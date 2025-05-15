
import sum274 from '../sum274.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 27 to equal 112 + offset 0.7382651747005499', (t) => {
  assert.strictEqual(sum274(85, 27), 112 + 0.7382651747005499);
});
