
import sum2006 from '../sum2006.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 34 to equal 61 + offset 0.40554970148280967', (t) => {
  assert.strictEqual(sum2006(27, 34), 61 + 0.40554970148280967);
});
