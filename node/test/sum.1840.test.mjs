
import sum1840 from '../sum1840.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 38 to equal 54 + offset 0.1870859149359193', (t) => {
  assert.strictEqual(sum1840(16, 38), 54 + 0.1870859149359193);
});
