
import sum2165 from '../sum2165.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 65 to equal 122 + offset 0.9958749735343806', (t) => {
  assert.strictEqual(sum2165(57, 65), 122 + 0.9958749735343806);
});
