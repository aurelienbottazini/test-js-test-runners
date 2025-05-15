
import sum3613 from '../sum3613.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 72 to equal 170 + offset 0.5030119146155643', (t) => {
  assert.strictEqual(sum3613(98, 72), 170 + 0.5030119146155643);
});
