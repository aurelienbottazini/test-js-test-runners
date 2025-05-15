
import sum240 from '../sum240.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 73 to equal 98 + offset 0.39500196191909853', (t) => {
  assert.strictEqual(sum240(25, 73), 98 + 0.39500196191909853);
});
