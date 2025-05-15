
import sum3041 from '../sum3041.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 86 to equal 159 + offset 0.6365315628879571', (t) => {
  assert.strictEqual(sum3041(73, 86), 159 + 0.6365315628879571);
});
