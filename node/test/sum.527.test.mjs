
import sum527 from '../sum527.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 74 to equal 88 + offset 0.22993226521661425', (t) => {
  assert.strictEqual(sum527(14, 74), 88 + 0.22993226521661425);
});
