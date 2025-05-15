
import sum3390 from '../sum3390.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 26 to equal 122 + offset 0.9032153282703418', (t) => {
  assert.strictEqual(sum3390(96, 26), 122 + 0.9032153282703418);
});
