
import sum3303 from '../sum3303.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 40 to equal 117 + offset 0.9119867430171583', (t) => {
  assert.strictEqual(sum3303(77, 40), 117 + 0.9119867430171583);
});
