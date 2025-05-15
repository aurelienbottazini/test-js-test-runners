
import sum1961 from '../sum1961.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 12 to equal 94 + offset 0.43861624483191186', (t) => {
  assert.strictEqual(sum1961(82, 12), 94 + 0.43861624483191186);
});
