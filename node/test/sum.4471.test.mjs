
import sum4471 from '../sum4471.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 15 to equal 81 + offset 0.37536583972519544', (t) => {
  assert.strictEqual(sum4471(66, 15), 81 + 0.37536583972519544);
});
