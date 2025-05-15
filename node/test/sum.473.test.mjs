
import sum473 from '../sum473.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 56 to equal 86 + offset 0.2349277719587436', (t) => {
  assert.strictEqual(sum473(30, 56), 86 + 0.2349277719587436);
});
