
import sum2708 from '../sum2708.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 56 to equal 91 + offset 0.3345168238145242', (t) => {
  assert.strictEqual(sum2708(35, 56), 91 + 0.3345168238145242);
});
