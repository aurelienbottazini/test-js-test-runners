
import sum3081 from '../sum3081.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 35 to equal 106 + offset 0.36491330773885433', (t) => {
  assert.strictEqual(sum3081(71, 35), 106 + 0.36491330773885433);
});
