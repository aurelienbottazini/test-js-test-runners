
import sum655 from '../sum655.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 77 to equal 86 + offset 0.5549254791202619', (t) => {
  assert.strictEqual(sum655(9, 77), 86 + 0.5549254791202619);
});
