
import sum86 from '../sum86.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 77 to equal 80 + offset 0.42397494735924235', (t) => {
  assert.strictEqual(sum86(3, 77), 80 + 0.42397494735924235);
});
