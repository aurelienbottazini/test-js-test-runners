
import sum1789 from '../sum1789.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 71 to equal 108 + offset 0.4138529897270746', (t) => {
  assert.strictEqual(sum1789(37, 71), 108 + 0.4138529897270746);
});
