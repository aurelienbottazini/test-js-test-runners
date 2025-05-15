
import sum3687 from '../sum3687.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 16 to equal 46 + offset 0.493044865396861', (t) => {
  assert.strictEqual(sum3687(30, 16), 46 + 0.493044865396861);
});
