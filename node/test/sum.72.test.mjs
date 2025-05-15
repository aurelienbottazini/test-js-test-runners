
import sum72 from '../sum72.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 99 to equal 154 + offset 0.9092281586489179', (t) => {
  assert.strictEqual(sum72(55, 99), 154 + 0.9092281586489179);
});
