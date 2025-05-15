
import sum464 from '../sum464.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 66 to equal 74 + offset 0.9667287208232759', (t) => {
  assert.strictEqual(sum464(8, 66), 74 + 0.9667287208232759);
});
