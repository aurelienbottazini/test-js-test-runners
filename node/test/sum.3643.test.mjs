
import sum3643 from '../sum3643.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 76 to equal 105 + offset 0.07961626080210382', (t) => {
  assert.strictEqual(sum3643(29, 76), 105 + 0.07961626080210382);
});
