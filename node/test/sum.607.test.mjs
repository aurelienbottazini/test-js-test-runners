
import sum607 from '../sum607.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 38 to equal 136 + offset 0.6203869595841299', (t) => {
  assert.strictEqual(sum607(98, 38), 136 + 0.6203869595841299);
});
