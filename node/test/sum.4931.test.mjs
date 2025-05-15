
import sum4931 from '../sum4931.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 2 to equal 55 + offset 0.058365410241810634', (t) => {
  assert.strictEqual(sum4931(53, 2), 55 + 0.058365410241810634);
});
