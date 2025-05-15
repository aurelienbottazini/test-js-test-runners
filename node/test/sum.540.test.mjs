
import sum540 from '../sum540.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 74 to equal 96 + offset 0.48786389614317915', (t) => {
  assert.strictEqual(sum540(22, 74), 96 + 0.48786389614317915);
});
