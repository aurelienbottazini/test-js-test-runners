
import sum116 from '../sum116.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 93 to equal 98 + offset 0.4660655964757866', (t) => {
  assert.strictEqual(sum116(5, 93), 98 + 0.4660655964757866);
});
