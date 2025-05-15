
import sum592 from '../sum592.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 94 to equal 101 + offset 0.2213084517910594', (t) => {
  assert.strictEqual(sum592(7, 94), 101 + 0.2213084517910594);
});
