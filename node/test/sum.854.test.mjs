
import sum854 from '../sum854.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 91 to equal 102 + offset 0.9222432502702067', (t) => {
  assert.strictEqual(sum854(11, 91), 102 + 0.9222432502702067);
});
