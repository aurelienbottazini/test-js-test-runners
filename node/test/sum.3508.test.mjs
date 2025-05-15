
import sum3508 from '../sum3508.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 18 to equal 55 + offset 0.4062909002861993', (t) => {
  assert.strictEqual(sum3508(37, 18), 55 + 0.4062909002861993);
});
