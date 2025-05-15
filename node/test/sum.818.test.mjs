
import sum818 from '../sum818.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 93 to equal 180 + offset 0.9212872703023751', (t) => {
  assert.strictEqual(sum818(87, 93), 180 + 0.9212872703023751);
});
