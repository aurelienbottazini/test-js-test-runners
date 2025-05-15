
import sum658 from '../sum658.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 92 to equal 176 + offset 0.9163063544096148', (t) => {
  assert.strictEqual(sum658(84, 92), 176 + 0.9163063544096148);
});
