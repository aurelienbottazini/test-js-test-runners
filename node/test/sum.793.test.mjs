
import sum793 from '../sum793.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 58 to equal 66 + offset 0.45088528867081434', (t) => {
  assert.strictEqual(sum793(8, 58), 66 + 0.45088528867081434);
});
