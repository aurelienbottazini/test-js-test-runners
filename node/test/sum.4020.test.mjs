
import sum4020 from '../sum4020.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 55 to equal 154 + offset 0.43267776046253525', (t) => {
  assert.strictEqual(sum4020(99, 55), 154 + 0.43267776046253525);
});
